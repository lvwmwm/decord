// Module ID: 15349
// Function ID: 116916
// Name: MobileShopButtonCoachmark
// Dependencies: []
// Exports: default

// Module 15349 (MobileShopButtonCoachmark)
let closure_2 = importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_8, marginBottom: -importDefault(dependencyMap[5]).space.PX_16 };
obj.image = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default function MobileShopButtonCoachmark(marketing) {
  marketing = marketing.marketing;
  const arg1 = marketing;
  const navigateToShop = marketing.navigateToShop;
  const dependencyMap = navigateToShop;
  const visible = marketing.visible;
  const React = visible;
  const onDismiss = marketing.onDismiss;
  const Image = onDismiss;
  const tmp = callback();
  const ContentDismissActionType = tmp;
  const assetLight = marketing.assetLight;
  const jsx = assetLight;
  let callback = React.useRef(false);
  const items = [onDismiss, navigateToShop];
  callback = React.useCallback(() => {
    closure_6.current = true;
    navigateToShop();
  }, items);
  const items1 = [onDismiss];
  const callback1 = React.useCallback(() => {
    closure_6.current = true;
  }, items1);
  let closure_9 = React.useRef(onDismiss);
  const effect = React.useEffect(() => {
    closure_9.current = onDismiss;
  });
  const effect1 = React.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants.AUTO_DISMISS);
    }
  }, []);
  const items2 = [, , , , , , , ];
  ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
  items2[3] = visible;
  items2[4] = assetLight;
  items2[5] = tmp.image;
  items2[6] = callback;
  items2[7] = callback1;
  const memo = React.useMemo(() => {
    const obj = { title: marketing.title, description: marketing.body, visible };
    let str = "bottom";
    if (obj2.isYouNavFloating()) {
      str = "top";
    }
    obj.position = str;
    obj.renderImgComponent = function renderImgComponent() {
      let obj = { style: image.image, source: obj };
      obj = { uri: callback };
      return callback(closure_3, obj);
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
  const coachmark = arg1(dependencyMap[8]).useCoachmark(marketing.shopButtonRef, memo);
  return null;
};
