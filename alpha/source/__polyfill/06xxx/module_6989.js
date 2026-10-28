// Module ID: 6989
// Function ID: 6990
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6989

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
