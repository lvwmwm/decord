// Module ID: 40
// Function ID: 1279
// Name: PlatformColor
// Dependencies: []

// Module 40 (PlatformColor)
arg5.PlatformColor = function PlatformColor() {
  const length = arguments.length;
  const resource_paths = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    resource_paths[num] = arguments[num];
  }
  return { resource_paths };
};
arg5.normalizeColorObject = function normalizeColorObject(arg0) {
  let tmp = null;
  if ("resource_paths" in arg0) {
    tmp = arg0;
  }
  return tmp;
};
arg5.processColorObject = function processColorObject(defaultResult) {
  return defaultResult;
};
