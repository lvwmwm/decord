// Module ID: 11820
// Function ID: 91648
// Name: CollectiblesShopGiftBadgePostPurchaseModal
// Dependencies: []
// Exports: default

// Module 11820 (CollectiblesShopGiftBadgePostPurchaseModal)
let closure_3 = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles((paddingTop) => {
  let obj = { header: obj };
  obj = { height: paddingTop + 56, paddingTop };
  obj = { top: paddingTop, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
  obj.closeButton = obj;
  obj.closeIcon = { tintColor: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default function CollectiblesShopGiftBadgePostPurchaseModal(currentProgress) {
  const tmp = callback3(importDefault(dependencyMap[5])().top);
  const callback = React.useCallback(() => {
    let arr = callback2(closure_2[6]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = callback(closure_2[7]);
    obj = {};
    const items = [callback2(closure_2[8]).GIFTING_BADGE_POST_PURCHASE];
    obj.analyticsLocations = items;
    obj.analyticsSource = callback2(closure_2[8]).GIFTING_BADGE_POST_PURCHASE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  let obj = {};
  obj = { style: tmp.header };
  obj = { onPress: callback, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.cpT0Cq);
  obj.style = tmp.closeButton;
  obj.children = callback(arg1(dependencyMap[11]).XSmallIcon, { size: "md", style: tmp.closeIcon });
  const items = [callback(closure_4, obj), ];
  const obj2 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj2.children = intl2.string(importDefault(dependencyMap[13]).roVAey);
  items[1] = callback(arg1(dependencyMap[12]).Text, obj2);
  obj.children = items;
  const items1 = [callback2(closure_5, obj), callback(importDefault(dependencyMap[14]), { currentProgress: currentProgress.giftBadgeProgress, onSendGift: callback1 })];
  obj.children = items1;
  return callback2(arg1(dependencyMap[9]).ModalScreen, obj);
};
