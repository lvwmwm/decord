// Module ID: 13455
// Function ID: 13456
// Name: GameOrganizationBenefitsCarousel
// Dependencies: [32, 19, 17, 21, 575, 5140, 7040, 6159, 5842, 5751, 1493, 13456, 10138, 1113, 1187, 2]
// Exports: default

// Module 13455 (GameOrganizationBenefitsCarousel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import Text_Text from "Text/Text" /* 5751 */;
import Card_Card from "Card/Card" /* 7040 */;
import GameOrganizationBenefits from "GameOrganizationBenefits" /* 13456 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp2;
let tmp6;
const FastImageDefault = tmp6(5842);
const CarouselDefault = tmp2(10138);
function BenefitCard(arg0) {
  let Stack;
  let img;
  let isLast;
  let items1;
  let obj2;
  let obj4;
  let text;
  let tmp2Result;
  let tmp5;
  let width;
  ({ img, isLast } = arg0);
  ({ text, width } = arg0);
  const tmp = closure_9();
  const items = [tmp.card, { width }, ];
  let cardSpacing = !isLast;
  const Card = Card_Card.Card;
  if (!isLast) {
    cardSpacing = tmp.cardSpacing;
  }
  items[2] = cardSpacing;
  const obj = { style: items, children: tmp5(Stack, obj2) };
  obj2 = { spacing: nativeDefault.space.PX_24, children: items1 };
  Stack = tmp3(6159).Stack;
  tmp5 = metroImportDefault;
  if (null != img) {
    const obj3 = { source: obj4, style: tmp.benefitImage, resizeMode: "cover", accessible: false };
    obj4 = { uri: img };
    tmp2Result = tmp2(FastImageDefault, obj3);
  } else {
    const obj5 = { style: tmp.benefitImage };
    tmp2Result = tmp2(View, obj5);
  }
  items1 = [tmp2Result, metroRequire(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: text })];
  return metroRequire(Card, obj);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { carouselContainer: { marginHorizontal: -PX_16 }, carousel: { alignItems: "stretch" }, carouselContent: { paddingHorizontal: PX_16 }, card: obj2, cardSpacing: { marginRight: PX_12 }, benefitImage: obj3, pagination: { paddingBottom: 0 } };
obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", aspectRatio: 1.7, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationBenefitsCarousel.tsx");

export default function GameOrganizationBenefitsCarousel() {
  let closure_1;
  let first;
  let obj3;
  let prop;
  let tmp2Result;
  let tmp5;
  const tmp = closure_9();
  let obj = react;
  let width = useWindowDimensionsDefault({ ignoreKeyboard: true }).width;
  [tmp5, require] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  [first, importDefault] = react.useState(0);
  const _Math = Math;
  const roundResult = round(0.75 * tmp5);
  dependencyMap = roundResult;
  const sum = roundResult + PX_12;
  _slicedToArray = sum;
  const items = [roundResult];
  const items1 = [sum];
  const callback = obj.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    if (Math.round(0.75 * width) !== dependencyMap) {
      closure_1(0);
    }
    require(width);
  }, items);
  const obj2 = { style: tmp.carouselContainer, onLayout: callback, children: closure_6(tmp2Result, obj3, roundResult) };
  const callback1 = obj.useCallback((nativeEvent) => {
    const bound = Math.max(Math.round(nativeEvent.nativeEvent.contentOffset.x / _slicedToArray), 0);
    closure_1(min(bound, GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1));
  }, items1);
  obj3 = {
    style: tmp.carousel,
    width: sum,
    pageIndictor: false,
    scrollViewProps: { contentContainerStyle: tmp.carouselContent, onScroll: callback1, scrollEventThrottle: 16, snapToInterval: sum, snapToAlignment: "start", decelerationRate: "fast" },
    children: prop.map((item, index) => {
      let img;
      let intl;
      let key;
      let message;
      const obj = { text: intl.string(message), img, width: dependencyMap, isLast: index === GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1 };
      ({ key, message, img } = item);
      intl = intl2.intl;
      return metroRequire(BenefitCard, obj, key);
    })
  };
  tmp2Result = CarouselDefault;
  prop = GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS;
  const children = [closure_6(View, obj2), ];
  let tmp14Result = null;
  const tmp12 = closure_7;
  const tmp13 = View;
  const tmp14 = closure_6;
  if (GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length > 1) {
    const obj4 = { containerStyle: tmp.pagination, numberOfItems: GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length, currentIndex: first };
    const CarouselPagination = tmp16(1187).CarouselPagination;
    tmp14Result = tmp14(CarouselPagination, obj4);
  }
  children[1] = tmp14Result;
  return tmp12(tmp13, { children });
};
