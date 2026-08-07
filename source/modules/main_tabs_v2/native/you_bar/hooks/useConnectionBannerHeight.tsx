// Module ID: 14271
// Function ID: 14272
// Name: useConnectionBannerHeight
// Dependencies: [12879, 14268, 12880, 589, 2]
// Exports: useConnectionBannerHeight

// Module 14271 (useConnectionBannerHeight)
import updateState from "updateState";
import { ConnectivityIndicatorState as closure_4 } from "updateState";
import { CONNECTION_BANNER_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
  let hidden;
  let timeoutMs;
  const config = importDefault(12880).useConfig({ location: "useConnectionBannerHeight" });
  ({ timeoutMs, hidden } = config);
  require(589) /* initialize */;
  [][0] = updateState;
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
