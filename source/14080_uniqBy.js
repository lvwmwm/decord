// Module ID: 14080
// Function ID: 107600
// Name: uniqBy
// Dependencies: [5870, 697]

// Module 14080 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(5870) /* baseUniq */(arg0, require(697) /* baseIteratee */(arg1, 2));
      const tmp4 = require(5870) /* baseUniq */;
    }
    return [];
  }
};
