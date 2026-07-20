// Module ID: 12253
// Function ID: 93983
// Name: PremiumPerkCarousel
// Dependencies: [0, 131072, 0, 0, 0, 0, 4294967295, 0, 0]
// Exports: default

// Module 12253 (PremiumPerkCarousel)
import closure_3 from "result";
import { View } from "result";
import result from "result";
import result from "result";

let closure_4 = importAll(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = result);
let closure_8 = result.createStyles({ title: { marginLeft: 24 }, indicators: { marginBottom: -36 }, carousel: { marginTop: 16 }, carouselCard: { marginLeft: 8 }, lastCarouselCard: { marginRight: 8 } });
result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/native/PremiumPerkCarousel.tsx");

export default function PremiumPerkCarousel(arg0) {
  let onItemChange;
  let perks;
  let style;
  let title;
  ({ perks, onItemChange } = arg0);
  const arg1 = onItemChange;
  ({ title, style } = arg0);
  const tmp = callback4();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[5]);
  const perkCardHeight = obj.usePerkCardHeight(arg1(dependencyMap[5]).PerkCardVariant.NARROW);
  const tmp3 = callback(React.useState(0), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  let callback = tmp3[1];
  const items = [first, onItemChange];
  callback = React.useCallback((arg0) => {
    if (arg0 !== first) {
      callback(arg0);
      if (null != onItemChange) {
        onItemChange(arg0);
      }
    }
  }, items);
  const width = arg1(dependencyMap[5]).PERK_CARD_SIZES[closure_0(undefined, closure_2[5]).PerkCardVariant.NARROW].width;
  const React = perks.length;
  obj = { style };
  obj = { style: tmp.title, children: title };
  const items1 = [callback2(arg1(dependencyMap[6]).Text, obj), , ];
  const obj1 = { style: items2, width, onPageChange: callback, pageIndictor: false, scrollViewProps: obj3 };
  const items2 = [tmp.carousel, { height: perkCardHeight + 8 }];
  const obj3 = { <string:2941336378>: 11382, <string:3063964577>: 11520, <string:1656120571>: 11520, <string:89216571>: 5632, <string:1364484355>: 6656, snapToInterval: width + 8 + 0.2 };
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
    return callback2(tmp(first[5]), obj, arg1);
  });
  items1[1] = callback2(importDefault(dependencyMap[7]), obj1);
  items1[2] = callback2(arg1(dependencyMap[8]).CarouselPagination, { containerStyle: tmp.indicators, numberOfItems: perks.length, currentIndex: first });
  obj.children = items1;
  return callback3(View, obj);
};
