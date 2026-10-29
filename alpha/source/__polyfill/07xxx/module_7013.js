// Module ID: 7013
// Function ID: 7014
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7013

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
