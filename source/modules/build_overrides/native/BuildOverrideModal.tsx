// Module ID: 12747
// Function ID: 97781
// Name: BuildOverrideModal
// Dependencies: []
// Exports: default

// Module 12747 (BuildOverrideModal)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(true)": null, "Bool(true)": 94, "Bool(true)": 133, "Bool(true)": 90, "Bool(true)": 0, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.content = { 1403672165: null, -865820524: null, 1391239419: null };
const obj1 = { trackOptionClicked: "/assets/design/components/Icon/native/redesign/generated/images", UNDER_MINIMUM_AGE: 24, onAccessibilityFocus: 24, onAccessibilityBlur: null, YOU_TAB_CUSTOM_STATUS_PRESS: "2deb3f64961131491b7db6bb10903f69", DeviceState: "DoorExitIcon", 3YHwoG: "png", borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.imageWrapper = obj1;
obj.text = {};
obj.buildOverrideName = { marginTop: 8 };
obj.buildOverrideExpiration = { lineHeight: 24 };
obj.buildOverrideInvalid = { marginTop: 8 };
obj.buttonWrapper = { alignSelf: "stretch" };
obj.actionButton = { marginBottom: 8 };
let closure_9 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default function BuildOverrideModal(overrideUrl) {
  let str = overrideUrl.overrideUrl;
  if (str === undefined) {
    str = "";
  }
  const arg1 = str;
  let importDefault;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  if (obj.isThemeDark(tmp2)) {
    let tmp3Result = tmp3(tmp4[8]);
  } else {
    tmp3Result = tmp3(tmp4[9]);
  }
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_5];
  const items1 = [str];
  const stateFromStores = obj1.useStateFromStores(items, () => buildOverride.getBuildOverride(str), items1);
  importDefault = stateFromStores;
  const override = stateFromStores.override;
  let id;
  if (null != override) {
    const targetBuildOverride = override.targetBuildOverride;
    if (null != targetBuildOverride) {
      if (null != targetBuildOverride[closure_0(undefined, closure_2[11]).DEVICE_FIELD]) {
        id = tmp10.id;
      }
    }
  }
  let obj2 = importDefault(dependencyMap[12]);
  let obj3 = importDefault(dependencyMap[12])();
  let expiresAt;
  if (null != override) {
    expiresAt = override.expiresAt;
  }
  const tmp2 = importDefault(dependencyMap[6])();
  const durationResult = obj2.duration(obj3.diff(expiresAt));
  obj = { "Bool(false)": null, "Bool(false)": null, style: tmp.container };
  obj = { style: tmp.content };
  obj1 = { style: tmp.imageWrapper };
  obj2 = { source: tmp3Result };
  obj1.children = callback(closure_3, obj2);
  const items2 = [callback(closure_4, obj1), , ];
  obj3 = { style: tmp.text, variant: "text-md/medium" };
  const intl = arg1(dependencyMap[15]).intl;
  obj3.children = intl.string(arg1(dependencyMap[15]).t.6ILkNN);
  items2[1] = callback(arg1(dependencyMap[14]).Text, obj3);
  if (null != id) {
    const obj4 = {};
    const obj5 = { style: tmp.buildOverrideName, children: id };
    const items3 = [callback(arg1(dependencyMap[14]).Text, obj5), ];
    const obj6 = { style: tmp.buildOverrideExpiration };
    const intl3 = arg1(dependencyMap[15]).intl;
    const obj7 = { expirationDuration: humanizeResult };
    obj6.children = intl3.format(arg1(dependencyMap[15]).t.lOsPpu, obj7);
    items3[1] = callback(arg1(dependencyMap[14]).Text, obj6);
    obj4.children = items3;
    let tmp18 = callback2(closure_7, obj4);
  } else {
    const obj8 = { style: tmp.buildOverrideInvalid };
    const intl2 = arg1(dependencyMap[15]).intl;
    obj8.children = intl2.string(arg1(dependencyMap[15]).t.cz+sue);
    tmp18 = callback(arg1(dependencyMap[14]).Text, obj8);
  }
  items2[2] = tmp18;
  obj.children = items2;
  const items4 = [callback2(closure_4, obj), ];
  const obj9 = { style: tmp.buttonWrapper };
  if (null != id) {
    const obj10 = {};
    const obj11 = { style: tmp.actionButton };
    const obj12 = {};
    const intl5 = arg1(dependencyMap[15]).intl;
    obj12.text = intl5.string(arg1(dependencyMap[15]).t.v0MBqF);
    obj12.grow = true;
    obj12.onPress = function onPress() {
      const validatedURL = stateFromStores.validatedURL;
      let str = "";
      if (null != validatedURL) {
        str = validatedURL;
      }
      const result = str(closure_2[11]).setBuildOverrideFromLink(str);
    };
    obj11.children = callback(arg1(dependencyMap[16]).Button, obj12);
    const items5 = [callback(closure_4, obj11), ];
    const obj13 = {};
    const intl6 = arg1(dependencyMap[15]).intl;
    obj13.text = intl6.string(arg1(dependencyMap[15]).t.b5KKph);
    obj13.onPress = function onPress() {
      return stateFromStores(closure_2[17]).pop();
    };
    items5[1] = callback(arg1(dependencyMap[16]).Button, obj13);
    obj10.children = items5;
    let tmp29 = callback2(closure_7, obj10);
  } else {
    const obj14 = {};
    const intl4 = arg1(dependencyMap[15]).intl;
    obj14.text = intl4.string(arg1(dependencyMap[15]).t.WRkdCQ);
    obj14.grow = true;
    obj14.onPress = function onPress() {
      return stateFromStores(closure_2[17]).pop();
    };
    tmp29 = callback(arg1(dependencyMap[16]).Button, obj14);
  }
  obj9.children = tmp29;
  items4[1] = callback(closure_4, obj9);
  obj.children = items4;
  return callback2(arg1(dependencyMap[13]).SafeAreaPaddingView, obj);
};
