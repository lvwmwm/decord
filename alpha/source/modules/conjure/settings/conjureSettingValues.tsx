// Module ID: 17069
// Function ID: 17070
// Name: conjureSettingValues
// Dependencies: [2]
// Exports: conjureSettingBaseline, conjureSettingSubmitValue, conjureSettingValuesEqual

// Module 17069 (conjureSettingValues)
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
