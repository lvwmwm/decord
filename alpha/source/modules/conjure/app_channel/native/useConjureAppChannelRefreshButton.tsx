// Module ID: 12827
// Function ID: 12828
// Name: useConjureAppChannelRefreshButton
// Dependencies: [558, 576, 6932, 9249, 12376, 1126, 3827, 12633, 2]

// Module 12827 (useConjureAppChannelRefreshButton)
import _modDef3827 from "module_3827" /* 3827 */;
import restartConjureAppFramesDefault from "restartConjureAppFrames" /* 12376 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppChannelRefreshButton(application_id) {
  _require = application_id;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("ConjureUtils");
  const isConjureChannelCandidate = obj2.useIsConjureChannelCandidate(application_id, "ChannelActions");
  require("AppChannelChat");
  let tmp7 = null;
  if (isConjureChannelCandidate) {
    tmp7 = null;
    if (!tmp6) {
      let tmp8;
      let tmp10;
      let tmp13;
      if (cResult[0] !== application_id.application_id) {
        const fn = function t() {
          application_id = application_id.application_id;
          const tmp = restartConjureAppFramesDefault;
          if (application_id == null) {
            application_id = null;
          }
          return tmp(application_id);
        };
        cResult[0] = application_id.application_id;
        cResult[1] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3827["p4B/7M"]);
        cResult[2] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp8) {
        const obj3 = { source: null, IconComponent: tmp(12633).RetryIcon, onPress: tmp8, accessibilityLabel: tmp10 };
        cResult[3] = tmp8;
        cResult[4] = obj3;
        tmp13 = obj3;
      } else {
        tmp13 = cResult[4];
      }
      tmp7 = tmp13;
    }
  }
  return tmp7;
}) : (function useConjureAppChannelRefreshButton(arg0) {
  let intl;
  _require = arg0;
  let tmp = _require;
  const obj = require("ConjureUtils");
  const isConjureChannelCandidate = obj.useIsConjureChannelCandidate(arg0, "ChannelActions");
  require("AppChannelChat");
  let tmp6 = null;
  if (isConjureChannelCandidate) {
    tmp6 = null;
    if (!tmp5) {
      const obj2 = {
        source: null,
        IconComponent: tmp(12633).RetryIcon,
        onPress() {
              application_id = application_id.application_id;
              const tmp = restartConjureAppFramesDefault;
              if (application_id == null) {
                application_id = null;
              }
              return tmp(application_id);
            },
        accessibilityLabel: intl.string(_modDef3827["p4B/7M"])
      };
      intl = tmp(1126).intl;
      tmp6 = obj2;
    }
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/useConjureAppChannelRefreshButton.tsx");

export default tmp2;
