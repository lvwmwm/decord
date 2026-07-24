// Module ID: 12442
// Function ID: 96558
// Name: PremiumPerkCarousel
// Dependencies: [57, 31, 27, 33, 4130, 12403, 4126, 8058, 1273, 2]
// Exports: default

// Module 12442 (PremiumPerkCarousel)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ title: { marginLeft: 24 }, indicators: { marginBottom: -36 }, carousel: { marginTop: 16 }, carouselCard: { marginLeft: 8 }, lastCarouselCard: { marginRight: 8 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/PremiumPerkCarousel.tsx");

export default function PremiumPerkCarousel(arg0) {
  let onItemChange;
  let perks;
  let style;
  let title;
  ({ perks, onItemChange } = arg0);
  ({ title, style } = arg0);
  const tmp = callback4();
  const importDefault = tmp;
  let obj = onItemChange(first[5]);
  const perkCardHeight = obj.usePerkCardHeight(onItemChange(first[5]).PerkCardVariant.NARROW);
  const tmp3 = callback(length.useState(0), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let items = [first, onItemChange];
  callback = length.useCallback((arg0) => {
    if (arg0 !== first) {
      callback(arg0);
      if (null != onItemChange) {
        onItemChange(arg0);
      }
    }
  }, items);
  const width = onItemChange(first[5]).PERK_CARD_SIZES[onItemChange(undefined, first[5]).PerkCardVariant.NARROW].width;
  obj = { style };
  obj = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items1 = [callback2(onItemChange(first[6]).Text, obj), , ];
  const obj1 = { style: items2, width, onPageChange: callback, pageIndictor: false, scrollViewProps: obj3 };
  items2 = [tmp.carousel, { height: perkCardHeight + 8 }];
  obj3 = { overScrollMode: "always", snapToInterval: width + 8 + 0.2, snapToStart: true, snapToAlignment: "start", decelerationRate: "normal" };
  obj1.children = perks.map((arg0, arg1) => {
    const items = [tmp.carouselCard, ];
    let lastCarouselCard = null;
    if (length - 1 === arg1) {
      lastCarouselCard = tmp.lastCarouselCard;
    }
    items[1] = lastCarouselCard;
    const obj = {};
    const merged = Object.assign(arg0);
    obj["variant"] = onItemChange(first[5]).PerkCardVariant.NARROW;
    obj["style"] = items;
    return outer1_6(tmp(first[5]), obj, arg1);
  });
  items1[1] = callback2(importDefault(first[7]), obj1);
  items1[2] = callback2(onItemChange(first[8]).CarouselPagination, { containerStyle: tmp.indicators, numberOfItems: perks.length, currentIndex: first });
  obj.children = items1;
  return callback3(View, obj);
};
