// Module ID: 6039
// Function ID: 6040
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6039

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
