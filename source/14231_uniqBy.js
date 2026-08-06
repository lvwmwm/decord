// Module ID: 14231
// Function ID: 14232
// Name: uniqBy
// Dependencies: [6993, 720]

// Module 14231 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(6993) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(6993) /* baseUniq */;
    }
    return [];
  }
};
