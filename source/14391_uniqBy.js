// Module ID: 14391
// Function ID: 14392
// Name: uniqBy
// Dependencies: [7120, 720]

// Module 14391 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(7120) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(7120) /* baseUniq */;
    }
    return [];
  }
};
