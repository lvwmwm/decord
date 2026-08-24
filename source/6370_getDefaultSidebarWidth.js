// Module ID: 6370
// Function ID: 6371
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 6370 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
