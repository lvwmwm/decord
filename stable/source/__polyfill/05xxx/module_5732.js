// Module ID: 5732
// Function ID: 5733
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5732

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
