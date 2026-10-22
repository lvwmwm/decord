// Module ID: 16990
// Function ID: 16991
// Name: OrbCheckoutMenu
// Dependencies: [32, 19, 21, 4969, 6657, 14421, 2002, 5649, 6890, 5220, 6993, 5230, 2]
// Exports: default

// Module 16990 (OrbCheckoutMenu)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
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
      obj.pushLazy(asyncRequire(14421, dependencyMap.paths), obj2);
    }
  }, items);
  let obj = { children: items1 };
  const Card = value(6890).Card;
  let obj2 = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  items1 = [closure_5(value(5220).Text, obj2), , , ];
  const obj3 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value,
    onChange(arg0) {
      return closure_1(arg0);
    },
    clearable: true
  };
  items1[1] = closure_5(value(6993).TextInput, obj3);
  const obj4 = { style: tmp.title, variant: "text-md/bold", children: "Checkout will open with the orb price of the product, if it exists" };
  items1[2] = closure_5(value(5220).Text, obj4);
  const obj5 = { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == value };
  items1[3] = closure_5(value(5230).Button, obj5);
  return closure_6(Card, obj);
};
