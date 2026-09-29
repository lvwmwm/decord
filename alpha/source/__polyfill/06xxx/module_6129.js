// Module ID: 6129
// Function ID: 6130
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6129

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
