// Module ID: 5474
// Function ID: 5475
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5474 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
