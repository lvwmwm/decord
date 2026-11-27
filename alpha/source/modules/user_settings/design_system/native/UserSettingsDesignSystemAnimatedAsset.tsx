// Module ID: 17475
// Function ID: 17476
// Name: UserSettingsDesignSystemAnimatedAsset
// Dependencies: [32, 19, 17, 21, 17476, 575, 5043, 5634, 5057, 6115, 5641, 6140, 6144, 5257, 17477, 2120, 7549, 1359, 17478, 17479, 7251, 7253, 2]
// Exports: default

// Module 17475 (UserSettingsDesignSystemAnimatedAsset)
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7251 */;
import TableRadioRow from "TableRadioRow" /* 7253 */;
import valuesAll from "values" /* 17476 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import PlatformUtils from "utils/PlatformUtils" /* 1359 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
let rect;
function AnimationPlayground(arg0) {
  let Animation;
  let Stack;
  let TableRow;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c3;
  let c4;
  let c5;
  let first;
  let first1;
  let first2;
  let first3;
  let first4;
  let first5;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let obj12;
  let obj13;
  let obj4;
  let obj6;
  let obj8;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp34;
  let tmp35;
  let tmp37;
  let tmp38;
  let tmp40;
  let tmp41;
  let tmp44;
  let tmp46;
  let tmp48;
  let tmp69;
  let tmp7;
  ({ Animation, onAssetChange: require } = arg0);
  let context;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  let tmp = closure_17();
  const asset = Animation.asset;
  obj = react;
  let tmp2 = require;
  context = react.useContext(require("react").AccessibilityPreferencesContext);
  [first, tmp7] = react.useState("100%");
  [first1, tmp10] = react.useState("Fill the width");
  [first2, tmp13] = react.useState("Asset's own");
  [tmp15, tmp16] = react.useState("crop");
  _slicedToArray(react.useState("crop"), 2);
  [tmp19, tmp20] = react.useState(c10);
  _slicedToArray(react.useState(c10), 2);
  [first3, tmp23] = react.useState(c10);
  [tmp25, tmp26] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  [first4, tmp29] = react.useState(true);
  [tmp31, tmp32] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp34, tmp35] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  [tmp37, tmp38] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp40, tmp41] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  [first5, tmp44] = react.useState(true);
  [tmp46, c3] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [tmp48, c4] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [size, c5] = react.useState(undefined);
  const enabled = tmp50;
  items = [context, tmp37 || context.reducedMotion.enabled];
  const size2 = closure_13[first1];
  let tmp53 = null != size2.width;
  _slicedToArray(react.useState(undefined), 2);
  const memo = obj.useMemo(() => {
    let obj2;
    obj = { reducedMotion: obj2 };
    const merged = Object.assign(context);
    obj2 = { enabled };
    const merged1 = Object.assign(context.reducedMotion);
    return obj;
  }, items);
  const tmp17 = c10;
  const tmp52 = closure_13;
  if (tmp53) {
    tmp53 = null != size2.height;
  }
  const tmp54 = closure_14;
  if (null != size) {
    const width = size.width;
    let obj2 = { asset, aspectRatio: closure_14[first2] };
    const getAnimatedAssetBox = tmp2(context[19]).getAnimatedAssetBox;
    tmp2(context[19]);
    let merged = Object.assign(size2);
    const predicted = getAnimatedAssetBox(obj2).predicted;
    if (null != predicted.width) {
      let width2 = predicted.width;
    } else {
      width2 = width;
      if (typeof size2.width === "string") {
        const _parseFloat = parseFloat;
        width2 = width * parseFloat(size2.width) / 100;
      }
    }
  }
  const obj3 = { contentContainerStyle: tmp.container, children: closure_8(Stack, obj4) };
  const combined = "" + asset.name + "-" + tmp46;
  obj4 = { spacing: asset(context[5]).space.PX_16, children: items4 };
  Stack = tmp2(tmp3[9]).Stack;
  const items1 = [tmp.stage, , ];
  const tmp66 = tmp40 && tmp.greyStage;
  items1[1] = tmp66;
  items1[2] = { width: closure_12[first] };
  const obj5 = { style: items1, children: closure_8(enabled, obj6) };
  obj6 = {
    style: tmp.measure,
    onLayout: function handleMeasure(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      size = { width: layout.width, height: layout.height };
      _undefined3(size);
    },
    children: items2
  };
  const obj7 = { value: memo, children: closure_7(Animation, obj8, combined) };
  obj8 = {
    aspectRatio: closure_14[first2],
    fit: tmp15,
    anchor: tmp69,
    padColor: obj[first3],
    autoPlay: tmp25,
    loop: first4,
    paused: tmp31,
    pauseWhenOffscreen: tmp34,
    onLoad() {
      return _undefined2(false);
    },
    onError() {
      return _undefined2(true);
    },
    "aria-label": "" + asset.name + " animation"
  };
  const Provider = tmp2(tmp3[8]).AccessibilityPreferencesContext.Provider;
  let merged1 = Object.assign(size2);
  tmp69 = undefined;
  const tmp63 = c5;
  const tmp67 = closure_12;
  if (tmp19 !== tmp17) {
    tmp69 = tmp19;
  }
  items2 = [closure_7(Provider, obj7), ];
  let tmp62Result = null;
  const tmp70 = obj;
  if (first5) {
    tmp62Result = null;
    if (null != tmp56) {
      tmp62Result = null;
      if (null != size) {
        const obj9 = { pointerEvents: "none", style: items3 };
        items3 = [tmp.boxEdge, ];
        const size1 = { width: tmp56, height: size.height };
        items3[1] = size1;
        tmp62Result = tmp62(tmp65, obj9);
      }
    }
  }
  items2[1] = tmp62Result;
  items4 = [closure_7(enabled, obj5), , , , , , , , , , , ];
  str = "poster, because reduced motion is on";
  const Text = tmp2(tmp3[7]).Text;
  if (!(tmp37 || context.reducedMotion.enabled)) {
    str = "poster, because the media failed to load";
    if (!tmp48) {
      const tmp2Result2 = tmp2(context[18]);
      const formats = tmp2Result2.selectFormats(asset, str);
      const renderer = formats.renderer;
      if ("video" === renderer) {
        const _HermesInternal = HermesInternal;
        const str5 = formats.formats[0];
        str = "" + str5.toUpperCase() + " video";
      } else if ("image" === renderer) {
        str = "animated WebP";
      } else {
        str = "poster, because this platform has no format to play";
      }
    }
  }
  const items5 = ["Showing " + str, ];
  let combined1 = null;
  if (null != size) {
    combined1 = null;
    if (null != tmp56) {
      const _Math = Math;
      const rounded = Math.round(tmp56);
      const _Math2 = Math;
      const _HermesInternal2 = HermesInternal;
      combined1 = " \u00B7 box " + rounded + "\u00D7" + Math.round(size.height) + " pt";
    }
  }
  items5[1] = combined1;
  items4[1] = closure_8(Text, { variant: "body-sm/normal", color: "text-subtle", children: items5 });
  const obj10 = {
    text: "Restart",
    variant: "secondary",
    size: "sm",
    onPress: function restart() {
      _undefined2(false);
      _undefined((arg0) => arg0 + 1);
    }
  };
  items4[2] = closure_7(tmp2(context[10]).Button, obj10);
  const obj11 = { hasIcons: false, children: closure_7(TableRow, obj12) };
  const TableRowGroup = tmp2(tmp3[11]).TableRowGroup;
  obj12 = {
    label: "Asset",
    arrow: true,
    trailing: closure_7(tmp2(context[12]).TableRow.TrailingText, obj13),
    onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      obj = {
        sheetKey: UserSettingsDesignSystemAnimatedAssetPicker,
        names: closure_9.map((asset) => asset.asset.name),
        selectedName: asset.name,
        onSelect(arg0) {
          _undefined2(false);
          closure_1_0(arg0);
        }
      };
      const tmp2 = asyncRequire(17477, dependencyMap.paths);
      openLazy(tmp2, UserSettingsDesignSystemAnimatedAssetPicker, obj);
    }
  };
  TableRow = tmp2(tmp3[12]).TableRow;
  obj13 = { text: asset.name };
  items4[3] = closure_7(TableRowGroup, obj11);
  const obj14 = { title: "Stage width", value: first, options: Object.keys(tmp67), onChange: tmp7 };
  items4[4] = closure_7(RadioGroup, obj14);
  const obj15 = { title: "Size", value: first1, options: Object.keys(tmp52), onChange: tmp10 };
  items4[5] = closure_7(RadioGroup, obj15);
  let tmp62Result3 = null;
  if (!tmp53) {
    const _Object = Object;
    const obj16 = { title: "Aspect ratio", value: first2, options: Object.keys(tmp54), onChange: tmp13 };
    tmp62Result3 = tmp62(tmp77, obj16);
  }
  items4[6] = tmp62Result3;
  items4[7] = closure_7(RadioGroup, { title: "Fit", value: tmp15, options: ["crop", "pad"], onChange: tmp16 });
  const obj17 = { title: "Anchor", value: tmp19, options: items, onChange: tmp20 };
  items4[8] = closure_7(RadioGroup, obj17);
  let tmp62Result4 = null;
  if ("pad" === tmp15) {
    const _Object2 = Object;
    const obj18 = { title: "Pad colour", value: first3, options: Object.keys(tmp70), onChange: tmp23 };
    tmp62Result4 = tmp62(tmp77, obj18);
  }
  items4[9] = tmp62Result4;
  const obj19 = { title: "Playback", hasIcons: false, children: items6 };
  const TableRowGroup2 = tmp2(tmp3[11]).TableRowGroup;
  items6 = [closure_7(tmp2(context[16]).TableSwitchRow, { label: "Autoplay", value: tmp25, onValueChange: tmp26 }), closure_7(tmp2(context[16]).TableSwitchRow, { label: "Loop", value: first4, onValueChange: tmp29 }), closure_7(tmp2(context[16]).TableSwitchRow, { label: "Paused", value: tmp31, onValueChange: tmp32 }), closure_7(tmp2(context[16]).TableSwitchRow, { label: "Pause when the app is in the background", value: tmp34, onValueChange: tmp35 }), closure_7(tmp2(context[16]).TableSwitchRow, { label: "Force reduced motion", subLabel: "Off follows your own reduced motion setting.", value: tmp37, onValueChange: tmp38 })];
  items4[10] = closure_8(TableRowGroup2, obj19);
  const obj20 = { title: "Stage", hasIcons: false, children: items7 };
  const TableRowGroup3 = tmp2(tmp3[11]).TableRowGroup;
  items7 = [closure_7(tmp2(context[16]).TableSwitchRow, { label: "Grey stage", value: tmp40, onValueChange: tmp41 }), closure_7(tmp2(context[16]).TableSwitchRow, { label: "Show box edge", value: first5, onValueChange: tmp44 })];
  items4[11] = closure_8(TableRowGroup3, obj20);
  return closure_7(tmp63, obj3);
}
function RadioGroup(options) {
  let onChange;
  let title;
  let value;
  options = options.options;
  ({ title, value, onChange } = options);
  obj = {
    title,
    value,
    onChange,
    hasIcons: false,
    children: options.map((value) => {
      obj = { value, label: value };
      return closure_1_7(TableRadioRow.TableRadioRow, obj, value);
    })
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return metroImportDefault(TableRadioGroup, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const values = Object.values(valuesAll);
let closure_9 = values.filter(function isGeneratedAnimation(fn) {
  let tmp = typeof fn === "function";
  if (typeof fn === "function") {
    tmp = "asset" in fn;
  }
  return tmp;
});
let c10 = "Asset default";
const UserSettingsDesignSystemAnimatedAssetPicker = "UserSettingsDesignSystemAnimatedAssetPicker";
let closure_12 = { "100%": "100%", "75%": "75%", "50%": "50%" };
let closure_13 = { "Fill the width": {}, "Width 50%": { width: "50%" }, "Width 200": { width: 200 }, "Height 120": { height: 120 }, "300 \u00d7 300": { width: 300, height: 300 }, "340 \u00d7 120": { width: 340, height: 120 } };
let closure_14 = { "Asset's own": "id", "1/1": null, "16/9": null, "4/3": null, "9/16": null };
let items = ["Asset default", "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"];
let obj = { "Asset default": "id", Transparent: false, "Opaque #5865f2": false, "Translucent #5865f280": false, "Translucent red #ff000080": false, "Token: background base low": nativeDefault.colors.BACKGROUND_BASE_LOW };
let createStyles = createStyles_mod;
let obj2 = { container: obj3, stage: obj4, greyStage: obj5, measure: { alignItems: "flex-start" }, boxEdge: rect };
obj3 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj4 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
rect = { position: "absolute", top: 0, left: 0, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_17 = createStyles(obj2);
let str = "android";
if (PlatformUtils.isIOS()) {
  str = "ios";
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAnimatedAsset.tsx");

export default function UserSettingsDesignSystemAnimatedAsset() {
  let closure_129_0;
  let tmp5;
  let tmp9;
  const first = closure_9[0];
  str = undefined;
  const useState = react.useState;
  const tmp = closure_17();
  if (first != null) {
    str = first.asset.name;
  }
  if (str == null) {
    str = "";
  }
  [closure_129_0, tmp5] = useState(str);
  _slicedToArray(useState(str), 2);
  let found = arr.find((asset) => asset.asset.name === closure_1_0);
  if (found == null) {
    found = arr[0];
  }
  if (null == found) {
    const obj2 = { style: tmp.container, children: metroImportDefault(Text_Text.Text, { variant: "body-md/medium", color: "text-subtle", children: "No animated assets yet. They show up here once the asset pipeline has generated their components." }) };
    tmp9 = metroImportDefault(metroRequire, obj2);
  } else {
    obj = { Animation: found, onAssetChange: tmp5 };
    tmp9 = metroImportDefault(AnimationPlayground, obj);
  }
  return tmp9;
};
