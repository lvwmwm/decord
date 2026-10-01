// Module ID: 10668
// Function ID: 10669
// Name: BadgeRarityPill
// Dependencies: [19, 17, 21, 576, 1376, 10669, 1115, 10671, 4683, 10673, 10675, 4836, 4685, 4767, 4832, 2]
// Exports: default

// Module 10668 (BadgeRarityPill)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import BadgeRarity from "BadgeRarity" /* 1376 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import ExperimentalCommonIcon from "ExperimentalCommonIcon" /* 10669 */;
import ExperimentalRareIcon from "ExperimentalRareIcon" /* 10671 */;
import ExperimentalEpicIcon from "ExperimentalEpicIcon" /* 10673 */;
import ExperimentalMythicIcon from "ExperimentalMythicIcon" /* 10675 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = 0.24;
let obj = { pill: obj2, label: { textTransform: "uppercase" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, minHeight: 20, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/badges/native/BadgeRarityPill.tsx");

export default function BadgeRarityPill(rarity) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let tmp2Result;
  let tmp2Result3;
  let tmp2Result4;
  let tmp5;
  rarity = rarity.rarity;
  const tmp = closure_7();
  const obj = shared;
  const isThemeLightResult = obj.isThemeLight(useThemeDefault());
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (BadgeRarity.BadgeRarity.COMMON === rarity) {
    const obj2 = { Icon: ExperimentalCommonIcon.ExperimentalCommonIcon, label: intl3.string(intl5.t.L0K5ci), background: null, border: null, text: isThemeLightResult ? unsafe_rawColors.NEUTRAL_45 : unsafe_rawColors.NEUTRAL_15 };
    intl3 = tmp2(1115).intl;
    ({ OPACITY_24: obj6.background, NEUTRAL_35: obj6.border } = unsafe_rawColors);
    tmp5 = obj2;
  } else if (BadgeRarity.BadgeRarity.RARE === rarity) {
    const obj3 = { Icon: ExperimentalRareIcon.ExperimentalRareIcon, label: intl2.string(intl5.t["sTx/5z"]), background: tmp2Result.hexOpacityToRgba(unsafe_rawColors.ILLO_BLUE_40, c6), border: unsafe_rawColors.ILLO_BLUE_40, text: isThemeLightResult ? unsafe_rawColors.ILLO_BLUE_50 : unsafe_rawColors.ILLO_BLUE_30 };
    intl2 = tmp2(1115).intl;
    tmp5 = obj3;
    tmp2Result = ColorUtils;
  } else if (BadgeRarity.BadgeRarity.EPIC === rarity) {
    const obj4 = { Icon: ExperimentalEpicIcon.ExperimentalEpicIcon, label: intl.string(intl5.t.RD8RiN), background: tmp2Result3.hexOpacityToRgba(unsafe_rawColors.ILLO_PURPLE_40, c6), border: unsafe_rawColors.ILLO_PURPLE_40, text: isThemeLightResult ? unsafe_rawColors.ILLO_PURPLE_50 : unsafe_rawColors.ILLO_PURPLE_30 };
    intl = tmp2(1115).intl;
    tmp5 = obj4;
    tmp2Result3 = ColorUtils;
  } else {
    tmp5 = null;
    if (BadgeRarity.BadgeRarity.MYTHIC === rarity) {
      const obj5 = { Icon: ExperimentalMythicIcon.ExperimentalMythicIcon, label: intl4.string(intl5.t.vqc1ol), background: tmp2Result4.hexOpacityToRgba(unsafe_rawColors.ILLO_ORANGE_40, c6), border: unsafe_rawColors.ILLO_ORANGE_40, text: isThemeLightResult ? unsafe_rawColors.ILLO_ORANGE_50 : unsafe_rawColors.ILLO_ORANGE_30 };
      intl4 = tmp2(1115).intl;
      tmp5 = obj5;
      tmp2Result4 = ColorUtils;
    }
  }
  if (null == tmp5) {
    return null;
  } else {
    const text = tmp5.text;
    const obj7 = { style: items, children: items1 };
    items = [tmp.pill, ];
    const obj8 = { backgroundColor: null, borderColor: null };
    ({ background: obj10.backgroundColor, border: obj10.borderColor } = tmp5);
    items[1] = obj8;
    const label = tmp5.label;
    const obj9 = { size: "xxs", color: text };
    items1 = [React3(tmp5.Icon, obj9), ];
    const obj11 = { variant: "text-xs/bold", color: "none", lineClamp: 1, style: items2, children: label };
    items2 = [tmp.label, ];
    const obj12 = { color: text };
    items2[1] = obj12;
    items1[1] = React3(Text_Text.Text, obj11);
    return hasOwnProperty(View, obj7);
  }
};
