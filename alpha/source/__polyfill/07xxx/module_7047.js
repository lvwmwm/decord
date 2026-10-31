// Module ID: 7047
// Function ID: 7048
// Dependencies: []
// Exports: getLabel

// Module 7047

export function getLabel(label, arg1) {
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
}
