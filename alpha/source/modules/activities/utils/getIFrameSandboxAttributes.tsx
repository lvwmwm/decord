// Module ID: 10743
// Function ID: 10744
// Name: getIFrameSandboxAttributes
// Dependencies: [2]
// Exports: default

// Module 10743 (getIFrameSandboxAttributes)
import size from "module_2" /* 2 */;

let closure_0 = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
const result = size.fileFinishedImporting("modules/activities/utils/getIFrameSandboxAttributes.tsx");

export default function getIFrameSandboxAttributes(allowPopups) {
  let obj = closure_0;
  if (allowPopups.allowPopups) {
    const items = [, ];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, closure_0, 0);
    items[arraySpreadResult] = "allow-popups";
    items[arraySpreadResult + 1] = "allow-popups-to-escape-sandbox";
    obj = items;
  }
  return obj.join(" ");
};
