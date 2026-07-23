// Module ID: 14664
// Function ID: 111757
// Name: TestView
// Dependencies: [57, 31, 27, 1849, 33, 4130, 689, 624, 4541, 4126, 5167, 7512, 4543, 4098, 14665, 1934, 5160, 8769, 2]

// Module 14664 (TestView)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function TestView() {
  let tmp = callback2();
  const tmp2 = first2(importAllResult.useState("1341506443580276736"), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  let obj = first(first1[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp7 = first2(importAllResult.useState(id), 2);
  first1 = tmp7[0];
  const tmp9 = first2(importAllResult.useState(undefined), 2);
  first2 = tmp9[0];
  obj = { spacing: 16, style: tmp.container };
  const items1 = [callback(first(first1[9]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" }), ];
  obj = {};
  const obj1 = { style: tmp.title, variant: "text-md/bold", children: "Gift Purchase SKU" };
  const items2 = [callback(first(first1[9]).Text, obj1), , , , ];
  let obj2 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value: first,
    placeholder: "Default: 1341506443580276736 (Anime Shy)",
    onChange(arg0) {
      return callback(arg0);
    },
    isClearable: true
  };
  items2[1] = callback(first(first1[11]).TextInput, obj2);
  let obj3 = { containerStyle: tmp.textInput, label: "Gift Recipient ID", value: first1, placeholder: "Recipient User ID", onChange: tmp7[1], isClearable: true };
  items2[2] = callback(first(first1[11]).TextInput, obj3);
  const obj4 = { containerStyle: tmp.textInput, label: "Gift Message (Optional)", value: first2, placeholder: "Here's a gift for you!", onChange: tmp9[1], isClearable: true };
  items2[3] = callback(first(first1[11]).TextInput, obj4);
  const obj5 = {};
  let tmp14 = null === first;
  if (!tmp14) {
    tmp14 = null === first1;
  }
  obj5.disabled = tmp14;
  obj5.text = "Send Gift";
  obj5.onPress = function onPress() {
    let tmp = null != first;
    if (tmp) {
      tmp = null != first1;
    }
    if (tmp) {
      const obj = { selectedSkuId: first, requestType: "giftSku", giftRecipientId: first1, giftMessage: first2 };
      callback(first1[13]).hideActionSheet();
      const obj2 = callback(first1[13]);
      callback(first1[13]).openLazy(first(first1[15])(first1[14], first1.paths), "SimpleRequestOTPActionSheet", obj);
      const obj3 = callback(first1[13]);
    }
  };
  items2[4] = callback(first(first1[12]).Button, obj5);
  obj.children = items2;
  items1[1] = closure_8(first(first1[10]).Card, obj);
  obj.children = items1;
  return closure_8(first(first1[8]).Stack, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.wrap = obj;
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = _createForOfIteratorHelperLoose;
obj.textInput = { marginBottom: 16 };
obj.title = { marginBottom: 8 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function PaymentFlowTest() {
  const insets = importDefault(5160)({ includeKeyboardHeight: true }).insets;
  let obj = { skuIDs: [], activeSubscription: null };
  obj = { style: callback2().wrap, contentContainerStyle: obj };
  obj = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right, children: callback(TestView, {}) };
  obj.children = callback(ScrollView, obj);
  return callback(require(8769) /* NativePaymentContextProvider */.NativePaymentContextProvider, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default memoResult;
