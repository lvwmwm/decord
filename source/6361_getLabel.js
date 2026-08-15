// Module ID: 6361
// Function ID: 6362
// Name: getLabel
// Dependencies: []

// Module 6361 (getLabel)
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
