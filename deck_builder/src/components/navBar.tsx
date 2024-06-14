'use client';
import {
    AppBar, 
    Box, 
    Toolbar,  
    Container,
    Button, 
 } from "@mui/material";

 import { useRouter } from 'next/navigation';
 import Link from 'next/link';

 export default function NavBar(){

    const router = useRouter();

    const links = [

        {name: "home", url: "/"},
        {name: "Magic", url: "/mtg"},
        {name: "Yugioh", url: "/ygo"}

    ];
    
    return(

        <header>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        {links.map((link, i) => (
                        <Link key={i} href={link.url} passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {link.name}
                            </Button>
                        </Link>
                        ))}
                    </Box>

                    </Toolbar>
                </Container>
            </AppBar>

        </header>

    );

 }