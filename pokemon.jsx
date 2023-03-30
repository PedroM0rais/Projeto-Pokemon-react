import { useState } from "react"
import axios from 'axios'

function Pokemon(){

    const [pesquisa, setPesquisa] = useState()
    const [pokemon, setPokemon] = useState("vazio")

    const getPokemon = async ()=> {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/arceus/`)
        
        setPokemon(response.data)

        console.log(pokemon, sprites, front_default)

    }

    return(


        
      
        <div>
            {/* <input type="text" onChange={(e)=> setPesquisa(e.target.value)}/> */}

            <button onClick={getPokemon(pesquisa)}>Pesquisar</button>

            {
                pokemon === "vazio" ?
                <h2>Nada Pesquisado Ainda</h2>


                :


                <div>
                    <h2>Resultado da pesquisa</h2>
                    <img src={pokemon. sprites. front_default} alt={pokemon.name} />
                    <p>Nome: {pokemon.name}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <p>Altura: {pokemon.height / 10}</p> 
                    <p>Tipo: {pokemon.types[0].type.name}</p>
                    
                </div>
            }

        </div>


    )
}

export default Pokemon