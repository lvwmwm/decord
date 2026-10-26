// Module ID: 6953
// Function ID: 6954
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6953

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
