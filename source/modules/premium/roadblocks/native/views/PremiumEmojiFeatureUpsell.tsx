// Module ID: 9415
// Function ID: 73368
// Name: PremiumEmojiFeatureUpsell
// Dependencies: [31, 27, 33, 4130, 689, 1557, 5784, 668, 3991, 9416, 8038, 2]
// Exports: default

// Module 9415 (PremiumEmojiFeatureUpsell)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { position: "absolute", bottom: arg0 + importDefault(689).space.PX_12, left: 0, right: 0 };
  obj.container = obj;
  return obj;
});
let closure_6 = { code: "function PremiumEmojiFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const result = require("jsxProd").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumEmojiFeatureUpsell.tsx");

export default function PremiumEmojiFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  let tmp = inPortalKeyboard(shouldShow[6])();
  bottomSheetIndex(shouldShow[8]);
  const fn = function c() {
    const tmp = !shouldShow.get();
    if (tmp) {
      return !tmp;
    } else {
      const value = bottomSheetIndex.get();
      if (inPortalKeyboard) {
        let tmp5 = 1 === value;
      } else {
        tmp5 = 0 === value;
      }
    }
  };
  fn.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  fn.__workletHash = 10168295304319;
  fn.__initData = closure_6;
  let tmp5 = null;
  if (!tmp) {
    let obj = { style: tmp2.container };
    obj = { shouldShow: tmp4, featureName: bottomSheetIndex(shouldShow[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE };
    obj.children = jsx(inPortalKeyboard(shouldShow[9]), { shouldShow: tmp4, featureName: bottomSheetIndex(shouldShow[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE });
    tmp5 = <View shouldShow={tmp4} featureName={bottomSheetIndex(shouldShow[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE} />;
    const tmp10 = inPortalKeyboard(shouldShow[9]);
  }
  return tmp5;
};
