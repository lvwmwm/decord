// Module ID: 5544
// Function ID: 5545
// Name: getLabel
// Dependencies: []

// Module 5544 (getLabel)
arg5.getLabel = function getLabel(label) {
  if (undefined !== label.label) {
    let title = label.label;
  } else {
    title = arg1;
    if (undefined !== label.title) {
      title = label.title;
    }
  }
  return title;
};
