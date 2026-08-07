// Module ID: 5296
// Function ID: 5297
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5296 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
