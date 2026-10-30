// Module ID: 7021
// Function ID: 7022
// Dependencies: []
// Exports: getHeaderTitle

// Module 7021

export function getHeaderTitle(options, name) {
  let title;
  if (typeof options.headerTitle === "string") {
    title = options.headerTitle;
  } else {
    title = name;
    if (undefined !== options.title) {
      title = options.title;
    }
  }
  return title;
}
