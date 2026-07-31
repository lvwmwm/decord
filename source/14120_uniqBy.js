// Module ID: 14120
// Function ID: 14121
// Name: uniqBy
// Dependencies: [5891, 720]

// Module 14120 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(5891) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(5891) /* baseUniq */;
    }
    return [];
  }
};
