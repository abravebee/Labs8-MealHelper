import {
  ADDING_INGREDIENT,
  ADDED_INGREDIENT,
  ADDING_INGREDIENT_ERROR,
  GETTING_INGREDIENT,
  GOT_INGREDIENT,
  GETTING_INGREDIENT_ERROR,
  UPDATING_INGREDIENT,
  UPDATED_INGREDIENT,
  UPDATING_INGREDIENT_ERROR,
  DELETING_INGREDIENT,
  DELETED_INGREDIENT,
  DELETING_INGREDIENT_ERROR
} from "../actions/ingredActions";

let initialState = {
  ingredient: [],
  addingIngredient: false,
  gettingIngredient: false,
  deletingIngredient: false,
  deletedIngredient: false,
  error: null
};

export const ingredsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_INGREDIENT:
      //Initial adding ingredient
      return { ...state, addingIngredient: true };
    case ADDED_INGREDIENT:
      //Adds ingredient to the store
      console.log("this is the payload this time", action.payload);
      return {
        ...state,
        addingIngredient: false,
        ingredient: action.payload
      };
    case ADDING_INGREDIENT_ERROR:
      //Shoots off if there is an error creating a new ingredient
      return { ...state, addingIngredient: false, error: action.payload };
    case GETTING_INGREDIENT:
      return { ...state, gettingIngredient: true };
    case GOT_INGREDIENT:
      return {
        ...state,
        gettingIngredient: false,
        ingredient: [...state.ingredient, action.payload]
      };
    case GETTING_INGREDIENT_ERROR:
      return { ...state, gettingIngredient: false, error: action.payload };
    case UPDATING_INGREDIENT:
      return { ...state, gettingIngredient: true };
    case UPDATED_INGREDIENT:
      return {
        ...state,
        gettingIngredient: false,
        ingredient: action.payload
      };
    case UPDATING_INGREDIENT_ERROR:
      return { ...state, gettingIngredient: false, error: action.payload };
    case DELETING_INGREDIENT:
      return { ...state, deletingIngredient: true, deletedIngredient: false };
    case DELETED_INGREDIENT:
      return {
        ...state,
        deletingIngredient: false,
        deletedIngredient: true,
        ingredient: action.payload
      };
    case DELETING_INGREDIENT_ERROR:
      return { ...state, deletingIngredient: false, error: action.payload };
    default:
      return state;
  }
};
