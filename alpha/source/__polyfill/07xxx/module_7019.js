// Module ID: 7019
// Function ID: 7020
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7019

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
