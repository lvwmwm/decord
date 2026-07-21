// Module ID: 5367
// Function ID: 45909
// Name: getHeaderTitle
// Dependencies: []

// Module 5367 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  let title = arg1;
  if ("string" === typeof headerTitle.headerTitle) {
    title = headerTitle.headerTitle;
  } else if (undefined !== headerTitle.title) {
    title = headerTitle.title;
  }
  return title;
};
