// Module ID: 5958
// Function ID: 5959
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5958

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
