// Module ID: 14221
// Function ID: 14222
// Name: uniqBy
// Dependencies: [6981, 720]

// Module 14221 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(6981) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(6981) /* baseUniq */;
    }
    return [];
  }
};
