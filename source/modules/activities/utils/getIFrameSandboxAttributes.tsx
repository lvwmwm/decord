// Module ID: 10598
// Function ID: 82712
// Name: getIFrameSandboxAttributes
// Dependencies: []
// Exports: default

// Module 10598 (getIFrameSandboxAttributes)
let closure_0 = ["<string:1717977102>", "<string:1717986918>", "<string:70402032>", "<string:2989297238>"];
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
