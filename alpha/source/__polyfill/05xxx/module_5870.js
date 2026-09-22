// Module ID: 5870
// Function ID: 5871
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5870

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
