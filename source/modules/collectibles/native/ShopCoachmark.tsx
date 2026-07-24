// Module ID: 15524
// Function ID: 119475
// Name: CoachmarkImg
// Dependencies: [31, 1345, 33, 4130, 1273, 15520, 689, 1212, 8608, 2]
// Exports: default

// Module 15524 (CoachmarkImg)
import result from "result";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function CoachmarkImg(arg0) {
  let decorationAsset;
  let source;
  ({ source, decorationAsset } = arg0);
  const obj = { style: callback().image, source, avatarDecoration: { asset: decorationAsset }, size: require(1273) /* Button */.AvatarSizes.XXLARGE };
  return jsx(require(1273) /* Button */.Avatar, { style: callback().image, source, avatarDecoration: { asset: decorationAsset }, size: require(1273) /* Button */.AvatarSizes.XXLARGE });
}
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ image: { marginTop: 12 } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

export default function ShopCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const title = markAsDismissed.title;
  const description = markAsDismissed.description;
  const avatarSrc = markAsDismissed.avatarSrc;
  const decorationAsset = markAsDismissed.decorationAsset;
  const navigateToShop = markAsDismissed.navigateToShop;
  const renderImgComponent = markAsDismissed.renderImgComponent;
  const items = [avatarSrc, decorationAsset, description, renderImgComponent, markAsDismissed, title, visible, navigateToShop];
  const memo = description.useMemo(() => {
    const obj = {
      title,
      description,
      onDismiss() {
        outer1_0(avatarSrc.USER_DISMISS);
      },
      visible
    };
    let str = "bottom";
    if (obj2.isYouNavFloating()) {
      str = "top";
    }
    obj.position = str;
    obj2 = markAsDismissed(title[5]);
    let PX_12;
    if (obj3.isYouNavFloating()) {
      PX_12 = visible(title[6]).space.PX_12;
    }
    obj.offsetY = PX_12;
    obj.renderImgComponent = null != renderImgComponent ? renderImgComponent : (() => decorationAsset(renderImgComponent, { source: outer1_4, decorationAsset: outer1_5 }));
    const intl = markAsDismissed(title[7]).intl;
    obj.buttonLabel = intl.string(markAsDismissed(title[7]).t.fYfGgK);
    obj.buttonVariant = "primary";
    obj.onButtonPress = navigateToShop;
    return obj;
  }, items);
  const coachmark = markAsDismissed(title[8]).useCoachmark(markAsDismissed.buttonRef, memo);
  return null;
};
