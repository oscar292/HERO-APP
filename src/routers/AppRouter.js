import { LoginScreen } from '../components/login/LoginScreen';
import { BrowserRouter,Routes,Route } from 'react-router';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                } />
                
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}