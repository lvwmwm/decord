// Module ID: 6901
// Function ID: 6902
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6901

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
