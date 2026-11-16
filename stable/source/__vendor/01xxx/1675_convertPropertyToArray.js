// Module ID: 1675
// Function ID: 1676
// Name: convertPropertyToArray
// Dependencies: []
// Exports: camelizeKebabCase, convertPropertiesToArrays, convertPropertyToArray, kebabizeCamelCase

// Module 1675 (convertPropertyToArray)
let tmp2;
let items = [{ code: "(function camelizeKebabCase_Pnpm_conversionsTs1(property){return property.replace(/-./g,function(x){return x[1].toUpperCase();});})" }];
[tmp2] = items;
function camelizeKebabCase(all) {
  return all.replace(/-./g, (arg0) => {
    const str = arg0[1];
    return str.toUpperCase();
  });
}
camelizeKebabCase.__workletHash = 12347046558413;
camelizeKebabCase.__initData = tmp2;

export function convertPropertyToArray(arg0) {
  let items1;
  if (undefined !== arg0) {
    const _Array = Array;
    let tmp2 = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp2 = items;
    }
    items1 = tmp2;
  } else {
    items1 = [];
  }
  return items1;
}
export function convertPropertiesToArrays(arg0) {
  const entries = Object.entries(arg0);
  return fromEntries(entries.map((item) => {
    let items2;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const items = [tmp, ];
    if (undefined !== tmp2) {
      const _Array = Array;
      let tmp4 = tmp2;
      if (!Array.isArray(tmp2)) {
        const items1 = [tmp2];
        tmp4 = items1;
      }
      items2 = tmp4;
    } else {
      items2 = [];
    }
    items[1] = items2;
    return items;
  }));
}
export function kebabizeCamelCase(str) {
  return str.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase());
}
export { camelizeKebabCase };
