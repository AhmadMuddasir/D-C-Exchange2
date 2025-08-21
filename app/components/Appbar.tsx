"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { PrimaryButton } from "./Button";
const Appbar = () => {
     const session = useSession();
     return (
          <div className="border-b px-2 py-2 flex justify-between">
               <div className="text-xl font-bold flex flex-col justify-center">
                    DC EXchange
               </div>
               <div>
                    {session.data?.user ?
                     <PrimaryButton onClick={() => {
                         signOut()
                    }}>Logout</PrimaryButton>
                         : <PrimaryButton onClick={() => {
                              signIn()
                         }}>signIn</PrimaryButton>
                    }
               </div>
          </div>
     )
}

export default Appbar