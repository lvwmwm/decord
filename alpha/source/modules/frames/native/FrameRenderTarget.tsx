// Module ID: 11872
// Function ID: 11873
// Name: FrameRenderTarget
// Dependencies: [19, 17, 21, 5005, 558, 576, 11873, 11874, 7965, 2]

// Module 11872 (FrameRenderTarget)
import react2 from "react" /* 576 */;
import FramePoolManagerDefault from "FramePoolManager" /* 11874 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMemoizedPresentation(arg0) {
  let landscapeSafeAreasConfig;
  let layoutMode;
  let portraitSafeAreasConfig;
  const obj = react2;
  const cResult = obj.c(4);
  ({ layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig } = arg0);
  if (cResult[0] === landscapeSafeAreasConfig) {
    if (cResult[1] === layoutMode) {
      let tmp2;
      if (cResult[2] === portraitSafeAreasConfig) {
        tmp2 = cResult[3];
      }
      return tmp2;
    }
  }
  const obj2 = { layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig };
  cResult[0] = landscapeSafeAreasConfig;
  cResult[1] = layoutMode;
  cResult[2] = portraitSafeAreasConfig;
  cResult[3] = obj2;
  tmp2 = obj2;
}) : (function useMemoizedPresentation(layoutMode) {
  layoutMode = layoutMode.layoutMode;
  const portraitSafeAreasConfig = layoutMode.portraitSafeAreasConfig;
  const landscapeSafeAreasConfig = layoutMode.landscapeSafeAreasConfig;
  const items = [layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig];
  return react.useMemo(() => ({ layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig }), items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function FrameRenderTarget(frameId) {
  let items;
  let level;
  let presentation;
  let webViewKey;
  const tmp = frameId;
  let obj = frameId(576);
  const cResult = obj.c(14);
  frameId = frameId.frameId;
  const spinnerWhileLoading = frameId.spinnerWhileLoading;
  let tmp4 = undefined !== spinnerWhileLoading;
  ({ level, presentation } = frameId);
  if (tmp4) {
    tmp4 = spinnerWhileLoading;
  }
  const tmp5 = closure_8();
  const tmp6 = closure_9(presentation);
  const tmp8 = webViewKey(11873)(frameId, level, tmp6);
  const tmp7 = webViewKey;
  webViewKey = tmp8.webViewKey;
  const temporaryParentNodeTag = tmp8.temporaryParentNodeTag;
  if (cResult[0] === frameId) {
    let tmp9;
    if (cResult[1] === webViewKey) {
      tmp9 = cResult[2];
    }
    const syncExternalStore = react.useSyncExternalStore(tmp7(11874).subscribe, tmp9);
    if (null == webViewKey) {
      return null;
    } else {
      if (cResult[3] === tmp5.target) {
        if (cResult[4] === temporaryParentNodeTag) {
          let tmp13;
          if (cResult[5] === webViewKey) {
            tmp13 = cResult[6];
          }
          let tmp16 = tmp13;
          if (tmp4) {
            if (cResult[7] === syncExternalStore) {
              let tmp17;
              if (cResult[8] === tmp5.loading) {
                tmp17 = cResult[9];
              }
              if (cResult[10] === tmp5.target) {
                if (cResult[11] === tmp17) {
                  let tmp22;
                  if (cResult[12] === tmp13) {
                    tmp22 = cResult[13];
                  }
                  tmp16 = tmp22;
                }
              }
              const obj2 = { style: tmp5.target, children: items };
              items = [tmp13, tmp17];
              const tmp25 = closure_7(closure_5, obj2);
              cResult[10] = tmp5.target;
              cResult[11] = tmp17;
              cResult[12] = tmp13;
              cResult[13] = tmp25;
              tmp22 = tmp25;
            }
            let tmp18 = null;
            if (!syncExternalStore) {
              const obj3 = { style: tmp5.loading, pointerEvents: "none", children: closure_6(closure_4, { size: "large" }) };
              tmp18 = closure_6(closure_5, obj3);
            }
            cResult[7] = syncExternalStore;
            cResult[8] = tmp5.loading;
            cResult[9] = tmp18;
            tmp17 = tmp18;
          }
          return tmp16;
        }
      }
      const obj4 = { webViewKey, temporaryParentNodeTag, style: tmp5.target };
      const tmp15 = closure_6(tmp(7965).WebViewTarget, obj4);
      cResult[3] = tmp5.target;
      cResult[4] = temporaryParentNodeTag;
      cResult[5] = webViewKey;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    }
  }
  const fn = function o() {
    let isWebViewLoadedResult = null != webViewKey;
    if (isWebViewLoadedResult) {
      const obj = FramePoolManagerDefault;
      isWebViewLoadedResult = obj.isWebViewLoaded(frameId, tmp);
    }
    return isWebViewLoadedResult;
  };
  cResult[0] = frameId;
  cResult[1] = webViewKey;
  cResult[2] = fn;
  tmp9 = fn;
}) : (function FrameRenderTarget(frameId) {
  let items;
  let level;
  let presentation;
  frameId = frameId.frameId;
  let flag = frameId.spinnerWhileLoading;
  ({ level, presentation } = frameId);
  if (flag === undefined) {
    flag = false;
  }
  let webViewKey;
  const tmp = closure_8();
  const tmp2 = closure_9(presentation);
  const tmp4 = webViewKey(11873)(frameId, level, tmp2);
  webViewKey = tmp4.webViewKey;
  const temporaryParentNodeTag = tmp4.temporaryParentNodeTag;
  if (null == webViewKey) {
    return null;
  } else {
    const obj2 = { webViewKey, temporaryParentNodeTag, style: tmp.target };
    const tmp13 = closure_6(frameId(7965).WebViewTarget, obj2);
    let tmp6Result = tmp13;
    if (flag) {
      let obj = { style: tmp.target, children: items };
      items = [tmp13, ];
      let tmp11Result = null;
      const tmp6 = closure_7;
      if (!tmp5) {
        const obj3 = { style: tmp.loading, pointerEvents: "none", children: closure_6(closure_4, { size: "large" }) };
        tmp11Result = tmp11(tmp7, obj3);
      }
      items[1] = tmp11Result;
      tmp6Result = tmp6(tmp7, obj);
    }
    return tmp6Result;
  }
});
const result = size.fileFinishedImporting("modules/frames/native/FrameRenderTarget.tsx");

export default tmp6;
