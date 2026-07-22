// Module ID: 8890
// Function ID: 70128
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: addVerification, deletePersistentVerification, deleteUserPersistentVerifications, deleteVerification, ensureCurrentUserPublicKey, getSecureFramesPersistentCodesHelpdeskArticle, getSecureFramesUserVerifiedTimestamp, getSecureFramesVerifiedDevicesHelpdeskArticle, getUserVerificationDeeplink, getUserVerificationFooterText, getUserVerifyStateText, isCurrentUserPublicKeyMatch, validateSecureFramesKeyConsistent

// Module 8890 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  return importDefault(dependencyMap[10]).getArticleURL(constants3.END_TO_END_ENCRYPTION);
}
function getCurrentUserSigningKey() {
  return _getCurrentUserSigningKey(...arguments);
}
function _getCurrentUserSigningKey() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _getCurrentUserSigningKey = obj;
  return obj(...arguments);
}
function toBase64DataUri(arg0) {
  const uint8Array = new Uint8Array(arg0);
  return "data:application/octet-stream;base64," + importDefault(dependencyMap[20]).fromByteArray(uint8Array);
}
function isPublicKeyMatch(arg0, arg1, arg2) {
  return _isPublicKeyMatch(...arguments);
}
function _isPublicKeyMatch() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _isPublicKeyMatch = obj;
  return obj(...arguments);
}
function uploadCurrentUserPublicKey() {
  return _uploadCurrentUserPublicKey(...arguments);
}
function _uploadCurrentUserPublicKey() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _uploadCurrentUserPublicKey = obj;
  return obj(...arguments);
}
function isKeyVersionUploaded(arg0) {
  const uploadedKeyVersionsCached = uploadedKeyVersionsCached.getUploadedKeyVersionsCached();
  return uploadedKeyVersionsCached.includes(arg0);
}
function _ensureCurrentUserPublicKey() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _ensureCurrentUserPublicKey = obj;
  return obj(...arguments);
}
function _isCurrentUserPublicKeyMatch() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _isCurrentUserPublicKeyMatch = obj;
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
  let obj = arg1(dependencyMap[12]);
  obj = { userId, channelId, keyVersion: closure_12, reason: constants.OTHER_USER_INCONSISTENT_KEYS };
  const result = obj.trackE2EEUserVerificationFailed(obj);
  obj = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj.title = intl.string(arg1(dependencyMap[15]).t.mznLyR);
  const intl2 = arg1(dependencyMap[15]).intl;
  obj.body = intl2.format(arg1(dependencyMap[15]).t.WY6IKb, { username: nickname });
  importDefault(dependencyMap[23]).show(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ AnalyticsSecureFramesUserVerification: closure_11, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ LinkingTypes: closure_13, Routes: closure_14, Endpoints: closure_15, HelpdeskArticles: closure_16 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/rtc/SecureFramesUtils.tsx");

export { getSecureFramesHelpdeskArticle };
export const getSecureFramesPersistentCodesHelpdeskArticle = function getSecureFramesPersistentCodesHelpdeskArticle() {
  return importDefault(dependencyMap[10]).getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const getSecureFramesVerifiedDevicesHelpdeskArticle = function getSecureFramesVerifiedDevicesHelpdeskArticle() {
  return importDefault(dependencyMap[10]).getArticleURL(constants3.END_TO_END_ENCRYPTION);
};
export const addVerification = function addVerification(userId, userKey, isOtherUserKeyPersistent, channelId, DEEP_LINK) {
  let obj = importDefault(dependencyMap[11]);
  if (isOtherUserKeyPersistent) {
    const secureFramesVerifiedKey = obj.createSecureFramesVerifiedKey(userId, userKey);
  } else {
    const secureFramesTransientKey = obj.createSecureFramesTransientKey(userId, userKey);
  }
  obj = { channelId, userId, analyticsLocation: DEEP_LINK };
  const result = userKey(dependencyMap[12]).trackE2EEUserVerified(obj);
};
export const deleteVerification = function deleteVerification(userId, userKey, isOtherUserKeyPersistent) {
  if (isOtherUserKeyPersistent) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(userKey);
    const obj2 = userKey(dependencyMap[13]);
    const serializeKeyResult = userKey(dependencyMap[13]).serializeKey(uint8Array);
    const result = importDefault(dependencyMap[11]).deleteSecureFramesVerifiedKey(userId, serializeKeyResult);
    const obj3 = importDefault(dependencyMap[11]);
  } else {
    const result1 = importDefault(dependencyMap[11]).deleteSecureFramesTransientKey(userId);
    const obj = importDefault(dependencyMap[11]);
  }
};
export const deletePersistentVerification = function deletePersistentVerification(userId, verifiedKey) {
  verifiedKey = userId;
  const importDefault = verifiedKey;
  let obj = importDefault(dependencyMap[14]);
  obj = {};
  const intl = verifiedKey(dependencyMap[15]).intl;
  obj.title = intl.string(verifiedKey(dependencyMap[15]).t.hdL152);
  const intl2 = verifiedKey(dependencyMap[15]).intl;
  obj.subtitle = intl2.string(verifiedKey(dependencyMap[15]).t.8VGYKg);
  obj.onConfirm = function onConfirm() {
    const result = arg1(closure_2[11]).deleteSecureFramesVerifiedKey(arg0, arg1);
    const obj = arg1(closure_2[11]);
    const result1 = arg0(closure_2[12]).trackE2EESettingsDeviceDelete();
  };
  const result = obj.openSecureFramesUpdateConfirmation(obj);
};
export const deleteUserPersistentVerifications = function deleteUserPersistentVerifications(userId) {
  const arg1 = userId;
  const user = authStore.getUser(userId);
  let obj = importDefault(dependencyMap[16]);
  const name = obj.getName(user);
  obj = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj.title = intl.formatToPlainString(arg1(dependencyMap[15]).t.K6NGBy, { username: name });
  const intl2 = arg1(dependencyMap[15]).intl;
  obj.subtitle = intl2.string(arg1(dependencyMap[15]).t.F1BQK3);
  obj.onConfirm = function onConfirm() {
    const result = callback(closure_2[11]).deleteSecureFramesUserVerifiedKeys(arg0);
    const obj = callback(closure_2[11]);
    const result1 = arg0(closure_2[12]).trackE2EESettingsUserDelete();
  };
  const result = importDefault(dependencyMap[14]).openSecureFramesUpdateConfirmation(obj);
};
export const getSecureFramesUserVerifiedTimestamp = function getSecureFramesUserVerifiedTimestamp(timestamp) {
  let obj = importDefault(dependencyMap[17])();
  const diffResult = obj.diff(importDefault(dependencyMap[17])(timestamp), "s");
  if (diffResult > 12 * importDefault(dependencyMap[18]).Seconds.DAYS_30) {
    const _Math6 = Math;
    const rounded = Math.round(diffResult / (12 * importDefault(dependencyMap[18]).Seconds.DAYS_30));
    const intl7 = arg1(dependencyMap[15]).intl;
    obj = { count: rounded };
    return intl7.formatToPlainString(arg1(dependencyMap[15]).t.F1wqkD, obj);
  } else if (diffResult > importDefault(dependencyMap[18]).Seconds.DAYS_30) {
    const _Math5 = Math;
    const rounded1 = Math.round(diffResult / importDefault(dependencyMap[18]).Seconds.DAYS_30);
    const intl6 = arg1(dependencyMap[15]).intl;
    obj = { count: rounded1 };
    return intl6.formatToPlainString(arg1(dependencyMap[15]).t.iT+b+2, obj);
  } else if (diffResult > 7 * importDefault(dependencyMap[18]).Seconds.DAY) {
    const _Math4 = Math;
    const rounded2 = Math.round(diffResult / (7 * importDefault(dependencyMap[18]).Seconds.DAY));
    const intl5 = arg1(dependencyMap[15]).intl;
    const obj1 = { count: rounded2 };
    return intl5.formatToPlainString(arg1(dependencyMap[15]).t.dLurKZ, obj1);
  } else if (diffResult > importDefault(dependencyMap[18]).Seconds.DAY) {
    const _Math3 = Math;
    const rounded3 = Math.round(diffResult / importDefault(dependencyMap[18]).Seconds.DAY);
    const intl4 = arg1(dependencyMap[15]).intl;
    const obj2 = { count: rounded3 };
    return intl4.formatToPlainString(arg1(dependencyMap[15]).t.LE8a2H, obj2);
  } else if (diffResult > importDefault(dependencyMap[18]).Seconds.HOUR) {
    const _Math2 = Math;
    const rounded4 = Math.round(diffResult / importDefault(dependencyMap[18]).Seconds.HOUR);
    const intl3 = arg1(dependencyMap[15]).intl;
    const obj3 = { count: rounded4 };
    return intl3.formatToPlainString(arg1(dependencyMap[15]).t.KULxVS, obj3);
  } else if (diffResult > importDefault(dependencyMap[18]).Seconds.MINUTE) {
    const _Math = Math;
    const rounded5 = Math.round(diffResult / importDefault(dependencyMap[18]).Seconds.MINUTE);
    const intl2 = arg1(dependencyMap[15]).intl;
    const obj4 = { count: rounded5 };
    return intl2.formatToPlainString(arg1(dependencyMap[15]).t.ws6rWq, obj4);
  } else {
    const intl = arg1(dependencyMap[15]).intl;
    const obj5 = { count: diffResult };
    return intl.formatToPlainString(arg1(dependencyMap[15]).t./w0Qpw, obj5);
  }
  const tmp = importDefault(dependencyMap[17])(timestamp);
};
export const getUserVerificationDeeplink = function getUserVerificationDeeplink(userId, fingerprint) {
  return "" + location.protocol + "//" + location.host + closure_14.FEATURE(constants2.DAVE_PROTOCOL_VERIFICATION) + "?userId=" + userId + "&fingerprint=" + encodeURIComponent(fingerprint);
};
export const getUserVerifyStateText = function getUserVerifyStateText(memo, name) {
  if (constants.OTHER_USER_DISCONNECTED === memo) {
    const intl13 = name(dependencyMap[15]).intl;
    const items = [intl13.string(name(dependencyMap[15]).t.ZBHDM9), ];
    const intl14 = name(dependencyMap[15]).intl;
    let obj = { username: name };
    items[1] = intl14.format(name(dependencyMap[15]).t.+rIdOd, obj);
    return items;
  } else if (constants.CURRENT_USER_DISCONNECTED === memo) {
    const intl11 = name(dependencyMap[15]).intl;
    const items1 = [intl11.string(name(dependencyMap[15]).t.5ICxE6), ];
    const intl12 = name(dependencyMap[15]).intl;
    items1[1] = intl12.string(name(dependencyMap[15]).t.v1eXp/);
    return items1;
  } else if (constants.UNABLE_TO_VERIFY === memo) {
    const intl9 = name(dependencyMap[15]).intl;
    const items2 = [intl9.string(name(dependencyMap[15]).t.+no/a7), ];
    const intl10 = name(dependencyMap[15]).intl;
    obj = { username: name };
    items2[1] = intl10.format(name(dependencyMap[15]).t.Mft7iJ, obj);
    return items2;
  } else if (constants.FINGERPRINT_MISMATCH === memo) {
    const intl7 = name(dependencyMap[15]).intl;
    const items3 = [intl7.string(name(dependencyMap[15]).t.HTJ76H), ];
    const intl8 = name(dependencyMap[15]).intl;
    const obj1 = { username: name };
    items3[1] = intl8.format(name(dependencyMap[15]).t.tc6aAc, obj1);
    return items3;
  } else if (constants.OTHER_USER_ALREADY_VERIFIED === memo) {
    const intl5 = name(dependencyMap[15]).intl;
    const items4 = [intl5.string(name(dependencyMap[15]).t.9lw+J+), ];
    const intl6 = name(dependencyMap[15]).intl;
    const obj2 = { username: name };
    items4[1] = intl6.format(name(dependencyMap[15]).t.TvBS1w, obj2);
    return items4;
  } else if (constants.MATCH === memo) {
    const intl3 = name(dependencyMap[15]).intl;
    const items5 = [intl3.string(name(dependencyMap[15]).t.xyE+Dn), ];
    const intl4 = name(dependencyMap[15]).intl;
    const obj3 = { username: name };
    items5[1] = intl4.format(name(dependencyMap[15]).t.znsPl5, obj3);
    return items5;
  } else if (constants.OTHER_USER_INCONSISTENT_KEYS === memo) {
    const intl = name(dependencyMap[15]).intl;
    const items6 = [intl.string(name(dependencyMap[15]).t.im1uUi), ];
    const intl2 = name(dependencyMap[15]).intl;
    obj = { username: name };
    items6[1] = intl2.format(name(dependencyMap[15]).t.WY6IKb, obj);
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
      const intl2 = arg1(dependencyMap[15]).intl;
      let obj = { helpArticle: getSecureFramesHelpdeskArticle() };
      let formatResult = intl2.format(arg1(dependencyMap[15]).t.FJN+kh, obj);
    }
    return formatResult;
  }
  const intl = arg1(dependencyMap[15]).intl;
  const format = intl.format;
  const t = arg1(dependencyMap[15]).t;
  if (isCurrentUserKeyPersistent) {
    obj = { username: otherUserNickname, helpArticle: getSecureFramesHelpdeskArticle() };
    formatResult = format(t.p/9PGp, obj);
  } else if (isOtherUserKeyPersistent) {
    const obj1 = { helpArticle: getSecureFramesHelpdeskArticle() };
    formatResult = format(t.qT5z87, obj1);
  } else {
    obj = { helpArticle: getSecureFramesHelpdeskArticle() };
    formatResult = format(t.6JLy+i, obj);
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
    obj.nickname = importDefault(dependencyMap[24]).getName(guildId.guildId, channelId, user);
    showSecureFramesKeyInconsistentAlert(obj);
    return false;
  } else {
    return true;
  }
};
