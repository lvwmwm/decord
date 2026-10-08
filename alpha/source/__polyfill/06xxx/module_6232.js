// Module ID: 6232
// Function ID: 6233
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6232

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
