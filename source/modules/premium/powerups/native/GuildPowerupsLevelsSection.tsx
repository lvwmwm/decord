// Module ID: 11596
// Function ID: 90123
// Name: PX_16
// Dependencies: [31, 27, 33, 689, 478, 4130, 11585, 1212, 2230, 11597, 11598, 2]
// Exports: default

// Module 11596 (PX_16)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import isWindows from "isWindows";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
let num = 325;
if (isWindows.isIOS()) {
  num = 300;
}
isWindows = { cardContainer: isWindows };
isWindows = { width: 250, marginEnd: PX_16, flex: 1 };
_createForOfIteratorHelperLoose = { height: num, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
isWindows.scroller = _createForOfIteratorHelperLoose;
isWindows.scrollerContent = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
isWindows = _createForOfIteratorHelperLoose.createStyles(isWindows);
const obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default function GuildPowerupsLevelsSection(arg0) {
  let listings;
  let require;
  ({ guildId: require, listings } = arg0);
  const tmp = isWindows();
  const dependencyMap = tmp;
  const items = [listings];
  memo = memo.useMemo(() => {
    const found = listings.filter((type) => "singleLevel" === type.type);
    return found.map((powerup) => powerup.powerup);
  }, items);
  let closure_4 = memo.useRef(false);
  let obj = {};
  const callback = memo.useCallback((current) => {
    closure_4.current = current;
  }, []);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(listings(2230)["TXY/b0"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(listings(2230).aJv4PB);
  const items1 = [callback(listings(11585), obj), ];
  obj = {
    cardMarginRight: PX_16,
    cardWidth: 250,
    contentContainerStyle: tmp.scrollerContent,
    itemCount: memo.length,
    onScrollingChange: callback,
    style: tmp.scroller,
    children: memo.map((powerup, index) => {
      obj = { style: tmp.cardContainer, children: outer1_5(listings(tmp[10]), obj) };
      obj = { guildId: closure_0, powerup, nextPowerup: memo[index + 1], index, isScrollingRef: closure_4 };
      return outer1_5(closure_4, obj, powerup.skuId);
    })
  };
  items1[1] = callback(require(11597) /* getClampedIndex */.MarketingCardsScroller, obj);
  obj.children = items1;
  return callback2(closure_6, obj);
};
