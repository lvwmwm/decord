// Module ID: 13898
// Function ID: 13899
// Name: GiftingBadgeLevelUpProgress
// Dependencies: [19, 17, 8681, 21, 4971, 587, 558, 576, 10502, 10505, 5234, 1128, 2632, 2]

// Module 13898 (GiftingBadgeLevelUpProgress)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2632 from "module_2632" /* 2632 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8681 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10502 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10505 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
let closure_4 = BadgeDirectoryStore.getSingleRequirementThreshold;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, barRow: obj3, progressBarTrack: obj4, progressBarFill: obj5, labels: { flexDirection: "row", justifyContent: "flex-end" } };
obj2 = { gap: nativeDefault.space.PX_4, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj5 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeLevelUpProgress(arg0) {
  let currentTier;
  let items;
  let items1;
  let items2;
  let newTier;
  let progress;
  let str;
  let str2;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp5;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(57);
  ({ progress, currentTier, newTier, style } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== currentTier) {
    const tmpResult = GiftingBadgesUtils;
    const giftingBadgeTierIconUrl = tmpResult.getGiftingBadgeTierIconUrl(currentTier);
    cResult[0] = currentTier;
    cResult[1] = giftingBadgeTierIconUrl;
    tmp5 = giftingBadgeTierIconUrl;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== newTier) {
    const tmpResult2 = GiftingBadgesUtils;
    const giftingBadgeTierIconUrl1 = tmpResult2.getGiftingBadgeTierIconUrl(newTier);
    cResult[2] = newTier;
    cResult[3] = giftingBadgeTierIconUrl1;
    tmp7 = giftingBadgeTierIconUrl1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === newTier) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === progress) {
          if (cResult[8] === style) {
            if (cResult[9] === tmp4.barRow) {
              if (cResult[10] === tmp4.container) {
                if (cResult[11] === tmp4.labels) {
                  if (cResult[12] === tmp4.progressBarFill) {
                    if (cResult[13] === tmp4.progressBarTrack) {
                      tmp9 = cResult[14];
                      tmp10 = cResult[15];
                      tmp11 = cResult[16];
                      str = cResult[17];
                      str2 = cResult[18];
                      tmp12 = cResult[19];
                      tmp13 = cResult[20];
                      tmp14 = cResult[21];
                      tmp15 = cResult[22];
                    }
                    if (cResult[43] === tmp9) {
                      if (cResult[44] === str) {
                        if (cResult[45] === str2) {
                          let tmp42;
                          if (cResult[46] === tmp12) {
                            tmp42 = cResult[47];
                          }
                          if (cResult[48] === tmp10) {
                            if (cResult[49] === tmp42) {
                              let tmp45;
                              if (cResult[50] === tmp13) {
                                tmp45 = cResult[51];
                              }
                              if (cResult[52] === tmp11) {
                                if (cResult[53] === tmp45) {
                                  if (cResult[54] === tmp14) {
                                    let tmp48;
                                    if (cResult[55] === tmp15) {
                                      tmp48 = cResult[56];
                                    }
                                    return tmp48;
                                  }
                                }
                              }
                              const obj2 = { style: tmp14, children: items };
                              items = [tmp15, tmp45];
                              const tmp50 = metroRequire(tmp11, obj2);
                              cResult[52] = tmp11;
                              cResult[53] = tmp45;
                              cResult[54] = tmp14;
                              cResult[55] = tmp15;
                              cResult[56] = tmp50;
                              tmp48 = tmp50;
                            }
                          }
                          const obj3 = { style: tmp13, children: tmp42 };
                          const tmp47 = hasOwnProperty(tmp10, obj3);
                          cResult[48] = tmp10;
                          cResult[49] = tmp42;
                          cResult[50] = tmp13;
                          cResult[51] = tmp47;
                          tmp45 = tmp47;
                        }
                      }
                    }
                    const obj4 = { variant: str, color: str2, children: tmp12 };
                    const tmp44 = hasOwnProperty(tmp9, obj4);
                    cResult[43] = tmp9;
                    cResult[44] = str;
                    cResult[45] = str2;
                    cResult[46] = tmp12;
                    cResult[47] = tmp44;
                    tmp42 = tmp44;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp16 = closure_4(newTier);
  let num5 = 100;
  if (tmp16 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num5 = Math.min(Math.max(progress / tmp16 * 100, 0), 100);
  }
  if (cResult[23] === style) {
    let tmp19;
    let tmp20;
    let tmp26;
    if (cResult[24] === tmp4.container) {
      tmp19 = cResult[25];
    }
    if (cResult[26] !== tmp5) {
      let tmp21 = null != tmp5;
      if (tmp21) {
        const obj5 = { icon: tmp5, size: 24 };
        tmp21 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
      }
      cResult[26] = tmp5;
      cResult[27] = tmp21;
      tmp20 = tmp21;
    } else {
      tmp20 = cResult[27];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + num5 + "%";
    if (cResult[28] !== combined) {
      const obj6 = { width: combined };
      cResult[28] = combined;
      cResult[29] = obj6;
      tmp26 = obj6;
    } else {
      tmp26 = cResult[29];
    }
    if (cResult[30] === tmp4.progressBarFill) {
      let tmp27;
      if (cResult[31] === tmp26) {
        tmp27 = cResult[32];
      }
      if (cResult[33] === tmp4.progressBarTrack) {
        let tmp30;
        let tmp33;
        if (cResult[34] === tmp27) {
          tmp30 = cResult[35];
        }
        if (cResult[36] !== tmp7) {
          let tmp34 = null != tmp7;
          if (tmp34) {
            const obj7 = { icon: tmp7, size: 24 };
            tmp34 = hasOwnProperty(GiftingBadgeIconDefault, obj7);
          }
          cResult[36] = tmp7;
          cResult[37] = tmp34;
          tmp33 = tmp34;
        } else {
          tmp33 = cResult[37];
        }
        if (cResult[38] === tmp4.barRow) {
          if (cResult[39] === tmp20) {
            if (cResult[40] === tmp30) {
              let tmp37;
              if (cResult[41] === tmp33) {
                tmp37 = cResult[42];
              }
              const labels = tmp4.labels;
              const Text = tmp(5234).Text;
              const intl = tmp(1128).intl;
              const obj8 = { count: progress, threshold: tmp16 };
              const formatResult = intl.format(_modDef2632.iIpfQe, obj8);
              cResult[4] = tmp5;
              cResult[5] = newTier;
              cResult[6] = tmp7;
              cResult[7] = progress;
              cResult[8] = style;
              cResult[9] = tmp4.barRow;
              cResult[10] = tmp4.container;
              cResult[11] = tmp4.labels;
              cResult[12] = tmp4.progressBarFill;
              cResult[13] = tmp4.progressBarTrack;
              cResult[14] = Text;
              cResult[15] = View;
              cResult[16] = View;
              cResult[17] = "text-xs/normal";
              cResult[18] = "text-muted";
              cResult[19] = formatResult;
              cResult[20] = labels;
              cResult[21] = tmp19;
              cResult[22] = tmp37;
              tmp15 = tmp37;
              tmp14 = tmp19;
              tmp13 = labels;
              tmp12 = formatResult;
              str2 = "text-muted";
              str = "text-xs/normal";
              tmp11 = tmp18;
              tmp10 = tmp18;
              tmp9 = Text;
            }
          }
        }
        const obj9 = { style: tmp4.barRow, children: items1 };
        items1 = [tmp20, tmp30, tmp33];
        const tmp39 = metroRequire(View, obj9);
        cResult[38] = tmp4.barRow;
        cResult[39] = tmp20;
        cResult[40] = tmp30;
        cResult[41] = tmp33;
        cResult[42] = tmp39;
        tmp37 = tmp39;
      }
      const obj10 = { style: tmp4.progressBarTrack, children: tmp27 };
      const tmp32 = hasOwnProperty(View, obj10);
      cResult[33] = tmp4.progressBarTrack;
      cResult[34] = tmp27;
      cResult[35] = tmp32;
      tmp30 = tmp32;
    }
    const obj11 = { style: items2 };
    items2 = [tmp4.progressBarFill, tmp26];
    const tmp29 = hasOwnProperty(View, obj11);
    cResult[30] = tmp4.progressBarFill;
    cResult[31] = tmp26;
    cResult[32] = tmp29;
    tmp27 = tmp29;
  }
  const items3 = [tmp4.container, style];
  cResult[23] = style;
  cResult[24] = tmp4.container;
  cResult[25] = items3;
  tmp19 = items3;
}) : (function GiftingBadgeLevelUpProgress(style) {
  let Text;
  let currentTier;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let newTier;
  let obj5;
  let obj9;
  let progress;
  ({ progress, currentTier, newTier } = style);
  style = style.style;
  const tmp = closure_7();
  const getGiftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl;
  GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = getGiftingBadgeTierIconUrl(currentTier);
  const tmp2Result = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = tmp2Result.getGiftingBadgeTierIconUrl(newTier);
  const tmp7 = closure_4(newTier);
  let num = 100;
  if (tmp7 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp7 * 100, 0), 100);
  }
  const obj = { style: items, children: items3 };
  items = [tmp.container, style];
  let tmp11 = null != giftingBadgeTierIconUrl;
  const obj2 = { style: tmp.barRow, children: items1 };
  if (tmp11) {
    const obj3 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp11 = hasOwnProperty(GiftingBadgeIconDefault, obj3);
  }
  items1 = [tmp11, , ];
  const obj4 = { style: tmp.progressBarTrack, children: hasOwnProperty(View, obj5) };
  obj5 = { style: items2 };
  items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  ({ width: "" + num + "%" });
  items1[1] = hasOwnProperty(View, obj4);
  let tmp14Result = null != giftingBadgeTierIconUrl1;
  if (tmp14Result) {
    const obj7 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp14Result = tmp14(GiftingBadgeIconDefault, obj7);
  }
  items1[2] = tmp14Result;
  items3 = [metroRequire(View, obj2), ];
  const obj8 = { style: tmp.labels, children: hasOwnProperty(Text, obj9) };
  obj9 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2632.iIpfQe, { count: progress, threshold: tmp7 }) };
  Text = tmp2(5234).Text;
  intl = tmp2(1128).intl;
  items3[1] = hasOwnProperty(View, obj8);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default tmp5;
