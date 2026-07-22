// Module ID: 12301
// Function ID: 94216
// Name: BetaPill
// Dependencies: []
// Exports: default

// Module 12301 (BetaPill)
class BetaPill {
  constructor() {
    tmp = closure_7();
    obj = { style: tmp.betaPill };
    obj = { variant: "text-xs/bold", style: tmp.betaText };
    intl = require(dependencyMap[6]).intl;
    obj.children = intl.string(require(dependencyMap[6]).t.oW0eUd);
    obj.children = jsx(require(dependencyMap[5]).Text, obj);
    return jsx(View, obj);
  }
}
const View = require(dependencyMap[0]).View;
const Gradients = require(dependencyMap[1]).Gradients;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.sm - 2, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.premiumGroupCard = obj;
obj.headerContainer = {};
const obj1 = { paddingTop: false, paddingBottom: false, width: false, height: false, marginRight: false, borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.WHITE };
obj.betaPill = obj1;
obj.betaText = { color: importDefault(dependencyMap[4]).colors.BLACK };
const obj2 = { color: importDefault(dependencyMap[4]).colors.BLACK };
obj.title = { color: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT, marginBottom: 16 };
const obj3 = { color: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT, marginBottom: 16 };
obj.description = { color: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[12]);
const result = _module2.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupFeaturesTableCard.tsx");

export default function PremiumGroupFeaturesTableCard(arg0) {
  let bodyString;
  let premiumGroupRole;
  let style;
  let subheaderString;
  ({ style, premiumGroupRole } = arg0);
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[7])(premiumGroupRole, false);
  if (null == tmp2) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp2);
    let obj = { borderWidth: 2, direction: require(dependencyMap[8]).GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: importDefault(dependencyMap[4]).radii.sm, style };
    obj = { start: { 0: "%FunctionPrototype%", 0: "paddingStart" }, end: { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437 } };
    let obj2 = require(dependencyMap[10]);
    const items = [obj2.hexWithOpacity("#8547C6", 0.15), , ];
    const tmp9 = importDefault(dependencyMap[9]);
    items[1] = require(dependencyMap[10]).hexWithOpacity("#B845C1", 0.15);
    const obj4 = require(dependencyMap[10]);
    items[2] = require(dependencyMap[10]).hexWithOpacity("#AB5D8A", 0.15);
    obj.colors = items;
    obj.locations = ["isRobloxSubgameGame", "MedalIcon", "isArray"];
    obj.style = tmp.premiumGroupCard;
    obj = { style: tmp.headerContainer };
    const items1 = [callback(importDefault(dependencyMap[11]), { "Null": -1429716719, "Null": -1536032767 }), callback(BetaPill, {})];
    obj.children = items1;
    const items2 = [callback2(View, obj), , ];
    const obj1 = { variant: "text-sm/normal", style: tmp.title, children: subheaderString };
    items2[1] = callback(require(dependencyMap[5]).Text, obj1);
    obj2 = { variant: "text-sm/normal", style: tmp.description, children: bodyString };
    items2[2] = callback(require(dependencyMap[5]).Text, obj2);
    obj.children = items2;
    obj.children = callback2(tmp9, obj);
    return callback(require(dependencyMap[8]).GradientBorder, obj);
  }
};
export { BetaPill };
