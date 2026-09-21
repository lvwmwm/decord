// Module ID: 15357
// Function ID: 15358
// Name: useConnectionBannerHeight
// Dependencies: [13954, 15354, 558, 568, 13955, 504, 2]

// Module 15357 (useConnectionBannerHeight)
import c from "c" /* 568 */;
import ConnectionIndicatorExperimentDefault from "ConnectionIndicatorExperiment" /* 13955 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 13954 */;

const initialize = tmp(504);
require = fn;
const constants = fn(13954).ConnectivityIndicatorState;
const CONNECTION_BANNER_HEIGHT = fn(15354).CONNECTION_BANNER_HEIGHT;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useConnectionBannerHeight.tsx");

export const useConnectionBannerHeight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useConnectionBannerHeight" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const config = ConnectionIndicatorExperimentDefault.useConfig(first);
  ({ timeoutMs, hidden } = config);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectivityIndicatorStateStore];
    const fn = function l() {
      return state.getState();
    };
    cResult[1] = items;
    cResult[2] = fn;
  }
  initialize;
  let num4 = 0;
  if (null != timeoutMs) {
    num4 = 0;
    if (!hidden) {
      num4 = 0;
      if (tmp10 !== constants.HIDDEN) {
        num4 = CONNECTION_BANNER_HEIGHT;
      }
    }
  }
  return num4;
}) : (() => {
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
});
