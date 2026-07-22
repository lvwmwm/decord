// Module ID: 11805
// Function ID: 91609
// Name: OrbCheckoutAmountTag
// Dependencies: []
// Exports: default

// Module 11805 (OrbCheckoutAmountTag)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[3]).space.PX_4 };
obj.orbAmountTag = obj;
obj.orbsIcon = { "Null": "<string:1912602975>", "Null": "height" };
let closure_5 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[7]);
const result = _module2.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback2();
  let obj = { style: tmp.orbAmountTag };
  obj = { style: tmp.orbsIcon };
  const items = [callback(require(dependencyMap[4]).OrbsIcon, obj), ];
  obj = { variant: "text-md/semibold" };
  if (null == orbAmount) {
    const intl2 = require(dependencyMap[6]).intl;
    let stringResult = intl2.string(require(dependencyMap[6]).t.pfChQr);
  } else {
    const intl = require(dependencyMap[6]).intl;
    const obj1 = { orbAmount };
    stringResult = intl.formatToPlainString(require(dependencyMap[6]).t.W4DfeF, obj1);
  }
  obj.accessibilityLabel = stringResult;
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj.children = str;
  items[1] = callback(require(dependencyMap[5]).Text, obj);
  obj.children = items;
  return closure_4(View, obj);
};
