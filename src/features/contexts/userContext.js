import { createContext } from "react";

const userContext = createContext({
  USER: [
    {
      name: "ar2309",
      email: "ar0829@srmist.edu.in",
      password: "12345",
      confirmPassword: "12345",
      id: 0,
      cartData: [
        // { item: "", price: 200, count: 1, id: 1 }
      ],
    },
  ],
});

export default userContext;
