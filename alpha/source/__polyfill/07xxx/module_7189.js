// Module ID: 7189
// Function ID: 7190
// Dependencies: []
// Exports: getHeaderTitle

// Module 7189

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
