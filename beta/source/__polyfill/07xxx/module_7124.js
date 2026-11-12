// Module ID: 7124
// Function ID: 7125
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7124

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
