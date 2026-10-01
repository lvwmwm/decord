// Module ID: 12064
// Function ID: 12065
// Name: GuildPowerupsCard
// Dependencies: [19, 17, 21, 4836, 672, 576, 5919, 2]
// Exports: default

// Module 12064 (GuildPowerupsCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Card_Card from "Card/Card" /* 5919 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import module_672_mod from "module_672" /* 672 */;
import size from "module_2" /* 2 */;

let alphaResult;
let alphaResult1;
let alphaResult2;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { cardActive: obj2, cardExpiring: obj3, cardRemoving: obj4 };
obj2 = { borderColor: alphaResult.hex() };
createStyles = createStyles.createStyles;
let module_672 = module_672_mod;
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.GREEN_360);
alphaResult = importDefaultResultResult.alpha(0.35);
obj3 = { borderColor: alphaResult1.hex() };
module_672 = module_672_mod;
const importDefaultResult1Result = module_672(nativeDefault.unsafe_rawColors.YELLOW_300);
alphaResult1 = importDefaultResult1Result.alpha(0.35);
obj4 = { borderColor: alphaResult2.hex() };
module_672 = module_672_mod;
const importDefaultResult2Result = module_672(nativeDefault.unsafe_rawColors.YELLOW_300);
alphaResult2 = importDefaultResult2Result.alpha(0.35);
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default function GuildPowerupsCard(status) {
  let children;
  let containerStyle;
  let style;
  status = status.status;
  ({ children, containerStyle, style } = status);
  const merged = Object.assign(status, Object.assign({ children: 0, containerStyle: 0, status: 0, style: 0 }));
  const tmp2 = closure_4();
  const Card = Card_Card.Card;
  const merged1 = Object.assign(merged);
  let type;
  if (status != null) {
    type = status.type;
  }
  const items = [, , , ];
  const tmp7 = "active" === type && tmp2.cardActive;
  items[0] = tmp7;
  let type1;
  if (status != null) {
    type1 = status.type;
  }
  items[1] = "expiring" === type1 && tmp2.cardExpiring;
  let type2;
  if (status != null) {
    type2 = status.type;
  }
  items[2] = "removing" === type2 && tmp2.cardRemoving;
  items[3] = style;
  return <tmp4 style={containerStyle}>{null}</tmp4>;
};
