// Module ID: 5965
// Function ID: 5966
// Dependencies: []
// Exports: getHeaderTitle

// Module 5965

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
