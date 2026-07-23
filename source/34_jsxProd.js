// Module ID: 34
// Function ID: 1268
// Name: jsxProd
// Dependencies: []

// Module 34 (jsxProd)
function jsxProd(type, key) {
  let text = null;
  if (undefined !== arg2) {
    text = `${arg2}`;
  }
  if (undefined !== key.key) {
    text = `${key.key}`;
  }
  let tmp3 = key;
  if ("key" in key) {
    let obj = {};
    tmp3 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp3 = obj;
      while (keys[tmp] !== undefined) {
        let tmp8 = tmp6;
        if ("key" === tmp6) {
          continue;
        } else {
          obj[tmp6] = key[tmp6];
          continue;
        }
        continue;
      }
    }
  }
  obj = { $$typeof: closure_0, type, key: text };
  let tmp7 = null;
  if (undefined !== tmp3.ref) {
    tmp7 = ref;
  }
  obj.ref = tmp7;
  obj.props = tmp3;
  return obj;
}
let closure_0 = Symbol.for("react.transitional.element");
arg5.Fragment = Symbol.for("react.fragment");
arg5.jsx = jsxProd;
arg5.jsxs = jsxProd;
