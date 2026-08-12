// Module ID: 5336
// Function ID: 5337
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 5336 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
