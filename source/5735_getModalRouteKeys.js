// Module ID: 5735
// Function ID: 5736
// Name: getModalRouteKeys
// Dependencies: []

// Module 5735 (getModalRouteKeys)
arg5.getModalRouteKeys = (arr) => {
  let closure_0 = arg1;
  return arr.reduce((arr, key) => {
    let options;
    if (table[key.key] != null) {
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
