// Module ID: 5403
// Function ID: 5404
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5403 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
