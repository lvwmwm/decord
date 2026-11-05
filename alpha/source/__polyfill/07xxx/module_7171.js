// Module ID: 7171
// Function ID: 7172
// Dependencies: []
// Exports: getHeaderTitle

// Module 7171

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
