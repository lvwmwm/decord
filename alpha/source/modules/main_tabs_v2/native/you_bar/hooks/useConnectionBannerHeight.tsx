// Module ID: 14630
// Function ID: 14631
// Name: useConnectionBannerHeight
// Dependencies: [13231, 14627, 13232, 504, 2]
// Exports: useConnectionBannerHeight

// Module 14630 (useConnectionBannerHeight)
import initialize from "initialize" /* 504 */;
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment" /* 13232 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 13231 */;

require = fn;
const constants = fn(13231).ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = fn(14627).CONNECTION_BANNER_HEIGHT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
  const config = ConnectionIndicatorExperimentDefault.useConfig({ location: "useConnectionBannerHeight" });
  ({ timeoutMs, hidden } = config);
  initialize;
  [][0] = ConnectivityIndicatorStateStore;
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
