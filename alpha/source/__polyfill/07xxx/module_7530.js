// Module ID: 7530
// Function ID: 7531
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7530

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
