// Module ID: 8928
// Function ID: 8929
// Name: MediaViewerDimensionsProvider
// Dependencies: [19, 21, 1493, 38, 2]
// Exports: MediaViewerDimensionsProvider, useMediaViewerDimensions

// Module 8928 (MediaViewerDimensionsProvider)
import importAllResult from "noop";
import { jsx } from "jsxProd";

let context = importAllResult.createContext(null);
const result = require("useWindowDimensions").fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={importDefault(1493)({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = importAllResult.useContext(closure_4);
  importDefault(38)(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};
