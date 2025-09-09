import NextAuth from "next-auth"
//its is use to signIn with google
import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db"
import { create } from "domain";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID?? " ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET?? " "
    })
  ],
  callbacks:{
    async signIn({user,account,profile,email,credentials}){
      console.log({user,account,profile,email,credentials});
      if(account?.provider === 'google'){
        const email = user.email;
        if(!email) return false;
      }
      const userDB = db.user.findFirst({
        where:{
          username:email
        }
      })
      if(userDB){
        return true;
      }
      await db.user.create({
        data:{
          username:email,
          provider:"Google",
          solWallet:{
            create:{
              publicKey:"",
              privateKey:""
            }
          },
          inrWallet:{
            create:{
              balance:0
            }
          }
        }
      })
      return true;
    }
  }
})

export { handler as GET, handler as POST }


