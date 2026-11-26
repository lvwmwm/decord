// Module ID: 7218
// Function ID: 7219
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7218

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
