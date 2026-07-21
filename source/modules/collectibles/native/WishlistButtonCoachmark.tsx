// Module ID: 14363
// Function ID: 108457
// Name: WishlistButtonCoachmark
// Dependencies: []
// Exports: default

// Module 14363 (WishlistButtonCoachmark)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default function WishlistButtonCoachmark(anchorRef) {
  const hasNeverWishlisted = arg1(dependencyMap[3]).useHasNeverWishlisted();
  const arg1 = hasNeverWishlisted;
  const items = [hasNeverWishlisted];
  const memo = React.useMemo(() => {
    if (hasNeverWishlisted) {
      const items = [hasNeverWishlisted(tmp4[4]).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  const obj = arg1(dependencyMap[3]);
  const tmp3 = callback(arg1(dependencyMap[5]).useSelectedDismissibleContent(memo), 2);
  const dependencyMap = tmp4;
  const tmp5 = tmp3[0] === arg1(dependencyMap[4]).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  const callback = tmp5;
  const obj2 = arg1(dependencyMap[5]);
  const registerDismiss = arg1(dependencyMap[6]).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  const React = registerDismiss;
  const items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = React.useEffect(() => {
    if (tmp5) {
      return registerDismiss(() => callback(constants.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = React.useMemo(() => {
    const obj = {};
    const intl = hasNeverWishlisted(tmp4[7]).intl;
    obj.title = intl.string(hasNeverWishlisted(tmp4[7]).t.47Rhc3);
    const intl2 = hasNeverWishlisted(tmp4[7]).intl;
    obj.description = intl2.string(hasNeverWishlisted(tmp4[7]).t.PXjA0b);
    obj.position = "top";
    obj.visible = tmp5;
    obj.onDismiss = function onDismiss() {
      return callback(constants.USER_DISMISS);
    };
    return obj;
  }, items2);
  const obj3 = arg1(dependencyMap[6]);
  const coachmark = arg1(dependencyMap[8]).useCoachmark(anchorRef.anchorRef, memo1);
  return null;
};
