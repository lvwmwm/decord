// Module ID: 14351
// Function ID: 14352
// Name: useConnectionBannerHeight
// Dependencies: [12955, 14348, 12956, 589, 2]
// Exports: useConnectionBannerHeight

// Module 14351 (useConnectionBannerHeight)
import updateState from "updateState";
import { ConnectivityIndicatorState as closure_4 } from "updateState";
import { CONNECTION_BANNER_HEIGHT } from "CONNECTION_BANNER_HEIGHT";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
  let hidden;
  let timeoutMs;
  const config = importDefault(12956).useConfig({ location: "useConnectionBannerHeight" });
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
