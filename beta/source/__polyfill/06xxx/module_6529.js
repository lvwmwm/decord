// Module ID: 6529
// Function ID: 6530
// Dependencies: []
// Exports: getLabel

// Module 6529

export const getLabel = function getLabel(label, arg1) {
  let title;
  if (undefined !== label.label) {
    title = label.label;
  } else {
    title = arg1;
    if (undefined !== label.title) {
      title = label.title;
    }
  }
  return title;
};
