// Module ID: 14035
// Function ID: 107422
// Name: uniqBy
// Dependencies: [5860, 697]

// Module 14035 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(5860) /* baseUniq */(arg0, require(697) /* baseIteratee */(arg1, 2));
      const tmp4 = require(5860) /* baseUniq */;
    }
    return [];
  }
};
