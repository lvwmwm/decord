// Module ID: 11916
// Function ID: 11917
// Name: ConjurePlanSurfaces
// Dependencies: [19, 17, 21, 6947, 8234, 8229, 11917, 9212, 10286, 10409, 11314, 10620, 5092, 587, 558, 576, 5088, 11919, 2]

// Module 11916 (ConjurePlanSurfaces)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8229 */;
import AppsIcon from "AppsIcon" /* 8234 */;
import GameControllerIcon from "GameControllerIcon" /* 9212 */;
import UserCircleIcon from "UserCircleIcon" /* 10286 */;
import ShieldIcon from "ShieldIcon" /* 10409 */;
import SlashBoxIcon from "SlashBoxIcon" /* 10620 */;
import RobotIcon from "RobotIcon" /* 11314 */;
import ActivitiesIcon from "ActivitiesIcon" /* 11917 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {};
obj[ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL] = AppsIcon.AppsIcon;
obj[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = VoiceNormalIcon.VoiceNormalIcon;
obj[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = ActivitiesIcon.ActivitiesIcon;
obj[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = GameControllerIcon.GameControllerIcon;
obj[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = UserCircleIcon.UserCircleIcon;
obj[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = ShieldIcon.ShieldIcon;
obj[ConjureProjectTypes.ConjureSupportedSurface.BOT] = RobotIcon.RobotIcon;
obj[ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS] = SlashBoxIcon.SlashBoxIcon;
const styles = { width: 72, height: 48 };
let createStyles = createStyles_mod;
let obj2 = { single: obj3, singleHeader: obj4, text: obj5, thumb: obj6, thumbSelected: obj7, thumbScale: { position: "absolute", top: 0, left: 0, width: 320, transformOrigin: "left top" }, nav: obj8, rows: obj9, row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm }, rowSelected: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, titleLine: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, titleText: { flexShrink: 1 }, iconTile: size, chips: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 }, chip: { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
obj3 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12 };
obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj6 = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj7 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj8 = { gap: nativeDefault.space.PX_12 };
obj9 = { gap: nativeDefault.space.PX_4 };
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm });
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
({ flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 });
({ paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
let closure_9 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function SurfaceThumb(arg0) {
  let items;
  let preview;
  let selected;
  obj = react2;
  const cResult = obj.c(12);
  ({ preview, selected } = arg0);
  const tmp2 = closure_9();
  if (selected) {
    selected = tmp2.thumbSelected;
  }
  if (cResult[0] === tmp2.thumb) {
    let tmp3;
    let tmp5;
    let tmp7;
    if (cResult[1] === selected) {
      tmp3 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { transform: items };
      items = [{ scale: styles.width / 320 }];
      const obj3 = { scale: styles.width / 320 };
      cResult[3] = obj2;
      tmp5 = obj2;
    } else {
      tmp5 = cResult[3];
    }
    if (cResult[4] !== tmp2.thumbScale) {
      const items1 = [tmp2.thumbScale, tmp5];
      cResult[4] = tmp2.thumbScale;
      cResult[5] = items1;
      tmp7 = items1;
    } else {
      tmp7 = cResult[5];
    }
    if (cResult[6] === preview) {
      let tmp8;
      if (cResult[7] === tmp7) {
        tmp8 = cResult[8];
      }
      if (cResult[9] === tmp3) {
        let tmp12;
        if (cResult[10] === tmp8) {
          tmp12 = cResult[11];
        }
        return tmp12;
      }
      const obj4 = { style: tmp3, pointerEvents: "none", children: tmp8 };
      const tmp15 = hasOwnProperty(React3, obj4);
      cResult[9] = tmp3;
      cResult[10] = tmp8;
      cResult[11] = tmp15;
      tmp12 = tmp15;
    }
    const obj5 = { style: tmp7, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: preview };
    const tmp11 = hasOwnProperty(React3, obj5);
    cResult[6] = preview;
    cResult[7] = tmp7;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  const items2 = [tmp2.thumb, styles, selected];
  cResult[0] = tmp2.thumb;
  cResult[1] = selected;
  cResult[2] = items2;
  tmp3 = items2;
}) : (function SurfaceThumb(selected) {
  let items1;
  let items2;
  let obj2;
  let thumbSelected = selected.selected;
  const preview = selected.preview;
  const tmp = closure_9();
  const items = [tmp.thumb, styles, ];
  const tmp4 = styles;
  if (thumbSelected) {
    thumbSelected = tmp.thumbSelected;
  }
  items[2] = thumbSelected;
  obj = { style: items, pointerEvents: "none", children: hasOwnProperty(React3, obj2) };
  obj2 = { style: items1, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: preview };
  items1 = [tmp.thumbScale, ];
  const obj3 = { transform: items2 };
  items2 = [];
  const obj4 = { scale: tmp4.width / 320 };
  items2[0] = obj4;
  items1[1] = obj3;
  return hasOwnProperty(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function IconTile(row) {
  let tmp5;
  obj = react2;
  const cResult = obj.c(5);
  row = row.row;
  const tmp3 = closure_9();
  if (cResult[0] !== obj[row.surface]) {
    const obj2 = { size: "sm", color: nativeDefault.colors.ICON_SUBTLE };
    const tmp8 = hasOwnProperty(obj[row.surface], obj2);
    cResult[0] = obj[row.surface];
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.iconTile) {
    let tmp9;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const obj3 = { style: tmp3.iconTile, children: tmp5 };
  const tmp10 = hasOwnProperty(React3, obj3);
  cResult[2] = tmp3.iconTile;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function IconTile(row) {
  let obj2;
  row = row.row;
  obj = { style: closure_9().iconTile, children: hasOwnProperty(obj[row.surface], obj2) };
  obj2 = { size: "sm", color: nativeDefault.colors.ICON_SUBTLE };
  return hasOwnProperty(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelChips(names) {
  let chip;
  obj = require("react");
  const cResult = obj.c(8);
  names = names.names;
  const tmp2 = closure_9();
  _require = tmp2;
  if (0 === names.length) {
    return null;
  } else {
    let tmp4;
    if (cResult[0] === names) {
      let tmp3;
      if (cResult[1] === tmp2.chip) {
        tmp3 = cResult[2];
      }
      if (cResult[5] === tmp2.chips) {
        let tmp6;
        if (cResult[6] === tmp3) {
          tmp6 = cResult[7];
        }
        return tmp6;
      }
      let obj2 = { style: tmp11, children: tmp3 };
      const tmp9 = closure_5(closure_4, obj2);
      cResult[5] = tmp2.chips;
      cResult[6] = tmp3;
      cResult[7] = tmp9;
      tmp6 = tmp9;
    }
    if (cResult[3] !== tmp2.chip) {
      const fn = function p(arg0) {
        let Text;
        let obj2;
        obj = { style: chip.chip, children: hasOwnProperty(Text, obj2) };
        obj2 = { variant: "text-sm/medium", color: "text-subtle", children: "#" + arg0 };
        Text = Text_Text.Text;
        return hasOwnProperty(React3, obj, arg0);
      };
      cResult[3] = tmp2.chip;
      cResult[4] = fn;
      tmp4 = fn;
    } else {
      tmp4 = cResult[4];
    }
    const mapped = names.map(tmp4);
    cResult[0] = names;
    cResult[1] = tmp2.chip;
    cResult[2] = mapped;
    tmp3 = mapped;
  }
}) : (function ChannelChips(names) {
  names = names.names;
  const tmp = closure_9();
  const chip = tmp;
  let tmp2 = null;
  if (0 !== names.length) {
    obj = {
      style: tmp.chips,
      children: names.map((item) => {
          let Text;
          let obj2;
          obj = { style: chip.chip, children: hasOwnProperty(Text, obj2) };
          obj2 = { variant: "text-sm/medium", color: "text-subtle", children: "#" + item };
          Text = Text_Text.Text;
          return hasOwnProperty(React3, obj, item);
        })
    };
    tmp2 = closure_5(closure_4, obj);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanSingleSurface(arg0) {
  let items;
  let items1;
  let items2;
  let previews;
  let row;
  obj = react2;
  const cResult = obj.c(24);
  ({ row, previews } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === previews) {
    let tmp5;
    let tmp9;
    let tmp13;
    let tmp16;
    let tmp19;
    if (cResult[1] === row) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== row) {
      const obj2 = { row };
      const tmp12 = hasOwnProperty(closure_11, obj2);
      cResult[3] = row;
      cResult[4] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== row.title) {
      const obj3 = { variant: "text-md/semibold", color: "text-strong", children: row.title };
      const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[5] = row.title;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== row.description) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: row.description };
      const tmp18 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[7] = row.description;
      cResult[8] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] !== row.channelNames) {
      const obj5 = { names: row.channelNames };
      const tmp22 = hasOwnProperty(closure_12, obj5);
      cResult[9] = row.channelNames;
      cResult[10] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] === tmp4.text) {
      if (cResult[12] === tmp13) {
        if (cResult[13] === tmp16) {
          let tmp23;
          if (cResult[14] === tmp19) {
            tmp23 = cResult[15];
          }
          if (cResult[16] === tmp4.singleHeader) {
            if (cResult[17] === tmp9) {
              let tmp27;
              if (cResult[18] === tmp23) {
                tmp27 = cResult[19];
              }
              if (cResult[20] === tmp5) {
                if (cResult[21] === tmp4.single) {
                  let tmp31;
                  if (cResult[22] === tmp27) {
                    tmp31 = cResult[23];
                  }
                  return tmp31;
                }
              }
              const obj6 = { style: tmp4.single, children: items };
              items = [tmp27, tmp5];
              const tmp34 = metroRequire(React3, obj6);
              cResult[20] = tmp5;
              cResult[21] = tmp4.single;
              cResult[22] = tmp27;
              cResult[23] = tmp34;
              tmp31 = tmp34;
            }
          }
          const obj7 = { style: tmp4.singleHeader, children: items1 };
          items1 = [tmp9, tmp23];
          const tmp30 = metroRequire(React3, obj7);
          cResult[16] = tmp4.singleHeader;
          cResult[17] = tmp9;
          cResult[18] = tmp23;
          cResult[19] = tmp30;
          tmp27 = tmp30;
        }
      }
    }
    const obj8 = { style: tmp4.text, children: items2 };
    items2 = [tmp13, tmp16, tmp19];
    const tmp26 = metroRequire(React3, obj8);
    cResult[11] = tmp4.text;
    cResult[12] = tmp13;
    cResult[13] = tmp16;
    cResult[14] = tmp19;
    cResult[15] = tmp26;
    tmp23 = tmp26;
  }
  let tmp6 = null;
  if (null != row.preview) {
    let content;
    if (previews[row.preview] != null) {
      content = tmp7.content;
    }
    if (content == null) {
      content = null;
    }
    tmp6 = content;
  }
  cResult[0] = previews;
  cResult[1] = row;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ConjurePlanSingleSurface(row) {
  let items;
  let items1;
  let items2;
  row = row.row;
  const previews = row.previews;
  const tmp = closure_9();
  let tmp2 = null;
  if (null != row.preview) {
    let content;
    if (previews[row.preview] != null) {
      content = tmp3.content;
    }
    if (content == null) {
      content = null;
    }
    tmp2 = content;
  }
  obj = { style: tmp.single, children: items2 };
  const obj2 = { style: tmp.singleHeader, children: items };
  items = [hasOwnProperty(closure_11, { row }), ];
  const obj3 = { style: tmp.text, children: items1 };
  items1 = [, , ];
  const obj4 = { variant: "text-md/semibold", color: "text-strong", children: row.title };
  items1[0] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: row.description };
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  const obj6 = { names: row.channelNames };
  items1[2] = hasOwnProperty(closure_12, obj6);
  items[1] = metroRequire(React3, obj3);
  items2 = [metroRequire(React3, obj2), tmp2];
  return metroRequire(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanSurfaceNav(cycling) {
  let items;
  let previews;
  let rows;
  let selectedIndex;
  let tmp7;
  obj = previews(selectedIndex[15]);
  const cResult = obj.c(29);
  ({ rows, previews } = cycling);
  cycling = cycling.cycling;
  const tmp2 = closure_9();
  let closure_1 = tmp2;
  let obj2 = previews(selectedIndex[17]);
  const conjurePlanSurfaceCycle = obj2.useConjurePlanSurfaceCycle(rows.length, cycling);
  selectedIndex = conjurePlanSurfaceCycle.selectedIndex;
  const select = conjurePlanSurfaceCycle.select;
  let first = rows[selectedIndex];
  if (first == null) {
    first = rows[0];
  }
  if (cResult[0] === previews) {
    if (cResult[1] === rows) {
      if (cResult[2] === select) {
        if (cResult[3] === selectedIndex) {
          if (cResult[4] === tmp2.row) {
            if (cResult[5] === tmp2.rowSelected) {
              if (cResult[6] === tmp2.text) {
                if (cResult[7] === tmp2.titleLine) {
                  if (cResult[8] === tmp2.titleText) {
                    tmp7 = cResult[9];
                  }
                  if (cResult[19] === tmp2.rows) {
                    let tmp10;
                    if (cResult[20] === tmp7) {
                      tmp10 = cResult[21];
                    }
                    if (cResult[22] === first) {
                      let tmp14;
                      if (cResult[23] === previews) {
                        tmp14 = cResult[24];
                      }
                      if (cResult[25] === tmp2.nav) {
                        if (cResult[26] === tmp10) {
                          let tmp18;
                          if (cResult[27] === tmp14) {
                            tmp18 = cResult[28];
                          }
                          return tmp18;
                        }
                      }
                      let tmp19 = closure_6;
                      let obj3 = { style: tmp5, children: items };
                      items = [tmp10, tmp14];
                      const tmp21 = closure_6(closure_4, obj3);
                      cResult[25] = tmp2.nav;
                      cResult[26] = tmp10;
                      cResult[27] = tmp14;
                      cResult[28] = tmp21;
                      tmp18 = tmp21;
                    }
                    let tmp15 = null;
                    if (null != first.preview) {
                      let content;
                      if (previews[first.preview] != null) {
                        content = tmp16.content;
                      }
                      if (content == null) {
                        content = null;
                      }
                      tmp15 = content;
                    }
                    cResult[22] = first;
                    cResult[23] = previews;
                    cResult[24] = tmp15;
                    tmp14 = tmp15;
                  }
                  let obj4 = { style: tmp6, accessibilityRole: "tablist", children: tmp7 };
                  let tmp13 = closure_5(closure_4, obj4);
                  cResult[19] = tmp2.rows;
                  cResult[20] = tmp7;
                  cResult[21] = tmp13;
                  tmp10 = tmp13;
                }
              }
            }
          }
        }
      }
    }
  }
  if (cResult[10] === previews) {
    if (cResult[11] === select) {
      if (cResult[12] === selectedIndex) {
        if (cResult[13] === tmp2.row) {
          if (cResult[14] === tmp2.rowSelected) {
            if (cResult[15] === tmp2.text) {
              if (cResult[16] === tmp2.titleLine) {
                let tmp8;
                if (cResult[17] === tmp2.titleText) {
                  tmp8 = cResult[18];
                }
                const mapped = rows.map(tmp8);
                cResult[0] = previews;
                cResult[1] = rows;
                cResult[2] = select;
                cResult[3] = selectedIndex;
                cResult[4] = tmp2.row;
                cResult[5] = tmp2.rowSelected;
                cResult[6] = tmp2.text;
                cResult[7] = tmp2.titleLine;
                cResult[8] = tmp2.titleText;
                cResult[9] = mapped;
                tmp7 = mapped;
              }
            }
          }
        }
      }
    }
  }
  const fn = function p(accessibilityLabel, arg1) {
    let items1;
    let items2;
    let items3;
    let str;
    let tmp13;
    let tmp14;
    let closure_0 = arg1;
    let tmp3 = null;
    if (null != accessibilityLabel.preview) {
      let content;
      if (tmp2[accessibilityLabel.preview] != null) {
        content = tmp4.content;
      }
      if (content == null) {
        content = null;
      }
      tmp3 = content;
    }
    const items = [closure_1.row, ];
    let rowSelected = tmp6;
    const tmp7 = closure_1_7[accessibilityLabel.surface];
    const tmp9 = select;
    if (arg1 === selectedIndex) {
      rowSelected = tmp10.rowSelected;
    }
    obj = {
      style: items,
      accessibilityRole: "tab",
      accessibilityState: { selected: arg1 === selectedIndex },
      accessibilityLabel: accessibilityLabel.title,
      onPress() {
        return select(closure_0);
      },
      children: items1
    };
    items[1] = rowSelected;
    if (null != tmp3) {
      const obj2 = { preview: tmp3, selected: arg1 === selectedIndex };
      tmp14 = closure_1_5(closure_1_10, obj2);
      tmp13 = closure_1_5;
    } else {
      tmp13 = closure_1_5;
      const obj3 = { row: accessibilityLabel };
      tmp14 = closure_1_5(closure_1_11, obj3);
    }
    items1 = [tmp14, ];
    const obj5 = { style: closure_1.titleLine, children: items2 };
    items2 = [, ];
    const obj4 = { style: closure_1.text, children: items3 };
    const obj6 = { size: "xs", color: closure_1(selectedIndex[13]).colors.ICON_SUBTLE };
    items2[0] = tmp13(tmp7, obj6);
    const obj7 = { style: closure_1.titleText, variant: "text-sm/semibold", color: str, lineClamp: 1, children: accessibilityLabel.title };
    str = "text-default";
    const Text = previews(selectedIndex[16]).Text;
    const tmp18 = selectedIndex;
    const tmp19 = previews;
    if (arg1 === selectedIndex) {
      str = "text-strong";
    }
    items2[1] = tmp13(Text, obj7);
    items3 = [closure_1_6(closure_1_4, obj5), , ];
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: accessibilityLabel.description };
    items3[1] = tmp13(tmp19(tmp18[16]).Text, obj8);
    const obj9 = { names: accessibilityLabel.channelNames };
    items3[2] = tmp13(closure_1_12, obj9);
    items1[1] = closure_1_6(closure_1_4, obj4);
    return closure_1_6(tmp9, obj, accessibilityLabel.surface);
  };
  cResult[10] = previews;
  cResult[11] = select;
  cResult[12] = selectedIndex;
  cResult[13] = tmp2.row;
  cResult[14] = tmp2.rowSelected;
  cResult[15] = tmp2.text;
  cResult[16] = tmp2.titleLine;
  cResult[17] = tmp2.titleText;
  cResult[18] = fn;
  tmp8 = fn;
}) : (function ConjurePlanSurfaceNav(cycling) {
  let items;
  let previews;
  let rows;
  ({ rows, previews } = cycling);
  let selectedIndex;
  cycling = cycling.cycling;
  const tmp = closure_9();
  let closure_1 = tmp;
  obj = previews(selectedIndex[17]);
  const conjurePlanSurfaceCycle = obj.useConjurePlanSurfaceCycle(rows.length, cycling);
  selectedIndex = conjurePlanSurfaceCycle.selectedIndex;
  const select = conjurePlanSurfaceCycle.select;
  let first = rows[selectedIndex];
  if (first == null) {
    first = rows[0];
  }
  let obj2 = { style: tmp.nav, children: items };
  let obj3 = {
    style: tmp.rows,
    accessibilityRole: "tablist",
    children: rows.map((accessibilityLabel, index) => {
      let items1;
      let items2;
      let items3;
      let str;
      let tmp13;
      let tmp14;
      let closure_0 = index;
      let tmp3 = null;
      if (null != accessibilityLabel.preview) {
        let content;
        if (tmp2[accessibilityLabel.preview] != null) {
          content = tmp4.content;
        }
        if (content == null) {
          content = null;
        }
        tmp3 = content;
      }
      const items = [closure_1.row, ];
      let rowSelected = tmp6;
      const tmp7 = closure_1_7[accessibilityLabel.surface];
      const tmp9 = select;
      if (index === selectedIndex) {
        rowSelected = tmp10.rowSelected;
      }
      obj = {
        style: items,
        accessibilityRole: "tab",
        accessibilityState: { selected: index === selectedIndex },
        accessibilityLabel: accessibilityLabel.title,
        onPress() {
          return select(index);
        },
        children: items1
      };
      items[1] = rowSelected;
      if (null != tmp3) {
        const obj2 = { preview: tmp3, selected: index === selectedIndex };
        tmp14 = closure_1_5(closure_1_10, obj2);
        tmp13 = closure_1_5;
      } else {
        tmp13 = closure_1_5;
        const obj3 = { row: accessibilityLabel };
        tmp14 = closure_1_5(closure_1_11, obj3);
      }
      items1 = [tmp14, ];
      const obj5 = { style: closure_1.titleLine, children: items2 };
      items2 = [, ];
      const obj4 = { style: closure_1.text, children: items3 };
      const obj6 = { size: "xs", color: closure_1(selectedIndex[13]).colors.ICON_SUBTLE };
      items2[0] = tmp13(tmp7, obj6);
      const obj7 = { style: closure_1.titleText, variant: "text-sm/semibold", color: str, lineClamp: 1, children: accessibilityLabel.title };
      str = "text-default";
      const Text = previews(selectedIndex[16]).Text;
      const tmp18 = selectedIndex;
      const tmp19 = previews;
      if (index === selectedIndex) {
        str = "text-strong";
      }
      items2[1] = tmp13(Text, obj7);
      items3 = [closure_1_6(closure_1_4, obj5), , ];
      const obj8 = { variant: "text-xs/normal", color: "text-muted", children: accessibilityLabel.description };
      items3[1] = tmp13(tmp19(tmp18[16]).Text, obj8);
      const obj9 = { names: accessibilityLabel.channelNames };
      items3[2] = tmp13(closure_1_12, obj9);
      items1[1] = closure_1_6(closure_1_4, obj4);
      return closure_1_6(tmp9, obj, accessibilityLabel.surface);
    })
  };
  const tmp4 = closure_6;
  items = [closure_5(closure_4, obj3), ];
  let tmp6 = null;
  const tmp5 = closure_4;
  if (null != first.preview) {
    let tmp7 = previews[first.preview];
    let content;
    if (tmp7 != null) {
      content = tmp7.content;
    }
    if (content == null) {
      content = null;
    }
    tmp6 = content;
  }
  items[1] = tmp6;
  return tmp4(tmp5, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanSurfaces.tsx");

export const ConjurePlanSingleSurface = tmp6;
export const ConjurePlanSurfaceNav = tmp7;
