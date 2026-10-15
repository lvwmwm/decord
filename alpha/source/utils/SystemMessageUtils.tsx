// Module ID: 8221
// Function ID: 8222
// Name: SystemMessageUtils
// Dependencies: [32, 4817, 502, 2065, 2087, 4816, 1390, 1085, 1126, 11, 8222, 8226, 5469, 5481, 8227, 8229, 5843, 5494, 8230, 8231, 7454, 4794, 8232, 2]

// Module 8221 (SystemMessageUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl22 from "intl" /* 1126 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4794 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5469 */;
import useChannelName from "useChannelName" /* 5481 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5494 */;
import useMessageAuthor from "useMessageAuthor" /* 5843 */;
import MarkupParser from "MarkupParser" /* 8222 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 8226 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8227 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 8229 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8230 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8231 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 8232 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import MessageRecord from "MessageRecord" /* 4817 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4816 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let unpackModuleId;
function getSystemMessageUserJoinMobile(id) {
  const items = [intl22.t.Jm6e0x, intl22.t.MGRnRT, intl22.t.EXOEGh, intl22.t["5uCTFN"], intl22.t.rl45Qo, intl22.t.Bh9zpQ, intl22.t.RdEy1J, intl22.t.qcdp00, intl22.t.F7w2Ru, intl22.t.gSyOgK, intl22.t.uYgqv7, intl22.t["b/1SBX"], intl22.t.LhebZF];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
({ MessageEmbedTypes: c10, MessageTypes: unpackModuleId, NOOP: closure_12 } = Constants);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
let obj = {
  stringify(mentions, isForumPost) {
    let getMessageAuthor;
    let getMessageAuthor2;
    let obj14;
    let obj16;
    let obj25;
    let str;
    let str2;
    let tmp7Result;
    let tmp7Result5;
    let tmp7Result7;
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
        const intl21 = intl22.intl;
        const formatToParts4 = intl21.formatToParts;
        const obj2 = { username: name, usernameOnClick, otherUsername: tmp7Result.getName(null, channel_id, tmp2), otherUsernameOnClick: usernameOnClick };
        const prop = intl22.t["7/Xl0S"];
        tmp7Result = NicknameUtilsDefault;
        return astToString23(formatToParts4(prop, obj2));
      }
    } else if (unpackModuleId.RECIPIENT_REMOVE === type) {
      if (null != tmp2) {
        const author2 = mentions.author;
        if (null != author2) {
          let astToString22Result;
          if (author2.id !== tmp2.id) {
            const astToString22 = MarkupParser.astToString;
            MarkupParser;
            const intl20 = intl22.intl;
            const formatToParts3 = intl20.formatToParts;
            const obj3 = { username: name, usernameOnClick, otherUsername: tmp7Result5.getName(null, channel_id, tmp2), otherUsernameOnClick: usernameOnClick };
            const QtZ0RD = intl22.t.QtZ0RD;
            tmp7Result5 = NicknameUtilsDefault;
            astToString22Result = astToString22(formatToParts3(QtZ0RD, obj3));
          }
          return astToString22Result;
        }
        const astToString21 = MarkupParser.astToString;
        MarkupParser;
        const intl19 = intl22.intl;
        const obj4 = { username: name, usernameOnClick };
        astToString22Result = astToString21(intl19.formatToParts(intl22.t["Qn5+Lf"], obj4));
      }
    } else if (unpackModuleId.CALL === type) {
      const call = mentions.call;
      let astToString20Result;
      if (null != call) {
        const participants = call.participants;
        if (-1 === participants.indexOf(AuthenticationStore.getId())) {
          const astToString20 = MarkupParser.astToString;
          MarkupParser;
          const intl18 = intl22.intl;
          const obj5 = { username: name, usernameOnClick };
          astToString20Result = astToString20(intl18.formatToParts(intl22.t.DbgSA0, obj5));
        }
      }
      return astToString20Result;
    } else if (unpackModuleId.CHANNEL_NAME_CHANGE === type) {
      const astToString19 = MarkupParser.astToString;
      MarkupParser;
      const intl17 = intl22.intl;
      const formatToParts2 = intl17.formatToParts;
      const isForumPostResult = isForumPost.isForumPost();
      const t = intl22.t;
      const obj6 = { username: name, usernameOnClick, channelName: mentions.content };
      return astToString19(formatToParts2(isForumPostResult ? t["qa0e/n"] : t.XCPMEG, obj6));
    } else if (unpackModuleId.CHANNEL_ICON_CHANGE === type) {
      const astToString18 = MarkupParser.astToString;
      MarkupParser;
      const intl16 = intl22.intl;
      const obj7 = { username: name, usernameOnClick };
      return astToString18(intl16.formatToParts(intl22.t.wypJZ0, obj7));
    } else if (unpackModuleId.CHANNEL_PINNED_MESSAGE === type) {
      const astToString17 = MarkupParser.astToString;
      MarkupParser;
      const intl15 = intl22.intl;
      const obj8 = { username: name, usernameOnClick };
      return astToString17(intl15.formatToParts(intl22.t["/M60j0"], obj8));
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
          const tmp7Result6 = NicknameUtilsDefault;
          name1 = tmp7Result6.getName(null, channel_id, mentions.actor);
        }
        if (null == name1) {
          const astToString16 = MarkupParser.astToString;
          MarkupParser;
          const intl14 = intl22.intl;
          const obj9 = { appName: name, appNameOnClick: usernameOnClick };
          astToString16Result = astToString16(intl14.formatToParts(intl22.t.EAkHd2, obj9));
        } else {
          const astToString15 = MarkupParser.astToString;
          MarkupParser;
          const intl13 = intl22.intl;
          const obj10 = { username: name1, usernameOnClick, appName: name, appNameOnClick: usernameOnClick };
          astToString16Result = astToString15(intl13.formatToParts(intl22.t["x6G/Rr"], obj10));
        }
        astToString14Result = astToString16Result;
      } else {
        const astToString14 = MarkupParser.astToString;
        MarkupParser;
        const intl12 = intl22.intl;
        const obj11 = { username: name, usernameOnClick };
        astToString14Result = astToString14(intl12.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj11));
      }
      return astToString14Result;
    } else if (unpackModuleId.GUILD_BOOST === type) {
      const astToString13 = MarkupParser.astToString;
      MarkupParser;
      const intl11 = intl22.intl;
      const obj12 = { username: name, usernameOnClick };
      return astToString13(intl11.formatToParts(intl22.t.ihxM9x, obj12));
    } else {
      if (unpackModuleId.GUILD_BOOST_TIER_1 !== type) {
        if (unpackModuleId.GUILD_BOOST_TIER_2 !== type) {
          if (unpackModuleId.GUILD_BOOST_TIER_3 !== type) {
            if (unpackModuleId.GUILD_INVITE_REMINDER === type) {
              const intl8 = intl22.intl;
              return intl8.string(intl22.t.gxyKvr);
            } else if (unpackModuleId.THREAD_STARTER_MESSAGE === type) {
              const intl7 = intl22.intl;
              const formatToPlainString2 = intl7.formatToPlainString;
              const obj13 = { username: name, threadName: obj25.computeChannelName(isForumPost, UserStore, RelationshipStore) };
              const prop1 = intl22.t["B8H+Cl"];
              obj25 = useChannelName;
              return formatToPlainString2(prop1, obj13);
            } else if (unpackModuleId.ROLE_SUBSCRIPTION_PURCHASE === type) {
              let astToString10Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString10 = MarkupParser.astToString;
                MarkupParser;
                const obj15 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                const obj22 = GuildRoleSubscriptionSystemMessageUtils;
                astToString10Result = astToString10(obj22.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj15));
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
                  const obj19 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                  const obj20 = GuildProductSystemMessageUtils;
                  astToString9Result = astToString9(obj20.getGuildProductPurchaseSystemMessageContentMobile(obj19));
                }
              }
              return astToString9Result;
            } else if (unpackModuleId.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
              if (mentions instanceof MessageRecord) {
                return null;
              } else {
                const getMessageAuthor3 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                const obj17 = MessageRecordUtils;
                const messageAuthor3 = getMessageAuthor3(obj17.createMessageRecord(mentions));
                const astToString8 = MarkupParser.astToString;
                MarkupParser;
                const obj21 = { application: mentions.application, username: messageAuthor3.nick };
                const obj18 = ApplicationSubscriptionSystemMessageUtils;
                return astToString8(obj18.getApplicationSubscriptionSystemMessageASTContent(obj21));
              }
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
              let astToString7Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString7 = MarkupParser.astToString;
                MarkupParser;
                const obj23 = { application: mentions.application, username: getMessageAuthor2(obj16.createMessageRecord(mentions)).nick };
                const getPrivateChannelIntegrationAddedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationAddedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor2 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj16 = MessageRecordUtils;
                astToString7Result = astToString7(getPrivateChannelIntegrationAddedSystemMessageASTContent(obj23));
              }
              return astToString7Result;
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
              let astToString6Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString6 = MarkupParser.astToString;
                MarkupParser;
                const obj24 = { application: mentions.application, username: getMessageAuthor(obj14.createMessageRecord(mentions)).nick };
                const getPrivateChannelIntegrationRemovedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj14 = MessageRecordUtils;
                astToString6Result = astToString6(getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj24));
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
                      const intl6 = tmp49(1126).intl;
                      const obj26 = { guildName: guild.name };
                      astToString5Result = astToString5(intl6.formatToParts(tmp49(1126).t.wt3ZUM, obj26));
                    } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                      const astToString4 = MarkupParser.astToString;
                      MarkupParser;
                      const intl5 = tmp49(1126).intl;
                      const obj27 = { guildName: guild.name };
                      astToString5Result = astToString4(intl5.formatToParts(tmp49(1126).t.AkqI0g, obj27));
                    } else {
                      const astToString3 = MarkupParser.astToString;
                      MarkupParser;
                      const intl4 = tmp49(1126).intl;
                      const obj28 = { guildName: guild.name };
                      astToString5Result = astToString3(intl4.formatToParts(tmp49(1126).t["a+lJKl"], obj28));
                    }
                  }
                }
                return astToString5Result;
              } else {
                return mentions.content;
              }
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
              const content2 = mentions.content;
              const channel1 = ChannelStore.getChannel(channel_id);
              let tmp33 = null;
              if (null != channel1) {
                const guild1 = GuildStore.getGuild(channel1.getGuildId());
                let astToString2Result = null;
                if (null != guild1) {
                  const astToString2 = MarkupParser.astToString;
                  MarkupParser;
                  const intl3 = intl22.intl;
                  const formatToParts = intl3.formatToParts;
                  const obj29 = { username: name, guildName: guild1.name, time: str2 };
                  str2 = "";
                  const iOuWPk = intl22.t.iOuWPk;
                  const tmp37 = require;
                  if ("" !== content2) {
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const date = new Date(content2);
                    str2 = date.toLocaleString(tmp37(1126).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                  }
                  astToString2Result = astToString2(formatToParts(iOuWPk, obj29));
                }
                tmp33 = astToString2Result;
              }
              return tmp33;
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
              const channel2 = ChannelStore.getChannel(channel_id);
              let tmp26 = null;
              if (null != channel2) {
                const guild2 = GuildStore.getGuild(channel2.getGuildId());
                let astToStringResult = null;
                if (null != guild2) {
                  const astToString = MarkupParser.astToString;
                  MarkupParser;
                  const intl2 = intl22.intl;
                  const obj30 = { username: name, guildName: guild2.name };
                  astToStringResult = astToString(intl2.formatToParts(intl22.t.axmbpm, obj30));
                }
                tmp26 = astToStringResult;
              }
              return tmp26;
            } else if (unpackModuleId.GUILD_SPACE_MESSAGE === type) {
              let leaderboard;
              const parseGuildSpaceLeaderboardMessageData = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData;
              GuildLeaderboardTypes;
              if (mentions instanceof MessageRecord) {
                const guildSpaceData = mentions.guildSpaceData;
                let leaderboard1;
                if (guildSpaceData != null) {
                  leaderboard1 = guildSpaceData.leaderboard;
                }
                leaderboard = leaderboard1;
              } else {
                const guild_space_data = mentions.guild_space_data;
                if (guild_space_data != null) {
                  leaderboard = guild_space_data.leaderboard;
                }
              }
              const result = parseGuildSpaceLeaderboardMessageData(leaderboard);
              let userId;
              const resolveGuildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage;
              const getUser = UserStore.getUser;
              GuildLeaderboardSystemMessageCopy;
              const tmp17 = UserStore;
              if (result != null) {
                userId = result.userId;
              }
              let secondaryUserId;
              const user2 = getUser(userId);
              const getUser2 = tmp17.getUser;
              if (result != null) {
                secondaryUserId = result.secondaryUserId;
              }
              const guildSpaceLeaderboardMessage = resolveGuildSpaceLeaderboardMessage(result, user2, getUser2(secondaryUserId));
              if (null == guildSpaceLeaderboardMessage) {
                return mentions.content;
              } else {
                let content;
                const guildId = isForumPost.getGuildId();
                const obj31 = { username: tmp7Result7.getName(guildId, channel_id, guildSpaceLeaderboardMessage.subject), previousUsername: str };
                const getLeaderboardSystemMessage = GuildLeaderboardSystemMessageCopy.getLeaderboardSystemMessage;
                const data = guildSpaceLeaderboardMessage.data;
                GuildLeaderboardSystemMessageCopy;
                str = "";
                tmp7Result7 = NicknameUtilsDefault;
                if (null != guildSpaceLeaderboardMessage.previousLeader) {
                  const tmp7Result8 = NicknameUtilsDefault;
                  str = tmp7Result8.getName(guildId, channel_id, guildSpaceLeaderboardMessage.previousLeader);
                }
                const leaderboardSystemMessage = getLeaderboardSystemMessage(data, obj31);
                if (null == leaderboardSystemMessage) {
                  content = mentions.content;
                } else {
                  const intl = tmp11(1126).intl;
                  const formatToPlainString = intl.formatToPlainString;
                  const message = leaderboardSystemMessage.message;
                  const obj32 = {
                    usernameHook(arg0) {
                                    return arg0;
                                  },
                    previousUsernameHook(arg0) {
                                    return arg0;
                                  }
                  };
                  const merged = Object.assign(leaderboardSystemMessage.values);
                  content = formatToPlainString(message, obj32);
                }
                return content;
              }
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
          const intl9 = intl22.intl;
          const obj33 = { username: name, usernameOnClick };
          astToString11Result = astToString11(intl9.formatToParts(intl22.t.ihxM9x, obj33));
        }
        return astToString11Result;
      }
      const astToString12 = MarkupParser.astToString;
      MarkupParser;
      const intl10 = intl22.intl;
      const obj34 = { username: name, usernameOnClick };
      astToString11Result = astToString12(intl10.formatToParts(intl22.t.ihxM9x, obj34));
    }
  },
  getSystemMessageUserJoin(id) {
    const items = [intl22.t["0cuj7l"], intl22.t["MuW+CN"], intl22.t.osqpHX, intl22.t["5ToSh2"], intl22.t.JEB8ps, intl22.t.pkOV5T, intl22.t["kRb1J+"], intl22.t["EmKLY+"], intl22.t.rPtBnb, intl22.t["5B/ekS"], intl22.t.ESNC3Y, intl22.t.Iw6d8w, intl22.t["WecSZ/"]];
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
      const intl2 = intl22.intl;
      const obj2 = { appName: authorNick, appNameOnClick };
      astToString2Result = astToString2(intl2.formatToParts(intl22.t.EAkHd2, obj2));
    } else {
      const astToString = MarkupParser.astToString;
      MarkupParser;
      const intl = intl22.intl;
      const obj = { username: actorNick, usernameOnClick: appNameOnClick, appName: authorNick, appNameOnClick };
      astToString2Result = astToString(intl.formatToParts(intl22.t["x6G/Rr"], obj));
    }
    return astToString2Result;
  }
};
let result = size.fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default obj;
