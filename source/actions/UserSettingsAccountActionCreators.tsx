// Module ID: 9222
// Function ID: 72115
// Name: saveProfileAndAccountRequest
// Dependencies: []
// Exports: accountDetailsClose, accountDetailsInit, clearErrors, disableAccount, getHarvestStatus, requestHarvest, resetAccount, resetAllPending, resetAllTryItOut, resetAndCloseUserProfileForm, resetPendingAccountChanges, resetPendingLegacyUsernameDisabled, resetPendingPrimaryGuildChanges, saveAccountChanges, saveProfileAndAccountChanges, updateAccount

// Module 9222 (saveProfileAndAccountRequest)
function saveProfileAndAccountRequest(arg0, arg1) {
  return _saveProfileAndAccountRequest(...arguments);
}
function _saveProfileAndAccountRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveProfileAndAccountRequest = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
({ Endpoints: closure_4, Routes: closure_5, DEVICE_TOKEN: closure_6, DEVICE_VOIP_TOKEN: closure_7 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_8, getDevicePushProvider: closure_9 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("actions/UserSettingsAccountActionCreators.tsx");

export const accountDetailsInit = function accountDetailsInit() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
};
export const accountDetailsClose = function accountDetailsClose() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
};
export const disableAccount = function disableAccount(password, arg1) {
  const HTTP = arg1(dependencyMap[4]).HTTP;
  let obj = { url: arg1 ? closure_4.DELETE_ACCOUNT : closure_4.DISABLE_ACCOUNT, body: obj, oldFormErrors: true };
  obj = { password, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
  const obj3 = arg1(dependencyMap[4]);
  const tmp2 = arg1 ? closure_4.DELETE_ACCOUNT : closure_4.DISABLE_ACCOUNT;
  return HTTP.post(obj).then(() => {
    callback2(closure_2[5]).logoutInternal();
    const obj = callback2(closure_2[5]);
    callback(closure_2[6]).transitionTo(constants.DEFAULT_LOGGED_OUT);
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
  const arg1 = avatar;
  const avatarId = accountUpdateForUpdateRequest.avatarId;
  const importDefault = avatarId;
  ({ avatarDecoration, nameplate, primaryGuildId, displayNameStyles } = accountUpdateForUpdateRequest);
  ({ username, discriminator, email, emailToken, password, avatarDescription, newPassword, globalName, legacyUsername, avatarOriginalMd5 } = accountUpdateForUpdateRequest);
  let obj = importDefault(dependencyMap[3]);
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
  const Storage = arg1(dependencyMap[7]).Storage;
  let value = Storage.get(closure_6);
  const tmp9 = callback2();
  if (tmp10) {
    obj.push_provider = tmp9;
    obj.push_token = value;
  }
  const Storage2 = arg1(dependencyMap[7]).Storage;
  value = Storage2.get(closure_7);
  if (tmp12) {
    obj.push_voip_provider = closure_8;
    obj.push_voip_token = value;
  }
  obj = { headers: importDefault(dependencyMap[8]).buildHeadersForMd5({ [closure_0(closure_2[9]).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_AVATAR]: avatarOriginalMd5 }) };
  const obj4 = importDefault(dependencyMap[8]);
  const tmp10 = null != tmp9 && null != value;
  const tmp12 = null != closure_8 && null != value;
  return saveProfileAndAccountRequest(obj, obj).then((arg0) => {
    let obj = avatarId(closure_2[3]);
    obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" });
    let tmp2 = null == avatar;
    if (tmp2) {
      tmp2 = null == avatarId;
    }
    if (!tmp2) {
      obj = { type: "RECENT_AVATARS_UPDATE" };
      avatarId(closure_2[3]).dispatch(obj);
      const obj2 = avatarId(closure_2[3]);
    }
    return arg0;
  }, (body) => {
    let obj = avatarId(closure_2[3]);
    obj = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};
export const getHarvestStatus = function getHarvestStatus() {
  const HTTP = arg1(dependencyMap[4]).HTTP;
  const obj = { url: constants.USER_HARVEST, oldFormErrors: true, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const requestHarvest = function requestHarvest(backends) {
  const HTTP = arg1(dependencyMap[4]).HTTP;
  let obj = { url: constants.USER_HARVEST, body: obj, oldFormErrors: true };
  obj = { backends, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const clearErrors = function clearErrors() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
export const resetPendingAccountChanges = function resetPendingAccountChanges() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOut = function resetAllTryItOut() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const resetAndCloseUserProfileForm = function resetAndCloseUserProfileForm() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
};
export const resetPendingLegacyUsernameDisabled = function resetPendingLegacyUsernameDisabled() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
};
export const resetPendingPrimaryGuildChanges = function resetPendingPrimaryGuildChanges() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
};
export const updateAccount = function updateAccount(settings) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT", settings };
  obj.dispatch(obj);
};
export const resetAccount = function resetAccount() {
  importDefault(dependencyMap[3]).dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
};
export const saveAccountChanges = function saveAccountChanges(password, close) {
  let obj = importDefault(dependencyMap[3]);
  obj.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
  password = password.password;
  close = password;
  const avatar = password.avatar;
  const importDefault = avatar;
  const newPassword = password.newPassword;
  const dependencyMap = newPassword;
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
  const Storage = close(dependencyMap[7]).Storage;
  let value = Storage.get(closure_6);
  const tmp4 = callback2();
  if (tmp5) {
    obj.push_provider = tmp4;
    obj.push_token = value;
  }
  const Storage2 = close(dependencyMap[7]).Storage;
  value = Storage2.get(closure_7);
  if (tmp7) {
    obj.push_voip_provider = closure_8;
    obj.push_voip_token = value;
  }
  const HTTP = close(dependencyMap[4]).HTTP;
  obj = { url: constants.ME, oldFormErrors: true, body: obj, rejectWithError: close(dependencyMap[4]).rejectWithMigratedError() };
  const obj4 = close(dependencyMap[4]);
  const tmp5 = null != tmp4 && null != value;
  const tmp7 = null != closure_8 && null != value;
  return HTTP.patch(obj).then((body) => {
    body = body.body;
    delete r8.token;
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
    let tmp10 = null != password;
    if (tmp10) {
      tmp10 = null != newPassword;
    }
    if (tmp10) {
      obj2 = { type: "PASSWORD_UPDATED", userId: body.id };
      avatar(newPassword[3]).dispatch(obj2);
      const obj8 = avatar(newPassword[3]);
    }
    if (close) {
      let tmp15Result = tmp15(tmp16[11]);
      tmp15Result.close();
    } else {
      tmp15Result = tmp15(tmp16[3]);
      obj3 = { type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" };
      tmp15Result.dispatch(obj3);
    }
    return body;
  }, (body) => {
    let obj = avatar(newPassword[3]);
    obj = { type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};
