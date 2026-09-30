// Module ID: 6159
// Function ID: 6160
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 6159

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
