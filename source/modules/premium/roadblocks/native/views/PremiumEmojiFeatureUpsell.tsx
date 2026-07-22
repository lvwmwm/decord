// Module ID: 9372
// Function ID: 73118
// Name: PremiumEmojiFeatureUpsell
// Dependencies: []
// Exports: default

// Module 9372 (PremiumEmojiFeatureUpsell)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = { bottom: arg0 + importDefault(dependencyMap[4]).space.PX_12 };
  obj.container = obj;
  return obj;
});
let closure_6 = { code: "function PremiumEmojiFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumEmojiFeatureUpsell.tsx");

export default function PremiumEmojiFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const arg1 = bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const importDefault = inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  const dependencyMap = shouldShow;
  const tmp = importDefault(dependencyMap[6])();
  arg1(dependencyMap[8]);
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
    obj = { shouldShow: tmp4, featureName: arg1(dependencyMap[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE };
    obj.children = jsx(importDefault(dependencyMap[9]), obj);
    tmp5 = <View {...obj} />;
    const tmp10 = importDefault(dependencyMap[9]);
  }
  return tmp5;
};
