// Module ID: 5532
// Function ID: 47060
// Name: getHeaderTitle
// Dependencies: []

// Module 5532 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  let title = arg1;
  if ("string" === typeof headerTitle.headerTitle) {
    title = headerTitle.headerTitle;
  } else if (undefined !== headerTitle.title) {
    title = headerTitle.title;
  }
  return title;
};
