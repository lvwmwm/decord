// Module ID: 14327
// Function ID: 108183
// Name: Sample
// Dependencies: []
// Exports: default

// Module 14327 (Sample)
function Sample(children) {
  const obj = { shadow: "low", style: callback5().sample, children: callback3(arg1(dependencyMap[7]).Stack, { spacing: 24, children: children.children }) };
  return callback3(arg1(dependencyMap[6]).Card, obj);
}
function InputUsername(defaultValue) {
  defaultValue = defaultValue.defaultValue;
  let str = "default";
  if (null != defaultValue) {
    str = "default";
    if (defaultValue.includes(" ")) {
      str = "error";
    }
  }
  const tmp2 = callback2(React.useState(str), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  const obj = {};
  const merged = Object.assign(defaultValue);
  obj["status"] = first;
  let str3;
  if ("error" === first) {
    str3 = "Username can't contain spaces";
  }
  obj["errorMessage"] = str3;
  obj["label"] = "Username";
  obj["leadingIcon"] = callback(dependencyMap[9]).AtIcon;
  obj["onChange"] = function onChange(arr) {
    let str = "default";
    if (arr.includes(" ")) {
      str = "error";
    }
    closure_0(str);
  };
  return closure_6(callback(dependencyMap[8]).TextInput, obj);
}
function GhostInputUsername(defaultValue) {
  defaultValue = defaultValue.defaultValue;
  let str = "default";
  if (null != defaultValue) {
    str = "default";
    if (defaultValue.includes(" ")) {
      str = "error";
    }
  }
  const tmp2 = callback2(React.useState(str), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  const obj = {};
  const merged = Object.assign(defaultValue);
  obj["status"] = first;
  let str3;
  if ("error" === first) {
    str3 = "Username can't contain spaces";
  }
  obj["errorMessage"] = str3;
  obj["onChange"] = function onChange(arr) {
    let str = "default";
    if (arr.includes(" ")) {
      str = "error";
    }
    closure_0(str);
  };
  return closure_6(callback(dependencyMap[10]).GhostInput, obj);
}
function GhostInputActionSheet() {
  let obj = {};
  const items = [callback3(arg1(dependencyMap[12]).BottomSheetTitleHeader, { title: "Ghost Input - Centered" }), ];
  obj = { style: { padding: 12 } };
  obj = { children: callback3(GhostInputUsername, { <string:2414968305>: null, <string:2854291185>: null }) };
  obj.children = callback3(Sample, obj);
  items[1] = callback3(arg1(dependencyMap[7]).Stack, obj);
  obj.children = items;
  return callback4(arg1(dependencyMap[11]).BottomSheet, obj);
}
function GhostInputActionSheetLeftAligned() {
  let obj = {};
  const items = [callback3(arg1(dependencyMap[12]).BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" }), ];
  obj = { style: { padding: 12 } };
  obj = { children: callback3(GhostInputUsername, {}) };
  obj.children = callback3(Sample, obj);
  items[1] = callback3(arg1(dependencyMap[7]).Stack, obj);
  obj.children = items;
  return callback4(arg1(dependencyMap[11]).BottomSheet, obj);
}
function CustomAttachmentExample() {
  const tmp = callback2(React.useState("default"), 2);
  const first = tmp[0];
  const callback = tmp[1];
  const tmp3 = callback2(React.useState(""), 2);
  let closure_1 = tmp3[1];
  let obj = { status: first };
  let str;
  if ("error" === first) {
    str = "Username can't contain spaces";
  }
  obj.errorMessage = str;
  obj.label = "Pressable Attachment";
  obj.value = tmp3[0];
  obj = {
    onPress() {
      return callback("You pressed the icon");
    },
    accessibilityLabel: "Press"
  };
  obj.trailingPressableProps = obj;
  obj.trailingIcon = callback(dependencyMap[9]).AtIcon;
  obj.onChange = function onChange(arr) {
    callback(arr);
    let str = "default";
    if (arr.includes(" ")) {
      str = "error";
    }
    closure_0(str);
  };
  return closure_6(callback(dependencyMap[8]).TextInput, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { padding: 16 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[5]).radii.xl };
obj.sample = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx");

export default function UserSettingsDesignSystemTextInput() {
  let obj = {};
  obj = { spacing: 24, style: callback5().container };
  obj = {};
  const items = [callback3(arg1(dependencyMap[8]).TextInput, { "Bool(false)": "<string:3410100226>", "Bool(false)": "<string:167772521>", "Bool(false)": "<string:1107296615>", "Bool(false)": "text-md/normal" }), callback3(arg1(dependencyMap[13]).TextArea, {}), callback3(arg1(dependencyMap[8]).TextInput, {}), callback3(arg1(dependencyMap[8]).TextInput, {})];
  obj.children = items;
  const items1 = [callback4(Sample, obj), callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "<string:1508376577>", <string:140675621>: "<string:1312948225>" }), callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "<string:2801795494>", <string:140675621>: "<string:1107296582>" }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj1 = {};
  const items2 = [callback3(arg1(dependencyMap[8]).TextInput, { "Bool(false)": "add", "Bool(false)": "it" }), callback3(arg1(dependencyMap[8]).TextInput, { "Bool(false)": "text-sm/medium", "Bool(false)": "text-subtle" }), callback3(arg1(dependencyMap[8]).TextInput, { label: "Large (default)" })];
  obj1.children = items2;
  items1[3] = callback4(Sample, obj1);
  items1[4] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "<string:2004025345>", <string:140675621>: "<string:1212284929>" });
  items1[5] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "<string:1090519577>", <string:140675621>: "<string:1090519390>" });
  const obj2 = {};
  const obj3 = { label: "Leading icon", leadingIcon: arg1(dependencyMap[15]).TextIcon };
  const items3 = [callback3(arg1(dependencyMap[8]).TextInput, obj3), , , ];
  const obj4 = { label: "Trailing icon", trailingIcon: arg1(dependencyMap[15]).TextIcon };
  items3[1] = callback3(arg1(dependencyMap[8]).TextInput, obj4);
  items3[2] = callback3(arg1(dependencyMap[8]).TextInput, { "Bool(true)": 1358955026, "Bool(true)": 2000782895 });
  const obj5 = { "Bool(true)": false, "Bool(true)": false, trailingIcon: arg1(dependencyMap[9]).AtIcon };
  items3[3] = callback3(arg1(dependencyMap[8]).TextInput, obj5);
  obj2.children = items3;
  items1[6] = callback4(Sample, obj2);
  items1[7] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[8] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[9] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "Nitro Pink", <string:140675621>: "nitro-pink" });
  const tmp = callback5();
  items1[10] = callback3(Sample, { children: callback3(CustomAttachmentExample, {}) });
  items1[11] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "Nitro Green", <string:140675621>: "nitro-green" });
  items1[12] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "Title goes here, and it can get really long so we should handle that", <string:140675621>: "Body copy goes here" });
  items1[13] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "text-md/medium", <string:140675621>: "text-subtle" });
  const obj7 = {};
  const obj8 = {};
  const items4 = [callback3(arg1(dependencyMap[17]).SearchField, { <string:1439367743>: false, <string:1856005359>: false }), ];
  const obj9 = {
    icon: callback3(arg1(dependencyMap[19]).SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  };
  items4[1] = callback3(arg1(dependencyMap[18]).IconButton, obj9);
  obj8.children = items4;
  obj7.children = callback4(arg1(dependencyMap[16]).Input, obj8);
  items1[14] = callback3(Sample, obj7);
  items1[15] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "<string:2437021697>", <string:140675621>: "<string:922747392>" });
  items1[16] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "Array", <string:140675621>: "isArray" });
  const obj10 = {};
  const items5 = [callback3(InputUsername, { defaultValue: "a space" }), callback3(arg1(dependencyMap[13]).TextArea, {})];
  obj10.children = items5;
  items1[17] = callback4(Sample, obj10);
  items1[18] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: 1316552706, <string:140675621>: -1840185343 });
  items1[19] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: true, <string:140675621>: true });
  const obj6 = { children: callback3(CustomAttachmentExample, {}) };
  items1[20] = callback3(Sample, { children: callback3(arg1(dependencyMap[20]).TextField, {}) });
  items1[21] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[22] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[23] = callback3(arg1(dependencyMap[14]).Text, {});
  const obj11 = { children: callback3(arg1(dependencyMap[20]).TextField, {}) };
  items1[24] = callback3(Sample, { children: callback3(arg1(dependencyMap[8]).TextInput, { subLabel: null, disabled: null }) });
  items1[25] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[26] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: null, <string:140675621>: "Maybe later" });
  items1[27] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "Array", <string:140675621>: "isArray" });
  const obj12 = { children: callback3(arg1(dependencyMap[8]).TextInput, { subLabel: null, disabled: null }) };
  items1[28] = callback3(Sample, { children: callback3(arg1(dependencyMap[13]).TextArea, { shrink: "isArray", size: "channel" }) });
  items1[29] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[30] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[31] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "Array", <string:140675621>: "isPublicInstance" });
  const obj13 = { children: callback3(arg1(dependencyMap[13]).TextArea, { shrink: "isArray", size: "channel" }) };
  items1[32] = callback3(Sample, { children: callback3(arg1(dependencyMap[21]).Button, obj15) });
  items1[33] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: null, <string:140675621>: null });
  const obj14 = { children: callback3(arg1(dependencyMap[21]).Button, obj15) };
  items1[34] = callback3(Sample, { children: callback3(arg1(dependencyMap[21]).Button, obj17) });
  items1[35] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "purple", <string:140675621>: "Here's a Promo Sheet" });
  items1[36] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: "<string:2437021697>", <string:140675621>: "<string:1023410688>" });
  const obj18 = {};
  const obj19 = { "Bool(false)": "add", "Bool(false)": "it", "Bool(false)": "isArray", "Bool(false)": "isArray", leadingPressableProps: { accessibilityLabel: "Click" } };
  const items6 = [callback3(arg1(dependencyMap[23]).SplitTextInput, obj19), , ];
  const obj20 = { "Bool(false)": "text-sm/medium", "Bool(false)": "text-subtle", "Bool(false)": "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons.", "Bool(false)": "text-sm/normal", leadingPressableProps: { accessibilityLabel: "Me" } };
  items6[1] = callback3(arg1(dependencyMap[23]).SplitTextInput, obj20);
  items6[2] = callback3(arg1(dependencyMap[23]).SplitTextInput, { leadingPressableProps: { accessibilityLabel: "Here" } });
  obj18.children = items6;
  items1[37] = callback4(Sample, obj18);
  items1[38] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: 1233998080, <string:140675621>: 36239170 });
  items1[39] = callback3(arg1(dependencyMap[14]).Text, { <string:1749439162>: null, <string:140675621>: null });
  obj.children = items1;
  obj.children = callback4(arg1(dependencyMap[7]).Stack, obj);
  return callback3(ScrollView, obj);
};
