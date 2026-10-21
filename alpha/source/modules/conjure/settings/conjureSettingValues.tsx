// Module ID: 11744
// Function ID: 11745
// Name: conjureSettingValues
// Dependencies: [2]
// Exports: conjureSecretsSubmission, conjureSettingBaseline, conjureSettingSubmitValue, conjureSettingValuesEqual

// Module 11744 (conjureSettingValues)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingValues.tsx");

export const conjureSettingSubmitValue = function conjureSettingSubmitValue(found, num) {
  if ("number" === found.type) {
    if (typeof num === "number") {
      return num;
    } else {
      const _String2 = String;
      const str5 = String(num);
      const str6 = str5.trim();
      if ("" === str6) {
        return null;
      } else {
        const _Number = Number;
        const NumberResult = Number(str6.replace(",", "."));
        const _Number2 = Number;
        let tmp5;
        if (Number.isFinite(NumberResult)) {
          tmp5 = NumberResult;
        }
        return tmp5;
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
    let tmp3 = null;
    if (0 !== found.length) {
      tmp3 = found;
    }
    return tmp3;
  } else {
    let tmp;
    if (typeof num !== "string") {
      tmp = num;
    } else {
      tmp = null;
    }
    return tmp;
  }
};
export const conjureSettingValuesEqual = function conjureSettingValuesEqual(result, tmp2Result2) {
  const json = JSON.stringify(result);
  return json === JSON.stringify(tmp2Result2);
};
export const conjureSettingBaseline = function conjureSettingBaseline(found, memo1) {
  let tmp = memo1;
  if (memo1 == null) {
    tmp = "checkbox" !== found.type && null;
  }
  return tmp;
};
export const conjureSecretsSubmission = function conjureSecretsSubmission(memo, secrets) {
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
};
