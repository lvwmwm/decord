// Module ID: 5522
// Function ID: 5523
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5522 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
