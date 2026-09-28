// Module ID: 10668
// Function ID: 10669
// Name: BadgeRarityPill
// Dependencies: [19, 17, 21, 576, 1376, 10669, 1115, 10671, 4683, 10673, 10675, 4836, 4685, 4767, 4832, 2]
// Exports: default

// Module 10668 (BadgeRarityPill)
import nativeDefault from "native" /* 576 */;
import BadgeRarity from "BadgeRarity" /* 1376 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = 0.24;
const createStyles = fn(4836);
let obj2 = { pill: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, minHeight: 20, borderRadius: nativeDefault.radii.round, borderWidth: 1 }, label: { textTransform: "uppercase" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeRarityPill.tsx");

export default function BadgeRarityPill(rarity) {
  rarity = rarity.rarity;
  const tmp = closure_7();
  const isThemeLightResult = shared.isThemeLight(useThemeDefault());
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (BadgeRarity.BadgeRarity.COMMON === rarity) {
    const obj2 = { Icon: tmp2(10669).ExperimentalCommonIcon, label: null, background: null, border: null, text: null };
    const intl3 = tmp2(1115).intl;
    obj2.label = intl3.string(tmp2(1115).t.L0K5ci);
    ({ OPACITY_24: obj6.background, NEUTRAL_35: obj6.border } = unsafe_rawColors);
    obj2.text = isThemeLightResult ? unsafe_rawColors.NEUTRAL_45 : unsafe_rawColors.NEUTRAL_15;
  } else {
    if (tmp2(1376).BadgeRarity.RARE === rarity) {
      const obj3 = { Icon: tmp2(10671).ExperimentalRareIcon, label: null, background: null, border: null, text: null };
      const intl2 = tmp2(1115).intl;
      obj3.label = intl2.string(tmp2(1115).t["sTx/5z"]);
      obj3.background = tmp2(4683).hexOpacityToRgba(unsafe_rawColors.ILLO_BLUE_40, c6);
      obj3.border = unsafe_rawColors.ILLO_BLUE_40;
      obj3.text = isThemeLightResult ? unsafe_rawColors.ILLO_BLUE_50 : unsafe_rawColors.ILLO_BLUE_30;
      let tmp5 = obj3;
      const tmp2Result = tmp2(4683);
    } else if (tmp2(1376).BadgeRarity.EPIC === rarity) {
      const obj4 = { Icon: tmp2(10673).ExperimentalEpicIcon, label: null, background: null, border: null, text: null };
      const intl = tmp2(1115).intl;
      obj4.label = intl.string(tmp2(1115).t.RD8RiN);
      obj4.background = tmp2(4683).hexOpacityToRgba(unsafe_rawColors.ILLO_PURPLE_40, c6);
      obj4.border = unsafe_rawColors.ILLO_PURPLE_40;
      obj4.text = isThemeLightResult ? unsafe_rawColors.ILLO_PURPLE_50 : unsafe_rawColors.ILLO_PURPLE_30;
      tmp5 = obj4;
      const tmp2Result3 = tmp2(4683);
    } else {
      tmp5 = null;
      if (tmp2(1376).BadgeRarity.MYTHIC === rarity) {
        const obj5 = { Icon: tmp2(10675).ExperimentalMythicIcon, label: null, background: null, border: null, text: null };
        const intl4 = tmp2(1115).intl;
        obj5.label = intl4.string(tmp2(1115).t.vqc1ol);
        obj5.background = tmp2(4683).hexOpacityToRgba(unsafe_rawColors.ILLO_ORANGE_40, c6);
        obj5.border = unsafe_rawColors.ILLO_ORANGE_40;
        obj5.text = isThemeLightResult ? unsafe_rawColors.ILLO_ORANGE_50 : unsafe_rawColors.ILLO_ORANGE_30;
        tmp5 = obj5;
        const tmp2Result4 = tmp2(4683);
      }
    }
    if (null == tmp5) {
      return null;
    } else {
      const text = tmp5.text;
      const obj7 = { style: null, children: null };
      const items = [tmp.pill, ];
      ({ background: obj10.backgroundColor, border: obj10.borderColor } = tmp5);
      items[1] = { backgroundColor: null, borderColor: null };
      obj7.style = items;
      const obj9 = { size: "xxs", color: text };
      const items1 = [React4(tmp5.Icon, obj9), ];
      const obj11 = { variant: "text-xs/bold", color: "none", lineClamp: 1, style: null, children: null };
      const items2 = [tmp.label, ];
      const obj12 = { color: text };
      items2[1] = obj12;
      obj11.style = items2;
      obj11.children = tmp5.label;
      items1[1] = React4(tmp2(4832).Text, obj11);
      obj7.children = items1;
      return hasOwnProperty(View, obj7);
    }
  }
};
