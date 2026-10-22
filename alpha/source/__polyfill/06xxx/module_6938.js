// Module ID: 6938
// Function ID: 6939
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6938

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
