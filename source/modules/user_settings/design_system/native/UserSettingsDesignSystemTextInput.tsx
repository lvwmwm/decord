// Module ID: 14324
// Function ID: 108151
// Name: Sample
// Dependencies: []
// Exports: default

// Module 14324 (Sample)
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
  obj = { children: callback3(GhostInputUsername, { "Bool(true)": null, "Bool(true)": null }) };
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
  const items = [callback3(arg1(dependencyMap[8]).TextInput, { copyChanges: "<string:1107296779>", upsell: "text-md/normal", index: "GhostInput is a minimal version of TextInput with no container shape. These should be used sparingly, only in cases where a single input is the primary focus of the surrounding area.", animated: "<string:23721026>" }), callback3(arg1(dependencyMap[13]).TextArea, {}), callback3(arg1(dependencyMap[8]).TextInput, {}), callback3(arg1(dependencyMap[8]).TextInput, {})];
  obj.children = items;
  const items1 = [callback4(Sample, obj), callback3(arg1(dependencyMap[14]).Text, { "Null": 1515061249, "Null": -1841168383 }), callback3(arg1(dependencyMap[14]).Text, { "Null": true, "Null": true }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj1 = {};
  const items2 = [callback3(arg1(dependencyMap[8]).TextInput, { "Null": "add", "Null": "it" }), callback3(arg1(dependencyMap[8]).TextInput, { "Null": "text-sm/medium", "Null": "text-subtle" }), callback3(arg1(dependencyMap[8]).TextInput, { label: "Large (default)" })];
  obj1.children = items2;
  items1[3] = callback4(Sample, obj1);
  items1[4] = callback3(arg1(dependencyMap[14]).Text, { "Null": 2011758593, "Null": -260964351 });
  items1[5] = callback3(arg1(dependencyMap[14]).Text, {});
  const obj2 = {};
  const obj3 = { label: "Leading icon", leadingIcon: arg1(dependencyMap[15]).TextIcon };
  const items3 = [callback3(arg1(dependencyMap[8]).TextInput, obj3), , , ];
  const obj4 = { label: "Trailing icon", trailingIcon: arg1(dependencyMap[15]).TextIcon };
  items3[1] = callback3(arg1(dependencyMap[8]).TextInput, obj4);
  items3[2] = callback3(arg1(dependencyMap[8]).TextInput, { "Null": null, "Null": null });
  const obj5 = { "Null": "purple", "Null": "Blue", trailingIcon: arg1(dependencyMap[9]).AtIcon };
  items3[3] = callback3(arg1(dependencyMap[8]).TextInput, obj5);
  obj2.children = items3;
  items1[6] = callback4(Sample, obj2);
  items1[7] = callback3(arg1(dependencyMap[14]).Text, { "Null": "<string:664224161>", "Null": "<string:1867579393>" });
  items1[8] = callback3(arg1(dependencyMap[14]).Text, { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012731974748, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015371900500758416 });
  items1[9] = callback3(arg1(dependencyMap[14]).Text, {});
  const tmp = callback5();
  items1[10] = callback3(Sample, { children: callback3(CustomAttachmentExample, {}) });
  items1[11] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[12] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[13] = callback3(arg1(dependencyMap[14]).Text, {});
  const obj7 = {};
  const obj8 = {};
  const items4 = [callback3(arg1(dependencyMap[17]).SearchField, { "Null": null, "Null": null }), ];
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
  items1[15] = callback3(arg1(dependencyMap[14]).Text, { "Null": "al", "Null": "JoinServer" });
  items1[16] = callback3(arg1(dependencyMap[14]).Text, { "Null": true, "Null": true });
  const obj10 = {};
  const items5 = [callback3(InputUsername, { defaultValue: "a space" }), callback3(arg1(dependencyMap[13]).TextArea, { size: true, defaultValue: true, keyboardType: true, leadingIcon: true })];
  obj10.children = items5;
  items1[17] = callback4(Sample, obj10);
  items1[18] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[19] = callback3(arg1(dependencyMap[14]).Text, { "Null": false, "Null": false });
  const obj6 = { children: callback3(CustomAttachmentExample, {}) };
  items1[20] = callback3(Sample, { children: callback3(arg1(dependencyMap[20]).TextField, {}) });
  items1[21] = callback3(arg1(dependencyMap[14]).Text, { "Null": false, "Null": null });
  items1[22] = callback3(arg1(dependencyMap[14]).Text, { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000217421810796441, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006069077722407433 });
  items1[23] = callback3(arg1(dependencyMap[14]).Text, {});
  const obj11 = { children: callback3(arg1(dependencyMap[20]).TextField, {}) };
  items1[24] = callback3(Sample, { children: callback3(arg1(dependencyMap[8]).TextInput, { "Null": null, "Null": null }) });
  items1[25] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[26] = callback3(arg1(dependencyMap[14]).Text, { "Null": 48, "Null": 80 });
  items1[27] = callback3(arg1(dependencyMap[14]).Text, { "Null": "Come on fhqwhgads.", "Null": "\u{1F60E}" });
  const obj12 = { children: callback3(arg1(dependencyMap[8]).TextInput, { "Null": null, "Null": null }) };
  items1[28] = callback3(Sample, { children: callback3(arg1(dependencyMap[13]).TextArea, { "Null": "base", "Null": "isArrayBuffer" }) });
  items1[29] = callback3(arg1(dependencyMap[14]).Text, { "Null": null, "Null": "I said come on fhqwhgads." });
  items1[30] = callback3(arg1(dependencyMap[14]).Text, {});
  items1[31] = callback3(arg1(dependencyMap[14]).Text, {});
  const obj13 = { children: callback3(arg1(dependencyMap[13]).TextArea, { "Null": "base", "Null": "isArrayBuffer" }) };
  items1[32] = callback3(Sample, { children: callback3(arg1(dependencyMap[21]).Button, obj15) });
  items1[33] = callback3(arg1(dependencyMap[14]).Text, { "Null": "Array", "Null": "topEmojisMetadata" });
  const obj14 = { children: callback3(arg1(dependencyMap[21]).Button, obj15) };
  items1[34] = callback3(Sample, { children: callback3(arg1(dependencyMap[21]).Button, obj17) });
  items1[35] = callback3(arg1(dependencyMap[14]).Text, { "Null": null, "Null": null });
  items1[36] = callback3(arg1(dependencyMap[14]).Text, { "Null": "purple", "Null": "Here's a Promo Sheet" });
  const obj18 = {};
  const obj19 = { "Null": "add", "Null": "it", "Null": "isArray", "Null": "isArray", leadingPressableProps: { accessibilityLabel: "Click" } };
  const items6 = [callback3(arg1(dependencyMap[23]).SplitTextInput, obj19), , ];
  const obj20 = { "Null": "text-sm/medium", "Null": "text-subtle", "Null": "This does not flex well with internationalization and enlarged font size settings. Use TwinButtons instead when there are specifically two text Buttons.", "Null": "text-sm/normal", leadingPressableProps: { accessibilityLabel: "Me" } };
  items6[1] = callback3(arg1(dependencyMap[23]).SplitTextInput, obj20);
  items6[2] = callback3(arg1(dependencyMap[23]).SplitTextInput, { leadingPressableProps: { accessibilityLabel: "Here" } });
  obj18.children = items6;
  items1[37] = callback4(Sample, obj18);
  items1[38] = callback3(arg1(dependencyMap[14]).Text, { "Null": "<string:306315265>", "Null": "<string:3573547521>" });
  items1[39] = callback3(arg1(dependencyMap[14]).Text, { "Null": 1243107584, "Null": 36199746 });
  obj.children = items1;
  obj.children = callback4(arg1(dependencyMap[7]).Stack, obj);
  return callback3(ScrollView, obj);
};
