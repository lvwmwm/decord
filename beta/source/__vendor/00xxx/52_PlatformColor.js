// Module ID: 52
// Function ID: 53
// Name: PlatformColor
// Dependencies: []
// Exports: PlatformColor, normalizeColorObject, processColorObject

// Module 52 (PlatformColor)

export const PlatformColor = () => {
  const obj = { resource_paths: HermesBuiltin.copyRestArgs() };
  return obj;
};
export const normalizeColorObject = (arg0) => {
  let tmp = null;
  if ("resource_paths" in arg0) {
    tmp = arg0;
  }
  return tmp;
};
export const processColorObject = (arg0) => arg0;
