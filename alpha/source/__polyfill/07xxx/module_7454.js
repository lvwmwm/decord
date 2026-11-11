// Module ID: 7454
// Function ID: 7455
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 7454

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
