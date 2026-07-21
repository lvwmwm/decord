// Module ID: 11902
// Function ID: 92122
// Name: useIsUserProfileObfuscated
// Dependencies: []
// Exports: default

// Module 11902 (useIsUserProfileObfuscated)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/user_profile/hooks/useIsUserProfileObfuscated.tsx");

export default function useIsUserProfileObfuscated(flags) {
  const arg1 = flags;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => userProfile.getUserProfile(arg0.id));
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
