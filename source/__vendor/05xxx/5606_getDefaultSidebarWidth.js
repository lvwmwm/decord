// Module ID: 5606
// Function ID: 5607
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5606 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
