// Module ID: 7094
// Function ID: 7095
// Dependencies: []
// Exports: getHeaderTitle

// Module 7094

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
