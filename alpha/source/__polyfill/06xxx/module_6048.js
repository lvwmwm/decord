// Module ID: 6048
// Function ID: 6049
// Dependencies: []
// Exports: getHeaderTitle

// Module 6048

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
