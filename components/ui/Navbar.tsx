import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import NextLink from 'next/link';


/*

<NextLink>
  <Link>
    <Text color='white' h2></Text>
    <Text color='white' h2></Text>
  </Link>
</NextLink>


*/

export const Navbar = () => {

  // const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: '#11181C'
    }}>
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <NextLink legacyBehavior href="/" passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{flex: 1}}/>
      <NextLink legacyBehavior href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
