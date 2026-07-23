// Module ID: 10067
// Function ID: 77742
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1278, 33, 4130, 689, 3976, 10068, 10069, 4126, 1212, 10070, 10071, 4660, 3842, 2]

// Module 10067 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getSystemLocale from "getSystemLocale";
import registerAsset from "registerAsset";
import PressableBase from "PressableBase";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_10 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_11;
let closure_12;
let closure_8;
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
({ View: closure_8, Image: closure_9 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { width: 82, height: 82, marginTop: 4 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.guildPlaceholder = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildIcon = { width: 82, height: 82, borderRadius: 41 };
_createForOfIteratorHelperLoose.iconWrapperBorder = { position: "absolute", top: -8, right: -8, width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" };
let obj1 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose.filledIconWrapper = obj1;
let obj2 = { position: "absolute", top: -4, right: -4, width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.emptyIconWrapper = obj2;
let obj3 = { borderWidth: 2, borderStyle: "dashed", justifyContent: "center", alignItems: "center", borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.emptyGuildIcon = obj3;
_createForOfIteratorHelperLoose.emptyGuildIconText = { textAlign: "center", lineHeight: 16, paddingTop: 4 };
_createForOfIteratorHelperLoose.uploadIcon = { height: 16, width: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp5 = ((PureComponent) => {
  class GuildIconUploader {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildIconUploader);
      obj = outer1_6(GuildIconUploader);
      tmp2 = outer1_5;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildIconUploader, PureComponent);
  let obj = {
    key: "renderIcon",
    value() {
      const tmp = outer1_13(this.context);
      const icon = this.props.icon;
      if (null != icon) {
        let obj = {};
        const items = [, ];
        ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
        obj.style = items;
        obj = { uri: icon };
        obj.source = obj;
        let tmp9Result = outer1_11(outer1_9, obj);
      } else {
        const obj1 = {};
        const items1 = [, ];
        ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
        obj1.style = items1;
        const obj2 = {};
        if (obj6.isThemeDark(outer1_10.theme)) {
          let tmp16Result = tmp16(tmp17[12]);
        } else {
          tmp16Result = tmp16(tmp17[13]);
        }
        obj2.source = tmp16Result;
        const items2 = [outer1_11(outer1_9, obj2), ];
        obj = { style: tmp.emptyGuildIconText, variant: "text-xs/bold", color: "text-default" };
        const intl = GuildIconUploader(outer1_2[15]).intl;
        obj6 = GuildIconUploader(outer1_2[11]);
        const tmp10 = outer1_8;
        const tmp11 = outer1_11;
        const tmp12 = outer1_9;
        const tmp9 = outer1_12;
        obj.children = intl.string(GuildIconUploader(outer1_2[15]).t["3UB9ad"]).toUpperCase();
        items2[1] = outer1_11(GuildIconUploader(outer1_2[14]).Text, obj);
        obj1.children = items2;
        tmp9Result = tmp9(tmp10, obj1);
        const str = intl.string(GuildIconUploader(outer1_2[15]).t["3UB9ad"]);
      }
      return tmp9Result;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "renderUpload",
    value() {
      const tmp = outer1_13(this.context);
      const props = this.props;
      const iconBackgroundColor = props.iconBackgroundColor;
      if (null != props.icon) {
        let obj = {};
        const items = [tmp.iconWrapperBorder, ];
        obj = { backgroundColor: iconBackgroundColor };
        items[1] = obj;
        obj.style = items;
        const obj1 = { style: tmp.filledIconWrapper };
        const obj2 = {};
        const items1 = [tmp.uploadIcon, ];
        const obj3 = { tintColor: iconBackgroundColor };
        items1[1] = obj3;
        obj2.style = items1;
        obj2.source = outer1_1(outer1_2[16]);
        obj1.children = outer1_11(outer1_9, obj2);
        obj.children = outer1_11(outer1_8, obj1);
      } else {
        obj = { style: tmp.emptyIconWrapper };
        const obj4 = { source: outer1_1(outer1_2[17]) };
        obj.children = outer1_11(outer1_9, obj4);
      }
      return outer1_11(outer1_8, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      let icon;
      let onPress;
      let style;
      const self = this;
      const tmp = outer1_13(this.context);
      ({ style, onPress, icon } = this.props);
      let obj = { accessibilityRole: "button" };
      if (null != icon) {
        const intl2 = GuildIconUploader(outer1_2[15]).intl;
        let stringResult = intl2.string(GuildIconUploader(outer1_2[15]).t.VATxfe);
      } else {
        const intl = GuildIconUploader(outer1_2[15]).intl;
        stringResult = intl.string(GuildIconUploader(outer1_2[15]).t["MsUY/S"]);
      }
      obj.accessibilityLabel = stringResult;
      obj.onPress = onPress;
      obj = { style: items };
      items = [tmp.container, style];
      obj = { style: tmp.guildIcon, children: self.renderIcon() };
      const items1 = [outer1_11(outer1_8, obj), self.renderUpload()];
      obj.children = items1;
      obj.children = outer1_12(outer1_8, obj);
      return outer1_11(GuildIconUploader(outer1_2[18]).PressableOpacity, obj);
    }
  };
  items[2] = obj;
  return callback(GuildIconUploader, items);
})(require("result").PureComponent);
tmp5.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default tmp5;
