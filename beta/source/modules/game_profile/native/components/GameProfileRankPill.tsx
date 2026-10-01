// Module ID: 8172
// Function ID: 8173
// Name: GameProfileRankPill
// Dependencies: [19, 17, 21, 4836, 576, 8173, 4832, 1115, 2]
// Exports: default

// Module 8172 (GameProfileRankPill)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import TrophyIcon2 from "TrophyIcon" /* 8173 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: obj2 };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  let compact;
  let items;
  let obj2;
  let rank;
  let str;
  let tmp4;
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: tmp4(View, obj2) };
  obj2 = { style: tmp.gameRankPill, children: items };
  const obj3 = { size: "xxs", color: nativeDefault.colors.BLACK };
  const TrophyIcon = TrophyIcon2.TrophyIcon;
  items = [React3(TrophyIcon, obj3), ];
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl2.t;
  tmp4 = hasOwnProperty;
  if (compact) {
    const obj4 = { rank };
    str = formatToPlainString(t.UA6RoE, obj4);
  } else {
    const obj5 = { rank };
    str = formatToPlainString(t.ehZXlZ, obj5);
  }
  const obj6 = { variant: "text-xs/bold", color: "text-overlay-dark", children: str.toUpperCase() };
  items[1] = React3(Text, obj6);
  return React3(View, obj);
};
