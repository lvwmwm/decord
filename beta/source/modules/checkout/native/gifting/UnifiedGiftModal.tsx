// Module ID: 10286
// Function ID: 10287
// Name: UnifiedGiftModal
// Dependencies: [32, 19, 21, 5039, 6421, 10287, 1115, 5936, 10288, 10319, 6583, 2]
// Exports: default

// Module 10286 (UnifiedGiftModal)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10287 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(analyticsLocations) {
  let Navigator;
  let lockedRecipientUser;
  let obj3;
  let onGiftModalDismiss;
  let renderProductDetails;
  let renderPurchaseSection;
  let skuId;
  let validateRecipient;
  ({ skuId, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  const tmp = validateRecipient(renderProductDetails.useState(lockedRecipientUser), 2);
  const first = tmp[0];
  let closure_7 = tmp[1];
  const items = [onGiftModalDismiss];
  const callback = renderProductDetails.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj = skuId(onGiftModalDismiss[4]);
  const items1 = [lockedRecipientUser, first, skuId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let intl;
    let intl2;
    let obj3;
    let obj5;
    let recipientUser;
    let setRecipientUser;
    let obj = {};
    const obj2 = {
      title: intl.string(intl3.t["JCFN/y"]),
      headerLeft: obj3.getHeaderCloseButton(callback),
      render() {
        const obj = { skuId, recipientUser, setRecipientUser, lockedRecipient: null != closure_1_1, validateRecipient, renderProductDetails, renderPurchaseSection };
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[8]), obj);
      }
    };
    const GIFT_DETAIL = UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL;
    intl = intl3.intl;
    obj[GIFT_DETAIL] = obj2;
    obj3 = NavigatorHeader;
    const obj4 = {
      title: intl2.string(intl3.t.R0vK0N),
      headerLeft: obj5.getHeaderBackButton(),
      render() {
        const obj = { setRecipientUser };
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[9]), obj);
      }
    };
    const RECIPENT_SELECT = UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT;
    intl2 = intl3.intl;
    obj[RECIPENT_SELECT] = obj4;
    obj5 = NavigatorHeader;
    return obj;
  }, items1);
  let obj2 = { value: analyticsLocations, children: renderPurchaseSection(Navigator, obj3) };
  const AnalyticsLocationProvider = skuId(onGiftModalDismiss[10]).AnalyticsLocationProvider;
  obj3 = { initialRouteName: skuId(onGiftModalDismiss[5]).UnifiedGiftModalScreens.GIFT_DETAIL, screens: navigatorScreens };
  Navigator = skuId(onGiftModalDismiss[4]).Navigator;
  return renderPurchaseSection(AnalyticsLocationProvider, obj2);
};
