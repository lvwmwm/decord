// Module ID: 6454
// Function ID: 6455
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6454

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
