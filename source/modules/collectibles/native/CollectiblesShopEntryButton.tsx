// Module ID: 15530
// Function ID: 119511
// Name: CoachmarkVariant
// Dependencies: [57, 31, 6819, 1345, 33, 5802, 1334, 15529, 11290, 1212, 15531, 624, 13045, 6798, 9678, 2]
// Exports: default

// Module 15530 (CoachmarkVariant)
import _slicedToArray from "_slicedToArray";
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function CoachmarkVariant(shopButtonRef) {
  let marketing;
  let navigateToShop;
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  let obj = navigateToShop(5802);
  const tmp = callback(obj.useSelectedVersionedDismissibleContent(navigateToShop(1334).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  const importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(1334).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  const dependencyMap = tmp3;
  obj = {};
  obj = { ref: shopButtonRef, IconComponent: navigateToShop(11290).ShopIcon };
  const intl = navigateToShop(1212).intl;
  obj.accessibilityLabel = intl.string(navigateToShop(1212).t.pWG4ze);
  obj.onPress = function onPress() {
    if (closure_2) {
      outer1_5(outer1_5.TAKE_ACTION);
    }
    navigateToShop();
  };
  obj.showRedDot = tmp3;
  const items = [callback2(importDefault(15529), obj), callback2(importDefault(15531), { marketing, shopButtonRef, navigateToShop, visible: tmp3, onDismiss: tmp[1] })];
  obj.children = items;
  return callback3(closure_7, obj);
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default function CollectiblesShopEntryButton(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  function content(visibleContent) {
    visibleContent = visibleContent.visibleContent;
    const markAsDismissed = visibleContent.markAsDismissed;
    const obj = { ref: markAsDismissed, IconComponent: navigateToShop(outer1_2[8]).ShopIcon };
    const intl = navigateToShop(outer1_2[9]).intl;
    obj.accessibilityLabel = intl.string(navigateToShop(outer1_2[9]).t.pWG4ze);
    obj.onPress = function onPress() {
      visibleContent();
      if (null != visibleContent) {
        markAsDismissed(outer2_5.PRIMARY);
      }
    };
    obj.showRedDot = null != visibleContent;
    return outer1_6(shopButtonRef(outer1_2[7]), obj);
  }
  let obj = navigateToShop(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getMarketingBySurface(navigateToShop(outer1_2[12]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = "dismissibleContent" in stateFromStores;
  }
  if (tmp2) {
    tmp2 = stateFromStores.dismissibleContent === navigateToShop(1334).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  if (type === navigateToShop(6798).CollectiblesMarketingType.COACHMARK) {
    obj = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    return callback2(CoachmarkVariant, obj);
  } else {
    if (tmp2) {
      obj = {};
      let type1;
      if (null != stateFromStores) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === navigateToShop(6798).CollectiblesMarketingType.BADGE) {
        prop = navigateToShop(1334).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
      }
      obj.contentType = prop;
      let version;
      if (null != stateFromStores) {
        version = stateFromStores.version;
      }
      let num5 = 0;
      if (null != version) {
        num5 = version;
      }
      obj.latestVersion = num5;
      obj.children = content;
      let tmp25Result = tmp25(navigateToShop(9678).SelectedVersionedDismissibleContent, obj);
    } else {
      const obj1 = {};
      let type2;
      if (null != stateFromStores) {
        type2 = stateFromStores.type;
      }
      if (type2 === navigateToShop(6798).CollectiblesMarketingType.BADGE) {
        let dismissibleContent;
        if (null != stateFromStores) {
          dismissibleContent = stateFromStores.dismissibleContent;
        }
        if (null != dismissibleContent) {
          const items1 = [stateFromStores.dismissibleContent];
          let items2 = items1;
        }
        obj1.contentTypes = items2;
        obj1.children = content;
        tmp25Result = tmp25(tmp8, obj1);
      }
      items2 = [];
      tmp8 = shopButtonRef(9678);
    }
    return tmp25Result;
  }
};
