// Module ID: 5359
// Function ID: 5360
// Name: getLabel
// Dependencies: []

// Module 5359 (getLabel)
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
