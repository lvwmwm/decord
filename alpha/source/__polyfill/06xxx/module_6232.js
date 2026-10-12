// Module ID: 6232
// Function ID: 6233
// Dependencies: []
// Exports: getHeaderTitle

// Module 6232

export const getHeaderTitle = function getHeaderTitle(options, name) {
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
};
