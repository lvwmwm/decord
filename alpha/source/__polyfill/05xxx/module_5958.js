// Module ID: 5958
// Function ID: 5959
// Dependencies: []
// Exports: getHeaderTitle

// Module 5958

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
