// Module ID: 5469
// Function ID: 5470
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5469 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
