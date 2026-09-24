// Module ID: 10539
// Function ID: 10540
// Name: PremiumExpressionPickerFeatureUpsell
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 1616, 6893, 1098, 4529, 10258, 2]

// Module 10539 (PremiumExpressionPickerFeatureUpsell)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 6893 */;
import noop from "module_19" /* 19 */;

const PremiumFeatureUpsellDefault = tmp3(10258);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
const __initData = { code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const __initData2 = { code: "function PremiumExpressionPickerFeatureUpsellTsx2(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((bottomSheetIndex) => {
  const cResult = c.c(5);
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  ({ featureName, inPortalKeyboard } = bottomSheetIndex);
  const shouldShow = bottomSheetIndex.shouldShow;
  const tmp4 = useKeyboardIsOpenDefault();
  let tmp5 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom);
  const fn = function s() {
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
  const derivedValue = ReanimatedRexport.useDerivedValue(fn);
  if (cResult[0] === featureName) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === derivedValue) {
        if (cResult[3] === tmp5) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
    }
  }
  let tmp8 = null;
  if (!tmp4) {
    const obj3 = { style: tmp5.container, children: null };
    const obj4 = { shouldShow: derivedValue, featureName };
    obj3.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: derivedValue, featureName });
    tmp8 = <View style={tmp5.container}>{null}</View>;
  }
  cResult[0] = featureName;
  cResult[1] = tmp4;
  cResult[2] = derivedValue;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((bottomSheetIndex) => {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  const tmp3 = useKeyboardIsOpenDefault();
  ReanimatedRexport;
  const fn = function b() {
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
  fn.__workletHash = 12214341650956;
  fn.__initData = __initData2;
  let tmp7 = null;
  if (!tmp3) {
    const obj = { style: tmp4.container, children: null };
    const obj2 = { shouldShow: tmp6, featureName: bottomSheetIndex.featureName };
    obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp6, featureName: bottomSheetIndex.featureName });
    tmp7 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp7;
});
