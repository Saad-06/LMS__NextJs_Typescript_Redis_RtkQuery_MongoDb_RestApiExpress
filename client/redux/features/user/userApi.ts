import { apiSlice } from "../api/apiSlice"


export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "updateUserPicture",
        method: "PUT",
        body: { avatar },
        credentials: "include" as const,
      }),
    }),
    updateInfo: builder.mutation({
      query: ({ name }) => ({
        url: "updateUserInfo",
        method: "PUT",
        body: { name },
        credentials: "include" as const,
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "updateUserPassword",
        method: "PUT",
        body: { oldPassword, newPassword },
        credentials: "include" as const,
      }),
    }),

  }),
});


export const {
  useUpdateAvatarMutation,
  useUpdateInfoMutation,
  useUpdatePasswordMutation,
  // useGetAllUsersQuery,
  // useUpdateUserRoleMutation,
  // useDeleteUserMutation
} = userApi;