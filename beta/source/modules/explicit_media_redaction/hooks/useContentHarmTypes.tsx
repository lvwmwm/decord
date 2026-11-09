// Module ID: 11213
// Function ID: 11214
// Name: useContentHarmTypes
// Dependencies: [19, 1231, 4989, 5082, 1385, 7527, 504, 7535, 7531, 2]
// Exports: useEnabledHarmTypesBitmaskForMessage

// Module 11213 (useContentHarmTypes)
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7527 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  let NONE;
  let currentUser;
  let stateFromStores1;
  let stateFromStores2;
  _require = channelId;
  dependencyMap = authorId;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("ObscuredMediaUtils");
  const eligibleHarmTypesConfigsForContext = obj.getEligibleHarmTypesConfigsForContext();
  let items = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores1, stateFromStores2];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const items = [ChannelStore, RelationshipStore];
    const obj = ObscuredMediaUtils;
    return obj.getChannelTypeById(channelId, authorId, items);
  });
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  const obj4 = require("get initialized");
  stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let settings;
    return eligibleHarmTypesConfigsForContext.reduce((acc, harmType) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
      return obj;
    }, {});
  }, items3, require("SensitiveMediaRedactionSettingUtils").areSettingsEqual);
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, authorId, stateFromStores];
  const memo = eligibleHarmTypesConfigsForContext.useMemo(() => {
    if (null != stateFromStores1) {
      const tmp2 = stateFromStores;
      let id;
      const tmp = authorId;
      if (stateFromStores != null) {
        id = tmp2.id;
      }
      if (tmp !== id) {
        if (null != tmp2) {
          const mapped = eligibleHarmTypesConfigsForContext.map((harmType) => {
            let tmp3 = null;
            if (null != stateFromStores1) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            const obj = channelId(authorId[5]);
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter((item) => null != item);
        }
        return [];
      }
    }
  }, items4);
  if (0 === memo.length) {
    NONE = tmp(7531).ContentHarmTypeBitMask.NONE;
  } else {
    const tmpResult = tmp(7527);
    NONE = tmpResult.contentHarmTypesToFlags(memo);
  }
  return NONE;
}
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export { useEnabledHarmTypesBitmaskForChannelAndAuthorId };
export function useEnabledHarmTypesBitmaskForMessage(stateFromStores) {
  let obj2;
  if (null == stateFromStores) {
    obj2 = {};
  } else {
    const obj = ObscuredMediaUtils;
    obj2 = obj.getChannelIdAndAuthorIdFromMessage(stateFromStores);
  }
  return useEnabledHarmTypesBitmaskForChannelAndAuthorId(obj2.channelId, obj2.authorId);
}
