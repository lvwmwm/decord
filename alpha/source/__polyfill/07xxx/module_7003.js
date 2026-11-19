// Module ID: 7003
// Function ID: 7004
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7003

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
