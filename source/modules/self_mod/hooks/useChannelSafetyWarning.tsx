// Module ID: 10389
// Function ID: 80082
// Name: useChannelSafetyWarning
// Dependencies: []
// Exports: useChannelSafetyWarning

// Module 10389 (useChannelSafetyWarning)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/self_mod/hooks/useChannelSafetyWarning.tsx");

export const useChannelSafetyWarning = function useChannelSafetyWarning(channelId, LIKELY_ATO) {
  LIKELY_ATO = channelId;
  const dependencyMap = LIKELY_ATO;
  const items = [closure_2];
  const items1 = [channelId];
  const stateFromStores = LIKELY_ATO(dependencyMap[1]).useStateFromStores(items, () => channelSafetyWarnings.getChannelSafetyWarnings(arg0), items1);
  const found = stateFromStores.filter((type) => type.type === arg1);
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
