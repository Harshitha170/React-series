import config from '../config/config.js';
import { Client, Account, ID} from "appwrite";

export class AuthService{ //class to handle all authentication-related operations
    client = new Client(); //properties
    account;

    constructor(){
        this.client

       .setEndpoint(config.appwriteUrl)
       .setProject(config.appwriteProjectId)

     this.account = new Account(this.client);  
    }

    // Method used to create/register a new user account
    async createAccount({email, password, name}){
        try {
          const userAccount =  await this.account.create(ID.unique(), email, password, name);
          if (userAccount) {
            //call another method

          }else {
            return userAccount;
          }
        } catch (error) {
            throw error;
        }
    }

    // Method used to log an existing user into the application
    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
 // Method used to get information about the currently logged-in user
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service:: getCurrentUser :: error", error);  
        }
        return null;
    }
 // Method used to log the user out
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            
        }

    }
}

const authService = new AuthService(); //object

export default authService;