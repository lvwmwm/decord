// Module ID: 12994
// Function ID: 12995
// Name: PremiumPerkCarousel
// Dependencies: [32, 19, 17, 21, 4836, 12938, 4832, 8662, 1177, 2]
// Exports: default

// Module 12994 (PremiumPerkCarousel)
import react_native from "react-native" /* 17 */;
import PremiumPerkCard from "PremiumPerkCard" /* 12938 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumPerkCardDefault = PremiumPerkCard;
let importDefault;

let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ title: { marginLeft: 24 }, indicators: { marginBottom: -36 }, carousel: { marginTop: 16 }, carouselCard: { marginLeft: 8 }, lastCarouselCard: { marginRight: 8 } });
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCarousel.tsx");

export default function PremiumPerkCarousel(arg0) {
  let closure_1;
  let closure_3;
  let currentIndex;
  let items1;
  let items2;
  let obj6;
  let onItemChange;
  let perks;
  let style;
  let title;
  ({ perks, onItemChange } = arg0);
  currentIndex = undefined;
  _slicedToArray = undefined;
  let length;
  ({ title, style } = arg0);
  const tmp = closure_8();
  importDefault = tmp;
  let obj = onItemChange(currentIndex[5]);
  const perkCardHeight = obj.usePerkCardHeight(onItemChange(currentIndex[5]).PerkCardVariant.NARROW);
  [currentIndex, _slicedToArray] = length.useState(0);
  let items = [currentIndex, onItemChange];
  const callback = length.useCallback((arg0) => {
    if (arg0 !== first) {
      closure_3(arg0);
      if (onItemChange != null) {
        onItemChange(arg0);
      }
    }
  }, items);
  const width = onItemChange(currentIndex[5]).PERK_CARD_SIZES[onItemChange(undefined, currentIndex[5]).PerkCardVariant.NARROW].width;
  length = perks.length;
  const obj2 = { style, children: items1 };
  items1 = [, , ];
  const obj3 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  items1[0] = closure_6(onItemChange(currentIndex[6]).Text, obj3);
  const obj4 = {
    style: items2,
    width,
    onPageChange: callback,
    pageIndictor: false,
    scrollViewProps: obj6,
    children: perks.map((item, index) => {
      const items = [closure_1.carouselCard, ];
      let lastCarouselCard = null;
      if (length - 1 === index) {
        lastCarouselCard = closure_1.lastCarouselCard;
      }
      items[1] = lastCarouselCard;
      const obj = { variant: PremiumPerkCard.PerkCardVariant.NARROW, style: items };
      const tmp2 = PremiumPerkCardDefault;
      const merged = Object.assign(item);
      return metroRequire(tmp2, obj, index);
    })
  };
  items2 = [tmp.carousel, ];
  const obj5 = { height: perkCardHeight + 8 };
  items2[1] = obj5;
  obj6 = { overScrollMode: "always", snapToInterval: width + 8 + 0.2, snapToStart: true, snapToAlignment: "start", decelerationRate: "normal" };
  const tmp6 = require("Carousel");
  items1[1] = closure_6(tmp6, obj4);
  const obj7 = { containerStyle: tmp.indicators, numberOfItems: perks.length, currentIndex };
  items1[2] = closure_6(onItemChange(currentIndex[8]).CarouselPagination, obj7);
  return closure_7(View, obj2);
};
