// Module ID: 7169
// Function ID: 7170
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7169

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
