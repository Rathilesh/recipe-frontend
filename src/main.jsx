import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.jsx';
import NoPage from './pages/NoPage.jsx';
import RecipeDetails from './pages/RecipeDetails.jsx';
import RecipeDetailsByCategory from './pages/CategoryRecipe.jsx';
import SearchedRecipe from './pages/SearchedRecipe.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<App />} />
           <Route path="recipe-details/:id" element={<RecipeDetails />} />
           <Route path="category-recepies/:id" element={<RecipeDetailsByCategory />} />
           <Route path="search/:query" element={<SearchedRecipe />} />
           <Route path="*" element={<NoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
</React.StrictMode>
  
    
  ,
)
