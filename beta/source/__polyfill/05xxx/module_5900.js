// Module ID: 5900
// Function ID: 5901
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5900

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
