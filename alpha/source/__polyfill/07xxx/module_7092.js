// Module ID: 7092
// Function ID: 7093
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7092

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
