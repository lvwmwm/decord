// Module ID: 17011
// Function ID: 17012
// Name: VibegrationsSelectModeIcon
// Dependencies: [19, 21, 558, 568, 580, 4494, 8765, 2]

// Module 17011 (VibegrationsSelectModeIcon)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4494 */;
import inlineStyles from "inlineStyles" /* 8765 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let c5 = "vibegrations-select-mode-clip";
let c6 = "M20.6996 10.7515L15.1195 12.6108C15.1195 12.6108 13.9587 12.9065 13.4323 13.4325C12.9055 13.959 12.6105 15.1198 12.6105 15.1198L10.7513 20.6999C10.3493 21.9063 8.6428 21.906 8.24046 20.6995L2.84448 4.51832C2.49948 3.48376 3.48352 2.49972 4.51808 2.84472L20.6992 8.2407C21.9057 8.64305 21.906 10.3495 20.6996 10.7515Z";
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  const cResult = c.c(3);
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (undefined === INTERACTIVE_ICON_DEFAULT) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const token = useToken.useToken(INTERACTIVE_ICON_DEFAULT);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const obj3 = { id, children: React3(tmp(8765).Rect, { width: 24, height: 24, rx: 8 }) };
    obj2.children = React3(tmp(8765).ClipPath, obj3);
    const tmp9 = React3(tmp(8765).Defs, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== token) {
    const size = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", accessible: false, children: null };
    const items = [first, ];
    const obj4 = { clipPath: null, children: null };
    const _HermesInternal = HermesInternal;
    obj4.clipPath = "url(#" + id + ")";
    const obj5 = { d, fill: token };
    obj4.children = React3(tmp(8765).Path, obj5);
    items[1] = React3(tmp(8765).G, obj4);
    size.children = items;
    const tmp17 = React4(inlineStylesDefault, size);
    cResult[1] = token;
    cResult[2] = tmp17;
    let tmp10 = tmp17;
  } else {
    tmp10 = cResult[2];
  }
  return tmp10;
}) : ((color) => {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const token = useToken.useToken(INTERACTIVE_ICON_DEFAULT);
  const size = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", accessible: false, children: null };
  const obj2 = { children: null };
  const tmp4 = inlineStylesDefault;
  obj2.children = React3(inlineStyles.ClipPath, { id, children: React3(inlineStyles.Rect, { width: 24, height: 24, rx: 8 }) });
  const items = [React3(inlineStyles.Defs, obj2), ];
  const obj4 = { clipPath: "url(#" + id + ")", children: React3(inlineStyles.Path, { d, fill: token }) };
  items[1] = React3(inlineStyles.G, obj4);
  size.children = items;
  return React4(tmp4, size);
});
let closure_7 = tmp4;
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSelectModeIcon.tsx");

export default tmp4;
export const VibegrationsSelectModeActiveIcon = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const tmp7 = React3(closure_7, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => React3(closure_7, { color: nativeDefault.colors.TEXT_BRAND }));
