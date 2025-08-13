import { LoginScreen } from '../components/login/LoginScreen'
import { BrowserRouter,Routes,Route } from 'react-router'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen/>} />
                <Route path='/*' element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}