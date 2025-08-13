import { getHeroesByPublisher } from "../../selectors/getHeroeByPublisher";

export const HeroeList = ({publisher}) => {
    
    const heroes = getHeroesByPublisher(publisher);

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return (
        <>
            <h1>Heroe List - {publisher}</h1>
            <ul>
                {
                    heroes.map(hero =>(
                        <li key={heroes.id}>
                            {hero.superhero}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
