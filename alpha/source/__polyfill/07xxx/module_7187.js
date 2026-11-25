// Module ID: 7187
// Function ID: 7188
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7187

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
