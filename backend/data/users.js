import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@camstore.com",
    password: bcrypt.hashSync("camstore1234", 10),
    isAdmin: true,
  },
  {
    name: "Phorng David",
    email: "vid@camstore.com",
    password: bcrypt.hashSync("camstore1234", 10),
  },
  {
    name: "Vi Sal",
    email: "sal@camstore.com",
    password: bcrypt.hashSync("camstore1234", 10),
  },
];

export default users;
