// Module ID: 14102
// Function ID: 14103
// Name: uniqBy
// Dependencies: [5888, 720]

// Module 14102 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(5888) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(5888) /* baseUniq */;
    }
    return [];
  }
};
