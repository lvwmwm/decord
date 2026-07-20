// Module ID: 13869
// Function ID: 104948
// Name: useConnectionBannerHeight
// Dependencies: []
// Exports: useConnectionBannerHeight

// Module 13869 (useConnectionBannerHeight)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[0]).ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = arg1(dependencyMap[1]).CONNECTION_BANNER_HEIGHT;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
  let hidden;
  let timeoutMs;
  const config = importDefault(dependencyMap[2]).useConfig({ location: "useConnectionBannerHeight" });
  ({ timeoutMs, hidden } = config);
  arg1(dependencyMap[3]);
  [][0] = closure_3;
  let num = 0;
  if (null != timeoutMs) {
    num = 0;
    if (!hidden) {
      num = 0;
      if (tmp3 !== constants.HIDDEN) {
        num = CONNECTION_BANNER_HEIGHT;
      }
    }
  }
  return num;
};
