// Module ID: 13726
// Function ID: 13727
// Name: GiftingBadgeProgress
// Dependencies: [19, 17, 8618, 21, 558, 576, 4945, 587, 10431, 10434, 5195, 1128, 2622, 2]

// Module 13726 (GiftingBadgeProgress)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2622 from "module_2622" /* 2622 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8618 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10431 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10434 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4945 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
let closure_4 = BadgeDirectoryStore.getSingleRequirementThreshold;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeProgressBar(percent) {
  let items;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(8);
  percent = percent.percent;
  const tmp2 = closure_8();
  const combined = "" + Math.min(Math.max(percent, 0), 100) + "%";
  if (cResult[0] !== combined) {
    const obj2 = { width: combined };
    cResult[0] = combined;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp2.progressBarFill) {
    let tmp5;
    if (cResult[3] === tmp4) {
      tmp5 = cResult[4];
    }
    if (cResult[5] === tmp2.progressBarTrack) {
      let tmp7;
      if (cResult[6] === tmp5) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
    const obj3 = { style: tmp2.progressBarTrack, children: tmp5 };
    const tmp10 = hasOwnProperty(View, obj3);
    cResult[5] = tmp2.progressBarTrack;
    cResult[6] = tmp5;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  const obj4 = { style: items };
  items = [tmp2.progressBarFill, tmp4];
  const tmp6 = hasOwnProperty(View, obj4);
  cResult[2] = tmp2.progressBarFill;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : (function GiftingBadgeProgressBar(percent) {
  let items;
  let obj2;
  percent = percent.percent;
  const tmp = closure_8();
  const obj = { style: tmp.progressBarTrack, children: hasOwnProperty(View, obj2) };
  obj2 = { style: items };
  items = [tmp.progressBarFill, { width: "" + Math.min(Math.max(percent, 0), 100) + "%" }];
  ({ width: "" + Math.min(Math.max(percent, 0), 100) + "%" });
  return hasOwnProperty(View, obj);
});
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, progressBarTrack: obj4, progressBarFill: obj5, labels: obj6 };
obj2 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj4 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj5 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeProgress(arg0) {
  let currentTier;
  let iconSize;
  let intl;
  let items;
  let items1;
  let nextTier;
  let obj9;
  let progress;
  let title;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(48);
  ({ progress, currentTier, nextTier, iconSize, title } = arg0);
  let num = 24;
  if (undefined !== iconSize) {
    num = iconSize;
  }
  const tmp4 = closure_8();
  if (cResult[0] !== currentTier) {
    const tmpResult = GiftingBadgesUtils;
    const giftingBadgeTierIconUrl = tmpResult.getGiftingBadgeTierIconUrl(currentTier);
    cResult[0] = currentTier;
    cResult[1] = giftingBadgeTierIconUrl;
    tmp5 = giftingBadgeTierIconUrl;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== nextTier) {
    const tmpResult2 = GiftingBadgesUtils;
    const giftingBadgeTierIconUrl1 = tmpResult2.getGiftingBadgeTierIconUrl(nextTier);
    cResult[2] = nextTier;
    cResult[3] = giftingBadgeTierIconUrl1;
    tmp7 = giftingBadgeTierIconUrl1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === num) {
      if (cResult[6] === nextTier) {
        if (cResult[7] === progress) {
          if (cResult[8] === tmp4.container) {
            if (cResult[9] === tmp4.content) {
              if (cResult[10] === tmp4.labels) {
                if (cResult[11] === title) {
                  tmp9 = cResult[12];
                  tmp10 = cResult[13];
                  tmp11 = cResult[14];
                  tmp12 = cResult[15];
                  tmp13 = cResult[16];
                  tmp14 = cResult[17];
                  tmp15 = cResult[18];
                  tmp16 = cResult[19];
                  tmp17 = cResult[20];
                  tmp18 = cResult[21];
                }
                if (cResult[29] === tmp9) {
                  if (cResult[30] === tmp13) {
                    let tmp37;
                    if (cResult[31] === tmp14) {
                      tmp37 = cResult[32];
                    }
                    if (cResult[33] === tmp10) {
                      if (cResult[34] === tmp37) {
                        if (cResult[35] === tmp15) {
                          if (cResult[36] === tmp16) {
                            let tmp40;
                            if (cResult[37] === tmp17) {
                              tmp40 = cResult[38];
                            }
                            if (cResult[39] === num) {
                              let tmp43;
                              if (cResult[40] === tmp7) {
                                tmp43 = cResult[41];
                              }
                              if (cResult[42] === tmp11) {
                                if (cResult[43] === tmp12) {
                                  if (cResult[44] === tmp40) {
                                    if (cResult[45] === tmp43) {
                                      let tmp48;
                                      if (cResult[46] === tmp18) {
                                        tmp48 = cResult[47];
                                      }
                                      return tmp48;
                                    }
                                  }
                                }
                              }
                              const obj2 = { style: tmp18, children: items };
                              items = [tmp12, tmp40, tmp43];
                              const tmp50 = metroRequire(tmp11, obj2);
                              cResult[42] = tmp11;
                              cResult[43] = tmp12;
                              cResult[44] = tmp40;
                              cResult[45] = tmp43;
                              cResult[46] = tmp18;
                              cResult[47] = tmp50;
                              tmp48 = tmp50;
                            }
                            let tmp45 = null != tmp7;
                            if (tmp45) {
                              const obj3 = { icon: tmp7, size: num };
                              tmp45 = hasOwnProperty(GiftingBadgeIconDefault, obj3);
                            }
                            cResult[39] = num;
                            cResult[40] = tmp7;
                            cResult[41] = tmp45;
                            tmp43 = tmp45;
                          }
                        }
                      }
                    }
                    const obj4 = { style: tmp15, children: items1 };
                    items1 = [tmp16, tmp17, tmp37];
                    const tmp42 = metroRequire(tmp10, obj4);
                    cResult[33] = tmp10;
                    cResult[34] = tmp37;
                    cResult[35] = tmp15;
                    cResult[36] = tmp16;
                    cResult[37] = tmp17;
                    cResult[38] = tmp42;
                    tmp40 = tmp42;
                  }
                }
                const obj5 = { style: tmp13, children: tmp14 };
                const tmp39 = hasOwnProperty(tmp9, obj5);
                cResult[29] = tmp9;
                cResult[30] = tmp13;
                cResult[31] = tmp14;
                cResult[32] = tmp39;
                tmp37 = tmp39;
              }
            }
          }
        }
      }
    }
  }
  const tmp19 = closure_4(nextTier);
  let num7 = 100;
  const tmp20 = null != nextTier && tmp19 > 0;
  if (tmp20) {
    const _Math = Math;
    const _Math2 = Math;
    num7 = Math.min(Math.max(progress / tmp19 * 100, 0), 100);
  }
  const container = tmp4.container;
  if (cResult[22] === tmp5) {
    let tmp23;
    let tmp27;
    let tmp30;
    if (cResult[23] === num) {
      tmp23 = cResult[24];
    }
    const content = tmp4.content;
    if (cResult[25] !== title) {
      let tmp28 = null != title;
      if (tmp28) {
        const obj6 = { variant: "text-md/semibold", children: title };
        tmp28 = hasOwnProperty(tmp(5195).Text, obj6);
      }
      cResult[25] = title;
      cResult[26] = tmp28;
      tmp27 = tmp28;
    } else {
      tmp27 = cResult[26];
    }
    if (cResult[27] !== num7) {
      const obj7 = { percent: num7 };
      const tmp33 = hasOwnProperty(closure_7, obj7);
      cResult[27] = num7;
      cResult[28] = tmp33;
      tmp30 = tmp33;
    } else {
      tmp30 = cResult[28];
    }
    const labels = tmp4.labels;
    let tmp34 = null != nextTier;
    if (tmp34) {
      const obj8 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2622.iIpfQe, obj9) };
      const Text = tmp(5195).Text;
      intl = tmp(1128).intl;
      obj9 = { count: progress, threshold: tmp19 };
      tmp34 = hasOwnProperty(Text, obj8);
    }
    cResult[4] = tmp5;
    cResult[5] = num;
    cResult[6] = nextTier;
    cResult[7] = progress;
    cResult[8] = tmp4.container;
    cResult[9] = tmp4.content;
    cResult[10] = tmp4.labels;
    cResult[11] = title;
    cResult[12] = View;
    cResult[13] = View;
    cResult[14] = View;
    cResult[15] = tmp23;
    cResult[16] = labels;
    cResult[17] = tmp34;
    cResult[18] = content;
    cResult[19] = tmp27;
    cResult[20] = tmp30;
    cResult[21] = container;
    tmp14 = tmp34;
    tmp18 = container;
    tmp17 = tmp30;
    tmp16 = tmp27;
    tmp15 = content;
    tmp13 = labels;
    tmp12 = tmp23;
    tmp11 = tmp22;
    tmp10 = tmp22;
    tmp9 = tmp22;
  }
  let tmp24 = null != tmp5;
  if (tmp24) {
    const obj10 = { icon: tmp5, size: num };
    tmp24 = hasOwnProperty(GiftingBadgeIconDefault, obj10);
  }
  cResult[22] = tmp5;
  cResult[23] = num;
  cResult[24] = tmp24;
  tmp23 = tmp24;
}) : (function GiftingBadgeProgress(currentTier) {
  let iconSize;
  let intl;
  let items;
  let items1;
  let nextTier;
  let obj9;
  let progress;
  let tmp16Result;
  ({ progress, nextTier, iconSize } = currentTier);
  currentTier = currentTier.currentTier;
  if (iconSize === undefined) {
    iconSize = 24;
  }
  const title = currentTier.title;
  const tmp = closure_8();
  const obj = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(currentTier);
  const obj2 = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = obj2.getGiftingBadgeTierIconUrl(nextTier);
  const tmp6 = closure_4(nextTier);
  let num2 = 100;
  const tmp7 = null != nextTier && tmp6 > 0;
  if (tmp7) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp6 * 100, 0), 100);
  }
  let tmp11 = null != giftingBadgeTierIconUrl;
  const obj3 = { style: tmp.container, children: items };
  if (tmp11) {
    const obj4 = { icon: giftingBadgeTierIconUrl, size: iconSize };
    tmp11 = hasOwnProperty(GiftingBadgeIconDefault, obj4);
  }
  items = [tmp11, , ];
  let tmp14 = null != title;
  const obj5 = { style: tmp.content, children: items1 };
  if (tmp14) {
    const obj6 = { variant: "text-md/semibold", children: title };
    tmp14 = hasOwnProperty(tmp2(5195).Text, obj6);
  }
  items1 = [tmp14, hasOwnProperty(closure_7, { percent: num2 }), ];
  const obj7 = { style: tmp.labels, children: tmp16Result };
  tmp16Result = null != nextTier;
  if (tmp16Result) {
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2622.iIpfQe, obj9) };
    const Text = tmp2(5195).Text;
    intl = tmp2(1128).intl;
    obj9 = { count: progress, threshold: tmp6 };
    tmp16Result = tmp16(Text, obj8);
  }
  items1[2] = hasOwnProperty(View, obj7);
  items[1] = metroRequire(View, obj5);
  let tmp16Result2 = null != giftingBadgeTierIconUrl1;
  if (tmp16Result2) {
    const obj10 = { icon: giftingBadgeTierIconUrl1, size: iconSize };
    tmp16Result2 = tmp16(GiftingBadgeIconDefault, obj10);
  }
  items[2] = tmp16Result2;
  return metroRequire(View, obj3);
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default tmp5;
