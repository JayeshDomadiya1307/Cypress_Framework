import { User } from "../../types/User";

const defaultPassword = "Test@12345";

export const loginUser: User = {
  type: "login_user",
  email: "testemailpid@telenetgroup.be",
  password: defaultPassword,
  firstName: "Vic",
  lastName: "Archambault",
  phone: "0498146212",
};

export const profileUser: User = {
  type: "profile_user",
  email: "profiletest@telenetgroup.be",
  password: defaultPassword,
  firstName: "Profile",
  lastName: "Archambault",
  phone: "0498146213",
};

export const resetPasswordUser: User = {
  type: "reset_password_user",
  email: "resetpassword@telenetgroup.be",
  password: defaultPassword,
  firstName: "Password",
  lastName: "Archambault",
  phone: "0498146214",
};

export const uatUsers: Map<string, User> = new Map([
  ["loginUser", loginUser],
  ["loginUser", loginUser],
  ["loginUser", loginUser],
]);
