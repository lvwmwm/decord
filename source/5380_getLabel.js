// Module ID: 5380
// Function ID: 5381
// Name: getLabel
// Dependencies: []

// Module 5380 (getLabel)
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
