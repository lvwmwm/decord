// Module ID: 7002
// Function ID: 7003
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7002

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
