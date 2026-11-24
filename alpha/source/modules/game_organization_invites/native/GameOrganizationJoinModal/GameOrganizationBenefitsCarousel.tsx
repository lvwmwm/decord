// Module ID: 12201
// Function ID: 12202
// Name: GameOrganizationBenefitsCarousel
// Dependencies: [32, 19, 17, 21, 575, 4917, 6019, 5989, 5508, 9553, 12202, 1112, 12203, 1186, 1494, 2]
// Exports: default

// Module 12201 (GameOrganizationBenefitsCarousel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import Text_Text from "Text/Text" /* 5508 */;
import Card_Card from "Card/Card" /* 6019 */;
import GameOrganizationBenefits from "GameOrganizationBenefits" /* 12202 */;
import GameOrganizationBenefitIllustrations from "GameOrganizationBenefitIllustrations" /* 12203 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
function BenefitCard(isLast) {
  let Illustration;
  let Stack;
  let items1;
  let obj2;
  let text;
  isLast = isLast.isLast;
  ({ text, Illustration } = isLast);
  const tmp = closure_10(isLast.cardWidth);
  const items = [tmp.card, ];
  let cardSpacing = !isLast;
  const Card = Card_Card.Card;
  if (!isLast) {
    cardSpacing = tmp.cardSpacing;
  }
  items[1] = cardSpacing;
  const obj = { border: "none", radius: 12, style: items, children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: nativeDefault.space.PX_24, children: items1 };
  Stack = tmp3(5989).Stack;
  items1 = [metroRequire(Illustration, { width: "100%", accessible: false }), metroRequire(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: text })];
  return metroRequire(Card, obj);
}
function BenefitsCarousel(cardWidth) {
  let _undefined;
  let _undefined2;
  let c2;
  let c3;
  let c4;
  let closure_5;
  let first;
  let obj2;
  let prop;
  let tmp13;
  let tmp4;
  let tmp6;
  cardWidth = cardWidth.cardWidth;
  const displayNoun = cardWidth.displayNoun;
  _slicedToArray = undefined;
  react = undefined;
  closure_5 = undefined;
  const sum = cardWidth + PX_12;
  dependencyMap = sum;
  let tmp2 = closure_10(cardWidth);
  [tmp4, c3] = _slicedToArray(react.useState(0), 2);
  const tmp3 = _slicedToArray(react.useState(0), 2);
  [tmp6, c4] = _slicedToArray(react.useState(0), 2);
  const tmp5 = _slicedToArray(react.useState(0), 2);
  [first, closure_5] = react.useState(0);
  let obj = { style: tmp2.carouselContainer, children: closure_6(tmp13, obj2) };
  obj2 = {
    style: tmp2.carousel,
    width: sum,
    pageIndictor: false,
    scrollViewProps: {
      contentContainerStyle: tmp2.carouselContent,
      onLayout(nativeEvent) {
        return _undefined2(nativeEvent.nativeEvent.layout.width);
      },
      onContentSizeChange(arg0) {
        return closure_5(arg0);
      },
      onScroll: function handleScroll(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        const diff = nativeEvent.contentSize.width - nativeEvent.layoutMeasurement.width;
        if (diff > 0) {
          let diff1;
          if (contentOffset.x >= diff - 1) {
            diff1 = GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1;
          }
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(diff1, 0);
          _undefined(min(bound, GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1));
        }
        diff1 = Math.round(contentOffset.x / c2);
      },
      scrollEventThrottle: 16,
      snapToInterval: sum,
      snapToAlignment: "start",
      decelerationRate: "fast"
    },
    children: prop.map((key, index) => {
      let formatToPlainString;
      let message;
      let str;
      const obj = { cardWidth, text: formatToPlainString(message, { displayNoun: str }), Illustration: GameOrganizationBenefitIllustrations.GAME_ORGANIZATION_BENEFIT_ILLUSTRATIONS[key.key], isLast: index === GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1 };
      message = key.message;
      const intl = intl2.intl;
      str = displayNoun;
      formatToPlainString = intl.formatToPlainString;
      const tmp = metroRequire;
      const tmp2 = BenefitCard;
      if (displayNoun == null) {
        str = "other";
      }
      return tmp(tmp2, obj, key.key);
    })
  };
  tmp13 = displayNoun(9553);
  prop = cardWidth(12202).GAME_ORGANIZATION_BENEFITS;
  const children = [closure_6(closure_5, obj), ];
  let tmp11Result = null;
  const tmp10 = closure_5;
  const tmp11 = closure_6;
  const tmp9 = closure_7;
  if (cardWidth(12202).GAME_ORGANIZATION_BENEFITS.length > 1) {
    tmp11Result = null;
    if (tmp6 > 0) {
      tmp11Result = null;
      if (first > tmp6) {
        const obj3 = { containerStyle: tmp2.pagination, numberOfItems: cardWidth(12202).GAME_ORGANIZATION_BENEFITS.length, currentIndex: tmp4 };
        const CarouselPagination = tmp14(1186).CarouselPagination;
        tmp11Result = tmp11(CarouselPagination, obj3);
      }
    }
  }
  children[1] = tmp11Result;
  return tmp9(tmp10, { children });
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
let closure_10 = createStyles.createStyles((width) => {
  let obj2;
  let obj4;
  const obj = { carouselContainer: obj2, carousel: { alignItems: "stretch" }, carouselContent: { paddingHorizontal: PX_16 }, card: { padding: nativeDefault.space.PX_16, width, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, cardSpacing: obj4, pagination: { paddingBottom: 0 } };
  obj2 = { marginHorizontal: -PX_16 };
  obj4 = { marginRight: PX_12 };
  ({ padding: nativeDefault.space.PX_16, width, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  return obj;
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationBenefitsCarousel.tsx");

export default function GameOrganizationBenefitsCarousel(displayNoun) {
  displayNoun = displayNoun.displayNoun;
  const width = useWindowDimensionsDefault().width;
  const obj = { cardWidth: Math.min(0.75 * width, 400), displayNoun };
  return metroRequire(BenefitsCarousel, obj, width);
};
