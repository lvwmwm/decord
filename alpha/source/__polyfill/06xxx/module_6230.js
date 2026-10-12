// Module ID: 6230
// Function ID: 6231
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6230

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
