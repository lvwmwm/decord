// Module ID: 11716
// Function ID: 90978
// Name: ContactSyncNameInput
// Dependencies: [0, 0, 0, 0, 0, 4294967295, 0, 0, 0]
// Exports: default

// Module 11716 (ContactSyncNameInput)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_6, jsxs: closure_7 } = __exportStarResult1);
__exportStarResult1 = { flex: { flex: 1 }, content: {}, title: { value: null, on: null }, subtitle: { <string:2790674827>: "a", <string:3372925522>: "p", <string:2700829437>: "midnat" } };
__exportStarResult1 = { "Null": "<string:1895825773>", "Null": "Array", "Null": "<string:1093094481>", "Null": "text-muted", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[5]).radii.lg };
__exportStarResult1.input = __exportStarResult1;
__exportStarResult1.formSubtitle = { lineHeight: 16 };
__exportStarResult1.button = { flexGrow: 0, paddingTop: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_12 };
__exportStarResult1.error = { marginTop: 8 };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const obj1 = { flexGrow: 0, paddingTop: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_12 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameInput.tsx");

export default function ContactSyncNameInput(prefilledFromContactBook) {
  let error;
  let initialName;
  let loading;
  let onRemoveName;
  let flag = prefilledFromContactBook.prefilledFromContactBook;
  ({ loading, error, initialName } = prefilledFromContactBook);
  if (flag === undefined) {
    flag = false;
  }
  ({ onNext: closure_0, onRemoveName } = prefilledFromContactBook);
  const importDefault = onRemoveName;
  let dependencyMap;
  const tmp = __exportStarResult1();
  const tmp2 = callback(React.useState(initialName), 2);
  const first = tmp2[0];
  dependencyMap = first;
  const intl = arg1(dependencyMap[7]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[7]).t;
  if (null != onRemoveName) {
    let stringResult = string(t.i4jeWR);
  } else {
    stringResult = string(t.PDTjLN);
  }
  let obj = { style: items };
  const items = [tmp.content, { paddingBottom: importDefault(dependencyMap[6])({ includeKeyboardHeight: true }).insets.bottom }];
  obj = { style: tmp.flex };
  obj = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl2 = arg1(dependencyMap[7]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[7]).t;
  if (null != onRemoveName) {
    let string2Result = string2(t2./OywGQ);
  } else {
    string2Result = string2(t2.sO+NI5);
  }
  obj.children = string2Result;
  const items1 = [callback2(arg1(dependencyMap[8]).Text, obj), , , , ];
  const obj1 = { style: tmp.subtitle };
  const intl3 = arg1(dependencyMap[7]).intl;
  const string3 = intl3.string;
  const t3 = arg1(dependencyMap[7]).t;
  if (null != onRemoveName) {
    let string3Result = string3(t3.xCHh/t);
  } else {
    string3Result = string3(t3.xI496M);
  }
  obj1.children = string3Result;
  items1[1] = callback2(arg1(dependencyMap[8]).Text, obj1);
  const obj2 = { cachedAt: "k", edpbxy: "Array" };
  const intl4 = arg1(dependencyMap[7]).intl;
  obj2.children = intl4.string(arg1(dependencyMap[7]).t.42/D2U);
  items1[2] = callback2(arg1(dependencyMap[8]).Text, obj2);
  const obj3 = { absolute: "SlashBoxIcon", mix: "png", fontSize: null, lineHeight: 80, color: 80, marginTop: 16, value: first, onChangeText: tmp2[1], style: tmp.input, clearButtonVisibility: arg1(dependencyMap[9]).ClearButtonVisibility.WITH_CONTENT, autoCorrect: true, autoComplete: "name", textContentType: "name" };
  items1[3] = callback2(arg1(dependencyMap[9]).InputView, obj3);
  let tmp12 = null;
  if (flag) {
    const obj4 = { "Null": "useCallback", "Null": "marginBottom", alignItems: "createStyles", style: tmp.formSubtitle };
    const intl5 = arg1(dependencyMap[7]).intl;
    obj4.children = intl5.string(arg1(dependencyMap[7]).t.bCQt9K);
    tmp12 = callback2(arg1(dependencyMap[8]).Text, obj4);
  }
  items1[4] = tmp12;
  obj.children = items1;
  const items2 = [closure_7(View, obj), , , ];
  const obj5 = { variant: "primary" };
  let str = "lg";
  if (null != onRemoveName) {
    str = "md";
  }
  obj5.size = str;
  obj5.text = stringResult;
  obj5.onPress = function onPress() {
    return callback(first);
  };
  obj5.loading = loading;
  obj5.disabled = "" === first;
  items2[1] = callback2(arg1(dependencyMap[10]).Button, obj5);
  let tmp17 = null;
  if (null != onRemoveName) {
    const obj6 = { style: tmp.button };
    const obj7 = {};
    const intl6 = arg1(dependencyMap[7]).intl;
    obj7.text = intl6.string(arg1(dependencyMap[7]).t.91RssO);
    obj7.onPress = function onPress() {
      let tmp;
      if (null != onRemoveName) {
        tmp = onRemoveName();
      }
      return tmp;
    };
    obj6.children = callback2(arg1(dependencyMap[10]).Button, obj7);
    tmp17 = callback2(View, obj6);
  }
  items2[2] = tmp17;
  items2[3] = callback2(importDefault(dependencyMap[11]), { style: tmp.error, error });
  obj.children = items2;
  return closure_7(View, obj);
};
