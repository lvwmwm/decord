// Module ID: 5490
// Function ID: 5491
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5490 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
