// Module ID: 5960
// Function ID: 5961
// Dependencies: []
// Exports: getHeaderTitle

// Module 5960

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
