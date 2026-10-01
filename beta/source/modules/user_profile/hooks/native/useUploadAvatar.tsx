// Module ID: 14166
// Function ID: 14167
// Name: useUploadAvatar
// Dependencies: [5, 19, 1372, 1074, 1374, 563, 8614, 4800, 5450, 4488, 14150, 7614, 7612, 7609, 7611, 2]
// Exports: default

// Module 14166 (useUploadAvatar)
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let c3;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let useCallback = react.useCallback;
({ AnalyticsPages: metroRequire, UPLOAD_MEDIUM_SIZE: metroImportDefault, Base64GIFPrefix: metroImportAll, AnalyticsSections: c9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default function useUploadAvatar(guildId) {
  let closure_4;
  let currentUser;
  guildId = guildId.guildId;
  let flag = guildId.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let analyticsLocations = guildId.analyticsLocations;
  useCallback = undefined;
  let obj = guildId(analyticsLocations[5]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [analyticsLocations];
  const tmp2 = useCallback(() => {
    let obj3;
    let obj4;
    const obj2 = { initialUpsellKey: constants2.ANIMATED_AVATAR, analyticsLocation: obj3, analyticsProperties: obj4, analyticsLocations };
    obj3 = { page: metroRequire.USER_SETTINGS, section: constants.SETTINGS_OVERVIEW };
    obj4 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
    const obj = PremiumUpsellUtilsDefault;
    const result = obj.handleShowUpsellAlert(obj2);
  }, items1);
  useCallback = tmp2;
  const items2 = [stateFromStores, guildId, flag, tmp2];
  return useCallback(stateFromStores(function*(arg0, value) {
    let c2;
    let closure_0;
    let closure_1;
    let obj3;
    function isGIF(base64) {
      const match = base64.match;
      const regExp = new RegExp("^" + closure_1_8, "i");
      return null != match(regExp);
    }
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        let base64;
        let originalMd5;
        let avatar;
        c3 = 2;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp = undefined;
            base64 = undefined;
            originalMd5 = undefined;
            avatar = undefined;
            const obj12 = tmp(analyticsLocations[7]);
            obj12.hideActionSheet();
            const obj5 = { size };
            const obj13 = tmp(analyticsLocations[8]);
            analyticsLocations = 1;
            c3 = 1;
            const obj7 = { value: obj13.openImagePicker(obj5), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          tmp = value;
          base64 = tmp.base64;
          originalMd5 = tmp.originalMd5;
          if (null != base64) {
            let canUseAnimatedAvatarResult = closure_129_1;
            if (!canUseAnimatedAvatarResult) {
              const obj = tmp2(analyticsLocations[9]);
              canUseAnimatedAvatarResult = obj.canUseAnimatedAvatar(closure_129_3);
            }
            c3 = canUseAnimatedAvatarResult;
            if (isGIF(base64)) {
              const tmp12 = c3;
              if (!tmp12) {
                closure_129_4();
              }
            }
            const obj9 = { imageUri: base64, description: obj3.generateAvatarDescription(), originalMd5 };
            const createPendingImage = tmp(analyticsLocations[10]).createPendingImage;
            const tmp20 = tmp(analyticsLocations[10]);
            obj3 = tmp(analyticsLocations[11]);
            avatar = createPendingImage(obj9);
            if (closure_129_1) {
              const tmp28Result = tmp(analyticsLocations[12]);
              tmp28Result.setTryItOutAvatar(avatar);
            } else {
              const obj10 = { guildId: closure_129_0, avatar };
              const tmp28Result2 = tmp(analyticsLocations[13]);
              tmp28Result2.setPendingChanges(obj10);
              const obj6 = tmp(analyticsLocations[14]);
              const result = obj6.announcePendingAvatarChange("set");
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp38) {
        c3 = 3;
        throw tmp38;
      }
    }
  }), items2);
};
