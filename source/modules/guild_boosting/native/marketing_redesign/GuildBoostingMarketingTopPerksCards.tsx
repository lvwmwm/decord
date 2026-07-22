// Module ID: 12421
// Function ID: 94858
// Name: items
// Dependencies: []
// Exports: default

// Module 12421 (items)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { wrapper: { marginTop: 50 }, heading: { value: -1102997407, on: 2080375278 }, scrollerContent: {} };
obj = { 1146159108: "user", -1601084480: "2026-03-video-quest-player-refactor", -1910779653: "user", 5601034: "2026-04-composed-quest-player", -514518152: "user", 1987576153: "2026-04-mobile-quest-orb-reward-modal-cta-priority", 913874296: "user", 1009741928: "2026-03-mobile-quest-home-red-dot-notification", 592933481: "user", -1727229131: "2026-05-quest-home-tile-redesign", backgroundColor: importDefault(dependencyMap[5]).colors.CARD_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.card = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.cardGraphic = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.cardLast = { marginRight: 0 };
obj.cardHeading = { value: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000676009517133676, on: 131072.0007038191 };
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
    "Null": "sparkle Outlines 9",
    "Null": 1,
    "Null": null,
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
      obj = { "Null": false, "Null": 0, alignItems: 4, style: closure_7.cardHeading, children: getGraphic.getHeadingCopy() };
      items1[1] = callback(closure_7(closure_2[11]).Text, obj);
      obj = { "Null": 1, "Null": "tail", alignItems: null, style: closure_7.cardBody, children: getGraphic.getBodyCopy() };
      items1[2] = callback(closure_7(closure_2[11]).Text, obj);
      obj.children = items1;
      return closure_7(closure_4, obj, arg1);
    })
  };
  items[1] = callback(arg1(dependencyMap[12]).MarketingCardsScroller, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
