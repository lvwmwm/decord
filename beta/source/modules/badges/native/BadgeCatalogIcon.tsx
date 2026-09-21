// Module ID: 11445
// Function ID: 11446
// Name: BadgeCatalogIcon
// Dependencies: [32, 19, 17, 21, 558, 568, 5802, 2]

// Module 11445 (BadgeCatalogIcon)
import c from "c" /* 568 */;
import FastImageDefault from "FastImage" /* 5802 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(23);
  ({ badge, size, style } = arg0);
  if (cResult[0] !== badge) {
    const items = [, , ];
    ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
    const found = items.filter((item) => null != item);
    const joined = found.join("|");
    cResult[0] = badge;
    cResult[1] = joined;
    cResult[2] = found;
    let tmp4 = found;
    let tmp3 = joined;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const obj2 = { urlsKey: tmp3, candidateIndex: 0 };
    cResult[3] = tmp3;
    cResult[4] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[4];
  }
  [tmp8, tmp9] = noop.useState(tmp6);
  const require = tmp9;
  if (tmp8.urlsKey !== tmp3) {
    const obj3 = { urlsKey: tmp3, candidateIndex: 0 };
    tmp9(obj3);
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        tmp = closure_0((candidateIndex) => {
          const obj = {};
          const merged = Object.assign(candidateIndex);
          obj.candidateIndex = candidateIndex.candidateIndex + 1;
          return obj;
        });
        return;
      }
    }
    cResult[5] = K;
    const tmp11 = K;
  } else {
    class K {
      constructor() {
        tmp = closure_0((candidateIndex) => {
          const obj = {};
          const merged = Object.assign(candidateIndex);
          obj.candidateIndex = candidateIndex.candidateIndex + 1;
          return obj;
        });
        return;
      }
    }
  }
  if (cResult[6] !== size) {
    class K {
      constructor() {
        tmp = closure_0((candidateIndex) => {
          const obj = {};
          const merged = Object.assign(candidateIndex);
          obj.candidateIndex = candidateIndex.candidateIndex + 1;
          return obj;
        });
        return;
      }
    }
    tmp13[0] = size;
    tmp13[1] = size;
    cResult[6] = size;
    cResult[7] = tmp13;
  } else {
    class K {
      constructor() {
        tmp = closure_0((candidateIndex) => {
          const obj = {};
          const merged = Object.assign(candidateIndex);
          obj.candidateIndex = candidateIndex.candidateIndex + 1;
          return obj;
        });
        return;
      }
    }
  }
  if (cResult[8] === style) {
    class K {
      constructor() {
        tmp = closure_0((candidateIndex) => {
          const obj = {};
          const merged = Object.assign(candidateIndex);
          obj.candidateIndex = candidateIndex.candidateIndex + 1;
          return obj;
        });
        return;
      }
    }
    if (null == tmp4[tmp8.candidateIndex]) {
      class K {
        constructor() {
          tmp = closure_0((candidateIndex) => {
            const obj = {};
            const merged = Object.assign(candidateIndex);
            obj.candidateIndex = candidateIndex.candidateIndex + 1;
            return obj;
          });
          return;
        }
      }
    } else {
      class K {
        constructor() {
          tmp = closure_0((candidateIndex) => {
            const obj = {};
            const merged = Object.assign(candidateIndex);
            obj.candidateIndex = candidateIndex.candidateIndex + 1;
            return obj;
          });
          return;
        }
      }
      if (cResult[15] !== size) {
        class K {
          constructor() {
            tmp = closure_0((candidateIndex) => {
              const obj = {};
              const merged = Object.assign(candidateIndex);
              obj.candidateIndex = candidateIndex.candidateIndex + 1;
              return obj;
            });
            return;
          }
        }
        tmp18[0] = size;
        tmp18[1] = size;
        cResult[15] = size;
        cResult[16] = tmp18;
      } else {
        class K {
          constructor() {
            tmp = closure_0((candidateIndex) => {
              const obj = {};
              const merged = Object.assign(candidateIndex);
              obj.candidateIndex = candidateIndex.candidateIndex + 1;
              return obj;
            });
            return;
          }
        }
      }
      if (cResult[17] === tmp16) {
        class K {
          constructor() {
            tmp = closure_0((candidateIndex) => {
              const obj = {};
              const merged = Object.assign(candidateIndex);
              obj.candidateIndex = candidateIndex.candidateIndex + 1;
              return obj;
            });
            return;
          }
        }
        if (cResult[20] === tmp14) {
          class K {
            constructor() {
              tmp = closure_0((candidateIndex) => {
                const obj = {};
                const merged = Object.assign(candidateIndex);
                obj.candidateIndex = candidateIndex.candidateIndex + 1;
                return obj;
              });
              return;
            }
          }
          return tmp23;
        }
        const obj4 = { style: tmp14, "aria-hidden": true, children: tmp19 };
        const tmp26 = <View style={tmp14} aria-hidden>{tmp19}</View>;
        cResult[20] = tmp14;
        cResult[21] = tmp19;
        cResult[22] = tmp26;
        tmp23 = tmp26;
      }
      const obj5 = { source: tmp16, style: tmp17, onError: tmp11 };
      const tmp22 = jsx(FastImageDefault, { source: tmp16, style: tmp17, onError: tmp11 });
      cResult[17] = tmp16;
      cResult[18] = tmp17;
      cResult[19] = tmp22;
    }
  }
  const items1 = [tmp12, style];
  cResult[8] = style;
  cResult[9] = tmp12;
  cResult[10] = items1;
}) : ((style) => {
  ({ badge, size } = style);
  const items = [, , ];
  ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
  const found = items.filter((item) => null != item);
  const joined = found.join("|");
  [tmp3, tmp4] = noop.useState({ urlsKey: joined, candidateIndex: 0 });
  c0 = tmp4;
  if (tmp3.urlsKey !== joined) {
    let obj = { urlsKey: joined, candidateIndex: 0 };
    tmp4(obj);
  }
  [][0] = tmp4;
  const items1 = [{ width: size, height: size }, style.style];
  if (null == found[tmp3.candidateIndex]) {
    const obj2 = { style: items1, "aria-hidden": true };
    let obj3 = obj2;
  } else {
    obj3 = { style: items1, "aria-hidden": true, children: null };
    const obj4 = { source: null, style: null, onError: null };
    const obj5 = { uri: tmp6 };
    obj4.source = obj5;
    const size1 = { width: size, height: size };
    obj4.style = size1;
    obj4.onError = tmp7;
    obj3.children = tmp8(FastImageDefault, obj4);
  }
  return <View {...obj3} />;
});
