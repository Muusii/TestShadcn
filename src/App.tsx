import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';
import { Calendar } from '@/components/ui/calendar';
import Footer from '@/components/ui/footer';
import List from "@/Lists/list";
import Hover from "@/Lists/hovers";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col h-min bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Navbar/>
              {/* Menubar */}    
        <div className=" flex-grow flex-row flex justify-end pl-4">
          
          <Menubar className='text-fuchsia-500'>
            <MenubarMenu>
              <MenubarTrigger>HOME</MenubarTrigger>
              <MenubarContent>
                <Hover />
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>ABOUT US</MenubarTrigger>
              <MenubarContent className='text-right'>
                <p>Welcome to TaskManager, your ultimate companion in productivity and organization.</p>
                <p>At TaskManager, we understand the challenges of modern life, where demands pull us in multiple directions simultaneously.</p>
                <p>That's why we've crafted a solution that empowers you to take control of your tasks and achieve your goals with ease.</p>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View Tasks</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>Show all tasks</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show uncomplete tasks</MenubarCheckboxItem>
                <MenubarItem inset>Reload</MenubarItem>
                <MenubarItem inset>Force Reload</MenubarItem>
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>SIGN IN</MenubarTrigger>
              <MenubarContent>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      {/* </Navbar> */}
      <div className="flex flex-1 ml-1 ">
        <Sidebar/>
        <div className="flex flex-row justify-self-stretch flex-1 h-min ml-4  bg-gradient-to-r from-pink-500 to-yellow-500 ...">
          <List />
          <div className="flex flex-row flex-grow flex-1 ml-80 h-min">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>        
        </div>
        </div>
        <div className='flex flex-col justify-end flex-1'>
          <Footer />
        </div>
          
    </div>
      
  );
}

export default App;
