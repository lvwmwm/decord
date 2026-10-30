// Module ID: 14087
// Function ID: 14088
// Name: GuildPowerupsLevelsSection
// Dependencies: [19, 17, 21, 575, 1377, 5009, 14076, 1114, 2569, 14088, 14089, 2]
// Exports: default

// Module 14087 (GuildPowerupsLevelsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import MarketingCardsScroller2 from "MarketingCardsScroller" /* 14088 */;
import GuildPowerupsLevelCardDefault from "GuildPowerupsLevelCard" /* 14089 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let num = 325;
if (PlatformUtils.isIOS()) {
  num = 300;
}
let createStyles = createStyles_mod;
let obj = { cardContainer: { width: 250, marginEnd: PX_16, flex: 1 }, scroller: obj2, scrollerContent: obj3 };
obj2 = { height: num, paddingBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default function GuildPowerupsLevelsSection(arg0) {
  let cardContainer;
  let guildId;
  let intl;
  let intl2;
  let items1;
  let listings;
  ({ guildId: require, listings } = arg0);
  let memo;
  const tmp = closure_9();
  dependencyMap = tmp;
  const items = [listings];
  memo = memo.useMemo(() => {
    const found = listings.filter((type) => "singleLevel" === type.type);
    return found.map((powerup) => powerup.powerup);
  }, items);
  const isScrollingRef = memo.useRef(false);
  let obj = { children: items1 };
  const callback = memo.useCallback((current) => {
    isScrollingRef.current = current;
  }, []);
  let obj2 = { title: intl.string(listings(2569)["TXY/b0"]), description: intl2.string(listings(2569).aJv4PB) };
  const tmp3 = listings(14076);
  intl = intl3.intl;
  intl2 = intl3.intl;
  items1 = [closure_5(tmp3, obj2), ];
  const obj3 = {
    cardMarginRight: PX_16,
    cardWidth: 250,
    contentContainerStyle: tmp.scrollerContent,
    itemCount: memo.length,
    onScrollingChange: callback,
    style: tmp.scroller,
    children: memo.map((powerup, index) => {
      let obj2;
      const obj = { style: cardContainer.cardContainer, children: hasOwnProperty(GuildPowerupsLevelCardDefault, obj2) };
      obj2 = { guildId: require, powerup, nextPowerup: memo[index + 1], index, isScrollingRef };
      return hasOwnProperty(View, obj, powerup.skuId);
    })
  };
  const MarketingCardsScroller = MarketingCardsScroller2.MarketingCardsScroller;
  items1[1] = closure_5(MarketingCardsScroller, obj3);
  return closure_7(closure_6, obj);
};
