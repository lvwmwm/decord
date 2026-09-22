// Module ID: 5872
// Function ID: 5873
// Dependencies: []
// Exports: getHeaderTitle

// Module 5872

export const getHeaderTitle = function getHeaderTitle(options, name) {
  if (typeof options.headerTitle === "string") {
    let title = options.headerTitle;
  } else {
    title = name;
    if (undefined !== options.title) {
      title = options.title;
    }
  }
  return title;
};
