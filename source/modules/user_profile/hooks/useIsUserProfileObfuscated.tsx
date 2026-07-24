// Module ID: 11942
// Function ID: 92427
// Name: useIsUserProfileObfuscated
// Dependencies: [6855, 566, 2]
// Exports: default

// Module 11942 (useIsUserProfileObfuscated)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useIsUserProfileObfuscated.tsx");

export default function useIsUserProfileObfuscated(flags) {
  const _require = flags;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getUserProfile(id.id));
  let bio;
  if (null != stateFromStores) {
    bio = stateFromStores.bio;
  }
  let tmp3 = "" === bio;
  if (tmp3) {
    let pronouns;
    if (null != stateFromStores) {
      pronouns = stateFromStores.pronouns;
    }
    tmp3 = "" === pronouns;
  }
  if (tmp3) {
    let banner;
    if (null != stateFromStores) {
      banner = stateFromStores.banner;
    }
    tmp3 = undefined === banner;
  }
  if (tmp3) {
    let accentColor;
    if (null != stateFromStores) {
      accentColor = stateFromStores.accentColor;
    }
    tmp3 = undefined === accentColor;
  }
  if (tmp3) {
    tmp3 = flags.flags === flags.publicFlags;
  }
  if (tmp3) {
    let badges;
    if (null != stateFromStores) {
      badges = stateFromStores.badges;
    }
    let tmp8 = null == badges;
    if (!tmp8) {
      let length;
      if (null != stateFromStores) {
        const badges1 = stateFromStores.badges;
        if (null != badges1) {
          length = badges1.length;
        }
      }
      tmp8 = 0 === length;
    }
    tmp3 = tmp8;
  }
  return tmp3;
};
