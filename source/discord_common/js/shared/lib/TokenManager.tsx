// Module ID: 684
// Function ID: 8448
// Name: fromEntries
// Dependencies: []
// Exports: getAnalyticsToken, hideToken, init, removeAnalyticsToken, setAnalyticsToken, setToken, showToken

// Module 684 (fromEntries)
function fromEntries(arg0) {
  const items = [...arg0];
  return items.reduce((arg0, arg1) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg1;
    arg0[tmp] = tmp2;
    return arg0;
  }, {});
}
function storeTokens() {
  if (closure_11) {
    const Storage4 = require(dependencyMap[1]).Storage;
    Storage4.remove(closure_3);
    const Storage5 = require(dependencyMap[1]).Storage;
    Storage5.remove(closure_2);
  } else {
    if (null != closure_7) {
      const Storage2 = require(dependencyMap[1]).Storage;
      const result = Storage2.set(closure_3, closure_7);
    } else {
      const Storage = require(dependencyMap[1]).Storage;
      Storage.remove(closure_3);
    }
    const Storage3 = require(dependencyMap[1]).Storage;
    const result1 = Storage3.set(closure_2, closure_10);
  }
}
function maybeDecryptToken(closure_7) {
  if (null != closure_7) {
    if (0 !== closure_7.length) {
      let obj = safeStorage;
      if (null != safeStorage) {
        if (obj.isEncryptionAvailable()) {
          if (closure_7.startsWith(closure_4)) {
            obj = { decryptedToken: safeStorage.decryptString(closure_7.substring(12)), wasEncrypted: true };
          }
        }
      }
      obj = { decryptedToken: closure_7, wasEncrypted: false };
    }
    return obj;
  }
  obj = { "Null": "<string:1243348993>", "Null": "<string:2137063425>" };
}
function maybeEncryptToken(closure_6) {
  let combined = closure_6;
  if (null != safeStorage) {
    combined = closure_6;
    if (safeStorage.isEncryptionAvailable()) {
      combined = closure_6;
      if (!closure_6.startsWith(closure_4)) {
        const _HermesInternal = HermesInternal;
        combined = "" + closure_4 + safeStorage.encryptString(closure_6);
      }
    }
  }
  return combined;
}
function getToken(arg0) {
  if (null != arg0) {
    let tmp = closure_9[arg0];
  } else {
    tmp = closure_6;
  }
  return tmp;
}
function setSecondaryToken(token, __analytics__) {
  if (null != __analytics__) {
    closure_9[__analytics__] = token;
  }
  if (closure_8) {
    encryptAndStoreTokens();
  } else {
    let closure_7 = closure_6;
    let closure_10 = closure_9;
    storeTokens();
  }
}
function removeToken(__analytics__) {
  let tmp = closure_6;
  if (null != __analytics__) {
    tmp = closure_9[__analytics__];
    delete r4[r5];
    delete r4[r5];
  }
  if (tmp === closure_6) {
    closure_6 = null;
    let closure_7 = null;
  }
  storeTokens();
  return null != tmp;
}
function encryptAndStoreTokens() {
  if (null != safeStorage) {
    if (safeStorage.isEncryptionAvailable()) {
      if (null != closure_6) {
        let closure_7 = maybeEncryptToken(closure_6);
      }
      const _Object = Object;
      const entries = Object.entries(closure_9);
      let closure_10 = fromEntries(entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, callback(tmp2)];
        return items;
      }));
      let closure_8 = true;
    }
    storeTokens();
  }
  closure_7 = closure_6;
  closure_10 = closure_9;
}
const _module = require(dependencyMap[0]);
({ TOKENS_KEY: closure_2, TOKEN_KEY: closure_3 } = _module);
let closure_4 = "dQw4w9WgXcQ:";
let safeStorage = null;
if (null != DiscordNative) {
  safeStorage = DiscordNative.safeStorage;
}
let closure_8 = false;
let closure_9 = {};
let closure_10 = {};
let closure_11 = false;
let closure_12 = false;
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("../discord_common/js/shared/lib/TokenManager.tsx");

export const init = function init() {
  if (!closure_12) {
    const Storage = require(dependencyMap[1]).Storage;
    let closure_7 = Storage.get(closure_3);
    const Storage2 = require(dependencyMap[1]).Storage;
    let closure_10 = Storage2.get(closure_2) || {};
    const tmp5 = Storage2.get(closure_2) || {};
    ({ wasEncrypted: closure_8, decryptedToken: closure_6 } = maybeDecryptToken(closure_7));
    const _Object = Object;
    const entries = Object.entries(closure_10);
    const mapped = entries.map((arg0) => {
      let decryptedToken;
      let tmp;
      let tmp2;
      let wasEncrypted;
      [tmp, tmp2] = arg0;
      ({ wasEncrypted, decryptedToken } = callback(tmp2));
      const items = [tmp, decryptedToken];
      return items;
    });
    let closure_9 = fromEntries(mapped.filter((arg0) => {
      let tmp;
      [, tmp] = arg0;
      return null != tmp;
    }));
    closure_12 = true;
    const tmp8 = maybeDecryptToken(closure_7);
  }
};
export const getAnalyticsToken = function getAnalyticsToken() {
  return getToken("__analytics__");
};
export { getToken };
export const setAnalyticsToken = function setAnalyticsToken(token) {
  if (null != token) {
    setSecondaryToken(token, "__analytics__");
  } else {
    removeToken("__analytics__");
  }
};
export const setToken = function setToken(token, id) {
  if (null != token) {
    setSecondaryToken(token, id);
  } else {
    removeToken(id);
  }
};
export const hideToken = function hideToken() {
  if (!closure_11) {
    closure_11 = true;
    storeTokens();
  }
};
export const showToken = function showToken() {
  if (closure_11) {
    closure_11 = false;
    storeTokens();
  }
};
export { removeToken };
export const removeAnalyticsToken = function removeAnalyticsToken() {
  return removeToken("__analytics__");
};
export { encryptAndStoreTokens };
