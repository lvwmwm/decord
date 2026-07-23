// Module ID: 11830
// Function ID: 91697
// Name: CollectiblesShopGiftBadgePostPurchaseModal
// Dependencies: [31, 27, 33, 4130, 689, 1557, 4337, 6773, 5484, 7572, 1212, 5119, 4126, 2294, 9806, 2]
// Exports: default

// Module 11830 (CollectiblesShopGiftBadgePostPurchaseModal)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((paddingTop) => {
  obj = { header: obj };
  obj = { position: "absolute", top: 0, left: 0, right: 0, height: paddingTop + 56, paddingTop, zIndex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  obj = { position: "absolute", left: 0, top: paddingTop, bottom: 0, paddingHorizontal: importDefault(689).space.PX_16, justifyContent: "center" };
  obj.closeButton = obj;
  obj.closeIcon = { tintColor: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY };
  return obj;
});
let result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftBadgePostPurchaseModal.tsx");

export default function CollectiblesShopGiftBadgePostPurchaseModal(currentProgress) {
  const tmp = callback3(importDefault(1557)().top);
  const callback = React.useCallback(() => {
    let arr = outer1_1(outer1_2[6]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = outer1_0(outer1_2[7]);
    obj = {};
    const items = [outer1_1(outer1_2[8]).GIFTING_BADGE_POST_PURCHASE];
    obj.analyticsLocations = items;
    obj.analyticsSource = outer1_1(outer1_2[8]).GIFTING_BADGE_POST_PURCHASE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  let obj = {};
  obj = { style: tmp.header };
  obj = { onPress: callback, accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.style = tmp.closeButton;
  obj.children = callback(require(5119) /* XSmallIcon */.XSmallIcon, { size: "md", style: tmp.closeIcon });
  let items = [callback(closure_4, obj), ];
  const obj2 = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(importDefault(2294).roVAey);
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  const items1 = [callback2(closure_5, obj), callback(importDefault(9806), { currentProgress: currentProgress.giftBadgeProgress, onSendGift: callback1 })];
  obj.children = items1;
  return callback2(require(7572) /* ModalScreen */.ModalScreen, obj);
};
