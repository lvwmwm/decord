// Module ID: 12445
// Function ID: 12446
// Name: useConjureOverlayBackground
// Dependencies: [5, 32, 19, 10713, 558, 576, 504, 10739, 2]

// Module 12445 (useConjureOverlayBackground)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureOverlayBackgroundStore_mod from "ConjureOverlayBackgroundStore" /* 10713 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, closure_0, closure_1, dependencyMap;

let ConjureOverlayBackgroundStore = ConjureOverlayBackgroundStore_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureOverlayBackground(arg0, arg1) {
  let closure_5;
  let closure_6;
  let first;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp6;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureOverlayBackgroundStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      let background = null;
      if (null != closure_0) {
        background = ConjureOverlayBackgroundStore.getBackground(tmp);
      }
      return background;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let imageEtag;
  if (stateFromStores != null) {
    imageEtag = stateFromStores.imageEtag;
  }
  if (imageEtag == null) {
    imageEtag = null;
  }
  let obj3 = react;
  const tmp9 = imageEtag(react.useState(null), 2);
  [tmp10, react] = tmp9;
  let tmp11 = imageEtag(react.useState(null), 2);
  ConjureOverlayBackgroundStore = tmp11[1];
  const first1 = tmp11[0];
  [tmp14, closure_6] = imageEtag(react.useState(false), 2);
  const tmp13 = imageEtag(react.useState(false), 2);
  if (cResult[3] !== stateFromStores) {
    const fn2 = function y() {
      if (null == stateFromStores) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => closure_1_6(true), 2000);
        return () => clearTimeout(closure_0);
      }
    };
    const items1 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp16 = items1;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const effect = obj3.useEffect(tmp15, tmp16);
  if (cResult[6] === arg1) {
    if (cResult[7] === imageEtag) {
      let tmp18;
      let tmp19;
      let tmp22;
      if (cResult[8] === arg0) {
        tmp18 = cResult[9];
        tmp19 = cResult[10];
      }
      const effect1 = obj3.useEffect(tmp18, tmp19);
      let tmp21 = null;
      if (null != imageEtag) {
        tmp21 = tmp10;
      }
      let closure_7 = tmp21;
      if (null == imageEtag) {
        tmp22 = arg1;
      } else {
        tmp22 = tmp21;
        if (null != tmp21) {
          tmp22 = tmp21;
        }
      }
      let closure_8 = tmp22;
      if (cResult[11] === tmp21) {
        let tmp23;
        if (cResult[12] === tmp22) {
          tmp23 = cResult[13];
        }
        if (null != arg0) {
          let tmp24;
          if (null == stateFromStores) {
            tmp24 = null;
          }
          let blur;
          if (stateFromStores != null) {
            blur = stateFromStores.blur;
          }
          if (cResult[14] === tmp23) {
            if (cResult[15] === tmp24) {
              let tmp27;
              if (cResult[16] === false !== blur) {
                tmp27 = cResult[17];
              }
              return tmp27;
            }
          }
          let obj2 = { src: tmp24, blurred: false !== blur, handleError: null };
          class M {
            constructor() {
              if (closure_8 === closure_7) {
                closure_5(tmp);
              }
            }
          }
          cResult[14] = tmp23;
          cResult[15] = tmp24;
          cResult[16] = false !== blur;
          cResult[17] = obj2;
          tmp27 = obj2;
        }
        tmp24 = tmp22;
      }
      class M {
        constructor() {
          if (closure_8 === closure_7) {
            closure_5(tmp);
          }
        }
      }
      cResult[11] = tmp21;
      cResult[12] = tmp22;
      cResult[13] = M;
      tmp23 = M;
    }
  }
  const fn3 = function p() {
    function load() {
      return closure_0(...arguments);
    }
    if (null != c0) {
      if (null != imageEtag) {
        c0 = false;
        const tmp3 = stateFromStores;
        closure_0 = stateFromStores(function*(arg0, value) {
          let obj2;
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
              return { value: "IconComponent", done: "+352" };
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
                  obj2 = c0(closure_3_1[7]);
                  return obj5;
                }
              } else {
                if (1 === c5) {
                  c4 = 0;
                  closure_0 = closure_2_1;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_0 = value;
                  c4 = 0;
                }
                const tmp11 = closure_0;
                if (!tmp11) {
                  closure_2_4(closure_0);
                }
                c6 = 3;
                return { value: "IconComponent", done: "+352" };
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
        const tmp4 = load(tmp, tmp2);
        return () => {
          c0 = true;
        };
      }
    }
  };
  const items2 = [arg0, imageEtag, arg1];
  cResult[6] = arg1;
  cResult[7] = imageEtag;
  cResult[8] = arg0;
  cResult[9] = fn3;
  cResult[10] = items2;
  tmp19 = items2;
  tmp18 = fn3;
}) : (function useConjureOverlayBackground(arg0, arg1) {
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
    let obj = function _load2() {
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
            return { value: "IconComponent", done: "+352" };
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
                obj2 = _true(closure_2_1[7]);
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
              return { value: "IconComponent", done: "+352" };
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
});
const result = size.fileFinishedImporting("modules/conjure/preview/useConjureOverlayBackground.tsx");

export default tmp2;
