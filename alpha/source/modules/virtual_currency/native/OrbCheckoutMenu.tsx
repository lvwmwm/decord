// Module ID: 17113
// Function ID: 17114
// Name: OrbCheckoutMenu
// Dependencies: [32, 19, 21, 4972, 6673, 14510, 1999, 5664, 6907, 5235, 7010, 5245, 2]
// Exports: default

// Module 17113 (OrbCheckoutMenu)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  let closure_1;
  let items1;
  let value;
  const tmp = closure_7();
  [value, closure_1] = react.useState("1409898407849365565");
  const items = [value];
  const callback = react.useCallback(() => {
    if (null != first) {
      let obj = ModalActionCreatorsDefault;
      const obj2 = {
        skuId: tmp,
        analyticsLocations: [],
        onCheckoutSuccess() {
            const obj = closure_1_1(closure_1_2[7]);
            obj.open("ORB_CHECKOUT_SUCCESS", { text: "Successfully redeemed item with Orbs" });
          }
      };
      obj.pushLazy(asyncRequire(14510, dependencyMap.paths), obj2);
    }
  }, items);
  let obj = { children: items1 };
  const Card = value(6907).Card;
  let obj2 = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  items1 = [closure_5(value(5235).Text, obj2), , , ];
  const obj3 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value,
    onChange(arg0) {
      return closure_1(arg0);
    },
    clearable: true
  };
  items1[1] = closure_5(value(7010).TextInput, obj3);
  const obj4 = { style: tmp.title, variant: "text-md/bold", children: "Checkout will open with the orb price of the product, if it exists" };
  items1[2] = closure_5(value(5235).Text, obj4);
  const obj5 = { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == value };
  items1[3] = closure_5(value(5245).Button, obj5);
  return closure_6(Card, obj);
};
