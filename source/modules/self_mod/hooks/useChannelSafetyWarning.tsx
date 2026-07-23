// Module ID: 10406
// Function ID: 80179
// Name: useChannelSafetyWarning
// Dependencies: [9101, 566, 2]
// Exports: useChannelSafetyWarning

// Module 10406 (useChannelSafetyWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/hooks/useChannelSafetyWarning.tsx");

export const useChannelSafetyWarning = function useChannelSafetyWarning(channelId, LIKELY_ATO) {
  const _require = channelId;
  const dependencyMap = LIKELY_ATO;
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getChannelSafetyWarnings(closure_0), items1);
  const found = stateFromStores.filter((type) => type.type === closure_1);
  return found.find((dismiss_timestamp) => {
    let tmp = null == dismiss_timestamp.dismiss_timestamp;
    if (tmp) {
      let expiry;
      if (null != dismiss_timestamp) {
        expiry = dismiss_timestamp.expiry;
      }
      let tmp3 = null == expiry;
      if (!tmp3) {
        const _Date = Date;
        const _Date2 = Date;
        const parsed = Date.parse(dismiss_timestamp.expiry);
        tmp3 = parsed > Date.now();
      }
      tmp = tmp3;
    }
    return tmp;
  });
};
