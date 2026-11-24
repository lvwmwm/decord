// Module ID: 7122
// Function ID: 7123
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7122

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
