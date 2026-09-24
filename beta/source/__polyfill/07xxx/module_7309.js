// Module ID: 7309
// Function ID: 7310
// Dependencies: []
// Exports: getModalRouteKeys

// Module 7309

export const getModalRouteKeys = (arr, arg1) => {
  closure_0 = arg1;
  return arr.reduce((arr, key) => {
    options = undefined;
    if (closure_0[key.key] != null) {
      options = tmp.options;
    }
    if (options == null) {
      options = {};
    }
    const presentation = options.presentation;
    let tmp2 = arr.length && !presentation;
    if (!tmp2) {
      tmp2 = "modal" === presentation;
    }
    if (!tmp2) {
      tmp2 = "transparentModal" === presentation;
    }
    if (tmp2) {
      arr.push(key.key);
    }
    return arr;
  }, []);
};
