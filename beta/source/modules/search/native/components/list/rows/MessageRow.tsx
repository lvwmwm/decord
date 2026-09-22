// Module ID: 17148
// Function ID: 17149
// Name: MessageRow
// Dependencies: [19, 17, 4750, 2048, 2045, 2067, 4939, 1078, 21, 4758, 580, 558, 568, 504, 5241, 4911, 1181, 4754, 11540, 10683, 9548, 4603, 8455, 17149, 13599, 17150, 4990, 8224, 7573, 1119, 12972, 8128, 17126, 2]

// Module 17148 (MessageRow)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import UserUtilsDefault from "UserUtils" /* 4603 */;
import useChannelNameDefault from "useChannelName" /* 4911 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 4990 */;
import BotTagDefault from "BotTag" /* 9548 */;
import _modDef11540 from "module_11540" /* 11540 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

const PollBadgeDefault = tmp9(17150);
require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const MessageFlags = fn(1078).MessageFlags;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj = { channelIcon: { marginRight: 5, alignSelf: "center" }, channelStatus: { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, labelContainer: { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" }, authorRow: { flexShrink: 1, minWidth: 0, flexDirection: "row" }, timestamp: { marginLeft: 8 }, header: { flexDirection: "row", marginRight: 16, marginBottom: 12 }, body: { alignItems: "flex-start" }, pollBadge: { marginLeft: 8 }, suppressNotificationsIcon: { marginLeft: 4 }, spoilerText: { fontStyle: "italic" } };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(26);
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.guild_id) {
    const fn = function s() {
      guild = GuildStore.getGuild(channel.guild_id);
      let rulesChannelId;
      if (guild != null) {
        rulesChannelId = guild.rulesChannelId;
      }
      return rulesChannelId;
    };
    cResult[1] = channel.guild_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = channel(568);
  const tmp8 = channel(504).useStateFromStores(first, tmp7) === channel.id;
  if (cResult[3] === channel) {
    if (cResult[4] === tmp8) {
      let tmp9 = cResult[5];
    }
    const tmp12 = useChannelNameDefault(channel);
    if (cResult[6] === tmp9) {
      if (cResult[7] === tmp4.channelIcon) {
        let tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp12) {
        const obj2 = { lineClamp: 1, variant: "text-sm/semibold", color: "interactive-text-default", children: tmp12 };
        const tmp18 = closure_11(tmp(4754).Text, obj2);
        cResult[9] = tmp12;
        cResult[10] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === muted) {
        if (cResult[12] === tmp4.channelStatus) {
          let tmp19 = cResult[13];
        }
        if (cResult[14] === isFavorite) {
          if (cResult[15] === tmp4.channelStatus) {
            let tmp22 = cResult[16];
          }
          if (cResult[17] !== channel) {
            let isSystemDMResult = channel.isSystemDM();
            if (isSystemDMResult) {
              const obj3 = { type: tmp11(9548).Types.SYSTEM_DM, verified: true };
              isSystemDMResult = closure_11(tmp11(9548), obj3);
              const tmp11Result = tmp11(9548);
            }
            cResult[17] = channel;
            cResult[18] = isSystemDMResult;
            let tmp25 = isSystemDMResult;
          } else {
            tmp25 = cResult[18];
          }
          if (cResult[19] === tmp4.header) {
            if (cResult[20] === tmp13) {
              if (cResult[21] === tmp16) {
                if (cResult[22] === tmp19) {
                  if (cResult[23] === tmp22) {
                    if (cResult[24] === tmp25) {
                      let tmp29 = cResult[25];
                    }
                    return tmp29;
                  }
                }
              }
            }
          }
          const obj4 = { style: tmp4.header, children: null };
          const items1 = [tmp13, tmp16, tmp19, tmp22, tmp25];
          obj4.children = items1;
          const tmp32 = closure_12(closure_4, obj4);
          cResult[19] = tmp4.header;
          cResult[20] = tmp13;
          cResult[21] = tmp16;
          cResult[22] = tmp19;
          cResult[23] = tmp22;
          cResult[24] = tmp25;
          cResult[25] = tmp32;
          tmp29 = tmp32;
        }
        let tmp23 = isFavorite;
        if (isFavorite) {
          const obj5 = { source: tmp11(10683), size: tmp(1181).Icon.Sizes.EXTRA_SMALL, style: tmp4.channelStatus };
          tmp23 = closure_11(tmp(1181).Icon, obj5);
        }
        cResult[14] = isFavorite;
        cResult[15] = tmp4.channelStatus;
        cResult[16] = tmp23;
        tmp22 = tmp23;
      }
      let tmp20 = muted;
      if (muted) {
        const obj6 = { source: tmp11(11540), size: tmp(1181).Icon.Sizes.EXTRA_SMALL, style: tmp4.channelStatus };
        tmp20 = closure_11(tmp(1181).Icon, obj6);
      }
      cResult[11] = muted;
      cResult[12] = tmp4.channelStatus;
      cResult[13] = tmp20;
      tmp19 = tmp20;
    }
    const obj7 = { source: tmp9, size: tmp(1181).Icon.Sizes.REFRESH_SMALL_16, style: tmp4.channelIcon };
    const tmp15 = closure_11(tmp(1181).Icon, obj7);
    cResult[6] = tmp9;
    cResult[7] = tmp4.channelIcon;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const tmpResult = channel(504);
  const channelIcon = channel(5241).getChannelIcon(channel, { isRulesChannel: tmp8 });
  cResult[3] = channel;
  cResult[4] = tmp8;
  cResult[5] = channelIcon;
  tmp9 = channelIcon;
}) : ((channel) => {
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp = closure_13();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    guild = GuildStore.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  const obj = channel(504);
  const channelIcon = channel(5241).getChannelIcon(channel, { isRulesChannel: stateFromStores === channel.id });
  const obj4 = { style: tmp.header, children: null };
  const obj2 = channel(5241);
  const obj3 = { isRulesChannel: stateFromStores === channel.id };
  const tmp7 = useChannelNameDefault(channel);
  const tmp8 = closure_12;
  const tmp9 = closure_4;
  const items1 = [closure_11(channel(1181).Icon, { source: channelIcon, size: channel(1181).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon }), closure_11(channel(4754).Text, { lineClamp: 1, variant: "text-sm/semibold", color: "interactive-text-default", children: tmp7 }), , , ];
  if (muted) {
    const obj6 = { source: tmp6(11540), size: tmp2(1181).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = tmp10(tmp2(1181).Icon, obj6);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj7 = { source: tmp6(10683), size: tmp2(1181).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    isFavorite = tmp10(tmp2(1181).Icon, obj7);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj8 = { type: tmp6(9548).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = tmp10(tmp6(9548), obj8);
    const tmp6Result = tmp6(9548);
  }
  items1[4] = isSystemDMResult;
  obj4.children = items1;
  return tmp8(tmp9, obj4);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ message, channel } = arg0);
  if (cResult[0] === channel.guild_id) {
    if (cResult[1] === message.author) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = closure_1_11(native.Avatar, { user: message.author, guildId: channel.guild_id, size: native.AvatarSizes.LARGE_48, avatarDecoration: message.author.avatarDecoration });
  cResult[0] = channel.guild_id;
  cResult[1] = message.author;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((guildId) => {
  const message = guildId.message;
  return closure_1_11(native.Avatar, { user: message.author, guildId: guildId.channel.guild_id, size: native.AvatarSizes.LARGE_48, avatarDecoration: message.author.avatarDecoration });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((muted) => {
  const cResult = channel(568).c(33);
  ({ message, channel } = muted);
  muted = muted.muted;
  const tmp4 = closure_13();
  if (cResult[0] !== message.author) {
    const name = UserUtilsDefault.getName(message.author);
    cResult[0] = message.author;
    cResult[1] = name;
    let tmp5 = name;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== channel) {
    class I {
      constructor() {
        obj = channel;
        tmp = channel.isDM() || obj.isGroupDM();
        if (tmp) {
          recipients = obj.recipients;
          item = recipients.forEach(() => { ... });
        }
        return;
      }
    }
    const items = [channel];
    cResult[2] = channel;
    cResult[3] = I;
    cResult[4] = items;
    let tmp9 = items;
    const tmp8 = I;
  } else {
    class I {
      constructor() {
        obj = channel;
        tmp = channel.isDM() || obj.isGroupDM();
        if (tmp) {
          recipients = obj.recipients;
          item = recipients.forEach(() => { ... });
        }
        return;
      }
    }
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  const obj = channel(568);
  const searchMessageTimestamp = channel(17149).useSearchMessageTimestamp(message, channel);
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  if (cResult[5] !== tmp5) {
    class I {
      constructor() {
        obj = channel;
        tmp = channel.isDM() || obj.isGroupDM();
        if (tmp) {
          recipients = obj.recipients;
          item = recipients.forEach(() => { ... });
        }
        return;
      }
    }
    const obj3 = { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: tmp5 };
    const tmp13 = closure_11(tmp(4754).Text, obj3);
    cResult[5] = tmp5;
    cResult[6] = tmp13;
  } else {
    class I {
      constructor() {
        obj = channel;
        tmp = channel.isDM() || obj.isGroupDM();
        if (tmp) {
          recipients = obj.recipients;
          item = recipients.forEach(() => { ... });
        }
        return;
      }
    }
  }
  if (cResult[7] === muted) {
    class I {
      constructor() {
        obj = channel;
        tmp = channel.isDM() || obj.isGroupDM();
        if (tmp) {
          recipients = obj.recipients;
          item = recipients.forEach(() => { ... });
        }
        return;
      }
    }
    if (cResult[10] !== channel) {
      class I {
        constructor() {
          obj = channel;
          tmp = channel.isDM() || obj.isGroupDM();
          if (tmp) {
            recipients = obj.recipients;
            item = recipients.forEach(() => { ... });
          }
          return;
        }
      }
      if (tmp18) {
        class I {
          constructor() {
            obj = channel;
            tmp = channel.isDM() || obj.isGroupDM();
            if (tmp) {
              recipients = obj.recipients;
              item = recipients.forEach(() => { ... });
            }
            return;
          }
        }
        const obj4 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
        tmp18 = closure_11(BotTagDefault, obj4);
      }
      cResult[10] = channel;
      cResult[11] = tmp18;
    } else {
      class I {
        constructor() {
          obj = channel;
          tmp = channel.isDM() || obj.isGroupDM();
          if (tmp) {
            recipients = obj.recipients;
            item = recipients.forEach(() => { ... });
          }
          return;
        }
      }
    }
    if (cResult[12] === tmp4.authorRow) {
      class I {
        constructor() {
          obj = channel;
          tmp = channel.isDM() || obj.isGroupDM();
          if (tmp) {
            recipients = obj.recipients;
            item = recipients.forEach(() => { ... });
          }
          return;
        }
      }
    }
    const obj5 = { style: tmp4.authorRow, children: null };
    const items1 = [tmp12, tmp14, tmp17];
    obj5.children = items1;
    const tmp24 = closure_12(closure_4, obj5);
    cResult[12] = tmp4.authorRow;
    cResult[13] = tmp12;
    cResult[14] = tmp14;
    cResult[15] = tmp17;
    cResult[16] = tmp24;
  }
  let tmp15 = muted;
  if (muted) {
    class I {
      constructor() {
        obj = channel;
        tmp = channel.isDM() || obj.isGroupDM();
        if (tmp) {
          recipients = obj.recipients;
          item = recipients.forEach(() => { ... });
        }
        return;
      }
    }
    const obj6 = { source: _modDef11540, size: tmp(1181).Icon.Sizes.EXTRA_SMALL, style: tmp4.channelStatus };
    tmp15 = closure_11(tmp(1181).Icon, obj6);
  }
  cResult[7] = muted;
  cResult[8] = tmp4.channelStatus;
  cResult[9] = tmp15;
}) : ((message) => {
  message = message.message;
  const channel = message.channel;
  let muted = message.muted;
  const tmp = closure_13();
  const items = [message.author];
  const items1 = [channel];
  const memo = noop.useMemo(() => UserUtilsDefault.getName(message.author), items);
  const effect = noop.useEffect(() => {
    if (tmp) {
      const recipients = obj.recipients;
      const item = recipients.forEach((item) => message(closure_1_2[22]).getUser(item));
    }
  }, items1);
  const searchMessageTimestamp = message(17149).useSearchMessageTimestamp(message, channel);
  const obj2 = { style: tmp.labelContainer, children: null };
  const obj3 = { style: tmp.authorRow, children: null };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  const items2 = [closure_11(message(4754).Text, { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: memo }), , ];
  if (muted) {
    const obj4 = { source: channel(11540), size: tmp4(1181).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = tmp9(tmp4(1181).Icon, obj4);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj5 = { type: channel(9548).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = tmp9(channel(9548), obj5);
    const tmp13 = channel(9548);
  }
  items2[2] = isSystemDMResult;
  obj3.children = items2;
  const items3 = [closure_12(closure_4, obj3), closure_11(message(4754).Text, { variant: "text-xs/medium", color: "interactive-text-active", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp }), , ];
  let tmp9Result = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj7 = { size: "xs", style: tmp.suppressNotificationsIcon };
    tmp9Result = tmp9(tmp4(13599).BellZIcon, obj7);
  }
  items3[2] = tmp9Result;
  let tmp9Result2 = null;
  if (message.isPoll()) {
    const obj8 = { style: tmp.pollBadge };
    tmp9Result2 = tmp9(channel(17150), obj8);
  }
  items3[3] = tmp9Result2;
  obj2.children = items3;
  return closure_12(closure_4, obj2);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(33);
  ({ message, channel } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmpResult = initialize;
  ({ nick, colorString, colorStrings } = useMessageAuthorDefault(message));
  if (cResult[2] === colorString) {
    if (cResult[3] === stateFromStores) {
      const processColorStringsArray = tmp(8224).useProcessColorStringsArray(colorStrings);
      const tmpResult5 = tmp(8224);
      const isRoleStyleAndRoleColorsEligibleForERC = tmpResult5.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
      const tmpResult4 = tmp(8224);
      const searchMessageTimestamp = tmp(17149).useSearchMessageTimestamp(message, channel);
      ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
      if (cResult[5] === colorString) {
        if (cResult[6] === colorStrings) {
          if (cResult[7] === stateFromStores) {
            let tmp20 = cResult[8];
          }
          let tmp24;
          if (isRoleStyleAndRoleColorsEligibleForERC) {
            tmp24 = processColorStringsArray;
          }
          if (cResult[9] === tmp11) {
            if (cResult[10] === nick) {
              if (cResult[11] === tmp24) {
                let tmp25 = cResult[12];
              }
              if (cResult[13] === tmp4.authorRow) {
                if (cResult[14] === tmp20) {
                  if (cResult[15] === tmp25) {
                    let tmp28 = cResult[16];
                  }
                  if (cResult[17] === tmp4.timestamp) {
                    if (cResult[18] === timestamp) {
                      if (cResult[19] === timestampAccessibilityLabel) {
                        let tmp32 = cResult[20];
                      }
                      if (cResult[21] === message) {
                        if (cResult[22] === tmp4.suppressNotificationsIcon) {
                          let tmp35 = cResult[23];
                        }
                        if (cResult[24] === message) {
                          if (cResult[25] === tmp4.pollBadge) {
                            let tmp39 = cResult[26];
                          }
                          if (cResult[27] === tmp4.labelContainer) {
                            if (cResult[28] === tmp39) {
                              if (cResult[29] === tmp28) {
                                if (cResult[30] === tmp32) {
                                  if (cResult[31] === tmp35) {
                                    let tmp42 = cResult[32];
                                  }
                                  return tmp42;
                                }
                              }
                            }
                          }
                          const obj2 = { style: tmp4.labelContainer, children: null };
                          const items1 = [tmp28, tmp32, tmp35, tmp39];
                          obj2.children = items1;
                          const tmp45 = __initData(React4, obj2);
                          cResult[27] = tmp4.labelContainer;
                          cResult[28] = tmp39;
                          cResult[29] = tmp28;
                          cResult[30] = tmp32;
                          cResult[31] = tmp35;
                          cResult[32] = tmp45;
                          tmp42 = tmp45;
                        }
                        let tmp40 = null;
                        if (message.isPoll()) {
                          const obj3 = { style: tmp4.pollBadge };
                          tmp40 = closure_1_11(PollBadgeDefault, obj3);
                        }
                        cResult[24] = message;
                        cResult[25] = tmp4.pollBadge;
                        cResult[26] = tmp40;
                        tmp39 = tmp40;
                      }
                      let tmp37 = null;
                      if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
                        const obj4 = { size: "xs", style: tmp4.suppressNotificationsIcon };
                        tmp37 = closure_1_11(tmp(13599).BellZIcon, obj4);
                      }
                      cResult[21] = message;
                      cResult[22] = tmp4.suppressNotificationsIcon;
                      cResult[23] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                  const obj5 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, style: tmp4.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
                  const tmp34 = closure_1_11(tmp(4754).Text, obj5);
                  cResult[17] = tmp4.timestamp;
                  cResult[18] = timestamp;
                  cResult[19] = timestampAccessibilityLabel;
                  cResult[20] = tmp34;
                  tmp32 = tmp34;
                }
              }
              const obj6 = { style: tmp4.authorRow, children: null };
              const items2 = [tmp20, tmp25];
              obj6.children = items2;
              const tmp31 = __initData(React4, obj6);
              cResult[13] = tmp4.authorRow;
              cResult[14] = tmp20;
              cResult[15] = tmp25;
              cResult[16] = tmp31;
              tmp28 = tmp31;
            }
          }
          const obj7 = { variant: "text-sm/semibold", color: "interactive-text-active", lineClamp: 1, style: tmp11, gradientColors: tmp24, children: nick };
          const tmp27 = closure_1_11(tmp(4754).Text, obj7);
          cResult[9] = tmp11;
          cResult[10] = nick;
          cResult[11] = tmp24;
          cResult[12] = tmp27;
          tmp25 = tmp27;
        }
      }
      let tmp21 = "dot" === stateFromStores;
      if (tmp21) {
        tmp21 = null != colorString;
      }
      if (tmp21) {
        const obj8 = { size: "small", color: colorString, colors: colorStrings };
        tmp21 = closure_1_11(tmp(1181).RoleDot, obj8);
      }
      cResult[5] = colorString;
      cResult[6] = colorStrings;
      cResult[7] = stateFromStores;
      cResult[8] = tmp21;
      tmp20 = tmp21;
      const tmpResult6 = tmp(17149);
    }
  }
  if ("username" !== stateFromStores) {
    let obj9 = {};
    cResult[2] = colorString;
    cResult[3] = stateFromStores;
    cResult[4] = obj9;
  }
  obj9 = { color: colorString };
}) : ((arg0) => {
  ({ message, channel } = arg0);
  const tmp = closure_13();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ colorString, colorStrings } = useMessageAuthorDefault(message));
  if ("username" === stateFromStores) {
    if (null != colorString) {
      const obj2 = { color: colorString };
    }
    const processColorStringsArray = tmp2(8224).useProcessColorStringsArray(colorStrings);
    const tmp2Result3 = tmp2(8224);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result3.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
    const tmp2Result = tmp2(8224);
    const searchMessageTimestamp = tmp2(17149).useSearchMessageTimestamp(message, channel);
    const obj3 = { style: tmp.labelContainer, children: null };
    const obj4 = { style: tmp.authorRow, children: null };
    let tmp18 = "dot" === stateFromStores;
    ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
    if (tmp18) {
      tmp18 = null != colorString;
    }
    if (tmp18) {
      const obj5 = { size: "small", color: colorString, colors: colorStrings };
      tmp18 = closure_1_11(tmp2(1181).RoleDot, obj5);
    }
    const items1 = [tmp18, ];
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", lineClamp: 1, style: {}, gradientColors: null, children: null };
    let tmp22;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp22 = processColorStringsArray;
    }
    obj6.gradientColors = tmp22;
    obj6.children = tmp7;
    items1[1] = closure_1_11(tmp2(4754).Text, obj6);
    obj4.children = items1;
    const items2 = [__initData(React4, obj4), , , ];
    const obj7 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
    items2[1] = closure_1_11(tmp2(4754).Text, obj7);
    let tmp21Result = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj8 = { size: "xs", style: tmp.suppressNotificationsIcon };
      tmp21Result = tmp21(tmp2(13599).BellZIcon, obj8);
    }
    items2[2] = tmp21Result;
    let tmp21Result2 = null;
    if (message.isPoll()) {
      const obj9 = { style: tmp.pollBadge };
      tmp21Result2 = tmp21(PollBadgeDefault, obj9);
    }
    items2[3] = tmp21Result2;
    obj3.children = items2;
    return __initData(React4, obj3);
  }
});
ReactCompilerGating = fn(558);
let obj3 = { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let SearchListRow = message;
  let tmp = guild_id;
  const cResult = message(guild_id[12]).c(41);
  message = message.message;
  const onPress = message.onPress;
  ({ lineClamp, messageSizeCacheRef } = message);
  let body = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message.channel_id) {
    const fn = function n() {
      return ChannelStore.getChannel(message.channel_id);
    };
    cResult[1] = message.channel_id;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  const obj = message(guild_id[12]);
  const stateFromStores = SearchListRow(tmp[13]).useStateFromStores(first, tmp5);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FavoriteStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === guild_id) {
    if (cResult[5] === message.channel_id) {
      let tmp10 = cResult[6];
    }
    const stateFromStores1 = SearchListRow(tmp[13]).useStateFromStores(tmp8, tmp10);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserGuildSettingsStore];
      cResult[7] = items2;
      let tmp12 = items2;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === guild_id) {
      if (cResult[9] === message.channel_id) {
        let tmp14 = cResult[10];
      }
      const stateFromStores2 = SearchListRow(tmp[13]).useStateFromStores(tmp12, tmp14);
      const SearchListRowResult2 = SearchListRow(tmp[13]);
      const isChannelSpoilerGated = SearchListRow(tmp[28]).useIsChannelSpoilerGated(stateFromStores);
      if (cResult[11] === message.channel_id) {
        if (cResult[12] === message.id) {
          if (cResult[13] === onPress) {
            let tmp17 = cResult[14];
          }
          let guild_id1;
          if (stateFromStores != null) {
            guild_id1 = stateFromStores.guild_id;
          }
          const tmp19 = null == guild_id1 ? closure_16 : closure_17;
          if (cResult[15] === stateFromStores) {
            if (cResult[16] === stateFromStores1) {
              if (cResult[17] === stateFromStores2) {
                let tmp20 = cResult[18];
              }
              if (null == stateFromStores) {
                return null;
              } else {
                if (cResult[19] === stateFromStores) {
                  if (cResult[20] === message) {
                    let tmp26 = cResult[21];
                  }
                  if (cResult[22] === tmp19) {
                    if (cResult[23] === stateFromStores) {
                      if (cResult[24] === message) {
                        if (cResult[25] === stateFromStores2) {
                          let tmp30 = cResult[26];
                        }
                        if (cResult[27] === stateFromStores) {
                          if (cResult[28] === isChannelSpoilerGated) {
                            if (cResult[29] === lineClamp) {
                              if (cResult[30] === message) {
                                if (cResult[31] === messageSizeCacheRef) {
                                  if (cResult[32] === body.spoilerText) {
                                    if (cResult[34] === tmp20) {
                                      if (cResult[35] === tmp17) {
                                        if (cResult[36] === body.body) {
                                          if (cResult[37] === tmp30) {
                                            if (cResult[38] === tmp33) {
                                            }
                                          }
                                        }
                                      }
                                    }
                                    SearchListRow = SearchListRow(tmp[32]).SearchListRow;
                                    const obj2 = { header: tmp20, icon: tmp26, label: null, subLabel: null, onPress: null, bodyStyle: null };
                                    class A {
                                      constructor() {
                                        return closure_9.isChannelMuted(guild_id, message.channel_id);
                                      }
                                    }
                                    obj2.subLabel = cResult[33];
                                    obj2.onPress = tmp17;
                                    obj2.bodyStyle = body.body;
                                    tmp = closure_11(SearchListRow, obj2);
                                    cResult[34] = tmp20;
                                    cResult[35] = tmp17;
                                    body = body.body;
                                    cResult[36] = body;
                                    cResult[37] = tmp30;
                                    cResult[38] = cResult[33];
                                    cResult[39] = tmp26;
                                    cResult[40] = tmp;
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (isChannelSpoilerGated) {
                          const obj3 = { variant: "text-sm/normal", color: "text-muted", style: body.spoilerText, children: null };
                          const intl = SearchListRow(tmp[29]).intl;
                          obj3.children = intl.string(SearchListRow(tmp[29]).t["5uaI/7"]);
                          const tmp34Result = tmp34(SearchListRow(tmp[17]).Text, obj3);
                        } else {
                          const obj4 = { message, channel: stateFromStores, muted: false, layout: null, color: "interactive-text-default", lineClamp: null, messageSizeCacheRef: null };
                          const NativeMessageChannelRowPreview = SearchListRow(tmp[30]).NativeMessageChannelRowPreview;
                          obj4.layout = SearchListRow(tmp[31]).ChannelListLayoutTypes.COZY;
                          obj4.lineClamp = lineClamp;
                          obj4.messageSizeCacheRef = messageSizeCacheRef;
                          class A {
                            constructor() {
                              return closure_9.isChannelMuted(guild_id, message.channel_id);
                            }
                          }
                        }
                        cResult[27] = stateFromStores;
                        class A {
                          constructor() {
                            return closure_9.isChannelMuted(guild_id, message.channel_id);
                          }
                        }
                        cResult[29] = lineClamp;
                        cResult[30] = message;
                        cResult[31] = messageSizeCacheRef;
                        messageSizeCacheRef = body.spoilerText;
                        cResult[32] = messageSizeCacheRef;
                        cResult[33] = tmp34Result;
                        tmp34 = closure_11;
                      }
                    }
                  }
                  const obj5 = { message, channel: stateFromStores, muted: stateFromStores2 };
                  class A {
                    constructor() {
                      return closure_9.isChannelMuted(guild_id, message.channel_id);
                    }
                  }
                  cResult[22] = tmp19;
                  cResult[23] = stateFromStores;
                  cResult[24] = message;
                  cResult[25] = stateFromStores2;
                  cResult[26] = tmp32;
                  tmp30 = tmp32;
                }
                const obj6 = { message, channel: stateFromStores };
                const tmp29 = closure_11(closure_15, obj6);
                class A {
                  constructor() {
                    return closure_9.isChannelMuted(guild_id, message.channel_id);
                  }
                }
                cResult[19] = stateFromStores;
                cResult[20] = message;
                cResult[21] = tmp29;
                tmp26 = tmp29;
              }
            }
          }
          let guild_id2;
          if (stateFromStores != null) {
            guild_id2 = stateFromStores.guild_id;
          }
          class A {
            constructor() {
              return closure_9.isChannelMuted(guild_id, message.channel_id);
            }
          }
          if (null != guild_id2) {
            const obj7 = { channel: stateFromStores, muted: stateFromStores2, isFavorite: stateFromStores1 };
            const tmp22 = closure_11(closure_14, obj7);
          }
          cResult[15] = stateFromStores;
          cResult[16] = stateFromStores1;
          cResult[17] = stateFromStores2;
          cResult[18] = tmp22;
          tmp20 = tmp22;
        }
      }
      const fn2 = function z() {
        onPress({ channelId: message.channel_id, messageId: message.id });
      };
      class A {
        constructor() {
          return closure_9.isChannelMuted(guild_id, message.channel_id);
        }
      }
      cResult[11] = message.channel_id;
      cResult[12] = message.id;
      cResult[13] = onPress;
      cResult[14] = fn2;
      tmp17 = fn2;
      const SearchListRowResult3 = SearchListRow(tmp[28]);
    }
    class A {
      constructor() {
        return closure_9.isChannelMuted(guild_id, message.channel_id);
      }
    }
    cResult[8] = guild_id;
    cResult[9] = message.channel_id;
    cResult[10] = A;
    tmp14 = A;
    const SearchListRowResult1 = SearchListRow(tmp[13]);
  }
  class T {
    constructor() {
      isFavoriteResult = null != guild_id;
      if (isFavoriteResult) {
        tmp2 = closure_6;
        tmp3 = message;
        isFavoriteResult = closure_6.isFavorite(message.channel_id);
      }
      return isFavoriteResult;
    }
  }
  cResult[4] = guild_id;
  cResult[5] = message.channel_id;
  cResult[6] = T;
  tmp10 = T;
}) : ((message) => {
  message = message.message;
  const onPress = message.onPress;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  ({ lineClamp, messageSizeCacheRef } = message);
  let body = closure_13();
  let stringResult = stateFromStores;
  const items = [ChannelStore];
  stateFromStores = message(stateFromStores[13]).useStateFromStores(items, () => ChannelStore.getChannel(message.channel_id));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let obj = message(stateFromStores[13]);
  const items1 = [FavoriteStore];
  stateFromStores1 = message(stringResult[13]).useStateFromStores(items1, () => {
    let isFavoriteResult = null != guild_id;
    if (isFavoriteResult) {
      isFavoriteResult = FavoriteStore.isFavorite(message.channel_id);
    }
    return isFavoriteResult;
  });
  const tmpResult = message(stringResult[13]);
  const items2 = [UserGuildSettingsStore];
  stateFromStores2 = message(stringResult[13]).useStateFromStores(items2, () => UserGuildSettingsStore.isChannelMuted(guild_id, message.channel_id));
  const tmpResult3 = message(stringResult[13]);
  const items3 = [, , ];
  ({ channel_id: arr4[0], id: arr4[1] } = message);
  items3[2] = onPress;
  const isChannelSpoilerGated = message(stringResult[28]).useIsChannelSpoilerGated(stateFromStores);
  let guild_id1;
  const callback = guild_id.useCallback(() => {
    onPress({ channelId: message.channel_id, messageId: message.id });
  }, items3);
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  const items4 = [guild_id1];
  const items5 = [stateFromStores, stateFromStores1, stateFromStores2];
  const memo = guild_id.useMemo(() => {
    guild_id = undefined;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return null == guild_id ? closure_16 : closure_17;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = { header: tmp12, icon: null, label: null, subLabel: null, onPress: null, bodyStyle: null };
    const obj3 = { message, channel: stateFromStores };
    obj2.icon = closure_11(closure_15, obj3);
    const obj4 = { message, channel: stateFromStores, muted: stateFromStores2 };
    obj2.label = closure_11(memo, obj4);
    if (isChannelSpoilerGated) {
      const obj5 = { variant: "text-sm/normal", color: "text-muted", style: body.spoilerText, children: null };
      const intl = tmp(stringResult[29]).intl;
      stringResult = intl.string(tmp(stringResult[29]).t["5uaI/7"]);
      obj5.children = stringResult;
      let tmp13Result = tmp13(tmp(stringResult[17]).Text, obj5);
    } else {
      const obj6 = { message, channel: stateFromStores, muted: false, layout: tmp(stringResult[31]).ChannelListLayoutTypes.COZY, color: "interactive-text-default", lineClamp, messageSizeCacheRef };
      tmp13Result = tmp13(tmp(stringResult[30]).NativeMessageChannelRowPreview, obj6);
    }
    obj2.subLabel = tmp13Result;
    obj2.onPress = callback;
    body = body.body;
    obj2.bodyStyle = body;
    closure_11(tmp(stringResult[32]).SearchListRow, obj2);
  }
}));
