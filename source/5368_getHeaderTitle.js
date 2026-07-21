// Module ID: 5368
// Function ID: 45902
// Name: getHeaderTitle
// Dependencies: []

// Module 5368 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  let title = arg1;
  if ("string" === typeof headerTitle.headerTitle) {
    title = headerTitle.headerTitle;
  } else if (undefined !== headerTitle.title) {
    title = headerTitle.title;
  }
  return title;
};
