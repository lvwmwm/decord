// Module ID: 5956
// Function ID: 5957
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5956

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
