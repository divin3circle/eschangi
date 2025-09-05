"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import React from 'react'
import { Button } from './ui/button'
import { useGetLanguages } from '@/hooks/useGetLanguages'

function LanguageToggle() {
    const { selectedLanguage, setSelectedLanguage } = useGetLanguages()
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild className="">
      <Button variant="outline" size="icon">
        <p className='text-sm font-sans font-semibold'>{selectedLanguage.toUpperCase()}</p>
        <span className="sr-only">Toggle language</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setSelectedLanguage("en")} className='hover:opacity-80 transition-all ease-in-out duration-300 font-sans'>
        English
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setSelectedLanguage("sw")} className='hover:opacity-80 transition-all ease-in-out duration-300 font-sans'>
        Swahili
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default LanguageToggle
