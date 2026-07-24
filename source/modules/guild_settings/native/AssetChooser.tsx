// Module ID: 16268
// Function ID: 126328
// Name: _isNativeReflectConstruct
// Dependencies: [153, 5, 6, 7, 15, 17, 18, 31, 27, 653, 33, 4130, 689, 4674, 4660, 1212, 16269, 16270, 1273, 3842, 2]

// Module 16268 (_isNativeReflectConstruct)
import "_readOnlyError";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";
import getSystemLocale from "getSystemLocale";
import registerAsset from "registerAsset";
import Button from "Button";
import get_ActivityIndicator from "get ActivityIndicator";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ View: closure_9, Image: closure_10, ImageBackground: closure_11, TouchableWithoutFeedback: closure_12 } = get_ActivityIndicator);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { assetWrapper: { width: "100%", alignItems: "center" } };
_createForOfIteratorHelperLoose = { width: "100%", height: 192, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.asset = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", bottom: 10, right: 10, shadowColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, shadowRadius: 10, shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.2 };
_createForOfIteratorHelperLoose.uploadIconWrapper = obj1;
_createForOfIteratorHelperLoose.uploadIcon = { width: 16, height: 16 };
let obj2 = { marginTop: 8, fontSize: 14, lineHeight: 18, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345 };
_createForOfIteratorHelperLoose.remove = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp6 = ((PureComponent) => {
  class AssetChooser {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp3 = outer1_6;
      if (outer1_18()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.handleChooseAsset = outer1_3(tmp);
      tmp3Result.handleRemoveAsset = () => {
        const onChooseAsset = tmp3Result.props.onChooseAsset;
        if (null != onChooseAsset) {
          onChooseAsset(null);
        }
      };
      return tmp3Result;
    }
  }
  callback2(AssetChooser, PureComponent);
  let obj = {
    key: "getSource",
    value: function getSource() {
      const rawSource = this.props.rawSource;
      if (null == rawSource) {
        return null;
      } else if (rawSource.startsWith("data:")) {
        const obj = { uri: rawSource };
        let tmpResult = obj;
      } else {
        tmpResult = tmp(tmp2, 192);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value() {
      const tmp = outer1_17(this.context);
      const disabled = this.props.disabled;
      const source = this.getSource();
      let obj = {};
      obj = { accessibilityRole: "button" };
      const intl = AssetChooser(outer1_2[15]).intl;
      obj.accessibilityLabel = intl.string(AssetChooser(outer1_2[15]).t["MsUY/S"]);
      obj.style = tmp.assetWrapper;
      obj.onPress = this.handleChooseAsset;
      obj.disabled = disabled;
      obj = {};
      let tmp7 = source;
      if (null == source) {
        tmp7 = outer1_1(outer1_2[16]);
      }
      obj.source = tmp7;
      obj.style = tmp.asset;
      let tmp10 = null;
      if (!disabled) {
        const obj1 = { style: tmp.uploadIconWrapper };
        const obj2 = { style: tmp.uploadIcon, source: outer1_1(outer1_2[17]) };
        obj1.children = outer1_14(outer1_10, obj2);
        tmp10 = outer1_14(outer1_9, obj1);
      }
      obj.children = tmp10;
      obj.children = outer1_14(outer1_11, obj);
      const items = [outer1_14(AssetChooser(outer1_2[14]).PressableOpacity, obj), ];
      let tmp16 = null;
      if (null != source) {
        tmp16 = null;
        if (!disabled) {
          const obj3 = { accessibilityRole: "button", onPress: this.handleRemoveAsset };
          const obj4 = { style: tmp.remove };
          const intl2 = AssetChooser(outer1_2[15]).intl;
          obj4.children = intl2.string(AssetChooser(outer1_2[15]).t.N86XcP);
          obj3.children = outer1_14(AssetChooser(outer1_2[18]).LegacyText, obj4);
          tmp16 = outer1_14(outer1_12, obj3);
        }
      }
      items[1] = tmp16;
      obj.children = items;
      return outer1_16(outer1_15, obj);
    }
  };
  items[1] = obj;
  return callback(AssetChooser, items);
})(require("result").PureComponent);
tmp6.contextType = require("ManaContext").ThemeContext;
let result = require("_classCallCheck").fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default tmp6;
