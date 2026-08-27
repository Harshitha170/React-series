import React from 'react'
import {Container, Logo, LogoutBtn } from '../index'
import {Link} from 'react-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigat
  return (
    <div>
      
    </div>
  )
}

export default Header
