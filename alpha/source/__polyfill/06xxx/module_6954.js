// Module ID: 6954
// Function ID: 6955
// Dependencies: []
// Exports: getLabel

// Module 6954

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
