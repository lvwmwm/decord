// Module ID: 12725
// Function ID: 12726
// Name: useConjureOverlayBackground
// Dependencies: [5, 32, 19, 10866, 504, 10899, 2]
// Exports: default

// Module 12725 (useConjureOverlayBackground)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureOverlayBackgroundStore from "ConjureOverlayBackgroundStore" /* 10866 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, closure_0, closure_1, closure_5, dependencyMap;

const result = size.fileFinishedImporting("modules/conjure/preview/useConjureOverlayBackground.tsx");

export default function useConjureOverlayBackground(arg0, arg1) {
  let blur;
  let tmp12;
  let tmp4;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let background = null;
    if (null != closure_0) {
      background = ConjureOverlayBackgroundStore.getBackground(tmp);
    }
    return background;
  });
  let imageEtag;
  if (stateFromStores != null) {
    imageEtag = stateFromStores.imageEtag;
  }
  if (imageEtag == null) {
    imageEtag = null;
  }
  let tmp3 = imageEtag(react.useState(null), 2);
  [tmp4, react] = tmp3;
  const tmp5 = imageEtag(react.useState(null), 2);
  closure_5 = tmp5[1];
  const first = tmp5[0];
  const tmp7 = imageEtag(react.useState(false), 2);
  let closure_6 = tmp7[1];
  const items1 = [stateFromStores];
  const first1 = tmp7[0];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_6(true), 2000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [arg0, imageEtag, arg1];
  const effect1 = react.useEffect(() => {
    let _true;
    function load(arg0, arg1) {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        let v0;
        closure_0 = arg0;
        closure_1 = value;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c4;
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_3 = tmp;
                let closure_2 = tmp4;
                closure_0 = undefined;
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj2.getOverlayBackgroundUrl(closure_0, closure_1), done: false };
                obj2 = _true(closure_2_1[5]);
                return obj5;
              }
            } else {
              if (1 === c5) {
                c4 = 0;
                closure_0 = closure_1;
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                c4 = 0;
              }
              const tmp11 = closure_131_0;
              if (!tmp11) {
                c4(closure_0);
              }
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp19) {
            if (0 === c4) {
              c6 = 3;
              throw tmp19;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (null != c0) {
      if (null != imageEtag) {
        c0 = false;
        const tmp3 = load(tmp, tmp2);
        return () => {
          let c0 = true;
        };
      }
    }
  }, items2);
  let tmp11 = null;
  if (null != imageEtag) {
    tmp11 = tmp4;
  }
  let closure_7 = tmp11;
  if (null == imageEtag) {
    tmp12 = arg1;
  } else {
    tmp12 = tmp11;
    if (null != tmp11) {
      tmp12 = tmp11;
    }
  }
  let closure_8 = tmp12;
  const items3 = [tmp12, tmp11];
  if (null != arg0) {
    let tmp14;
    if (null == stateFromStores) {
      tmp14 = null;
    }
    let obj2 = { src: tmp14, blurred: false !== blur, handleError: tmp13 };
    blur = undefined;
    if (stateFromStores != null) {
      blur = stateFromStores.blur;
    }
    return obj2;
  }
  tmp14 = tmp12;
};
