// Module ID: 13161
// Function ID: 13162
// Name: GameOrganizationBenefitsCarousel
// Dependencies: [32, 19, 17, 21, 575, 2405, 5009, 6971, 6022, 5712, 5619, 1492, 9995, 1114, 1188, 2]
// Exports: default

// Module 13161 (GameOrganizationBenefitsCarousel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import _modDef2405 from "module_2405" /* 2405 */;
import Text_Text from "Text/Text" /* 5619 */;
import Card_Card from "Card/Card" /* 6971 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj4;
let obj5;
let tmp2;
let tmp6;
const FastImageDefault = tmp6(5712);
const CarouselDefault = tmp2(9995);
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
  const tmp = closure_10();
  items = [tmp.card, { width }, ];
  let cardSpacing = !isLast;
  const Card = Card_Card.Card;
  if (!isLast) {
    cardSpacing = tmp.cardSpacing;
  }
  items[2] = cardSpacing;
  const obj = { style: items, children: tmp5(Stack, obj2) };
  obj2 = { spacing: nativeDefault.space.PX_24, children: items1 };
  Stack = tmp3(6022).Stack;
  tmp5 = metroImportDefault;
  if (null != img) {
    const obj3 = { source: obj4, style: tmp.benefitImage, resizeMode: "cover", accessible: false };
    obj4 = { uri: img };
    tmp2Result = tmp2(FastImageDefault, obj3);
  } else {
    const obj5 = { style: tmp.benefitImage };
    tmp2Result = tmp2(View, obj5);
  }
  items1 = [tmp2Result, metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: text })];
  return metroRequire(Card, obj);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
let obj = { message: _modDef2405.WUVzdk };
let items = [obj, ];
let obj2 = { message: _modDef2405.MEQJ1m };
items[1] = obj2;
let createStyles = createStyles_mod;
let obj3 = { carouselContainer: { marginHorizontal: -PX_16 }, carousel: { alignItems: "stretch" }, carouselContent: { paddingHorizontal: PX_16 }, card: obj4, cardSpacing: { marginRight: PX_12 }, benefitImage: obj5, pagination: { paddingBottom: 0 } };
obj4 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj5 = { width: "100%", aspectRatio: 1.7, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles(obj3);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationBenefitsCarousel.tsx");

export default function GameOrganizationBenefitsCarousel() {
  let closure_1;
  let first;
  let obj3;
  let tmp2Result;
  let tmp5;
  const tmp = closure_10();
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
  items = [roundResult];
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
    closure_1(Math.min(Math.max(Math.round(nativeEvent.nativeEvent.contentOffset.x / _slicedToArray), 0), items.length - 1));
  }, items1);
  obj3 = {
    style: tmp.carousel,
    width: sum,
    pageIndictor: false,
    scrollViewProps: { contentContainerStyle: tmp.carouselContent, onScroll: callback1, scrollEventThrottle: 16, snapToInterval: sum, snapToAlignment: "start", decelerationRate: "fast" },
    children: items.map((item, index) => {
      let img;
      let intl;
      let message;
      const obj = { text: intl.string(message), img, width: dependencyMap, isLast: index === items.length - 1 };
      ({ message, img } = item);
      intl = intl2.intl;
      return metroRequire(BenefitCard, obj, index);
    })
  };
  tmp2Result = CarouselDefault;
  const children = [closure_6(View, obj2), ];
  let tmp14Result = null;
  const arr3 = items;
  const tmp12 = closure_7;
  const tmp13 = View;
  const tmp14 = closure_6;
  if (items.length > 1) {
    const obj4 = { containerStyle: tmp.pagination, numberOfItems: arr3.length, currentIndex: first };
    tmp14Result = tmp14(native.CarouselPagination, obj4);
  }
  children[1] = tmp14Result;
  return tmp12(tmp13, { children });
};
