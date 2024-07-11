"use client" 
import { SessionProvider } from 'next-auth/react';
import React from 'react'


function Providers({children}: { children: React.ReactNode }) {
  return (
   <SessionProvider>
        {children}
   </SessionProvider>
  )
}

export default Providers

// --Providers fonksiyonu: Bu fonksiyon, uygulama içerisindeki diğer bileşenleri SessionProvider bileşeniyle sarmalar.
//  Bu sayede tüm bileşenler useSession kancası aracılığıyla oturum verilerine erişebilir.

// --children prop'u: Bu prop, Providers bileşeni içerisinde yer alan diğer bileşenleri temsil eder. SessionProvider bileşeni bu bileşenleri sarmalar.
// --SessionProvider bileşeni: Bu bileşen, NextAuth.js tarafından sağlanan oturum verilerini React uygulamasına enjekte eder. Oturum bilgileri uygulama genelinde kullanılabilir hale gelir.