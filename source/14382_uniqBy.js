// Module ID: 14382
// Function ID: 14383
// Name: uniqBy
// Dependencies: [7114, 720]

// Module 14382 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(7114) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(7114) /* baseUniq */;
    }
    return [];
  }
};
