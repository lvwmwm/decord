// Module ID: 15823
// Function ID: 15824
// Name: GameClaimCardStack
// Dependencies: [19, 17, 21, 576, 672, 4836, 8332, 2]
// Exports: default

// Module 15823 (GameClaimCardStack)
import nativeDefault from "native" /* 576 */;
import PlusSmallIcon from "PlusSmallIcon" /* 8332 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_672_mod from "module_672" /* 672 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let items;
let items1;
let obj2;
let size;
let size1;
let size2;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const sum = nativeDefault.space.PX_12 + nativeDefault.space.PX_8 + 96;
const sum1 = sum + 4 + nativeDefault.space.PX_16;
let module_672 = module_672_mod;
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult = importDefaultResultResult.alpha(0.5);
const hexResult = alphaResult.hex();
module_672 = module_672_mod;
const importDefaultResult1Result = module_672(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult1 = importDefaultResult1Result.alpha(0.25);
const hexResult1 = alphaResult1.hex();
module_672 = module_672_mod;
const importDefaultResult2Result = module_672(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult2 = importDefaultResult2Result.alpha(0.35);
const hexResult2 = alphaResult2.hex();
let createStyles = createStyles_mod;
let obj = { container: obj2, gameCard: size, gameImage: { width: "100%", height: "100%" }, addCard: size1, addIconWrapper: size2 };
obj2 = { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 + 4 };
createStyles = createStyles.createStyles;
size = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, overflow: "hidden", flexShrink: 0, transform: items, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
items = [{ rotate: "-6deg" }];
size1 = { width: 72, height: 96, borderRadius: nativeDefault.radii.xs, flexShrink: 0, transform: items1, borderWidth: 2, borderStyle: "dashed", borderColor: hexResult, backgroundColor: hexResult1, alignItems: "center", justifyContent: "center", marginStart: -nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
items1 = [{ rotate: "6deg" }];
size2 = { width: 21.599999999999998, height: 21.599999999999998, borderRadius: nativeDefault.radii.xs, backgroundColor: hexResult2, alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/game_claim/native/GameClaimCardStack.tsx");

export default function GameClaimCardStack(imageSrc) {
  let items;
  let obj3;
  let obj5;
  imageSrc = imageSrc.imageSrc;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.gameCard, children: React3(React2, obj3) };
  obj3 = { style: tmp.gameImage, source: { uri: imageSrc }, resizeMode: "cover" };
  items = [React3(_false, obj2), ];
  const obj4 = { style: tmp.addCard, children: React3(_false, obj5) };
  obj5 = { style: tmp.addIconWrapper, children: React3(PlusSmallIcon.PlusSmallIcon, { size: "sm", color: "text-brand" }) };
  items[1] = React3(_false, obj4);
  return hasOwnProperty(_false, obj);
};
export const CARD_STACK_HEIGHT = sum1;
