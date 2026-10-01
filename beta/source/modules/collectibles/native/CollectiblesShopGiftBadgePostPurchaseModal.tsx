// Module ID: 10493
// Function ID: 10494
// Name: CollectiblesShopGiftBadgePostPurchaseModal
// Dependencies: [19, 17, 21, 4836, 576, 1613, 5039, 6961, 6603, 7870, 1115, 5992, 4832, 2583, 10494, 2]
// Exports: default

// Module 10493 (CollectiblesShopGiftBadgePostPurchaseModal)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _modDef2583 from "module_2583" /* 2583 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import ModalScreen2 from "ModalScreen" /* 7870 */;
import GiftBadgePostPurchaseDefault from "GiftBadgePostPurchase" /* 10494 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((paddingTop) => {
  let rect;
  let rect1;
  const obj = { header: rect, closeButton: rect1, closeIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY } };
  rect = { position: "absolute", top: 0, left: 0, right: 0, height: paddingTop + 56, paddingTop, zIndex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  rect1 = { position: "absolute", left: 0, top: paddingTop, bottom: 0, paddingHorizontal: nativeDefault.space.PX_16, justifyContent: "center" };
  ({ tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY });
  return obj;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default function CollectiblesShopGiftBadgePostPurchaseModal(giftBadgeProgress) {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj4;
  giftBadgeProgress = giftBadgeProgress.giftBadgeProgress;
  const tmp = closure_8(useSafeAreaInsetsDefault().top);
  const callback = react.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    let items;
    const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE };
    const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
    items = [];
    CollectiblesActionCreators;
    items[0] = AnalyticsLocationDefault.GIFTING_BADGE_POST_PURCHASE;
    const result = openCollectiblesShopMobile(obj);
  }, []);
  let obj = { children: items1 };
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { onPress: callback, accessibilityRole: "button", accessibilityLabel: intl.string(intl3.t.cpT0Cq), style: tmp.closeButton, children: metroRequire(XSmallIcon.XSmallIcon, obj4) };
  const ModalScreen = ModalScreen2.ModalScreen;
  intl = intl3.intl;
  obj4 = { size: "md", style: tmp.closeIcon };
  items = [metroRequire(React3, obj3), ];
  const obj5 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl2.string(_modDef2583.roVAey) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = metroRequire(Text, obj5);
  items1 = [metroImportDefault(hasOwnProperty, obj2), metroRequire(GiftBadgePostPurchaseDefault, { currentProgress: giftBadgeProgress, onSendGift: callback1 })];
  return metroImportDefault(ModalScreen, obj);
};
