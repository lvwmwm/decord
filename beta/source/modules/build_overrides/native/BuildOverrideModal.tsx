// Module ID: 13414
// Function ID: 13415
// Name: BuildOverrideModal
// Dependencies: [19, 17, 10969, 21, 4836, 576, 4767, 4685, 13415, 13416, 504, 11267, 4421, 6544, 4832, 1115, 5281, 5039, 2]
// Exports: default

// Module 13414 (BuildOverrideModal)
import nativeDefault from "native" /* 576 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11267 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: { marginTop: 160, flex: 1, alignItems: "center" }, imageWrapper: size, text: { lineHeight: 24, textAlign: "center" }, buildOverrideName: { marginTop: 8 }, buildOverrideExpiration: { lineHeight: 24 }, buildOverrideInvalid: { marginTop: 8 }, buttonWrapper: { alignSelf: "stretch" }, actionButton: { marginBottom: 8 } };
obj2 = { flex: 1, height: "100%", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
size = { width: 100, height: 100, borderRadius: nativeDefault.radii.round, marginBottom: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles(obj);
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
  const tmp = closure_9();
  const tmp4 = stateFromStores(4767)();
  const obj = str(4685);
  if (obj.isThemeDark(tmp4)) {
    tmp2Result = tmp2(13415);
  } else {
    tmp2Result = tmp2(13416);
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
      const tmp9 = targetBuildOverride[str(undefined, 11267).DEVICE_FIELD];
      if (tmp9 != null) {
        id = tmp9.id;
      }
    }
  }
  const duration = stateFromStores(4421).duration;
  stateFromStores(4421);
  let expiresAt;
  const diff = stateFromStores(4421)().diff;
  stateFromStores(4421)();
  if (override != null) {
    expiresAt = override.expiresAt;
  }
  const rect = { top: true, bottom: true, style: tmp.container, children: items4 };
  const durationResult = duration(diff(expiresAt));
  const obj2 = { style: tmp.content, children: items2 };
  const obj3 = { style: tmp.imageWrapper, children: closure_6(closure_3, { source: tmp2Result }) };
  const humanizeResult = durationResult.humanize();
  const SafeAreaPaddingView = tmp5(6544).SafeAreaPaddingView;
  items2 = [closure_6(closure_4, obj3), , ];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: intl.string(str(1115).t["6ILkNN"]) };
  const Text = tmp5(4832).Text;
  intl = tmp5(1115).intl;
  items2[1] = closure_6(Text, obj4);
  if (null != id) {
    const obj5 = { children: items3 };
    const obj6 = { style: tmp.buildOverrideName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: id };
    items3 = [closure_6(str(4832).Text, obj6), ];
    const obj7 = { style: tmp.buildOverrideExpiration, variant: "text-md/medium", color: "text-default", children: intl3.format(str(1115).t.lOsPpu, obj8) };
    const Text3 = tmp5(4832).Text;
    intl3 = tmp5(1115).intl;
    obj8 = { expirationDuration: humanizeResult };
    items3[1] = closure_6(Text3, obj7);
    tmp16Result = tmp14(closure_7, obj5);
  } else {
    const obj9 = { style: tmp.buildOverrideInvalid, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl2.string(str(1115).t["cz+sue"]) };
    const Text2 = tmp5(4832).Text;
    intl2 = tmp5(1115).intl;
    tmp16Result = tmp16(Text2, obj9);
  }
  items2[2] = tmp16Result;
  items4 = [closure_8(closure_4, obj2), ];
  const obj10 = { style: tmp.buttonWrapper, children: tmp14Result2 };
  if (null != id) {
    const obj11 = { children: items5 };
    const obj12 = { style: tmp.actionButton, children: closure_6(Button2, obj13) };
    obj13 = {
      text: intl5.string(str(1115).t.v0MBqF),
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
    Button2 = tmp5(5281).Button;
    intl5 = tmp5(1115).intl;
    items5 = [closure_6(closure_4, obj12), ];
    const obj14 = {
      text: intl6.string(str(1115).t.b5KKph),
      variant: "secondary",
      grow: true,
      onPress() {
          const arr = stateFromStores(dependencyMap[17]);
          return arr.pop();
        }
    };
    const Button3 = tmp5(5281).Button;
    intl6 = tmp5(1115).intl;
    items5[1] = closure_6(Button3, obj14);
    tmp14Result2 = tmp14(closure_7, obj11);
  } else {
    const obj15 = {
      text: intl4.string(str(1115).t.WRkdCQ),
      grow: true,
      onPress() {
          const arr = stateFromStores(dependencyMap[17]);
          return arr.pop();
        }
    };
    const Button = tmp5(5281).Button;
    intl4 = tmp5(1115).intl;
    tmp14Result2 = tmp16(Button, obj15);
  }
  items4[1] = closure_6(closure_4, obj10);
  return closure_8(SafeAreaPaddingView, rect);
};
