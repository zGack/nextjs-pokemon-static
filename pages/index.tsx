import { ReactElement } from "react";
import { GetStaticProps } from 'next'
import { Card, Grid, Image, Row, Text } from '@nextui-org/react';

import { Layout } from "../components/layouts";
import { NextPageWithLayout } from './_app';
import { pokeApi } from '../api';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPageWithLayout<Props> = ({pokemons}) => {

  return (
    <>
      {/* TODO: Crear un componente para el grid container */}
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke}/>
          ))
        }
      </Grid.Container>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Listado de Pokemons">
      { page }
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, id) => ({
    ...poke, 
    id: id+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`,
  }));

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg

  return {
    props: {
      pokemons 
    }
  }
}

export default HomePage;