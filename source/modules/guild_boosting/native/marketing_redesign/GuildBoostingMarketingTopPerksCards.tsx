// Module ID: 12416
// Function ID: 94830
// Name: items
// Dependencies: []
// Exports: default

// Module 12416 (items)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { wrapper: { marginTop: 50 }, heading: { "Null": 1100505555, "Null": 126701 }, scrollerContent: {} };
obj = { "Bool(false)": "Array", "Bool(false)": "user", "Bool(false)": "2026-05-quest-home-tile-redesign", "Bool(false)": "user", "Bool(false)": "2026-05-bounty-stale-refresh-quest-home", "Bool(false)": "user", "Bool(false)": "2026-06-remove-quest-home-hero", ma: "user", md: "2026-06-quest-home-layout-visual-tweaks", me: "user", backgroundColor: importDefault(dependencyMap[5]).colors.CARD_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.card = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.cardGraphic = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.cardLast = { marginRight: 0 };
obj.cardHeading = { "Null": null, "Null": 1 };
obj.cardBody = { textAlign: "center" };
let closure_8 = obj.createStyles(obj);
const items = [
  {
    getHeadingCopy() {
      const intl = arg1(dependencyMap[6]).intl;
      return intl.string(arg1(dependencyMap[6]).t.y4ft4D);
    },
    getBodyCopy() {
      const intl = arg1(dependencyMap[6]).intl;
      return intl.string(arg1(dependencyMap[6]).t.HTvLGu);
    },
    getGraphic(style) {
      return callback(closure_3, { style, source: importDefault(dependencyMap[7]) });
    }
  },
  {
    getHeadingCopy() {
      const intl = arg1(dependencyMap[6]).intl;
      return intl.string(arg1(dependencyMap[6]).t.PbAyub);
    },
    getBodyCopy() {
      const intl = arg1(dependencyMap[6]).intl;
      return intl.string(arg1(dependencyMap[6]).t.wOYbTv);
    },
    getGraphic(style) {
      const obj = { source: arg1(dependencyMap[9]), autoPlay: !useReducedMotion.useReducedMotion, style };
      return callback(importDefault(dependencyMap[8]), obj);
    }
  },
  {
    getHeadingCopy() {
      const intl = arg1(dependencyMap[6]).intl;
      return intl.string(arg1(dependencyMap[6]).t./bX4Jn);
    },
    getBodyCopy() {
      const intl = arg1(dependencyMap[6]).intl;
      return intl.string(arg1(dependencyMap[6]).t.yCjoUC);
    },
    getGraphic(style) {
      return callback(closure_3, { style, source: importDefault(dependencyMap[10]) });
    }
  }
];
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
const obj2 = {
  getHeadingCopy() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.y4ft4D);
  },
  getBodyCopy() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.HTvLGu);
  },
  getGraphic(style) {
    return callback(closure_3, { style, source: importDefault(dependencyMap[7]) });
  }
};
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  const tmp = callback3();
  const arg1 = tmp;
  let obj = { style: tmp.wrapper };
  obj = { style: tmp.heading };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.aGdB3E);
  const items = [callback(arg1(dependencyMap[11]).Text, obj), ];
  obj = {
    <string:1773490101>: "sparkle Outlines 9",
    <string:3221487602>: 1,
    <string:3468138506>: null,
    itemCount: items.length,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((getGraphic) => {
      let obj = {};
      const items = [tmp.card, ];
      let cardLast = arg1 === length.length - 1;
      if (cardLast) {
        cardLast = tmp.cardLast;
      }
      items[1] = cardLast;
      obj.style = items;
      const items1 = [getGraphic.getGraphic(closure_7.cardGraphic), , ];
      obj = { delete: false, dispatch: 0, raw: 4, style: closure_7.cardHeading, children: getGraphic.getHeadingCopy() };
      items1[1] = callback(closure_7(closure_2[11]).Text, obj);
      obj = { delete: -1034747437, dispatch: -1274954172, raw: 94480, style: closure_7.cardBody, children: getGraphic.getBodyCopy() };
      items1[2] = callback(closure_7(closure_2[11]).Text, obj);
      obj.children = items1;
      return closure_7(closure_4, obj, arg1);
    })
  };
  items[1] = callback(arg1(dependencyMap[12]).MarketingCardsScroller, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
