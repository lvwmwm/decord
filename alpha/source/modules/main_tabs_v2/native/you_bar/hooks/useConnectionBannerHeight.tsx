// Module ID: 17007
// Function ID: 17008
// Name: useConnectionBannerHeight
// Dependencies: [15534, 17004, 15535, 504, 2]
// Exports: useConnectionBannerHeight

// Module 17007 (useConnectionBannerHeight)
import get_initialized from "get initialized" /* 504 */;
import ConnectivityIndicatorStateStore2 from "ConnectivityIndicatorStateStore" /* 15534 */;
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment" /* 15535 */;
import YouBarConstants from "YouBarConstants" /* 17004 */;
import size from "module_2" /* 2 */;

const ConnectivityIndicatorStateStore = ConnectivityIndicatorStateStore2;

const constants = ConnectivityIndicatorStateStore2.ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = YouBarConstants.CONNECTION_BANNER_HEIGHT;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export function useConnectionBannerHeight() {
  let hidden;
  let state;
  let timeoutMs;
  const obj = ConnectionIndicatorExperimentDefault;
  const config = obj.useConfig({ location: "useConnectionBannerHeight" });
  ({ timeoutMs, hidden } = config);
  get_initialized;
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
}
