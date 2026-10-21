// Module ID: 12588
// Function ID: 12589
// Dependencies: []
// Exports: flatten

// Module 12588

export const flatten = function flatten(arr) {
  const f147818 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f147818);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f147818);
  return items;
};
