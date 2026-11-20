// Module ID: 7004
// Function ID: 7005
// Dependencies: []
// Exports: getHeaderTitle

// Module 7004

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
