// Module ID: 5337
// Function ID: 5338
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5337 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
