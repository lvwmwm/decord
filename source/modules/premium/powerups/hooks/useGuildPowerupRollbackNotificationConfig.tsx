// Module ID: 11511
// Function ID: 89721
// Name: useGuildPowerupRollbackNotificationConfig
// Dependencies: []
// Exports: default

// Module 11511 (useGuildPowerupRollbackNotificationConfig)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default function useGuildPowerupRollbackNotificationConfig(guildId, location) {
  location = guildId;
  let obj = location(dependencyMap[1]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  let tmp2;
  if (null != stateFromStores) {
    tmp2 = stateFromStores.allPowerups[closure_0(undefined, closure_2[2]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  if (null != tmp2) {
    const storeRemovalDate = tmp2.storeRemovalDate;
  }
  let obj1 = location(dependencyMap[3]);
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
          obj = { dismissibleContent: location(dependencyMap[4]).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION };
          const intl = location(dependencyMap[5]).intl;
          obj = { dateString: importDefault(dependencyMap[7])(storeRemovalDate) };
          obj.title = intl.formatToPlainString(importDefault(dependencyMap[6]).6e2ry1, obj);
          const intl2 = location(dependencyMap[5]).intl;
          obj1 = { startDate: importDefault(dependencyMap[7])(storeRemovalDate), endDate: importDefault(dependencyMap[7])(storeRemovalDate) };
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
          obj.description = intl2.formatToPlainString(importDefault(dependencyMap[6]).jd8fki, obj1);
          tmp5 = obj;
        }
      }
    }
  }
  return tmp5;
};
