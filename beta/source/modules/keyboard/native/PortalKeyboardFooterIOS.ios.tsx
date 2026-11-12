// Module ID: 10120
// Function ID: 10121
// Name: PortalKeyboardFooterIOS
// Dependencies: [19, 21, 5170, 575, 1627, 5420, 1493, 1641, 5357, 1652, 1625, 1092, 5362, 2]
// Exports: default

// Module 10120 (PortalKeyboardFooterIOS)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import _mod1652 from "module_1652" /* 1652 */;
import useKeyboardType from "useKeyboardType" /* 5357 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5420 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let rect;
let tmp2;
const _modDef1652 = tmp2(1652);
const jsx = Fragment.jsx;
let obj = { keyboardStickyFooter: rect };
rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = { code: "(function PortalKeyboardFooterIOSIosTsx1(){let[interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT]=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};})" };
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default function PortalKeyboardFooterIOS(portalHostName) {
  let height;
  let progress;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp9;
  let str = portalHostName.portalHostName;
  const animatedSheetIndex = portalHostName.animatedSheetIndex;
  if (str === undefined) {
    str = "expression-footer";
  }
  let flag = portalHostName.followSystemKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = portalHostName.constrainToActionSheet;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let animatedStyle;
  let tmp = closure_5();
  let closure_1 = tmp;
  const tmp3 = dependencyMap;
  let tmp2 = importDefault;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp4 = require;
  let obj = Sheet_BottomSheet;
  const bottomSheetContainerStyle = obj.useBottomSheetContainerStyle(useWindowDimensionsDefault({ ignoreKeyboard: true }));
  let obj2 = KeyboardChatScrollView;
  const reanimatedKeyboardAnimation = obj2.useReanimatedKeyboardAnimation();
  ({ height, progress } = reanimatedKeyboardAnimation);
  let obj3 = useKeyboardType;
  const keyboardTypeSharedValue = obj3.useKeyboardTypeSharedValue();
  let items = [closure_6, , , , , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items[1] = _mod1652.interpolate;
  items[2] = progress;
  items[3] = bottom;
  items[4] = flag;
  items[5] = keyboardTypeSharedValue;
  items[6] = KeyboardTypes.KeyboardTypes;
  items[7] = animatedSheetIndex;
  items[8] = height;
  items[9] = ConstantsIOS.EXPRESSION_FOOTER_HEIGHT;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  class PortalKeyboardFooterIOSIosTsx1 {
    constructor() {
      let items;
      let items1;
      let items2;
      [0][1] = c2;
      const tmp = c0;
      const tmp2 = c2;
      const tmp4 = c3;
      if (tmp4) {
        let obj;
        if (_undefined3.get() >= 0) {
          const obj2 = { transform: items };
          items = [{ translateY: _undefined4.get() + tmp3 }];
          obj = obj2;
          const obj3 = { translateY: _undefined4.get() + tmp3 };
        }
        return obj;
      }
      obj = { transform: items2 };
      const obj4 = { translateY: tmp(_undefined3.get(), [-1, 0], items1, "clamp") };
      items1 = [c8 + tmp2, 0];
      items2 = [obj4];
    }
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  PortalKeyboardFooterIOSIosTsx1.__closure = items1;
  PortalKeyboardFooterIOSIosTsx1.__workletHash = 5822849225954;
  PortalKeyboardFooterIOSIosTsx1.__initData = tmp9;
  animatedStyle = useAnimatedStyle(PortalKeyboardFooterIOSIosTsx1);
  let items2 = [animatedStyle, tmp, flag2, bottomSheetContainerStyle];
  const memo = react.useMemo(() => {
    const items = [keyboardStickyFooter.keyboardStickyFooter, animatedStyle, flag2 && bottomSheetContainerStyle];
    return items;
  }, items2);
  const View = _modDef1652.View;
  return <View style={memo}>{null}</View>;
};
