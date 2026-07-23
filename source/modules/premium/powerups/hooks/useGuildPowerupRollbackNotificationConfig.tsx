// Module ID: 11529
// Function ID: 89820
// Name: useGuildPowerupRollbackNotificationConfig
// Dependencies: [4017, 566, 4021, 11530, 1334, 1212, 2230, 11532, 2]
// Exports: default

// Module 11529 (useGuildPowerupRollbackNotificationConfig)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("VANITY_URL_POWERUP_SKU_ID").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default function useGuildPowerupRollbackNotificationConfig(guildId, location) {
  const _require = guildId;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getStateForGuild(closure_0));
  let tmp2;
  if (null != stateFromStores) {
    tmp2 = stateFromStores.allPowerups[_require(undefined, 4021).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  if (null != tmp2) {
    const storeRemovalDate = tmp2.storeRemovalDate;
  }
  let obj1 = _require(11530);
  let tmp5 = null;
  if (obj1.useShouldShowFileUploadRollback(guildId, location)) {
    tmp5 = null;
    if (null != storeRemovalDate) {
      let title;
      if (null != tmp2) {
        title = tmp2.title;
      }
      tmp5 = null;
      if (null != title) {
        let cost;
        if (null != tmp2) {
          cost = tmp2.cost;
        }
        tmp5 = null;
        if (null != cost) {
          obj = { dismissibleContent: _require(1334).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION };
          const intl = _require(1212).intl;
          obj = { dateString: importDefault(11532)(storeRemovalDate) };
          obj.title = intl.formatToPlainString(importDefault(2230)["6e2ry1"], obj);
          const intl2 = _require(1212).intl;
          obj1 = { startDate: importDefault(11532)(storeRemovalDate), endDate: importDefault(11532)(storeRemovalDate) };
          let title1;
          if (null != tmp2) {
            title1 = tmp2.title;
          }
          obj1.perkName = title1;
          let cost1;
          if (null != tmp2) {
            cost1 = tmp2.cost;
          }
          obj1.boostCount = cost1;
          obj.description = intl2.formatToPlainString(importDefault(2230).jd8fki, obj1);
          tmp5 = obj;
        }
      }
    }
  }
  return tmp5;
};
