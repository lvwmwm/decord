// Module ID: 6341
// Function ID: 6342
// Name: getHeaderTitle
// Dependencies: []

// Module 6341 (getHeaderTitle)
arg5.getHeaderTitle = function getHeaderTitle(options, name) {
  if (typeof options.headerTitle === "string") {
    let title = options.headerTitle;
  } else {
    title = name;
    if (undefined !== options.title) {
      title = options.title;
    }
  }
  return title;
};
