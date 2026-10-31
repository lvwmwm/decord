// Module ID: 12106
// Function ID: 12107
// Name: FrameRenderTarget
// Dependencies: [19, 17, 21, 5014, 12107, 12108, 7979, 2]
// Exports: default

// Module 12106 (FrameRenderTarget)
import FramePoolManagerDefault from "FramePoolManager" /* 12108 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ ActivityIndicator: closure_4, View: hasOwnProperty, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { target: { flex: 1 }, loading: obj2 };
obj2 = { alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/frames/native/FrameRenderTarget.tsx");

export default function FrameRenderTarget(frameId) {
  let items1;
  let presentation;
  let spinnerWhileLoading;
  frameId = frameId.frameId;
  ({ presentation, spinnerWhileLoading } = frameId);
  const level = frameId.level;
  if (spinnerWhileLoading === undefined) {
    spinnerWhileLoading = false;
  }
  let webViewKey;
  const tmp = closure_8();
  const layoutMode = presentation.layoutMode;
  const portraitSafeAreasConfig = presentation.portraitSafeAreasConfig;
  const landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  const items = [layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig];
  const memo = react.useMemo(() => ({ layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig }), items);
  const tmp4 = webViewKey(12107)(frameId, level, memo);
  webViewKey = tmp4.webViewKey;
  const temporaryParentNodeTag = tmp4.temporaryParentNodeTag;
  if (null == webViewKey) {
    return null;
  } else {
    const obj2 = { webViewKey, temporaryParentNodeTag, style: tmp.target };
    const tmp13 = closure_6(frameId(7979).WebViewTarget, obj2);
    let tmp6Result = tmp13;
    if (spinnerWhileLoading) {
      let obj = { style: tmp.target, children: items1 };
      items1 = [tmp13, ];
      let tmp11Result = null;
      const tmp6 = closure_7;
      if (!tmp5) {
        const obj3 = { style: tmp.loading, pointerEvents: "none", children: closure_6(closure_4, { size: "large" }) };
        tmp11Result = tmp11(tmp7, obj3);
      }
      items1[1] = tmp11Result;
      tmp6Result = tmp6(tmp7, obj);
    }
    return tmp6Result;
  }
};
