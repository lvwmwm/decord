// Module ID: 11226
// Function ID: 11227
// Name: PremiumExpressionPickerFeatureUpsell
// Dependencies: [19, 17, 21, 5243, 575, 1627, 7577, 1092, 1652, 11227, 2]
// Exports: default

// Module 11226 (PremiumExpressionPickerFeatureUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7577 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let num, num2, tmp, tmp2, value;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let rect;
  const obj = { container: rect };
  rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  return obj;
});
let closure_6 = { code: "(function PremiumExpressionPickerFeatureUpsellTsx1(){let[shouldShow,inPortalKeyboard,bottomSheetIndex]=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;})" };
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx");

export default function PremiumExpressionPickerFeatureUpsell(arg0) {
  let analyticsLocation;
  let bottomSheetIndex;
  let featureName;
  let inPortalKeyboard;
  let shouldShow;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ bottomSheetIndex, featureName, analyticsLocation, inPortalKeyboard, shouldShow } = arg0);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = useKeyboardIsOpenDefault();
  const tmp4 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom);
  let tmp5 = _mod1652;
  const items = [closure_6, shouldShow, inPortalKeyboard, bottomSheetIndex];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class PremiumExpressionPickerFeatureUpsellTsx1 {
    constructor() {
      tmp = closure_0.get();
      if (tmp) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        value = closure_2.get();
        if (closure_1) {
          num2 = 1;
          tmp5 = 1 === value;
        } else {
          num = 0;
          tmp5 = 0 === value;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  const items1 = [tmp7, tmp8, tmp9];
  PremiumExpressionPickerFeatureUpsellTsx1.__closure = items1;
  PremiumExpressionPickerFeatureUpsellTsx1.__workletHash = 15896580392790;
  PremiumExpressionPickerFeatureUpsellTsx1.__initData = tmp6;
  let tmp11 = null;
  if (!tmp3) {
    tmp11 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp11;
};
