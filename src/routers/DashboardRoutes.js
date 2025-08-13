import { Routes,Route } from 'react-router'
import { Navbar } from "../components/ui/Navbar";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {SearchSreen} from "../components/search/SearchSreen";
import {HeroeScreen} from '../components/heroe/HeroeScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelScreen/>} />
                    <Route path="dc" element={<DcScreen/>} />
                    <Route path="search" element={<SearchSreen/>} />
                    <Route path="heroe" element={<HeroeScreen />}/>
                    <Route path="" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}