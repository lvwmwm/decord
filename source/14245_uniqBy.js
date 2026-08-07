// Module ID: 14245
// Function ID: 14246
// Name: uniqBy
// Dependencies: [7012, 720]

// Module 14245 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(7012) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(7012) /* baseUniq */;
    }
    return [];
  }
};
