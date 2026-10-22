// Module ID: 12320
// Function ID: 12321
// Name: conjureSettingsSummary
// Dependencies: [1128, 3830, 12317, 2]
// Exports: conjureConnectedKeysSummary, conjureSettingsSummary

// Module 12320 (conjureSettingsSummary)
import intl5 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSummary.tsx");

export const conjureSettingsSummary = function conjureSettingsSummary(settingsRequest, settings, arg2) {
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
      let intl = intl5.intl;
      formatToPlainString = intl.formatToPlainString;
      const _Array = Array;
      obj2 = { label: found.label, value: stringResult };
      prop = _modDef3830["Z+FC3j"];
      if (Array.isArray("secret" === found.type || tmp.values[key])) {
        const _String2 = String;
        mapped = arr2.map(String);
      } else {
        const _String = String;
        mapped = [String("secret" === found.type || tmp.values[key])];
      }
      const type = found.type;
      if ("secret" === type) {
        const intl4 = tmp3(1128).intl;
        stringResult = intl4.string(tmp5(3830).CJq1rY);
      } else if ("checkbox" === type) {
        let nXtpn3;
        const intl3 = tmp3(1128).intl;
        const string = intl3.string;
        if (true === ("secret" === found.type || tmp.values[key])) {
          nXtpn3 = tmp5(3830).nXtpn3;
        } else {
          nXtpn3 = tmp5(3830)["0vfaMW"];
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
      } else {
        if ("role" !== type) {
          if ("user" !== type) {
            stringResult = mapped.join(", ");
          }
        }
        const intl2 = tmp3(1128).intl;
        stringResult = intl2.string(tmp5(3830).Fw9G9A);
      }
      const items = [obj];
      return items;
    }
  });
};
export const conjureConnectedKeysSummary = function conjureConnectedKeysSummary(arr) {
  const mapped = arr.map((label) => {
    let intl2;
    const intl = require("intl").intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { label, value: intl2.string(_modDef3830.CJq1rY) };
    const prop = _modDef3830["Z+FC3j"];
    intl2 = require("intl").intl;
    return formatToPlainString(prop, obj);
  });
  return mapped.join(" \u00B7 ");
};
