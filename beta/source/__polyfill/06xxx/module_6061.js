// Module ID: 6061
// Function ID: 6062
// Dependencies: []
// Exports: getLabel

// Module 6061

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
