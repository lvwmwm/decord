// Module ID: 6234
// Function ID: 6235
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6234

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
