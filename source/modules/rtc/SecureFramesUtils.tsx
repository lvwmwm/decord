// Module ID: 8897
// Function ID: 70169
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 1194, 4177, 4202, 4216, 1849, 8898, 8899, 653, 1920, 8900, 8907, 8882, 8901, 1212, 3969, 3712, 664, 44, 206, 507, 1184, 4470, 4319, 2]
// Exports: addVerification, deletePersistentVerification, deleteUserPersistentVerifications, deleteVerification, ensureCurrentUserPublicKey, getSecureFramesPersistentCodesHelpdeskArticle, getSecureFramesUserVerifiedTimestamp, getSecureFramesVerifiedDevicesHelpdeskArticle, getUserVerificationDeeplink, getUserVerificationFooterText, getUserVerifyStateText, isCurrentUserPublicKeyMatch, validateSecureFramesKeyConsistent

// Module 8897 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import ME from "ME";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getSecureFramesHelpdeskArticle() {
  return importDefault(1920).getArticleURL(constants3.END_TO_END_ENCRYPTION);
}
function getCurrentUserSigningKey() {
  return _getCurrentUserSigningKey(...arguments);
}
function _getCurrentUserSigningKey() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function toBase64DataUri(arg0) {
  const uint8Array = new Uint8Array(arg0);
  return "data:application/octet-stream;base64," + importDefault(206).fromByteArray(uint8Array);
}
function isPublicKeyMatch(arg0, arg1, arg2) {
  return _isPublicKeyMatch(...arguments);
}
function _isPublicKeyMatch() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function uploadCurrentUserPublicKey() {
  return _uploadCurrentUserPublicKey(...arguments);
}
function _uploadCurrentUserPublicKey() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function isKeyVersionUploaded(arg0) {
  uploadedKeyVersionsCached = uploadedKeyVersionsCached.getUploadedKeyVersionsCached();
  return uploadedKeyVersionsCached.includes(arg0);
}
function _ensureCurrentUserPublicKey() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function _isCurrentUserPublicKeyMatch() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function getIsSecureFramesKeyInconsistent(userId, items) {
  const tmp = callback(items, 2);
  const first = tmp[0];
  if (first.isUserConnected(userId)) {
    const secureFramesRosterMapEntry = first.getSecureFramesRosterMapEntry(userId);
    if (null == secureFramesRosterMapEntry) {
      return false;
    } else {
      const _Uint8Array2 = Uint8Array;
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry);
      const tmp22 = _createForOfIteratorHelperLoose(obj2.getAllActiveStreamKeys());
      const iter3 = tmp22();
      let iter2 = iter3;
      if (!iter3.done) {
        while (true) {
          let value = iter2.value;
          if (obj2.isUserConnected(value, userId)) {
            let tmp4 = secureFramesRosterMapEntry;
            let secureFramesRosterMapEntry1 = secureFramesRosterMapEntry.getSecureFramesRosterMapEntry(value, userId);
            if (null == secureFramesRosterMapEntry1) {
              break;
            } else {
              let _Uint8Array = Uint8Array;
              let tmp6 = new.target;
              let tmp7 = new.target;
              let tmp8 = secureFramesRosterMapEntry1;
              let uint8Array1 = new Uint8Array(secureFramesRosterMapEntry1);
              let tmp10 = uint8Array1;
              let num = 0;
              let tmp11 = secureFramesRosterMapEntry1;
              let tmp12 = uint8Array1;
              let num2 = 0;
              if (0 < uint8Array.length) {
                while (uint8Array[num] === uint8Array1[num]) {
                  num = num + 1;
                  let tmp13 = secureFramesRosterMapEntry1;
                  let tmp14 = uint8Array1;
                  let tmp15 = num;
                  continue;
                }
                let flag2 = true;
                return true;
              }
            }
          }
          let iter = tmp22();
          iter2 = iter;
        }
        return true;
      }
      return false;
    }
  } else {
    return false;
  }
}
function showSecureFramesKeyInconsistentAlert(arg0) {
  let channelId;
  let nickname;
  let userId;
  ({ userId, channelId, nickname } = arg0);
  let obj = require(8907) /* getGuildId */;
  obj = { userId, channelId, keyVersion: closure_12, reason: constants.OTHER_USER_INCONSISTENT_KEYS };
  const result = obj.trackE2EEUserVerificationFailed(obj);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.mznLyR);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.format(require(1212) /* getSystemLocale */.t.WY6IKb, { username: nickname });
  importDefault(4470).show(obj);
}
({ AnalyticsSecureFramesUserVerification: closure_11, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_12 } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ LinkingTypes: closure_13, Routes: closure_14, Endpoints: closure_15, HelpdeskArticles: closure_16 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rtc/SecureFramesUtils.tsx");

export { getSecureFramesHelpdeskArticle };
export const getSecureFramesPersistentCodesHelpdeskArticle = function getSecureFramesPersistentCodesHelpdeskArticle() {
  return importDefault(1920).getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesVerifiedDevicesHelpdeskArticle = function getSecureFramesVerifiedDevicesHelpdeskArticle() {
  return importDefault(1920).getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const addVerification = function addVerification(userId, userKey, isOtherUserKeyPersistent, channelId, DEEP_LINK) {
  let obj = importDefault(8900);
  if (isOtherUserKeyPersistent) {
    const secureFramesVerifiedKey = obj.createSecureFramesVerifiedKey(userId, userKey);
  } else {
    const secureFramesTransientKey = obj.createSecureFramesTransientKey(userId, userKey);
  }
  obj = { channelId, userId, analyticsLocation: DEEP_LINK };
  const result = require(8907) /* getGuildId */.trackE2EEUserVerified(obj);
};
export const deleteVerification = function deleteVerification(userId, userKey, isOtherUserKeyPersistent) {
  if (isOtherUserKeyPersistent) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(userKey);
    const obj2 = require(8882) /* set */;
    const serializeKeyResult = require(8882) /* set */.serializeKey(uint8Array);
    const result = importDefault(8900).deleteSecureFramesVerifiedKey(userId, serializeKeyResult);
    const obj3 = importDefault(8900);
  } else {
    const result1 = importDefault(8900).deleteSecureFramesTransientKey(userId);
    const obj = importDefault(8900);
  }
};
export const deletePersistentVerification = function deletePersistentVerification(userId, verifiedKey) {
  const _require = userId;
  const importDefault = verifiedKey;
  let obj = importDefault(8901);
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.hdL152);
  const intl2 = _require(1212).intl;
  obj.subtitle = intl2.string(_require(1212).t["8VGYKg"]);
  obj.onConfirm = function onConfirm() {
    const result = verifiedKey(outer1_2[11]).deleteSecureFramesVerifiedKey(userId, verifiedKey);
    const obj = verifiedKey(outer1_2[11]);
    const result1 = userId(outer1_2[12]).trackE2EESettingsDeviceDelete();
  };
  let result = obj.openSecureFramesUpdateConfirmation(obj);
};
export const deleteUserPersistentVerifications = function deleteUserPersistentVerifications(userId) {
  const _require = userId;
  const user = authStore.getUser(userId);
  let obj = importDefault(3969);
  const name = obj.getName(user);
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.formatToPlainString(_require(1212).t.K6NGBy, { username: name });
  const intl2 = _require(1212).intl;
  obj.subtitle = intl2.string(_require(1212).t.F1BQK3);
  obj.onConfirm = function onConfirm() {
    const result = outer1_1(outer1_2[11]).deleteSecureFramesUserVerifiedKeys(userId);
    const obj = outer1_1(outer1_2[11]);
    const result1 = userId(outer1_2[12]).trackE2EESettingsUserDelete();
  };
  let result = importDefault(8901).openSecureFramesUpdateConfirmation(obj);
};
export const getSecureFramesUserVerifiedTimestamp = function getSecureFramesUserVerifiedTimestamp(timestamp) {
  let obj = importDefault(3712)();
  const diffResult = obj.diff(importDefault(3712)(timestamp), "s");
  if (diffResult > 12 * importDefault(664).Seconds.DAYS_30) {
    const _Math6 = Math;
    const rounded = Math.round(diffResult / (12 * importDefault(664).Seconds.DAYS_30));
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj = { count: rounded };
    return intl7.formatToPlainString(require(1212) /* getSystemLocale */.t.F1wqkD, obj);
  } else if (diffResult > importDefault(664).Seconds.DAYS_30) {
    const _Math5 = Math;
    const rounded1 = Math.round(diffResult / importDefault(664).Seconds.DAYS_30);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj = { count: rounded1 };
    return intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["iT+b+2"], obj);
  } else if (diffResult > 7 * importDefault(664).Seconds.DAY) {
    const _Math4 = Math;
    const rounded2 = Math.round(diffResult / (7 * importDefault(664).Seconds.DAY));
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { count: rounded2 };
    return intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.dLurKZ, obj1);
  } else if (diffResult > importDefault(664).Seconds.DAY) {
    const _Math3 = Math;
    const rounded3 = Math.round(diffResult / importDefault(664).Seconds.DAY);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { count: rounded3 };
    return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.LE8a2H, obj2);
  } else if (diffResult > importDefault(664).Seconds.HOUR) {
    const _Math2 = Math;
    const rounded4 = Math.round(diffResult / importDefault(664).Seconds.HOUR);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { count: rounded4 };
    return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.KULxVS, obj3);
  } else if (diffResult > importDefault(664).Seconds.MINUTE) {
    const _Math = Math;
    const rounded5 = Math.round(diffResult / importDefault(664).Seconds.MINUTE);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj4 = { count: rounded5 };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.ws6rWq, obj4);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj5 = { count: diffResult };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["/w0Qpw"], obj5);
  }
  const tmp = importDefault(3712)(timestamp);
};
export const getUserVerificationDeeplink = function getUserVerificationDeeplink(userId, fingerprint) {
  return "" + location.protocol + "//" + location.host + closure_14.FEATURE(constants2.DAVE_PROTOCOL_VERIFICATION) + "?userId=" + userId + "&fingerprint=" + encodeURIComponent(fingerprint);
};
export const getUserVerifyStateText = function getUserVerifyStateText(memo, name) {
  if (constants.OTHER_USER_DISCONNECTED === memo) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    const items = [intl13.string(require(1212) /* getSystemLocale */.t.ZBHDM9), ];
    const intl14 = require(1212) /* getSystemLocale */.intl;
    let obj = { username: name };
    items[1] = intl14.format(require(1212) /* getSystemLocale */.t["+rIdOd"], obj);
    return items;
  } else if (constants.CURRENT_USER_DISCONNECTED === memo) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    const items1 = [intl11.string(require(1212) /* getSystemLocale */.t["5ICxE6"]), ];
    const intl12 = require(1212) /* getSystemLocale */.intl;
    items1[1] = intl12.string(require(1212) /* getSystemLocale */.t["v1eXp/"]);
    return items1;
  } else if (constants.UNABLE_TO_VERIFY === memo) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    const items2 = [intl9.string(require(1212) /* getSystemLocale */.t["+no/a7"]), ];
    const intl10 = require(1212) /* getSystemLocale */.intl;
    obj = { username: name };
    items2[1] = intl10.format(require(1212) /* getSystemLocale */.t.Mft7iJ, obj);
    return items2;
  } else if (constants.FINGERPRINT_MISMATCH === memo) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const items3 = [intl7.string(require(1212) /* getSystemLocale */.t.HTJ76H), ];
    const intl8 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { username: name };
    items3[1] = intl8.format(require(1212) /* getSystemLocale */.t.tc6aAc, obj1);
    return items3;
  } else if (constants.OTHER_USER_ALREADY_VERIFIED === memo) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const items4 = [intl5.string(require(1212) /* getSystemLocale */.t["9lw+J+"]), ];
    const intl6 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { username: name };
    items4[1] = intl6.format(require(1212) /* getSystemLocale */.t.TvBS1w, obj2);
    return items4;
  } else if (constants.MATCH === memo) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const items5 = [intl3.string(require(1212) /* getSystemLocale */.t["xyE+Dn"]), ];
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { username: name };
    items5[1] = intl4.format(require(1212) /* getSystemLocale */.t.znsPl5, obj3);
    return items5;
  } else if (constants.OTHER_USER_INCONSISTENT_KEYS === memo) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items6 = [intl.string(require(1212) /* getSystemLocale */.t.im1uUi), ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { username: name };
    items6[1] = intl2.format(require(1212) /* getSystemLocale */.t.WY6IKb, obj);
    return items6;
  }
};
export const getUserVerificationFooterText = function getUserVerificationFooterText(arg0) {
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let otherUserNickname;
  ({ isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname } = arg0);
  if (isCurrentUserKeyPersistent) {
    if (isOtherUserKeyPersistent) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let obj = { helpArticle: getSecureFramesHelpdeskArticle() };
      let formatResult = intl2.format(require(1212) /* getSystemLocale */.t["FJN+kh"], obj);
    }
    return formatResult;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const format = intl.format;
  const t = require(1212) /* getSystemLocale */.t;
  if (isCurrentUserKeyPersistent) {
    obj = { username: otherUserNickname, helpArticle: getSecureFramesHelpdeskArticle() };
    formatResult = format(t["p/9PGp"], obj);
  } else if (isOtherUserKeyPersistent) {
    const obj1 = { helpArticle: getSecureFramesHelpdeskArticle() };
    formatResult = format(t.qT5z87, obj1);
  } else {
    obj = { helpArticle: getSecureFramesHelpdeskArticle() };
    formatResult = format(t["6JLy+i"], obj);
  }
};
export { getCurrentUserSigningKey };
export { isPublicKeyMatch };
export const ensureCurrentUserPublicKey = function ensureCurrentUserPublicKey(arg0) {
  return _ensureCurrentUserPublicKey(...arguments);
};
export const isCurrentUserPublicKeyMatch = function isCurrentUserPublicKeyMatch(arg0) {
  return _isCurrentUserPublicKeyMatch(...arguments);
};
export { getIsSecureFramesKeyInconsistent };
export { showSecureFramesKeyInconsistentAlert };
export const validateSecureFramesKeyConsistent = function validateSecureFramesKeyConsistent(guildId) {
  let channelId;
  let userId;
  ({ userId, channelId } = guildId);
  const items = [closure_7, closure_8];
  if (getIsSecureFramesKeyInconsistent(userId, items)) {
    const obj = { userId, channelId };
    const user = authStore.getUser(userId);
    obj.nickname = importDefault(4319).getName(guildId.guildId, channelId, user);
    showSecureFramesKeyInconsistentAlert(obj);
    return false;
  } else {
    return true;
  }
};
