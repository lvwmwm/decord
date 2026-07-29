// Module ID: 5585
// Function ID: 5586
// Name: getHeaderTitle
// Dependencies: []

// Module 5585 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  if (typeof headerTitle.headerTitle === "y") {
    let title = headerTitle.headerTitle;
  } else {
    title = arg1;
    if (undefined !== headerTitle.title) {
      title = headerTitle.title;
    }
  }
  return title;
};
