// Module ID: 7091
// Function ID: 7092
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7091

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
