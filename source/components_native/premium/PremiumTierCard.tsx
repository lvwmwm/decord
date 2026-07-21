// Module ID: 12376
// Function ID: 94631
// Name: textLogoTier2
// Dependencies: []
// Exports: default

// Module 12376 (textLogoTier2)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const getPremiumGradientColor = arg1(dependencyMap[2]).getPremiumGradientColor;
const PremiumTypes = arg1(dependencyMap[3]).PremiumTypes;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { header: {}, textLogoTier0: {}, textLogoTier1: { bhk: null, bic: null }, textLogoTier2: {}, wumpusLogo: { "Bool(true)": "white", <string:80574720>: "M249.5 78L246 81.2322V85.7808L249.5 89L253 85.7678V81.2322L249.5 78Z", <string:80504576>: "white", <string:80590080>: true }, wumpusLogoTier0: {}, wumpusLogoTier1: { bhk: "https://www.googleapis.com/youtube/v3/liveBroadcasts", bic: null }, wumpusLogoTier2: {} };
obj = { padding: 16, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.xs, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.xs };
obj.body = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.bodyLegacy = { backgroundColor: arg1(dependencyMap[7]).DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
let closure_10 = obj.createStyles(obj);
const obj1 = { backgroundColor: arg1(dependencyMap[7]).DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(children) {
  let premiumType;
  let style;
  ({ premiumType, style } = children);
  const tmp = callback();
  const tmp2 = importDefault(dependencyMap[8])("PremiumTierCard");
  let obj = {};
  obj = { style: tmp.header, start: arg1(dependencyMap[10]).HorizontalGradient.START, end: arg1(dependencyMap[10]).HorizontalGradient.END, colors: getPremiumGradientColor(premiumType) };
  obj = { "Bool(true)": "r", "Bool(true)": "ron", "Bool(true)": "Array" };
  let obj3 = arg1(dependencyMap[11]);
  obj.accessibilityLabel = obj3.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj.style = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp12 = importDefault(dependencyMap[12]);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp12 = importDefault(dependencyMap[13]);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp12 = importDefault(dependencyMap[14]);
  }
  obj.source = tmp12;
  obj.children = closure_7(closure_4, obj);
  const items = [closure_7(importDefault(dependencyMap[9]), obj), , ];
  const obj1 = {};
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    let wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  items1[1] = wumpusLogoTier2;
  obj1.style = items1;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp23 = importDefault(dependencyMap[15]);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp23 = importDefault(dependencyMap[16]);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp23 = importDefault(dependencyMap[17]);
  }
  obj1.source = tmp23;
  items[1] = closure_7(closure_4, obj1);
  const obj2 = {};
  const items2 = [tmp.body, ];
  let bodyLegacy = !tmp2;
  if (bodyLegacy) {
    bodyLegacy = tmp.bodyLegacy;
  }
  items2[1] = bodyLegacy;
  obj2.style = items2;
  obj2.children = children.children;
  items[2] = closure_7(closure_3, obj2);
  obj.children = items;
  const tmp3Result = closure_9(closure_8, obj);
  if (tmp2) {
    obj3 = { variant: "surface-high", style, children: tmp3Result };
    let tmp32Result = tmp32(arg1(dependencyMap[18]).Card, obj3);
  } else {
    const obj4 = { style, children: tmp3Result };
    tmp32Result = tmp32(closure_3, obj4);
  }
  return tmp32Result;
};
