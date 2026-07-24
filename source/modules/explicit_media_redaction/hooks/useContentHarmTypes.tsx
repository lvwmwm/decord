// Module ID: 9902
// Function ID: 76607
// Name: useEnabledHarmTypesBitmaskForChannelAndAuthorId
// Dependencies: [31, 1316, 1348, 3767, 1849, 5670, 566, 5677, 5673, 2]
// Exports: useEnabledHarmTypesBitmaskForMessage

// Module 9902 (useEnabledHarmTypesBitmaskForChannelAndAuthorId)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  const _require = channelId;
  const dependencyMap = authorId;
  const eligibleHarmTypesConfigsForContext = _require(5670).getEligibleHarmTypesConfigsForContext();
  let obj = _require(5670);
  let items = [closure_6];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_6.getCurrentUser());
  const obj2 = _require(566);
  const items1 = [stateFromStores1, stateFromStores2];
  stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    const items = [stateFromStores1, stateFromStores2];
    return channelId(authorId[5]).getChannelTypeById(channelId, authorId, items);
  });
  const obj3 = _require(566);
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  stateFromStores2 = _require(566).useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((arg0, harmType) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[harmType.harmType] = harmType.getProtoUserSettings(stateFromStores.settings);
    return obj;
  }, {}), items3, _require(5677).areSettingsEqual);
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, authorId, stateFromStores];
  const memo = eligibleHarmTypesConfigsForContext.useMemo(() => {
    if (null != stateFromStores1) {
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      if (tmp !== id) {
        if (null != stateFromStores) {
          const mapped = eligibleHarmTypesConfigsForContext.map((harmType) => {
            let tmp2 = null;
            if (null != outer1_4) {
              tmp2 = harmType.getUserSettingsWithDefaults(tmp)[outer1_4];
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
      tmp = closure_1;
    }
  }, items4);
  if (0 === memo.length) {
    let NONE = _require(5673).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = _require(5670).contentHarmTypesToFlags(memo);
    const obj5 = _require(5670);
  }
  return NONE;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export { useEnabledHarmTypesBitmaskForChannelAndAuthorId };
export const useEnabledHarmTypesBitmaskForMessage = function useEnabledHarmTypesBitmaskForMessage(stateFromStores) {
  if (null == stateFromStores) {
    let channelIdAndAuthorIdFromMessage = {};
  } else {
    channelIdAndAuthorIdFromMessage = require(5670) /* _createForOfIteratorHelperLoose */;
    channelIdAndAuthorIdFromMessage = channelIdAndAuthorIdFromMessage.getChannelIdAndAuthorIdFromMessage(stateFromStores);
  }
  return useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelIdAndAuthorIdFromMessage.channelId, channelIdAndAuthorIdFromMessage.authorId);
};
