// Module ID: 14717
// Function ID: 14718
// Name: MobileShopButtonCoachmark
// Dependencies: [19, 4860, 21, 5014, 575, 5717, 1113, 9954, 2]
// Exports: default

// Module 14717 (MobileShopButtonCoachmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let size;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { image: size };
size = { height: 80, width: 80, marginTop: nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default function MobileShopButtonCoachmark(marketing) {
  marketing = marketing.marketing;
  const navigateToShop = marketing.navigateToShop;
  const visible = marketing.visible;
  const onDismiss = marketing.onDismiss;
  closure_6 = undefined;
  const shopButtonRef = marketing.shopButtonRef;
  const tmp = closure_6();
  let closure_4 = tmp;
  const assetLight = marketing.assetLight;
  closure_6 = onDismiss.useRef(false);
  const items = [onDismiss, navigateToShop];
  const onButtonPress = onDismiss.useCallback(() => {
    closure_6.current = true;
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    navigateToShop();
  }, items);
  const items1 = [onDismiss];
  const callback1 = onDismiss.useCallback(() => {
    closure_6.current = true;
    onDismiss(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let closure_9 = onDismiss.useRef(onDismiss);
  const effect = onDismiss.useEffect(() => {
    closure_9.current = onDismiss;
  });
  const effect1 = onDismiss.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      if (!ref.current) {
        ref2.current(constants.AUTO_DISMISS);
      }
    };
  }, []);
  const items2 = [, , , , , , , ];
  ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
  items2[3] = visible;
  items2[4] = assetLight;
  items2[5] = tmp.image;
  items2[6] = onButtonPress;
  items2[7] = callback1;
  const memo = onDismiss.useMemo(() => {
    let buttonLabel;
    let image;
    let uri;
    let obj = {
      title: marketing.title,
      description: marketing.body,
      visible,
      position: "top",
      renderImgComponent() {
        let obj2;
        const obj = { style: image.image, source: obj2 };
        obj2 = { uri };
        return assetLight(navigateToShop(visible[5]), obj);
      },
      buttonLabel,
      buttonVariant: "secondary",
      onButtonPress,
      onDismiss: callback1
    };
    buttonLabel = marketing.buttonLabel;
    if (buttonLabel == null) {
      const intl = intl2.intl;
      buttonLabel = intl.string(intl2.t.fYfGgK);
    }
    return obj;
  }, items2);
  let obj = marketing(visible[7]);
  const coachmark = obj.useCoachmark(shopButtonRef, memo);
  return null;
};
