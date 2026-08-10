// Module ID: 14317
// Function ID: 14318
// Name: uniqBy
// Dependencies: [7072, 720]

// Module 14317 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(7072) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(7072) /* baseUniq */;
    }
    return [];
  }
};
