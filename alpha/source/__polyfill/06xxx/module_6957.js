// Module ID: 6957
// Function ID: 6958
// Dependencies: []
// Exports: getHeaderTitle

// Module 6957

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
