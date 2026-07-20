// Module ID: 13450
// Function ID: 102160
// Name: useUploadAvatar
// Dependencies: [0, 131072, 0, 0, 0]
// Exports: default

// Module 13450 (useUploadAvatar)
import closure_3 from "result";
import closure_5 from "result";
import result from "result";
import { PremiumUpsellTypes } from "result";

arg1(dependencyMap[1]).useCallback;
({ AnalyticsPages: closure_6, UPLOAD_MEDIUM_SIZE: closure_7, Base64GIFPrefix: closure_8, AnalyticsSections: closure_9, UpsellTypes: closure_10 } = result);
result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default function useUploadAvatar(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let flag = guildId.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  const analyticsLocations = guildId.analyticsLocations;
  const dependencyMap = analyticsLocations;
  let callback;
  let useCallback;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => currentUser.getCurrentUser());
  callback = stateFromStores;
  const items1 = [analyticsLocations];
  const tmp3 = useCallback(() => {
    let obj = flag(analyticsLocations[6]);
    obj = { initialUpsellKey: constants3.ANIMATED_AVATAR, analyticsLocation: obj, analyticsProperties: obj1, analyticsLocations };
    obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_OVERVIEW };
    const result = obj.handleShowUpsellAlert(obj);
  }, items1);
  useCallback = tmp3;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [stateFromStores, guildId, flag, tmp3];
  return useCallback(callback(tmp), items2);
};
