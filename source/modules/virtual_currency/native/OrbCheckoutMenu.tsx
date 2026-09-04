// Module ID: 15621
// Function ID: 15622
// Name: OrbCheckoutMenu
// Dependencies: [32, 19, 21, 4481, 4731, 13084, 2008, 4194, 5562, 4477, 6547, 4936, 2]
// Exports: default

// Module 15621 (OrbCheckoutMenu)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ textInput: { marginBottom: 16 }, title: { marginBottom: 8 } });
const result = require("set").fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutMenu.tsx");

export default function OrbCheckoutMenu() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("1409898407849365565"), 2);
  const first = tmp2[0];
  closure_1 = tmp2[1];
  const items = [first];
  callback = React.useCallback(() => {
    if (null != first) {
      let obj = callback(closure_1_2[4]);
      obj = { skuId: null, analyticsLocations: null, onCheckoutSuccess: null };
      obj[0] = tmp;
      obj[1] = [];
      obj[2] = function onCheckoutSuccess() {
        callback(table[7]).open({ key: "ORB_CHECKOUT_SUCCESS", content: "Successfully redeemed item with Orbs" });
      };
      obj.pushLazy(first(closure_1_2[6])(closure_1_2[5], closure_1_2.paths), obj);
    }
  }, items);
  let obj = { children: null };
  obj = { style: tmp.title, variant: "text-md/bold", children: "Redeem SKU for Orbs" };
  const items1 = [callback2(first(4477).Text, obj), , , ];
  obj = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value: first,
    onChange(arg0) {
      return callback(arg0);
    },
    isClearable: true
  };
  items1[1] = callback2(first(6547).TextInput, obj);
  items1[2] = callback2(first(4477).Text, { style: tmp.title, variant: "text-md/bold", children: "Checkout will open with the orb price of the product, if it exists" });
  items1[3] = callback2(first(4936).Button, { text: "Open Orbs Checkout", variant: "primary", onPress: callback, disabled: null == first });
  obj[0] = items1;
  return callback3(first(5562).Card, obj);
};
