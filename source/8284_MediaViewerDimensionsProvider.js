// Module ID: 8284
// Function ID: 65427
// Name: MediaViewerDimensionsProvider
// Dependencies: []
// Exports: MediaViewerDimensionsProvider, useMediaViewerDimensions

// Module 8284 (MediaViewerDimensionsProvider)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={importDefault(dependencyMap[2])({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = importAllResult.useContext(closure_4);
  importDefault(dependencyMap[3])(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};
