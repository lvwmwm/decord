// Module ID: 10731
// Function ID: 10732
// Name: BadgeProgressSection
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 10656, 4833, 1127, 10730, 2]

// Module 10731 (BadgeProgressSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl3 from "intl" /* 1127 */;
import BadgeDetailsUtils from "BadgeDetailsUtils" /* 10656 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10730 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, row: obj3, content: obj4, track: obj5, fill: obj6 };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj5 = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
obj6 = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badge;
  let currentArtUrl;
  let helperText;
  let intl;
  let items;
  let items1;
  let items2;
  let nextArtUrl;
  let obj10;
  let progress;
  let range;
  let threshold;
  let tmp18;
  let viewerBadge;
  const obj = react2;
  const cResult = obj.c(37);
  ({ badge, viewerBadge } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === badge) {
    if (cResult[1] === tmp4.content) {
      if (cResult[2] === tmp4.fill) {
        if (cResult[3] === tmp4.row) {
          if (cResult[4] === tmp4.section) {
            if (cResult[5] === tmp4.track) {
              let tmp5;
              let tmp6;
              let tmp7;
              let tmp8;
              let tmp9;
              let tmp10;
              let tmp11;
              let tmp12;
              let tmp13;
              let tmp14;
              let tmp15;
              if (cResult[6] === viewerBadge) {
                tmp5 = cResult[7];
                tmp6 = cResult[8];
                tmp7 = cResult[9];
                tmp8 = cResult[10];
                tmp9 = cResult[11];
                tmp10 = cResult[12];
                tmp11 = cResult[13];
                tmp12 = cResult[14];
                tmp13 = cResult[15];
                tmp14 = cResult[16];
                tmp15 = cResult[17];
              }
              if (cResult[19] === tmp5) {
                if (cResult[20] === tmp9) {
                  if (cResult[21] === tmp10) {
                    let tmp29;
                    let tmp32;
                    if (cResult[22] === tmp11) {
                      tmp29 = cResult[23];
                    }
                    if (cResult[24] !== tmp8) {
                      let tmp34 = null != tmp8;
                      if (tmp34) {
                        const obj2 = { url: tmp8, height: 48 };
                        tmp34 = React3(BadgeArtImageDefault, obj2);
                      }
                      cResult[24] = tmp8;
                      cResult[25] = tmp34;
                      tmp32 = tmp34;
                    } else {
                      tmp32 = cResult[25];
                    }
                    if (cResult[26] === tmp6) {
                      if (cResult[27] === tmp12) {
                        if (cResult[28] === tmp13) {
                          if (cResult[29] === tmp29) {
                            let tmp37;
                            if (cResult[30] === tmp32) {
                              tmp37 = cResult[31];
                            }
                            if (cResult[32] === tmp7) {
                              if (cResult[33] === tmp37) {
                                if (cResult[34] === tmp14) {
                                  let tmp40;
                                  if (cResult[35] === tmp15) {
                                    tmp40 = cResult[36];
                                  }
                                  return tmp40;
                                }
                              }
                            }
                            const obj3 = { style: tmp14, children: items };
                            items = [tmp15, tmp37];
                            const tmp42 = hasOwnProperty(tmp7, obj3);
                            cResult[32] = tmp7;
                            cResult[33] = tmp37;
                            cResult[34] = tmp14;
                            cResult[35] = tmp15;
                            cResult[36] = tmp42;
                            tmp40 = tmp42;
                          }
                        }
                      }
                    }
                    const obj4 = { style: tmp12, children: items1 };
                    items1 = [tmp13, tmp29, tmp32];
                    const tmp39 = hasOwnProperty(tmp6, obj4);
                    cResult[26] = tmp6;
                    cResult[27] = tmp12;
                    cResult[28] = tmp13;
                    cResult[29] = tmp29;
                    cResult[30] = tmp32;
                    cResult[31] = tmp39;
                    tmp37 = tmp39;
                  }
                }
              }
              const obj5 = { style: tmp9, children: items2 };
              items2 = [tmp10, tmp11];
              const tmp31 = hasOwnProperty(tmp5, obj5);
              cResult[19] = tmp5;
              cResult[20] = tmp9;
              cResult[21] = tmp10;
              cResult[22] = tmp11;
              cResult[23] = tmp31;
              tmp29 = tmp31;
            }
          }
        }
      }
    }
  }
  const tmpResult = BadgeDetailsUtils;
  const badgeProgressDisplay = tmpResult.getBadgeProgressDisplay(badge, viewerBadge);
  ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
  let num;
  if (progress != null) {
    num = progress.current;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (progress != null) {
    num2 = progress.floor;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const section = tmp4.section;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl3.t["2m/g2c"]) };
    const Text = tmp(4833).Text;
    intl = tmp(1127).intl;
    const tmp20 = React3(Text, obj6);
    cResult[18] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[18];
  }
  const row = tmp4.row;
  let tmp21 = null != currentArtUrl;
  if (tmp21) {
    const obj7 = { url: currentArtUrl, height: 48 };
    tmp21 = React3(BadgeArtImageDefault, obj7);
  }
  const content = tmp4.content;
  let tmp24 = null != helperText;
  if (tmp24) {
    const obj8 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
    tmp24 = React3(tmp(4833).Text, obj8);
  }
  let tmp27Result = null != threshold;
  if (tmp27Result) {
    const obj9 = { style: tmp4.track, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: helperText, accessibilityValue: range, children: React3(View, obj10) };
    if (helperText == null) {
      const intl2 = tmp(1127).intl;
      helperText = intl2.string(tmp(1127).t.Uwhb1l);
    }
    range = { min: num2, max: threshold, now: Math.min(num, threshold) };
    const _Math = Math;
    const items3 = [tmp4.fill, ];
    const diff = threshold - num2;
    let num6 = 1;
    if (diff > 0) {
      const _Math2 = Math;
      const _Math3 = Math;
      num6 = Math.min(Math.max((num - num2) / diff, 0), 1);
    }
    obj10 = { style: items3 };
    const obj11 = { width: `${100 * num6}%` };
    items3[1] = obj11;
    tmp27Result = tmp27(tmp17, obj9);
  }
  cResult[0] = badge;
  cResult[1] = tmp4.content;
  cResult[2] = tmp4.fill;
  cResult[3] = tmp4.row;
  cResult[4] = tmp4.section;
  cResult[5] = tmp4.track;
  cResult[6] = viewerBadge;
  cResult[7] = View;
  cResult[8] = View;
  cResult[9] = View;
  cResult[10] = nextArtUrl;
  cResult[11] = content;
  cResult[12] = tmp24;
  cResult[13] = tmp27Result;
  cResult[14] = row;
  cResult[15] = tmp21;
  cResult[16] = section;
  cResult[17] = tmp18;
  tmp11 = tmp27Result;
  tmp15 = tmp18;
  tmp14 = section;
  tmp13 = tmp21;
  tmp12 = row;
  tmp10 = tmp24;
  tmp9 = content;
  tmp8 = nextArtUrl;
  tmp7 = tmp17;
  tmp6 = tmp17;
  tmp5 = tmp17;
}) : ((arg0) => {
  let badge;
  let currentArtUrl;
  let helperText;
  let intl;
  let items;
  let items1;
  let items2;
  let nextArtUrl;
  let obj9;
  let progress;
  let range;
  let threshold;
  let viewerBadge;
  ({ badge, viewerBadge } = arg0);
  const tmp = closure_6();
  const obj = BadgeDetailsUtils;
  const badgeProgressDisplay = obj.getBadgeProgressDisplay(badge, viewerBadge);
  ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
  let num;
  if (progress != null) {
    num = progress.current;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (progress != null) {
    num2 = progress.floor;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const obj2 = { style: tmp.section, children: items };
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl3.t["2m/g2c"]) };
  const Text = tmp2(4833).Text;
  intl = tmp2(1127).intl;
  items = [React3(Text, obj3), ];
  let tmp7Result = null != currentArtUrl;
  const obj4 = { style: tmp.row, children: items1 };
  if (tmp7Result) {
    const obj5 = { url: currentArtUrl, height: 48 };
    tmp7Result = tmp7(BadgeArtImageDefault, obj5);
  }
  items1 = [tmp7Result, , ];
  let tmp7Result4 = null != helperText;
  const obj6 = { style: tmp.content, children: items2 };
  if (tmp7Result4) {
    const obj7 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
    tmp7Result4 = tmp7(tmp2(4833).Text, obj7);
  }
  items2 = [tmp7Result4, ];
  let tmp7Result5 = null != threshold;
  if (tmp7Result5) {
    const obj8 = { style: tmp.track, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: helperText, accessibilityValue: range, children: React3(View, obj9) };
    if (helperText == null) {
      const intl2 = tmp2(1127).intl;
      helperText = intl2.string(tmp2(1127).t.Uwhb1l);
    }
    range = { min: num2, max: threshold, now: Math.min(num, threshold) };
    const _Math = Math;
    const items3 = [tmp.fill, ];
    const diff = threshold - num2;
    let num5 = 1;
    if (diff > 0) {
      const _Math2 = Math;
      const _Math3 = Math;
      num5 = Math.min(Math.max((num - num2) / diff, 0), 1);
    }
    const obj10 = { width: `${100 * num5}%` };
    obj9 = { style: items3 };
    items3[1] = obj10;
    tmp7Result5 = tmp7(tmp6, obj8);
  }
  items2[1] = tmp7Result5;
  items1[1] = hasOwnProperty(View, obj6);
  let tmp7Result6 = null != nextArtUrl;
  if (tmp7Result6) {
    const obj11 = { url: nextArtUrl, height: 48 };
    tmp7Result6 = tmp7(BadgeArtImageDefault, obj11);
  }
  items1[2] = tmp7Result6;
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeProgressSection.tsx");

export default tmp5;
