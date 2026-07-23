// Module ID: 8296
// Function ID: 65501
// Name: MediaViewerDimensionsProvider
// Dependencies: [31, 33, 1450, 44, 2]
// Exports: MediaViewerDimensionsProvider, useMediaViewerDimensions

// Module 8296 (MediaViewerDimensionsProvider)
import importAllResult from "result";
import { jsx } from "jsxProd";

let context = importAllResult.createContext(null);
const result = require("useWindowDimensions").fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={importDefault(1450)({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = importAllResult.useContext(closure_4);
  importDefault(44)(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};
