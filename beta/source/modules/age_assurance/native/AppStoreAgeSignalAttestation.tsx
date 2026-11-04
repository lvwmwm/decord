// Module ID: 8147
// Function ID: 8148
// Name: AppStoreAgeSignalAttestation
// Dependencies: [5, 1383, 1072, 8148, 510, 8149, 1375, 8150, 5772, 2]
// Exports: buildIOSClientDataPayload, getAgeSignalIntegrityToken, getAppStoreAgeSignalAssertion, getAppStoreConsentReinstatementProof, warmAgeSignalAttestation

// Module 8147 (AppStoreAgeSignalAttestation)
import Storage3 from "Storage" /* 510 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import TimeUtils from "TimeUtils" /* 5772 */;
import AppStoreAgeSignalActionCreators from "AppStoreAgeSignalActionCreators" /* 8148 */;
import react_nativeDefault from "react-native" /* 8149 */;
import react_nativeDefault2 from "react-native" /* 8150 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let c0, c4, c8;

function getPlayIntegrityCloudProjectNumber() {
  if ("production" === PROJECT_ENV) {
    return c6;
  } else if ("staging" === PROJECT_ENV) {
    return c7;
  } else {
    return null;
  }
}
function buildRequestHashPayload(arg0, platform) {
  const items = [arg0, platform.platform, , , , , ];
  let str = "";
  if (null != platform.ageLower) {
    const _String = String;
    str = String(platform.ageLower);
  }
  items[2] = str;
  let str2 = "";
  if (null != platform.ageUpper) {
    const _String2 = String;
    str2 = String(platform.ageUpper);
  }
  items[3] = str2;
  let str3 = platform.googleAgeSignalsStatus;
  if (str3 == null) {
    str3 = "";
  }
  items[4] = str3;
  let str4 = platform.googleAgeRangeSource;
  if (str4 == null) {
    str4 = "";
  }
  items[5] = str4;
  let str5 = platform.googleSignificantChangeStatus;
  if (str5 == null) {
    str5 = "";
  }
  items[6] = str5;
  return items.join("|");
}
function buildConsentReinstatementPayload(arg0, arg1) {
  const items = [arg0, Endpoints.APP_STORE_CONSENT_REINSTATE, arg1, "true"];
  return items.join("|");
}
function requestIOSChallenge() {
  return obj(...arguments);
}
let obj = function _requestIOSChallenge() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            c2 = 2;
            c1 = 1;
            const obj5 = { value: obj3.requestAgeSignalChallenge("ios", closure_0), done: false };
            obj3 = AppStoreAgeSignalActionCreators;
            return obj5;
          }
        } else if (1 === tmp3) {
          c3 = 0;
          c1 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c1 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 0;
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        if (0 === c3) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function setStoredAttestKeyId(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let combined = null;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    combined = "AppStoreAgeSignalAttestKey_" + id;
  }
  if (null != combined) {
    if (null != arg0) {
      const Storage2 = Storage3.Storage;
      const result = Storage2.set(combined, arg0);
    } else {
      const Storage = Storage3.Storage;
      Storage.remove(combined);
    }
  }
}
obj = function _registerAttestKey() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let tmp24Result;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let keyId;
        let attestation;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            closure_0 = undefined;
            keyId = undefined;
            attestation = undefined;
            const tmp23 = closure_0;
            const tmp24 = importDefault;
            if (null != react_nativeDefault) {
              c3 = 1;
              c4 = 1;
              const obj5 = { value: tmp24Result.generateAndAttestKey(tmp23), done: false };
              tmp24Result = tmp24(dependencyMap[5]);
              return obj5;
            }
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            keyId = closure_0.keyId;
            attestation = closure_0.attestation;
            c3 = 2;
            c4 = 1;
            const obj7 = { value: obj3.registerAgeSignalAttestKey(keyId, attestation), done: false };
            obj3 = closure_130_0(closure_130_2[3]);
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (value) {
          closure_130_13(keyId);
          c4 = 3;
          obj = { value: keyId, done: true };
          return obj;
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp19) {
        c4 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
function getAppAttestAssertion() {
  return obj(...arguments);
}
obj = function _getAppAttestAssertion() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_4;
    let obj13;
    let obj7;
    let tmp44;
    function getStoredAttestKeyId() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      let combined = null;
      if (null != id) {
        const _HermesInternal = HermesInternal;
        combined = "AppStoreAgeSignalAttestKey_" + id;
      }
      if (null == combined) {
        return null;
      } else {
        const Storage = closure_1_0(_null[4]).Storage;
        const value = Storage.get(combined);
        let tmp7 = null;
        if (typeof value === "string") {
          tmp7 = null;
          if (value.length > 0) {
            tmp7 = value;
          }
        }
        return tmp7;
      }
    }
    function registerAttestKey() {
      return closure_1_14(...arguments);
    }
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let currentUser;
        let closure_1;
        let _null;
        let keyId;
        let nonce;
        c8 = 2;
        const tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            currentUser = tmp44;
            closure_1 = undefined;
            _null = undefined;
            keyId = undefined;
            nonce = undefined;
            const obj15 = PlatformUtils;
            if (obj15.isIOS()) {
              if (null != react_nativeDefault) {
                const obj11 = react_nativeDefault;
                if (obj11.isSupported()) {
                  c6 = 1;
                  const tmp40 = getStoredAttestKeyId();
                  closure_1 = tmp40;
                  let c1 = tmp40;
                  const tmp41 = requestIOSChallenge;
                  if (tmp40 == null) {
                    c1 = undefined;
                  }
                  c7 = 2;
                  c8 = 1;
                  const obj4 = { value: tmp41(c1), done: false };
                  return obj4;
                }
              }
            }
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else if (1 === tmp4) {
          c6 = 0;
          closure_133_13(null);
          c8 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } else {
          if (2 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              _null = value;
              if (null == _null) {
                c6 = 0;
                c8 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                keyId = closure_1;
                nonce = _null.nonce;
                closure_133_13(null);
                c7 = 3;
                c8 = 1;
                const obj6 = { value: registerAttestKey(_null.nonce), done: false };
                return obj6;
              }
            }
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              let c2 = value;
              if (value == null) {
                c2 = null;
              }
              keyId = c2;
              if (null == keyId) {
                c6 = 0;
                c8 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                c7 = 5;
                c8 = 1;
                const obj9 = { value: closure_133_11(keyId), done: false };
                return obj9;
              }
            }
          } else if (4 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              obj13.assertion = value;
              c6 = 0;
              c8 = 3;
              const obj12 = { value: obj13, done: true };
              return obj12;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            nonce = value;
            if (null == nonce) {
              c6 = 0;
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              let tmp7 = currentUser;
              nonce = nonce.nonce;
            }
          }
          obj13 = { keyId };
          c7 = 4;
          c8 = 1;
          const obj14 = { value: obj7.generateAssertion(keyId, closure_0(nonce)), done: false };
          obj7 = closure_133_1(closure_133_2[5]);
          return obj14;
        }
      } catch (tmp43) {
        tmp44 = c6;
        if (0 === c6) {
          c8 = 3;
          throw tmp43;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getAppStoreAgeSignalAssertion() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c2;
    let c3;
    let closure_0;
    let closure_1 = arg1;
    await getAppAttestAssertion((arg0) => {
      const items = [arg0, closure_0.platform, , , , ];
      let str = "";
      let str2 = "";
      if (null != closure_0.ageLower) {
        const _String = String;
        str2 = String(tmp.ageLower);
      }
      items[2] = str2;
      let StringResult = str;
      if (null != closure_0.ageUpper) {
        const _String2 = String;
        StringResult = String(tmp.ageUpper);
      }
      items[3] = StringResult;
      let appleVerifiedMethod = tmp.appleVerifiedMethod;
      if (appleVerifiedMethod == null) {
        appleVerifiedMethod = str;
      }
      items[4] = appleVerifiedMethod;
      if (null != closure_1) {
        const _String3 = String;
        str = String(tmp2);
      }
      items[5] = str;
      return items.join("|");
    });
    return arg1;
  });
  return obj(...arguments);
};
obj = function _getAppStoreConsentReinstatementProof() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp;
        let closure_1;
        let integrity_token;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            closure_1 = undefined;
            integrity_token = undefined;
            const obj13 = PlatformUtils;
            if (obj13.isIOS()) {
              c2 = 1;
              c3 = 1;
              const obj4 = {
                value: getAppAttestAssertion((arg0) => {
                            const items = [arg0, constants.APP_STORE_CONSENT_REINSTATE, "ios", "true"];
                            return items.join("|");
                          }),
                done: false
              };
              return obj4;
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = { value: getAgeSignalChallenge(), done: false };
              return obj5;
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            if (null == tmp) {
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const obj7 = { platform: "ios", attest_key_id: tmp.keyId, attest_assertion: tmp.assertion };
              c3 = 3;
              const obj8 = { value: obj7, done: true };
              return obj8;
            }
          }
        } else {
          if (2 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_1 = value;
              if (null != closure_1) {
                c2 = 3;
                c3 = 1;
                const obj10 = { value: closure_129_19(closure_129_10(closure_1, "android")), done: false };
                return obj10;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            integrity_token = value;
            if (null != integrity_token) {
              obj = { platform: "android", integrity_token };
              c3 = 3;
              const obj12 = { value: obj, done: true };
              return obj12;
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
function requestPlayIntegrityToken() {
  return obj(...arguments);
}
obj = function _requestPlayIntegrityToken() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    const tmp16 = getPlayIntegrityCloudProjectNumber();
    const tmp14 = closure_0;
    if (null != tmp16) {
      const tmp4 = importDefault;
      if (null != react_nativeDefault2) {
        let c3 = 1;
        const items = [, ];
        const tmp4Result = tmp4(dependencyMap[7]);
        items[0] = tmp4Result.requestIntegrityToken(tmp14, tmp16);
        const obj4 = TimeUtils;
        const sleepResult = obj4.sleep(15000);
        items[1] = sleepResult.then(() => {

        });
        let c2 = 2;
        let c1 = 1;
        const obj5 = { value: race(items), done: false };
        return obj5;
      }
    }
    await "HermesInternal";
    await "HermesInternal";
    return arg1;
  });
  return obj(...arguments);
};
function getAgeSignalChallenge() {
  return obj(...arguments);
}
obj = function _getAgeSignalChallenge() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp5Result;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c2;
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj3 = PlatformUtils;
            const tmp5 = require;
            const tmp6 = dependencyMap;
            if (obj3.isAndroid()) {
              c2 = 1;
              c1 = 2;
              c0 = 1;
              const obj5 = { value: tmp5Result.requestAgeSignalChallenge("android"), done: false };
              tmp5Result = tmp5(tmp6[3]);
              return obj5;
            } else {
              c0 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
        } else if (1 === tmp3) {
          c2 = 0;
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c0 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          let nonce;
          if (value != null) {
            nonce = value.nonce;
          }
          c2 = 0;
          c0 = 3;
          obj = { value: nonce, done: true };
          return obj;
        }
      } catch (tmp7) {
        if (0 === c2) {
          c0 = 3;
          throw tmp7;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getAgeSignalIntegrityToken() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let closure_0 = arg0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (null != closure_0) {
            c3 = 1;
            c2 = 1;
            const obj4 = { value: requestPlayIntegrityToken(buildRequestHashPayload(tmp4, tmp5)), done: false };
            return obj4;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let c6 = 179099419678;
let c7 = 976935287357;
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalAttestation.tsx");

export const PLAY_INTEGRITY_CLOUD_PROJECT_NUMBER_PROD = 179099419678;
export const PLAY_INTEGRITY_CLOUD_PROJECT_NUMBER_STAGE = 976935287357;
export { buildRequestHashPayload };
export function buildIOSClientDataPayload(arg0, platform, arg2) {
  const items = [arg0, platform.platform, , , , ];
  let str = "";
  let str2 = "";
  if (null != platform.ageLower) {
    const _String = String;
    str2 = String(platform.ageLower);
  }
  items[2] = str2;
  let StringResult = str;
  if (null != platform.ageUpper) {
    const _String2 = String;
    StringResult = String(platform.ageUpper);
  }
  items[3] = StringResult;
  let appleVerifiedMethod = platform.appleVerifiedMethod;
  if (appleVerifiedMethod == null) {
    appleVerifiedMethod = str;
  }
  items[4] = appleVerifiedMethod;
  if (null != arg2) {
    const _String3 = String;
    str = String(arg2);
  }
  items[5] = str;
  return items.join("|");
}
export { buildConsentReinstatementPayload };
export function getAppStoreAgeSignalAssertion() {
  return obj(...arguments);
}
export function getAppStoreConsentReinstatementProof() {
  return obj(...arguments);
}
export function warmAgeSignalAttestation() {
  let tmp;
  if ("production" === PROJECT_ENV) {
    tmp = c6;
  } else {
    tmp = null;
    if ("staging" === PROJECT_ENV) {
      tmp = c7;
    }
  }
  const tmp2 = null != tmp && null != react_nativeDefault2;
  if (tmp2) {
    obj = react_nativeDefault2;
    const result = obj.prepareIntegrityToken(tmp);
    result.catch(() => {

    });
  }
}
export { getAgeSignalChallenge };
export function getAgeSignalIntegrityToken() {
  return obj(...arguments);
}
