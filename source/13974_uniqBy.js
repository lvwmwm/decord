// Module ID: 13974
// Function ID: 106972
// Name: uniqBy
// Dependencies: [6848, 697]

// Module 13974 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(6848) /* baseUniq */(arg0, require(697) /* baseIteratee */(arg1, 2));
      const tmp4 = require(6848) /* baseUniq */;
    }
    return [];
  }
};
