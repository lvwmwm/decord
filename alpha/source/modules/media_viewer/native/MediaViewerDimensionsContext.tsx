// Module ID: 8858
// Function ID: 8859
// Name: MediaViewerDimensionsContext
// Dependencies: [19, 21, 1492, 38, 2]
// Exports: MediaViewerDimensionsProvider, useMediaViewerDimensions

// Module 8858 (MediaViewerDimensionsContext)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
}
export function useMediaViewerDimensions() {
  const context = react.useContext(redux);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
}
