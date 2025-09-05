import React from 'react'
import { ModeToggle } from '../toggle-theme'
import { Briefcase, Menu } from 'lucide-react'
import Link from 'next/link'
import { navigationItems } from '@/lib/utils'
import LanguageToggle from '../language-toggle'
import { Button } from '../ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import Image from 'next/image'

function Header() {
  return (
    <div className='flex items-center justify-between mt-4'>
      <div className='flex items-center gap-3'>
        <Image src="/logo.png" alt="Wambilianga & CO. Advocates" width={50} height={50} />
        <h1 className='text-lg font-sans flex flex-col font-bold'>Wambilianga 
            <span className='text-base font-semibold'>& CO. Advocates</span>
        </h1>
      </div>
     <div className='items-center gap-4 flex flex-row'>
     <div className='justify-between items-center gap-4 hidden md:flex flex-row'>
        {navigationItems.map((item) => (
          <Link href={item.href} key={item.label} className='text-sm font-sans font-semibold hover:opacity-80 transition-all ease-in-out duration-300 hover:underline'>
            {item.label}
          </Link>
        ))}
      </div>
      <div className=' items-center gap-4 hidden md:flex'>
      <LanguageToggle />
      <ModeToggle />
      <Button variant="default" className='font-sans font-semibold rounded-md'>
        Client Portal
      </Button>
      </div>
      <Drawer>
        <DrawerTrigger>
        <Button variant="outline" size="icon" className='md:hidden'>
            <Menu size={36} />
        </Button>
    </DrawerTrigger>
    <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>
      <div className='flex items-center gap-3 w-full justify-center'>
      <Image src="/logo.png" alt="Wambilianga & CO. Advocates" width={50} height={50} />
        <h1 className='text-lg font-sans flex flex-col font-bold'>Wambilianga
            <span className='text-base font-semibold'>& CO. Advocates</span>
        </h1>
      </div>
      </DrawerTitle>
    </DrawerHeader>
    <div className='flex flex-col gap-4 px-4'>
        {navigationItems.map((item) => (
            <Link href={item.href} key={item.label} className='text-lg uppercase font-sans font-semibold hover:opacity-80 transition-all my-2 ease-in-out duration-300 hover:underline'>
              {item.label}
            </Link>
          ))}
         <div className='flex items-center justify-between gap-1'>
         <LanguageToggle />
         <ModeToggle />
         </div>
    </div>
    <DrawerFooter className='flex flex-row justify-between gap-4 px-4'>
      <Button className='w-1/2'>Client Portal</Button>
      <DrawerClose className='w-1/2'>
        <Button variant="outline" className='w-full'>Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
  </Drawer>
     </div>
  
</div>
  )
}

export default Header
