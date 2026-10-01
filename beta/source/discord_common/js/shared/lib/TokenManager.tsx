// Module ID: 1100
// Function ID: 1101
// Name: TokenManager
// Dependencies: [1085, 510, 2]
// Exports: getAnalyticsToken, getToken, hideToken, init, removeAnalyticsToken, setAnalyticsToken, setToken, showToken

// Module 1100 (TokenManager)
import Storage6 from "Storage" /* 510 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c7, closure_8;

let c2;
let c3;
const f73154 = (acc, item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  acc[tmp] = tmp2;
  return acc;
};
function setSecondaryToken(token, __analytics__) {
  if (null != __analytics__) {
    closure_10[__analytics__] = token;
  }
  const tmp3 = c9;
  if (tmp3) {
    encryptAndStoreTokens();
  } else {
    closure_8 = c7;
    closure_11 = closure_10;
    const tmp6 = c12;
    if (tmp6) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(_false);
      const Storage5 = Storage6.Storage;
      Storage5.remove(React2);
    } else {
      let tmp7;
      if (null != tmp4) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(_false, closure_8);
        tmp7 = require;
      } else {
        tmp7 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp7(510).Storage;
      const result1 = Storage3.set(React2, closure_11);
    }
  }
}
function removeToken(__analytics__) {
  const tmp = c13;
  if (tmp) {
    let tmp6 = c7;
    if (null != __analytics__) {
      tmp6 = closure_10[__analytics__];
      delete closure_10[__analytics__];
      delete closure_11[__analytics__];
    }
    const tmp9 = null != tmp6 && tmp6 === c7;
    if (tmp9) {
      c7 = null;
      closure_8 = null;
    }
    const tmp11 = c12;
    if (tmp11) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(_false);
      const Storage5 = Storage6.Storage;
      Storage5.remove(React2);
    } else {
      let tmp13;
      if (null != closure_8) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(_false, closure_8);
        tmp13 = require;
      } else {
        tmp13 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp13(510).Storage;
      const result1 = Storage3.set(React2, closure_11);
    }
    return null != tmp6;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("TokenManager must be initialized before mutation");
    throw error;
  }
}
function encryptAndStoreTokens() {
  const tmp2 = c13;
  if (tmp2) {
    const obj = safeStorage;
    let result;
    if (safeStorage != null) {
      result = obj.isEncryptionAvailable();
    }
    if (result) {
      if (null != c7) {
        const obj2 = c7;
        let result1;
        if (obj != null) {
          result1 = obj.isEncryptionAvailable();
        }
        let combined = obj2;
        if (result1) {
          combined = obj2;
          const tmp12 = c4;
          if (!obj2.startsWith(c4)) {
            let _HermesInternal = HermesInternal;
            combined = "" + tmp12 + obj.encryptString(obj2);
          }
        }
        closure_8 = combined;
      }
      const _Object = Object;
      const entries = Object.entries(closure_10);
      let items = [];
      HermesBuiltin.arraySpread(items, entries.map((item) => {
        let obj;
        let tmp;
        [tmp, obj] = item;
        const items = [tmp, ];
        let result;
        if (safeStorage != null) {
          result = obj2.isEncryptionAvailable();
        }
        let combined = obj;
        if (result) {
          combined = obj;
          const tmp4 = closure_1_4;
          if (!obj.startsWith(closure_1_4)) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp4 + obj2.encryptString(obj);
          }
        }
        items[1] = combined;
        return items;
      }), 0);
      closure_11 = items.reduce(f73154, {});
      c9 = true;
    } else {
      closure_8 = tmp8;
      closure_11 = closure_10;
    }
    const tmp18 = c12;
    if (tmp18) {
      const Storage4 = Storage6.Storage;
      Storage4.remove(_false);
      const Storage5 = Storage6.Storage;
      Storage5.remove(React2);
    } else {
      let tmp20;
      if (null != closure_8) {
        const Storage2 = Storage6.Storage;
        const result2 = Storage2.set(_false, closure_8);
        tmp20 = require;
      } else {
        tmp20 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp20(510).Storage;
      const result3 = Storage3.set(React2, closure_11);
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("TokenManager must be initialized before mutation");
    throw error;
  }
}
({ TOKENS_KEY: c2, TOKEN_KEY: c3 } = Constants);
let c4 = "dQw4w9WgXcQ:";
const __analytics__ = "__analytics__";
let safeStorage = null;
if (null != DiscordNative) {
  safeStorage = DiscordNative.safeStorage;
}
let c9 = false;
let closure_10 = {};
let closure_11 = {};
let c12 = false;
let c13 = false;
function getToken(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = closure_10[arg0];
  } else {
    tmp = c7;
  }
  return tmp;
}
let result = size.fileFinishedImporting("../discord_common/js/shared/lib/TokenManager.tsx");

export const init = function init() {
  let wasEncrypted;
  const tmp2 = c13;
  if (!tmp2) {
    const Storage = Storage6.Storage;
    closure_8 = Storage.get(_false);
    const Storage2 = Storage6.Storage;
    closure_11 = Storage2.get(React2) || {};
    const arr = closure_8;
    Storage2.get(React2) || {};
    if (null != closure_8) {
      let obj3;
      if (0 !== arr.length) {
        const obj = safeStorage;
        let result;
        if (safeStorage != null) {
          result = obj.isEncryptionAvailable();
        }
        if (result) {
          if (arr.startsWith(c4)) {
            let obj2 = { decryptedToken: obj.decryptString(arr.substring(12)), wasEncrypted: true };
            obj3 = obj2;
          }
        }
        obj3 = { decryptedToken: arr, wasEncrypted: false };
      }
      ({ wasEncrypted: c9, decryptedToken: c7 } = obj3);
      const _Object = Object;
      const entries = Object.entries(closure_11);
      const mapped = entries.map((item) => {
        let arr;
        let decryptedToken;
        let tmp;
        [tmp, arr] = item;
        if (null != arr) {
          let obj3;
          if (0 !== arr.length) {
            let result;
            if (safeStorage != null) {
              result = obj.isEncryptionAvailable();
            }
            if (result) {
              if (arr.startsWith(closure_1_4)) {
                obj3 = { decryptedToken: safeStorage.decryptString(arr.substring(12)), wasEncrypted: true };
                const obj2 = { decryptedToken: safeStorage.decryptString(arr.substring(12)), wasEncrypted: true };
              }
            }
            obj3 = { decryptedToken: arr, wasEncrypted: false };
          }
          ({ wasEncrypted, decryptedToken } = obj3);
          const items = [tmp, decryptedToken];
          return items;
        }
        obj3 = { decryptedToken: null, wasEncrypted: false };
      });
      let items = [];
      HermesBuiltin.arraySpread(items, mapped.filter((item) => {
        let tmp;
        [, tmp] = item;
        return null != tmp;
      }), 0);
      closure_10 = items.reduce(f73154, {});
      c13 = true;
    }
    obj3 = { decryptedToken: null, wasEncrypted: false };
  }
};
export const getAnalyticsToken = function getAnalyticsToken() {
  let tmp2;
  if (null != __analytics__) {
    tmp2 = closure_10[tmp];
  } else {
    tmp2 = c7;
  }
  return tmp2;
};
export { getToken };
export const setAnalyticsToken = function setAnalyticsToken(analyticsToken) {
  if (null != analyticsToken) {
    const tmp4 = c13;
    if (tmp4) {
      setSecondaryToken(analyticsToken, __analytics__);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  } else {
    removeToken(__analytics__);
  }
};
export const setToken = function setToken(token, id) {
  if (null != token) {
    const tmp3 = c13;
    if (tmp3) {
      c7 = token;
      setSecondaryToken(token, id);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  } else {
    removeToken(id);
  }
};
export const hideToken = function hideToken() {
  const tmp = c12;
  if (!tmp) {
    const tmp2 = c13;
    if (tmp2) {
      c12 = true;
      const Storage = Storage6.Storage;
      Storage.remove(_false);
      const Storage2 = Storage6.Storage;
      Storage2.remove(React2);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  }
};
export const showToken = function showToken() {
  const tmp = c12;
  if (tmp) {
    const tmp2 = c13;
    if (tmp2) {
      let tmp8;
      c12 = false;
      if (null != closure_8) {
        const Storage2 = Storage6.Storage;
        const result = Storage2.set(_false, closure_8);
        tmp8 = require;
      } else {
        tmp8 = require;
        const Storage = Storage6.Storage;
        Storage.remove(_false);
      }
      const Storage3 = tmp8(510).Storage;
      const result1 = Storage3.set(React2, closure_11);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("TokenManager must be initialized before mutation");
      throw error;
    }
  }
};
export { removeToken };
export const removeAnalyticsToken = function removeAnalyticsToken() {
  return removeToken(__analytics__);
};
export { encryptAndStoreTokens };
