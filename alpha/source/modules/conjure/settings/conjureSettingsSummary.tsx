// Module ID: 12655
// Function ID: 12656
// Name: conjureSettingsSummary
// Dependencies: [1113, 3868, 12615, 2]
// Exports: conjureConnectedKeysSummary, conjureSettingsSummary

// Module 12655 (conjureSettingsSummary)
import intl7 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSummary.tsx");

export function conjureSettingsSummary(settingsRequest, settings, arg2) {
  _require = settings;
  let closure_1 = arg2;
  let obj = require("conjureSettingsRequest");
  const result = obj.conjureSettingsRequestKeys(settingsRequest, settings);
  return result.flatMap((key) => {
    let formatToPlainString;
    let obj2;
    let prop;
    let stringResult;
    settings = key;
    const schema = settings.schema;
    let tmp = settings;
    let found = schema.find((key) => key.key === closure_0);
    if (null == found) {
      return [];
    } else {
      let mapped;
      const obj = { key, text: formatToPlainString(prop, obj2) };
      let intl = intl7.intl;
      formatToPlainString = intl.formatToPlainString;
      const _Array = Array;
      obj2 = { label: found.label, value: stringResult };
      prop = _modDef3868["Z+FC3j"];
      if (Array.isArray("secret" === found.type || tmp.values[key])) {
        const _String2 = String;
        mapped = arr2.map(String);
      } else {
        const _String = String;
        mapped = [String("secret" === found.type || tmp.values[key])];
      }
      const type = found.type;
      if ("secret" === type) {
        const intl6 = tmp3(1113).intl;
        stringResult = intl6.string(tmp5(3868).CJq1rY);
      } else if ("checkbox" === type) {
        let nXtpn3;
        const intl5 = tmp3(1113).intl;
        const string = intl5.string;
        if (true === ("secret" === found.type || tmp.values[key])) {
          nXtpn3 = tmp5(3868).nXtpn3;
        } else {
          nXtpn3 = tmp5(3868)["0vfaMW"];
        }
        stringResult = string(nXtpn3);
      } else if ("select" === type) {
        const mapped1 = mapped.map((item) => {
          let closure_0 = item;
          const options = found.options;
          let label;
          if (options != null) {
            found = options.find((value) => value.value === closure_0);
            if (found != null) {
              label = found.label;
            }
          }
          if (label == null) {
            label = item;
          }
          return label;
        });
        stringResult = mapped1.join(", ");
      } else if ("channel" === type) {
        const mapped2 = mapped.map((item) => {
          let combined;
          const tmp = closure_1(item);
          if (null != tmp) {
            const _HermesInternal = HermesInternal;
            combined = "#" + tmp;
          } else {
            const intl = settings(closure_2_2[0]).intl;
            combined = intl.string(closure_2_1(closure_2_2[1]).Fw9G9A);
          }
          return combined;
        });
        stringResult = mapped2.join(", ");
      } else if ("game" === type) {
        let stringResult1;
        if (0 === mapped.length) {
          const intl4 = tmp3(1113).intl;
          stringResult1 = intl4.string(tmp5(3868).nEv677);
        } else {
          const intl3 = tmp3(1113).intl;
          stringResult1 = intl3.string(tmp5(3868).Fw9G9A);
        }
        stringResult = stringResult1;
      } else {
        if ("role" !== type) {
          if ("user" !== type) {
            stringResult = mapped.join(", ");
          }
        }
        const intl2 = tmp3(1113).intl;
        stringResult = intl2.string(tmp5(3868).Fw9G9A);
      }
      const items = [obj];
      return items;
    }
  });
}
export function conjureConnectedKeysSummary(arr) {
  const mapped = arr.map((label) => {
    let intl2;
    const intl = require("intl").intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { label, value: intl2.string(_modDef3868.CJq1rY) };
    const prop = _modDef3868["Z+FC3j"];
    intl2 = require("intl").intl;
    return formatToPlainString(prop, obj);
  });
  return mapped.join(" \u00B7 ");
}
