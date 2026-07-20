// Module ID: 14885
// Function ID: 112175
// Name: importDefaultResult1
// Dependencies: []
// Exports: default

// Module 14885 (importDefaultResult1)
importAll(dependencyMap[0]);
({ Image: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const sum = importDefault(dependencyMap[3]).space.PX_12 + importDefault(dependencyMap[3]).space.PX_8 + 96;
const sum1 = sum + 4 + importDefault(dependencyMap[3]).space.PX_16;
const tmp4 = arg1(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[4]);
const importDefaultResultResult = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500);
const alphaResult = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500).alpha(0.5);
const hexResult = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500).alpha(0.5).hex();
const importDefaultResult1 = importDefault(dependencyMap[4]);
const importDefaultResult1Result = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500);
const alphaResult1 = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500).alpha(0.25);
const hexResult1 = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const importDefaultResult2 = importDefault(dependencyMap[4]);
const importDefaultResult2Result = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500);
const alphaResult2 = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500).alpha(0.35);
const hexResult2 = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500).alpha(0.35).hex();
let obj = {};
obj = { paddingTop: importDefault(dependencyMap[3]).space.PX_12, paddingBottom: importDefault(dependencyMap[3]).space.PX_16 + 4 };
obj.container = obj;
const obj7 = arg1(dependencyMap[5]);
const items = [{ rotate: "-6deg" }];
obj.gameCard = { borderRadius: importDefault(dependencyMap[3]).radii.xs, transform: items, shadowColor: importDefault(dependencyMap[3]).colors.BLACK, shadowOffset: { aze: "0 0 4px 0 hsl(none 0% 0% / 0.08)", azj: "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))" }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
obj.gameImage = { aze: 30271555, azj: 22092032 };
const obj2 = { "Null": null, "Null": null, "Null": null, backgroundColor: null, alignItems: null, borderBottomWidth: null, kind: null, borderRadius: importDefault(dependencyMap[3]).radii.xs };
const items1 = [{ rotate: "6deg" }];
obj2.transform = items1;
obj2.borderColor = hexResult;
obj2.backgroundColor = hexResult1;
obj2.alignItems = "center";
obj2.justifyContent = "center";
obj2.marginStart = -importDefault(dependencyMap[3]).space.PX_8;
obj2.marginTop = importDefault(dependencyMap[3]).space.PX_8;
obj.addCard = obj2;
const obj3 = { "Bool(false)": "text-sm/medium", "Bool(false)": "text-default", "Bool(false)": null, "Bool(false)": null, "Bool(false)": 1, "Bool(false)": "tail", borderRadius: importDefault(dependencyMap[3]).radii.xs, backgroundColor: hexResult2 };
obj.addIconWrapper = obj3;
let closure_6 = obj7.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[3]).radii.xs, transform: items, shadowColor: importDefault(dependencyMap[3]).colors.BLACK, shadowOffset: { aze: "0 0 4px 0 hsl(none 0% 0% / 0.08)", azj: "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))" }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default function GameClaimCardStack(uri) {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.gameCard, children: callback(closure_2, obj) };
  obj = { style: tmp.gameImage, source: { uri: uri.imageSrc }, resizeMode: "cover" };
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.addCard, children: callback(closure_3, { style: tmp.addIconWrapper, children: callback(arg1(dependencyMap[6]).PlusSmallIcon, {}) }) };
  items[1] = callback(closure_3, obj1);
  obj.children = items;
  return callback2(closure_3, obj);
};
export const CARD_STACK_HEIGHT = sum1;
