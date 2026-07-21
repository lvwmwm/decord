// Module ID: 11533
// Function ID: 89831
// Name: useGuildPowerupRollbackModalConfig
// Dependencies: []
// Exports: default

// Module 11533 (useGuildPowerupRollbackModalConfig)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default function useGuildPowerupRollbackModalConfig(guildId, location) {
  location = guildId;
  let obj = location(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(arg0));
  const tmp2 = importDefault(dependencyMap[4])(guildId);
  let shouldShowFileUploadRollback = null != tmp2 && tmp2;
  const items1 = [closure_5];
  const stateFromStores1 = location(dependencyMap[3]).useStateFromStores(items1, () => stateForGuild.getStateForGuild(arg0));
  let tmp5;
  if (null != stateFromStores1) {
    const allPowerups = stateFromStores1.allPowerups;
    if (null != allPowerups) {
      tmp5 = allPowerups[closure_0(undefined, closure_2[5]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
    }
  }
  const importDefault = tmp5;
  let storeRemovalDate;
  if (null != tmp5) {
    storeRemovalDate = tmp5.storeRemovalDate;
  }
  const dependencyMap = storeRemovalDate;
  const obj2 = location(dependencyMap[3]);
  if (shouldShowFileUploadRollback) {
    shouldShowFileUploadRollback = obj3.useShouldShowFileUploadRollback(guildId, location);
  }
  if (shouldShowFileUploadRollback) {
    shouldShowFileUploadRollback = null != stateFromStores;
  }
  const React = shouldShowFileUploadRollback;
  const items2 = [shouldShowFileUploadRollback, tmp5, storeRemovalDate];
  obj = {
    shouldShow: shouldShowFileUploadRollback,
    modalConfig: React.useMemo(() => {
      if (shouldShowFileUploadRollback) {
        if (null != tmp5) {
          if (null != storeRemovalDate) {
            const tmp7 = storeRemovalDate(storeRemovalDate[7])(storeRemovalDate);
            let obj = { dismissibleContent: arg0(storeRemovalDate[8]).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL };
            const intl = arg0(storeRemovalDate[9]).intl;
            obj = { dateString: tmp7 };
            const _HermesInternal = HermesInternal;
            obj.header = "" + storeRemovalDate.title + " " + intl.formatToPlainString(storeRemovalDate(storeRemovalDate[10]).6e2ry1, obj);
            const intl2 = arg0(storeRemovalDate[9]).intl;
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
