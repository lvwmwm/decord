// Module ID: 17803
// Function ID: 17804
// Name: WishlistButtonCoachmark
// Dependencies: [32, 19, 4855, 9442, 4842, 7563, 17790, 1114, 9933, 2]
// Exports: default

// Module 17803 (WishlistButtonCoachmark)
import intl3 from "intl" /* 1114 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
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
  let obj = hasNeverWishlisted(9442);
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
  const obj2 = hasNeverWishlisted(7563);
  const tmp3 = _slicedToArray(obj2.useSelectedDismissibleContent(memo), 2);
  dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(4842).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  _slicedToArray = tmp5;
  const obj3 = hasNeverWishlisted(17790);
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
  const obj4 = hasNeverWishlisted(9933);
  const coachmark = obj4.useCoachmark(anchorRef, memo1);
  return null;
};
