// Module ID: 6932
// Function ID: 6933
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6932

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
