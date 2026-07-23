// Module ID: 10164
// Function ID: 78568
// Name: IconUploader
// Dependencies: [5, 31, 27, 653, 33, 4130, 4674, 5515, 1392, 10165, 4660, 1212, 2]
// Exports: default

// Module 10164 (IconUploader)
import closure_3 from "_createForOfIteratorHelperLoose";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/IconUploader.tsx");

export default function IconUploader(disabled) {
  let icon;
  let iconStyle;
  let importDefault;
  let name;
  let require;
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let fn = disabled.makeURL;
  if (fn === undefined) {
    fn = function u(icon) {

    };
  }
  let str = disabled.type;
  if (str === undefined) {
    str = "avatar";
  }
  ({ name, icon, onUpload: require, iconStyle, onChangeIconPress: importDefault } = disabled);
  let dependencyMap;
  function _handleChangeIcon(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleChangeIcon(tmp);
    return obj(...arguments);
  }
  const tmp = callback2();
  dependencyMap = React.useRef(false);
  if (null == icon) {
    let fnResult = fn(icon);
  } else {
    let obj = /^data:/;
    fnResult = icon;
  }
  if ("guild" === str) {
    if (!tmp8) {
      obj = { style: iconStyle, icon: fnResult, value: name, size: require(5515) /* makeSizeStyle */.GuildIconSizes.XLARGE, animate: true };
      let tmp7 = callback(importDefault(5515), obj);
      const tmp12 = importDefault(5515);
    }
    tmp8 = null == icon && null == name;
  } else {
    let obj1 = require(1392) /* getAvatarURL */;
    obj = {};
    const items = [tmp.avatar, iconStyle];
    obj.style = items;
    obj.source = obj1.makeSource(fnResult);
    tmp7 = callback(closure_6, obj);
  }
  obj1 = {};
  const items1 = [tmp7, ];
  let tmp16 = null;
  if (!flag) {
    const obj2 = { style: tmp.uploadIcon, source: importDefault(10165) };
    tmp16 = callback(closure_6, obj2);
  }
  items1[1] = tmp16;
  obj1.children = items1;
  const tmp14Result = closure_10(closure_9, obj1);
  let tmp22 = tmp14Result;
  if (!flag) {
    const obj3 = { style: disabled.style };
    const obj4 = { accessibilityRole: "button" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["MsUY/S"]);
    obj4.onPress = function handleChangeIcon() {
      return _handleChangeIcon(...arguments);
    };
    obj4.children = tmp14Result;
    obj3.children = callback(require(4660) /* PressableBase */.PressableOpacity, obj4);
    tmp22 = callback(closure_5, obj3);
  }
  return tmp22;
};
