// Module ID: 7936
// Function ID: 62897
// Name: trackTryOutFeature
// Dependencies: [5, 1849, 653, 1851, 1207, 3976, 1212, 675, 7937, 6923, 686, 7938, 507, 7941, 4029, 2]
// Exports: notifyUnsavedUserProfileChangesInModal, pinUserProfileBadgesOnClient, resetAllPendingChanges, resetPendingProfileChanges, saveProfileChanges, setTryItOutAvatar, setTryItOutAvatarDecoration, setTryItOutBanner, setTryItOutDisplayNameStyles, setTryItOutPreset, setTryItOutProfileEffect, setTryItOutThemeColors

// Module 7936 (trackTryOutFeature)
import AccessibilityAnnouncer from "AccessibilityAnnouncer";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function trackTryOutFeature(ANIMATED_AVATAR) {
  let obj = importDefault(675);
  obj = { feature_name: ANIMATED_AVATAR, feature_tier: constants3.PREMIUM_STANDARD };
  obj.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
}
async function _saveProfileChanges(arg0, arg1, arg2, arg3) {
  let bannerSurface;
  let url;
  const currentUser = outer2_4.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = outer2_0(outer2_2[8]);
    if (tmp7) {
      let obj1 = outer2_1(outer2_2[9]);
      arg0.bio = obj1.parse(undefined, arg0.bio).content;
    }
    let obj2 = outer2_1(outer2_2[10]);
    obj = { type: "USER_PROFILE_UPDATE_START", userId: tmp3, guildId: arg1 };
    obj2.dispatch(obj);
    if (null != arg1) {
      obj = { url: outer2_7.USER_GUILD_PROFILE(arg1, outer2_8), bannerSurface: outer2_0(outer2_2[11]).SafetyScannedUploadSurface.USER_GUILD_PROFILE_BANNER };
      obj1 = obj;
    } else {
      obj1 = { url: outer2_7.USER_PROFILE(outer2_8), bannerSurface: outer2_0(outer2_2[11]).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_BANNER };
    }
    ({ url, bannerSurface } = obj1);
    const HTTP = outer2_0(outer2_2[12]).HTTP;
    obj2 = { url, body: arg0 };
    tmp7 = null != arg0.bio && obj.getShouldConvertBioEmoji();
    const obj3 = {};
    obj3[bannerSurface] = arg2;
    obj2.headers = outer2_1(outer2_2[13]).buildHeadersForMd5(obj3);
    obj2.oldFormErrors = true;
    obj2.rejectWithError = false;
    const tmp28 = yield HTTP.patch(obj2);
    const obj8 = outer2_1(outer2_2[13]);
    const obj4 = { type: "USER_PROFILE_UPDATE_SUCCESS", userId: id, guildId: arg1 };
    const merged = Object.assign(tmp28.body);
    outer2_1(outer2_2[10]).dispatch(obj4);
    return tmp28;
  }
}
({ ComponentActions: closure_5, AnalyticEvents: closure_6, Endpoints: closure_7, ME: closure_8 } = ME);
({ AnalyticsPremiumFeatureTiers: closure_9, AnalyticsPremiumFeatureNames: closure_10 } = GuildFeatures);
const result = require("ME").fileFinishedImporting("modules/user_profile/UserProfileActionCreators.tsx");

export const notifyUnsavedUserProfileChangesInModal = function notifyUnsavedUserProfileChangesInModal() {
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(constants.SHAKE_PROFILE_MODAL);
  const ComponentDispatch2 = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch2.dispatch(constants.EMPHASIZE_NOTICE);
  const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  const intl = require(1212) /* getSystemLocale */.intl;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  AccessibilityAnnouncer.announce("" + intl.string(require(1212) /* getSystemLocale */.t.GP7JLE) + " " + intl2.string(require(1212) /* getSystemLocale */.t.gKoO1D));
};
export const saveProfileChanges = function saveProfileChanges(profileChangesForUpdateRequest, id2, bannerOriginalMd5) {
  return _saveProfileChanges(...arguments);
};
export const pinUserProfileBadgesOnClient = function pinUserProfileBadgesOnClient(items, ttlInSeconds) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = importDefault(686);
    obj = { type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: items, ttlInSeconds, userId: id };
    obj.dispatch(obj);
  }
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPendingChanges = function resetAllPendingChanges() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const setTryItOutAvatar = function setTryItOutAvatar(pendingImage) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: pendingImage };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.ANIMATED_AVATAR);
};
export const setTryItOutAvatarDecoration = function setTryItOutAvatarDecoration(avatarDecoration) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.AVATAR_DECORATION);
};
export const setTryItOutProfileEffect = function setTryItOutProfileEffect(profileEffect) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT", profileEffect };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PROFILE_EFFECT);
};
export const setTryItOutBanner = function setTryItOutBanner(first) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: first };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PROFILE_BANNER);
};
export const setTryItOutThemeColors = function setTryItOutThemeColors(themeColors) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PROFILE_THEME_COLOR);
};
export const setTryItOutDisplayNameStyles = function setTryItOutDisplayNameStyles(displayNameStyles) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles };
  obj.dispatch(obj);
  trackTryOutFeature(constants4.DISPLAY_NAME_STYLES);
};
export const setTryItOutPreset = function setTryItOutPreset(arg0) {
  let obj = importDefault(686);
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
  trackTryOutFeature(constants4.PRESET);
};
