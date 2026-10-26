// Module ID: 11821
// Function ID: 11822
// Name: conjureSettingsRequired
// Dependencies: [2]
// Exports: conjureMissingRequiredSettings, isConjureSettingRequired

// Module 11821 (conjureSettingsRequired)
import size from "module_2" /* 2 */;

const set = new Set(["select", "checkbox", "channel", "role", "user"]);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsRequired.tsx");

export const isConjureSettingRequired = function isConjureSettingRequired(required) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  required = undefined;
  if (required != null) {
    required = required.required;
  }
  let tmp2 = true === required;
  if (tmp2) {
    tmp2 = "secret" !== required.type || !flag;
  }
  return tmp2;
};
export const conjureMissingRequiredSettings = function conjureMissingRequiredSettings(arr) {
  const found = arr.filter((item) => {
    let def;
    let secretStored;
    let value;
    ({ def, value, secretStored } = item);
    const hasItem = set.has(def.type);
    let tmp2 = !hasItem;
    if (tmp2) {
      if (secretStored === undefined) {
        secretStored = false;
      }
      let required;
      if (def != null) {
        required = def.required;
      }
      let tmp5 = true === required;
      if (tmp5) {
        tmp5 = "secret" !== def.type || !secretStored;
      }
      tmp2 = tmp5;
    }
    if (tmp2) {
      let tmp8 = null == value;
      if (!tmp8) {
        let isArray;
        if (typeof value === "string") {
          isArray = "" === value.trim();
        } else {
          const _Array = Array;
          isArray = Array.isArray(value) && 0 === value.length;
        }
        tmp8 = isArray;
      }
      tmp2 = tmp8;
    }
    return tmp2;
  });
  return found.map((def) => def.def.key);
};
