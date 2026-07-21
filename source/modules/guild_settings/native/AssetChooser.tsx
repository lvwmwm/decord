// Module ID: 16088
// Function ID: 123728
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16088 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const importAllResult = importAll(dependencyMap[7]);
({ View: closure_9, Image: closure_10, ImageBackground: closure_11, TouchableWithoutFeedback: closure_12 } = arg1(dependencyMap[8]));
const UPLOAD_MEDIUM_SIZE = arg1(dependencyMap[9]).UPLOAD_MEDIUM_SIZE;
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = { assetWrapper: { "Null": null, "Null": null } };
obj = { borderRadius: importDefault(dependencyMap[12]).radii.xs, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOW };
obj.asset = obj;
const obj1 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": "emailAddress", "Bool(false)": "none", "Bool(false)": "email-address", "Bool(false)": true, shadowColor: importDefault(dependencyMap[12]).unsafe_rawColors.BLACK, shadowOffset: { <string:1632221346>: null, <string:2722977214>: null } };
obj.uploadIconWrapper = obj1;
obj.uploadIcon = {};
const tmp5 = arg1(dependencyMap[10]);
obj.remove = { color: importDefault(dependencyMap[12]).unsafe_rawColors.BLUE_345 };
let closure_17 = obj.createLegacyClassComponentStyles(obj);
const tmp6 = (PureComponent) => {
  class AssetChooser {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_4(this, AssetChooser);
      items1 = [...items];
      obj = closure_7(AssetChooser);
      tmp3 = closure_6;
      if (closure_18()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      AssetChooser = tmp3Result;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.handleChooseAsset = closure_3(tmp);
      tmp3Result.handleRemoveAsset = () => {
        const onChooseAsset = tmp3Result.props.onChooseAsset;
        if (null != onChooseAsset) {
          onChooseAsset(null);
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = AssetChooser;
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
  const items = [obj, ];
  obj = {
    key: "render",
    value() {
      const tmp = callback6(this.context);
      const disabled = this.props.disabled;
      const source = this.getSource();
      let obj = {};
      obj = { accessibilityRole: "button" };
      const intl = AssetChooser(closure_2[15]).intl;
      obj.accessibilityLabel = intl.string(AssetChooser(closure_2[15]).t.MsUY/S);
      obj.style = tmp.assetWrapper;
      obj.onPress = this.handleChooseAsset;
      obj.disabled = disabled;
      obj = {};
      let tmp7 = source;
      if (null == source) {
        tmp7 = callback(closure_2[16]);
      }
      obj.source = tmp7;
      obj.style = tmp.asset;
      let tmp10 = null;
      if (!disabled) {
        const obj1 = { style: tmp.uploadIconWrapper };
        const obj2 = { style: tmp.uploadIcon, source: callback(closure_2[17]) };
        obj1.children = callback5(closure_10, obj2);
        tmp10 = callback5(closure_9, obj1);
      }
      obj.children = tmp10;
      obj.children = callback5(closure_11, obj);
      const items = [callback5(AssetChooser(closure_2[14]).PressableOpacity, obj), ];
      let tmp16 = null;
      if (null != source) {
        tmp16 = null;
        if (!disabled) {
          const obj3 = { accessibilityRole: "button", onPress: this.handleRemoveAsset };
          const obj4 = { style: tmp.remove };
          const intl2 = AssetChooser(closure_2[15]).intl;
          obj4.children = intl2.string(AssetChooser(closure_2[15]).t.N86XcP);
          obj3.children = callback5(AssetChooser(closure_2[18]).LegacyText, obj4);
          tmp16 = callback5(closure_12, obj3);
        }
      }
      items[1] = tmp16;
      obj.children = items;
      return closure_16(closure_15, obj);
    }
  };
  items[1] = obj;
  return callback(AssetChooser, items);
}(importAllResult.PureComponent);
tmp6.contextType = arg1(dependencyMap[19]).ThemeContext;
const obj2 = { color: importDefault(dependencyMap[12]).unsafe_rawColors.BLUE_345 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_settings/native/AssetChooser.tsx");

export default tmp6;
