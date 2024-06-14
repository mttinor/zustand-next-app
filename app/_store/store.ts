import { create } from "zustand";
import { produce } from "immer";
const initialState = {
  user: {
    id: "user_123",
    friends: ["jack", "mary"],
    profile: {
      name: "jack",
      email: "jack@yahoo.com",
      address: {
        street: "street",
        city: "anyTown",
        zipCode: 12346,
      },
    },
  },
};

// export const useStore = create((set) => ({
//   ...initialState,
//   updateAddressStreet: (street: any) =>
//     set((state: any) => ({
//       user: {
//         ...state.user,
//         profile: {
//           ...state.user.profile,
//           address: {
//             ...state.user.profile.address,
//             street,
//           },
//         },
//       },
//     })),
// }));

export const useStore = create((set) => ({
  ...initialState,
  updateAddressStreet: (street: any) =>
    set(
      produce((state: any) => {
        state.user.profile.address.street = street; // Correcting the update path
      })
    ),
}));
