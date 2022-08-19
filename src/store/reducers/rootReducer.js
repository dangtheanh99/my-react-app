const initState = {
  users: [
    { id: 1, fname: "Dang The Anh" },
    { id: 2, fname: "Nguyen Thi Ha" },
    { id: 3, fname: "Nguyen Dang Duc" },
  ],
  posts: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      //   console.log("action: ", action);
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "ADD_USER":
      let newUser = action.payload;
      return {
        ...state,
        users: [...state.users, newUser],
      };
    default:
      return state;
  }
};

export default rootReducer;
