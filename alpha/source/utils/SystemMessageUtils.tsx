// Module ID: 8435
// Function ID: 8436
// Name: SystemMessageUtils
// Dependencies: [32, 4952, 502, 4858, 4880, 4951, 1384, 1072, 1114, 11, 8436, 8440, 6036, 5647, 8441, 8443, 6432, 6058, 8444, 8445, 7688, 8399, 2]

// Module 8435 (SystemMessageUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl21 from "intl" /* 1114 */;
import useChannelName from "useChannelName" /* 5647 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6058 */;
import useMessageAuthor from "useMessageAuthor" /* 6432 */;
import GuildSpaceSystemMessageUtils from "GuildSpaceSystemMessageUtils" /* 8399 */;
import MarkupParser from "MarkupParser" /* 8436 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 8440 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8441 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 8443 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8444 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8445 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import MessageRecord from "MessageRecord" /* 4952 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let unpackModuleId;
function getSystemMessageUserJoinMobile(id) {
  const items = [intl21.t.Jm6e0x, intl21.t.MGRnRT, intl21.t.EXOEGh, intl21.t["5uCTFN"], intl21.t.rl45Qo, intl21.t.Bh9zpQ, intl21.t.RdEy1J, intl21.t.qcdp00, intl21.t.F7w2Ru, intl21.t.gSyOgK, intl21.t.uYgqv7, intl21.t["b/1SBX"], intl21.t.LhebZF];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
({ MessageEmbedTypes: c10, MessageTypes: unpackModuleId, NOOP: closure_12 } = Constants);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
let obj = {
  stringify(mentions, isForumPost) {
    let getMessageAuthor;
    let getMessageAuthor2;
    let obj13;
    let obj15;
    let obj24;
    let str;
    let tmp7Result;
    let tmp7Result3;
    mentions = mentions.mentions;
    if (mentions == null) {
      mentions = [];
    }
    const first = _slicedToArray(mentions, 1)[0];
    let tmp2 = null;
    if (null != first) {
      let tmp4;
      if (typeof first === "object") {
        let user = UserStore.getUser(first.id);
        if (user == null) {
          user = null;
        }
        tmp4 = user;
      } else {
        tmp4 = null;
        if (typeof first === "string") {
          let user1 = UserStore.getUser(first);
          if (user1 == null) {
            user1 = null;
          }
          tmp4 = user1;
        }
      }
      tmp2 = tmp4;
    }
    const channel_id = mentions.channel_id;
    const obj = NicknameUtilsDefault;
    const name = obj.getName(null, channel_id, mentions.author);
    const type = mentions.type;
    if (unpackModuleId.RECIPIENT_ADD === type) {
      if (null != tmp2) {
        const astToString23 = MarkupParser.astToString;
        MarkupParser;
        const intl20 = intl21.intl;
        const formatToParts4 = intl20.formatToParts;
        const obj3 = { username: name, usernameOnClick, otherUsername: tmp7Result.getName(null, channel_id, tmp2), otherUsernameOnClick: usernameOnClick };
        const prop = intl21.t["7/Xl0S"];
        tmp7Result = NicknameUtilsDefault;
        return astToString23(formatToParts4(prop, obj3));
      }
    } else if (unpackModuleId.RECIPIENT_REMOVE === type) {
      if (null != tmp2) {
        const author2 = mentions.author;
        if (null != author2) {
          let astToString22Result;
          if (author2.id !== tmp2.id) {
            const astToString22 = MarkupParser.astToString;
            MarkupParser;
            const intl19 = intl21.intl;
            const formatToParts3 = intl19.formatToParts;
            const obj4 = { username: name, usernameOnClick, otherUsername: tmp7Result3.getName(null, channel_id, tmp2), otherUsernameOnClick: usernameOnClick };
            const QtZ0RD = intl21.t.QtZ0RD;
            tmp7Result3 = NicknameUtilsDefault;
            astToString22Result = astToString22(formatToParts3(QtZ0RD, obj4));
          }
          return astToString22Result;
        }
        const astToString21 = MarkupParser.astToString;
        MarkupParser;
        const intl18 = intl21.intl;
        const obj5 = { username: name, usernameOnClick };
        astToString22Result = astToString21(intl18.formatToParts(intl21.t["Qn5+Lf"], obj5));
      }
    } else if (unpackModuleId.CALL === type) {
      const call = mentions.call;
      let astToString20Result;
      if (null != call) {
        const participants = call.participants;
        if (-1 === participants.indexOf(AuthenticationStore.getId())) {
          const astToString20 = MarkupParser.astToString;
          MarkupParser;
          const intl17 = intl21.intl;
          const obj6 = { username: name, usernameOnClick };
          astToString20Result = astToString20(intl17.formatToParts(intl21.t.DbgSA0, obj6));
        }
      }
      return astToString20Result;
    } else if (unpackModuleId.CHANNEL_NAME_CHANGE === type) {
      const astToString19 = MarkupParser.astToString;
      MarkupParser;
      const intl16 = intl21.intl;
      const formatToParts2 = intl16.formatToParts;
      const isForumPostResult = isForumPost.isForumPost();
      const t = intl21.t;
      const obj7 = { username: name, usernameOnClick, channelName: mentions.content };
      return astToString19(formatToParts2(isForumPostResult ? t["qa0e/n"] : t.XCPMEG, obj7));
    } else if (unpackModuleId.CHANNEL_ICON_CHANGE === type) {
      const astToString18 = MarkupParser.astToString;
      MarkupParser;
      const intl15 = intl21.intl;
      const obj8 = { username: name, usernameOnClick };
      return astToString18(intl15.formatToParts(intl21.t.wypJZ0, obj8));
    } else if (unpackModuleId.CHANNEL_PINNED_MESSAGE === type) {
      const astToString17 = MarkupParser.astToString;
      MarkupParser;
      const intl14 = intl21.intl;
      const obj9 = { username: name, usernameOnClick };
      return astToString17(intl14.formatToParts(intl21.t["/M60j0"], obj9));
    } else if (unpackModuleId.USER_JOIN === type) {
      let astToString14Result;
      const author = mentions.author;
      let bot;
      if (author != null) {
        bot = author.bot;
      }
      if (true === bot) {
        let astToString16Result;
        let name1 = null;
        if (null != mentions.actor) {
          const tmp7Result4 = NicknameUtilsDefault;
          name1 = tmp7Result4.getName(null, channel_id, mentions.actor);
        }
        if (null == name1) {
          const astToString16 = MarkupParser.astToString;
          MarkupParser;
          const intl13 = intl21.intl;
          const obj10 = { appName: name, appNameOnClick: usernameOnClick };
          astToString16Result = astToString16(intl13.formatToParts(intl21.t.EAkHd2, obj10));
        } else {
          const astToString15 = MarkupParser.astToString;
          MarkupParser;
          const intl12 = intl21.intl;
          const obj11 = { username: name1, usernameOnClick, appName: name, appNameOnClick: usernameOnClick };
          astToString16Result = astToString15(intl12.formatToParts(intl21.t["x6G/Rr"], obj11));
        }
        astToString14Result = astToString16Result;
      } else {
        const astToString14 = MarkupParser.astToString;
        MarkupParser;
        const intl11 = intl21.intl;
        const obj12 = { username: name, usernameOnClick };
        astToString14Result = astToString14(intl11.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj12));
      }
      return astToString14Result;
    } else if (unpackModuleId.GUILD_BOOST === type) {
      const astToString13 = MarkupParser.astToString;
      MarkupParser;
      const intl10 = intl21.intl;
      const obj14 = { username: name, usernameOnClick };
      return astToString13(intl10.formatToParts(intl21.t.ihxM9x, obj14));
    } else {
      if (unpackModuleId.GUILD_BOOST_TIER_1 !== type) {
        if (unpackModuleId.GUILD_BOOST_TIER_2 !== type) {
          if (unpackModuleId.GUILD_BOOST_TIER_3 !== type) {
            if (unpackModuleId.GUILD_INVITE_REMINDER === type) {
              const intl7 = intl21.intl;
              return intl7.string(intl21.t.gxyKvr);
            } else if (unpackModuleId.THREAD_STARTER_MESSAGE === type) {
              const intl6 = intl21.intl;
              const formatToPlainString = intl6.formatToPlainString;
              const obj18 = { username: name, threadName: obj24.computeChannelName(isForumPost, UserStore, RelationshipStore) };
              const prop1 = intl21.t["B8H+Cl"];
              obj24 = useChannelName;
              return formatToPlainString(prop1, obj18);
            } else if (unpackModuleId.ROLE_SUBSCRIPTION_PURCHASE === type) {
              let astToString10Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString10 = MarkupParser.astToString;
                MarkupParser;
                const obj20 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                const obj21 = GuildRoleSubscriptionSystemMessageUtils;
                astToString10Result = astToString10(obj21.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj20));
              }
              return astToString10Result;
            } else if (unpackModuleId.PURCHASE_NOTIFICATION === type) {
              let astToString9Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const purchase_notification = mentions.purchase_notification;
                let product_name;
                if (purchase_notification != null) {
                  const guild_product_purchase = purchase_notification.guild_product_purchase;
                  if (guild_product_purchase != null) {
                    product_name = guild_product_purchase.product_name;
                  }
                }
                astToString9Result = null;
                if (null != product_name) {
                  const astToString9 = MarkupParser.astToString;
                  MarkupParser;
                  const obj22 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                  const obj19 = GuildProductSystemMessageUtils;
                  astToString9Result = astToString9(obj19.getGuildProductPurchaseSystemMessageContentMobile(obj22));
                }
              }
              return astToString9Result;
            } else if (unpackModuleId.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
              if (mentions instanceof MessageRecord) {
                return null;
              } else {
                const getMessageAuthor3 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                const obj16 = MessageRecordUtils;
                const messageAuthor3 = getMessageAuthor3(obj16.createMessageRecord(mentions));
                const astToString8 = MarkupParser.astToString;
                MarkupParser;
                const obj23 = { application: mentions.application, username: messageAuthor3.nick };
                const obj17 = ApplicationSubscriptionSystemMessageUtils;
                return astToString8(obj17.getApplicationSubscriptionSystemMessageASTContent(obj23));
              }
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
              let astToString7Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString7 = MarkupParser.astToString;
                MarkupParser;
                const obj25 = { application: mentions.application, username: getMessageAuthor2(obj15.createMessageRecord(mentions)).nick };
                const getPrivateChannelIntegrationAddedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationAddedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor2 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj15 = MessageRecordUtils;
                astToString7Result = astToString7(getPrivateChannelIntegrationAddedSystemMessageASTContent(obj25));
              }
              return astToString7Result;
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
              let astToString6Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString6 = MarkupParser.astToString;
                MarkupParser;
                const obj26 = { application: mentions.application, username: getMessageAuthor(obj13.createMessageRecord(mentions)).nick };
                const getPrivateChannelIntegrationRemovedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj13 = MessageRecordUtils;
                astToString6Result = astToString6(getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj26));
              }
              return astToString6Result;
            } else if (unpackModuleId.AUTO_MODERATION_ACTION === type) {
              const embeds = mentions.embeds;
              let someResult;
              if (embeds != null) {
                someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
              }
              if (someResult) {
                let value;
                const embeds1 = mentions.embeds;
                const found = embeds1.find((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
                let found1;
                if (found != null) {
                  const fields = found.fields;
                  if (fields != null) {
                    found1 = fields.find((name) => {
                      const tmp = "name" in name && name.name === require("AutomodNotificationEmbedKeys").AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
                      return tmp;
                    });
                  }
                }
                if (null != found1) {
                  if ("value" in found1) {
                    value = found1.value;
                  }
                }
                const channel = ChannelStore.getChannel(channel_id);
                let astToString5Result = null;
                if (null != channel) {
                  const guild = GuildStore.getGuild(channel.getGuildId());
                  astToString5Result = null;
                  if (null != guild) {
                    if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                      const astToString5 = MarkupParser.astToString;
                      MarkupParser;
                      const intl5 = tmp36(1114).intl;
                      const obj27 = { guildName: guild.name };
                      astToString5Result = astToString5(intl5.formatToParts(tmp36(1114).t.wt3ZUM, obj27));
                    } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                      const astToString4 = MarkupParser.astToString;
                      MarkupParser;
                      const intl4 = tmp36(1114).intl;
                      const obj28 = { guildName: guild.name };
                      astToString5Result = astToString4(intl4.formatToParts(tmp36(1114).t.AkqI0g, obj28));
                    } else {
                      const astToString3 = MarkupParser.astToString;
                      MarkupParser;
                      const intl3 = tmp36(1114).intl;
                      const obj29 = { guildName: guild.name };
                      astToString5Result = astToString3(intl3.formatToParts(tmp36(1114).t["a+lJKl"], obj29));
                    }
                  }
                }
                return astToString5Result;
              } else {
                return mentions.content;
              }
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
              const content = mentions.content;
              const channel1 = ChannelStore.getChannel(channel_id);
              let tmp20 = null;
              if (null != channel1) {
                const guild1 = GuildStore.getGuild(channel1.getGuildId());
                let astToString2Result = null;
                if (null != guild1) {
                  const astToString2 = MarkupParser.astToString;
                  MarkupParser;
                  const intl2 = intl21.intl;
                  const formatToParts = intl2.formatToParts;
                  const obj30 = { username: name, guildName: guild1.name, time: str };
                  str = "";
                  const iOuWPk = intl21.t.iOuWPk;
                  const tmp24 = require;
                  if ("" !== content) {
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const date = new Date(content);
                    str = date.toLocaleString(tmp24(1114).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                  }
                  astToString2Result = astToString2(formatToParts(iOuWPk, obj30));
                }
                tmp20 = astToString2Result;
              }
              return tmp20;
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
              const channel2 = ChannelStore.getChannel(channel_id);
              let tmp13 = null;
              if (null != channel2) {
                const guild2 = GuildStore.getGuild(channel2.getGuildId());
                let astToStringResult = null;
                if (null != guild2) {
                  const astToString = MarkupParser.astToString;
                  MarkupParser;
                  const intl = intl21.intl;
                  const obj31 = { username: name, guildName: guild2.name };
                  astToStringResult = astToString(intl.formatToParts(intl21.t.axmbpm, obj31));
                }
                tmp13 = astToStringResult;
              }
              return tmp13;
            } else if (unpackModuleId.GUILD_SPACE_MESSAGE === type) {
              const obj2 = GuildSpaceSystemMessageUtils;
              return obj2.stringifyGuildSpaceSystemMessage(mentions, isForumPost);
            } else {
              return mentions.content;
            }
          }
        }
      }
      const channel3 = ChannelStore.getChannel(channel_id);
      if (null != channel3) {
        let astToString11Result;
        if (null != GuildStore.getGuild(channel3.getGuildId())) {
          const astToString11 = MarkupParser.astToString;
          MarkupParser;
          const intl8 = intl21.intl;
          const obj32 = { username: name, usernameOnClick };
          astToString11Result = astToString11(intl8.formatToParts(intl21.t.ihxM9x, obj32));
        }
        return astToString11Result;
      }
      const astToString12 = MarkupParser.astToString;
      MarkupParser;
      const intl9 = intl21.intl;
      const obj33 = { username: name, usernameOnClick };
      astToString11Result = astToString12(intl9.formatToParts(intl21.t.ihxM9x, obj33));
    }
  },
  getSystemMessageUserJoin(id) {
    const items = [intl21.t["0cuj7l"], intl21.t["MuW+CN"], intl21.t.osqpHX, intl21.t["5ToSh2"], intl21.t.JEB8ps, intl21.t.pkOV5T, intl21.t["kRb1J+"], intl21.t["EmKLY+"], intl21.t.rPtBnb, intl21.t["5B/ekS"], intl21.t.ESNC3Y, intl21.t.Iw6d8w, intl21.t["WecSZ/"]];
    const obj = SnowflakeUtilsDefault;
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    let closure_0;
    let obj2;
    _require = arg0;
    let formatResult = null;
    if (null != closure_13[arg0]) {
      const intl = require("intl").intl;
      const obj = { learnOnClick: obj2 };
      obj2 = {
        onClick() {
            return window.open(closure_13[closure_0]);
          }
      };
      formatResult = intl.format(require("intl").t.xw1Ij0, obj);
    }
    return formatResult;
  },
  getSystemMessageAppAdded(authorNick, actorNick) {
    let astToString2Result;
    if (null == actorNick) {
      const astToString2 = MarkupParser.astToString;
      MarkupParser;
      const intl2 = intl21.intl;
      const obj2 = { appName: authorNick, appNameOnClick };
      astToString2Result = astToString2(intl2.formatToParts(intl21.t.EAkHd2, obj2));
    } else {
      const astToString = MarkupParser.astToString;
      MarkupParser;
      const intl = intl21.intl;
      const obj = { username: actorNick, usernameOnClick: appNameOnClick, appName: authorNick, appNameOnClick };
      astToString2Result = astToString(intl.formatToParts(intl21.t["x6G/Rr"], obj));
    }
    return astToString2Result;
  }
};
const result = size.fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default obj;
