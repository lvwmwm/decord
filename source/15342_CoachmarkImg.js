// Module ID: 15342
// Function ID: 116873
// Name: CoachmarkImg
// Dependencies: []
// Exports: default

// Module 15342 (CoachmarkImg)
function CoachmarkImg(arg0) {
  let decorationAsset;
  let source;
  ({ source, decorationAsset } = arg0);
  const obj = { style: callback().image, source, avatarDecoration: { asset: decorationAsset }, size: arg1(dependencyMap[4]).AvatarSizes.XXLARGE };
  return jsx(arg1(dependencyMap[4]).Avatar, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const ContentDismissActionType = arg1(dependencyMap[1]).ContentDismissActionType;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ image: { marginTop: 12 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

export default function ShopCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const visible = markAsDismissed.visible;
  const importDefault = visible;
  const title = markAsDismissed.title;
  const dependencyMap = title;
  const description = markAsDismissed.description;
  const React = description;
  const avatarSrc = markAsDismissed.avatarSrc;
  const ContentDismissActionType = avatarSrc;
  const decorationAsset = markAsDismissed.decorationAsset;
  const jsx = decorationAsset;
  const navigateToShop = markAsDismissed.navigateToShop;
  let closure_6 = navigateToShop;
  const renderImgComponent = markAsDismissed.renderImgComponent;
  const CoachmarkImg = renderImgComponent;
  const items = [avatarSrc, decorationAsset, description, renderImgComponent, markAsDismissed, title, visible, navigateToShop];
  const memo = React.useMemo(() => {
    const obj = {
      title,
      description,
      onDismiss() {
        callback(constants.USER_DISMISS);
      },
      visible
    };
    let str = "bottom";
    if (obj2.isYouNavFloating()) {
      str = "top";
    }
    obj.position = str;
    const obj2 = markAsDismissed(title[5]);
    let PX_12;
    if (obj3.isYouNavFloating()) {
      PX_12 = visible(title[6]).space.PX_12;
    }
    obj.offsetY = PX_12;
    obj.renderImgComponent = null != renderImgComponent ? renderImgComponent : () => callback2(closure_7, { source: closure_4, decorationAsset: callback2 });
    const intl = markAsDismissed(title[7]).intl;
    obj.buttonLabel = intl.string(markAsDismissed(title[7]).t.fYfGgK);
    obj.buttonVariant = "primary";
    obj.onButtonPress = navigateToShop;
    return obj;
  }, items);
  const coachmark = arg1(dependencyMap[8]).useCoachmark(markAsDismissed.buttonRef, memo);
  return null;
};
