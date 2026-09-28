// Module ID: 5963
// Function ID: 5964
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5963

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
