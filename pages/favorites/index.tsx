import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritesPokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {

  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritesPokemons(localFavorites.pokemons());
  }, [])
  
  return (
    <Layout title="Favorites">
      {
        favoritesPokemons.length === 0
          ? (<NoFavorites />)
          :(<FavoritesPokemons favoritesPokemons={favoritesPokemons}/>)
      }
    </Layout>
  )
}

export default FavoritesPage;