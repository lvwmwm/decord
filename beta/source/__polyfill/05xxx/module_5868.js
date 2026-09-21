// Module ID: 5868
// Function ID: 5869
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5868

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
