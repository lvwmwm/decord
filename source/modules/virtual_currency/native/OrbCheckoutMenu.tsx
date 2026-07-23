// Module ID: 14669
// Function ID: 111818
// Name: OrbCheckoutMenu
// Dependencies: [57, 31, 33, 4130, 4337, 11831, 1934, 3831, 5167, 4126, 7512, 4543, 2]
// Exports: default

// Module 14669 (OrbCheckoutMenu)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const result = require("jsxProd").fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("1409898407849365565"), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  const items = [first];
  callback = React.useCallback(() => {
    if (null != first) {
      let obj = callback(outer1_2[4]);
      obj = {
        skuId: first,
        analyticsLocations: [],
        onCheckoutSuccess() {
            callback(outer2_2[7]).open({ key: "ORB_CHECKOUT_SUCCESS", content: "Successfully redeemed item with Orbs" });
          }
      };
      obj.pushLazy(first(outer1_2[6])(outer1_2[5], outer1_2.paths), obj);
    }
  }, items);
  let obj = {};
  obj = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  const items1 = [callback2(first(4126).Text, obj), , , ];
  obj = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value: first,
    onChange(arg0) {
      return callback(arg0);
    },
    isClearable: true
  };
  items1[1] = callback2(first(7512).TextInput, obj);
  const obj1 = { style: tmp.title, variant: "text-md/bold", children: "Checkout will open with the orb price of the product, if it exists" };
  items1[2] = callback2(first(4126).Text, obj1);
  const obj2 = { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == first };
  items1[3] = callback2(first(4543).Button, obj2);
  obj.children = items1;
  return callback3(first(5167).Card, obj);
};
