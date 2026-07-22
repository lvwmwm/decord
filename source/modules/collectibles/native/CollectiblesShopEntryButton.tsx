// Module ID: 15366
// Function ID: 117015
// Name: CoachmarkVariant
// Dependencies: []
// Exports: default

// Module 15366 (CoachmarkVariant)
function CoachmarkVariant(shopButtonRef) {
  let marketing;
  let navigateToShop;
  ({ marketing, navigateToShop } = shopButtonRef);
  const arg1 = navigateToShop;
  shopButtonRef = shopButtonRef.shopButtonRef;
  let obj = arg1(dependencyMap[5]);
  const tmp = callback(obj.useSelectedVersionedDismissibleContent(arg1(dependencyMap[6]).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  const importDefault = tmp2;
  const tmp3 = tmp[0] === arg1(dependencyMap[6]).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  const dependencyMap = tmp3;
  obj = {};
  obj = { ref: shopButtonRef, IconComponent: arg1(dependencyMap[8]).ShopIcon };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.pWG4ze);
  obj.onPress = function onPress() {
    if (tmp3) {
      const tmp3 = constants(constants.TAKE_ACTION);
    }
    navigateToShop();
  };
  obj.showRedDot = tmp3;
  const items = [callback2(importDefault(dependencyMap[7]), obj), callback2(importDefault(dependencyMap[10]), { marketing, shopButtonRef, navigateToShop, visible: tmp3, onDismiss: tmp[1] })];
  obj.children = items;
  return callback3(closure_7, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default function CollectiblesShopEntryButton(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const arg1 = navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  const importDefault = shopButtonRef;
  function content(visibleContent) {
    visibleContent = visibleContent.visibleContent;
    const navigateToShop = visibleContent;
    const shopButtonRef = visibleContent.markAsDismissed;
    const obj = { ref: shopButtonRef, IconComponent: navigateToShop(closure_2[8]).ShopIcon };
    const intl = navigateToShop(closure_2[9]).intl;
    obj.accessibilityLabel = intl.string(navigateToShop(closure_2[9]).t.pWG4ze);
    obj.onPress = function onPress() {
      visibleContent();
      if (null != visibleContent) {
        markAsDismissed(constants.PRIMARY);
      }
    };
    obj.showRedDot = null != visibleContent;
    return callback(shopButtonRef(closure_2[7]), obj);
  }
  let obj = arg1(dependencyMap[11]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => marketingBySurface.getMarketingBySurface(navigateToShop(closure_2[12]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = "dismissibleContent" in stateFromStores;
  }
  if (tmp2) {
    tmp2 = stateFromStores.dismissibleContent === arg1(dependencyMap[6]).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  if (type === arg1(dependencyMap[13]).CollectiblesMarketingType.COACHMARK) {
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
      if (type1 === arg1(dependencyMap[13]).CollectiblesMarketingType.BADGE) {
        prop = arg1(dependencyMap[6]).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
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
      let tmp25Result = tmp25(arg1(dependencyMap[14]).SelectedVersionedDismissibleContent, obj);
    } else {
      const obj1 = {};
      let type2;
      if (null != stateFromStores) {
        type2 = stateFromStores.type;
      }
      if (type2 === arg1(dependencyMap[13]).CollectiblesMarketingType.BADGE) {
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
      const tmp8 = importDefault(dependencyMap[14]);
    }
    return tmp25Result;
  }
};
