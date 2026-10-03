// Module ID: 6477
// Function ID: 6478
// Name: UserSettingsAccountActionCreators
// Dependencies: [5, 1085, 6085, 584, 1282, 6082, 1112, 1398, 510, 6478, 6482, 6485, 6487, 2]
// Exports: accountDetailsClose, accountDetailsInit, clearErrors, disableAccount, getHarvestStatus, requestHarvest, resetAccount, resetAllPending, resetAllTryItOut, resetAndCloseUserProfileForm, resetPendingAccountChanges, resetPendingLegacyUsernameDisabled, resetPendingPrimaryGuildChanges, saveAccountChanges, saveProfileAndAccountChanges, updateAccount

// Module 6477 (UserSettingsAccountActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6082 */;
import trackUserAvatarUpdated from "trackUserAvatarUpdated" /* 6485 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6085 */;
import size from "module_2" /* 2 */;

let closure_3;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function saveProfileAndAccountRequest() {
  return obj(...arguments);
}
let body = function _saveProfileAndAccountRequest() {
  let obj = _asyncToGenerator(async (body) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let obj15;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let obj6;
          let token;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              value = tmp;
              obj6 = closure_1;
              if (closure_1 === undefined) {
                obj6 = {};
              }
              value = undefined;
              body = undefined;
              token = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              const HTTP = closure_131_0(closure_131_2[4]).HTTP;
              const request = { url: closure_131_4.ME, oldFormErrors: true, body, headers: obj6.headers, rejectWithError: obj15.rejectWithMigratedError() };
              const patch = HTTP.patch;
              c4 = 2;
              c5 = 1;
              obj15 = closure_131_0(closure_131_2[4]);
              const obj8 = { value: patch(request), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            if (body.token) {
              token = body.token;
              delete body["token"];
              const obj10 = { type: "UPDATE_TOKEN", token, userId: body.id };
              const obj = closure_131_1(closure_131_2[3]);
              obj.dispatch(obj10);
              let password;
              if (body != null) {
                password = body.password;
              }
              let tmp15 = null != password;
              if (tmp15) {
                let new_password;
                if (body != null) {
                  new_password = body.new_password;
                }
                tmp15 = null != new_password;
              }
              if (tmp15) {
                const obj11 = { type: "PASSWORD_UPDATED", userId: body.id };
                const obj3 = closure_131_1(closure_131_2[3]);
                obj3.dispatch(obj11);
              }
            }
            const obj12 = { type: "CURRENT_USER_UPDATE", user: body };
            const obj5 = closure_131_1(closure_131_2[3]);
            obj5.dispatch(obj12);
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp31) {
          c5 = 3;
          throw tmp31;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ Endpoints: closure_4, Routes: hasOwnProperty, DEVICE_TOKEN: metroRequire, DEVICE_VOIP_TOKEN: metroImportDefault } = Constants);
({ DEVICE_PUSH_VOIP_PROVIDER: metroImportAll, getDevicePushProvider: c9 } = PushNotificationConstants);
let result = size.fileFinishedImporting("actions/UserSettingsAccountActionCreators.tsx");

export const accountDetailsInit = function accountDetailsInit() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
};
export const accountDetailsClose = function accountDetailsClose() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
};
export const disableAccount = function disableAccount(password, arg1) {
  let obj2;
  const tmp2 = arg1 ? constants.DELETE_ACCOUNT : constants.DISABLE_ACCOUNT;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: tmp2, body: { password }, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
  const post = HTTP.post;
  obj2 = HTTPUtils;
  const postResult = post(request);
  return postResult.then(() => {
    const obj = AuthenticationActionCreatorsDefault;
    obj.logoutInternal();
    const obj2 = router_utils;
    obj2.transitionTo(constants.DEFAULT_LOGGED_OUT);
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
  let tmpResult;
  let typingIndicatorStyle;
  let username;
  let vadColors;
  const avatar = accountUpdateForUpdateRequest.avatar;
  const avatarId = accountUpdateForUpdateRequest.avatarId;
  ({ avatarDecoration, nameplate, primaryGuildId, displayNameStyles, vadColors, typingIndicatorStyle } = accountUpdateForUpdateRequest);
  ({ username, discriminator, email, emailToken, password, avatarDescription, newPassword, globalName, legacyUsername, avatarOriginalMd5 } = accountUpdateForUpdateRequest);
  let tmp = avatarId;
  let obj = avatarId(584);
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
  const user = { username, email, email_token: emailToken, password, avatar, avatar_description: avatarDescription, avatar_id: avatarId, discriminator, global_name: globalName, legacy_username: legacyUsername, new_password: newPassword };
  if (undefined !== avatarDecoration) {
    let tmp4 = null;
    let skuId;
    if (avatarDecoration != null) {
      skuId = avatarDecoration.skuId;
    }
    if (skuId == null) {
      skuId = null;
    }
    user.avatar_decoration_sku_id = skuId;
  }
  if (undefined !== nameplate) {
    let skuId1;
    if (nameplate != null) {
      skuId1 = nameplate.skuId;
    }
    if (skuId1 == null) {
      skuId1 = null;
    }
    user.nameplate_sku_id = skuId1;
  }
  if (undefined !== primaryGuildId) {
    user.primary_guild_id = primaryGuildId;
  }
  if (null != displayNameStyles) {
    ({ fontId: obj2.display_name_font_id, effectId: obj2.display_name_effect_id, colors: obj2.display_name_colors } = displayNameStyles);
  } else if (null === displayNameStyles) {
    user.display_name_font_id = null;
    user.display_name_effect_id = null;
    user.display_name_colors = null;
  }
  if (undefined !== vadColors) {
    user.vad_colors = vadColors;
  }
  if (undefined !== typingIndicatorStyle) {
    let result = null;
    if (null != typingIndicatorStyle) {
      const obj3 = avatar(1398);
      result = obj3.serializeTypingIndicatorStyle(typingIndicatorStyle);
    }
    user.typing_indicator_style = result;
  }
  const Storage = avatar(510).Storage;
  const value = Storage.get(closure_6);
  const tmp12 = closure_9();
  const tmp13 = null != tmp12 && null != value;
  if (tmp13) {
    user.push_provider = tmp12;
    user.push_token = value;
  }
  const Storage2 = tmp10(510).Storage;
  const value2 = Storage2.get(closure_7);
  let tmp16 = null != closure_8;
  const tmp15 = closure_8;
  if (tmp16) {
    tmp16 = null != value2;
  }
  if (tmp16) {
    user.push_voip_provider = tmp15;
    user.push_voip_token = value2;
  }
  const obj4 = { headers: tmpResult.buildHeadersForMd5({ [avatar(6482).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_AVATAR]: avatarOriginalMd5 }) };
  tmpResult = tmp(6478);
  const promise = saveProfileAndAccountRequest(user, obj4);
  return promise.then((result) => {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" });
    let tmp4 = null == avatar;
    if (tmp4) {
      tmp4 = null == avatarId;
    }
    if (!tmp4) {
      const tmpResult = DispatcherDefault;
      tmpResult.dispatch({ type: "RECENT_AVATARS_UPDATE" });
    }
    return result;
  }, (body) => {
    const obj = avatarId(dependencyMap[3]);
    const obj2 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj2);
    return body;
  });
};
export const getHarvestStatus = function getHarvestStatus() {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const get = HTTP.get;
  const obj = { url: constants.USER_HARVEST, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return get(obj);
};
export const requestHarvest = function requestHarvest(backends) {
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.USER_HARVEST, body, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
  body = { backends };
  const post = HTTP.post;
  obj3 = HTTPUtils;
  return post(request);
};
export const clearErrors = function clearErrors() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
export const resetPendingAccountChanges = function resetPendingAccountChanges() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOut = function resetAllTryItOut() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const resetAndCloseUserProfileForm = function resetAndCloseUserProfileForm() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
};
export const resetPendingLegacyUsernameDisabled = function resetPendingLegacyUsernameDisabled() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
};
export const resetPendingPrimaryGuildChanges = function resetPendingPrimaryGuildChanges() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
};
export const updateAccount = function updateAccount(settings) {
  const obj = DispatcherDefault;
  const obj2 = { type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT", settings };
  obj.dispatch(obj2);
};
export const resetAccount = function resetAccount() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
};
export const saveAccountChanges = function saveAccountChanges(user, close) {
  let avatar;
  let newPassword;
  let tmp3;
  let tmp4Result;
  let obj = avatar(newPassword[3]);
  obj.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
  const password = user.password;
  avatar = user.avatar;
  newPassword = user.newPassword;
  const discriminator = user.discriminator;
  close = close.close;
  user = { username: user.username, email: user.email, email_token: user.emailToken, password, avatar, new_password: newPassword, discriminator: tmp3 };
  tmp3 = undefined;
  if (null != discriminator) {
    if ("" !== discriminator) {
      tmp3 = discriminator;
    }
  }
  const Storage = password(tmp[8]).Storage;
  const value = Storage.get(closure_6);
  const tmp6 = closure_9();
  const tmp7 = null != tmp6 && null != value;
  if (tmp7) {
    user.push_provider = tmp6;
    user.push_token = value;
  }
  const Storage2 = tmp4(tmp[8]).Storage;
  const value2 = Storage2.get(closure_7);
  let tmp10 = null != closure_8;
  let tmp9 = closure_8;
  if (tmp10) {
    tmp10 = null != value2;
  }
  if (tmp10) {
    user.push_voip_provider = tmp9;
    user.push_voip_token = value2;
  }
  const HTTP = tmp4(tmp[4]).HTTP;
  const request = { url: constants.ME, oldFormErrors: true, body: user, rejectWithError: tmp4Result.rejectWithMigratedError() };
  const patch = HTTP.patch;
  tmp4Result = password(newPassword[4]);
  const patchResult = patch(request);
  return patchResult.then((body) => {
    body = body.body;
    const token = body.token;
    delete body["token"];
    const obj = DispatcherDefault;
    const obj2 = { type: "UPDATE_TOKEN", token, userId: body.id };
    obj.dispatch(obj2);
    const obj3 = DispatcherDefault;
    obj3.dispatch({ type: "CURRENT_USER_UPDATE", user: body });
    if (undefined !== avatar) {
      const obj5 = { avatarHash: body.avatar };
      const obj4 = trackUserAvatarUpdated;
      const result = obj4.trackUserAvatarUpdated(obj5);
    }
    if (null != newPassword) {
      const obj6 = { type: "USER_PASSWORD_UPDATE", user: body, newPassword };
      const tmpResult = DispatcherDefault;
      tmpResult.dispatch(obj6);
    }
    const tmp9 = null != password && null != newPassword;
    if (tmp9) {
      const obj7 = { type: "PASSWORD_UPDATED", userId: body.id };
      const tmpResult4 = DispatcherDefault;
      tmpResult4.dispatch(obj7);
    }
    const tmp11 = close;
    if (tmp11) {
      const tmpResult5 = UserSettingsModalActionCreatorsDefault;
      tmpResult5.close();
    } else {
      const tmpResult6 = DispatcherDefault;
      tmpResult6.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
    }
    return body;
  }, (body) => {
    const obj = avatar(newPassword[3]);
    const obj2 = { type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj2);
    return body;
  });
};
