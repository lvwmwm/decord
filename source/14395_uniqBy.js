// Module ID: 14395
// Function ID: 14396
// Name: uniqBy
// Dependencies: [7142, 720]

// Module 14395 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(7142) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(7142) /* baseUniq */;
    }
    return [];
  }
};
