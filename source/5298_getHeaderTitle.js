// Module ID: 5298
// Function ID: 5299
// Name: getHeaderTitle
// Dependencies: []

// Module 5298 (getHeaderTitle)
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
