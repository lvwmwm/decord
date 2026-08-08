// Module ID: 5319
// Function ID: 5320
// Name: getLabel
// Dependencies: []

// Module 5319 (getLabel)
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
