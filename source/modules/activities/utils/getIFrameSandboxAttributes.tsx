// Module ID: 10599
// Function ID: 82725
// Name: getIFrameSandboxAttributes
// Dependencies: []
// Exports: default

// Module 10599 (getIFrameSandboxAttributes)
let closure_0 = [null, null, null, null];
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/getIFrameSandboxAttributes.tsx");

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
