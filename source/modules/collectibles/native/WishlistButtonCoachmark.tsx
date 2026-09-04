// Module ID: 15744
// Function ID: 15745
// Name: WishlistButtonCoachmark
// Dependencies: [32, 19, 1383, 8700, 1372, 7326, 15741, 1233, 11059, 2]
// Exports: default

// Module 15744 (WishlistButtonCoachmark)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default function WishlistButtonCoachmark(anchorRef) {
  let hasNeverWishlisted;
  dependencyMap = undefined;
  let callback;
  let registerDismiss;
  hasNeverWishlisted = hasNeverWishlisted(8700).useHasNeverWishlisted();
  let items = [hasNeverWishlisted];
  const memo = registerDismiss.useMemo(() => {
    if (hasNeverWishlisted) {
      const items = [hasNeverWishlisted(1372).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  let obj = hasNeverWishlisted(8700);
  const tmp3 = callback(hasNeverWishlisted(7326).useSelectedDismissibleContent(memo), 2);
  dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(1372).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  callback = tmp5;
  const obj2 = hasNeverWishlisted(7326);
  registerDismiss = hasNeverWishlisted(15741).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  let items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = registerDismiss.useEffect(() => {
    if (closure_2) {
      return registerDismiss(() => callback(closure_1_4.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = registerDismiss.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = hasNeverWishlisted(1233).intl;
    obj[0] = intl.string(hasNeverWishlisted(1233).t["47Rhc3"]);
    const intl2 = hasNeverWishlisted(1233).intl;
    obj[1] = intl2.string(hasNeverWishlisted(1233).t.PXjA0b);
    obj[3] = closure_2;
    obj[4] = function onDismiss() {
      return callback(closure_1_4.USER_DISMISS);
    };
    return obj;
  }, items2);
  const obj3 = hasNeverWishlisted(15741);
  const coachmark = hasNeverWishlisted(11059).useCoachmark(anchorRef.anchorRef, memo1);
  return null;
};
