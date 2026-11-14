// Module ID: 16309
// Function ID: 16310
// Name: BuildOverrideModal
// Dependencies: [19, 17, 12367, 21, 5306, 575, 5547, 5313, 16310, 16311, 504, 14059, 2169, 7415, 6020, 5929, 1113, 5936, 6848, 2]
// Exports: default

// Module 16309 (BuildOverrideModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 14059 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 12367 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: { marginTop: 160, flex: 1, alignItems: "center" }, imageWrapper: size, text: { lineHeight: 24, textAlign: "center" }, buildOverrideName: { marginTop: 8 }, buildOverrideExpiration: { lineHeight: 24 }, buildOverrideInvalid: { marginTop: 8 }, buttonWrapper: { alignSelf: "stretch" }, actionButton: { marginBottom: 8 } };
obj2 = { flex: 1, height: "100%", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
size = { width: 100, height: 100, borderRadius: nativeDefault.radii.round, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center" };
let closure_8 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default function BuildOverrideModal(overrideUrl) {
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let obj8;
  let tmp14Result2;
  let tmp16Result;
  let tmp2Result;
  let str = overrideUrl.overrideUrl;
  if (str === undefined) {
    str = "";
  }
  let stateFromStores;
  const tmp = closure_8();
  const tmp4 = stateFromStores(5547)();
  const obj = str(5313);
  if (obj.isThemeDark(tmp4)) {
    tmp2Result = tmp2(16310);
  } else {
    tmp2Result = tmp2(16311);
  }
  const items = [BuildOverrideStore];
  const items1 = [str];
  const tmp5Result = str(504);
  stateFromStores = tmp5Result.useStateFromStores(items, () => BuildOverrideStore.getBuildOverride(str), items1);
  const override = stateFromStores.override;
  let id;
  if (override != null) {
    const targetBuildOverride = override.targetBuildOverride;
    if (targetBuildOverride != null) {
      const tmp9 = targetBuildOverride[str(undefined, 14059).DEVICE_FIELD];
      if (tmp9 != null) {
        id = tmp9.id;
      }
    }
  }
  const duration = stateFromStores(2169).duration;
  stateFromStores(2169);
  let expiresAt;
  const diff = stateFromStores(2169)().diff;
  stateFromStores(2169)();
  if (override != null) {
    expiresAt = override.expiresAt;
  }
  const rect = { top: true, bottom: true, style: tmp.container, children: items4 };
  const durationResult = duration(diff(expiresAt));
  const obj2 = { style: tmp.content, children: items2 };
  const obj3 = { style: tmp.imageWrapper, children: closure_5(stateFromStores(6020), { source: tmp2Result }) };
  const humanizeResult = durationResult.humanize();
  const SafeAreaPaddingView = tmp5(7415).SafeAreaPaddingView;
  items2 = [closure_5(View, obj3), , ];
  const obj4 = { style: tmp.text, variant: "body-md/medium", children: intl.string(str(1113).t["6ILkNN"]) };
  const Text = tmp5(5929).Text;
  intl = tmp5(1113).intl;
  items2[1] = closure_5(Text, obj4);
  if (null != id) {
    const obj5 = { children: items3 };
    const obj6 = { style: tmp.buildOverrideName, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: id };
    items3 = [closure_5(str(5929).Text, obj6), ];
    const obj7 = { style: tmp.buildOverrideExpiration, variant: "body-md/medium", color: "text-default", children: intl3.format(str(1113).t.lOsPpu, obj8) };
    const Text3 = tmp5(5929).Text;
    intl3 = tmp5(1113).intl;
    obj8 = { expirationDuration: humanizeResult };
    items3[1] = closure_5(Text3, obj7);
    tmp16Result = tmp14(closure_6, obj5);
  } else {
    const obj9 = { style: tmp.buildOverrideInvalid, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl2.string(str(1113).t["cz+sue"]) };
    const Text2 = tmp5(5929).Text;
    intl2 = tmp5(1113).intl;
    tmp16Result = tmp16(Text2, obj9);
  }
  items2[2] = tmp16Result;
  items4 = [closure_7(View, obj2), ];
  const obj10 = { style: tmp.buttonWrapper, children: tmp14Result2 };
  if (null != id) {
    const obj11 = { children: items5 };
    const obj12 = { style: tmp.actionButton, children: closure_5(Button2, obj13) };
    obj13 = {
      text: intl5.string(str(1113).t.v0MBqF),
      grow: true,
      onPress() {
          str = stateFromStores.validatedURL;
          const setBuildOverrideFromLink = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink;
          build_overrides_BuildOverrideUtils;
          if (str == null) {
            str = "";
          }
          const result = setBuildOverrideFromLink(str);
        }
    };
    Button2 = tmp5(5936).Button;
    intl5 = tmp5(1113).intl;
    items5 = [closure_5(View, obj12), ];
    const obj14 = {
      text: intl6.string(str(1113).t.b5KKph),
      variant: "secondary",
      grow: true,
      onPress() {
          const arr = stateFromStores(dependencyMap[18]);
          return arr.pop();
        }
    };
    const Button3 = tmp5(5936).Button;
    intl6 = tmp5(1113).intl;
    items5[1] = closure_5(Button3, obj14);
    tmp14Result2 = tmp14(closure_6, obj11);
  } else {
    const obj15 = {
      text: intl4.string(str(1113).t.WRkdCQ),
      grow: true,
      onPress() {
          const arr = stateFromStores(dependencyMap[18]);
          return arr.pop();
        }
    };
    const Button = tmp5(5936).Button;
    intl4 = tmp5(1113).intl;
    tmp14Result2 = tmp16(Button, obj15);
  }
  items4[1] = closure_5(View, obj10);
  return closure_7(SafeAreaPaddingView, rect);
};
