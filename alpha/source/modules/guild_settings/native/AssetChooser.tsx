// Module ID: 18003
// Function ID: 18004
// Name: AssetChooser
// Dependencies: [5, 19, 17, 1085, 21, 5090, 587, 4787, 7741, 6189, 1126, 6164, 18004, 18005, 1200, 2]

// Module 18003 (AssetChooser)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 4787 */;
import FastImageDefault from "FastImage" /* 6164 */;
import Pressables from "Pressables" /* 6189 */;
import AssetRegistryDefault from "AssetRegistry" /* 18005 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import size_mod from "module_2" /* 2 */;

let c2, c3;

let StyleSheet;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let rect;
let size;
({ View: closure_4, Image: hasOwnProperty, TouchableWithoutFeedback: metroRequire, StyleSheet } = react_native);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let obj = { assetWrapper: { width: "100%", alignItems: "center" }, asset: size, assetImage: obj2, uploadIconWrapper: rect, uploadIcon: { width: 16, height: 16 }, remove: obj3 };
size = { width: "100%", height: 192, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj2 = { width: "100%", height: 192 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", bottom: 10, right: 10, shadowColor: nativeDefault.unsafe_rawColors.BLACK, shadowRadius: 10, shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.2 };
obj3 = { marginTop: 8, fontSize: 14, lineHeight: 18, color: nativeDefault.unsafe_rawColors.BLUE_345 };
const unpackModuleId = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class AssetChooser extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleChooseAsset = _asyncToGenerator(async (arg0, value) => {
      let c0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let base64;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let tmp14;
              c0 = undefined;
              base64 = undefined;
              ({ size, onChooseAsset: c0 } = applyArgumentsResult.props);
              const openImagePicker = tmp(c2[8]).openImagePicker;
              const tmp22 = tmp(c2[8]);
              if (typeof size === "number") {
                const obj4 = { size };
                tmp14 = obj4;
              } else {
                let obj5 = size;
                if (size == null) {
                  obj5 = { size };
                }
                tmp14 = obj5;
              }
              c2 = 1;
              c3 = 1;
              const obj6 = { value: openImagePicker(tmp14), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (c0 != null) {
                tmp9(base64);
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    applyArgumentsResult.handleRemoveAsset = function handleRemoveAsset() {
      const onChooseAsset = require.props.onChooseAsset;
      if (onChooseAsset != null) {
        onChooseAsset(null);
      }
    };
    return applyArgumentsResult;
  }
  getSource() {
    const rawSource = this.props.rawSource;
    let tmp3 = null;
    if (null != rawSource) {
      let tmpResult;
      if (rawSource.startsWith("data:")) {
        tmpResult = { uri: rawSource };
        const obj = { uri: rawSource };
      } else {
        tmpResult = tmp(tmp2, 192);
      }
      tmp3 = tmpResult;
    }
    return tmp3;
  }
  render() {
    let LegacyText;
    let intl;
    let intl2;
    let items;
    let obj2;
    let obj5;
    let obj7;
    const tmp = closure_11(this.context);
    const disabled = this.props.disabled;
    const source = this.getSource();
    const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl3.t["MsUY/S"]), style: tmp.assetWrapper, onPress: this.handleChooseAsset, disabled, children: React4(React3, obj2) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl3.intl;
    let tmp9Result = source;
    obj2 = { style: tmp.asset, children: items };
    const tmp10 = FastImageDefault;
    const tmp4 = authStore;
    if (null == source) {
      tmp9Result = tmp9(18004);
    }
    items = [, ];
    const obj3 = { source: tmp9Result, style: tmp.assetImage };
    items[0] = metroImportAll(tmp10, obj3);
    let tmp5Result = null;
    if (!disabled) {
      const obj4 = { style: tmp.uploadIconWrapper, children: metroImportAll(hasOwnProperty, obj5) };
      obj5 = { style: tmp.uploadIcon, source: AssetRegistryDefault };
      tmp5Result = tmp5(tmp8, obj4);
    }
    items[1] = tmp5Result;
    const children = [metroImportAll(PressableOpacity, obj), ];
    let tmp5Result2 = null;
    if (null != source) {
      tmp5Result2 = null;
      if (!disabled) {
        const obj6 = { accessibilityRole: "button", onPress: this.handleRemoveAsset, children: metroImportAll(LegacyText, obj7) };
        obj7 = { style: tmp.remove, children: intl2.string(intl3.t.N86XcP) };
        LegacyText = tmp6(1200).LegacyText;
        intl2 = tmp6(1126).intl;
        tmp5Result2 = tmp5(metroRequire, obj6);
      }
    }
    children[1] = tmp5Result2;
    return React4(tmp4, { children });
  }
}
const prototype = AssetChooser.prototype;
AssetChooser.contextType = native.ThemeContext;
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default AssetChooser;
