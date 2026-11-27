// Module ID: 18658
// Function ID: 18659
// Name: conjureSettingsSummary
// Dependencies: [1112, 4245, 18529, 14759, 2]
// Exports: conjureSavedKeysSummary, conjureSettingsSummary

// Module 18658 (conjureSettingsSummary)
import _modDef4245 from "module_4245" /* 4245 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 18529 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const intl7 = tmp(1112);
const conjureSettingValues = tmp(14759);
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSummary.tsx");

export function conjureSettingsSummary(request2, settings, arg2) {
  _require = settings;
  let closure_1 = arg2;
  let obj = require("conjureSettingsRequest");
  let result = obj.conjureSettingsRequestKeys(request2, settings);
  return result.flatMap((key) => {
    let formatToPlainString;
    let obj3;
    let prop;
    let stringResult;
    let tmp = require;
    const obj = conjureSettingsRequest;
    const result = obj.conjureSettingsRequestEntry(key, settings);
    const tmp3 = settings;
    if (null != result) {
      if (result.filled) {
        const obj2 = { key, text: formatToPlainString(prop, obj3) };
        let intl = intl7.intl;
        formatToPlainString = intl.formatToPlainString;
        const def = result.def;
        let label;
        prop = _modDef4245["Z+FC3j"];
        if (def != null) {
          label = def.label;
        }
        if (label == null) {
          label = key;
        }
        obj3 = { label, value: stringResult };
        if ("secret" === result.kind) {
          const intl6 = intl7.intl;
          stringResult = intl6.string(tmp6(4245)["w0Pnu+"]);
        } else {
          let mapped;
          const def2 = result.def;
          const tmpResult = conjureSettingValues;
          const result1 = tmpResult.conjureSettingAnyStoredValue(tmp3, result.def);
          const _Array = Array;
          if (Array.isArray(result1)) {
            const _String2 = String;
            mapped = result1.map(String);
          } else {
            const _String = String;
            mapped = [String(result1)];
          }
          const type = def2.type;
          if ("checkbox" === type) {
            let nXtpn3;
            const intl5 = intl7.intl;
            const string = intl5.string;
            if (true === result1) {
              nXtpn3 = tmp6(4245).nXtpn3;
            } else {
              nXtpn3 = tmp6(4245)["0vfaMW"];
            }
            stringResult = string(nXtpn3);
          } else if ("select" === type) {
            const mapped1 = mapped.map((item) => {
              let closure_0 = item;
              const options = def2.options;
              let label;
              if (options != null) {
                const found = options.find((value) => value.value === closure_0);
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
              const intl4 = intl7.intl;
              stringResult1 = intl4.string(tmp6(4245).nEv677);
            } else {
              const intl3 = intl7.intl;
              stringResult1 = intl3.string(tmp6(4245).Fw9G9A);
            }
            stringResult = stringResult1;
          } else {
            if ("role" !== type) {
              if ("user" !== type) {
                stringResult = mapped.join(", ");
              }
            }
            const intl2 = intl7.intl;
            stringResult = intl2.string(tmp6(4245).Fw9G9A);
          }
        }
        const items = [obj2];
      }
      return [];
    }
  });
}
export function conjureSavedKeysSummary(arr) {
  const mapped = arr.map((label) => {
    let intl2;
    const intl = require("intl").intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { label, value: intl2.string(_modDef4245["w0Pnu+"]) };
    const prop = _modDef4245["Z+FC3j"];
    intl2 = require("intl").intl;
    return formatToPlainString(prop, obj);
  });
  return mapped.join(" \u00B7 ");
}
