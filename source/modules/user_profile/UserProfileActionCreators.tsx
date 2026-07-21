// Module ID: 7841
// Function ID: 62531
// Name: trackTryOutFeature
// Dependencies: []
// Exports: notifyUnsavedUserProfileChangesInModal, pinUserProfileBadgesOnClient, resetAllPendingChanges, resetPendingProfileChanges, saveProfileChanges, setTryItOutAvatar, setTryItOutAvatarDecoration, setTryItOutBanner, setTryItOutDisplayNameStyles, setTryItOutPreset, setTryItOutProfileEffect, setTryItOutThemeColors

// Module 7841 (trackTryOutFeature)
function trackTryOutFeature(ANIMATED_AVATAR) {
  let obj = importDefault(dependencyMap[7]);
  obj = { feature_name: ANIMATED_AVATAR, feature_tier: constants3.PREMIUM_STANDARD };
  obj.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
}
async function _saveProfileChanges(bio, guildId, arg2, arg3) {
  let bannerSurface;
  let url;
  const currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = callback(closure_2[8]);
    if (tmp7) {
      let obj1 = callback2(closure_2[9]);
      bio.bio = obj1.parse(undefined, bio.bio).content;
    }
    let obj2 = callback2(closure_2[10]);
    obj = { type: "USER_PROFILE_UPDATE_START", userId: tmp3, guildId };
    obj2.dispatch(obj);
    if (null != guildId) {
      obj = { url: closure_7.USER_GUILD_PROFILE(guildId, closure_8), bannerSurface: callback(closure_2[11]).SafetyScannedUploadSurface.USER_GUILD_PROFILE_BANNER };
      obj1 = obj;
    } else {
      obj1 = { url: closure_7.USER_PROFILE(closure_8), bannerSurface: callback(closure_2[11]).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_BANNER };
    }
    ({ url, bannerSurface } = obj1);
    const HTTP = callback(closure_2[12]).HTTP;
    obj2 = { url, body: bio };
    const tmp7 = null != bio.bio && obj.getShouldConvertBioEmoji();
    const obj3 = {};
    obj3[bannerSurface] = arg2;
    obj2.headers = callback2(closure_2[13]).buildHeadersForMd5(obj3);
    obj2.oldFormErrors = true;
    obj2.rejectWithError = false;
    const tmp28 = yield HTTP.patch(obj2);
    const obj8 = callback2(closure_2[13]);
    const obj4 = { type: "USER_PROFILE_UPDATE_SUCCESS", userId: id, guildId };
    const merged = Object.assign(tmp28.body);
    callback2(closure_2[10]).dispatch(obj4);
    return tmp28;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ ComponentActions: closure_5, AnalyticEvents: closure_6, Endpoints: closure_7, ME: closure_8 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticsPremiumFeatureTiers: closure_9, AnalyticsPremiumFeatureNames: closure_10 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_profile/UserProfileActionCreators.tsx");

export const notifyUnsavedUserProfileChangesInModal = function notifyUnsavedUserProfileChangesInModal() {
  const ComponentDispatch = arg1(dependencyMap[4]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.SHAKE_PROFILE_MODAL);
  const ComponentDispatch2 = arg1(dependencyMap[4]).ComponentDispatch;
  ComponentDispatch2.dispatch(constants.EMPHASIZE_NOTICE);
  const AccessibilityAnnouncer = arg1(dependencyMap[5]).AccessibilityAnnouncer;
  const intl = arg1(dependencyMap[6]).intl;
  const intl2 = arg1(dependencyMap[6]).intl;
  AccessibilityAnnouncer.announce("" + intl.string(arg1(dependencyMap[6]).t.GP7JLE) + " " + intl2.string(arg1(dependencyMap[6]).t.gKoO1D));
};
export const saveProfileChanges = function saveProfileChanges(profileChangesForUpdateRequest, id2, bannerOriginalMd5) {
  return _saveProfileChanges(...arguments);
};
export const pinUserProfileBadgesOnClient = function pinUserProfileBadgesOnClient(items, ttlInSeconds) {
  const currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = importDefault(dependencyMap[10]);
    obj = { type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: items, ttlInSeconds, userId: id };
    obj.dispatch(obj);
  }
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  importDefault(dependencyMap[10]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPendingChanges = function resetAllPendingChanges() {
  importDefault(dependencyMap[10]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const setTryItOutAvatar = function setTryItOutAvatar(pendingImage) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: pendingImage };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.ANIMATED_AVATAR);
};
export const setTryItOutAvatarDecoration = function setTryItOutAvatarDecoration(avatarDecoration) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.AVATAR_DECORATION);
};
export const setTryItOutProfileEffect = function setTryItOutProfileEffect(profileEffect) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT", profileEffect };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PROFILE_EFFECT);
};
export const setTryItOutBanner = function setTryItOutBanner(first) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: first };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PROFILE_BANNER);
};
export const setTryItOutThemeColors = function setTryItOutThemeColors(themeColors) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PROFILE_THEME_COLOR);
};
export const setTryItOutDisplayNameStyles = function setTryItOutDisplayNameStyles(displayNameStyles) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.DISPLAY_NAME_STYLES);
};
export const setTryItOutPreset = function setTryItOutPreset(arg0) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PRESET);
};
