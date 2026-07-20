// Module ID: 10149
// Function ID: 78486
// Name: IconUploader
// Dependencies: []
// Exports: default

// Module 10149 (IconUploader)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
const UPLOAD_MEDIUM_SIZE = arg1(dependencyMap[3]).UPLOAD_MEDIUM_SIZE;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles({ uploadIcon: {}, avatar: {} });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("components_native/common/IconUploader.tsx");

export default function IconUploader(disabled) {
  let icon;
  let iconStyle;
  let name;
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
  ({ name, icon, onUpload: closure_0, iconStyle, onChangeIconPress: closure_1 } = disabled);
  let closure_2;
  function _handleChangeIcon(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleChangeIcon(tmp);
    const _handleChangeIcon = obj;
    return obj(...arguments);
  }
  const tmp = callback2();
  closure_2 = React.useRef(false);
  if (null == icon) {
    let fnResult = fn(icon);
  } else {
    let obj = /^data:/;
    fnResult = icon;
  }
  if ("guild" === str) {
    if (!tmp8) {
      obj = { style: iconStyle, icon: fnResult, value: name, size: arg1(closure_2[7]).GuildIconSizes.XLARGE, animate: true };
      let tmp7 = callback(importDefault(closure_2[7]), obj);
      const tmp12 = importDefault(closure_2[7]);
    }
    const tmp8 = null == icon && null == name;
  } else {
    let obj1 = arg1(closure_2[8]);
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
    const obj2 = { style: tmp.uploadIcon, source: importDefault(closure_2[9]) };
    tmp16 = callback(closure_6, obj2);
  }
  items1[1] = tmp16;
  obj1.children = items1;
  const tmp14Result = closure_10(closure_9, obj1);
  let tmp22 = tmp14Result;
  if (!flag) {
    const obj3 = { style: disabled.style };
    const obj4 = { accessibilityRole: "button" };
    const intl = arg1(closure_2[11]).intl;
    obj4.accessibilityLabel = intl.string(arg1(closure_2[11]).t.MsUY/S);
    obj4.onPress = function handleChangeIcon() {
      return _handleChangeIcon(...arguments);
    };
    obj4.children = tmp14Result;
    obj3.children = callback(arg1(closure_2[10]).PressableOpacity, obj4);
    tmp22 = callback(closure_5, obj3);
  }
  return tmp22;
};
