// Module ID: 9259
// Function ID: 9260
// Name: GameProfileGuildCard
// Dependencies: [19, 17, 21, 587, 4945, 558, 576, 6986, 9253, 6831, 5195, 9157, 1202, 1128, 5205, 2]

// Module 9259 (GameProfileGuildCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import Text_Text from "Text/Text" /* 5195 */;
import components_Button_Button from "components/Button/Button" /* 5205 */;
import GuildIcon from "GuildIcon" /* 6831 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6986 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 9157 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 9253 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const GameProfileSkeletonDefault = GameProfileSkeleton;

let closure_4;
let hasOwnProperty;
let obj10;
let obj11;
let obj12;
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
let size2;
let size3;
let size4;
let size5;
let size6;
let size7;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { card: obj2, guildContent: obj3, guildHeaderRow: obj4, guildIcon: size, guildIconImage: size1, guildIconLoading: obj5, guildInfo: obj6, guildNameDescriptionContainer: obj7, guildNameRow: obj8, guildName: { flexShrink: 1 }, memberCountsContainer: obj9, memberCountContainer: obj10, onlineEllipse: size2, membersEllipse: size3, skeletonGuildIcon: size4, skeletonGuildInfo: { flex: 1, justifyContent: "space-between", marginBottom: 2 }, skeletonGuildInfoSmall: obj11, skeletonGuildInfoLarge: obj12, skeletonGuildName: size5, skeletonGuildDescription: size6, skeletonMemberCounts: size7 };
obj2 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
size = { width: sum, height: sum, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: -nativeDefault.space.PX_4 };
size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj6 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
size3 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_DEFAULT };
size4 = { width: sum, height: sum, borderRadius: nativeDefault.radii.md, borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj11 = { height: nativeDefault.space.PX_96 + 2 };
obj12 = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
size5 = { width: "60%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
size6 = { width: "90%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileGuildCardSkeleton(animationDelayMs) {
  let items;
  let items1;
  let items2;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(28);
  animationDelayMs = animationDelayMs.animationDelayMs;
  const tmp4 = closure_6();
  const tmp6 = useIsWindowLargeDefault();
  if (cResult[0] !== tmp4.skeletonGuildIcon) {
    const obj2 = { style: tmp4.skeletonGuildIcon };
    const tmp9 = React3(GameProfileSkeletonDefault, obj2);
    cResult[0] = tmp4.skeletonGuildIcon;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  const tmp10 = tmp6 ? tmp4.skeletonGuildInfoLarge : tmp4.skeletonGuildInfoSmall;
  if (cResult[2] === tmp4.skeletonGuildInfo) {
    let tmp11;
    let tmp12;
    let tmp15;
    let tmp18;
    if (cResult[3] === tmp10) {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== tmp4.skeletonGuildName) {
      const obj3 = { style: tmp4.skeletonGuildName };
      const tmp14 = React3(GameProfileSkeletonDefault, obj3);
      cResult[5] = tmp4.skeletonGuildName;
      cResult[6] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== tmp4.skeletonGuildDescription) {
      const obj4 = { style: tmp4.skeletonGuildDescription };
      const tmp17 = React3(GameProfileSkeletonDefault, obj4);
      cResult[7] = tmp4.skeletonGuildDescription;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] !== tmp4.skeletonMemberCounts) {
      const obj5 = { style: tmp4.skeletonMemberCounts };
      const tmp20 = React3(GameProfileSkeletonDefault, obj5);
      cResult[9] = tmp4.skeletonMemberCounts;
      cResult[10] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[10];
    }
    if (cResult[11] === tmp11) {
      if (cResult[12] === tmp12) {
        if (cResult[13] === tmp15) {
          let tmp21;
          if (cResult[14] === tmp18) {
            tmp21 = cResult[15];
          }
          if (cResult[16] === tmp4.guildHeaderRow) {
            if (cResult[17] === tmp7) {
              let tmp25;
              let tmp30;
              if (cResult[18] === tmp21) {
                tmp25 = cResult[19];
              }
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp32 = React3(GameProfileSkeleton.GameProfileSkeletonButton, {});
                cResult[20] = tmp32;
                tmp30 = tmp32;
              } else {
                tmp30 = cResult[20];
              }
              if (cResult[21] === animationDelayMs) {
                if (cResult[22] === tmp4.guildContent) {
                  let tmp33;
                  if (cResult[23] === tmp25) {
                    tmp33 = cResult[24];
                  }
                  if (cResult[25] === tmp4.card) {
                    let tmp36;
                    if (cResult[26] === tmp33) {
                      tmp36 = cResult[27];
                    }
                    return tmp36;
                  }
                  const obj6 = { style: tmp4.card, children: tmp33 };
                  const tmp39 = React3(View, obj6);
                  cResult[25] = tmp4.card;
                  cResult[26] = tmp33;
                  cResult[27] = tmp39;
                  tmp36 = tmp39;
                }
              }
              const obj7 = { animationDelayMs, style: tmp4.guildContent, children: items };
              items = [tmp25, tmp30];
              const tmp35 = hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonContainer, obj7);
              cResult[21] = animationDelayMs;
              cResult[22] = tmp4.guildContent;
              cResult[23] = tmp25;
              cResult[24] = tmp35;
              tmp33 = tmp35;
            }
          }
          const obj8 = { style: tmp4.guildHeaderRow, children: items1 };
          items1 = [tmp7, tmp21];
          const tmp28 = hasOwnProperty(View, obj8);
          cResult[16] = tmp4.guildHeaderRow;
          cResult[17] = tmp7;
          cResult[18] = tmp21;
          cResult[19] = tmp28;
          tmp25 = tmp28;
        }
      }
    }
    const obj9 = { style: tmp11, children: items2 };
    items2 = [tmp12, tmp15, tmp18];
    const tmp24 = hasOwnProperty(View, obj9);
    cResult[11] = tmp11;
    cResult[12] = tmp12;
    cResult[13] = tmp15;
    cResult[14] = tmp18;
    cResult[15] = tmp24;
    tmp21 = tmp24;
  }
  const items3 = [tmp4.skeletonGuildInfo, tmp10];
  cResult[2] = tmp4.skeletonGuildInfo;
  cResult[3] = tmp10;
  cResult[4] = items3;
  tmp11 = items3;
}) : (function GameProfileGuildCardSkeleton(animationDelayMs) {
  let GameProfileSkeletonContainer;
  let items;
  let items2;
  let items3;
  let obj2;
  animationDelayMs = animationDelayMs.animationDelayMs;
  const tmp = closure_6();
  const obj = { style: tmp.card, children: hasOwnProperty(GameProfileSkeletonContainer, obj2) };
  obj2 = { animationDelayMs, style: tmp.guildContent, children: items3 };
  const obj3 = { style: tmp.guildHeaderRow, children: items };
  const tmp4 = useIsWindowLargeDefault();
  GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  items = [, ];
  const obj4 = { style: tmp.skeletonGuildIcon };
  items[0] = React3(GameProfileSkeletonDefault, obj4);
  const items1 = [tmp.skeletonGuildInfo, ];
  const obj5 = { style: items1, children: items2 };
  items1[1] = tmp4 ? tmp.skeletonGuildInfoLarge : tmp.skeletonGuildInfoSmall;
  items2 = [, , ];
  const obj6 = { style: tmp.skeletonGuildName };
  items2[0] = React3(GameProfileSkeletonDefault, obj6);
  const obj7 = { style: tmp.skeletonGuildDescription };
  items2[1] = React3(GameProfileSkeletonDefault, obj7);
  const obj8 = { style: tmp.skeletonMemberCounts };
  items2[2] = React3(GameProfileSkeletonDefault, obj8);
  items[1] = hasOwnProperty(View, obj5);
  items3 = [hasOwnProperty(View, obj3), React3(GameProfileSkeleton.GameProfileSkeletonButton, {})];
  return React3(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileGuildCard(arg0) {
  let buttonText;
  let guild;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let memberCount;
  let obj14;
  let obj18;
  let onJoin;
  let presenceCount;
  const obj = react2;
  const cResult = obj.c(52);
  ({ guild, presenceCount, memberCount, buttonText, onJoin } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === guild) {
    if (cResult[1] === tmp4.guildIconImage) {
      let tmp5;
      if (cResult[2] === tmp4.guildIconLoading) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4.guildIcon) {
        let tmp8;
        if (cResult[5] === tmp5) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === guild.name) {
          let tmp12;
          let tmp15;
          if (cResult[8] === tmp4.guildName) {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== guild) {
            const obj3 = { guild, size: native.Icon.Sizes.REFRESH_SMALL_16 };
            const tmp18 = GuildBadgeV2Default;
            const tmp19 = React3(tmp18, obj3);
            cResult[10] = guild;
            cResult[11] = tmp19;
            tmp15 = tmp19;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp4.guildNameRow) {
            if (cResult[13] === tmp12) {
              let tmp20;
              let tmp24;
              if (cResult[14] === tmp15) {
                tmp20 = cResult[15];
              }
              if (cResult[16] !== guild.description) {
                const obj4 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: guild.description };
                const tmp26 = React3(Text_Text.Text, obj4);
                cResult[16] = guild.description;
                cResult[17] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[17];
              }
              if (cResult[18] === tmp4.guildNameDescriptionContainer) {
                if (cResult[19] === tmp20) {
                  let tmp27;
                  if (cResult[20] === tmp24) {
                    tmp27 = cResult[21];
                  }
                  if (cResult[22] === presenceCount) {
                    if (cResult[23] === tmp4.memberCountContainer) {
                      let tmp31;
                      if (cResult[24] === tmp4.onlineEllipse) {
                        tmp31 = cResult[25];
                      }
                      if (cResult[26] === memberCount) {
                        if (cResult[27] === tmp4.memberCountContainer) {
                          let tmp36;
                          if (cResult[28] === tmp4.membersEllipse) {
                            tmp36 = cResult[29];
                          }
                          if (cResult[30] === tmp4.memberCountsContainer) {
                            if (cResult[31] === tmp31) {
                              let tmp41;
                              if (cResult[32] === tmp36) {
                                tmp41 = cResult[33];
                              }
                              if (cResult[34] === tmp4.guildInfo) {
                                if (cResult[35] === tmp41) {
                                  let tmp45;
                                  if (cResult[36] === tmp27) {
                                    tmp45 = cResult[37];
                                  }
                                  if (cResult[38] === tmp4.guildHeaderRow) {
                                    if (cResult[39] === tmp45) {
                                      let tmp49;
                                      if (cResult[40] === tmp8) {
                                        tmp49 = cResult[41];
                                      }
                                      if (cResult[42] === buttonText) {
                                        let tmp53;
                                        if (cResult[43] === onJoin) {
                                          tmp53 = cResult[44];
                                        }
                                        if (cResult[45] === tmp4.guildContent) {
                                          if (cResult[46] === tmp49) {
                                            let tmp56;
                                            if (cResult[47] === tmp53) {
                                              tmp56 = cResult[48];
                                            }
                                            if (cResult[49] === tmp4.card) {
                                              let tmp60;
                                              if (cResult[50] === tmp56) {
                                                tmp60 = cResult[51];
                                              }
                                              return tmp60;
                                            }
                                            const obj5 = { style: tmp4.card, children: tmp56 };
                                            const tmp63 = React3(View, obj5);
                                            cResult[49] = tmp4.card;
                                            cResult[50] = tmp56;
                                            cResult[51] = tmp63;
                                            tmp60 = tmp63;
                                          }
                                        }
                                        const obj6 = { style: tmp4.guildContent, children: items };
                                        items = [tmp49, tmp53];
                                        const tmp59 = hasOwnProperty(View, obj6);
                                        cResult[45] = tmp4.guildContent;
                                        cResult[46] = tmp49;
                                        cResult[47] = tmp53;
                                        cResult[48] = tmp59;
                                        tmp56 = tmp59;
                                      }
                                      const obj7 = { variant: "secondary", size: "md", text: buttonText, onPress: onJoin };
                                      const tmp55 = React3(components_Button_Button.Button, obj7);
                                      cResult[42] = buttonText;
                                      cResult[43] = onJoin;
                                      cResult[44] = tmp55;
                                      tmp53 = tmp55;
                                    }
                                  }
                                  const obj8 = { style: tmp4.guildHeaderRow, children: items1 };
                                  items1 = [tmp8, tmp45];
                                  const tmp52 = hasOwnProperty(View, obj8);
                                  cResult[38] = tmp4.guildHeaderRow;
                                  cResult[39] = tmp45;
                                  cResult[40] = tmp8;
                                  cResult[41] = tmp52;
                                  tmp49 = tmp52;
                                }
                              }
                              const obj9 = { style: tmp4.guildInfo, children: items2 };
                              items2 = [tmp27, tmp41];
                              const tmp48 = hasOwnProperty(View, obj9);
                              cResult[34] = tmp4.guildInfo;
                              cResult[35] = tmp41;
                              cResult[36] = tmp27;
                              cResult[37] = tmp48;
                              tmp45 = tmp48;
                            }
                          }
                          const obj10 = { style: tmp4.memberCountsContainer, children: items3 };
                          items3 = [tmp31, tmp36];
                          const tmp44 = hasOwnProperty(View, obj10);
                          cResult[30] = tmp4.memberCountsContainer;
                          cResult[31] = tmp31;
                          cResult[32] = tmp36;
                          cResult[33] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                      let tmp37 = null;
                      if (null != memberCount) {
                        const obj11 = { style: tmp4.memberCountContainer, children: items4 };
                        const obj12 = { style: tmp4.membersEllipse };
                        items4 = [React3(View, obj12), ];
                        const obj13 = { variant: "text-xs/normal", color: "text-default", children: intl2.formatToPlainString(intl3.t.zRl6XR, obj14) };
                        const Text2 = tmp(5195).Text;
                        intl2 = tmp(1128).intl;
                        obj14 = { count: memberCount };
                        items4[1] = React3(Text2, obj13);
                        tmp37 = hasOwnProperty(View, obj11);
                      }
                      cResult[26] = memberCount;
                      cResult[27] = tmp4.memberCountContainer;
                      cResult[28] = tmp4.membersEllipse;
                      cResult[29] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                  let tmp32 = null;
                  if (null != presenceCount) {
                    const obj15 = { style: tmp4.memberCountContainer, children: items5 };
                    const obj16 = { style: tmp4.onlineEllipse };
                    items5 = [React3(View, obj16), ];
                    const obj17 = { variant: "text-xs/normal", color: "text-default", children: intl.formatToPlainString(intl3.t["LC+S+m"], obj18) };
                    const Text = tmp(5195).Text;
                    intl = tmp(1128).intl;
                    obj18 = { membersOnline: presenceCount };
                    items5[1] = React3(Text, obj17);
                    tmp32 = hasOwnProperty(View, obj15);
                  }
                  cResult[22] = presenceCount;
                  cResult[23] = tmp4.memberCountContainer;
                  cResult[24] = tmp4.onlineEllipse;
                  cResult[25] = tmp32;
                  tmp31 = tmp32;
                }
              }
              const obj19 = { style: tmp4.guildNameDescriptionContainer, children: items6 };
              items6 = [tmp20, tmp24];
              const tmp30 = hasOwnProperty(View, obj19);
              cResult[18] = tmp4.guildNameDescriptionContainer;
              cResult[19] = tmp20;
              cResult[20] = tmp24;
              cResult[21] = tmp30;
              tmp27 = tmp30;
            }
          }
          const obj20 = { style: tmp4.guildNameRow, children: items7 };
          items7 = [tmp12, tmp15];
          const tmp23 = hasOwnProperty(View, obj20);
          cResult[12] = tmp4.guildNameRow;
          cResult[13] = tmp12;
          cResult[14] = tmp15;
          cResult[15] = tmp23;
          tmp20 = tmp23;
        }
        const obj21 = { style: tmp4.guildName, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: guild.name };
        const tmp14 = React3(Text_Text.Text, obj21);
        cResult[7] = guild.name;
        cResult[8] = tmp4.guildName;
        cResult[9] = tmp14;
        tmp12 = tmp14;
      }
      const obj22 = { style: tmp4.guildIcon, children: tmp5 };
      const tmp11 = React3(View, obj22);
      cResult[4] = tmp4.guildIcon;
      cResult[5] = tmp5;
      cResult[6] = tmp11;
      tmp8 = tmp11;
    }
  }
  const obj43 = { guild, size: GuildIcon.GuildIconSizes.LARGE, style: null, loadingStyle: null };
  ({ guildIconImage: obj2.style, guildIconLoading: obj2.loadingStyle } = tmp4);
  const tmp6 = GuildIconDefault;
  const tmp7 = React3(tmp6, obj43);
  cResult[0] = guild;
  cResult[1] = tmp4.guildIconImage;
  cResult[2] = tmp4.guildIconLoading;
  cResult[3] = tmp7;
  tmp5 = tmp7;
}) : (function GameProfileGuildCard(arg0) {
  let buttonText;
  let guild;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let memberCount;
  let obj17;
  let obj2;
  let obj39;
  let obj6;
  let onJoin;
  let presenceCount;
  let tmp6;
  ({ guild, presenceCount, memberCount } = arg0);
  ({ buttonText, onJoin } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.card, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.guildContent, children: items7 };
  const obj3 = { style: tmp.guildHeaderRow, children: items };
  const obj4 = { style: tmp.guildIcon, children: React3(tmp6, obj6) };
  obj6 = { guild, size: GuildIcon.GuildIconSizes.LARGE, style: null, loadingStyle: null };
  ({ guildIconImage: obj5.style, guildIconLoading: obj5.loadingStyle } = tmp);
  tmp6 = GuildIconDefault;
  items = [React3(View, obj4), ];
  const obj9 = { style: tmp.guildNameRow, children: items1 };
  items1 = [, ];
  const obj10 = { style: tmp.guildName, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: guild.name };
  const obj7 = { style: tmp.guildInfo, children: items3 };
  const obj8 = { style: tmp.guildNameDescriptionContainer, children: items2 };
  items1[0] = React3(Text_Text.Text, obj10);
  const obj11 = { guild, size: native.Icon.Sizes.REFRESH_SMALL_16 };
  const tmp8 = GuildBadgeV2Default;
  items1[1] = React3(tmp8, obj11);
  items2 = [hasOwnProperty(View, obj9), ];
  const obj12 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: guild.description };
  items2[1] = React3(Text_Text.Text, obj12);
  items3 = [hasOwnProperty(View, obj8), ];
  let tmp4Result = null;
  const obj13 = { style: tmp.memberCountsContainer, children: items5 };
  if (null != presenceCount) {
    const obj14 = { style: tmp.memberCountContainer, children: items4 };
    const obj15 = { style: tmp.onlineEllipse };
    items4 = [React3(View, obj15), ];
    const obj16 = { variant: "text-xs/normal", color: "text-default", children: intl.formatToPlainString(intl3.t["LC+S+m"], obj17) };
    const Text = tmp7(5195).Text;
    intl = tmp7(1128).intl;
    obj17 = { membersOnline: presenceCount };
    items4[1] = React3(Text, obj16);
    tmp4Result = tmp4(tmp3, obj14);
  }
  items5 = [tmp4Result, ];
  let tmp4Result2 = null;
  if (null != memberCount) {
    const obj18 = { style: tmp.memberCountContainer, children: items6 };
    const obj19 = { style: tmp.membersEllipse };
    items6 = [React3(View, obj19), ];
    const obj20 = { variant: "text-xs/normal", color: "text-default", children: intl2.formatToPlainString(intl3.t.zRl6XR, obj39) };
    const Text2 = tmp7(5195).Text;
    intl2 = tmp7(1128).intl;
    obj39 = { count: memberCount };
    items6[1] = React3(Text2, obj20);
    tmp4Result2 = tmp4(tmp3, obj18);
  }
  items5[1] = tmp4Result2;
  items3[1] = hasOwnProperty(View, obj13);
  items[1] = hasOwnProperty(View, obj7);
  items7 = [hasOwnProperty(View, obj3), React3(components_Button_Button.Button, { variant: "secondary", size: "md", text: buttonText, onPress: onJoin })];
  return React3(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileGuildCard.tsx");

export default tmp7;
export const GameProfileGuildCardSkeleton = tmp6;
