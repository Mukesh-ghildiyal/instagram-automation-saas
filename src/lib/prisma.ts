import {PrismaClient} from '@prisma/client'

//for this we can interact with our db and mutating in data

declare global{
    //it can accessible in our whole app
    var prisma : PrismaClient | undefined
}
export const client = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production' ) globalThis.prisma = client