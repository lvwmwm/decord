// Module ID: 52
// Function ID: 53
// Name: PlatformColor
// Dependencies: []

// Module 52 (PlatformColor)
arg5.PlatformColor = () => ({ resource_paths: HermesBuiltin.copyRestArgs() });
arg5.normalizeColorObject = (arg0) => {
  let tmp = null;
  if ("resource_paths" in arg0) {
    tmp = arg0;
  }
  return tmp;
};
arg5.processColorObject = (arg0) => arg0;
