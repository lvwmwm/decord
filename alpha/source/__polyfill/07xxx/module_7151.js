// Module ID: 7151
// Function ID: 7152
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7151

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
