// Module ID: 12037
// Function ID: 92990
// Name: CoachmarkImage
// Dependencies: []
// Exports: default

// Module 12037 (CoachmarkImage)
function CoachmarkImage() {
  const tmp = callback();
  let obj = { style: tmp.imageContainer };
  obj = {};
  obj = { uri: importDefault(dependencyMap[5]) };
  obj.source = obj;
  obj.style = tmp.image;
  obj.children = <closure_5 {...obj} />;
  return <closure_4 {...obj} />;
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ imageContainer: {}, image: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_profile/native/WishlistViewerCoachmark.tsx");

export default function WishlistViewerCoachmark(isVisible) {
  isVisible = isVisible.isVisible;
  const arg1 = isVisible;
  const markAsDismissed = isVisible.markAsDismissed;
  const importDefault = markAsDismissed;
  const onViewWishlist = isVisible.onViewWishlist;
  const dependencyMap = onViewWishlist;
  const items = [onViewWishlist];
  const callback = React.useCallback(() => {
    onViewWishlist();
  }, items);
  const React = callback;
  const items1 = [isVisible, markAsDismissed, callback];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = isVisible(onViewWishlist[6]).intl;
    obj.title = intl.string(isVisible(onViewWishlist[6]).t.+b6iUl);
    const intl2 = isVisible(onViewWishlist[6]).intl;
    obj.description = intl2.string(isVisible(onViewWishlist[6]).t.Howsng);
    obj.position = "bottom";
    obj.visible = isVisible;
    obj.onDismiss = function onDismiss() {
      return callback(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return callback2(closure_9, {});
    };
    const intl3 = isVisible(onViewWishlist[6]).intl;
    obj.buttonLabel = intl3.string(isVisible(onViewWishlist[6]).t.TxBQzD);
    obj.buttonVariant = "primary";
    obj.onButtonPress = callback;
    return obj;
  }, items1);
  const coachmark = arg1(dependencyMap[7]).useCoachmark(isVisible.anchorRef, memo);
  return null;
};
