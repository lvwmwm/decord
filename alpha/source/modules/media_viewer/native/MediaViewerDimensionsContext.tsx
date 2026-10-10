// Module ID: 8419
// Function ID: 8420
// Name: MediaViewerDimensionsContext
// Dependencies: [19, 21, 558, 576, 1497, 38, 2]

// Module 8419 (MediaViewerDimensionsContext)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaViewerDimensionsProvider(children) {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp4 = useWindowDimensionsDefault(first);
  if (cResult[1] === children) {
    let tmp5;
    if (cResult[2] === tmp4) {
      tmp5 = cResult[3];
    }
    return tmp5;
  }
  const tmp6 = <redux.Provider value={tmp4}>{children}</redux.Provider>;
  cResult[1] = children;
  cResult[2] = tmp4;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : (function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaViewerDimensions() {
  const context = react.useContext(redux);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
}) : (function useMediaViewerDimensions() {
  const context = react.useContext(redux);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = tmp2;
export const useMediaViewerDimensions = tmp3;
