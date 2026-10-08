// Module ID: 14746
// Function ID: 14747
// Name: UserProfileEditingAccessibilityUtils
// Dependencies: [1126, 14686, 10249, 2955, 2]
// Exports: getBannerAccessibleValue, getDisplayNameStyleAccessibleValue

// Module 14746 (UserProfileEditingAccessibilityUtils)
import intl5 from "intl" /* 1126 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10249 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 14686 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/UserProfileEditingAccessibilityUtils.tsx");

export const getDisplayNameStyleAccessibleValue = function getDisplayNameStyleAccessibleValue(stateFromStores) {
  if (null == stateFromStores) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t["3Xph0/"]);
  } else {
    const intl3 = intl5.intl;
    const stringResult = intl3.string(getDisplayNameStylesFontNameDefault(stateFromStores.fontId));
    const intl4 = intl5.intl;
    const string = intl4.string;
    let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[stateFromStores.effectId];
    const tmp7 = importDefault;
    if (OpWJ3f == null) {
      OpWJ3f = tmp7(2955).OpWJ3f;
    }
    const colors = stateFromStores.colors;
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
