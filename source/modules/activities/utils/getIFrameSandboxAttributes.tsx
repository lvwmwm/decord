// Module ID: 10638
// Function ID: 82967
// Name: getIFrameSandboxAttributes
// Dependencies: [2]
// Exports: default

// Module 10638 (getIFrameSandboxAttributes)
let closure_0 = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
const result = require("set").fileFinishedImporting("modules/activities/utils/getIFrameSandboxAttributes.tsx");

export default function getIFrameSandboxAttributes(allowPopups) {
  let obj = closure_0;
  if (allowPopups.allowPopups) {
    const items = [, ];
    const arraySpreadResult = HermesBuiltin.arraySpread(closure_0, 0);
    items[arraySpreadResult] = "allow-popups";
    items[arraySpreadResult + 1] = "allow-popups-to-escape-sandbox";
    obj = items;
  }
  return obj.join(" ");
};
