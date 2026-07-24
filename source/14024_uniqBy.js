// Module ID: 14024
// Function ID: 107295
// Name: uniqBy
// Dependencies: [6847, 697]

// Module 14024 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(6847) /* baseUniq */(arg0, require(697) /* baseIteratee */(arg1, 2));
      const tmp4 = require(6847) /* baseUniq */;
    }
    return [];
  }
};
