// Module ID: 13216
// Function ID: 13217
// Name: conjureSettingValues
// Dependencies: [32, 2]
// Exports: conjureSecretsSubmission, conjureSettingBaseline, conjureSettingDraftKey, conjureSettingStoredValue, conjureSettingValuesEqual, conjureSettingValuesSubmission, mergeSubmittedServerValues

// Module 13216 (conjureSettingValues)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function conjureSettingSubmitValue(found, num) {
  if ("number" === found.type) {
    if (typeof num === "number") {
      return num;
    } else {
      const _String2 = String;
      const str6 = String(num);
      const str7 = str6.trim();
      if ("" === str7) {
        return null;
      } else {
        const _Number = Number;
        const NumberResult = Number(str7.replace(",", "."));
        const _Number2 = Number;
        let tmp4;
        if (Number.isFinite(NumberResult)) {
          tmp4 = NumberResult;
        }
        return tmp4;
      }
    }
  } else if (true === found.multiple) {
    const _Array = Array;
    found = num;
    if (!Array.isArray(num)) {
      const _String = String;
      const str = String(num);
      const parts = str.split(/[\s,]+/);
      found = parts.filter((item) => "" !== item);
    }
    if (0 === found.length) {
      let items = null;
      if ("game" === found.type) {
        const _Array2 = Array;
        items = null;
        if (Array.isArray(num)) {
          items = [];
        }
      }
      found = items;
    }
    return found;
  } else {
    let tmp;
    if (typeof num !== "string") {
      tmp = num;
    } else {
      tmp = null;
    }
    return tmp;
  }
}
function mergeSubmittedSettingValues(values, values2) {
  let tmp7;
  let tmp8;
  let obj = values2;
  const obj3 = {};
  const merged = Object.assign(values);
  const _Object = Object;
  if (values2 == null) {
    obj = {};
  }
  const entries1 = entries(obj);
  const tmp3 = entries1[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp8] = tmp6;
    if (null == tmp8) {
      delete obj2[tmp7];
    } else {
      obj3[tmp7] = tmp9;
    }
    continue;
  }
  return obj3;
}
let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingValues.tsx");

export { conjureSettingSubmitValue };
export function conjureSettingValuesEqual(arg0, arg1) {
  const json = JSON.stringify(arg0);
  return json === JSON.stringify(arg1);
}
export function conjureSettingBaseline(type, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    tmp = "checkbox" !== type.type && null;
  }
  return tmp;
}
export function conjureSettingDraftKey(per_server, serverId) {
  if (true === per_server.per_server) {
    let key;
    if (null != serverId) {
      const _HermesInternal = HermesInternal;
      key = "" + serverId + ":" + per_server.key;
    }
    return key;
  }
  key = per_server.key;
}
export function conjureSettingStoredValue(stateFromStores, per_server, serverId) {
  let tmp3;
  if (true !== per_server.per_server) {
    let tmp7;
    if (stateFromStores != null) {
      tmp7 = stateFromStores.values[per_server.key];
    }
    tmp3 = tmp7;
  } else if (null != serverId) {
    let tmp4;
    if (stateFromStores != null) {
      const server_values = stateFromStores.server_values;
      if (server_values != null) {
        if (server_values[serverId] != null) {
          tmp4 = tmp5[per_server.key];
        }
      }
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
export function conjureSettingValuesSubmission(stateFromStores, arg1) {
  let closure_3;
  let closure_4;
  let obj4;
  let obj7;
  _slicedToArray = stateFromStores;
  const values = {};
  const obj2 = {};
  function _loop() {
    let obj;
    const index = closure_3.indexOf(":");
    let substr = null;
    if (-1 !== index) {
      substr = arr.slice(0, index);
    }
    const substr1 = arr.slice(index + 1);
    let found;
    if (stateFromStores != null) {
      const schema = tmp4.schema;
      found = schema.find((key) => key.key === substr1);
    }
    if (null != found) {
      if (true === found.per_server === null != substr) {
        let tmp6;
        const tmp19 = conjureSettingSubmitValue(found, closure_4);
        if (true !== found.per_server) {
          let tmp9;
          if (stateFromStores != null) {
            tmp9 = tmp4.values[found.key];
          }
          tmp6 = tmp9;
        } else if (null != substr) {
          let tmp7;
          if (stateFromStores != null) {
            const server_values = tmp4.server_values;
            if (server_values != null) {
              if (server_values[substr] != null) {
                tmp7 = tmp8[found.key];
              }
            }
          }
          tmp6 = tmp7;
        }
        if (undefined !== tmp19) {
          if (tmp6 == null) {
            tmp6 = "checkbox" !== found.type && null;
          }
          const _JSON = JSON;
          const _JSON2 = JSON;
          const json = JSON.stringify(tmp19);
          if (json !== JSON.stringify(tmp6)) {
            if (null == substr) {
              obj[substr1] = tmp19;
            } else {
              obj = {};
              const merged = Object.assign(obj2[substr]);
              obj[substr1] = tmp19;
              obj2[substr] = obj;
            }
          }
        }
        return 0;
      }
    }
    return 0;
  }
  const entries = Object.entries(arg1);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp4 = _slicedToArray;
    let tmp5 = _slicedToArray(tmp3, 2);
    [closure_3, closure_4] = tmp5;
    let _loopResult = _loop();
    continue;
  }
  if (Object.keys(values).length > 0) {
    obj4 = { values };
    const obj3 = { values };
  } else {
    obj4 = {};
  }
  const obj5 = {};
  let merged = Object.assign(obj4);
  if (Object.keys(obj2).length > 0) {
    obj7 = { server_values: obj2 };
    const obj6 = { server_values: obj2 };
  } else {
    obj7 = {};
  }
  const merged1 = Object.assign(obj7);
  return obj5;
}
export function conjureSecretsSubmission(memo, secrets) {
  if (0 === Object.keys(secrets).length) {
    return {};
  } else {
    let obj4;
    const obj2 = {};
    const _Object2 = Object;
    function _loop2(item10009) {
      memo = item10009;
      const found = memo.find((key) => key.key === closure_0);
      let hosts;
      if (found != null) {
        hosts = found.hosts;
      }
      const tmp3 = null != hosts && hosts.length > 0;
      if (tmp3) {
        obj2[item10009] = hosts;
      }
    }
    const keys = Object.keys(secrets);
    for (const item10009 of keys) {
      let _loop2Result = _loop2(item10009);
      continue;
    }
    const obj = { secrets };
    const _Object = Object;
    if (Object.keys(obj2).length > 0) {
      obj4 = { hosts: obj2 };
      const obj3 = { hosts: obj2 };
    } else {
      obj4 = {};
    }
    let tmp3 = obj;
    const merged = Object.assign(obj4);
    return obj;
  }
}
export function mergeSubmittedServerValues(server_values, server_values2) {
  const obj = {};
  const merged = Object.assign(server_values);
  let obj2 = server_values2;
  const _Object = Object;
  if (server_values2 == null) {
    obj2 = {};
  }
  const keys1 = keys(obj2);
  for (const item10016 of keys1) {
    let obj3 = obj[item10016];
    let tmp3 = item10016;
    let tmp4 = mergeSubmittedSettingValues;
    if (obj3 == null) {
      obj3 = {};
    }
    let tmp5;
    if (server_values2 != null) {
      tmp5 = server_values2[tmp3];
    }
    obj[item10016] = tmp4(obj3, tmp5);
    continue;
  }
  return obj;
}
export { mergeSubmittedSettingValues };
