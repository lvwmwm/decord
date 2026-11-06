// Module ID: 7138
// Function ID: 7139
// Dependencies: []
// Exports: getLabel

// Module 7138

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
