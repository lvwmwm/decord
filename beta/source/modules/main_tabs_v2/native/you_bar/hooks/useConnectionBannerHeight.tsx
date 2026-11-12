// Module ID: 17433
// Function ID: 17434
// Name: useConnectionBannerHeight
// Dependencies: [15916, 17430, 15917, 504, 2]
// Exports: useConnectionBannerHeight

// Module 17433 (useConnectionBannerHeight)
import get_initialized from "get initialized" /* 504 */;
import ConnectivityIndicatorStateStore2 from "ConnectivityIndicatorStateStore" /* 15916 */;
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment" /* 15917 */;
import YouBarConstants from "YouBarConstants" /* 17430 */;
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
