// Module ID: 10923
// Function ID: 10924
// Name: conjureSettingValues
// Dependencies: [32, 2]
// Exports: conjureSecretsSubmission, conjureSettingBaseline, conjureSettingSubmitValue, conjureSettingValuesEqual, mergeSubmittedSettingValues

// Module 10923 (conjureSettingValues)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingValues.tsx");

export function conjureSettingSubmitValue(found, num) {
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
export function conjureSettingValuesEqual(result, tmp2Result2) {
  const json = JSON.stringify(result);
  return json === JSON.stringify(tmp2Result2);
}
export function conjureSettingBaseline(found, memo1) {
  let tmp = memo1;
  if (memo1 == null) {
    tmp = "checkbox" !== found.type && null;
  }
  return tmp;
}
export function conjureSecretsSubmission(memo, secrets) {
  if (0 === Object.keys(secrets).length) {
    return {};
  } else {
    let obj4;
    const obj2 = {};
    const _Object2 = Object;
    function _loop(item10009) {
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
      let _loopResult = _loop(item10009);
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
export function mergeSubmittedSettingValues(values, values2) {
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
