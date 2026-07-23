// Module ID: 13580
// Function ID: 104394
// Name: useUploadAvatar
// Dependencies: [5, 31, 1849, 653, 1851, 624, 7941, 4098, 4674, 3776, 7854, 7847, 7844, 7846, 2]
// Exports: default

// Module 13580 (useUploadAvatar)
import defaultAreStatesEqual from "defaultAreStatesEqual";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
require("result").useCallback;
({ AnalyticsPages: closure_6, UPLOAD_MEDIUM_SIZE: closure_7, Base64GIFPrefix: closure_8, AnalyticsSections: closure_9, UpsellTypes: closure_10 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default function useUploadAvatar(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocations = guildId.analyticsLocations;
  let stateFromStores;
  let useCallback;
  const items = [_isNativeReflectConstruct];
  stateFromStores = guildId(analyticsLocations[5]).useStateFromStores(items, () => outer1_5.getCurrentUser());
  const items1 = [analyticsLocations];
  const tmp3 = useCallback(() => {
    let obj = flag(analyticsLocations[6]);
    obj = { initialUpsellKey: outer1_10.ANIMATED_AVATAR, analyticsLocation: obj, analyticsProperties: obj1, analyticsLocations };
    obj = { page: outer1_6.USER_SETTINGS, section: outer1_9.SETTINGS_OVERVIEW };
    const result = obj.handleShowUpsellAlert(obj);
  }, items1);
  useCallback = tmp3;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [stateFromStores, guildId, flag, tmp3];
  return useCallback(stateFromStores(tmp), items2);
};
