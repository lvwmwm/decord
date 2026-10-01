// Module ID: 12569
// Function ID: 12570
// Name: useIsUserProfileObfuscated
// Dependencies: [7035, 504, 2]
// Exports: default

// Module 12569 (useIsUserProfileObfuscated)
import UserProfileStore from "UserProfileStore" /* 7035 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useIsUserProfileObfuscated.tsx");

export default function useIsUserProfileObfuscated(flags) {
  _require = flags;
  const items = [UserProfileStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => UserProfileStore.getUserProfile(flags.id));
  let bio;
  if (stateFromStores != null) {
    bio = stateFromStores.bio;
  }
  let tmp3 = "" === bio;
  if (tmp3) {
    let pronouns;
    if (stateFromStores != null) {
      pronouns = stateFromStores.pronouns;
    }
    tmp3 = "" === pronouns;
  }
  if (tmp3) {
    let banner;
    if (stateFromStores != null) {
      banner = stateFromStores.banner;
    }
    tmp3 = undefined === banner;
  }
  if (tmp3) {
    let accentColor;
    if (stateFromStores != null) {
      accentColor = stateFromStores.accentColor;
    }
    tmp3 = undefined === accentColor;
  }
  if (tmp3) {
    tmp3 = flags.flags === flags.publicFlags;
  }
  if (tmp3) {
    let badges;
    if (stateFromStores != null) {
      badges = stateFromStores.badges;
    }
    let tmp8 = null == badges;
    if (!tmp8) {
      let length;
      if (stateFromStores != null) {
        const badges1 = stateFromStores.badges;
        if (badges1 != null) {
          length = badges1.length;
        }
      }
      tmp8 = 0 === length;
    }
    tmp3 = tmp8;
  }
  return tmp3;
};
