// Module ID: 9489
// Function ID: 9490
// Name: ExpressionGuildDetails
// Dependencies: [19, 17, 6162, 21, 5090, 587, 558, 576, 6161, 1414, 6164, 5086, 1126, 6189, 9488, 6167, 1200, 2]

// Module 9489 (ExpressionGuildDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import Text_Text from "Text/Text" /* 5086 */;
import GuildIconDefault from "GuildIcon" /* 6161 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 6162 */;
import FastImageDefault from "FastImage" /* 6164 */;
import guild_GuildUtils from "guild/GuildUtils" /* 9488 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guild;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let tmp10;
const GuildBadgeDefault = tmp10(6167);
const View = react_native.View;
let closure_4 = ExpressionSourceRecord.ExpressionSourceGuildRecord;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { guildDetailsContainer: { flexDirection: "column" }, guildDetailsContent: { flexDirection: "row", marginTop: 8, alignItems: "center" }, guildIcon: size, guildNameAndOnlineMembers: { flexDirection: "column" }, guildNameWrapper: { flexDirection: "row", alignItems: "center", marginRight: 32 }, guildPartnerIcon: { marginRight: 8 }, guildDescriptionSection: { flexDirection: "row", alignItems: "center", marginTop: 4 }, dotSeparator: size1, joinGuildButton: obj2 };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, marginRight: 12 };
createStyles = createStyles.createStyles;
size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2 = { borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, paddingHorizontal: 4, paddingBottom: 2 };
let closure_8 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let closure_0;
  let hasJoinedGuild;
  let items;
  let items1;
  let items2;
  let items3;
  let title;
  let tmp12;
  let tmp6;
  let tmp = _require;
  let tmp2 = hasJoinedGuild;
  let obj = require("react");
  const cResult = obj.c(49);
  guild = guild.guild;
  ({ title, hasJoinedGuild } = guild);
  const showingJoinGuildCta = guild.showingJoinGuildCta;
  const tmp4 = closure_8();
  closure_4 = tmp4;
  if (cResult[0] !== guild) {
    let tmp7 = closure_4;
    const fromGuildType = closure_4.createFromGuildType(guild);
    _require = fromGuildType;
    const isDiscoverableResult = fromGuildType.isDiscoverable();
    cResult[0] = guild;
    cResult[1] = fromGuildType;
    cResult[2] = isDiscoverableResult;
    tmp6 = isDiscoverableResult;
  } else {
    _require = cResult[1];
    tmp6 = cResult[2];
  }
  let closure_5 = tmp6;
  if (!closure_5) {
    if (!hasJoinedGuild) {
      if (cResult[6] === guild.icon) {
        let tmp9;
        if (cResult[7] === guild.id) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp4.guildIcon) {
            tmp12 = cResult[11];
          }
        }
        let obj2 = { style: tmp4.guildIcon, source: tmp9 };
        const tmp15 = closure_5(guild(tmp2[10]), obj2);
        cResult[9] = tmp9;
        cResult[10] = tmp4.guildIcon;
        cResult[11] = tmp15;
        tmp12 = tmp15;
      }
      let obj3 = guild(tmp2[9]);
      let obj5 = { id: null, icon: null, canAnimate: true, size: 32 };
      ({ id: obj4.id, icon: obj4.icon } = guild);
      const guildIconSource = obj3.getGuildIconSource(obj5);
      cResult[6] = guild.icon;
      cResult[7] = guild.id;
      cResult[8] = guildIconSource;
      tmp9 = guildIconSource;
    }
    if (cResult[12] === tmp5.presenceCount) {
      if (cResult[13] === guild.id) {
        if (cResult[14] === hasJoinedGuild) {
          if (cResult[15] === showingJoinGuildCta) {
            if (cResult[16] === tmp4.dotSeparator) {
              let tmp19;
              if (cResult[17] === tmp4.joinGuildButton) {
                tmp19 = cResult[18];
              }
              let closure_6 = tmp19;
              if (cResult[19] === tmp5.presenceCount) {
                if (cResult[20] === tmp6) {
                  if (cResult[21] === tmp19) {
                    let tmp20;
                    let tmp21;
                    if (cResult[22] === tmp4.guildDescriptionSection) {
                      tmp20 = cResult[23];
                    }
                    const guildDetailsContainer = tmp4.guildDetailsContainer;
                    if (cResult[24] !== title) {
                      let obj6 = { variant: "eyebrow", color: "text-default", children: title };
                      const tmp23 = closure_5(tmp(tmp2[11]).Text, obj6);
                      cResult[24] = title;
                      cResult[25] = tmp23;
                      tmp21 = tmp23;
                    } else {
                      tmp21 = cResult[25];
                    }
                    if (cResult[26] === guild) {
                      let tmp26;
                      let tmp31;
                      if (cResult[27] === tmp4.guildPartnerIcon) {
                        tmp26 = cResult[28];
                      }
                      if (cResult[29] !== guild.name) {
                        let obj7 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: guild.name };
                        const tmp33 = closure_5(tmp(tmp2[11]).Text, obj7);
                        cResult[29] = guild.name;
                        cResult[30] = tmp33;
                        tmp31 = tmp33;
                      } else {
                        tmp31 = cResult[30];
                      }
                      if (cResult[31] === tmp4.guildNameWrapper) {
                        if (cResult[32] === tmp31) {
                          let tmp34;
                          let tmp38;
                          if (cResult[33] === tmp26) {
                            tmp34 = cResult[34];
                          }
                          if (cResult[35] !== tmp20) {
                            const tmp20Result = tmp20();
                            cResult[35] = tmp20;
                            cResult[36] = tmp20Result;
                            tmp38 = tmp20Result;
                          } else {
                            tmp38 = cResult[36];
                          }
                          if (cResult[37] === tmp4.guildNameAndOnlineMembers) {
                            if (cResult[38] === tmp34) {
                              let tmp40;
                              if (cResult[39] === tmp38) {
                                tmp40 = cResult[40];
                              }
                              if (cResult[41] === tmp12) {
                                if (cResult[42] === tmp4.guildDetailsContent) {
                                  let tmp44;
                                  if (cResult[43] === tmp40) {
                                    tmp44 = cResult[44];
                                  }
                                  if (cResult[45] === tmp4.guildDetailsContainer) {
                                    if (cResult[46] === tmp44) {
                                      let tmp48;
                                      if (cResult[47] === tmp21) {
                                        tmp48 = cResult[48];
                                      }
                                      return tmp48;
                                    }
                                  }
                                  const obj8 = { style: guildDetailsContainer, children: items };
                                  items = [tmp21, tmp44];
                                  const tmp51 = closure_7(showingJoinGuildCta, obj8);
                                  cResult[45] = tmp4.guildDetailsContainer;
                                  cResult[46] = tmp44;
                                  cResult[47] = tmp21;
                                  cResult[48] = tmp51;
                                  tmp48 = tmp51;
                                }
                              }
                              const obj9 = { style: tmp24, children: items1 };
                              items1 = [tmp12, tmp40];
                              const tmp47 = closure_7(showingJoinGuildCta, obj9);
                              cResult[41] = tmp12;
                              cResult[42] = tmp4.guildDetailsContent;
                              cResult[43] = tmp40;
                              cResult[44] = tmp47;
                              tmp44 = tmp47;
                            }
                          }
                          const obj10 = { style: tmp25, children: items2 };
                          items2 = [tmp34, tmp38];
                          const tmp43 = closure_7(showingJoinGuildCta, obj10);
                          cResult[37] = tmp4.guildNameAndOnlineMembers;
                          cResult[38] = tmp34;
                          cResult[39] = tmp38;
                          cResult[40] = tmp43;
                          tmp40 = tmp43;
                        }
                      }
                      const obj11 = { style: tmp4.guildNameWrapper, children: items3 };
                      items3 = [tmp26, tmp31];
                      const tmp37 = closure_7(showingJoinGuildCta, obj11);
                      cResult[31] = tmp4.guildNameWrapper;
                      cResult[32] = tmp31;
                      cResult[33] = tmp26;
                      cResult[34] = tmp37;
                      tmp34 = tmp37;
                    }
                    const obj12 = { guild, style: tmp4.guildPartnerIcon, size: tmp(tmp2[16]).Icon.Sizes.REFRESH_SMALL_16, disableColor: true };
                    const tmp29 = guild(tmp2[15]);
                    const tmp30 = closure_5(tmp29, obj12);
                    cResult[26] = guild;
                    cResult[27] = tmp4.guildPartnerIcon;
                    cResult[28] = tmp30;
                    tmp26 = tmp30;
                  }
                }
              }
              function renderGuildDescriptionSection() {
                let intl;
                const obj = { style: closure_4.guildDescriptionSection, children: null };
                const tmp3 = hasOwnProperty;
                if (tmp3) {
                  let tmpResult;
                  if (null != closure_0.presenceCount) {
                    tmpResult = closure_6();
                  }
                  obj.children = tmpResult;
                  return hasOwnProperty(tmp2, obj);
                }
                const obj2 = { variant: "text-xs/medium", color: "text-default", children: intl.string(intl5.t.H29mx4) };
                const Text = Text_Text.Text;
                intl = intl5.intl;
                tmpResult = tmp(Text, obj2);
              }
              cResult[19] = tmp5.presenceCount;
              cResult[20] = tmp6;
              cResult[21] = tmp19;
              cResult[22] = tmp4.guildDescriptionSection;
              cResult[23] = renderGuildDescriptionSection;
              tmp20 = renderGuildDescriptionSection;
            }
          }
        }
      }
    }
    const fn = function f() {
      let Text2;
      let id;
      let intl;
      let intl2;
      let intl3;
      let obj2;
      let obj5;
      let obj = { variant: "text-xs/medium", color: "text-default", children: intl.format(intl5.t["LC+S+m"], obj2) };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      obj2 = { membersOnline: closure_0.presenceCount };
      const items = [hasOwnProperty(Text, obj), , ];
      const obj3 = { style: closure_4.dotSeparator };
      items[1] = hasOwnProperty(View, obj3);
      const tmp = metroImportDefault;
      const tmp2 = metroRequire;
      const tmp6 = closure_4;
      const tmp7 = hasJoinedGuild;
      if (!tmp7) {
        let tmp3Result;
        const tmp8 = showingJoinGuildCta;
        if (!tmp8) {
          const obj4 = {
            style: tmp6.joinGuildButton,
            onPress() {
                  const obj = closure_0(hasJoinedGuild[14]);
                  return obj.handleJoinGuild(id.id);
                },
            children: hasOwnProperty(Text2, obj5)
          };
          const PressableOpacity = tmp4(6189).PressableOpacity;
          obj5 = { variant: "text-xs/medium", color: "text-default", children: intl2.string(intl5.t.riu2R5) };
          Text2 = tmp4(5086).Text;
          intl2 = tmp4(1126).intl;
          tmp3Result = tmp3(PressableOpacity, obj4);
        }
        const obj6 = { children: items };
        items[2] = tmp3Result;
        return tmp(tmp2, obj6);
      }
      const obj7 = { variant: "text-xs/medium", color: "text-default", children: intl3.string(intl5.t.inyJqO) };
      const Text3 = tmp4(5086).Text;
      intl3 = tmp4(1126).intl;
      tmp3Result = tmp3(Text3, obj7);
    };
    cResult[12] = tmp5.presenceCount;
    cResult[13] = guild.id;
    cResult[14] = hasJoinedGuild;
    cResult[15] = showingJoinGuildCta;
    cResult[16] = tmp4.dotSeparator;
    cResult[17] = tmp4.joinGuildButton;
    cResult[18] = fn;
    tmp19 = fn;
  }
  if (cResult[3] === tmp5) {
    let tmp16;
    if (cResult[4] === tmp4.guildIcon) {
      tmp16 = cResult[5];
    }
    tmp12 = tmp16;
  }
  const obj13 = { style: tmp4.guildIcon, guild: tmp5, size: tmp(tmp2[8]).GuildIconSizes.XLARGE, animate: true };
  const tmp17 = guild(tmp2[8]);
  const tmp18 = closure_5(tmp17, obj13);
  cResult[3] = tmp5;
  cResult[4] = tmp4.guildIcon;
  cResult[5] = tmp18;
  tmp16 = tmp18;
}) : ((guild) => {
  let Text3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj14;
  let obj17;
  let showingJoinGuildCta;
  let title;
  guild = guild.guild;
  const hasJoinedGuild = guild.hasJoinedGuild;
  ({ title, showingJoinGuildCta } = guild);
  const tmp = closure_8();
  const fromGuildType = closure_4.createFromGuildType(guild);
  const isDiscoverableResult = fromGuildType.isDiscoverable();
  if (!isDiscoverableResult) {
    let tmp7;
    let tmp9;
    let tmp12;
    if (!hasJoinedGuild) {
      let obj = { id: null, icon: null, canAnimate: true, size: 32 };
      ({ id: obj3.id, icon: obj3.icon } = guild);
      const obj2 = AvatarUtilsDefault;
      const guildIconSource = obj2.getGuildIconSource(obj);
      const obj4 = { style: tmp.guildIcon, source: guildIconSource };
      tmp7 = closure_5(FastImageDefault, obj4);
      tmp9 = closure_5;
      tmp12 = closure_5;
    }
    const obj5 = { style: tmp.guildDetailsContainer, children: null };
    const obj6 = { variant: "eyebrow", color: "text-default", children: title };
    const items = [tmp12(guild(5086).Text, obj6), ];
    const obj7 = { style: tmp.guildDetailsContent, children: null };
    const items1 = [tmp7, ];
    const obj8 = { style: tmp.guildNameAndOnlineMembers, children: null };
    const obj9 = { style: tmp.guildNameWrapper, children: items2 };
    const obj10 = { guild, style: tmp.guildPartnerIcon, size: guild(1200).Icon.Sizes.REFRESH_SMALL_16, disableColor: true };
    const tmp10Result = GuildBadgeDefault;
    items2 = [tmp12(tmp10Result, obj10), ];
    const obj11 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: guild.name };
    items2[1] = tmp12(guild(5086).Text, obj11);
    const items3 = [closure_7(View, obj9), ];
    const obj12 = { style: tmp.guildDescriptionSection, children: null };
    if (isDiscoverableResult) {
      let tmp9Result1;
      if (null != fromGuildType.presenceCount) {
        const obj13 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(guild(1126).t["LC+S+m"], obj14) };
        const Text2 = tmp16(5086).Text;
        intl2 = tmp16(1126).intl;
        obj14 = { membersOnline: fromGuildType.presenceCount };
        const items4 = [tmp9(Text2, obj13), , ];
        const obj15 = { style: tmp.dotSeparator };
        items4[1] = tmp9(View, obj15);
        const tmp20 = closure_6;
        if (!hasJoinedGuild) {
          let tmp9Result;
          if (!showingJoinGuildCta) {
            const obj16 = {
              style: tmp.joinGuildButton,
              onPress() {
                          const obj = guild_GuildUtils;
                          return obj.handleJoinGuild(guild.id);
                        },
              children: tmp9(Text3, obj17)
            };
            const PressableOpacity = tmp16(6189).PressableOpacity;
            obj17 = { variant: "text-xs/medium", color: "text-default", children: intl3.string(guild(1126).t.riu2R5) };
            Text3 = tmp16(5086).Text;
            intl3 = tmp16(1126).intl;
            tmp9Result = tmp9(PressableOpacity, obj16);
          }
          const obj18 = { children: items4 };
          items4[2] = tmp9Result;
          tmp9Result1 = tmp14(tmp20, obj18);
        }
        const obj19 = { variant: "text-xs/medium", color: "text-default", children: intl4.string(guild(1126).t.inyJqO) };
        const Text4 = tmp16(5086).Text;
        intl4 = tmp16(1126).intl;
        tmp9Result = tmp9(Text4, obj19);
      }
      obj12.children = tmp9Result1;
      items3[1] = tmp9(View, obj12);
      obj8.children = items3;
      items1[1] = closure_7(View, obj8);
      obj7.children = items1;
      items[1] = closure_7(View, obj7);
      obj5.children = items;
      return closure_7(View, obj5);
    }
    const obj20 = { variant: "text-xs/medium", color: "text-default", children: intl.string(guild(1126).t.H29mx4) };
    const Text = tmp16(5086).Text;
    intl = tmp16(1126).intl;
    tmp9Result1 = tmp9(Text, obj20);
  }
  const obj21 = { style: tmp.guildIcon, guild: fromGuildType, size: guild(6161).GuildIconSizes.XLARGE, animate: true };
  const tmp13 = GuildIconDefault;
  tmp7 = closure_5(tmp13, obj21);
  tmp9 = closure_5;
  tmp12 = closure_5;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default tmp5;
export const ExpressionGuildDetails = tmp5;
