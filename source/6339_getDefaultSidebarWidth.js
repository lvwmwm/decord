// Module ID: 6339
// Function ID: 6340
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 6339 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
