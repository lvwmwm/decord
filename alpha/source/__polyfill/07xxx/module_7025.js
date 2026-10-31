// Module ID: 7025
// Function ID: 7026
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7025

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
