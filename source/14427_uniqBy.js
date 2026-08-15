// Module ID: 14427
// Function ID: 14428
// Name: uniqBy
// Dependencies: [5030, 720]

// Module 14427 (uniqBy)

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require(5030) /* baseUniq */(arg0, require(720) /* baseIteratee */(arg1, 2));
      const tmp5 = require(5030) /* baseUniq */;
    }
    return [];
  }
};
