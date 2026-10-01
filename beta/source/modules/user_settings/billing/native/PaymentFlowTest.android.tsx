// Module ID: 15294
// Function ID: 15295
// Name: PaymentFlowTest
// Dependencies: [32, 19, 17, 1372, 21, 4836, 576, 563, 5279, 4832, 5919, 6024, 5281, 4800, 15295, 1981, 6402, 10282, 2]

// Module 15294 (PaymentFlowTest)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import NativePaymentContext from "NativePaymentContext" /* 10282 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function TestView() {
  let currentUser;
  let first1;
  let first2;
  let items1;
  let tmp = closure_9();
  let obj = react;
  let tmp2 = first2;
  const tmp3 = first2(react.useState("1341506443580276736"), 2);
  const value = tmp3[0];
  let closure_1 = tmp3[1];
  let obj2 = value(first1[7]);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  const useState = react.useState;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2Result = tmp2(useState(id), 2);
  first1 = tmp2Result[0];
  const tmp11 = tmp2Result[1];
  const tmp2Result2 = tmp2(obj.useState(undefined), 2);
  first2 = tmp2Result2[0];
  let obj3 = { spacing: 16, style: tmp.container, children: items1 };
  const tmp14 = tmp2Result2[1];
  const Stack = tmp5(tmp6[8]).Stack;
  items1 = [closure_7(tmp5(tmp6[9]).Text, { variant: "text-lg/bold", children: "Android Payment Flow Test" }), ];
  const Card = tmp5(tmp6[10]).Card;
  const items2 = [, , , , ];
  const obj4 = { style: tmp.title, variant: "text-md/bold", children: "Gift Purchase SKU" };
  items2[0] = closure_7(value(first1[9]).Text, obj4);
  const obj5 = {
    containerStyle: tmp.textInput,
    label: "SKU ID",
    value,
    placeholder: "Default: 1341506443580276736 (Anime Shy)",
    onChange(arg0) {
      return closure_1(arg0);
    },
    clearable: true
  };
  items2[1] = closure_7(value(first1[11]).TextInput, obj5);
  const obj6 = { containerStyle: tmp.textInput, label: "Gift Recipient ID", value: first1, placeholder: "Recipient User ID", onChange: tmp11, clearable: true };
  items2[2] = closure_7(value(first1[11]).TextInput, obj6);
  const obj7 = { containerStyle: tmp.textInput, label: "Gift Message (Optional)", value: first2, placeholder: "Here's a gift for you!", onChange: tmp14, clearable: true };
  items2[3] = closure_7(value(first1[11]).TextInput, obj7);
  let tmp17 = null === value;
  const Button = tmp5(tmp6[12]).Button;
  const tmp16 = closure_7;
  if (!tmp17) {
    tmp17 = null === first1;
  }
  const obj8 = { children: items2 };
  const obj9 = {
    disabled: tmp17,
    text: "Send Gift",
    onPress() {
      let tmp2 = null != first;
      const tmp = first;
      if (tmp2) {
        tmp2 = null != first1;
      }
      if (tmp2) {
        const obj = { selectedSkuId: tmp, requestType: "giftSku", giftRecipientId: first1, giftMessage: first2 };
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(15295, dependencyMap.paths), "SimpleRequestOTPActionSheet", obj);
      }
    }
  };
  items2[4] = tmp16(Button, obj9);
  items1[1] = closure_8(Card, obj8);
  return closure_8(Stack, obj3);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3, textInput: { marginBottom: 16 }, title: { marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const memoResult = react.memo(function PaymentFlowTest() {
  let obj2;
  const tmp = closure_9();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = { skuIDs: [], activeSubscription: null, children: metroImportDefault(ScrollView, obj2) };
  obj2 = { style: tmp.wrap, contentContainerStyle: { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }, children: metroImportDefault(TestView, {}) };
  const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
  return metroImportDefault(NativePaymentContextProvider, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default memoResult;
