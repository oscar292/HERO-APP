import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hook/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../heroe/HeroeCard";
import { useMemo } from "react";

export const SearchSreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const [formValues, handleInpuChange] = useForm({searchText: q,});
    const {searchText} = formValues;
    const heroesFilter = useMemo(()=>getHeroesByName(q),[q]);

    const handleSearch = (e)=>{
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Busquedas</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInpuChange}
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                        >
                            Buscar ...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q==='') ?<div className="alert alert-info">Buscar un heroe</div>
                        :(heroesFilter.length===0) && <div className="alert alert-danger">No hay resultados: {q}</div>
                    }

                    {
                        heroesFilter.map(heroe=>(
                            <HeroCard 
                                key = {heroe.id}
                                {...heroe}
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}