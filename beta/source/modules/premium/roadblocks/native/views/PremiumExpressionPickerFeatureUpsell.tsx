// Module ID: 10044
// Function ID: 10045
// Name: PremiumExpressionPickerFeatureUpsell
// Dependencies: [19, 17, 21, 5014, 575, 1625, 7101, 1092, 5095, 10045, 2]
// Exports: default

// Module 10044 (PremiumExpressionPickerFeatureUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7101 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let rect;
  const obj = { container: rect };
  rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  return obj;
});
const __initData = { code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx");

export default function PremiumExpressionPickerFeatureUpsell(bottomSheetIndex) {
  let analyticsLocation;
  let featureName;
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  ({ featureName, analyticsLocation } = bottomSheetIndex);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = useKeyboardIsOpenDefault();
  const tmp4 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom);
  let tmp5 = ReanimatedRexport;
  const fn = function _() {
    let value1 = shouldShow.get();
    if (value1) {
      let tmp5;
      const value = bottomSheetIndex.get();
      if (inPortalKeyboard) {
        tmp5 = 1 === value;
      } else {
        tmp5 = 0 === value;
      }
      value1 = tmp5;
    }
    return value1;
  };
  fn.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  fn.__workletHash = 15061973364879;
  fn.__initData = __initData;
  let tmp7 = null;
  if (!tmp3) {
    tmp7 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp7;
};
