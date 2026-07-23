// Module ID: 8236
// Function ID: 65039
// Name: useProfileTheme
// Dependencies: [57, 4122, 8237, 653, 4066, 566, 688, 7812, 665, 7893, 3976, 2]
// Exports: default

// Module 8236 (useProfileTheme)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useEffectiveThemeOverride } from "useProfileThemeOverrideStore";
import { ThemeTypes } from "ME";

const require = arg1;
let result = require("useProfileThemeOverrideStore").fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default function useProfileTheme(arg0) {
  let displayProfile;
  let forceUserTheme;
  let isPreview;
  let pendingAvatarSrc;
  let pendingThemeColors;
  let user;
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp = importDefault(4066)();
  const tmp2 = useEffectiveThemeOverride();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.syncProfileThemeWithUserTheme);
  if (null == pendingAvatarSrc) {
    let avatarURL;
    if (null != user) {
      let guildId;
      if (null != displayProfile) {
        guildId = displayProfile.guildId;
      }
      avatarURL = user.getAvatarURL(guildId, 80);
    }
    pendingAvatarSrc = avatarURL;
  }
  const result = require(688) /* unsafe_getRawColor */.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  const obj2 = require(688) /* unsafe_getRawColor */;
  callback(require(7812) /* hasFetchedColors */.useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp2) {
    return tmp2;
  } else {
    if (null == displayProfile) {
      if (!isPreview) {
        obj = { theme: tmp, primaryColor: null, secondaryColor: null };
        return obj;
      }
    }
    let previewThemeColors;
    if (null != displayProfile) {
      previewThemeColors = displayProfile.getPreviewThemeColors(pendingThemeColors);
    }
    let first;
    if (null != previewThemeColors) {
      first = previewThemeColors[0];
    }
    if (null == first) {
      first = require(665) /* pad2 */.hex2int(tmp8);
      const obj5 = require(665) /* pad2 */;
    }
    let hex2intResult;
    if (null != previewThemeColors) {
      hex2intResult = previewThemeColors[1];
    }
    if (null == hex2intResult) {
      hex2intResult = require(665) /* pad2 */.hex2int(tmp9);
      const obj6 = require(665) /* pad2 */;
    }
    let tmp17 = tmp;
    if (!stateFromStores) {
      tmp17 = tmp;
      if (!forceUserTheme) {
        const profileTheme = require(7893) /* getProfileTheme */.getProfileTheme(first);
        let tmp21 = tmp;
        if (null != profileTheme) {
          tmp21 = profileTheme;
        }
        tmp17 = tmp21;
        const obj7 = require(7893) /* getProfileTheme */;
      }
    }
    if (tmp17 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp17 === ThemeTypes.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = require(3976) /* AccessibilityAnnouncer */.isThemeLight(tmp);
        const obj9 = require(3976) /* AccessibilityAnnouncer */;
      }
      let DARKER = tmp17;
      if (isThemeLightResult) {
        DARKER = ThemeTypes.DARKER;
      }
    } else {
      DARKER = tmp;
      const obj8 = require(3976) /* AccessibilityAnnouncer */;
    }
    obj = { theme: DARKER, primaryColor: first, secondaryColor: hex2intResult };
    return obj;
  }
  const obj3 = require(7812) /* hasFetchedColors */;
};
