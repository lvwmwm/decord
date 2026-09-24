// Module ID: 8601
// Function ID: 8602
// Name: MediaViewerDimensionsContext
// Dependencies: [19, 21, 558, 568, 1482, 38, 2]

// Module 8601 (MediaViewerDimensionsContext)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 568 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(4);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp4 = useWindowDimensionsDefault(first);
  if (cResult[1] === children) {
    if (cResult[2] === tmp4) {
      let tmp5 = cResult[3];
    }
    return tmp5;
  }
  const tmp6 = <redux.Provider value={tmp4}>{children}</redux.Provider>;
  cResult[1] = children;
  cResult[2] = tmp4;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((children) => <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = tmp2;
export const useMediaViewerDimensions = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const context = noop.useContext(closure_5);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
}) : (() => {
  const context = noop.useContext(closure_5);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
});
