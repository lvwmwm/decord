// Module ID: 14485
// Function ID: 110653
// Name: WishlistButtonCoachmark
// Dependencies: [57, 31, 1345, 8670, 1334, 5802, 14483, 1212, 8563, 2]
// Exports: default

// Module 14485 (WishlistButtonCoachmark)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
const result = require("ContentDismissActionType").fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default function WishlistButtonCoachmark(anchorRef) {
  hasNeverWishlisted = hasNeverWishlisted(8670).useHasNeverWishlisted();
  let items = [hasNeverWishlisted];
  const memo = registerDismiss.useMemo(() => {
    if (hasNeverWishlisted) {
      const items = [hasNeverWishlisted(tmp4[4]).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  let obj = hasNeverWishlisted(8670);
  const tmp3 = callback(hasNeverWishlisted(5802).useSelectedDismissibleContent(memo), 2);
  const dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(1334).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  callback = tmp5;
  const obj2 = hasNeverWishlisted(5802);
  registerDismiss = hasNeverWishlisted(14483).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  let items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = registerDismiss.useEffect(() => {
    if (_slicedToArray) {
      return registerDismiss(() => outer1_1(outer2_4.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = registerDismiss.useMemo(() => {
    const obj = {};
    const intl = hasNeverWishlisted(tmp4[7]).intl;
    obj.title = intl.string(hasNeverWishlisted(tmp4[7]).t["47Rhc3"]);
    const intl2 = hasNeverWishlisted(tmp4[7]).intl;
    obj.description = intl2.string(hasNeverWishlisted(tmp4[7]).t.PXjA0b);
    obj.position = "top";
    obj.visible = _slicedToArray;
    obj.onDismiss = function onDismiss() {
      return outer1_1(outer2_4.USER_DISMISS);
    };
    return obj;
  }, items2);
  const obj3 = hasNeverWishlisted(14483);
  const coachmark = hasNeverWishlisted(8563).useCoachmark(anchorRef.anchorRef, memo1);
  return null;
};
