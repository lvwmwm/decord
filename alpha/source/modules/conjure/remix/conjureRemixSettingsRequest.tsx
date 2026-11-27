// Module ID: 18657
// Function ID: 18658
// Name: conjureRemixSettingsRequest
// Dependencies: [1112, 4245, 2]
// Exports: conjureRemixSettingsRequest

// Module 18657 (conjureRemixSettingsRequest)
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/remix/conjureRemixSettingsRequest.tsx");

export function conjureRemixSettingsRequest(projectEvent) {
  let intl;
  let type;
  if (projectEvent != null) {
    type = projectEvent.type;
  }
  let settings_keys;
  if ("remixed" === type) {
    settings_keys = projectEvent.settings_keys;
  }
  let tmp3 = null;
  if (null != settings_keys) {
    tmp3 = null;
    if (0 !== settings_keys.length) {
      const obj = { keys: settings_keys, note: intl.string(_modDef4245.F2yVHg) };
      intl = intl2.intl;
      tmp3 = obj;
    }
  }
  return tmp3;
}
