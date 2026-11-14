// Module ID: 7520
// Function ID: 7521
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7520

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
