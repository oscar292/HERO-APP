import { useParams, Navigate, useNavigate } from "react-router"
import { getHeroById } from "../../selectors/getHeroById";
import { useMemo } from "react";
import { heroImages } from "../helpers/heroImages";


export const HeroeScreen = () => {
    const {heroeId} = useParams();
    const navigate = useNavigate();
    const hero = useMemo(()=>getHeroById(heroeId),[heroeId]);

    if(!hero) {
        return <Navigate to="/" />
    }

    const handleReturn =()=>{
        navigate(-1); 
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            
            <div className="col-4">
                <img 
                    src={heroImages(`./${heroeId}.jpg`)}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">

                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item"><b>Alter edo:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Alter edo:</b> {publisher}</li>
                    <li className="list-group-item"><b>Alter edo:</b> {first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
