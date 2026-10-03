// Module ID: 13092
// Function ID: 13093
// Name: useVibegrationsAppChannelRefreshButton
// Dependencies: [558, 576, 6746, 7515, 8977, 1126, 3723, 11364, 2]

// Module 13092 (useVibegrationsAppChannelRefreshButton)
import _modDef3723 from "module_3723" /* 3723 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 8977 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application_id;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((application_id) => {
  _require = application_id;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("VibegrationsUtils");
  const isVibegrationsChannelCandidate = obj2.useIsVibegrationsChannelCandidate(application_id, "ChannelActions");
  require("AppChannelChat");
  let tmp7 = null;
  if (isVibegrationsChannelCandidate) {
    tmp7 = null;
    if (!tmp6) {
      let tmp8;
      let tmp10;
      let tmp13;
      if (cResult[0] !== application_id.application_id) {
        const fn = function t() {
          application_id = application_id.application_id;
          const tmp = restartVibegrationsAppFramesDefault;
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
        const stringResult = intl.string(_modDef3723.xKexN1);
        cResult[2] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp8) {
        const obj3 = { source: null, IconComponent: tmp(11364).RetryIcon, onPress: tmp8, accessibilityLabel: tmp10 };
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
}) : ((arg0) => {
  let intl;
  _require = arg0;
  let tmp = _require;
  const obj = require("VibegrationsUtils");
  const isVibegrationsChannelCandidate = obj.useIsVibegrationsChannelCandidate(arg0, "ChannelActions");
  require("AppChannelChat");
  let tmp6 = null;
  if (isVibegrationsChannelCandidate) {
    tmp6 = null;
    if (!tmp5) {
      const obj2 = {
        source: null,
        IconComponent: tmp(11364).RetryIcon,
        onPress() {
              application_id = application_id.application_id;
              const tmp = restartVibegrationsAppFramesDefault;
              if (application_id == null) {
                application_id = null;
              }
              return tmp(application_id);
            },
        accessibilityLabel: intl.string(_modDef3723.xKexN1)
      };
      intl = tmp(1126).intl;
      tmp6 = obj2;
    }
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsAppChannelRefreshButton.tsx");

export default tmp2;
