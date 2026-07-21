// Module ID: 14539
// Function ID: 109522
// Name: TestView
// Dependencies: []

// Module 14539 (TestView)
function TestView() {
  const tmp = callback3();
  const tmp2 = callback(importAllResult.useState("1341506443580276736"), 2);
  const first = tmp2[0];
  const arg1 = first;
  let closure_1 = tmp2[1];
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp7 = callback(importAllResult.useState(id), 2);
  const first1 = tmp7[0];
  const dependencyMap = first1;
  const tmp9 = callback(importAllResult.useState(undefined), 2);
  const first2 = tmp9[0];
  const callback = first2;
  obj = { spacing: 16, style: tmp.container };
  const items1 = [callback2(arg1(dependencyMap[9]).Text, {}), ];
  obj = {};
  const items2 = [
    callback2(arg1(dependencyMap[9]).Text, { style: tmp.title }),
    callback2(arg1(dependencyMap[11]).TextInput, {
      containerStyle: tmp.textInput,
      value: first,
      onChange(arg0) {
        return callback(arg0);
      }
    }),
    callback2(arg1(dependencyMap[11]).TextInput, { containerStyle: tmp.textInput, value: first1, onChange: tmp7[1] }),
  ,

  ];
  const obj4 = { "Null": "EMTLOT", "Null": "primary", "Null": "lg", "Null": "braintree:merchantId", "Null": "shouldShowTopicsBar", "Null": "timeAsync", containerStyle: tmp.textInput, value: first2, onChange: tmp9[1] };
  items2[3] = callback2(arg1(dependencyMap[11]).TextInput, obj4);
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
  items2[4] = callback2(arg1(dependencyMap[12]).Button, obj5);
  obj.children = items2;
  items1[1] = closure_8(arg1(dependencyMap[10]).Card, obj);
  obj.children = items1;
  return closure_8(arg1(dependencyMap[8]).Stack, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.wrap = obj;
obj1 = { padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj1;
obj.textInput = { marginBottom: 16 };
obj.title = { marginBottom: 8 };
let closure_9 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function PaymentFlowTest() {
  const insets = importDefault(dependencyMap[16])({ includeKeyboardHeight: true }).insets;
  let obj = { skuIDs: [], activeSubscription: null };
  obj = { style: callback3().wrap, contentContainerStyle: obj };
  obj = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right, children: callback2(TestView, {}) };
  obj.children = callback2(ScrollView, obj);
  return callback2(arg1(dependencyMap[17]).NativePaymentContextProvider, obj);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTest.android.tsx");

export default memoResult;
