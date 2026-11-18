// Module ID: 7033
// Function ID: 7034
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7033

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
