// Module ID: 14496
// Function ID: 14497
// Name: GuildChannelHeader
// Dependencies: [32, 19, 17, 14497, 6555, 4861, 7432, 4857, 5231, 4879, 4947, 1389, 1084, 4854, 21, 558, 576, 5289, 587, 504, 7082, 11079, 9924, 1125, 5641, 14492, 11067, 5271, 4841, 7555, 2065, 8561, 9906, 10158, 7406, 7405, 14498, 14487, 2]

// Module 14496 (GuildChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2065 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4854 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import useChannelName2 from "useChannelName" /* 5641 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 9924 */;
import ChannelHeader from "ChannelHeader" /* 14487 */;
import openConjureAppChannelSheetDefault from "openConjureAppChannelSheet" /* 14498 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 14497 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6555 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7432 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5231 */;
import GuildStore from "GuildStore" /* 4879 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let tmp;
const utils_ChannelUtils = tmp(8561);
function computeVisibleChannelName(channel) {
  let guildId;
  let isConnected;
  let showCreateThread;
  let stringResult;
  channel = channel.channel;
  ({ guildId, showCreateThread, isConnected } = channel);
  const obj = age_gate_AgeGateUtils;
  if (obj.shouldNSFWGateGuild(guildId)) {
    const intl3 = tmp(1125).intl;
    stringResult = intl3.string(tmp(1125).t.HbPHt1);
  } else if (showCreateThread) {
    const intl2 = tmp(1125).intl;
    stringResult = intl2.string(tmp(1125).t["4WNcpu"]);
  } else if (null == channel) {
    let stringResult1;
    const intl = tmp(1125).intl;
    const string = intl.string;
    const t = tmp(1125).t;
    if (isConnected) {
      stringResult1 = string(t.ai6Lbr);
    } else {
      stringResult1 = string(t.ZTNur7);
    }
    stringResult = stringResult1;
  } else {
    const tmpResult = useChannelName2;
    stringResult = tmpResult.computeChannelName(channel, UserStore, RelationshipStore);
  }
  return stringResult;
}
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ ChannelTypes: closure_15, HelpdeskArticles: closure_16, StatusTypes: closure_17 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
let c22 = 500;
const mobile_channel_header_label = "mobile_channel_header_label";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelMemberCount(channel) {
  let first;
  let online;
  let total;
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(13);
  channel = channel.channel;
  const withSeparator = channel.withSeparator;
  let tmp4 = undefined !== withSeparator && withSeparator;
  const tmpResult = tmp(5289);
  const token = tmpResult.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = ChannelMemberStore;
    const items = [ChannelMemberStore, ];
    let tmp8 = ChannelMemberCountStore;
    items[1] = ChannelMemberCountStore;
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    let tmp9;
    if (cResult[2] === channel.id) {
      tmp9 = cResult[3];
    }
    const tmpResult3 = tmp(504);
    const stateFromStoresObject = tmpResult3.useStateFromStoresObject(first, tmp9);
    ({ online, total } = stateFromStoresObject);
    if (cResult[4] === channel.guild_id) {
      let tmp11;
      let tmp12;
      if (cResult[5] === channel.id) {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const effect = react.useEffect(tmp11, tmp12);
      if (null == total) {
        const tmp18 = tmp(7082).ICON_SIZE[token];
        if (cResult[8] === online) {
          if (cResult[9] === tmp18) {
            if (cResult[10] === total) {
              let tmp19;
              if (cResult[11] === tmp4) {
                tmp19 = cResult[12];
              }
              return tmp19;
            }
          }
        }
        const tmpResult4 = tmp(11079);
        class S {
          constructor() {
            const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
          }
        }
        const result = tmpResult4.renderMemberCountText(online, total, tmp4, tmp18);
        cResult[8] = online;
        cResult[9] = tmp18;
        cResult[10] = total;
        cResult[11] = tmp4;
        cResult[12] = result;
        tmp19 = result;
      }
    }
    class S {
      constructor() {
        const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
      }
    }
    const items1 = [, ];
    ({ guild_id: arr2[0], id: arr2[1] } = channel);
    let num2 = 4;
    cResult[4] = channel.guild_id;
    cResult[5] = channel.id;
    cResult[6] = S;
    cResult[7] = items1;
    tmp12 = items1;
    tmp11 = S;
  }
  const fn = function u() {
    let memberCount;
    const groups = ChannelMemberStore.getProps(channel.guild_id, channel.id).groups;
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of groups) {
      let tmp = item10021;
      let tmp2 = 0 !== item10021.count;
      if (tmp2) {
        tmp2 = tmp.id !== constants.UNKNOWN;
      }
      if (tmp2) {
        flag = true;
        num = num + tmp.count;
        if (tmp.id === constants.OFFLINE) {
          flag2 = true;
        } else {
          num2 = num2 + tmp.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp14 = null;
      if (flag2) {
        tmp14 = num;
      }
      memberCount = { total: tmp14, online: num2 };
      const obj = { total: tmp14, online: num2 };
    } else {
      memberCount = ChannelMemberCountStore.getMemberCount(channel.id);
    }
    return memberCount;
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp9 = fn;
}) : (function GuildChannelMemberCount(channel) {
  let online;
  let total;
  channel = channel.channel;
  let flag = channel.withSeparator;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(5289);
  const token = obj.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  const items = [ChannelMemberStore, ChannelMemberCountStore];
  const obj2 = channel(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let memberCount;
    const groups = ChannelMemberStore.getProps(channel.guild_id, channel.id).groups;
    let flag = false;
    let flag2 = false;
    let num = 0;
    let num2 = 0;
    for (const item10021 of groups) {
      let tmp = item10021;
      let tmp2 = 0 !== item10021.count;
      if (tmp2) {
        tmp2 = tmp.id !== constants.UNKNOWN;
      }
      if (tmp2) {
        flag = true;
        num = num + tmp.count;
        if (tmp.id === constants.OFFLINE) {
          flag2 = true;
        } else {
          num2 = num2 + tmp.count;
        }
      }
      continue;
    }
    if (flag) {
      let tmp14 = null;
      if (flag2) {
        tmp14 = num;
      }
      memberCount = { total: tmp14, online: num2 };
      const obj = { total: tmp14, online: num2 };
    } else {
      memberCount = ChannelMemberCountStore.getMemberCount(channel.id);
    }
    return memberCount;
  });
  ({ online, total } = stateFromStoresObject);
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const effect = react.useEffect(() => {
    const count = ChannelMemberCountStore.requestCount(channel.guild_id, channel.id);
  }, items1);
  if (null == total) {
    if (null != online) {
      let tmp7 = c22;
    }
    const tmpResult = tmp(11079);
    let tmp8 = tmpResult;
    let tmp9 = online;
    return tmpResult.renderMemberCountText(online, total, flag, tmp(7082).ICON_SIZE[token]);
  } else {
    let tmp6 = c22;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelName(arg0) {
  let appSubTitle;
  let channel;
  let connected;
  let disableArrow;
  let disableGuildMemberCount;
  let guildId;
  let icon;
  let items2;
  let parentChannel;
  let showCreateThread;
  let tmp4;
  let tmp5;
  const obj = guildId(576);
  const cResult = obj.c(39);
  ({ channel, parentChannel, guildId } = arg0);
  ({ disableGuildMemberCount, showCreateThread, appSubTitle } = arg0);
  ({ disableArrow, icon } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatewayConnectionStore];
    const fn = function t() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = guildId(504);
  const obj2 = { channel, guildId, showCreateThread, isConnected: tmpResult.useStateFromStores(tmp4, tmp5) };
  const tmp7 = computeVisibleChannelName(obj2);
  if (cResult[2] === channel) {
    if (cResult[3] === guildId) {
      let tmp8;
      if (cResult[4] === showCreateThread) {
        tmp8 = cResult[5];
      }
      const formatToPlainString = tmp(1125).intl.formatToPlainString;
      const t = tmp(1125).t;
      if (cResult[6] === tmp8) {
        let tmp15;
        if (cResult[7] === parentChannel) {
          tmp15 = cResult[8];
        }
        const items1 = [GuildMemberCountStore];
        const tmpResult7 = guildId(504);
        let num6 = tmpResult7.useStateFromStores(items1, () => GuildMemberCountStore.getMemberCount(guildId));
        if (num6 == null) {
          num6 = 0;
        }
        let id;
        const useShouldChannelShowLoadingIndicator = guildId(14492).useShouldChannelShowLoadingIndicator;
        guildId(14492);
        if (channel != null) {
          id = channel.id;
        }
        const shouldChannelShowLoadingIndicator = useShouldChannelShowLoadingIndicator(id);
        if (cResult[9] === channel) {
          let tmp23;
          if (cResult[10] === shouldChannelShowLoadingIndicator) {
            tmp23 = cResult[11];
          }
          let tmp27 = null;
          const useIsPinotChannelLabelVisible = guildId(11067).useIsPinotChannelLabelVisible;
          guildId(11067);
          if (!showCreateThread) {
            tmp27 = channel;
          }
          const tmp29 = useIsPinotChannelLabelVisible(tmp27, mobile_channel_header_label) && null == appSubTitle && !tmp23;
          if (cResult[12] === appSubTitle) {
            if (cResult[13] === channel) {
              if (cResult[14] === disableGuildMemberCount) {
                if (cResult[15] === num6) {
                  if (cResult[16] === tmp29) {
                    let tmp30;
                    if (cResult[17] === showCreateThread) {
                      tmp30 = cResult[18];
                    }
                    let tmp34 = appSubTitle;
                    if (null == appSubTitle) {
                      if (tmp23) {
                        let tmp50;
                        const _Symbol = Symbol;
                        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp52 = closure_19(guildId(14492).ChannelHeaderLoadingIndicator, {});
                          cResult[19] = tmp52;
                          tmp50 = tmp52;
                        } else {
                          tmp50 = cResult[19];
                        }
                        tmp34 = tmp50;
                      } else {
                        if (cResult[20] === channel) {
                          if (cResult[21] === tmp15) {
                            let tmp35;
                            if (cResult[22] === tmp30) {
                              tmp35 = cResult[23];
                            }
                            if (cResult[24] === tmp15) {
                              let tmp40;
                              if (cResult[25] === tmp29) {
                                tmp40 = cResult[26];
                              }
                              if (cResult[27] === channel) {
                                let tmp43;
                                if (cResult[28] === tmp29) {
                                  tmp43 = cResult[29];
                                }
                                if (cResult[30] === tmp43) {
                                  if (cResult[31] === tmp35) {
                                    if (cResult[32] === (null != parentChannel && tmp15)) {
                                      let tmp46;
                                      if (cResult[33] === tmp40) {
                                        tmp46 = cResult[34];
                                      }
                                      tmp34 = tmp46;
                                    }
                                  }
                                }
                                const obj4 = { children: items2 };
                                items2 = [tmp35, null != parentChannel && tmp15, tmp40, tmp43];
                                const tmp49 = closure_21(closure_20, obj4);
                                cResult[30] = tmp43;
                                cResult[31] = tmp35;
                                cResult[32] = null != parentChannel && tmp15;
                                cResult[33] = tmp40;
                                cResult[34] = tmp49;
                                tmp46 = tmp49;
                              }
                              let tmp44 = null;
                              if (tmp29) {
                                tmp44 = null;
                                if (null != channel) {
                                  const obj5 = { channelId: channel.id };
                                  tmp44 = closure_19(tmp(11067).PinotChannelLabel, obj5);
                                }
                              }
                              cResult[27] = channel;
                              cResult[28] = tmp29;
                              cResult[29] = tmp44;
                              tmp43 = tmp44;
                            }
                            let tmp41 = null;
                            if (tmp29) {
                              tmp41 = null;
                              if (null != tmp15) {
                                tmp41 = closure_19(tmp(5271).Text, { variant: "text-sm/medium", color: "text-subtle", children: "\u2022" });
                              }
                            }
                            cResult[24] = tmp15;
                            cResult[25] = tmp29;
                            cResult[26] = tmp41;
                            tmp40 = tmp41;
                          }
                        }
                        let tmp36 = tmp30;
                        if (tmp36) {
                          const obj6 = { channel, withSeparator: null != tmp15 };
                          tmp36 = closure_19(closure_24, obj6);
                        }
                        cResult[20] = channel;
                        cResult[21] = tmp15;
                        cResult[22] = tmp30;
                        cResult[23] = tmp36;
                        tmp35 = tmp36;
                      }
                    }
                    const tmp53 = null != appSubTitle || tmp23 || tmp30 || null != tmp15 || tmp29;
                    const obj7 = { accessibleTitle: tmp14, subtitle: tmp34, disableArrow, guildId, icon };
                    const tmpResult10 = guildId(11079);
                    const renderChannelTitleResult = tmpResult10.renderChannelTitle(tmp7, obj7);
                    if (cResult[35] === tmp53) {
                      if (cResult[36] === tmp29) {
                        let tmp55;
                        if (cResult[37] === renderChannelTitleResult) {
                          tmp55 = cResult[38];
                        }
                        return tmp55;
                      }
                    }
                    const obj8 = { node: renderChannelTitleResult, hasSubtitle: tmp53, showsPinotLabel: tmp29 };
                    cResult[35] = tmp53;
                    cResult[36] = tmp29;
                    cResult[37] = renderChannelTitleResult;
                    cResult[38] = obj8;
                    tmp55 = obj8;
                  }
                }
              }
            }
          }
          let tmp31 = !disableGuildMemberCount && !tmp29 && num6 < c22 && null != channel && !channel.isThread();
          if (tmp31) {
            const items3 = [, ];
            ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
            tmp31 = !items3.includes(channel.type);
          }
          if (tmp31) {
            tmp31 = !showCreateThread;
          }
          if (tmp31) {
            tmp31 = null == appSubTitle;
          }
          cResult[12] = appSubTitle;
          cResult[13] = channel;
          cResult[14] = disableGuildMemberCount;
          cResult[15] = num6;
          cResult[16] = tmp29;
          cResult[17] = showCreateThread;
          cResult[18] = tmp31;
          tmp30 = tmp31;
        }
        let isForumLikeChannelResult;
        if (channel != null) {
          isForumLikeChannelResult = channel.isForumLikeChannel();
        }
        cResult[9] = channel;
        cResult[10] = shouldChannelShowLoadingIndicator;
        cResult[11] = !isForumLikeChannelResult && shouldChannelShowLoadingIndicator;
        tmp23 = tmp25;
      }
      let result;
      if (tmp8) {
        if (null != parentChannel) {
          const tmpResult11 = guildId(11079);
          result = tmpResult11.renderParentChannelSubTitle(parentChannel);
        }
      }
      cResult[6] = tmp8;
      cResult[7] = parentChannel;
      cResult[8] = result;
      tmp15 = result;
    }
  }
  const tmpResult12 = guildId(9924);
  let tmp10 = !tmpResult12.shouldNSFWGateGuild(guildId);
  tmpResult12.shouldNSFWGateGuild(guildId);
  if (tmp10) {
    let tmp11 = showCreateThread;
    if (!tmp11) {
      let isThreadResult;
      if (channel != null) {
        isThreadResult = channel.isThread();
      }
      tmp11 = isThreadResult;
    }
    tmp10 = tmp11;
  }
  cResult[2] = channel;
  cResult[3] = guildId;
  cResult[4] = showCreateThread;
  cResult[5] = tmp10;
  tmp8 = tmp10;
}) : (function useChannelName(arg0) {
  let appSubTitle;
  let channel;
  let connected;
  let disableArrow;
  let disableGuildMemberCount;
  let guildId;
  let icon;
  let parentChannel;
  let showCreateThread;
  let tmpResult8;
  ({ channel, parentChannel, guildId } = arg0);
  ({ disableGuildMemberCount, showCreateThread, appSubTitle } = arg0);
  ({ disableArrow, icon } = arg0);
  const items = [GatewayConnectionStore];
  const obj = guildId(504);
  const obj2 = { channel, guildId, showCreateThread, isConnected: obj.useStateFromStores(items, () => connected.isConnected()) };
  const tmp3 = computeVisibleChannelName(obj2);
  const obj3 = guildId(9924);
  let tmp5 = !obj3.shouldNSFWGateGuild(guildId);
  obj3.shouldNSFWGateGuild(guildId);
  if (tmp5) {
    let tmp6 = showCreateThread;
    if (!tmp6) {
      let isThreadResult;
      if (channel != null) {
        isThreadResult = channel.isThread();
      }
      tmp6 = isThreadResult;
    }
    tmp5 = tmp6;
  }
  const intl = tmp(1125).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp(1125).t;
  let result;
  const formatToPlainStringResult = formatToPlainString(tmp5 ? t["OkzL+Q"] : t.UbNmGc, { channelName: tmp3 });
  if (tmp5) {
    if (null != parentChannel) {
      const tmpResult = guildId(11079);
      result = tmpResult.renderParentChannelSubTitle(parentChannel);
    }
  }
  const items1 = [GuildMemberCountStore];
  const tmpResult5 = guildId(504);
  let num = tmpResult5.useStateFromStores(items1, () => GuildMemberCountStore.getMemberCount(guildId));
  if (num == null) {
    num = 0;
  }
  let id;
  const useShouldChannelShowLoadingIndicator = guildId(14492).useShouldChannelShowLoadingIndicator;
  guildId(14492);
  if (channel != null) {
    id = channel.id;
  }
  let isForumLikeChannelResult;
  const shouldChannelShowLoadingIndicator = useShouldChannelShowLoadingIndicator(id);
  if (channel != null) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  let tmp18 = null;
  const useIsPinotChannelLabelVisible = guildId(11067).useIsPinotChannelLabelVisible;
  guildId(11067);
  if (!showCreateThread) {
    tmp18 = channel;
  }
  const tmp19 = useIsPinotChannelLabelVisible(tmp18, mobile_channel_header_label) && null == appSubTitle && !(!isForumLikeChannelResult && shouldChannelShowLoadingIndicator);
  let tmp20 = !disableGuildMemberCount && !tmp19 && num < c22 && null != channel && !channel.isThread();
  if (tmp20) {
    const items2 = [, ];
    ({ GUILD_DIRECTORY: arr3[0], GUILD_FORUM: arr3[1] } = closure_15);
    tmp20 = !items2.includes(channel.type);
  }
  if (tmp20) {
    tmp20 = !showCreateThread;
  }
  if (tmp20) {
    tmp20 = null == appSubTitle;
  }
  let tmp23 = appSubTitle;
  if (null == appSubTitle) {
    let tmp24Result;
    if (!isForumLikeChannelResult && shouldChannelShowLoadingIndicator) {
      tmp24Result = closure_19(tmp(14492).ChannelHeaderLoadingIndicator, {});
    } else {
      let tmp26 = tmp20;
      const tmp24 = closure_21;
      const tmp25 = closure_20;
      if (tmp20) {
        const obj4 = { channel, withSeparator: null != result };
        tmp26 = closure_19(closure_24, obj4);
      }
      const items3 = [tmp26, null != parentChannel && result, , ];
      let tmp29 = null;
      if (tmp19) {
        tmp29 = null;
        if (null != result) {
          tmp29 = closure_19(tmp(5271).Text, { variant: "text-sm/medium", color: "text-subtle", children: "\u2022" });
        }
      }
      items3[2] = tmp29;
      let tmp31 = null;
      if (tmp19) {
        tmp31 = null;
        if (null != channel) {
          const obj5 = { channelId: channel.id };
          tmp31 = closure_19(tmp(11067).PinotChannelLabel, obj5);
        }
      }
      const obj6 = { children: items3 };
      items3[3] = tmp31;
      tmp24Result = tmp24(tmp25, obj6);
    }
    tmp23 = tmp24Result;
  }
  const obj7 = { node: tmpResult8.renderChannelTitle(tmp3, { accessibleTitle: formatToPlainStringResult, subtitle: tmp23, disableArrow, guildId, icon }), hasSubtitle: null != appSubTitle || !isForumLikeChannelResult && shouldChannelShowLoadingIndicator || tmp20 || null != result || tmp19, showsPinotLabel: tmp19 };
  tmpResult8 = guildId(11079);
  return obj7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLinkedLobbyCoachmark(iconRef) {
  let channel;
  let closure_0;
  let guild;
  let obj5;
  let tmp10;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(13);
  ({ guild, channel } = iconRef);
  iconRef = iconRef.iconRef;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [require("dismissible_content").DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
    const obj2 = { bypassAutoDismiss: true };
    cResult[0] = items;
    cResult[1] = obj2;
    tmp4 = items;
    tmp5 = obj2;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp6 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4, tmp5), 2);
  _require = tmp8;
  const first = tmp6[0];
  const CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP = tmp(4841).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(require("intl").t.YIVr4B);
    const intl2 = tmp(1125).intl;
    const format = intl2.format;
    const obj3 = { helpdeskArticle: obj5.getArticleURL(constants2.LINKED_LOBBIES) };
    const w8VWRT = tmp(1125).t.w8VWRT;
    obj5 = HelpdeskUtilsDefault;
    const formatResult = format(w8VWRT, obj3);
    cResult[2] = stringResult;
    cResult[3] = formatResult;
    tmp10 = formatResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let linkedLobby;
  if (channel != null) {
    linkedLobby = channel.linkedLobby;
  }
  if (cResult[4] !== tmp6[1]) {
    const fn = function f() {
      return closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[4] = tmp6[1];
    cResult[5] = fn;
    tmp17 = fn;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === channel) {
    let tmp18;
    if (cResult[7] === guild) {
      tmp18 = cResult[8];
    }
    if (cResult[9] === (null != linkedLobby && first === CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP)) {
      if (cResult[10] === tmp17) {
        let tmp20;
        if (cResult[11] === tmp18) {
          tmp20 = cResult[12];
        }
        const tmpResult3 = require("useCoachmark");
        const coachmark = tmpResult3.useCoachmark(iconRef, tmp20);
        return null;
      }
    }
    const obj4 = { title: tmp9, description: tmp10, visible: null != linkedLobby && first === CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP, position: "bottom", offsetY: 15, onDismiss: tmp17, imgSource: tmp18 };
    cResult[9] = null != linkedLobby && first === CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
    cResult[10] = tmp17;
    cResult[11] = tmp18;
    cResult[12] = obj4;
    tmp20 = obj4;
  }
  let channelIconWithGuild;
  if (null != channel) {
    const tmpResult4 = require("utils/ChannelUtils");
    channelIconWithGuild = tmpResult4.getChannelIconWithGuild(channel, guild);
  }
  cResult[6] = channel;
  cResult[7] = guild;
  cResult[8] = channelIconWithGuild;
  tmp18 = channelIconWithGuild;
}) : (function ChannelLinkedLobbyCoachmark(guild) {
  let closure_2;
  let closure_3;
  guild = guild.guild;
  const channel = guild.channel;
  _slicedToArray = undefined;
  const iconRef = guild.iconRef;
  let tmp = guild(7555);
  const useSelectedDismissibleContent = tmp.useSelectedDismissibleContent;
  const items = [guild(4841).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP];
  const tmp2 = _slicedToArray(useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  const tmp3 = tmp2[1];
  dependencyMap = tmp3;
  const tmp4 = tmp2[0] === guild(4841).DismissibleContent.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
  _slicedToArray = tmp4;
  const items1 = [channel, guild, tmp3, tmp4];
  const memo = react.useMemo(() => {
    let channelIconWithGuild;
    let format;
    let intl;
    let linkedLobby;
    let obj2;
    let obj3;
    let w8VWRT;
    const obj = {
      title: intl.string(intl4.t.YIVr4B),
      description: format(w8VWRT, obj2),
      visible: null != linkedLobby && closure_3,
      position: "bottom",
      offsetY: 15,
      onDismiss() {
        return closure_1_2(constants.USER_DISMISS);
      },
      imgSource: channelIconWithGuild
    };
    intl = intl4.intl;
    const intl2 = intl4.intl;
    format = intl2.format;
    obj2 = { helpdeskArticle: obj3.getArticleURL(constants.LINKED_LOBBIES) };
    w8VWRT = intl4.t.w8VWRT;
    linkedLobby = undefined;
    obj3 = HelpdeskUtilsDefault;
    if (channel != null) {
      linkedLobby = tmp3.linkedLobby;
    }
    channelIconWithGuild = undefined;
    if (null != channel) {
      const tmpResult = utils_ChannelUtils;
      channelIconWithGuild = tmpResult.getChannelIconWithGuild(tmp3, guild);
    }
    return obj;
  }, items1);
  let obj = guild(9906);
  const coachmark = obj.useCoachmark(iconRef, memo);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildChannelHeader(channelId) {
  let connected;
  let first;
  let guildId;
  let pressable;
  let showCreateThread;
  let stateFromStores;
  let tmp10;
  let tmp14;
  let tmp7;
  let tmp9;
  let tmp = channelId;
  let tmp2 = guildId;
  let obj = channelId(guildId[16]);
  const cResult = obj.c(56);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  stateFromStores.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function h() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[19]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GatewayConnectionStore];
    class O {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[3] = items1;
    cResult[4] = O;
    tmp10 = O;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult4 = tmp(tmp2[19]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
  const tmp13 = screenIndex(tmp2[33])(channelId);
  View = tmp13;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    class O {
      constructor() {
        return connected.isConnected();
      }
    }
    cResult[5] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === showCreateThread) {
      let tmp18;
      let tmp20;
      if (tmp13 != null) {
        let parentChannelId = tmp13.parentChannelId;
      }
      class O {
        constructor() {
          return connected.isConnected();
        }
      }
      const tmpResult5 = tmp(tmp2[19]);
      const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, F);
      if (pressable) {
        pressable = null != stateFromStores;
      }
      if (pressable) {
        pressable = !showCreateThread;
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [GuildStore];
        class O {
          constructor() {
            return connected.isConnected();
          }
        }
        cResult[10] = items3;
        tmp18 = items3;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] !== guildId) {
        class H {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[11] = guildId;
        class O {
          constructor() {
            return connected.isConnected();
          }
        }
        cResult[12] = H;
        tmp20 = H;
      } else {
        class H {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmpResult6 = tmp(tmp2[19]);
      const stateFromStores3 = tmpResult6.useStateFromStores(tmp18, tmp20);
      if (cResult[13] === stateFromStores) {
        class H {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      let renderChannelIconResult = null;
      if (null != stateFromStores) {
        class H {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        if (!showCreateThread) {
          class H {
            constructor() {
              return GuildStore.getGuild(guildId);
            }
          }
          renderChannelIconResult = obj6.renderChannelIcon(stateFromStores, stateFromStores3);
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = stateFromStores3;
      cResult[15] = showCreateThread;
      cResult[16] = renderChannelIconResult;
    }
  }
  cResult[6] = stateFromStores;
  cResult[7] = showCreateThread;
  if (tmp13 != null) {
    class H {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  class F {
    constructor() {
      if (null != stateFromStores) {
        let channel;
        const tmp2 = showCreateThread;
        if (!tmp2) {
          if (null != stateFromStores) {
            if (null != stateFromStores.parent_id) {
              if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
                channel = ChannelStore.getChannel(tmp.parent_id);
              }
            }
          }
        }
        return channel;
      }
      parentChannelId = undefined;
      const getChannel = ChannelStore.getChannel;
      if (parentChannelId != null) {
        parentChannelId = parentChannelId.parentChannelId;
      }
      channel = getChannel(parentChannelId);
    }
  }
  cResult[8] = undefined;
  cResult[9] = F;
}) : (function GuildChannelHeader(channelId) {
  let connected;
  let hasSubtitle;
  let items5;
  let joined;
  let node;
  let obj7;
  let pressable;
  let showCreateThread;
  let showsPinotLabel;
  let tmp2Result12;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const guildId = channelId.guildId;
  ({ pressable, showCreateThread } = channelId);
  let stateFromStores;
  let isConjureChannelCandidate;
  let obj = stateFromStores;
  const isGuildMemberCountVisible = channelId.isGuildMemberCountVisible;
  const ref = stateFromStores.useRef(null);
  let tmp2 = channelId;
  const items = [ChannelStore];
  const obj2 = channelId(guildId[19]);
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GatewayConnectionStore];
  const obj3 = channelId(guildId[19]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => connected.isConnected());
  let parentChannelId = screenIndex(guildId[33])(channelId);
  const items2 = [ChannelStore];
  const obj4 = channelId(guildId[19]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let channel;
      const tmp2 = showCreateThread;
      if (!tmp2) {
        if (null != stateFromStores) {
          if (null != stateFromStores.parent_id) {
            if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
              channel = ChannelStore.getChannel(tmp.parent_id);
            }
          }
        }
      }
      return channel;
    }
    parentChannelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    channel = getChannel(parentChannelId);
  });
  if (pressable) {
    pressable = null != stateFromStores;
  }
  if (pressable) {
    pressable = !showCreateThread;
  }
  const items3 = [GuildStore];
  const tmp2Result = tmp2(guildId[19]);
  const stateFromStores3 = tmp2Result.useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  let renderChannelIconResult = null;
  if (null != stateFromStores) {
    renderChannelIconResult = null;
    if (!showCreateThread) {
      const tmp2Result7 = tmp2(guildId[21]);
      renderChannelIconResult = tmp2Result7.renderChannelIcon(stateFromStores, stateFromStores3);
    }
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp11 = type === constants.GUILD_APP;
  const tmp10 = constants;
  if (tmp11) {
    tmp11 = !showCreateThread;
  }
  if (tmp11) {
    tmp11 = "channel-secondary-view-chat" !== screenIndex;
  }
  let tmp13 = null;
  const useAppChannelApplication = tmp2(tmp3[34]).useAppChannelApplication;
  tmp2(guildId[34]);
  if (tmp11) {
    tmp13 = stateFromStores;
  }
  const appChannelApplication = useAppChannelApplication(tmp13);
  let type1;
  const useIsConjureChannelCandidate = tmp2(tmp3[35]).useIsConjureChannelCandidate;
  tmp2(guildId[35]);
  if (stateFromStores != null) {
    type1 = stateFromStores.type;
  }
  let tmp17 = null;
  if (type1 === tmp10.GUILD_APP) {
    tmp17 = null;
    if (!showCreateThread) {
      tmp17 = stateFromStores;
    }
  }
  isConjureChannelCandidate = useIsConjureChannelCandidate(tmp17, "GuildChannelHeader");
  let renderAppSubTitleResult;
  if (tmp11) {
    const tmp2Result10 = tmp2(guildId[21]);
    renderAppSubTitleResult = tmp2Result10.renderAppSubTitle(appChannelApplication, null != stateFromStores.application_id);
  }
  const obj5 = { channel: stateFromStores, parentChannel: stateFromStores2, guildId, disableArrow: !pressable, disableGuildMemberCount: !isGuildMemberCountVisible, showCreateThread, icon: renderChannelIconResult, appSubTitle: renderAppSubTitleResult };
  const items4 = [channelId, screenIndex, isConjureChannelCandidate];
  ({ node, hasSubtitle, showsPinotLabel } = closure_26(obj5));
  closure_26(obj5);
  const callback = obj.useCallback(() => {
    const tmp = isConjureChannelCandidate;
    if (tmp) {
      openConjureAppChannelSheetDefault(channelId);
    } else {
      const obj = ChannelHeader;
      const result = obj.navigateToChannelDetails(channelId, screenIndex, "guild-channel-header-title");
    }
  }, items4);
  let tmp24 = null;
  const tmp22 = closure_21;
  if (null != stateFromStores3) {
    let linkedLobby;
    if (stateFromStores != null) {
      linkedLobby = stateFromStores.linkedLobby;
    }
    tmp24 = null;
    if (null != linkedLobby) {
      const obj6 = { ref, children: closure_19(closure_27, obj7) };
      obj7 = { iconRef: ref, guild: stateFromStores3, channel: stateFromStores };
      tmp24 = closure_19(parentChannelId, obj6);
    }
  }
  const obj8 = { children: items5 };
  items5 = [tmp24, node];
  const tmp22Result = tmp22(closure_20, obj8);
  let pinotChannelLabelText = null;
  if (showsPinotLabel) {
    const tmp2Result11 = tmp2(guildId[26]);
    pinotChannelLabelText = tmp2Result11.getPinotChannelLabelText();
  }
  if (null != stateFromStores) {
    const obj9 = { channel: stateFromStores, guildId, showCreateThread, isConnected: stateFromStores1 };
    const items6 = [computeVisibleChannelName(obj9), pinotChannelLabelText, ];
    const intl = tmp2(tmp3[23]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[23]).t;
    items6[2] = string(isConjureChannelCandidate ? t.OBr7Cw : t.x87QCk);
    const found = items6.filter((item) => null != item);
    joined = found.join(", ");
  }
  if (pressable) {
    let num2 = 24;
    if (hasSubtitle) {
      num2 = 44;
    }
    const obj10 = { children: tmp2Result12.renderTitleWrapper(tmp22Result, callback, joined, num2) };
    tmp2Result12 = tmp2(guildId[21]);
    return closure_19(closure_20, obj10);
  } else {
    return tmp22Result;
  }
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx");

export default memoResult;
