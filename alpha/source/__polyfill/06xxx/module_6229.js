// Module ID: 6229
// Function ID: 6230
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6229

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
