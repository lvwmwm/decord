// Module ID: 5358
// Function ID: 5359
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5358 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
