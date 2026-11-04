// Module ID: 17961
// Function ID: 17962
// Name: OrbCheckoutMenu
// Dependencies: [32, 19, 21, 5141, 6879, 15274, 2123, 5846, 7118, 5761, 7223, 5768, 2]
// Exports: default

// Module 17961 (OrbCheckoutMenu)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
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
      obj.pushLazy(asyncRequire(15274, dependencyMap.paths), obj2);
    }
  }, items);
  let obj = { children: items1 };
  const Card = value(7118).Card;
  let obj2 = { style: tmp.title, variant: "body-md/semibold", children: "Redeem SKU for Orbs" };
  items1 = [closure_5(value(5761).Text, obj2), , , ];
  const obj3 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value,
    onChange(arg0) {
      return closure_1(arg0);
    },
    clearable: true
  };
  items1[1] = closure_5(value(7223).TextInput, obj3);
  const obj4 = { style: tmp.title, variant: "body-md/semibold", children: "Checkout will open with the orb price of the product, if it exists" };
  items1[2] = closure_5(value(5761).Text, obj4);
  const obj5 = { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == value };
  items1[3] = closure_5(value(5768).Button, obj5);
  return closure_6(Card, obj);
};
