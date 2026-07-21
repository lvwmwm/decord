// Module ID: 11519
// Function ID: 89760
// Name: useShouldShowFileUploadRollback
// Dependencies: []
// Exports: useShouldShowFileUploadRollback

// Module 11519 (useShouldShowFileUploadRollback)
let closure_3 = importDefault(dependencyMap[0]);
const PowerupActiveStatusType = arg1(dependencyMap[1]).PowerupActiveStatusType;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/utils/fileUpload.tsx");

export const useShouldShowFileUploadRollback = function useShouldShowFileUploadRollback(guildId, location) {
  location = guildId;
  const items = [closure_3];
  const stateFromStores = location(dependencyMap[2]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  let tmp2;
  if (null != stateFromStores) {
    tmp2 = stateFromStores.allPowerups[closure_0(undefined, closure_2[3]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  const obj = location(dependencyMap[2]);
  const tmp5 = importDefault(dependencyMap[4])(guildId, tmp2);
  let tmp6 = location(dependencyMap[5]).useFileUpload250MbPowerupRollbackEnabled(guildId, location) && null != tmp2 && null != tmp2.storeRemovalDate;
  if (tmp6) {
    tmp6 = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp6;
};
