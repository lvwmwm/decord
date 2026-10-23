// Module ID: 6951
// Function ID: 6952
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6951

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
