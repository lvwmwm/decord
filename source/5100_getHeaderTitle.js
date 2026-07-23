// Module ID: 5100
// Function ID: 44349
// Name: getHeaderTitle
// Dependencies: []

// Module 5100 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  let title = arg1;
  if ("string" === typeof headerTitle.headerTitle) {
    title = headerTitle.headerTitle;
  } else if (undefined !== headerTitle.title) {
    title = headerTitle.title;
  }
  return title;
};
