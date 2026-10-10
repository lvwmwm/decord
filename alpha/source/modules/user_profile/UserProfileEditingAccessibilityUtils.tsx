// Module ID: 14912
// Function ID: 14913
// Name: UserProfileEditingAccessibilityUtils
// Dependencies: [1126, 14848, 10265, 2958, 6678, 2]
// Exports: getAvatarAccessibleValue, getBannerAccessibleValue, getDisplayNameStyleAccessibleValue

// Module 14912 (UserProfileEditingAccessibilityUtils)
import intl5 from "intl" /* 1126 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6678 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10265 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 14848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/UserProfileEditingAccessibilityUtils.tsx");

export const getDisplayNameStyleAccessibleValue = function getDisplayNameStyleAccessibleValue(displayNameStyles) {
  if (null == displayNameStyles) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t["3Xph0/"]);
  } else {
    const intl3 = intl5.intl;
    const stringResult = intl3.string(getDisplayNameStylesFontNameDefault(displayNameStyles.fontId));
    const intl4 = intl5.intl;
    const string = intl4.string;
    let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[displayNameStyles.effectId];
    const tmp7 = importDefault;
    if (OpWJ3f == null) {
      OpWJ3f = tmp7(2958).OpWJ3f;
    }
    const colors = displayNameStyles.colors;
    const stringResult1 = string(OpWJ3f);
    const mapped = colors.map((item) => {
      const str = item.toString(16);
      return "#" + str.padStart(6, "0");
    });
    let str = ", ";
    const joined = mapped.join(", ");
    const intl = tmp5(1126).intl;
    const obj = { fontName: stringResult, effectName: stringResult1, colors: joined };
    return intl.formatToPlainString(intl5.t.Igwax6, obj);
  }
};
export const getBannerAccessibleValue = function getBannerAccessibleValue(bannerChange, currentProfileBanner) {
  let description;
  if (null !== bannerChange) {
    if (undefined === bannerChange) {
      return description;
    }
    if (undefined === bannerChange) {
      const intl = intl5.intl;
      description = intl.string(intl5.t.keN7ib);
    } else {
      description = bannerChange.description;
    }
  }
  const intl2 = intl5.intl;
  description = intl2.string(intl5.t["3Xph0/"]);
};
export const getAvatarAccessibleValue = function getAvatarAccessibleValue(avatarChange, avatar) {
  let description;
  if (null !== avatarChange) {
    if (undefined === avatarChange) {
      return description;
    }
    if (undefined === avatarChange) {
      const intl2 = intl5.intl;
      description = intl2.string(intl5.t["16GpW/"]);
    } else {
      if (avatarChange.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
        description = avatarChange.originalAsset.description;
      } else {
        description = avatarChange.description;
      }
      if (description == null) {
        const intl = tmp2(1126).intl;
        description = intl.string(tmp2(1126).t.cqdtrR);
      }
    }
  }
  const intl3 = intl5.intl;
  description = intl3.string(intl5.t["3Xph0/"]);
};
