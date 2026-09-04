// Module ID: 15025
// Function ID: 15026
// Name: useConnectionBannerHeight
// Dependencies: [13610, 15022, 13611, 586, 2]
// Exports: useConnectionBannerHeight

// Module 15025 (useConnectionBannerHeight)
import initialize from "initialize" /* 586 */;
import apexExperimentDefault from "apexExperiment" /* 13611 */;
import closure_3 from "updateState" /* 13610 */;
import { ConnectivityIndicatorState as closure_4 } from "updateState" /* 13610 */;
import { CONNECTION_BANNER_HEIGHT } from "CONNECTION_BANNER_HEIGHT" /* 15022 */;

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
