// Module ID: 14050
// Function ID: 107522
// Name: useConnectionBannerHeight
// Dependencies: [12663, 14047, 12664, 566, 2]
// Exports: useConnectionBannerHeight

// Module 14050 (useConnectionBannerHeight)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ConnectivityIndicatorState as closure_4 } from "_isNativeReflectConstruct";
import { CONNECTION_BANNER_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
  let hidden;
  let timeoutMs;
  const config = importDefault(12664).useConfig({ location: "useConnectionBannerHeight" });
  ({ timeoutMs, hidden } = config);
  require(566) /* initialize */;
  [][0] = _isNativeReflectConstruct;
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
