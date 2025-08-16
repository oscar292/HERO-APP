import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroeByPublisher";
import { HeroCard } from "./HeroeCard";

export const HeroeList = ({publisher}) => {
    
    const heroes = useMemo(()=>
        getHeroesByPublisher(publisher),[publisher]);

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero =>(
                    <HeroCard 
                        key={hero.id} 
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
