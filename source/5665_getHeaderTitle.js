// Module ID: 5665
// Function ID: 5666
// Name: getHeaderTitle
// Dependencies: []

// Module 5665 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  if (typeof headerTitle.headerTitle === "string") {
    let title = headerTitle.headerTitle;
  } else {
    title = arg1;
    if (undefined !== headerTitle.title) {
      title = headerTitle.title;
    }
  }
  return title;
};
