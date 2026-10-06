// Module ID: 6046
// Function ID: 6047
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6046

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
