// Module ID: 7590
// Function ID: 7591
// Dependencies: []
// Exports: getModalRouteKeys

// Module 7590

export const getModalRouteKeys = (arr, arg1) => {
  let closure_0 = arg1;
  return arr.reduce((arr, key) => {
    let options;
    if (closure_0[key.key] != null) {
      options = tmp.options;
    }
    if (options == null) {
      options = {};
    }
    const presentation = options.presentation;
    const tmp2 = arr.length && !presentation || "modal" === presentation || "transparentModal" === presentation;
    if (tmp2) {
      arr.push(key.key);
    }
    return arr;
  }, []);
};
