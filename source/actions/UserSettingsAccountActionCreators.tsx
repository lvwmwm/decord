// Module ID: 9266
// Function ID: 72378
// Name: saveProfileAndAccountRequest
// Dependencies: [5, 653, 5591, 686, 507, 5588, 1198, 587, 7941, 7938, 9267, 7375, 2]
// Exports: accountDetailsClose, accountDetailsInit, clearErrors, disableAccount, getHarvestStatus, requestHarvest, resetAccount, resetAllPending, resetAllTryItOut, resetAndCloseUserProfileForm, resetPendingAccountChanges, resetPendingLegacyUsernameDisabled, resetPendingPrimaryGuildChanges, saveAccountChanges, saveProfileAndAccountChanges, updateAccount

// Module 9266 (saveProfileAndAccountRequest)
import dispatchLogout from "dispatchLogout";
import ME from "ME";
import str2 from "str2";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function saveProfileAndAccountRequest(arg0, arg1) {
  return _saveProfileAndAccountRequest(...arguments);
}
function _saveProfileAndAccountRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ Endpoints: closure_4, Routes: closure_5, DEVICE_TOKEN: closure_6, DEVICE_VOIP_TOKEN: closure_7 } = ME);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_8, getDevicePushProvider: closure_9 } = require("str2"));
let result = require("str2").fileFinishedImporting("actions/UserSettingsAccountActionCreators.tsx");

export const accountDetailsInit = function accountDetailsInit() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
};
export const accountDetailsClose = function accountDetailsClose() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
};
export const disableAccount = function disableAccount(password, arg1) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: arg1 ? closure_4.DELETE_ACCOUNT : closure_4.DISABLE_ACCOUNT, body: obj, oldFormErrors: true };
  obj = { password, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  const obj3 = require(507) /* _isNativeReflectConstruct */;
  const tmp2 = arg1 ? closure_4.DELETE_ACCOUNT : closure_4.DISABLE_ACCOUNT;
  return HTTP.post(obj).then(() => {
    outer1_1(outer1_2[5]).logoutInternal();
    const obj = outer1_1(outer1_2[5]);
    outer1_0(outer1_2[6]).transitionTo(outer1_5.DEFAULT_LOGGED_OUT);
  });
};
export { saveProfileAndAccountRequest };
export const saveProfileAndAccountChanges = function saveProfileAndAccountChanges(accountUpdateForUpdateRequest) {
  let avatarDecoration;
  let avatarDescription;
  let avatarOriginalMd5;
  let discriminator;
  let displayNameStyles;
  let email;
  let emailToken;
  let globalName;
  let legacyUsername;
  let nameplate;
  let newPassword;
  let password;
  let primaryGuildId;
  let username;
  const avatar = accountUpdateForUpdateRequest.avatar;
  const avatarId = accountUpdateForUpdateRequest.avatarId;
  ({ avatarDecoration, nameplate, primaryGuildId, displayNameStyles } = accountUpdateForUpdateRequest);
  ({ username, discriminator, email, emailToken, password, avatarDescription, newPassword, globalName, legacyUsername, avatarOriginalMd5 } = accountUpdateForUpdateRequest);
  let obj = avatarId(686);
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
  obj = { username, email, email_token: emailToken, password, avatar, avatar_description: avatarDescription, avatar_id: avatarId, discriminator, global_name: globalName, legacy_username: legacyUsername, new_password: newPassword };
  if (undefined !== avatarDecoration) {
    let skuId;
    if (null != avatarDecoration) {
      skuId = avatarDecoration.skuId;
    }
    let tmp4 = null;
    if (null != skuId) {
      tmp4 = skuId;
    }
    obj.avatar_decoration_sku_id = tmp4;
  }
  if (undefined !== nameplate) {
    let skuId1;
    if (null != nameplate) {
      skuId1 = nameplate.skuId;
    }
    let tmp7 = null;
    if (null != skuId1) {
      tmp7 = skuId1;
    }
    obj.nameplate_sku_id = tmp7;
  }
  if (undefined !== primaryGuildId) {
    obj.primary_guild_id = primaryGuildId;
  }
  if (null != displayNameStyles) {
    ({ fontId: obj2.display_name_font_id, effectId: obj2.display_name_effect_id, colors: obj2.display_name_colors } = displayNameStyles);
  } else if (null === displayNameStyles) {
    obj.display_name_font_id = null;
    obj.display_name_effect_id = null;
    obj.display_name_colors = null;
  }
  const Storage = avatar(587).Storage;
  let value = Storage.get(closure_6);
  const tmp9 = callback2();
  if (tmp10) {
    obj.push_provider = tmp9;
    obj.push_token = value;
  }
  const Storage2 = avatar(587).Storage;
  value = Storage2.get(closure_7);
  if (tmp12) {
    obj.push_voip_provider = closure_8;
    obj.push_voip_token = value;
  }
  obj = { headers: avatarId(7941).buildHeadersForMd5({ [closure_0(closure_2[9]).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_AVATAR]: avatarOriginalMd5 }) };
  const obj4 = avatarId(7941);
  tmp10 = null != tmp9 && null != value;
  tmp12 = null != closure_8 && null != value;
  return saveProfileAndAccountRequest(obj, obj).then((arg0) => {
    let obj = avatarId(outer1_2[3]);
    obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" });
    let tmp2 = null == avatar;
    if (tmp2) {
      tmp2 = null == avatarId;
    }
    if (!tmp2) {
      obj = { type: "RECENT_AVATARS_UPDATE" };
      avatarId(outer1_2[3]).dispatch(obj);
      const obj2 = avatarId(outer1_2[3]);
    }
    return arg0;
  }, (body) => {
    let obj = avatarId(outer1_2[3]);
    obj = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};
export const getHarvestStatus = function getHarvestStatus() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: constants.USER_HARVEST, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const requestHarvest = function requestHarvest(backends) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: constants.USER_HARVEST, body: obj, oldFormErrors: true };
  obj = { backends, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const clearErrors = function clearErrors() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
export const resetPendingAccountChanges = function resetPendingAccountChanges() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOut = function resetAllTryItOut() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const resetAndCloseUserProfileForm = function resetAndCloseUserProfileForm() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
};
export const resetPendingLegacyUsernameDisabled = function resetPendingLegacyUsernameDisabled() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
};
export const resetPendingPrimaryGuildChanges = function resetPendingPrimaryGuildChanges() {
  importDefault(686).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
};
export const updateAccount = function updateAccount(settings) {
  let obj = importDefault(686);
  obj = { type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT", settings };
  obj.dispatch(obj);
};
export const resetAccount = function resetAccount() {
  importDefault(686).dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
};
export const saveAccountChanges = function saveAccountChanges(password, close) {
  let obj = avatar(newPassword[3]);
  obj.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
  password = password.password;
  avatar = password.avatar;
  newPassword = password.newPassword;
  const discriminator = password.discriminator;
  close = close.close;
  obj = { username: password.username, email: password.email, email_token: password.emailToken, password, avatar, new_password: newPassword };
  let tmp2;
  if (null != discriminator) {
    if ("" !== discriminator) {
      tmp2 = discriminator;
    }
  }
  obj.discriminator = tmp2;
  const Storage = password(newPassword[7]).Storage;
  let value = Storage.get(closure_6);
  const tmp4 = callback2();
  if (tmp5) {
    obj.push_provider = tmp4;
    obj.push_token = value;
  }
  const Storage2 = password(newPassword[7]).Storage;
  value = Storage2.get(closure_7);
  if (tmp7) {
    obj.push_voip_provider = closure_8;
    obj.push_voip_token = value;
  }
  const HTTP = password(newPassword[4]).HTTP;
  obj = { url: constants.ME, oldFormErrors: true, body: obj, rejectWithError: password(newPassword[4]).rejectWithMigratedError() };
  const obj4 = password(newPassword[4]);
  tmp5 = null != tmp4 && null != value;
  tmp7 = null != closure_8 && null != value;
  return HTTP.patch(obj).then((body) => {
    body = body.body;
    delete tmp.token;
    let obj = avatar(newPassword[3]);
    obj = { type: "UPDATE_TOKEN", token: body.token, userId: body.id };
    obj.dispatch(obj);
    let obj2 = avatar(newPassword[3]);
    obj2.dispatch({ type: "CURRENT_USER_UPDATE", user: body });
    if (undefined !== avatar) {
      let obj3 = password(newPassword[10]);
      obj = { avatarHash: body.avatar };
      const result = obj3.trackUserAvatarUpdated(obj);
    }
    if (null != newPassword) {
      const obj1 = { type: "USER_PASSWORD_UPDATE", user: body, newPassword };
      avatar(newPassword[3]).dispatch(obj1);
      const obj6 = avatar(newPassword[3]);
    }
    let tmp11 = null != password;
    if (tmp11) {
      tmp11 = null != newPassword;
    }
    if (tmp11) {
      obj2 = { type: "PASSWORD_UPDATED", userId: body.id };
      avatar(newPassword[3]).dispatch(obj2);
      const obj8 = avatar(newPassword[3]);
    }
    if (close) {
      let tmp16Result = tmp16(tmp17[11]);
      tmp16Result.close();
    } else {
      tmp16Result = tmp16(tmp17[3]);
      obj3 = { type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" };
      tmp16Result.dispatch(obj3);
    }
    return body;
  }, (body) => {
    let obj = avatar(newPassword[3]);
    obj = { type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};
