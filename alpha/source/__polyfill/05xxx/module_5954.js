// Module ID: 5954
// Function ID: 5955
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5954

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
