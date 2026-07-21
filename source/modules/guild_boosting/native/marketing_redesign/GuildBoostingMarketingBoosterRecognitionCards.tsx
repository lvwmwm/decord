// Module ID: 12411
// Function ID: 94823
// Name: Card
// Dependencies: []
// Exports: default

// Module 12411 (Card)
function Card(arg0) {
  let IconComponent;
  let children;
  const tmp = callback3();
  let obj = { style: tmp.card };
  obj = { style: tmp.iconContainer };
  obj = { size: "lg", color: importDefault(dependencyMap[4]).unsafe_rawColors.GUILD_BOOSTING_PINK };
  ({ IconComponent, children } = arg0);
  obj.children = callback(IconComponent, obj);
  const items = [callback(View, obj), callback(arg1(dependencyMap[5]).Text, { style: tmp.description, variant: "text-sm/medium", children })];
  obj.children = items;
  return callback2(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.card = obj;
obj.description = { textAlign: "center" };
obj.iconContainer = {};
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: { 0: 0, -9987282: 2, 9223372036854775807: 3, -9223372036854775808: "crystal_pos" }, title: {}, recognitionCardsContainer: {} });
const obj4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx");

export default function GuildBoostingMarketingBoosterRecognitionCards() {
  const tmp = callback4();
  let obj = { style: tmp.container };
  obj = { variant: "heading-xl/extrabold", style: tmp.title };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.IzKs3o);
  const items = [callback(arg1(dependencyMap[5]).Text, obj), ];
  obj = { style: tmp.recognitionCardsContainer };
  const obj1 = { icon: importDefault(dependencyMap[7]), IconComponent: arg1(dependencyMap[8]).BoostGemIcon };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[6]).t.TZigSO);
  const items1 = [callback(Card, obj1), , , ];
  const obj2 = { icon: importDefault(dependencyMap[9]), IconComponent: arg1(dependencyMap[10]).BoostTier3Icon };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.children = intl3.string(arg1(dependencyMap[6]).t.hjQuV2);
  items1[1] = callback(Card, obj2);
  const obj3 = { icon: importDefault(dependencyMap[11]), IconComponent: arg1(dependencyMap[12]).ShieldUserIcon };
  const intl4 = arg1(dependencyMap[6]).intl;
  obj3.children = intl4.string(arg1(dependencyMap[6]).t.2RUcaM);
  items1[2] = callback(Card, obj3);
  const obj4 = { icon: importDefault(dependencyMap[13]), IconComponent: arg1(dependencyMap[14]).HeartIcon };
  const intl5 = arg1(dependencyMap[6]).intl;
  obj4.children = intl5.string(arg1(dependencyMap[6]).t.bJoZKV);
  items1[3] = callback(Card, obj4);
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
};
