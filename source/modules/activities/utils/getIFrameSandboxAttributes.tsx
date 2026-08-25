// Module ID: 10817
// Function ID: 10818
// Name: getIFrameSandboxAttributes
// Dependencies: [2]
// Exports: default

// Module 10817 (getIFrameSandboxAttributes)
import set from "set" /* 2 */;

let closure_0 = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
const result = set.fileFinishedImporting("modules/activities/utils/getIFrameSandboxAttributes.tsx");

export default function getIFrameSandboxAttributes(allowPopups) {
  let obj = closure_0;
  if (allowPopups.allowPopups) {
    const items = [, ];
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp, 0);
    items[arraySpreadResult] = "allow-popups";
    items[arraySpreadResult + 1] = "allow-popups-to-escape-sandbox";
    obj = items;
  }
  return obj.join(" ");
};
