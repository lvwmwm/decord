// Module ID: 10545
// Function ID: 10546
// Name: BadgeCatalogIcon
// Dependencies: [32, 19, 17, 21, 558, 576, 6164, 10546, 2]

// Module 10545 (BadgeCatalogIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6164 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10546 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, tmp;

const f104677 = (item) => null != item;
const View = react_native.View;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function BadgeCatalogRasterIcon(arg0) {
  let badge;
  let style;
  let tmp12;
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(23);
  ({ badge, size, style } = arg0);
  if (cResult[0] !== badge) {
    const items = [, , ];
    ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
    const found = items.filter(f104677);
    const joined = found.join("|");
    cResult[0] = badge;
    cResult[1] = joined;
    cResult[2] = found;
    tmp4 = found;
    tmp3 = joined;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] !== tmp3) {
    const obj2 = { urlsKey: tmp3, candidateIndex: 0 };
    cResult[3] = tmp3;
    cResult[4] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[4];
  }
  [tmp8, tmp9] = react.useState(tmp6);
  _require = tmp9;
  _slicedToArray(react.useState(tmp6), 2);
  if (tmp8.urlsKey !== tmp3) {
    const obj3 = { urlsKey: tmp3, candidateIndex: 0 };
    tmp9(obj3);
  }
  const tmp11 = tmp4[tmp8.candidateIndex];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        tmp = closure_0(() => { /* body not rendered: F141886 */ });
        return;
      }
    }
    cResult[5] = B;
    tmp12 = B;
  } else {
    class B {
      constructor() {
        tmp = closure_0(() => { /* body not rendered: F141886 */ });
        return;
      }
    }
  }
  if (cResult[6] !== size) {
    class B {
      constructor() {
        tmp = closure_0(() => { /* body not rendered: F141886 */ });
        return;
      }
    }
    tmp14[0] = size;
    tmp14[1] = size;
    cResult[6] = size;
    cResult[7] = tmp14;
  } else {
    class B {
      constructor() {
        tmp = closure_0(() => { /* body not rendered: F141886 */ });
        return;
      }
    }
  }
  if (cResult[8] === style) {
    let tmp24;
    class B {
      constructor() {
        tmp = closure_0(() => { /* body not rendered: F141886 */ });
        return;
      }
    }
    if (null == tmp11) {
      class B {
        constructor() {
          tmp = closure_0(() => { /* body not rendered: F141886 */ });
          return;
        }
      }
      tmp24 = tmp28;
    } else {
      class B {
        constructor() {
          tmp = closure_0(() => { /* body not rendered: F141886 */ });
          return;
        }
      }
      if (cResult[15] !== size) {
        class B {
          constructor() {
            tmp = closure_0(() => { /* body not rendered: F141886 */ });
            return;
          }
        }
        tmp19[0] = size;
        tmp19[1] = size;
        cResult[15] = size;
        cResult[16] = tmp19;
      } else {
        class B {
          constructor() {
            tmp = closure_0(() => { /* body not rendered: F141886 */ });
            return;
          }
        }
      }
      if (cResult[17] === tmp17) {
        class B {
          constructor() {
            tmp = closure_0(() => { /* body not rendered: F141886 */ });
            return;
          }
        }
        if (cResult[20] === tmp15) {
          class B {
            constructor() {
              tmp = closure_0(() => { /* body not rendered: F141886 */ });
              return;
            }
          }
        }
        const tmp27 = <View style={tmp15} aria-hidden>{tmp20}</View>;
        cResult[20] = tmp15;
        cResult[21] = tmp20;
        cResult[22] = tmp27;
        tmp24 = tmp27;
      }
      cResult[17] = tmp17;
      cResult[18] = tmp18;
      cResult[19] = jsx(FastImageDefault, { source: tmp17, style: tmp18, onError: tmp12 });
      const tmp23 = jsx(FastImageDefault, { source: tmp17, style: tmp18, onError: tmp12 });
    }
    return tmp24;
  }
  const items1 = [tmp13, style];
  cResult[8] = style;
  cResult[9] = tmp13;
  cResult[10] = items1;
}) : (function BadgeCatalogRasterIcon(style) {
  let badge;
  let obj3;
  let tmp3;
  let tmp4;
  ({ badge, size } = style);
  const items = [, , ];
  ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
  style = style.style;
  const found = items.filter(f104677);
  const joined = found.join("|");
  [tmp3, tmp4] = react.useState({ urlsKey: joined, candidateIndex: 0 });
  let c0 = tmp4;
  _slicedToArray(react.useState({ urlsKey: joined, candidateIndex: 0 }), 2);
  if (tmp3.urlsKey !== joined) {
    const obj = { urlsKey: joined, candidateIndex: 0 };
    tmp4(obj);
  }
  [][0] = tmp4;
  const items1 = [{ width: size, height: size }, style];
  if (null == found[tmp3.candidateIndex]) {
    obj3 = { style: items1, "aria-hidden": true };
    const obj2 = { style: items1, "aria-hidden": true };
  } else {
    obj3 = { style: items1, "aria-hidden": true, children: null };
    const size1 = { width: size, height: size };
    const obj5 = { uri: found[tmp3.candidateIndex] };
  }
  return <tmp9 {...obj3} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function BadgeCatalogIcon(arg0) {
  let badge;
  let style;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(9);
  ({ badge, size, style } = arg0);
  if (size > 24) {
    if (null != badge.simple_icon_url) {
      if (cResult[0] === badge.simple_icon_raster_url) {
        if (cResult[1] === badge.simple_icon_url) {
          if (cResult[2] === size) {
            let tmp6;
            if (cResult[3] === style) {
              tmp6 = cResult[4];
            }
            tmp4 = tmp6;
          }
        }
      }
      const tmp9 = jsx(BadgeArtImageDefault, { url: badge.simple_icon_url, height: size, fallbackUrl: badge.simple_icon_raster_url, style });
      cResult[0] = badge.simple_icon_raster_url;
      cResult[1] = badge.simple_icon_url;
      cResult[2] = size;
      cResult[3] = style;
      cResult[4] = tmp9;
      tmp6 = tmp9;
    }
    return tmp4;
  }
  if (cResult[5] === badge) {
    if (cResult[6] === size) {
      if (cResult[7] === style) {
        tmp4 = cResult[8];
      }
    }
  }
  const tmp5 = <closure_7 badge={badge} size={size} style={style} />;
  cResult[5] = badge;
  cResult[6] = size;
  cResult[7] = style;
  cResult[8] = tmp5;
  tmp4 = tmp5;
}) : (function BadgeCatalogIcon(arg0) {
  let badge;
  let style;
  ({ badge, size, style } = arg0);
  if (size > 24) {
    let tmp2;
    if (null != badge.simple_icon_url) {
      tmp2 = jsx(BadgeArtImageDefault, { url: badge.simple_icon_url, height: size, fallbackUrl: badge.simple_icon_raster_url, style });
    }
    return tmp2;
  }
  tmp2 = <closure_7 badge={badge} size={size} style={style} />;
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default tmp2;
