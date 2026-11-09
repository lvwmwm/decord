// Module ID: 16022
// Function ID: 16023
// Name: ActivateDeviceSuccess
// Dependencies: [19, 17, 21, 5140, 1113, 9833, 5842, 1411, 16021, 5751, 5758, 2]
// Exports: ActivateDeviceSuccess

// Module 16022 (ActivateDeviceSuccess)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import scopes2 from "scopes" /* 9833 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 16021 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export function ActivateDeviceSuccess(onComplete) {
  let data;
  let intl3;
  let intl4;
  let items1;
  let obj2;
  let stringResult;
  let successImage;
  ({ data, successImage } = onComplete);
  onComplete = onComplete.onComplete;
  const tmp = closure_7();
  if (null != data.twoWayLinkCode) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((item) => {
      const obj = scopes2;
      return obj.isSocialLayerUmbrellaScope(item);
    })) {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t.vBPvK3);
    }
  }
  let tmp9 = null;
  const tmp8 = metroRequire;
  if (null != successImage) {
    let obj = { source: obj2.makeSource(successImage), style: tmp.image, resizeMode: "contain" };
    const tmp13 = FastImageDefault;
    obj2 = AvatarUtils;
    tmp9 = React3(tmp13, obj);
  }
  const items = [tmp9, , ];
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items1 };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: intl3.string(intl5.t.qDtJmD) };
  const Text = Text_Text.Text;
  intl3 = intl5.intl;
  items1 = [React3(Text, obj4), ];
  let tmp18Result = null;
  const tmp15 = View;
  if (null != stringResult) {
    const obj5 = { variant: "body-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: stringResult };
    const Text2 = tmp19(5751).Text;
    tmp18Result = tmp18(Text2, obj5);
  }
  const obj6 = { children: items };
  items1[1] = tmp18Result;
  items[1] = hasOwnProperty(tmp15, obj3);
  const obj7 = { size: "lg", text: intl4.string(intl5.t.cpT0Cq), onPress: onComplete, grow: true };
  const Button = tmp19(5758).Button;
  intl4 = tmp19(1113).intl;
  items[2] = React3(Button, obj7);
  return hasOwnProperty(tmp8, obj6);
}
