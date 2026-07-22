// Module ID: 5531
// Function ID: 47076
// Name: getHeaderTitle
// Dependencies: []

// Module 5531 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  let title = arg1;
  if ("string" === typeof headerTitle.headerTitle) {
    title = headerTitle.headerTitle;
  } else if (undefined !== headerTitle.title) {
    title = headerTitle.title;
  }
  return title;
};
