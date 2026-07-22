// Module ID: 9863
// Function ID: 76372
// Name: useEnabledHarmTypesBitmaskForChannelAndAuthorId
// Dependencies: []
// Exports: useEnabledHarmTypesBitmaskForMessage

// Module 9863 (useEnabledHarmTypesBitmaskForChannelAndAuthorId)
function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  authorId = channelId;
  const dependencyMap = authorId;
  const eligibleHarmTypesConfigsForContext = authorId(dependencyMap[5]).getEligibleHarmTypesConfigsForContext();
  const React = eligibleHarmTypesConfigsForContext;
  const obj = authorId(dependencyMap[5]);
  const items = [closure_6];
  const stateFromStores = authorId(dependencyMap[6]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let closure_3 = stateFromStores;
  const obj2 = authorId(dependencyMap[6]);
  const items1 = [closure_4, closure_5];
  const stateFromStores1 = authorId(dependencyMap[6]).useStateFromStores(items1, () => {
    const items = [stateFromStores1, stateFromStores2];
    return arg0(arg1[5]).getChannelTypeById(arg0, arg1, items);
  });
  closure_4 = stateFromStores1;
  const obj3 = authorId(dependencyMap[6]);
  const items2 = [closure_3];
  const items3 = [eligibleHarmTypesConfigsForContext];
  const stateFromStores2 = authorId(dependencyMap[6]).useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((arg0, harmType) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, authorId(dependencyMap[7]).areSettingsEqual);
  closure_5 = stateFromStores2;
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, authorId, stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores1) {
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      if (tmp !== id) {
        if (null != stateFromStores) {
          const mapped = eligibleHarmTypesConfigsForContext.map((harmType) => {
            let tmp2 = null;
            if (null != closure_4) {
              tmp2 = harmType.getUserSettingsWithDefaults(tmp)[closure_4];
            }
            harmType = null;
            if (obj.shouldRedactForSettingValue(tmp2)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter((arg0) => null != arg0);
        }
        return [];
      }
      const tmp = arg1;
    }
  }, items4);
  if (0 === memo.length) {
    let NONE = authorId(dependencyMap[8]).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = authorId(dependencyMap[5]).contentHarmTypesToFlags(memo);
    const obj5 = authorId(dependencyMap[5]);
  }
  return NONE;
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export { useEnabledHarmTypesBitmaskForChannelAndAuthorId };
export const useEnabledHarmTypesBitmaskForMessage = function useEnabledHarmTypesBitmaskForMessage(stateFromStores) {
  if (null == stateFromStores) {
    let channelIdAndAuthorIdFromMessage = {};
  } else {
    channelIdAndAuthorIdFromMessage = arg1(dependencyMap[5]);
    channelIdAndAuthorIdFromMessage = channelIdAndAuthorIdFromMessage.getChannelIdAndAuthorIdFromMessage(stateFromStores);
  }
  return useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelIdAndAuthorIdFromMessage.channelId, channelIdAndAuthorIdFromMessage.authorId);
};
