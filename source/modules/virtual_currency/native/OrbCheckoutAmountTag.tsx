// Module ID: 11804
// Function ID: 91583
// Name: OrbCheckoutAmountTag
// Dependencies: []
// Exports: default

// Module 11804 (OrbCheckoutAmountTag)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { gap: importDefault(dependencyMap[3]).space.PX_4 };
obj.orbAmountTag = obj;
obj.orbsIcon = { bhk: "Array", bic: "isPrivate" };
let closure_5 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[7]);
const result = _module2.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback2();
  let obj = { style: tmp.orbAmountTag };
  obj = { flex: "<string:2417182093>", flexGrow: "NEWSROOM", style: tmp.orbsIcon };
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
