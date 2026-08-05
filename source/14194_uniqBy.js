// Module ID: 14194
// Function ID: 14195
// Name: uniqBy
// Dependencies: [6966, 720]

// Module 14194 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(6966) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(6966) /* baseUniq */;
    }
    return [];
  }
};
