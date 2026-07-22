// Module ID: 11586
// Function ID: 90074
// Name: PX_16
// Dependencies: []
// Exports: default

// Module 11586 (PX_16)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const PX_16 = importDefault(dependencyMap[3]).space.PX_16;
let obj = arg1(dependencyMap[4]);
let num = 325;
if (obj.isIOS()) {
  num = 300;
}
let obj1 = arg1(dependencyMap[5]);
obj = { cardContainer: { marginEnd: PX_16 } };
obj = { height: num, paddingBottom: importDefault(dependencyMap[3]).space.PX_8 };
obj.scroller = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
obj.scrollerContent = obj1;
let closure_9 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default function GuildPowerupsLevelsSection(arg0) {
  let listings;
  ({ guildId: closure_0, listings } = arg0);
  const importDefault = listings;
  const tmp = callback3();
  const dependencyMap = tmp;
  const items = [listings];
  const memo = React.useMemo(() => {
    const found = listings.filter((type) => "singleLevel" === type.type);
    return found.map((powerup) => powerup.powerup);
  }, items);
  const React = memo;
  let closure_4 = React.useRef(false);
  let obj = {};
  const callback = React.useCallback((current) => {
    closure_4.current = current;
  }, []);
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(importDefault(dependencyMap[8]).TXY/b0);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.description = intl2.string(importDefault(dependencyMap[8]).aJv4PB);
  const items1 = [callback(importDefault(dependencyMap[6]), obj), ];
  obj = {
    cardMarginRight: PX_16,
    cardWidth: 250,
    contentContainerStyle: tmp.scrollerContent,
    itemCount: memo.length,
    onScrollingChange: callback,
    style: tmp.scroller,
    children: memo.map((powerup, index) => {
      let obj = { style: tmp.cardContainer, children: callback(listings(tmp[10]), obj) };
      obj = { guildId: closure_0, powerup, nextPowerup: memo[index + 1], index, isScrollingRef: closure_4 };
      return callback(closure_4, obj, powerup.skuId);
    })
  };
  items1[1] = callback(arg1(dependencyMap[9]).MarketingCardsScroller, obj);
  obj.children = items1;
  return callback2(closure_6, obj);
};
