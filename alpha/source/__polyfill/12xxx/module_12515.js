// Module ID: 12515
// Function ID: 12516
// Dependencies: []
// Exports: flatten

// Module 12515

export const flatten = function flatten(arr) {
  const f147147 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f147147);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f147147);
  return items;
};
