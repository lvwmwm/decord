// Module ID: 14521
// Function ID: 14522
// Name: useConnectionBannerHeight
// Dependencies: [13291, 14518, 13292, 589, 2]
// Exports: useConnectionBannerHeight

// Module 14521 (useConnectionBannerHeight)
import initialize from "initialize" /* 589 */;
import apexExperimentDefault from "apexExperiment" /* 13292 */;
import closure_3 from "updateState" /* 13291 */;
import { ConnectivityIndicatorState as closure_4 } from "updateState" /* 13291 */;
import { CONNECTION_BANNER_HEIGHT } from "CONNECTION_BANNER_HEIGHT" /* 14518 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = function useConnectionBannerHeight() {
  const config = apexExperimentDefault.useConfig({ location: "useConnectionBannerHeight" });
  ({ timeoutMs, hidden } = config);
  initialize;
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
