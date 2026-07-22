// Module ID: 1493
// Function ID: 17219
// Name: formatToList
// Dependencies: []

// Module 1493 (formatToList)
let closure_0 = importDefault(dependencyMap[0]);
function formatToList(found) {
  const mapped = found.map((arg0) => "- " + arg0);
  return mapped.join("\n");
}
function validatePathConfig(config) {
  const items = [null, null];
  let closure_0 = items;
  const tmp = arguments.length > 1 && undefined !== arguments[1];
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = arguments[1];
  }
  if (!tmp2) {
    items.push("path", "exact", "stringify", "parse");
  }
  const keys = Object.keys(config);
  const found = keys.filter((arg0) => !items.includes(arg0));
  if (found.length) {
    const _Error = Error;
    const tmp7 = formatToList(found);
    const _HermesInternal = HermesInternal;
    const error = new Error("Found invalid properties in the configuration:\n" + tmp7 + "\n\nDid you forget to specify them under a 'screens' property?\n\nYou can only specify the following properties:\n" + formatToList(items) + "\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
    throw error;
  } else if (config.screens) {
    const _Object = Object;
    const entries = Object.entries(config.screens);
    const item = entries.forEach((frames) => {
      const tmp2 = items(frames, 2)[1];
      if ("string" !== typeof tmp2) {
        callback(tmp2, false);
      }
    });
  }
}

export default validatePathConfig;
