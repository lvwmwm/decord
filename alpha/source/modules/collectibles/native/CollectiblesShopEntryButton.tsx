// Module ID: 14678
// Function ID: 14679
// Name: CollectiblesShopEntryButton
// Dependencies: [32, 19, 5679, 4855, 21, 7563, 4842, 14664, 12290, 1114, 14679, 563, 5680, 7735, 10500, 2]
// Exports: default

// Module 14678 (CollectiblesShopEntryButton)
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14664 */;
import MobileShopButtonCoachmarkDefault from "MobileShopButtonCoachmark" /* 14679 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 5679 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function CoachmarkVariant(shopButtonRef) {
  let closure_1;
  let closure_2;
  let intl;
  let items;
  let marketing;
  let navigateToShop;
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  const obj = navigateToShop(7563);
  let tmp = _slicedToArray(obj.useSelectedVersionedDismissibleContent(navigateToShop(4842).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(4842).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp3;
  const obj2 = { children: items };
  const obj3 = {
    ref: shopButtonRef,
    IconComponent: navigateToShop(12290).ShopIcon,
    accessibilityLabel: intl.string(navigateToShop(1114).t.pWG4ze),
    onPress() {
      const tmp = closure_2;
      if (tmp) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      navigateToShop();
    },
    showRedDot: tmp3
  };
  const tmp4 = YouScreenNavIconDefault;
  intl = navigateToShop(1114).intl;
  items = [closure_6(tmp4, obj3), closure_6(MobileShopButtonCoachmarkDefault, { marketing, shopButtonRef, navigateToShop, visible: tmp3, onDismiss: tmp2 })];
  return closure_8(closure_7, obj2);
}
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default function CollectiblesShopEntryButton(navigateToShop) {
  let marketingBySurface;
  let num;
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  let tmp = navigateToShop;
  let obj = navigateToShop(563);
  const items = [CollectiblesMarketingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => marketingBySurface.getMarketingBySurface(navigateToShop(dependencyMap[12]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let type;
  const tmp4 = null != stateFromStores && "dismissibleContent" in stateFromStores && stateFromStores.dismissibleContent === tmp(4842).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === tmp(7735).CollectiblesMarketingType.COACHMARK) {
    const obj2 = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    return closure_6(CoachmarkVariant, obj2);
  } else {
    let tmp15Result;
    function content(sendMessage) {
      let intl;
      const visibleContent = sendMessage.visibleContent;
      const markAsDismissed = sendMessage.markAsDismissed;
      const obj = {
        ref: markAsDismissed,
        IconComponent: navigateToShop(dependencyMap[8]).ShopIcon,
        accessibilityLabel: intl.string(navigateToShop(dependencyMap[9]).t.pWG4ze),
        onPress() {
          navigateToShop();
          if (null != visibleContent) {
            markAsDismissed(ContentDismissActionType.PRIMARY);
          }
        },
        showRedDot: null != visibleContent
      };
      const tmp = shopButtonRef(dependencyMap[7]);
      intl = navigateToShop(dependencyMap[9]).intl;
      return closure_1_6(tmp, obj);
    }
    if (tmp4) {
      let type1;
      const SelectedVersionedDismissibleContent = tmp(10500).SelectedVersionedDismissibleContent;
      if (stateFromStores != null) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === tmp(7735).CollectiblesMarketingType.BADGE) {
        prop = tmp(4842).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
      }
      const obj3 = { contentType: prop, latestVersion: num, children: content };
      num = undefined;
      if (stateFromStores != null) {
        num = stateFromStores.version;
      }
      if (num == null) {
        num = 0;
      }
      tmp15Result = tmp15(SelectedVersionedDismissibleContent, obj3);
    } else {
      let type2;
      const tmp7 = shopButtonRef(10500);
      if (stateFromStores != null) {
        type2 = stateFromStores.type;
      }
      if (type2 === tmp(7735).CollectiblesMarketingType.BADGE) {
        let items2;
        let dismissibleContent;
        if (stateFromStores != null) {
          dismissibleContent = stateFromStores.dismissibleContent;
        }
        if (null != dismissibleContent) {
          const items1 = [stateFromStores.dismissibleContent];
          items2 = items1;
        }
        const obj4 = { contentTypes: items2, children: content };
        tmp15Result = tmp15(tmp7, obj4);
      }
      items2 = [];
    }
    return tmp15Result;
  }
};
