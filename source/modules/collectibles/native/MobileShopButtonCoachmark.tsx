// Module ID: 15531
// Function ID: 119518
// Name: MobileShopButtonCoachmark
// Dependencies: [31, 27, 1345, 33, 4130, 689, 15520, 1212, 8608, 2]
// Exports: default

// Module 15531 (MobileShopButtonCoachmark)
import result from "result";
import { Image } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 80, width: 80, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.image = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ContentDismissActionType").fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default function MobileShopButtonCoachmark(marketing) {
  marketing = marketing.marketing;
  const navigateToShop = marketing.navigateToShop;
  const visible = marketing.visible;
  const onDismiss = marketing.onDismiss;
  const tmp = _createForOfIteratorHelperLoose();
  const ContentDismissActionType = tmp;
  const assetLight = marketing.assetLight;
  _createForOfIteratorHelperLoose = visible.useRef(false);
  const items = [onDismiss, navigateToShop];
  const callback = visible.useCallback(() => {
    closure_6.current = true;
    navigateToShop();
  }, items);
  const items1 = [onDismiss];
  const callback1 = visible.useCallback(() => {
    closure_6.current = true;
  }, items1);
  let closure_9 = visible.useRef(onDismiss);
  const effect = visible.useEffect(() => {
    closure_9.current = onDismiss;
  });
  const effect1 = visible.useEffect(() => () => {
    if (!outer1_6.current) {
      outer1_9.current(constants.AUTO_DISMISS);
    }
  }, []);
  const items2 = [, , , , , , , ];
  ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
  items2[3] = visible;
  items2[4] = assetLight;
  items2[5] = tmp.image;
  items2[6] = callback;
  items2[7] = callback1;
  const memo = visible.useMemo(() => {
    let obj = { title: marketing.title, description: marketing.body, visible };
    let str = "bottom";
    if (obj2.isYouNavFloating()) {
      str = "top";
    }
    obj.position = str;
    obj.renderImgComponent = function renderImgComponent() {
      obj = { style: outer1_4.image, source: obj };
      obj = { uri: outer1_5 };
      return assetLight(onDismiss, obj);
    };
    let buttonLabel = marketing.buttonLabel;
    if (null == buttonLabel) {
      const intl = marketing(navigateToShop[7]).intl;
      buttonLabel = intl.string(marketing(navigateToShop[7]).t.fYfGgK);
    }
    obj.buttonLabel = buttonLabel;
    obj.buttonVariant = "secondary";
    obj.onButtonPress = callback;
    obj.onDismiss = callback1;
    return obj;
  }, items2);
  const coachmark = marketing(navigateToShop[8]).useCoachmark(marketing.shopButtonRef, memo);
  return null;
};
