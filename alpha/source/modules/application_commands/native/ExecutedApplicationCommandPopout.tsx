// Module ID: 9616
// Function ID: 9617
// Name: ExecutedApplicationCommandPopout
// Dependencies: [19, 17, 5080, 2064, 2118, 2086, 5429, 4719, 1390, 9220, 5400, 1085, 1502, 5401, 21, 5091, 587, 1998, 1200, 5055, 8287, 4923, 5087, 5418, 1126, 558, 576, 6848, 504, 5625, 8834, 7961, 6163, 1418, 6188, 9617, 4767, 6186, 1629, 7240, 5374, 6269, 6872, 8238, 6836, 2]

// Module 9616 (ExecutedApplicationCommandPopout)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1418 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import Server from "Server" /* 1998 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5400 */;
import useChannelName from "useChannelName" /* 5418 */;
import FastImageDefault from "FastImage" /* 6163 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7240 */;
import InteractionActionCreatorsAll from "InteractionActionCreators" /* 8238 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import react_nativeDefault from "react-native" /* 9617 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import GuildStore from "GuildStore" /* 2086 */;
import MessageStore from "MessageStore" /* 5429 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9220 */;
import Constants from "Constants" /* 1085 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5401 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
function getCommandOptionComponents(option) {
  let analyticsLocations;
  let combined;
  let commandOptionSpec;
  let guild;
  let items1;
  let items2;
  let messageId;
  let styles;
  const iter = option.option;
  const channel = option.channel;
  ({ guild, commandOptionSpec, styles } = option);
  const text = `${option.parentOptionName} ${iter.name}`;
  let items = [];
  let name_localized;
  ({ messageId, analyticsLocations } = option);
  if (commandOptionSpec != null) {
    name_localized = commandOptionSpec.name_localized;
  }
  if (name_localized == null) {
    name_localized = iter.name;
  }
  if (null != iter.value) {
    const _HermesInternal2 = HermesInternal;
    combined = " " + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = " " + name_localized;
  }
  if (iter.type !== iter(1998).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== iter(1998).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        let userComponent;
        function getUserComponent(user, styles) {
          let items;
          let obj = {
            style: styles.commandOptionMentionText,
            onPress() {
              let id;
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = { userId: user.id, channelId: id };
              id = undefined;
              const tmp2 = showUserProfileActionSheetDefault;
              if (channel != null) {
                id = channel.id;
              }
              tmp2(obj2);
            },
            children: items
          };
          items = [closure_1_21, ];
          const LegacyText = iter(dependencyMap[18]).LegacyText;
          let obj2 = channel(dependencyMap[21]);
          items[1] = obj2.getUserTag(user, { decoration: "never" });
          return closure_1_23(LegacyText, obj, "optionValue-" + user.name);
        }
        function getCommandValueText(intl) {
          const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl };
          return authStore7(Text_Text.Text, obj, "optionValue-" + iter.name);
        }
        const type = iter.type;
        if (iter(1998).ApplicationCommandOptionType.USER === type) {
          const str5 = iter.value;
          const user = UserStore.getUser(str5.toString());
          userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
        } else if (iter(1998).ApplicationCommandOptionType.CHANNEL === type) {
          const str3 = iter.value;
          const channel1 = ChannelStore.getChannel(str3.toString());
          userComponent = null;
          if (null != channel1) {
            let obj = { style: styles.commandOptionMentionText, children: items1 };
            items1 = [closure_19, ];
            let LegacyText = tmp6(1200).LegacyText;
            const tmp6Result = iter(5418);
            items1[1] = tmp6Result.computeChannelName(channel1, UserStore, RelationshipStore);
            const _HermesInternal3 = HermesInternal;
            userComponent = closure_23(LegacyText, obj, "optionValue-" + iter.name);
          }
        } else {
          function getRoleComponent(role) {
            let items;
            const obj = { style: styles.commandOptionMentionText, children: items };
            items = [closure_21, role.name];
            return closure_23(native.LegacyText, obj, "optionValue-" + iter.name);
          }
          if (iter(1998).ApplicationCommandOptionType.ROLE === type) {
            const value = iter.value;
            let role;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, tmp14);
            }
            userComponent = null;
            if (null != role) {
              userComponent = getRoleComponent(role);
            }
          } else if (iter(1998).ApplicationCommandOptionType.MENTIONABLE === type) {
            const str2 = iter.value;
            const str1 = str2.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str1);
            }
            if (null != role1) {
              userComponent = getRoleComponent(role1);
            } else {
              const user1 = UserStore.getUser(str1);
              userComponent = null;
              if (null != user1) {
                userComponent = getUserComponent(user1, styles);
              }
            }
          } else {
            userComponent = null;
            if (iter(1998).ApplicationCommandOptionType.ATTACHMENT === type) {
              const intl = tmp6(1126).intl;
              userComponent = getCommandValueText(intl.string(tmp6(1126).t.nONJVc));
            }
          }
        }
        let str6 = true;
        if (null == userComponent) {
          let found;
          if (commandOptionSpec != null) {
            const choices = commandOptionSpec.choices;
            if (choices != null) {
              found = choices.find((value) => value.value === iter.value);
            }
          }
          const str7 = iter.value;
          let str9 = str7.toString();
          if (null != found) {
            let name = found.name_localized;
            if (name == null) {
              name = found.name;
            }
            str9 = name;
          }
          const tmp27 = str9.length > 0 && !regex.test(str9[0]);
          userComponent = getCommandValueText(str9);
          str6 = tmp27;
        }
        const push = items.push;
        const Fragment = react.Fragment;
        const LegacyText2 = tmp6(1200).LegacyText;
        const tmp30 = closure_23;
        const tmp32 = closure_22;
        if (str6) {
          str6 = " ";
        }
        let obj2 = { children: items2 };
        const _HermesInternal4 = HermesInternal;
        const obj3 = { children: combined + str6 };
        items2 = [tmp32(LegacyText2, obj3, "optionKey-" + iter.name), userComponent];
        push(tmp30(Fragment, obj2, text));
      }
      return items;
    }
  }
  const push2 = items.push;
  const Fragment2 = react.Fragment;
  const obj4 = { children: closure_22(iter(1200).LegacyText, { children: combined }, "optionKey-" + iter.name) };
  push2(closure_22(Fragment2, obj4, text));
  if (null != iter.options) {
    let options1;
    const _Object = Object;
    if (commandOptionSpec != null) {
      options1 = commandOptionSpec.options;
    }
    if (options1 == null) {
      options1 = [];
    }
    const options = iter.options;
    const fromEntriesResult = fromEntries(options1.map((name) => {
      const items = [name.name, name];
      return items;
    }));
    const iter2 = options[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let obj5 = { option: nextResult, channel, guild, messageId, parentOptionName: text, commandOptionSpec: fromEntriesResult[nextResult.name], styles, analyticsLocations };
      items = items.concat(getCommandOptionComponents(obj5));
      continue;
    }
  }
  return items;
}
function getCommandCopyText(item10021, channel, guild, name_localized) {
  let combined;
  let closure_0 = item10021;
  let items = [];
  name_localized = undefined;
  if (name_localized != null) {
    name_localized = name_localized.name_localized;
  }
  if (name_localized == null) {
    name_localized = item10021.name;
  }
  if (null != item10021.value) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + name_localized;
  }
  if (item10021.type !== Server.ApplicationCommandOptionType.SUB_COMMAND) {
    if (item10021.type !== Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != item10021.value) {
        const type = item10021.type;
        if (Server.ApplicationCommandOptionType.USER === type) {
          const str5 = item10021.value;
          const user = UserStore.getUser(str5.toString());
          sum = null;
          if (null != user) {
            const obj3 = UserUtilsDefault;
            sum = closure_21 + obj3.getUserTag(user, { decoration: "never" });
          }
        } else if (Server.ApplicationCommandOptionType.CHANNEL === type) {
          const str4 = item10021.value;
          channel = ChannelStore.getChannel(str4.toString());
          sum = null;
          if (null != channel) {
            const tmp5Result = useChannelName;
            sum = closure_19 + tmp5Result.computeChannelName(channel, UserStore, RelationshipStore);
          }
        } else if (Server.ApplicationCommandOptionType.ROLE === type) {
          const value = item10021.value;
          let role;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, tmp15);
          }
          sum = null;
          if (null != role) {
            sum = closure_21 + role.name;
          }
        } else {
          sum = null;
          if (Server.ApplicationCommandOptionType.MENTIONABLE === type) {
            const str6 = item10021.value;
            const str1 = str6.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str1);
            }
            if (null != role1) {
              sum = closure_21 + role1.name;
            } else {
              const user1 = UserStore.getUser(str1);
              sum = null;
              if (null != user1) {
                const obj = UserUtilsDefault;
                sum = closure_21 + obj.getUserTag(user1, { decoration: "never" });
              }
            }
          }
        }
      }
      if (null == sum) {
        let StringResult;
        let found;
        if (name_localized != null) {
          const choices = name_localized.choices;
          if (choices != null) {
            found = choices.find((value) => value.value === value.value);
          }
        }
        if (null != found) {
          let name = found.name_localized;
          if (name == null) {
            name = found.name;
          }
          StringResult = name;
        } else {
          const _String = String;
          StringResult = String(item10021.value);
        }
        sum = StringResult;
      }
      items.push(combined + sum);
      return items;
    }
  }
  items.push(combined);
  if (null != item10021.options) {
    let options1;
    const _Object = Object;
    if (name_localized != null) {
      options1 = name_localized.options;
    }
    if (options1 == null) {
      options1 = [];
    }
    const options = item10021.options;
    for (const item10117 of options) {
      items = items.concat(getCommandCopyText(item10117, channel, guild, tmp34[item10117.name]));
      continue;
    }
  }
  return items;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const SUB_COMMAND_KEY_SEPARATOR = ApplicationCommandConstants.SUB_COMMAND_KEY_SEPARATOR;
({ MessageTypes: closure_16, WHITESPACE_RE: closure_17 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
({ CHANNEL_SENTINEL: closure_19, COMMAND_SENTINEL: closure_20, MENTION_SENTINEL: closure_21 } = ChannelAutocompleteConstants);
let Fragment = Fragment_mod;
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingVertical: 8, paddingHorizontal: 16, gap: 16 }, activityIndicator: { padding: 16 }, application: obj2, applicationIcon: size, commandName: { flexDirection: "row", flexWrap: "wrap", alignItems: "center" }, commandOptionText: { marginTop: 12 }, commandOptionMentionText: obj3, commandText: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, borderRadius: nativeDefault.radii.round };
obj3 = { color: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_25 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommandContentContainer(channelId) {
  let channel;
  let data;
  let first;
  let guild;
  let guildId;
  let items3;
  let messageId;
  let processColorStringsArray;
  let tmp10;
  let tmp9;
  let user;
  let tmp = channelId;
  let tmp2 = guildId;
  let obj = channelId(guildId[26]);
  const cResult = obj.c(61);
  channelId = channelId.channelId;
  const author = channelId.author;
  const applicationUser = channelId.applicationUser;
  ({ data, guildId } = channelId);
  const messageType = channelId.messageType;
  ({ messageId, user } = channelId);
  const tmp4 = closure_25();
  let closure_5 = tmp4;
  const tmp5 = author;
  const analyticsLocations = author(guildId[27])().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [processColorStringsArray, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      let getGuild;
      let guild_id;
      const channel = ChannelStore.getChannel(channelId);
      const obj = { channel, guild: getGuild(guild_id) };
      guild_id = undefined;
      getGuild = GuildStore.getGuild;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return obj;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(tmp2[28]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp9, tmp10);
  ({ channel, guild } = stateFromStoresObject);
  const application_command = data.application_command;
  let name_localized;
  if (application_command != null) {
    name_localized = application_command.name_localized;
  }
  if (name_localized == null) {
    name_localized = data.name;
  }
  if (cResult[4] === guildId) {
    let tmp13;
    let tmp15;
    let tmp18;
    let tmp17;
    let tmp31;
    let tmp30;
    let tmp29;
    let flag;
    let tmp28;
    let tmp27;
    let tmp26;
    let tmp32;
    let tmp33;
    if (cResult[5] === user.id) {
      tmp13 = cResult[6];
    }
    const tmp14 = tmp5(tmp2[29])(tmp13);
    if (cResult[7] !== tmp14) {
      let obj2 = { displayNameStyles: tmp14 };
      cResult[7] = tmp14;
      cResult[8] = obj2;
      tmp15 = obj2;
    } else {
      tmp15 = cResult[8];
    }
    const tmpResult5 = tmp(tmp2[30]);
    const displayNameStylesFont = tmpResult5.useDisplayNameStylesFont(tmp15);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [displayNameStylesFont];
      const fn2 = function k() {
        return displayNameStylesFont.roleStyle;
      };
      cResult[9] = items2;
      cResult[10] = fn2;
      tmp18 = fn2;
      tmp17 = items2;
    } else {
      tmp17 = cResult[9];
      tmp18 = cResult[10];
    }
    const tmpResult6 = tmp(tmp2[28]);
    const stateFromStores = tmpResult6.useStateFromStores(tmp17, tmp18);
    const tmpResult7 = tmp(tmp2[31]);
    processColorStringsArray = tmpResult7.useProcessColorStringsArray(author.colorStrings);
    const tmpResult8 = tmp(tmp2[31]);
    const isRoleStyleAndRoleColorsEligibleForERC = tmpResult8.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, user.id, stateFromStores, processColorStringsArray);
    if (cResult[11] === analyticsLocations) {
      if (cResult[12] === applicationUser) {
        if (cResult[13] === author.colorString) {
          if (cResult[14] === author.nick) {
            if (cResult[15] === channel) {
              if (cResult[16] === name_localized) {
                if (cResult[17] === data) {
                  if (cResult[18] === displayNameStylesFont) {
                    if (cResult[19] === processColorStringsArray) {
                      if (cResult[20] === guildId) {
                        if (cResult[21] === guild) {
                          if (cResult[22] === messageId) {
                            if (cResult[23] === messageType) {
                              if (cResult[24] === isRoleStyleAndRoleColorsEligibleForERC) {
                                if (cResult[25] === tmp4) {
                                  tmp26 = cResult[26];
                                  tmp27 = cResult[27];
                                  tmp28 = cResult[28];
                                  flag = cResult[29];
                                  tmp29 = cResult[30];
                                  tmp30 = cResult[31];
                                  tmp31 = cResult[32];
                                  tmp32 = tmp2;
                                  tmp33 = tmp;
                                }
                                if (cResult[47] === tmp26) {
                                  if (cResult[48] === flag) {
                                    if (cResult[49] === tmp29) {
                                      if (cResult[50] === tmp30) {
                                        let tmp60;
                                        if (cResult[51] === tmp31) {
                                          tmp60 = cResult[52];
                                        }
                                        const _HermesInternal3 = HermesInternal;
                                        const combined = "commandOption-" + data.name;
                                        if (cResult[53] === tmp28) {
                                          if (cResult[54] === tmp4.commandOptionText) {
                                            let tmp64;
                                            if (cResult[55] === combined) {
                                              tmp64 = cResult[56];
                                            }
                                            if (cResult[57] === tmp27) {
                                              if (cResult[58] === tmp60) {
                                                let tmp67;
                                                if (cResult[59] === tmp64) {
                                                  tmp67 = cResult[60];
                                                }
                                                return tmp67;
                                              }
                                            }
                                            let obj3 = { children: items3 };
                                            items3 = [tmp60, tmp64];
                                            const tmp69 = closure_23(tmp27, obj3);
                                            cResult[57] = tmp27;
                                            cResult[58] = tmp60;
                                            cResult[59] = tmp64;
                                            cResult[60] = tmp69;
                                            tmp67 = tmp69;
                                          }
                                        }
                                        let obj4 = { style: tmp4.commandOptionText, variant: "text-md/medium", color: "text-default", children: tmp28 };
                                        const tmp66 = closure_22(tmp33(tmp32[22]).Text, obj4, combined);
                                        cResult[53] = tmp28;
                                        cResult[54] = tmp4.commandOptionText;
                                        cResult[55] = combined;
                                        cResult[56] = tmp66;
                                        tmp64 = tmp66;
                                      }
                                    }
                                  }
                                }
                                const obj5 = { style: tmp31, accessible: flag, children: tmp29 };
                                const tmp62 = closure_22(tmp26, obj5, tmp30);
                                cResult[47] = tmp26;
                                cResult[48] = flag;
                                cResult[49] = tmp29;
                                cResult[50] = tmp30;
                                cResult[51] = tmp31;
                                cResult[52] = tmp62;
                                tmp60 = tmp62;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const intl = tmp(tmp2[24]).intl;
    let _HermesInternal = HermesInternal;
    const obj6 = {
      userHook() {
          let items;
          let tmp3;
          let tmp2;
          const Text = Text_Text.Text;
          const tmp = authStore7;
          if (isRoleStyleAndRoleColorsEligibleForERC) {
            tmp2 = processColorStringsArray;
          }
          let color = author.colorString;
          const obj = { variant: "text-md/semibold", gradientColors: tmp2, style: items, children: tmp3.nick };
          tmp3 = author;
          if (color == null) {
            color = closure_5.commandText.color;
          }
          items = [{ color }, ];
          let tmp6 = null != displayNameStylesFont;
          if (tmp6) {
            tmp6 = { fontFamily: tmp5 };
            const obj2 = { fontFamily: tmp5 };
          }
          items[1] = tmp6;
          return tmp(Text, obj, "user");
        },
      commandHook() {
          let children;
          const Text = Text_Text.Text;
          const tmp = authStore7;
          if (messageType === constants.CHAT_INPUT_COMMAND) {
            const _HermesInternal = HermesInternal;
            children = "" + closure_20 + name_localized;
          } else {
            children = name_localized;
          }
          return tmp(Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children }, "command");
        },
      applicationHook() {
          let items;
          let obj3;
          const obj = { style: closure_5.application, children: items };
          const obj2 = { style: closure_5.applicationIcon, source: obj3.ensureAvatarSource(applicationUser.getAvatarSource(guildId)) };
          const tmp = FastImageDefault;
          obj3 = utils_AvatarUtils;
          items = [authStore7(tmp, obj2, "icon-" + applicationUser.id), ];
          const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: applicationUser.username };
          items[1] = authStore7(Text_Text.Text, obj4);
          return closure_23(metroRequire, obj, "application");
        }
    };
    const formatResult = intl.format(tmp(tmp2[24]).t["sj/RT9"], obj6);
    const combined1 = "integrationName-" + data.name;
    const text = `/${tmp12}`;
    if (cResult[33] === combined1) {
      let tmp37;
      let combined3;
      if (cResult[34] === `/${tmp12}`) {
        tmp37 = cResult[35];
      }
      if (cResult[36] === analyticsLocations) {
        if (cResult[37] === channel) {
          const application_command2 = data.application_command;
          let options1;
          const tmp40 = cResult[38];
          if (application_command2 != null) {
            options1 = application_command2.options;
          }
          if (tmp40 === options1) {
            if (cResult[39] === data.options) {
              if (cResult[40] === guild) {
                if (cResult[41] === messageId) {
                  if (cResult[42] === tmp4) {
                    let tmp57;
                    if (cResult[43] === tmp37) {
                      combined3 = cResult[44];
                    }
                    const Card = channelId(guildId[34]).Card;
                    const _HermesInternal2 = HermesInternal;
                    const combined2 = "commandName-" + data.name;
                    const commandName = tmp4.commandName;
                    const _Symbol2 = Symbol;
                    const tmp53 = channelId;
                    const tmp54 = guildId;
                    if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                      function ee(children, arg1) {
                        let tmp = children;
                        if (typeof children === "string") {
                          const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
                          tmp = closure_1_22(channelId(guildId[22]).Text, obj, arg1);
                        }
                        return tmp;
                      }
                      cResult[46] = ee;
                      tmp57 = ee;
                    } else {
                      tmp57 = cResult[46];
                    }
                    const Children = messageType.Children;
                    const mapped = Children.map(formatResult, tmp57);
                    cResult[11] = analyticsLocations;
                    cResult[12] = applicationUser;
                    cResult[13] = author.colorString;
                    cResult[14] = author.nick;
                    cResult[15] = channel;
                    cResult[16] = name_localized;
                    cResult[17] = data;
                    cResult[18] = displayNameStylesFont;
                    cResult[19] = processColorStringsArray;
                    cResult[20] = guildId;
                    cResult[21] = guild;
                    cResult[22] = messageId;
                    cResult[23] = messageType;
                    cResult[24] = isRoleStyleAndRoleColorsEligibleForERC;
                    cResult[25] = tmp4;
                    cResult[26] = name_localized;
                    cResult[27] = Card;
                    cResult[28] = combined3;
                    cResult[29] = true;
                    cResult[30] = mapped;
                    cResult[31] = combined2;
                    cResult[32] = commandName;
                    tmp31 = commandName;
                    tmp30 = combined2;
                    tmp29 = mapped;
                    flag = true;
                    tmp28 = combined3;
                    tmp27 = Card;
                    tmp26 = tmp55;
                    tmp32 = tmp54;
                    tmp33 = tmp53;
                  }
                }
              }
            }
          }
        }
      }
      const items4 = [tmp37];
      combined3 = items4;
      if (null != data.options) {
        let tmp42;
        const _Symbol3 = Symbol;
        if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
          function oe(name) {
            const items = [name.name, name];
            return items;
          }
          cResult[45] = oe;
          tmp42 = oe;
        } else {
          tmp42 = cResult[45];
        }
        const application_command3 = data.application_command;
        let options2;
        const _Object = Object;
        if (application_command3 != null) {
          options2 = application_command3.options;
        }
        if (options2 == null) {
          options2 = [];
        }
        const options = data.options;
        const fromEntriesResult = fromEntries(options2.map(tmp42));
        const iter = options[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let obj7 = { option: nextResult, channel, guild, messageId, parentOptionName: "", commandOptionSpec: fromEntriesResult[nextResult.name], styles: tmp4, analyticsLocations };
          combined3 = combined3.concat(getCommandOptionComponents(obj7));
          continue;
        }
      }
      cResult[36] = analyticsLocations;
      cResult[37] = channel;
      const application_command4 = data.application_command;
      let options3;
      if (application_command4 != null) {
        options3 = application_command4.options;
      }
      cResult[38] = options3;
      cResult[39] = data.options;
      cResult[40] = guild;
      cResult[41] = messageId;
      cResult[42] = tmp4;
      cResult[43] = tmp37;
      cResult[44] = combined3;
    }
    const obj8 = { children: text };
    const tmp39 = closure_22(tmp(tmp2[18]).LegacyText, obj8, combined1);
    cResult[33] = combined1;
    cResult[34] = text;
    cResult[35] = tmp39;
    tmp37 = tmp39;
  }
  const obj9 = { userId: user.id, guildId };
  cResult[4] = guildId;
  cResult[5] = user.id;
  cResult[6] = obj9;
  tmp13 = obj9;
}) : (function CommandContentContainer(channelId) {
  let Children;
  let avatarSource;
  let closure_5;
  let data;
  let items4;
  let messageId;
  channelId = channelId.channelId;
  const author = channelId.author;
  ({ applicationUser: importAll, data } = channelId);
  const guildId = channelId.guildId;
  ({ messageType: closure_5, messageId } = channelId);
  const user = channelId.user;
  let guild;
  let closure_12;
  let processColorStringsArray;
  let closure_14;
  let tmp = closure_25();
  const styles = tmp;
  let tmp3 = data;
  let tmp2 = author;
  const analyticsLocations = author(data[27])().analyticsLocations;
  let obj = channelId(data[28]);
  let items = [analyticsLocations, guild];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getGuild;
    let guild_id;
    channel = ChannelStore.getChannel(channelId);
    const obj = { channel, guild: getGuild(guild_id) };
    guild_id = undefined;
    getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return obj;
  }, items1);
  let channel = stateFromStoresObject.channel;
  guild = stateFromStoresObject.guild;
  let application_command = data.application_command;
  let name_localized;
  if (application_command != null) {
    name_localized = application_command.name_localized;
  }
  if (name_localized == null) {
    name_localized = data.name;
  }
  let obj2 = { userId: user.id, guildId };
  let tmp7 = tmp2(tmp3[29])(obj2);
  const tmp4Result = channelId(tmp3[30]);
  closure_12 = tmp4Result.useDisplayNameStylesFont({ displayNameStyles: tmp7 });
  const items2 = [styles];
  const tmp4Result4 = channelId(tmp3[28]);
  const stateFromStores = tmp4Result4.useStateFromStores(items2, () => styles.roleStyle);
  const tmp4Result5 = channelId(tmp3[31]);
  processColorStringsArray = tmp4Result5.useProcessColorStringsArray(author.colorStrings);
  const tmp4Result6 = channelId(tmp3[31]);
  closure_14 = tmp4Result6.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, user.id, stateFromStores, processColorStringsArray);
  const intl = tmp4(tmp3[24]).intl;
  let obj3 = {
    userHook() {
      let items;
      let tmp3;
      let tmp2;
      const Text = Text_Text.Text;
      const tmp = authStore7;
      if (closure_14) {
        tmp2 = processColorStringsArray;
      }
      let color = author.colorString;
      const obj = { variant: "text-md/semibold", gradientColors: tmp2, style: items, children: tmp3.nick };
      tmp3 = author;
      if (color == null) {
        color = styles.commandText.color;
      }
      items = [{ color }, ];
      let tmp6 = null != closure_12;
      if (tmp6) {
        tmp6 = { fontFamily: tmp5 };
        const obj2 = { fontFamily: tmp5 };
      }
      items[1] = tmp6;
      return tmp(Text, obj, "user");
    },
    commandHook() {
      let children;
      const Text = Text_Text.Text;
      const tmp = authStore7;
      if (closure_5 === constants.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        children = "" + closure_20 + name_localized;
      } else {
        children = name_localized;
      }
      return tmp(Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children }, "command");
    },
    applicationHook() {
      let items;
      let obj3;
      const obj = { style: styles.application, children: items };
      const obj2 = { style: styles.applicationIcon, source: obj3.ensureAvatarSource(importAll.getAvatarSource(guildId)) };
      const tmp = FastImageDefault;
      obj3 = utils_AvatarUtils;
      items = [authStore7(tmp, obj2, "icon-" + importAll.id), ];
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: importAll.username };
      items[1] = authStore7(Text_Text.Text, obj4);
      return closure_23(metroRequire, obj, "application");
    }
  };
  const items3 = [channel, guild, messageId, , , , , , ];
  ({ name: arr4[3], options: arr4[4], application_command: arr4[5] } = data);
  items3[6] = name_localized;
  items3[7] = tmp;
  items3[8] = analyticsLocations;
  const formatResult = intl.format(channelId(tmp3[24]).t["sj/RT9"], obj3);
  const memo = guildId.useMemo(() => {
    let items = [];
    const obj = { children: `/${name_localized}` };
    items[0] = authStore7(native.LegacyText, obj, "integrationName-" + data.name);
    let combined = items;
    if (null != data.options) {
      const application_command = tmp.application_command;
      let options1;
      const _Object = Object;
      if (application_command != null) {
        options1 = application_command.options;
      }
      if (options1 == null) {
        options1 = [];
      }
      const options = tmp.options;
      const fromEntriesResult = fromEntries(options1.map((name) => {
        const items = [name.name, name];
        return items;
      }));
      const iter = options[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj2 = { option: nextResult, channel, guild, messageId, parentOptionName: "", commandOptionSpec: fromEntriesResult[nextResult.name], styles, analyticsLocations };
        combined = combined.concat(getCommandOptionComponents(obj2));
        continue;
      }
    }
    return combined;
  }, items3);
  let obj4 = { children: items4 };
  const obj5 = {
    style: tmp.commandName,
    accessible: true,
    children: Children.map(formatResult, (children, arg1) => {
      let tmp = children;
      if (typeof children === "string") {
        const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
        tmp = closure_1_22(channelId(data[22]).Text, obj, arg1);
      }
      return tmp;
    })
  };
  Children = guildId.Children;
  const Card = tmp4(tmp3[34]).Card;
  items4 = [closure_22(messageId, obj5, "commandName-" + data.name), ];
  const obj6 = { style: tmp.commandOptionText, variant: "text-md/medium", color: "text-default", children: memo };
  items4[1] = closure_22(channelId(tmp3[22]).Text, obj6, "commandOption-" + data.name);
  return closure_23(Card, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommandActionsContainer(channelId) {
  let channel;
  let tmp10;
  let tmp11;
  let tmp7;
  const tmp = channelId;
  let obj = channelId(channel[26]);
  const cResult = obj.c(27);
  channelId = channelId.channelId;
  const chatInputRef = channelId.chatInputRef;
  const data = channelId.data;
  const tmp2 = channel;
  if (cResult[0] !== data.options) {
    let options = data.options;
    let someResult;
    if (options != null) {
      someResult = options.some((type) => type.type === channelId(channel[17]).ApplicationCommandOptionType.ATTACHMENT);
    }
    let num = 0;
    cResult[0] = data.options;
    cResult[1] = someResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp8 = ChannelStore;
    let items = [ChannelStore, ];
    let tmp9 = GuildStore;
    items[1] = GuildStore;
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    class C {
      constructor() {
        let getGuild;
        let guild_id;
        channel = ChannelStore.getChannel(channelId);
        const obj = { channel, guild: getGuild(guild_id) };
        guild_id = undefined;
        getGuild = GuildStore.getGuild;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return obj;
      }
    }
    let items1 = [channelId];
    cResult[3] = channelId;
    cResult[4] = C;
    cResult[5] = items1;
    tmp11 = items1;
    tmp10 = C;
  } else {
    class C {
      constructor() {
        let getGuild;
        let guild_id;
        channel = ChannelStore.getChannel(channelId);
        const obj = { channel, guild: getGuild(guild_id) };
        guild_id = undefined;
        getGuild = GuildStore.getGuild;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return obj;
      }
    }
    tmp11 = cResult[5];
  }
  const tmpResult = tmp(tmp2[28]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp10, tmp11);
  channel = stateFromStoresObject.channel;
  const guild = stateFromStoresObject.guild;
  if (cResult[6] === channel) {
    class C {
      constructor() {
        let getGuild;
        let guild_id;
        channel = ChannelStore.getChannel(channelId);
        const obj = { channel, guild: getGuild(guild_id) };
        guild_id = undefined;
        getGuild = GuildStore.getGuild;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return obj;
      }
    }
  }
  class O {
    constructor() {
      let items1;
      const application_command = data.application_command;
      let name_localized;
      if (application_command != null) {
        name_localized = application_command.name_localized;
      }
      if (name_localized == null) {
        name_localized = tmp.name;
      }
      let items = [closure_20 + name_localized];
      let combined = items;
      if (null != data.options) {
        const application_command2 = tmp.application_command;
        let options1;
        const _Object = Object;
        if (application_command2 != null) {
          options1 = application_command2.options;
        }
        if (options1 == null) {
          options1 = [];
        }
        const options = tmp.options;
        for (const item10021 of options) {
          combined = combined.concat(getCommandCopyText(item10021, channel, guild, tmp3[item10021.name]));
          continue;
        }
      }
      const setItem = react_nativeDefault.setItem;
      react_nativeDefault;
      const json = JSON.stringify(data);
      const result = setItem(json, "application/x-discord-interaction-data", combined.join(" "));
      if (null != channel) {
        const query = ApplicationCommandIndexStore.query;
        const obj = { channel: tmp17, type: "channel" };
        const obj2 = { commandTypes: items1 };
        items1 = [Server.ApplicationCommandType.CHAT];
        const query1 = query(obj, obj2, { allowFetch: true });
      }
      const obj4 = ToastUtils;
      obj4.presentCommandCopied();
    }
  }
  cResult[6] = channel;
  cResult[7] = data;
  cResult[8] = guild;
  cResult[9] = O;
}) : (function CommandActionsContainer(channelId) {
  let intl;
  let intl2;
  let intl3;
  let items4;
  channelId = channelId.channelId;
  const chatInputRef = channelId.chatInputRef;
  const data = channelId.data;
  let channel;
  let guild;
  let closure_5;
  let options = data.options;
  let someResult;
  if (options != null) {
    someResult = options.some((type) => type.type === channelId(channel[17]).ApplicationCommandOptionType.ATTACHMENT);
  }
  const tmp3 = channel;
  let obj = channelId(channel[28]);
  let items = [ChannelStore, GuildStore];
  let items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getGuild;
    let guild_id;
    channel = ChannelStore.getChannel(channelId);
    const obj = { channel, guild: getGuild(guild_id) };
    guild_id = undefined;
    getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return obj;
  }, items1);
  channel = stateFromStoresObject.channel;
  guild = stateFromStoresObject.guild;
  let items2 = [data, channel, guild];
  closure_5 = guild.useCallback(() => {
    let items1;
    const application_command = data.application_command;
    let name_localized;
    if (application_command != null) {
      name_localized = application_command.name_localized;
    }
    if (name_localized == null) {
      name_localized = tmp.name;
    }
    let items = [closure_20 + name_localized];
    let combined = items;
    if (null != data.options) {
      const application_command2 = tmp.application_command;
      let options1;
      const _Object = Object;
      if (application_command2 != null) {
        options1 = application_command2.options;
      }
      if (options1 == null) {
        options1 = [];
      }
      const options = tmp.options;
      for (const item10021 of options) {
        combined = combined.concat(getCommandCopyText(item10021, channel, guild, tmp3[item10021.name]));
        continue;
      }
    }
    const setItem = react_nativeDefault.setItem;
    react_nativeDefault;
    const json = JSON.stringify(data);
    const result = setItem(json, "application/x-discord-interaction-data", combined.join(" "));
    if (null != channel) {
      const query = ApplicationCommandIndexStore.query;
      const obj = { channel: tmp17, type: "channel" };
      const obj2 = { commandTypes: items1 };
      items1 = [Server.ApplicationCommandType.CHAT];
      const query1 = query(obj, obj2, { allowFetch: true });
    }
    const obj4 = ToastUtils;
    obj4.presentCommandCopied();
  }, items2);
  const items3 = [];
  if (!someResult) {
    const push = items3.push;
    let obj2 = {
      label: intl.string(tmp2(tmp3[24]).t["42H+Nb"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_5();
        }
    };
    const TableRow = tmp2(tmp3[37]).TableRow;
    intl = tmp2(tmp3[24]).intl;
    push(closure_22(TableRow, obj2));
  }
  if (null != chatInputRef) {
    let tmp7 = closure_22;
    const push2 = items3.push;
    let obj3 = {
      label: intl2.string(tmp2(tmp3[24]).t.lNWC7s),
      onPress() {
          let obj13;
          let obj3;
          let obj5;
          let obj7;
          let sum;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (null != data.options) {
            if (data.options.length > 0) {
              const items = [Server.ApplicationCommandOptionType.SUB_COMMAND, Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP];
              if (items.includes(data.options[0].type)) {
                const items1 = [data.options[0].name];
                const options1 = tmp3.options[0].options;
                let hasItem = null != options1 && options1.length > 0;
                if (hasItem) {
                  const items2 = [Server.ApplicationCommandOptionType.SUB_COMMAND, Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP];
                  hasItem = items2.includes(options1[0].type);
                }
                let options = options1;
                if (hasItem) {
                  items1.push(options1[0].name);
                  options = options1[0].options;
                }
                if (chatInputRef != null) {
                  const current2 = chatInputRef.current;
                  if (current2 != null) {
                    const openCustomKeyboard2 = current2.openCustomKeyboard;
                    const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj3 };
                    obj3 = { initialRouteName: AppLauncherRouteName.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL, preSelectedCommand: obj5 };
                    obj5 = { commandId: sum + items1.join(SUB_COMMAND_KEY_SEPARATOR), prefilledOptions: options };
                    sum = tmp3.id + SUB_COMMAND_KEY_SEPARATOR;
                    openCustomKeyboard2(obj2);
                  }
                }
              }
            }
          }
          if (chatInputRef != null) {
            const current = chatInputRef.current;
            if (current != null) {
              const openCustomKeyboard = current.openCustomKeyboard;
              const obj6 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj7 };
              obj7 = { initialRouteName: AppLauncherRouteName.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL, preSelectedCommand: obj13 };
              obj13 = { commandId: null, prefilledOptions: null };
              ({ id: obj4.commandId, options: obj4.prefilledOptions } = data);
              openCustomKeyboard(obj6);
            }
          }
        }
    };
    const TableRow2 = tmp2(tmp3[37]).TableRow;
    intl2 = tmp2(tmp3[24]).intl;
    push2(closure_22(TableRow2, obj3));
  }
  let tmp9 = null;
  if (0 !== items3.length) {
    let tmp10 = closure_23;
    let obj4 = { spacing: 8, children: items4 };
    let tmp11 = closure_22;
    const Stack = tmp2(tmp3[40]).Stack;
    let obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: intl3.string(tmp2(tmp3[24]).t["3eF5/L"]) };
    const Text = tmp2(tmp3[22]).Text;
    intl3 = tmp2(tmp3[24]).intl;
    items4 = [closure_22(Text, obj5), ];
    let obj6 = {
      hasIcons: false,
      children: items3.map((children, index) => {
          const obj = { children };
          return closure_1_22(guild.Fragment, obj, index);
        })
    };
    const TableRowGroup = tmp2(tmp3[41]).TableRowGroup;
    items4[1] = closure_22(TableRowGroup, obj6);
    tmp9 = closure_23(Stack, obj4);
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExecutedCommandPopout(arg0) {
  let applicationUser;
  let author;
  let channelId;
  let chatInputRef;
  let first;
  let guildId;
  let interactionData5;
  let messageId;
  let messageType;
  let user;
  const tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(29);
  ({ user, channelId } = arg0);
  ({ chatInputRef, messageId } = arg0);
  ({ author, applicationUser, guildId, messageType } = arg0);
  const tmp4 = closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    if (cResult[2] === messageId) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    const tmp10 = messageId(6848);
    const analyticsLocations = tmp10(messageId(6872).EXECUTED_COMMAND).analyticsLocations;
    if (cResult[4] === channelId) {
      let interactionData1;
      const tmp11 = cResult[5];
      if (stateFromStores != null) {
        interactionData1 = stateFromStores.interactionData;
      }
      if (tmp11 === interactionData1) {
        let tmp14;
        if (cResult[6] === messageId) {
          tmp14 = cResult[7];
        }
        let interactionData2;
        if (stateFromStores != null) {
          interactionData2 = stateFromStores.interactionData;
        }
        if (cResult[8] === channelId) {
          if (cResult[9] === messageId) {
            let tmp19;
            let tmp29Result;
            if (cResult[10] === interactionData2) {
              tmp19 = cResult[11];
            }
            const effect = react.useEffect(tmp14, tmp19);
            if (cResult[12] === applicationUser) {
              if (cResult[13] === author) {
                if (cResult[14] === channelId) {
                  if (cResult[15] === chatInputRef) {
                    if (cResult[16] === guildId) {
                      let interactionData3;
                      const tmp22 = cResult[17];
                      if (stateFromStores != null) {
                        interactionData3 = stateFromStores.interactionData;
                      }
                      if (tmp22 === interactionData3) {
                        if (cResult[18] === messageId) {
                          if (cResult[19] === messageType) {
                            if (cResult[20] === tmp4.activityIndicator) {
                              let tmp24;
                              if (cResult[21] === user) {
                                tmp24 = cResult[22];
                              }
                              if (cResult[23] === tmp4.container) {
                                if (cResult[26] === analyticsLocations) {
                                  let tmp39;
                                  if (cResult[27] === tmp36) {
                                    tmp39 = cResult[28];
                                  }
                                  return tmp39;
                                }
                                const obj2 = { value: analyticsLocations, children: tmp36 };
                                cResult[26] = analyticsLocations;
                                cResult[27] = tmp36;
                                cResult[28] = closure_22(tmp(6848).AnalyticsLocationProvider, obj2);
                                closure_22(tmp(6848).AnalyticsLocationProvider, obj2);
                                class S {
                                  constructor() {
                                    let interactionData;
                                    if (stateFromStores != null) {
                                      interactionData = tmp.interactionData;
                                    }
                                    let tmp3 = null == interactionData;
                                    if (!tmp3) {
                                      let type;
                                      if (stateFromStores != null) {
                                        type = tmp.interactionData.type;
                                      }
                                      let tmp7 = type === Server.ApplicationCommandType.CHAT;
                                      if (tmp7) {
                                        let application_command;
                                        if (stateFromStores != null) {
                                          application_command = tmp.interactionData.application_command;
                                        }
                                        tmp7 = undefined === application_command;
                                      }
                                      tmp3 = tmp7;
                                    }
                                    if (tmp3) {
                                      const obj = InteractionActionCreatorsAll;
                                      const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                                    }
                                  }
                                }
                              }
                              const obj3 = { startExpanded: true, bodyStyles: tmp4.container, children: tmp24 };
                              cResult[23] = tmp4.container;
                              cResult[24] = tmp24;
                              cResult[25] = closure_22(tmp(6836).BottomSheet, obj3);
                              closure_22(tmp(6836).BottomSheet, obj3);
                              class S {
                                constructor() {
                                  let interactionData;
                                  if (stateFromStores != null) {
                                    interactionData = tmp.interactionData;
                                  }
                                  let tmp3 = null == interactionData;
                                  if (!tmp3) {
                                    let type;
                                    if (stateFromStores != null) {
                                      type = tmp.interactionData.type;
                                    }
                                    let tmp7 = type === Server.ApplicationCommandType.CHAT;
                                    if (tmp7) {
                                      let application_command;
                                      if (stateFromStores != null) {
                                        application_command = tmp.interactionData.application_command;
                                      }
                                      tmp7 = undefined === application_command;
                                    }
                                    tmp3 = tmp7;
                                  }
                                  if (tmp3) {
                                    const obj = InteractionActionCreatorsAll;
                                    const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            let interactionData4;
            if (stateFromStores != null) {
              interactionData4 = stateFromStores.interactionData;
            }
            if (null != interactionData4) {
              const obj4 = { guildId, user, channelId, messageId, author, applicationUser, data: null, messageType };
              const tmp29 = closure_23;
              const tmp30 = closure_24;
              const tmp32 = closure_28;
              if (stateFromStores != null) {
                let interactionData = stateFromStores.interactionData;
              }
              class S {
                constructor() {
                  let interactionData;
                  if (stateFromStores != null) {
                    interactionData = tmp.interactionData;
                  }
                  let tmp3 = null == interactionData;
                  if (!tmp3) {
                    let type;
                    if (stateFromStores != null) {
                      type = tmp.interactionData.type;
                    }
                    let tmp7 = type === Server.ApplicationCommandType.CHAT;
                    if (tmp7) {
                      let application_command;
                      if (stateFromStores != null) {
                        application_command = tmp.interactionData.application_command;
                      }
                      tmp7 = undefined === application_command;
                    }
                    tmp3 = tmp7;
                  }
                  if (tmp3) {
                    const obj = InteractionActionCreatorsAll;
                    const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                  }
                }
              }
              const items1 = [closure_22(tmp32, obj4), ];
              const obj5 = { channelId, chatInputRef, data: interactionData5 };
              interactionData5 = undefined;
              const tmp33 = closure_29;
              if (stateFromStores != null) {
                interactionData5 = stateFromStores.interactionData;
              }
              const obj6 = { children: items1 };
              items1[1] = closure_22(tmp33, obj5);
              tmp29Result = tmp29(tmp30, obj6);
            } else {
              const obj7 = { style: tmp4.activityIndicator, size: "large" };
              tmp29Result = closure_22(closure_5, obj7);
            }
            cResult[12] = applicationUser;
            cResult[13] = author;
            cResult[14] = channelId;
            class S {
              constructor() {
                let interactionData;
                if (stateFromStores != null) {
                  interactionData = tmp.interactionData;
                }
                let tmp3 = null == interactionData;
                if (!tmp3) {
                  let type;
                  if (stateFromStores != null) {
                    type = tmp.interactionData.type;
                  }
                  let tmp7 = type === Server.ApplicationCommandType.CHAT;
                  if (tmp7) {
                    let application_command;
                    if (stateFromStores != null) {
                      application_command = tmp.interactionData.application_command;
                    }
                    tmp7 = undefined === application_command;
                  }
                  tmp3 = tmp7;
                }
                if (tmp3) {
                  const obj = InteractionActionCreatorsAll;
                  const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
                }
              }
            }
            cResult[15] = chatInputRef;
            cResult[16] = guildId;
            let interactionData6;
            if (stateFromStores != null) {
              interactionData6 = stateFromStores.interactionData;
            }
            cResult[17] = interactionData6;
            cResult[18] = messageId;
            cResult[19] = messageType;
            cResult[20] = tmp4.activityIndicator;
            cResult[21] = user;
            cResult[22] = tmp29Result;
            tmp24 = tmp29Result;
          }
        }
        const items2 = [channelId, messageId, interactionData2];
        cResult[8] = channelId;
        cResult[9] = messageId;
        class S {
          constructor() {
            let interactionData;
            if (stateFromStores != null) {
              interactionData = tmp.interactionData;
            }
            let tmp3 = null == interactionData;
            if (!tmp3) {
              let type;
              if (stateFromStores != null) {
                type = tmp.interactionData.type;
              }
              let tmp7 = type === Server.ApplicationCommandType.CHAT;
              if (tmp7) {
                let application_command;
                if (stateFromStores != null) {
                  application_command = tmp.interactionData.application_command;
                }
                tmp7 = undefined === application_command;
              }
              tmp3 = tmp7;
            }
            if (tmp3) {
              const obj = InteractionActionCreatorsAll;
              const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
            }
          }
        }
        cResult[10] = interactionData2;
        cResult[11] = items2;
        tmp19 = items2;
      }
    }
    cResult[4] = channelId;
    let interactionData7;
    if (stateFromStores != null) {
      interactionData7 = stateFromStores.interactionData;
    }
    class S {
      constructor() {
        let interactionData;
        if (stateFromStores != null) {
          interactionData = tmp.interactionData;
        }
        let tmp3 = null == interactionData;
        if (!tmp3) {
          let type;
          if (stateFromStores != null) {
            type = tmp.interactionData.type;
          }
          let tmp7 = type === Server.ApplicationCommandType.CHAT;
          if (tmp7) {
            let application_command;
            if (stateFromStores != null) {
              application_command = tmp.interactionData.application_command;
            }
            tmp7 = undefined === application_command;
          }
          tmp3 = tmp7;
        }
        if (tmp3) {
          const obj = InteractionActionCreatorsAll;
          const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
        }
      }
    }
    cResult[5] = interactionData7;
    cResult[6] = messageId;
    cResult[7] = S;
    tmp14 = S;
  }
  const fn = function l() {
    return MessageStore.getMessage(channelId, messageId);
  };
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function ExecutedCommandPopout(channelId) {
  let applicationUser;
  let author;
  let chatInputRef;
  let guildId;
  let interactionData2;
  let interactionData3;
  let messageType;
  let obj3;
  let tmp9Result;
  let user;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = closure_25();
  let tmp3 = dependencyMap;
  let obj = channelId(504);
  const items = [MessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  const items1 = [channelId, messageId, ];
  let interactionData;
  const tmp5 = messageId(6848);
  const analyticsLocations = tmp5(messageId(6872).EXECUTED_COMMAND).analyticsLocations;
  const useEffect = react.useEffect;
  if (stateFromStores != null) {
    interactionData = stateFromStores.interactionData;
  }
  items1[2] = interactionData;
  const effect = useEffect(() => {
    let interactionData;
    if (stateFromStores != null) {
      interactionData = tmp.interactionData;
    }
    let tmp3 = null == interactionData;
    if (!tmp3) {
      let type;
      if (stateFromStores != null) {
        type = tmp.interactionData.type;
      }
      let tmp7 = type === Server.ApplicationCommandType.CHAT;
      if (tmp7) {
        let application_command;
        if (stateFromStores != null) {
          application_command = tmp.interactionData.application_command;
        }
        tmp7 = undefined === application_command;
      }
      tmp3 = tmp7;
    }
    if (tmp3) {
      const obj = InteractionActionCreatorsAll;
      const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
    }
  }, items1);
  const obj2 = { value: analyticsLocations, children: closure_22(BottomSheet, obj3) };
  const AnalyticsLocationProvider = tmp2(6848).AnalyticsLocationProvider;
  let interactionData1;
  obj3 = { startExpanded: true, bodyStyles: tmp.container, children: tmp9Result };
  BottomSheet = tmp2(6836).BottomSheet;
  if (stateFromStores != null) {
    interactionData1 = stateFromStores.interactionData;
  }
  if (null != interactionData1) {
    const obj4 = { guildId, user, channelId, messageId, author, applicationUser, data: interactionData2, messageType };
    interactionData2 = undefined;
    const tmp13 = closure_23;
    const tmp14 = closure_24;
    const tmp15 = closure_28;
    if (stateFromStores != null) {
      interactionData2 = stateFromStores.interactionData;
    }
    const items2 = [tmp9(tmp15, obj4), ];
    const obj5 = { channelId, chatInputRef, data: interactionData3 };
    interactionData3 = undefined;
    const tmp17 = closure_29;
    if (stateFromStores != null) {
      interactionData3 = stateFromStores.interactionData;
    }
    const obj6 = { children: items2 };
    items2[1] = closure_22(tmp17, obj5);
    tmp9Result = tmp13(tmp14, obj6);
  } else {
    const obj7 = { style: tmp.activityIndicator, size: "large" };
    tmp9Result = tmp9(closure_5, obj7);
  }
  return closure_22(AnalyticsLocationProvider, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default tmp7;
