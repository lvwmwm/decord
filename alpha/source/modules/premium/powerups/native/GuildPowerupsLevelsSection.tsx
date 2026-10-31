// Module ID: 14122
// Function ID: 14123
// Name: GuildPowerupsLevelsSection
// Dependencies: [19, 17, 21, 575, 1376, 5014, 14111, 1113, 2570, 14123, 14124, 2]
// Exports: default

// Module 14122 (GuildPowerupsLevelsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import MarketingCardsScroller2 from "MarketingCardsScroller" /* 14123 */;
import GuildPowerupsLevelCardDefault from "GuildPowerupsLevelCard" /* 14124 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let obj2 = { title: intl.string(listings(2570)["TXY/b0"]), description: intl2.string(listings(2570).aJv4PB) };
  const tmp3 = listings(14111);
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
