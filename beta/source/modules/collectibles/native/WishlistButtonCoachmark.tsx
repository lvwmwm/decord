// Module ID: 15437
// Function ID: 15438
// Name: WishlistButtonCoachmark
// Dependencies: [32, 19, 2042, 8232, 2029, 6806, 15432, 1115, 10589, 2]
// Exports: default

// Module 15437 (WishlistButtonCoachmark)
import intl3 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default function WishlistButtonCoachmark(anchorRef) {
  let closure_1;
  let visible;
  let hasNeverWishlisted;
  _slicedToArray = undefined;
  let registerDismiss;
  anchorRef = anchorRef.anchorRef;
  let obj = hasNeverWishlisted(8232);
  hasNeverWishlisted = obj.useHasNeverWishlisted();
  let items = [hasNeverWishlisted];
  const memo = registerDismiss.useMemo(() => {
    let items1;
    const tmp = hasNeverWishlisted;
    if (tmp) {
      const items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  const obj2 = hasNeverWishlisted(6806);
  const tmp3 = _slicedToArray(obj2.useSelectedDismissibleContent(memo), 2);
  dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(2029).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  _slicedToArray = tmp5;
  const obj3 = hasNeverWishlisted(15432);
  registerDismiss = obj3.useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  let items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = registerDismiss.useEffect(() => {
    if (visible) {
      return registerDismiss(() => closure_1_1(constants.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = registerDismiss.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t["47Rhc3"]),
      description: intl2.string(intl3.t.PXjA0b),
      position: "top",
      visible,
      onDismiss() {
        return closure_1_1(constants.USER_DISMISS);
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items2);
  const obj4 = hasNeverWishlisted(10589);
  const coachmark = obj4.useCoachmark(anchorRef, memo1);
  return null;
};
