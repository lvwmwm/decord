// Module ID: 12671
// Function ID: 12672
// Name: ForLaterIntro
// Dependencies: [17, 6840, 21, 5092, 587, 558, 576, 9681, 12672, 12676, 1126, 5088, 12680, 6156, 12654, 5051, 6905, 2]

// Module 12671 (ForLaterIntro)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import ClockIcon from "ClockIcon" /* 5051 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6840 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9681 */;
import BookmarkIcon from "BookmarkIcon" /* 12654 */;
import _modDef12680 from "module_12680" /* 12680 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
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
let size1;
let tmp8;
const ChevronSmallRightIcon2 = tmp8(6905);
({ ScrollView: c3, View: closure_4 } = react_native);
const ACTION_SHEET_BORDER_RADIUS = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, pageContainer: obj2, container: { alignItems: "center" }, upsellImage: obj3, textContainer: obj4, text: { textAlign: "center" }, demo: obj5, messages: obj6, avatar: size, messageLines: obj7, sheet: obj8, grabber: size1, sheetRow: obj9, sheetRowHighlighted: obj10, sheetRowLabel: { flex: 1 } };
obj2 = { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, marginTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round };
obj7 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj8 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, marginInline: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8 };
size1 = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, height: 4, marginVertical: nativeDefault.space.PX_8, width: 36 };
obj9 = { alignItems: "center", borderRadius: nativeDefault.radii.sm, flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterIntro(type) {
  let BookmarksSpotIllustration;
  let container;
  let items;
  let items1;
  let pageContainer;
  let scrollView;
  let text;
  let textContainer;
  let tmp6;
  const obj = react;
  const cResult = obj.c(30);
  type = type.type;
  const tmp4 = closure_7();
  const tmp5 = type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  if (tmp5) {
    BookmarksSpotIllustration = tmp(12672).ReminderWatchSpotIllustration;
  } else {
    BookmarksSpotIllustration = tmp(12676).BookmarksSpotIllustration;
  }
  ({ scrollView, pageContainer, container } = tmp4);
  if (cResult[0] !== BookmarksSpotIllustration) {
    const tmp8 = hasOwnProperty(BookmarksSpotIllustration, { width: 180, height: 120, accessible: false });
    cResult[0] = BookmarksSpotIllustration;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.upsellImage) {
    let tmp9;
    let tmp11;
    if (cResult[3] === tmp6) {
      tmp9 = cResult[4];
    }
    ({ textContainer, text } = tmp4);
    if (cResult[5] !== tmp5) {
      const intl = tmp(1126).intl;
      const string = intl.string;
      const t = tmp(1126).t;
      const stringResult = string(tmp5 ? t["5Iw19e"] : t["93WOd1"]);
      cResult[5] = tmp5;
      cResult[6] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.text) {
      let tmp13;
      let tmp16;
      if (cResult[8] === tmp11) {
        tmp13 = cResult[9];
      }
      const text2 = tmp4.text;
      if (cResult[10] !== tmp5) {
        const intl2 = tmp(1126).intl;
        const format = intl2.format;
        const t2 = tmp(1126).t;
        const tmp17 = tmp5 ? t2.YI4UjI : t2["5TSj/g"];
        const intl3 = tmp(1126).intl;
        const string2 = intl3.string;
        const t3 = tmp(1126).t;
        const obj2 = { itemName: string2(tmp5 ? t3.mJ3P0N : t3.tpxJto) };
        const formatResult = format(tmp17, obj2);
        cResult[10] = tmp5;
        cResult[11] = formatResult;
        tmp16 = formatResult;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] === tmp4.text) {
        let tmp19;
        if (cResult[13] === tmp16) {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp4.textContainer) {
          if (cResult[16] === tmp19) {
            let tmp22;
            let tmp26;
            if (cResult[17] === tmp13) {
              tmp22 = cResult[18];
            }
            if (cResult[19] !== tmp5) {
              const obj3 = { isReminder: tmp5 };
              const tmp29 = hasOwnProperty(closure_8, obj3);
              cResult[19] = tmp5;
              cResult[20] = tmp29;
              tmp26 = tmp29;
            } else {
              tmp26 = cResult[20];
            }
            if (cResult[21] === tmp4.container) {
              if (cResult[22] === tmp22) {
                if (cResult[23] === tmp26) {
                  let tmp30;
                  if (cResult[24] === tmp9) {
                    tmp30 = cResult[25];
                  }
                  if (cResult[26] === tmp4.pageContainer) {
                    if (cResult[27] === tmp4.scrollView) {
                      let tmp34;
                      if (cResult[28] === tmp30) {
                        tmp34 = cResult[29];
                      }
                      return tmp34;
                    }
                  }
                  const obj4 = { style: scrollView, contentContainerStyle: pageContainer, children: tmp30 };
                  const tmp37 = hasOwnProperty(_false, obj4);
                  cResult[26] = tmp4.pageContainer;
                  cResult[27] = tmp4.scrollView;
                  cResult[28] = tmp30;
                  cResult[29] = tmp37;
                  tmp34 = tmp37;
                }
              }
            }
            const obj5 = { style: container, children: items };
            items = [tmp9, tmp22, tmp26];
            const tmp33 = metroRequire(React3, obj5);
            cResult[21] = tmp4.container;
            cResult[22] = tmp22;
            cResult[23] = tmp26;
            cResult[24] = tmp9;
            cResult[25] = tmp33;
            tmp30 = tmp33;
          }
        }
        const obj6 = { style: textContainer, children: items1 };
        items1 = [tmp13, tmp19];
        const tmp25 = metroRequire(React3, obj6);
        cResult[15] = tmp4.textContainer;
        cResult[16] = tmp19;
        cResult[17] = tmp13;
        cResult[18] = tmp25;
        tmp22 = tmp25;
      }
      const obj7 = { variant: "text-sm/medium", color: "text-default", style: text2, includeFontPadding: true, children: tmp16 };
      const tmp21 = hasOwnProperty(Text_Text.Text, obj7);
      cResult[12] = tmp4.text;
      cResult[13] = tmp16;
      cResult[14] = tmp21;
      tmp19 = tmp21;
    }
    const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: text, children: tmp11 };
    const tmp15 = hasOwnProperty(Text_Text.Heading, obj8);
    cResult[7] = tmp4.text;
    cResult[8] = tmp11;
    cResult[9] = tmp15;
    tmp13 = tmp15;
  }
  const obj9 = { style: tmp4.upsellImage, children: tmp6 };
  const tmp10 = hasOwnProperty(React3, obj9);
  cResult[2] = tmp4.upsellImage;
  cResult[3] = tmp6;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function ForLaterIntro(type) {
  let BookmarksSpotIllustration;
  let format;
  let items;
  let items1;
  let obj2;
  let obj7;
  let string;
  let t;
  let tmp9;
  type = type.type;
  const tmp = closure_7();
  const tmp4 = type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  if (tmp4) {
    BookmarksSpotIllustration = tmp2(12672).ReminderWatchSpotIllustration;
  } else {
    BookmarksSpotIllustration = tmp2(12676).BookmarksSpotIllustration;
  }
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: metroRequire(React3, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, , ];
  const obj3 = { style: tmp.upsellImage, children: hasOwnProperty(BookmarksSpotIllustration, { width: 180, height: 120, accessible: false }) };
  items[0] = hasOwnProperty(React3, obj3);
  const obj4 = { style: tmp.textContainer, children: items1 };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: string(tmp4 ? t["5Iw19e"] : t["93WOd1"]) };
  const Heading = tmp2(5088).Heading;
  const intl = tmp2(1126).intl;
  string = intl.string;
  t = tmp2(1126).t;
  items1 = [hasOwnProperty(Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: format(tmp9, obj7) };
  const Text = tmp2(5088).Text;
  const intl2 = tmp2(1126).intl;
  format = intl2.format;
  const t2 = tmp2(1126).t;
  tmp9 = tmp4 ? t2.YI4UjI : t2["5TSj/g"];
  const intl3 = tmp2(1126).intl;
  const string2 = intl3.string;
  const t3 = tmp2(1126).t;
  obj7 = { itemName: string2(tmp4 ? t3.mJ3P0N : t3.tpxJto) };
  items1[1] = hasOwnProperty(Text, obj6);
  items[1] = metroRequire(React3, obj4);
  items[2] = hasOwnProperty(closure_8, { isReminder: tmp4 });
  return hasOwnProperty(_false, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function IntroDemo(isReminder) {
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let tmp11;
  let tmp14;
  let tmp17;
  let tmp20;
  let tmp23;
  let tmp7;
  const obj = react;
  const cResult = obj.c(30);
  isReminder = isReminder.isReminder;
  const tmp4 = closure_7();
  const demo = tmp4.demo;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef12680 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.avatar) {
    const obj3 = { source: first, style: tmp4.avatar };
    const tmp10 = hasOwnProperty(FastImageDefault, obj3);
    cResult[1] = tmp4.avatar;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl7.t.cqpybK) };
    const Text = tmp(5088).Text;
    intl = tmp(1126).intl;
    const tmp13 = hasOwnProperty(Text, obj4);
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(intl7.t["h+KPxy"]) };
    const Text2 = tmp(5088).Text;
    intl2 = tmp(1126).intl;
    const tmp16 = hasOwnProperty(Text2, obj5);
    cResult[4] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { variant: "text-sm/normal", color: "text-default", children: intl3.string(intl7.t["63EVpI"]) };
    const Text3 = tmp(5088).Text;
    intl3 = tmp(1126).intl;
    const tmp19 = hasOwnProperty(Text3, obj6);
    cResult[5] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { variant: "text-sm/normal", color: "text-default", children: intl4.string(intl7.t["KT/TDX"]) };
    const Text4 = tmp(5088).Text;
    intl4 = tmp(1126).intl;
    const tmp22 = hasOwnProperty(Text4, obj7);
    cResult[6] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] !== tmp4.messageLines) {
    const obj8 = { style: tmp4.messageLines, children: items };
    items = [tmp11, tmp14, tmp17, tmp20];
    const tmp26 = metroRequire(React3, obj8);
    cResult[7] = tmp4.messageLines;
    cResult[8] = tmp26;
    tmp23 = tmp26;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] === tmp4.messages) {
    if (cResult[10] === tmp7) {
      let tmp27;
      let tmp29;
      let tmp33;
      let tmp36;
      let tmp40;
      let tmp42;
      if (cResult[11] === tmp23) {
        tmp27 = cResult[12];
      }
      const sheet = tmp4.sheet;
      if (cResult[13] !== tmp4.grabber) {
        const obj9 = { style: tmp4.grabber };
        const tmp32 = hasOwnProperty(React3, obj9);
        cResult[13] = tmp4.grabber;
        cResult[14] = tmp32;
        tmp29 = tmp32;
      } else {
        tmp29 = cResult[14];
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult = intl5.string(intl7.t.tpxJto);
        cResult[15] = stringResult;
        tmp33 = stringResult;
      } else {
        tmp33 = cResult[15];
      }
      if (cResult[16] !== !isReminder) {
        const obj10 = { icon: BookmarkIcon.BookmarkIcon, label: tmp33, highlighted: !isReminder };
        const tmp39 = hasOwnProperty(closure_9, obj10);
        cResult[16] = !isReminder;
        cResult[17] = tmp39;
        tmp36 = tmp39;
      } else {
        tmp36 = cResult[17];
      }
      const _Symbol2 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = tmp(1126).intl;
        const stringResult1 = intl6.string(intl7.t.mJ3P0N);
        cResult[18] = stringResult1;
        tmp40 = stringResult1;
      } else {
        tmp40 = cResult[18];
      }
      if (cResult[19] !== isReminder) {
        const obj11 = { icon: ClockIcon.ClockIcon, label: tmp40, highlighted: isReminder, hasArrow: true };
        const tmp45 = hasOwnProperty(closure_9, obj11);
        cResult[19] = isReminder;
        cResult[20] = tmp45;
        tmp42 = tmp45;
      } else {
        tmp42 = cResult[20];
      }
      if (cResult[21] === tmp4.sheet) {
        if (cResult[22] === tmp29) {
          if (cResult[23] === tmp36) {
            let tmp46;
            if (cResult[24] === tmp42) {
              tmp46 = cResult[25];
            }
            if (cResult[26] === tmp4.demo) {
              if (cResult[27] === tmp46) {
                let tmp50;
                if (cResult[28] === tmp27) {
                  tmp50 = cResult[29];
                }
                return tmp50;
              }
            }
            const obj12 = { style: demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items1 };
            items1 = [tmp27, tmp46];
            const tmp53 = metroRequire(React3, obj12);
            cResult[26] = tmp4.demo;
            cResult[27] = tmp46;
            cResult[28] = tmp27;
            cResult[29] = tmp53;
            tmp50 = tmp53;
          }
        }
      }
      const obj13 = { style: sheet, children: items2 };
      items2 = [tmp29, tmp36, tmp42];
      const tmp49 = metroRequire(React3, obj13);
      cResult[21] = tmp4.sheet;
      cResult[22] = tmp29;
      cResult[23] = tmp36;
      cResult[24] = tmp42;
      cResult[25] = tmp49;
      tmp46 = tmp49;
    }
  }
  const obj14 = { style: tmp4.messages, children: items3 };
  items3 = [tmp7, tmp23];
  const tmp28 = metroRequire(React3, obj14);
  cResult[9] = tmp4.messages;
  cResult[10] = tmp7;
  cResult[11] = tmp23;
  cResult[12] = tmp28;
  tmp27 = tmp28;
}) : (function IntroDemo(isReminder) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  isReminder = isReminder.isReminder;
  const tmp = closure_7();
  const obj = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items2 };
  const obj2 = { style: tmp.messages, children: items };
  const obj3 = { source: obj4, style: tmp.avatar };
  obj4 = { uri: _modDef12680 };
  const tmp2 = FastImageDefault;
  items = [hasOwnProperty(tmp2, obj3), ];
  const obj5 = { style: tmp.messageLines, children: items1 };
  const obj6 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(intl7.t.cqpybK) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items1 = [hasOwnProperty(Text, obj6), , , ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(intl7.t["h+KPxy"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl7.intl;
  items1[1] = hasOwnProperty(Text2, obj7);
  const obj8 = { variant: "text-sm/normal", color: "text-default", children: intl3.string(intl7.t["63EVpI"]) };
  const Text3 = Text_Text.Text;
  intl3 = intl7.intl;
  items1[2] = hasOwnProperty(Text3, obj8);
  const obj9 = { variant: "text-sm/normal", color: "text-default", children: intl4.string(intl7.t["KT/TDX"]) };
  const Text4 = Text_Text.Text;
  intl4 = intl7.intl;
  items1[3] = hasOwnProperty(Text4, obj9);
  items[1] = metroRequire(React3, obj5);
  items2 = [metroRequire(React3, obj2), ];
  const obj10 = { style: tmp.sheet, children: items3 };
  items3 = [, , ];
  const obj11 = { style: tmp.grabber };
  items3[0] = hasOwnProperty(React3, obj11);
  const obj12 = { icon: BookmarkIcon.BookmarkIcon, label: intl5.string(intl7.t.tpxJto), highlighted: !isReminder };
  intl5 = intl7.intl;
  items3[1] = hasOwnProperty(closure_9, obj12);
  const obj13 = { icon: ClockIcon.ClockIcon, label: intl6.string(intl7.t.mJ3P0N), highlighted: isReminder, hasArrow: true };
  intl6 = intl7.intl;
  items3[2] = hasOwnProperty(closure_9, obj13);
  items2[1] = metroRequire(React3, obj10);
  return metroRequire(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function SheetRow(highlighted) {
  let hasArrow;
  let icon;
  let items;
  let label;
  const obj = react;
  const cResult = obj.c(15);
  ({ icon, label, hasArrow } = highlighted);
  let tmp4 = undefined !== hasArrow;
  highlighted = highlighted.highlighted;
  if (tmp4) {
    tmp4 = hasArrow;
  }
  const tmp5 = closure_7();
  let sheetRowHighlighted = null;
  if (highlighted) {
    sheetRowHighlighted = tmp5.sheetRowHighlighted;
  }
  if (cResult[0] === tmp5.sheetRow) {
    let tmp7;
    let tmp8;
    if (cResult[1] === sheetRowHighlighted) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== icon) {
      const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
      const tmp11 = hasOwnProperty(icon, obj2);
      cResult[3] = icon;
      cResult[4] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === label) {
      let tmp12;
      let tmp15;
      if (cResult[6] === tmp5.sheetRowLabel) {
        tmp12 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        let tmp16 = null;
        if (tmp4) {
          const obj3 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
          const ChevronSmallRightIcon = tmp(6905).ChevronSmallRightIcon;
          tmp16 = hasOwnProperty(ChevronSmallRightIcon, obj3);
        }
        cResult[8] = tmp4;
        cResult[9] = tmp16;
        tmp15 = tmp16;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp7) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp12) {
            let tmp19;
            if (cResult[13] === tmp15) {
              tmp19 = cResult[14];
            }
            return tmp19;
          }
        }
      }
      const obj4 = { style: tmp7, children: items };
      items = [tmp8, tmp12, tmp15];
      const tmp22 = metroRequire(React3, obj4);
      cResult[10] = tmp7;
      cResult[11] = tmp8;
      cResult[12] = tmp12;
      cResult[13] = tmp15;
      cResult[14] = tmp22;
      tmp19 = tmp22;
    }
    const obj5 = { variant: "text-sm/medium", color: "text-default", style: tmp5.sheetRowLabel, children: label };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[5] = label;
    cResult[6] = tmp5.sheetRowLabel;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
  const items1 = [tmp5.sheetRow, sheetRowHighlighted];
  cResult[0] = tmp5.sheetRow;
  cResult[1] = sheetRowHighlighted;
  cResult[2] = items1;
  tmp7 = items1;
}) : (function SheetRow(hasArrow) {
  let highlighted;
  let icon;
  let items1;
  let label;
  let flag = hasArrow.hasArrow;
  ({ icon, label, highlighted } = hasArrow);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  const items = [tmp.sheetRow, ];
  let sheetRowHighlighted = null;
  const tmp2 = metroRequire;
  const tmp3 = React3;
  if (highlighted) {
    sheetRowHighlighted = tmp.sheetRowHighlighted;
  }
  const obj = { style: items, children: items1 };
  items[1] = sheetRowHighlighted;
  items1 = [, , ];
  const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  items1[0] = hasOwnProperty(icon, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp.sheetRowLabel, children: label };
  items1[1] = hasOwnProperty(Text_Text.Text, obj3);
  let tmp5Result = null;
  const tmp5 = hasOwnProperty;
  if (flag) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    const ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
    tmp5Result = tmp5(ChevronSmallRightIcon, obj4);
  }
  items1[2] = tmp5Result;
  return tmp2(tmp3, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterIntro.tsx");

export default tmp5;
