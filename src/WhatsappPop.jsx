import React from 'react'
// import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { FloatingWhatsApp } from 'react-floating-whatsapp' 
import Image1 from "./LOGO/logo.png"

export default function WhatsappPop (){

  return (
      <FloatingWhatsApp 
      phoneNumber='+243997076878'
      accountName='ASEF a.s.b.l.'  
      chatMessage='Bonjour!'
      avatar={Image1}
      modil
      />
  )
}
