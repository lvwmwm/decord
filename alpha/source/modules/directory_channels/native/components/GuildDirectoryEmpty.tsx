// Module ID: 12523
// Function ID: 12524
// Name: GuildDirectoryEmpty
// Dependencies: [19, 17, 4748, 1085, 21, 5092, 587, 558, 576, 1631, 504, 12003, 6156, 12524, 1126, 1200, 5088, 8579, 12004, 12525, 8682, 12526, 2]

// Module 12523 (GuildDirectoryEmpty)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8682 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12004 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let Fonts;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ InstantInviteSources: hasOwnProperty, Fonts } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { marginBottom: 16, alignSelf: "center" }, title: obj3, description: { textAlign: "center", alignSelf: "center", marginBottom: 24 }, ctaContainer: { marginBottom: 8 } };
obj2 = { flex: 1, justifyContent: "flex-end", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
let closure_8 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryEmpty(guild) {
  let first;
  let intl3;
  let items1;
  let stateFromStores;
  let tmp12;
  let tmp8;
  let obj = guild(stateFromStores[8]);
  const cResult = obj.c(39);
  guild = guild.guild;
  const channel = guild.channel;
  const tmp4 = closure_8();
  const bottom = channel(stateFromStores[9])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function s() {
      return GuildChannelStore.getChannels(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = guild(stateFromStores[10]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const tmpResult2 = guild(stateFromStores[11]);
  const canCreateOrAddGuildInDirectory = tmpResult2.useCanCreateOrAddGuildInDirectory(channel);
  const sum = bottom + 16;
  if (cResult[3] !== sum) {
    let obj2 = { paddingBottom: sum };
    cResult[3] = sum;
    cResult[4] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp4.container) {
    let tmp13;
    let tmp14;
    let tmp18;
    if (cResult[6] === tmp12) {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp4.header) {
      const obj3 = { source: channel(stateFromStores[13]), style: tmp4.header };
      const tmp5Result = channel(stateFromStores[12]);
      const tmp17 = closure_6(tmp5Result, obj3);
      cResult[8] = tmp4.header;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[9];
    }
    const title = tmp4.title;
    if (cResult[10] !== guild.name) {
      const intl = tmp(tmp2[14]).intl;
      const obj4 = { guildName: guild.name };
      const formatResult = intl.format(guild(stateFromStores[14]).t.vyvrpC, obj4);
      cResult[10] = guild.name;
      cResult[11] = formatResult;
      tmp18 = formatResult;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp4.title) {
      let tmp20;
      let tmp23;
      let tmp25;
      if (cResult[13] === tmp18) {
        tmp20 = cResult[14];
      }
      const _Symbol = Symbol;
      const description = tmp4.description;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[14]).intl;
        const stringResult = intl2.string(guild(stateFromStores[14]).t.WypE0i);
        cResult[15] = stringResult;
        tmp23 = stringResult;
      } else {
        tmp23 = cResult[15];
      }
      if (cResult[16] !== tmp4.description) {
        const obj5 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp23 };
        const tmp27 = closure_6(guild(stateFromStores[16]).Text, obj5);
        cResult[16] = tmp4.description;
        cResult[17] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[17];
      }
      if (cResult[18] === canCreateOrAddGuildInDirectory) {
        if (cResult[19] === channel.id) {
          if (cResult[20] === guild.id) {
            if (cResult[21] === guild.name) {
              let tmp28;
              if (cResult[22] === tmp4.ctaContainer) {
                tmp28 = cResult[23];
              }
              if (cResult[24] === channel.id) {
                if (cResult[25] === stateFromStores) {
                  let tmp32;
                  let tmp34;
                  if (cResult[26] === guild) {
                    tmp32 = cResult[27];
                  }
                  const _Symbol2 = Symbol;
                  class R {
                    constructor() {
                      const obj = instant_invite_InstantInviteUtils;
                      return obj.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, hasOwnProperty.HUB_EMPTY_STATE);
                    }
                  }
                  if (tmp33 === Symbol.for("react.memo_cache_sentinel")) {
                    const string = tmp(tmp2[14]).intl.string;
                    class R {
                      constructor() {
                        const obj = instant_invite_InstantInviteUtils;
                        return obj.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, hasOwnProperty.HUB_EMPTY_STATE);
                      }
                    }
                    cResult[28] = tmp35;
                    tmp34 = tmp35;
                  } else {
                    tmp34 = cResult[28];
                  }
                  if (cResult[29] === tmp4.ctaContainer) {
                    let tmp36;
                    if (cResult[30] === tmp32) {
                      tmp36 = cResult[31];
                    }
                    if (cResult[32] === tmp25) {
                      if (cResult[33] === tmp28) {
                        if (cResult[34] === tmp36) {
                          if (cResult[35] === tmp13) {
                            if (cResult[36] === tmp14) {
                              let tmp39;
                              if (cResult[37] === tmp20) {
                                tmp39 = cResult[38];
                              }
                              return tmp39;
                            }
                          }
                        }
                      }
                    }
                    class R {
                      constructor() {
                        const obj = instant_invite_InstantInviteUtils;
                        return obj.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, hasOwnProperty.HUB_EMPTY_STATE);
                      }
                    }
                    const obj6 = { contentContainerStyle: tmp13, children: items1 };
                    items1 = [tmp14, tmp20, tmp25, tmp28, tmp36];
                    const tmp41 = closure_7(ScrollView, obj6);
                    cResult[32] = tmp25;
                    cResult[33] = tmp28;
                    cResult[34] = tmp36;
                    cResult[35] = tmp13;
                    cResult[36] = tmp14;
                    cResult[37] = tmp20;
                    cResult[38] = tmp41;
                    tmp39 = tmp41;
                  }
                  const obj7 = { style: tmp31, onPress: tmp32, iconSource: channel(stateFromStores[21]), title: tmp34 };
                  const FormCTA2 = tmp(tmp2[17]).FormCTA;
                  const tmp38 = closure_6(FormCTA2, obj7);
                  cResult[29] = tmp4.ctaContainer;
                  cResult[30] = tmp32;
                  cResult[31] = tmp38;
                  tmp36 = tmp38;
                }
              }
              class R {
                constructor() {
                  const obj = instant_invite_InstantInviteUtils;
                  return obj.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, hasOwnProperty.HUB_EMPTY_STATE);
                }
              }
              cResult[24] = channel.id;
              cResult[25] = stateFromStores;
              cResult[26] = guild;
              cResult[27] = R;
              tmp32 = R;
            }
          }
        }
      }
      let tmp29 = null;
      if (canCreateOrAddGuildInDirectory) {
        const obj8 = {
          style: null,
          onPress() {
                  const obj = GuildDirectoryAddModalActionCreatorsDefault;
                  const obj2 = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
                  return obj.open(obj2);
                },
          iconSource: channel(stateFromStores[19]),
          title: intl3.string(guild(stateFromStores[14]).t.hyK15i)
        };
        class R {
          constructor() {
            const obj = instant_invite_InstantInviteUtils;
            return obj.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, hasOwnProperty.HUB_EMPTY_STATE);
          }
        }
        const FormCTA = tmp(tmp2[17]).FormCTA;
        intl3 = tmp(tmp2[14]).intl;
        tmp29 = closure_6(FormCTA, obj8);
      }
      cResult[18] = canCreateOrAddGuildInDirectory;
      cResult[19] = channel.id;
      cResult[20] = guild.id;
      cResult[21] = guild.name;
      cResult[22] = tmp4.ctaContainer;
      cResult[23] = tmp29;
      tmp28 = tmp29;
    }
    const obj9 = { style: title, accessibilityRole: "header", children: tmp18 };
    const tmp22 = closure_6(guild(stateFromStores[15]).LegacyText, obj9);
    cResult[12] = tmp4.title;
    cResult[13] = tmp18;
    cResult[14] = tmp22;
    tmp20 = tmp22;
  }
  const items2 = [tmp4.container, tmp12];
  cResult[5] = tmp4.container;
  cResult[6] = tmp12;
  cResult[7] = items2;
  tmp13 = items2;
}) : (function GuildDirectoryEmpty(guild) {
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let obj7;
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_8();
  const bottom = channel(1631)().bottom;
  let obj = guild(504);
  const items = [GuildChannelStore];
  dependencyMap = obj.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(12003);
  const obj3 = { contentContainerStyle: items1, children: items2 };
  items1 = [tmp.container, ];
  const obj4 = { paddingBottom: bottom + 16 };
  items1[1] = obj4;
  const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
  const obj5 = { source: channel(12524), style: tmp.header };
  const tmp9 = channel(6156);
  items2 = [closure_6(tmp9, obj5), , , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", children: intl.format(guild(1126).t.vyvrpC, obj7) };
  const LegacyText = guild(1200).LegacyText;
  intl = guild(1126).intl;
  obj7 = { guildName: guild.name };
  items2[1] = closure_6(LegacyText, obj6);
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(guild(1126).t.WypE0i) };
  const Text = guild(5088).Text;
  intl2 = guild(1126).intl;
  items2[2] = closure_6(Text, obj8);
  let tmp8Result = null;
  const tmp6 = closure_7;
  const tmp7 = ScrollView;
  if (canCreateOrAddGuildInDirectory) {
    const obj9 = {
      style: tmp.ctaContainer,
      onPress() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
          return obj.open(obj2);
        },
      iconSource: channel(12525),
      title: intl3.string(guild(1126).t.hyK15i)
    };
    const FormCTA = tmp4(8579).FormCTA;
    intl3 = tmp4(1126).intl;
    tmp8Result = tmp8(FormCTA, obj9);
  }
  items2[3] = tmp8Result;
  const obj10 = {
    style: tmp.ctaContainer,
    onPress() {
      const obj = instant_invite_InstantInviteUtils;
      return obj.handleOpenInviteActionsheet(guild, channel.id, closure_2, hasOwnProperty.HUB_EMPTY_STATE);
    },
    iconSource: channel(12526),
    title: intl4.string(guild(1126).t.L4bwJ9)
  };
  const FormCTA2 = tmp4(8579).FormCTA;
  intl4 = tmp4(1126).intl;
  items2[4] = closure_6(FormCTA2, obj10);
  return tmp6(tmp7, obj3);
});
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default tmp6;
