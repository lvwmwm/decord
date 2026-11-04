// Module ID: 7166
// Function ID: 7167
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7166

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
