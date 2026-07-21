// Module ID: 8329
// Function ID: 66001
// Name: isLinkTrusted
// Dependencies: []
// Exports: handleClick, isLinkTrusted

// Module 8329 (isLinkTrusted)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ ChannelTypes: closure_10, AnalyticEvents: closure_11, GuildFeatures: closure_12, MessageFlags: closure_13 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("utils/MaskedLinkUtils.tsx");

export const isLinkTrusted = function isLinkTrusted(arg0, arg1) {
  const channel = store.getChannel(channelId.getChannelId());
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.type === constants.DM;
  }
  if (tmp) {
    const recipientId = channel.getRecipientId();
    let str = "";
    if (null != recipientId) {
      str = recipientId;
    }
    tmp = !friend.isFriend(str);
  }
  let tmp5 = !tmp;
  if (!tmp) {
    tmp5 = arg0 === arg1;
  }
  return tmp5;
};
export const handleClick = function handleClick(href, preventDefault, arg2, contextKey) {
  let channelId;
  let messageId;
  let onCancel;
  let onClick;
  let shouldConfirm;
  let trusted;
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let callback;
  let importDefault;
  let dependencyMap;
  let blockedDomain;
  let store;
  let store2;
  let closure_6;
  let message;
  function handleConfirm() {
    if (tmp55) {
      let obj = channelId(tmp3[14]);
      obj = { messageId: message_id, channelId, guildId: tmp14, sourceChannelId: channel_id, sourceGuildId: tmp14 };
      const result = obj.trackAnnouncementMessageLinkClicked(obj);
    }
    if (null == _undefined) {
      const tmp14 = channelId(tmp3[16])(tmp3);
    } else {
      _undefined();
    }
  }
  ({ trusted, onClick, onConfirm: closure_0, onCancel, shouldConfirm, messageId, channelId } = href);
  let preventDefaultResult = channelId;
  importDefault = channelId;
  let obj = importDefault(dependencyMap[8]);
  const sanitizeUrlResult = obj.sanitizeUrl(href.href);
  if (null == sanitizeUrlResult) {
    preventDefaultResult = preventDefault;
    if (null != preventDefault) {
      preventDefaultResult = preventDefault;
      preventDefaultResult = preventDefault.preventDefault();
    }
    preventDefaultResult = importDefault;
    preventDefaultResult = dependencyMap;
    obj = {};
    preventDefaultResult = callback;
    const intl = callback(dependencyMap[10]).intl;
    obj.title = intl.string(callback(dependencyMap[10]).t.x87gan);
    const intl2 = callback(dependencyMap[10]).intl;
    obj = { url: href.href };
    obj.body = intl2.format(callback(dependencyMap[10]).t.9rqRwl, obj);
    obj.isDismissable = true;
    obj.contextKey = contextKey;
    preventDefaultResult = importDefault(dependencyMap[9]).show(obj);
  } else {
    preventDefaultResult = sanitizeUrlResult;
    dependencyMap = tmp3;
    preventDefaultResult = globalThis;
    const _decodeURI = decodeURI;
    preventDefaultResult = sanitizeUrlResult;
    preventDefaultResult = decodeURI(tmp3);
    while (true) {
      let tmp5 = null;
      blockedDomain = null;
      let flag = false;
      let flag2 = false;
      store = false;
      let tmp6 = messageId;
      let tmp7 = messageId;
      store2 = messageId;
      let tmp8 = channelId;
      let tmp9 = preventDefaultResult;
      closure_6 = preventDefaultResult;
      let tmp10 = null;
      message = null;
      if (null == messageId) {
        break;
      } else {
        preventDefaultResult = channelId;
        if (null == preventDefaultResult) {
          break;
        } else {
          preventDefaultResult = message;
          preventDefaultResult = channelId;
          preventDefaultResult = messageId;
          message = message.getMessage(preventDefaultResult, messageId);
          preventDefaultResult = store;
          preventDefaultResult = store.getBasicChannel(preventDefaultResult);
          let guild_id;
          if (null != preventDefaultResult) {
            let tmp11 = preventDefaultResult;
            guild_id = preventDefaultResult.guild_id;
          }
          let tmp13 = guild_id;
          let tmp14 = null;
          if (null != guild_id) {
            tmp14 = guild_id;
          }
          tmp5 = tmp14;
          blockedDomain = tmp14;
          let tmp15 = store2;
          let guild = store2.getGuild(tmp14);
          let tmp17 = message;
          let guild_id1;
          if (null != message) {
            let tmp19 = message;
            let messageReference = message.messageReference;
            let tmp20 = messageReference;
            if (null != messageReference) {
              guild_id1 = messageReference.guild_id;
            }
          }
          let tmp21 = null != guild_id1;
          let tmp22 = tmp21;
          if (tmp21) {
            let tmp23 = message;
            let webhookId;
            if (null != message) {
              let tmp25 = message;
              webhookId = message.webhookId;
            }
            tmp22 = null != webhookId;
          }
          let tmp26 = tmp22;
          if (tmp22) {
            let tmp27 = message;
            let hasFlagResult;
            if (null != message) {
              let tmp29 = message;
              let tmp30 = constants4;
              hasFlagResult = message.hasFlag(constants4.IS_CROSSPOST);
            }
            tmp26 = hasFlagResult;
          }
          let tmp31 = tmp26;
          if (tmp26) {
            let tmp32 = tmp5;
            tmp31 = null != tmp5;
          }
          let tmp33 = tmp31;
          if (tmp31) {
            let tmp34 = message;
            let guild_id2;
            if (null != message) {
              let tmp36 = message;
              let messageReference2 = message.messageReference;
              let tmp37 = messageReference2;
              if (null != messageReference2) {
                guild_id2 = messageReference2.guild_id;
              }
            }
            if (null != guild_id2) {
              let tmp39 = message;
              let message_id = message.messageReference.message_id;
              tmp7 = message_id;
              store2 = message_id;
              let channel_id = message.messageReference.channel_id;
              tmp9 = channel_id;
              closure_6 = channel_id;
              guild_id = message.messageReference.guild_id;
              tmp10 = guild_id;
              message = guild_id;
            }
            let tmp40 = preventDefaultResult;
            let type;
            if (null != preventDefaultResult) {
              type = preventDefaultResult.type;
            }
            let tmp42 = constants;
            let tmp43 = type === constants.GUILD_ANNOUNCEMENT;
            let tmp44 = tmp43;
            if (tmp43) {
              let tmp45 = guild;
              let hasItem;
              if (null != guild) {
                let features = guild.features;
                let tmp47 = constants3;
                hasItem = features.has(constants3.COMMUNITY);
              }
              let flag3 = true;
              tmp44 = true === hasItem;
            }
            let tmp48 = tmp44;
            let tmp49 = message;
            if (null != message) {
              let tmp51 = message;
              let tmp52 = constants4;
              let hasFlagResult1 = message.hasFlag(constants4.EPHEMERAL);
            }
            let flag4 = true;
            let tmp53 = null != message;
            let tmp54 = tmp53;
            if (tmp53) {
              tmp54 = true !== hasFlagResult1;
            }
            let tmp55 = tmp54;
            if (tmp54) {
              let tmp56 = tmp31;
              if (!tmp31) {
                tmp56 = tmp44;
              }
              tmp55 = tmp56;
            }
            flag2 = tmp55;
            store = tmp55;
            // break
          }
          let tmp38 = tmp5;
          tmp10 = tmp5;
          message = tmp5;
        }
      }
      let tmp57 = channelId;
      if (null != preventDefaultResult) {
        preventDefaultResult = store;
        preventDefaultResult = channelId;
        preventDefaultResult = store.getChannel(preventDefaultResult);
        let obj22 = preventDefaultResult;
        let guildId;
        preventDefaultResult = store2;
        if (null != preventDefaultResult) {
          let tmp58 = preventDefaultResult;
          guildId = obj22.getGuildId();
        }
        let guild1 = store2.getGuild(guildId);
        let tmp61 = preventDefaultResult;
        let tmp62 = null != obj22;
        let tmp63 = tmp62;
        if (tmp62) {
          let tmp64 = guild1;
          tmp63 = null != guild1;
        }
        let hasItem1 = tmp63;
        if (tmp63) {
          let tmp66 = guild1;
          let features2 = guild1.features;
          let tmp67 = constants3;
          hasItem1 = features2.has(constants3.DISCOVERABLE);
        }
        if (hasItem1) {
          let tmp68 = importDefault;
          let tmp69 = dependencyMap;
          let num = 11;
          let obj1 = importDefault(dependencyMap[11]);
          let tmp70 = constants2;
          obj1 = {};
          let tmp71 = callback;
          let num2 = 12;
          let obj3 = callback(dependencyMap[12]);
          let tmp72 = tmp4;
          obj1.url_domain = obj3.getHostname(tmp4);
          obj1.guild_id = guild1.id;
          obj1.channel_id = preventDefaultResult.id;
          let trackResult = obj1.track(constants2.URL_CLICKED, obj1);
        }
        let tmp74 = importDefault;
        let tmp75 = dependencyMap;
        let num3 = 13;
        let tmp76 = channelId;
        if (importDefault(dependencyMap[13])(preventDefaultResult)) {
          let tmp77 = importDefault;
          let tmp78 = dependencyMap;
          let num4 = 11;
          let obj4 = importDefault(dependencyMap[11]);
          let tmp79 = constants2;
          let obj2 = {};
          let str = "inline_link";
          obj2.cta_type = "inline_link";
          let tmp80 = tmp4;
          obj2.target = tmp4;
          let trackResult1 = obj4.track(constants2.CHANGE_LOG_CTA_CLICKED, obj2);
        }
      }
      let tmp82 = importDefault;
      let tmp83 = dependencyMap;
      let num5 = 14;
      let obj6 = importDefault(dependencyMap[14]);
      let tmp84 = tmp4;
      let trackLinkClickedResult = obj6.trackLinkClicked(tmp4);
      let tmp86 = onClick;
      if (null != onClick) {
        let tmp95 = onClick;
        let tmp96 = preventDefault;
      } else {
        let tmp87 = callback;
        let tmp88 = dependencyMap;
        let num6 = 15;
        let tmp89 = tmp4;
        obj3 = { skipExtensionCheck: undefined, analyticsLocations: items, messageId };
        let tmp90 = channelId;
        obj3.channelId = preventDefaultResult;
        let defaultResult = callback(dependencyMap[15]).default(tmp4, obj3);
        if (null != defaultResult) {
          let tmp93 = defaultResult;
          let tmp94 = preventDefault;
        }
      }
      let tmp97 = onCancel;
      let tmp98 = null != onCancel ? onCancel : () => {

      };
      preventDefaultResult = blockedDomain;
      preventDefaultResult = tmp4;
      let tmp99 = tmp98;
      if (null !== blockedDomain.isBlockedDomain(tmp4)) {
        preventDefaultResult = preventDefault;
        if (null != preventDefault) {
          preventDefaultResult = preventDefault;
          preventDefaultResult = preventDefault.preventDefault();
        }
        preventDefaultResult = importDefault;
        preventDefaultResult = dependencyMap;
        let num14 = 17;
        let obj17 = importDefault(dependencyMap[17]);
        preventDefaultResult = obj17.show(tmp4);
      } else {
        preventDefaultResult = trusted;
        let str4 = "function";
        preventDefaultResult = "function" === typeof trusted ? trusted() : trusted;
        if (!preventDefaultResult) {
          preventDefaultResult = callback;
          preventDefaultResult = dependencyMap;
          let num7 = 18;
          let TRUSTED_URLS = callback(dependencyMap[18]).TRUSTED_URLS;
          preventDefaultResult = tmp4;
          preventDefaultResult = TRUSTED_URLS.has(tmp4);
        }
        preventDefaultResult = callback;
        preventDefaultResult = dependencyMap;
        let num8 = 12;
        let obj9 = callback(dependencyMap[12]);
        preventDefaultResult = tmp4;
        preventDefaultResult = obj9.getProtocol(tmp4);
        let str2 = "http:";
        preventDefaultResult = "http:" === preventDefaultResult;
        if (!preventDefaultResult) {
          let str3 = "https:";
          preventDefaultResult = "https:" === preventDefaultResult;
        }
        preventDefaultResult = !preventDefaultResult;
        if (!preventDefaultResult) {
          if (preventDefaultResult) {
            preventDefaultResult = closure_6;
            preventDefaultResult = tmp4;
          }
          preventDefaultResult = preventDefault;
          if (null != preventDefault) {
            preventDefaultResult = preventDefault;
            preventDefaultResult = preventDefault.preventDefault();
          }
          if (preventDefaultResult) {
            preventDefaultResult = importDefault;
            preventDefaultResult = dependencyMap;
            let num12 = 20;
            let obj13 = importDefault(dependencyMap[20]);
            obj4 = {};
            preventDefaultResult = tmp4;
            obj4.url = tmp4;
            preventDefaultResult = callback;
            let num13 = 21;
            obj4.trustUrl = callback(dependencyMap[21]).trustProtocol;
            preventDefaultResult = handleConfirm;
            obj4.onConfirm = handleConfirm;
            obj4.onCancel = tmp98;
            let flag5 = true;
            obj4.isProtocol = true;
            preventDefaultResult = contextKey;
            obj4.contextKey = contextKey;
            preventDefaultResult = obj13.show(obj4);
          } else {
            preventDefaultResult = callback;
            preventDefaultResult = dependencyMap;
            let num9 = 19;
            let obj10 = callback(dependencyMap[19]);
            preventDefaultResult = tmp4;
            preventDefaultResult = obj10.punycodeLink(tmp4);
            preventDefaultResult = importDefault;
            preventDefaultResult = dependencyMap;
            let num10 = 20;
            preventDefaultResult = null != preventDefaultResult ? preventDefaultResult.displayTarget : tmp4;
            let obj11 = importDefault(dependencyMap[20]);
            let obj5 = { url: preventDefaultResult };
            preventDefaultResult = callback;
            let num11 = 21;
            obj5.trustUrl = callback(dependencyMap[21]).trustDomain;
            preventDefaultResult = handleConfirm;
            obj5.onConfirm = handleConfirm;
            preventDefaultResult = tmp98;
            obj5.onCancel = tmp99;
            obj5.isProtocol = false;
            preventDefaultResult = contextKey;
            obj5.contextKey = contextKey;
            preventDefaultResult = obj11.show(obj5);
          }
        } else if (!preventDefaultResult) {
          preventDefaultResult = closure_6;
          preventDefaultResult = tmp4;
        }
        preventDefaultResult = preventDefault;
        if (null == preventDefault) {
          preventDefaultResult = handleConfirm();
        } else {
          preventDefaultResult = shouldConfirm;
          if (flag2) {
            preventDefaultResult = importDefault;
            preventDefaultResult = dependencyMap;
            let obj15 = importDefault(dependencyMap[14]);
            obj6 = { messageId: tmp7, channelId, guildId: tmp5, sourceChannelId: tmp9, sourceGuildId: tmp10 };
            preventDefaultResult = obj15.trackAnnouncementMessageLinkClicked(obj6);
          }
        }
      }
    }
  }
};
