// Module ID: 14098
// Function ID: 14099
// Name: uniqBy
// Dependencies: [5886, 720]

// Module 14098 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(5886) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(5886) /* baseUniq */;
    }
    return [];
  }
};
