import {
  Alert,
  Box,
  Collapse,
  Container,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Navbar from "../../components/navbar";

export const countries = [
  { value: "GH", label: "Ghana" },
  { value: "NG", label: "Nigeria" },
  { value: "BE", label: "Benin" },
  { value: "TG", label: "Togo" },
];

export default function AddRecipe() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("New Recipe Added Successfully!");

  const addRecipe = async (event) => {
    // Set loading to true
    setLoading(true);
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Post form data to the backend
    const response = await fetch(
      `${process.env.REACT_APP_RECIPE_API_BASE_URL}/recipes`,
      {
        method: "POST",
        body: formData,
        // or if you dont want to post form data you can use 
        // body: JSON.stringify({
        // title: formData.get("title"),
        // description: formData.get("description")
        // }),
        // headers: {
        // "Content-Type": "application/json"
        // }
      }
    );
    // Update message based on response status
    if (response.status !== 201){
      setMessage("Failed to add recipe");
    }
    // Open collapsible Alert
    setOpen(true)
    // Set loading to false
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ my: "2rem" }} maxWidth="sm">
        <h1>Add A New Recipe</h1>
        <form onSubmit={addRecipe}>
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="title"
            label="Recipe Title"
          />
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="description"
            label="Recipe Description"
            multiline
            rows={4}
          />
          <TextField
            sx={{ mb: "2rem" }}
            InputLabelProps={{
              shrink: true,
            }}
            type="file"
            fullWidth
            name="image"
            label="Recipe Image"
          />
          <TextField
            sx={{ mb: "2rem" }}
            select
            fullWidth
            name="country"
            label="Recipe Country"
            defaultValue="GH"
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box textAlign="center">
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {message}
              </Alert>
            </Collapse>

            <LoadingButton
              sx={{ width: "50%" }}
              loading={loading}
              type="submit"
              size="large"
              variant="contained"
              color="success"
            >
              Add New Recipe
            </LoadingButton>
          </Box>
        </form>
      </Container>
    </>
  );
}
