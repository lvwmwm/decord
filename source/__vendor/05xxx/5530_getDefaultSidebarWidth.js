// Module ID: 5530
// Function ID: 5531
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5530 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
