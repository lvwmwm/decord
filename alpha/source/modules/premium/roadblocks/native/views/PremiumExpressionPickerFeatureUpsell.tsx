// Module ID: 9981
// Function ID: 9982
// Name: PremiumExpressionPickerFeatureUpsell
// Dependencies: [19, 17, 21, 4845, 576, 1613, 6229, 1094, 4595, 9615, 2]
// Exports: default

// Module 9981 (PremiumExpressionPickerFeatureUpsell)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4595 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 6229 */;
import noop from "module_19" /* 19 */;

const PremiumFeatureUpsellDefault = tmp(9615);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4845);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
const __initData = { code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx");

export default function PremiumExpressionPickerFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  ({ featureName, analyticsLocation } = bottomSheetIndex);
  const tmp3 = useKeyboardIsOpenDefault();
  ReanimatedRexport;
  const fn = function _() {
    const value1 = shouldShow.get();
    if (!value1) {
      return value1;
    } else {
      value = bottomSheetIndex.get();
      if (inPortalKeyboard) {
        let tmp5 = 1 === value;
      } else {
        tmp5 = 0 === value;
      }
    }
  };
  fn.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  fn.__workletHash = 15061973364879;
  fn.__initData = __initData;
  let tmp7 = null;
  if (!tmp3) {
    const obj = { style: tmp4.container, children: null };
    const obj2 = { shouldShow: tmp6, featureName, analyticsLocation };
    obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp6, featureName, analyticsLocation });
    tmp7 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp7;
};
