// Module ID: 6149
// Function ID: 6150
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6149

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
