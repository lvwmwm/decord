// Module ID: 13429
// Function ID: 13430
// Name: ActivateDeviceSuccess
// Dependencies: [19, 17, 21, 4836, 1115, 8517, 5899, 1397, 13428, 4832, 5281, 2]
// Exports: ActivateDeviceSuccess

// Module 13429 (ActivateDeviceSuccess)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import scopes2 from "scopes" /* 8517 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 13428 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = function ActivateDeviceSuccess(onComplete) {
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
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: intl3.string(intl5.t.qDtJmD) };
  const Text = Text_Text.Text;
  intl3 = intl5.intl;
  items1 = [React3(Text, obj4), ];
  let tmp18Result = null;
  const tmp15 = View;
  if (null != stringResult) {
    const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: stringResult };
    const Text2 = tmp19(4832).Text;
    tmp18Result = tmp18(Text2, obj5);
  }
  const obj6 = { children: items };
  items1[1] = tmp18Result;
  items[1] = hasOwnProperty(tmp15, obj3);
  const obj7 = { size: "lg", text: intl4.string(intl5.t.cpT0Cq), onPress: onComplete, grow: true };
  const Button = tmp19(5281).Button;
  intl4 = tmp19(1115).intl;
  items[2] = React3(Button, obj7);
  return hasOwnProperty(tmp8, obj6);
};
