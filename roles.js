var roles = {
  competidor: {
    readOwn: "profile",
    updateOwn: "profile",
    deleteOwn: "profile",
    readAny: "challenge",
  },
  desafiador: {
    updateOwn: "challenge",
    deleteOwn: "challenge",
  },
  empleado: { updateAny: "challenge" },
  admin: {
    readAny: "profile",
    updateAny: "profile",
    deleteAny: "challenge",
    deleteAny: "profile",
  },
};

// USERS PROFILE
// /users/:userId

// USERS
// /users

// CHALLENGES
// /challenges

// CHALLENGE SINGLE
// /challenges/:challengeId

// CHALLENGE SINGLE EDIT
// /challenges/:challengeId/edit
