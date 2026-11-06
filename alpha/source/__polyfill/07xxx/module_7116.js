// Module ID: 7116
// Function ID: 7117
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7116

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
