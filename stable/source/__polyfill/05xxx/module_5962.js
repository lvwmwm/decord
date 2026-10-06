// Module ID: 5962
// Function ID: 5963
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5962

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
