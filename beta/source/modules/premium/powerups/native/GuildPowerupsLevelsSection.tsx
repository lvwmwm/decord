// Module ID: 12059
// Function ID: 12060
// Name: GuildPowerupsLevelsSection
// Dependencies: [19, 17, 21, 576, 1365, 4836, 12048, 1115, 2519, 12060, 12061, 2]
// Exports: default

// Module 12059 (GuildPowerupsLevelsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import MarketingCardsScroller2 from "MarketingCardsScroller" /* 12060 */;
import GuildPowerupsLevelCardDefault from "GuildPowerupsLevelCard" /* 12061 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let obj2 = { title: intl.string(listings(2519)["TXY/b0"]), description: intl2.string(listings(2519).aJv4PB) };
  const tmp3 = listings(12048);
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
