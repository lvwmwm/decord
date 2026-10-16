// Module ID: 6452
// Function ID: 6453
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6452

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
