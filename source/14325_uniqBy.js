// Module ID: 14325
// Function ID: 14326
// Name: uniqBy
// Dependencies: [7075, 720]

// Module 14325 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(7075) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(7075) /* baseUniq */;
    }
    return [];
  }
};
