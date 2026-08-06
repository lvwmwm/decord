// Module ID: 5280
// Function ID: 5281
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5280 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
