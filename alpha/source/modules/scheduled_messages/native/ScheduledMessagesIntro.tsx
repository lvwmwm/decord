// Module ID: 12829
// Function ID: 12830
// Name: ScheduledMessagesIntro
// Dependencies: [17, 21, 5091, 587, 558, 576, 12103, 1126, 5087, 9998, 11873, 10275, 2]

// Module 12829 (ScheduledMessagesIntro)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import AttachmentIcon from "AttachmentIcon" /* 9998 */;
import PlusLargeIcon2 from "PlusLargeIcon" /* 10275 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 11873 */;
import ScheduleMessageSpotIllustration from "ScheduleMessageSpotIllustration" /* 12103 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, pageContainer: obj2, container: { alignItems: "center" }, upsellImage: obj3, textContainer: obj4, text: { textAlign: "center" }, demo: obj5, menu: obj6, menuRow: obj7, menuRowHighlighted: obj8, menuDivider: obj9, chatInput: obj10, plusButton: size };
obj2 = { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj6 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj7 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj9 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj10 = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
size = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND, borderRadius: nativeDefault.radii.round, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, justifyContent: "center", width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScheduledMessagesIntro() {
  let container;
  let first;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let pageContainer;
  let scrollView;
  let text;
  let textContainer;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp19;
  let tmp8;
  const obj = react;
  const cResult = obj.c(40);
  const tmp4 = closure_7();
  ({ scrollView, pageContainer, container } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = hasOwnProperty(ScheduleMessageSpotIllustration.ScheduleMessageSpotIllustration, { width: 180, height: 120, accessible: false });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.upsellImage) {
    const obj2 = { style: tmp4.upsellImage, children: first };
    const tmp11 = hasOwnProperty(React3, obj2);
    cResult[1] = tmp4.upsellImage;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  ({ textContainer, text } = tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl6.t["C/j9NE"]);
    cResult[3] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp4.text) {
    const obj3 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: text, children: tmp12 };
    const tmp16 = hasOwnProperty(Text_Text.Heading, obj3);
    cResult[4] = tmp4.text;
    cResult[5] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  const text2 = tmp4.text;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const formatResult = intl2.format(intl6.t.PqmI8J, {});
    cResult[6] = formatResult;
    tmp17 = formatResult;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] !== tmp4.text) {
    const obj4 = { variant: "text-sm/medium", color: "text-default", style: text2, includeFontPadding: true, children: tmp17 };
    const tmp21 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[7] = tmp4.text;
    cResult[8] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] === tmp4.textContainer) {
    if (cResult[10] === tmp19) {
      let tmp22;
      let tmp24;
      let tmp28;
      let tmp32;
      if (cResult[11] === tmp14) {
        tmp22 = cResult[12];
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { icon: AttachmentIcon.AttachmentIcon, label: intl3.string(intl6.t["8Hvr3+"]), highlighted: false };
        intl3 = tmp(1126).intl;
        const tmp27 = hasOwnProperty(closure_8, obj5);
        cResult[13] = tmp27;
        tmp24 = tmp27;
      } else {
        tmp24 = cResult[13];
      }
      if (cResult[14] !== tmp4.menuDivider) {
        const obj6 = { style: tmp4.menuDivider };
        const tmp31 = hasOwnProperty(React3, obj6);
        cResult[14] = tmp4.menuDivider;
        cResult[15] = tmp31;
        tmp28 = tmp31;
      } else {
        tmp28 = cResult[15];
      }
      const _Symbol2 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: intl4.string(intl6.t["3+ii4F"]), highlighted: true };
        intl4 = tmp(1126).intl;
        const tmp35 = hasOwnProperty(closure_8, obj7);
        cResult[16] = tmp35;
        tmp32 = tmp35;
      } else {
        tmp32 = cResult[16];
      }
      if (cResult[17] === tmp4.menu) {
        let tmp36;
        let tmp40;
        let tmp44;
        let tmp48;
        if (cResult[18] === tmp28) {
          tmp36 = cResult[19];
        }
        const _Symbol3 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
          const PlusLargeIcon = tmp(10275).PlusLargeIcon;
          const tmp43 = hasOwnProperty(PlusLargeIcon, obj8);
          cResult[20] = tmp43;
          tmp40 = tmp43;
        } else {
          tmp40 = cResult[20];
        }
        if (cResult[21] !== tmp4.plusButton) {
          const obj9 = { style: tmp4.plusButton, children: tmp40 };
          const tmp47 = hasOwnProperty(React3, obj9);
          cResult[21] = tmp4.plusButton;
          cResult[22] = tmp47;
          tmp44 = tmp47;
        } else {
          tmp44 = cResult[22];
        }
        const _Symbol4 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(intl6.t.fxxYiB) };
          const Text = tmp(5087).Text;
          intl5 = tmp(1126).intl;
          const tmp50 = hasOwnProperty(Text, obj10);
          cResult[23] = tmp50;
          tmp48 = tmp50;
        } else {
          tmp48 = cResult[23];
        }
        if (cResult[24] === tmp4.chatInput) {
          let tmp51;
          if (cResult[25] === tmp44) {
            tmp51 = cResult[26];
          }
          if (cResult[27] === tmp4.demo) {
            if (cResult[28] === tmp36) {
              let tmp55;
              if (cResult[29] === tmp51) {
                tmp55 = cResult[30];
              }
              if (cResult[31] === tmp4.container) {
                if (cResult[32] === tmp22) {
                  if (cResult[33] === tmp55) {
                    let tmp59;
                    if (cResult[34] === tmp8) {
                      tmp59 = cResult[35];
                    }
                    if (cResult[36] === tmp4.pageContainer) {
                      if (cResult[37] === tmp4.scrollView) {
                        let tmp63;
                        if (cResult[38] === tmp59) {
                          tmp63 = cResult[39];
                        }
                        return tmp63;
                      }
                    }
                    const obj11 = { style: scrollView, contentContainerStyle: pageContainer, children: tmp59 };
                    const tmp66 = hasOwnProperty(_false, obj11);
                    cResult[36] = tmp4.pageContainer;
                    cResult[37] = tmp4.scrollView;
                    cResult[38] = tmp59;
                    cResult[39] = tmp66;
                    tmp63 = tmp66;
                  }
                }
              }
              const obj12 = { style: container, children: items };
              items = [tmp8, tmp22, tmp55];
              const tmp62 = metroRequire(React3, obj12);
              cResult[31] = tmp4.container;
              cResult[32] = tmp22;
              cResult[33] = tmp55;
              cResult[34] = tmp8;
              cResult[35] = tmp62;
              tmp59 = tmp62;
            }
          }
          const obj13 = { style: tmp4.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items1 };
          items1 = [tmp36, tmp51];
          const tmp58 = metroRequire(React3, obj13);
          cResult[27] = tmp4.demo;
          cResult[28] = tmp36;
          cResult[29] = tmp51;
          cResult[30] = tmp58;
          tmp55 = tmp58;
        }
        const obj14 = { style: tmp4.chatInput, children: items2 };
        items2 = [tmp44, tmp48];
        const tmp54 = metroRequire(React3, obj14);
        cResult[24] = tmp4.chatInput;
        cResult[25] = tmp44;
        cResult[26] = tmp54;
        tmp51 = tmp54;
      }
      const obj15 = { style: tmp4.menu, children: items3 };
      items3 = [tmp24, tmp28, tmp32];
      const tmp39 = metroRequire(React3, obj15);
      cResult[17] = tmp4.menu;
      cResult[18] = tmp28;
      cResult[19] = tmp39;
      tmp36 = tmp39;
    }
  }
  const obj16 = { style: textContainer, children: items4 };
  items4 = [tmp14, tmp19];
  const tmp23 = metroRequire(React3, obj16);
  cResult[9] = tmp4.textContainer;
  cResult[10] = tmp19;
  cResult[11] = tmp14;
  cResult[12] = tmp23;
  tmp22 = tmp23;
}) : (function ScheduledMessagesIntro() {
  let PlusLargeIcon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj14;
  let obj2;
  const tmp = closure_7();
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: metroRequire(React3, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, , ];
  const obj3 = { style: tmp.upsellImage, children: hasOwnProperty(ScheduleMessageSpotIllustration.ScheduleMessageSpotIllustration, { width: 180, height: 120, accessible: false }) };
  items[0] = hasOwnProperty(React3, obj3);
  const obj4 = { style: tmp.textContainer, children: items1 };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(intl6.t["C/j9NE"]) };
  const Heading = Text_Text.Heading;
  intl = intl6.intl;
  items1 = [hasOwnProperty(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: intl2.format(intl6.t.PqmI8J, {}) };
  const Text = Text_Text.Text;
  intl2 = intl6.intl;
  items1[1] = hasOwnProperty(Text, obj6);
  items[1] = metroRequire(React3, obj4);
  const obj7 = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items3 };
  const obj8 = { style: tmp.menu, children: items2 };
  const obj9 = { icon: AttachmentIcon.AttachmentIcon, label: intl3.string(intl6.t["8Hvr3+"]), highlighted: false };
  intl3 = intl6.intl;
  items2 = [hasOwnProperty(closure_8, obj9), , ];
  const obj10 = { style: tmp.menuDivider };
  items2[1] = hasOwnProperty(React3, obj10);
  const obj11 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: intl4.string(intl6.t["3+ii4F"]), highlighted: true };
  intl4 = intl6.intl;
  items2[2] = hasOwnProperty(closure_8, obj11);
  items3 = [metroRequire(React3, obj8), ];
  const obj12 = { style: tmp.chatInput, children: items4 };
  const obj13 = { style: tmp.plusButton, children: hasOwnProperty(PlusLargeIcon, obj14) };
  obj14 = { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT };
  PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
  items4 = [hasOwnProperty(React3, obj13), ];
  const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(intl6.t.fxxYiB) };
  const Text2 = Text_Text.Text;
  intl5 = intl6.intl;
  items4[1] = hasOwnProperty(Text2, obj15);
  items3[1] = metroRequire(React3, obj12);
  items[2] = metroRequire(React3, obj7);
  return hasOwnProperty(_false, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function MenuRow(highlighted) {
  let icon;
  let items;
  let label;
  const obj = react;
  const cResult = obj.c(11);
  ({ icon, label } = highlighted);
  highlighted = highlighted.highlighted;
  const tmp4 = closure_7();
  let menuRowHighlighted = null;
  if (highlighted) {
    menuRowHighlighted = tmp4.menuRowHighlighted;
  }
  if (cResult[0] === tmp4.menuRow) {
    let tmp6;
    let tmp7;
    let tmp11;
    if (cResult[1] === menuRowHighlighted) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== icon) {
      const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
      const tmp10 = hasOwnProperty(icon, obj2);
      cResult[3] = icon;
      cResult[4] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== label) {
      const obj3 = { variant: "text-sm/medium", color: "text-default", children: label };
      const tmp13 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[5] = label;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === tmp7) {
        let tmp14;
        if (cResult[9] === tmp11) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
    const obj4 = { style: tmp6, children: items };
    items = [tmp7, tmp11];
    const tmp17 = metroRequire(React3, obj4);
    cResult[7] = tmp6;
    cResult[8] = tmp7;
    cResult[9] = tmp11;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const items1 = [tmp4.menuRow, menuRowHighlighted];
  cResult[0] = tmp4.menuRow;
  cResult[1] = menuRowHighlighted;
  cResult[2] = items1;
  tmp6 = items1;
}) : (function MenuRow(arg0) {
  let highlighted;
  let icon;
  let items1;
  let label;
  ({ icon, label, highlighted } = arg0);
  const tmp = closure_7();
  const items = [tmp.menuRow, ];
  let menuRowHighlighted = null;
  const tmp2 = metroRequire;
  const tmp3 = React3;
  if (highlighted) {
    menuRowHighlighted = tmp.menuRowHighlighted;
  }
  const obj = { style: items, children: items1 };
  items[1] = menuRowHighlighted;
  items1 = [, ];
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
  items1[0] = hasOwnProperty(icon, obj2);
  items1[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label });
  return tmp2(tmp3, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesIntro.tsx");

export default tmp5;
