import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";
import AddRecipe from "./pages/add-recipe";

const myrouter = createBrowserRouter([
  {path:"/", element: <Recipes/>}, 
  {path: "/recipes", element: <Recipes/>}, 
  {path: "/recipes/:id", element: <Recipe/>},
  {path: "/add-recipe", element: <AddRecipe/>}
]);

function App() {
  return (
    <>
    <Navbar />   
   <RouterProvider router={myrouter} />
    </>
  );
}

export default App;
