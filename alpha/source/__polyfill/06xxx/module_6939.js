// Module ID: 6939
// Function ID: 6940
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6939

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
