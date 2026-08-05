// Module ID: 5236
// Function ID: 5237
// Name: getHeaderTitle
// Dependencies: []

// Module 5236 (getHeaderTitle)
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
