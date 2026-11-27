// Module ID: 18531
// Function ID: 18532
// Name: conjureSetupForm
// Dependencies: [18529, 14759, 1112, 4245, 2]
// Exports: conjureSettingDraftError, conjureSetupFieldErrorText, conjureSetupItems, conjureSetupNeededText, conjureSetupStatusText, conjureSetupTitle

// Module 18531 (conjureSetupForm)
import intl5 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import conjureSettingValues from "conjureSettingValues" /* 14759 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 18529 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/settings/conjureSetupForm.tsx");

export function conjureSetupItems(found1, stateFromStores, arg2) {
  let closure_0 = stateFromStores;
  let closure_1 = arg2;
  return found1.flatMap((key) => {
    let label;
    let tmpResult6;
    const obj = conjureSettingsRequest;
    const result = obj.conjureSettingsRequestEntry(key, stateFromStores);
    const tmp3 = stateFromStores;
    if (null == result) {
      return [];
    } else if ("secret" === result.kind) {
      let filled = result.filled;
      if (!filled) {
        let str2 = closure_1.secrets[key];
        if (str2 == null) {
          str2 = "";
        }
        filled = "" !== str2.trim();
      }
      const def = result.def;
      const obj2 = { key, label, filled, needed: !filled };
      label = undefined;
      if (def != null) {
        label = def.label;
      }
      if (label == null) {
        label = key;
      }
      const items = [obj2];
      return items;
    } else {
      const def2 = result.def;
      const values = closure_1.values;
      const tmpResult = conjureSettingValues;
      const tmp11 = values[tmpResult.conjureSettingDraftKey(tmpResult, def2, closure_1.serverId)];
      let result1;
      if (undefined !== tmp11) {
        const tmpResult4 = conjureSettingValues;
        result1 = tmpResult4.conjureSettingSubmitValue(def2, tmp11);
      }
      if (undefined === result1) {
        const tmpResult5 = conjureSettingValues;
        result1 = tmpResult5.conjureSettingAnyStoredValue(tmp3, def2);
      }
      const obj3 = { key, label: def2.label, filled: null != result1 && "" !== result1, needed: tmpResult6.conjureSettingsEntryRequired(result) && !(null != result1 && "" !== result1) };
      tmpResult6 = conjureSettingsRequest;
      const items1 = [obj3];
      tmpResult6.conjureSettingsEntryRequired(result) && !(null != result1 && "" !== result1);
      return items1;
    }
  });
}
export function conjureSettingDraftError(type, values) {
  if ("number" === type.type) {
    if (undefined !== values) {
      const obj3 = conjureSettingValues;
      const result = obj3.conjureSettingSubmitValue(type, values);
      let tmp2 = null;
      if (null !== result) {
        let obj2;
        if (typeof result !== "number") {
          obj2 = { kind: "invalid" };
        } else {
          if (null != type.min) {
            if (result < type.min) {
              obj2 = { kind: "min", min: type.min };
              const obj5 = { kind: "min", min: type.min };
            }
          }
          obj2 = null;
          if (null != type.max) {
            obj2 = null;
            if (result > type.max) {
              obj2 = { kind: "max", max: type.max };
              const obj = { kind: "max", max: type.max };
            }
          }
        }
        tmp2 = obj2;
      }
      return tmp2;
    }
  }
  return null;
}
export function conjureSetupTitle(name) {
  let stringResult;
  let str;
  if (name != null) {
    str = name.trim();
  }
  if (str == null) {
    str = "";
  }
  if ("" === str) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(_modDef4245.AP0svk);
  } else {
    const intl = intl5.intl;
    const obj = { name: str };
    stringResult = intl.formatToPlainString(_modDef4245.x1ppJb, obj);
  }
  return stringResult;
}
export const SETUP_STATUS_MAX_LINES = 2;
export function conjureSetupNeededText(join) {
  let formatToPlainStringResult;
  if (join.length > 2) {
    const intl = intl5.intl;
    const obj = { count: join.length };
    formatToPlainStringResult = intl.formatToPlainString(_modDef4245.GCBZ4y, obj);
  } else {
    formatToPlainStringResult = join.join(", ");
  }
  return formatToPlainStringResult;
}
export function conjureSetupStatusText(conjureSetupItemsResult) {
  let formatToPlainStringResult1;
  const found = conjureSetupItemsResult.filter((needed) => needed.needed);
  if (0 === found.length) {
    let stringResult = null;
    if (conjureSetupItemsResult.length > 0) {
      stringResult = null;
      if (conjureSetupItemsResult.every((filled) => filled.filled)) {
        const intl4 = intl5.intl;
        stringResult = intl4.string(_modDef4245["7dCuuy"]);
      }
    }
    formatToPlainStringResult1 = stringResult;
  } else if (conjureSetupItemsResult.some((filled) => filled.filled)) {
    let formatToPlainStringResult;
    const intl2 = intl5.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const LqdG9C = _modDef4245.LqdG9C;
    const mapped = found.map((label) => label.label);
    const tmp5 = require;
    const tmp7 = importDefault;
    if (mapped.length > 2) {
      const intl3 = tmp5(1112).intl;
      const obj = { count: mapped.length };
      formatToPlainStringResult = intl3.formatToPlainString(tmp7(4245).GCBZ4y, obj);
    } else {
      formatToPlainStringResult = mapped.join(", ");
    }
    const obj2 = { items: formatToPlainStringResult };
    formatToPlainStringResult1 = formatToPlainString(LqdG9C, obj2);
  } else {
    formatToPlainStringResult1 = null;
    if (conjureSetupItemsResult.length > 1) {
      const intl = intl5.intl;
      formatToPlainStringResult1 = intl.string(_modDef4245.t5po6q);
    }
  }
  return formatToPlainStringResult1;
}
export function conjureSetupFieldErrorText(label, draftErrorOfResult) {
  const intl = intl5.intl;
  const obj = { label, error: draftErrorOfResult };
  return intl.formatToPlainString(_modDef4245.fsStRX, obj);
}
