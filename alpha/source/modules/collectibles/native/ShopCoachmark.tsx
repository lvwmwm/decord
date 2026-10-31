// Module ID: 18859
// Function ID: 18860
// Name: ShopCoachmark
// Dependencies: [19, 4860, 21, 5014, 1187, 575, 1113, 9954, 2]
// Exports: default

// Module 18859 (ShopCoachmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

function CoachmarkImg(arg0) {
  let decorationAsset;
  let source;
  ({ source, decorationAsset } = arg0);
  const Avatar = native.Avatar;
  return <Avatar style={closure_6().image} source={source} avatarDecoration={{ asset: decorationAsset }} size={native.AvatarSizes.XXLARGE} />;
}
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ image: { marginTop: 12 } });
const result = size.fileFinishedImporting("modules/collectibles/native/ShopCoachmark.tsx");

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
  const buttonRef = markAsDismissed.buttonRef;
  const memo = description.useMemo(() => {
    let fn;
    let intl;
    let source;
    let obj = {
      title,
      description,
      onDismiss() {
        markAsDismissed(avatarSrc.USER_DISMISS);
      },
      visible,
      position: "top",
      offsetY: nativeDefault.space.PX_12,
      renderImgComponent: fn,
      buttonLabel: intl.string(intl2.t.fYfGgK),
      buttonVariant: "primary",
      onButtonPress: navigateToShop
    };
    fn = renderImgComponent;
    if (renderImgComponent == null) {
      fn = () => {
        const obj = { source, decorationAsset };
        return decorationAsset(renderImgComponent, obj);
      };
    }
    intl = intl2.intl;
    return obj;
  }, items);
  let obj = markAsDismissed(title[7]);
  const coachmark = obj.useCoachmark(buttonRef, memo);
  return null;
};
