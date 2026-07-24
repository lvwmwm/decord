// Module ID: 11574
// Function ID: 90138
// Name: useGuildPowerupRollbackModalConfig
// Dependencies: [31, 1838, 4017, 566, 11575, 4021, 11560, 11562, 1334, 1212, 2230, 2]
// Exports: default

// Module 11574 (useGuildPowerupRollbackModalConfig)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default function useGuildPowerupRollbackModalConfig(guildId, location) {
  const _require = guildId;
  let obj = _require(storeRemovalDate[3]);
  let items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(closure_0));
  const tmp2 = importDefault(storeRemovalDate[4])(guildId);
  let shouldShowFileUploadRollback = null != tmp2 && tmp2;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(storeRemovalDate[3]).useStateFromStores(items1, () => outer1_5.getStateForGuild(closure_0));
  let tmp5;
  if (null != stateFromStores1) {
    const allPowerups = stateFromStores1.allPowerups;
    if (null != allPowerups) {
      tmp5 = allPowerups[_require(undefined, storeRemovalDate[5]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
    }
  }
  importDefault = tmp5;
  storeRemovalDate = undefined;
  if (null != tmp5) {
    storeRemovalDate = tmp5.storeRemovalDate;
  }
  const obj2 = _require(storeRemovalDate[3]);
  if (shouldShowFileUploadRollback) {
    shouldShowFileUploadRollback = obj3.useShouldShowFileUploadRollback(guildId, location);
  }
  if (shouldShowFileUploadRollback) {
    shouldShowFileUploadRollback = null != stateFromStores;
  }
  const items2 = [shouldShowFileUploadRollback, tmp5, storeRemovalDate];
  obj = {
    shouldShow: shouldShowFileUploadRollback,
    modalConfig: shouldShowFileUploadRollback.useMemo(() => {
      if (shouldShowFileUploadRollback) {
        if (null != tmp5) {
          if (null != storeRemovalDate) {
            const tmp7 = storeRemovalDate(storeRemovalDate[7])(storeRemovalDate);
            let obj = { dismissibleContent: guildId(storeRemovalDate[8]).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL };
            const intl = guildId(storeRemovalDate[9]).intl;
            obj = { dateString: tmp7 };
            const _HermesInternal = HermesInternal;
            obj.header = "" + storeRemovalDate.title + " " + intl.formatToPlainString(storeRemovalDate(storeRemovalDate[10])["6e2ry1"], obj);
            const intl2 = guildId(storeRemovalDate[9]).intl;
            obj = { startDate: tmp7, endDate: tmp7, perkName: storeRemovalDate.title, boostCount: storeRemovalDate.cost };
            const items = [intl2.formatToPlainString(storeRemovalDate(storeRemovalDate[10]).jd8fki, obj)];
            obj.bodies = items;
            obj.hasCancelButton = false;
            return obj;
          }
        }
      }
      return null;
    }, items2)
  };
  return obj;
};
