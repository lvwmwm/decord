// Module ID: 7094
// Function ID: 7095
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7094

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
