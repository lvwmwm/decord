// Module ID: 8291
// Function ID: 8292
// Name: SystemMessageUtils
// Dependencies: [32, 4891, 502, 4800, 4822, 4890, 1392, 1087, 1128, 11, 8292, 8296, 5947, 5565, 8297, 8299, 6323, 5970, 8300, 8301, 7574, 8302, 8303, 4868, 8304, 2]

// Module 8291 (SystemMessageUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl23 from "intl" /* 1128 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4868 */;
import useChannelName from "useChannelName" /* 5565 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5947 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5970 */;
import useMessageAuthor from "useMessageAuthor" /* 6323 */;
import MarkupParser from "MarkupParser" /* 8292 */;
import AutomodNotificationEmbedTypeKeys from "AutomodNotificationEmbedTypeKeys" /* 8296 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8297 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 8299 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8300 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8301 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8302 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8303 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 8304 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import MessageRecord from "MessageRecord" /* 4891 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildStore from "GuildStore" /* 4822 */;
import RelationshipStore from "RelationshipStore" /* 4890 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let unpackModuleId;
function getSystemMessageUserJoinMobile(id) {
  const items = [intl23.t.Jm6e0x, intl23.t.MGRnRT, intl23.t.EXOEGh, intl23.t["5uCTFN"], intl23.t.rl45Qo, intl23.t.Bh9zpQ, intl23.t.RdEy1J, intl23.t.qcdp00, intl23.t.F7w2Ru, intl23.t.gSyOgK, intl23.t.uYgqv7, intl23.t["b/1SBX"], intl23.t.LhebZF];
  const obj = SnowflakeUtilsDefault;
  return items[obj.extractTimestamp(obj, id) % items.length];
}
({ MessageEmbedTypes: c10, MessageTypes: unpackModuleId, NOOP: closure_12 } = Constants);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
let obj = {
  stringify(mentions, isForumPost) {
    let getMessageAuthor;
    let getMessageAuthor2;
    let obj16;
    let obj18;
    let obj27;
    let str;
    let str2;
    let tmp7Result;
    let tmp7Result6;
    let tmp7Result9;
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
        const intl22 = intl23.intl;
        const formatToParts4 = intl22.formatToParts;
        const obj2 = { username: name, usernameOnClick, otherUsername: tmp7Result.getName(null, channel_id, tmp2), otherUsernameOnClick: usernameOnClick };
        const prop = intl23.t["7/Xl0S"];
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
            const intl21 = intl23.intl;
            const formatToParts3 = intl21.formatToParts;
            const obj3 = { username: name, usernameOnClick, otherUsername: tmp7Result6.getName(null, channel_id, tmp2), otherUsernameOnClick: usernameOnClick };
            const QtZ0RD = intl23.t.QtZ0RD;
            tmp7Result6 = NicknameUtilsDefault;
            astToString22Result = astToString22(formatToParts3(QtZ0RD, obj3));
          }
          return astToString22Result;
        }
        const astToString21 = MarkupParser.astToString;
        MarkupParser;
        const intl20 = intl23.intl;
        const obj4 = { username: name, usernameOnClick };
        astToString22Result = astToString21(intl20.formatToParts(intl23.t["Qn5+Lf"], obj4));
      }
    } else if (unpackModuleId.CALL === type) {
      const call = mentions.call;
      let astToString20Result;
      if (null != call) {
        const participants = call.participants;
        if (-1 === participants.indexOf(AuthenticationStore.getId())) {
          const astToString20 = MarkupParser.astToString;
          MarkupParser;
          const intl19 = intl23.intl;
          const obj5 = { username: name, usernameOnClick };
          astToString20Result = astToString20(intl19.formatToParts(intl23.t.DbgSA0, obj5));
        }
      }
      return astToString20Result;
    } else if (unpackModuleId.CHANNEL_NAME_CHANGE === type) {
      const astToString19 = MarkupParser.astToString;
      MarkupParser;
      const intl18 = intl23.intl;
      const formatToParts2 = intl18.formatToParts;
      const isForumPostResult = isForumPost.isForumPost();
      const t = intl23.t;
      const obj6 = { username: name, usernameOnClick, channelName: mentions.content };
      return astToString19(formatToParts2(isForumPostResult ? t["qa0e/n"] : t.XCPMEG, obj6));
    } else if (unpackModuleId.CHANNEL_ICON_CHANGE === type) {
      const astToString18 = MarkupParser.astToString;
      MarkupParser;
      const intl17 = intl23.intl;
      const obj7 = { username: name, usernameOnClick };
      return astToString18(intl17.formatToParts(intl23.t.wypJZ0, obj7));
    } else if (unpackModuleId.CHANNEL_PINNED_MESSAGE === type) {
      const astToString17 = MarkupParser.astToString;
      MarkupParser;
      const intl16 = intl23.intl;
      const obj8 = { username: name, usernameOnClick };
      return astToString17(intl16.formatToParts(intl23.t["/M60j0"], obj8));
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
          const tmp7Result7 = NicknameUtilsDefault;
          name1 = tmp7Result7.getName(null, channel_id, mentions.actor);
        }
        if (null == name1) {
          const astToString16 = MarkupParser.astToString;
          MarkupParser;
          const intl15 = intl23.intl;
          const obj9 = { appName: name, appNameOnClick: usernameOnClick };
          astToString16Result = astToString16(intl15.formatToParts(intl23.t.EAkHd2, obj9));
        } else {
          const astToString15 = MarkupParser.astToString;
          MarkupParser;
          const intl14 = intl23.intl;
          const obj10 = { username: name1, usernameOnClick, appName: name, appNameOnClick: usernameOnClick };
          astToString16Result = astToString15(intl14.formatToParts(intl23.t["x6G/Rr"], obj10));
        }
        astToString14Result = astToString16Result;
      } else {
        const astToString14 = MarkupParser.astToString;
        MarkupParser;
        const intl13 = intl23.intl;
        const obj11 = { username: name, usernameOnClick };
        astToString14Result = astToString14(intl13.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj11));
      }
      return astToString14Result;
    } else if (unpackModuleId.GUILD_BOOST === type) {
      const astToString13 = MarkupParser.astToString;
      MarkupParser;
      const intl12 = intl23.intl;
      const obj12 = { username: name, usernameOnClick };
      return astToString13(intl12.formatToParts(intl23.t.ihxM9x, obj12));
    } else {
      if (unpackModuleId.GUILD_BOOST_TIER_1 !== type) {
        if (unpackModuleId.GUILD_BOOST_TIER_2 !== type) {
          if (unpackModuleId.GUILD_BOOST_TIER_3 !== type) {
            if (unpackModuleId.GUILD_INVITE_REMINDER === type) {
              const intl9 = intl23.intl;
              return intl9.string(intl23.t.gxyKvr);
            } else if (unpackModuleId.THREAD_STARTER_MESSAGE === type) {
              const intl8 = intl23.intl;
              const formatToPlainString3 = intl8.formatToPlainString;
              const obj13 = { username: name, threadName: obj27.computeChannelName(isForumPost, UserStore, RelationshipStore) };
              const prop1 = intl23.t["B8H+Cl"];
              obj27 = useChannelName;
              return formatToPlainString3(prop1, obj13);
            } else if (unpackModuleId.ROLE_SUBSCRIPTION_PURCHASE === type) {
              let astToString10Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString10 = MarkupParser.astToString;
                MarkupParser;
                const obj14 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                const obj24 = GuildRoleSubscriptionSystemMessageUtils;
                astToString10Result = astToString10(obj24.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj14));
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
                  const obj15 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                  const obj22 = GuildProductSystemMessageUtils;
                  astToString9Result = astToString9(obj22.getGuildProductPurchaseSystemMessageContentMobile(obj15));
                }
              }
              return astToString9Result;
            } else if (unpackModuleId.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
              if (mentions instanceof MessageRecord) {
                return null;
              } else {
                const getMessageAuthor3 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                const obj19 = MessageRecordUtils;
                const messageAuthor3 = getMessageAuthor3(obj19.createMessageRecord(mentions));
                const astToString8 = MarkupParser.astToString;
                MarkupParser;
                const obj17 = { application: mentions.application, username: messageAuthor3.nick };
                const obj20 = ApplicationSubscriptionSystemMessageUtils;
                return astToString8(obj20.getApplicationSubscriptionSystemMessageASTContent(obj17));
              }
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
              let astToString7Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString7 = MarkupParser.astToString;
                MarkupParser;
                const obj21 = { application: mentions.application, username: getMessageAuthor2(obj18.createMessageRecord(mentions)).nick };
                const getPrivateChannelIntegrationAddedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationAddedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor2 = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj18 = MessageRecordUtils;
                astToString7Result = astToString7(getPrivateChannelIntegrationAddedSystemMessageASTContent(obj21));
              }
              return astToString7Result;
            } else if (unpackModuleId.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
              let astToString6Result = null;
              if (!(mentions instanceof MessageRecord)) {
                const astToString6 = MarkupParser.astToString;
                MarkupParser;
                const obj23 = { application: mentions.application, username: getMessageAuthor(obj16.createMessageRecord(mentions)).nick };
                const getPrivateChannelIntegrationRemovedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
                PrivateChannelIntegrationSystemMessageUtils;
                getMessageAuthor = useMessageAuthor.getMessageAuthor;
                useMessageAuthor;
                obj16 = MessageRecordUtils;
                astToString6Result = astToString6(getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj23));
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
                      const intl7 = tmp58(1128).intl;
                      const obj25 = { guildName: guild.name };
                      astToString5Result = astToString5(intl7.formatToParts(tmp58(1128).t.wt3ZUM, obj25));
                    } else if (AutomodNotificationEmbedTypeKeys.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                      const astToString4 = MarkupParser.astToString;
                      MarkupParser;
                      const intl6 = tmp58(1128).intl;
                      const obj26 = { guildName: guild.name };
                      astToString5Result = astToString4(intl6.formatToParts(tmp58(1128).t.AkqI0g, obj26));
                    } else {
                      const astToString3 = MarkupParser.astToString;
                      MarkupParser;
                      const intl5 = tmp58(1128).intl;
                      const obj28 = { guildName: guild.name };
                      astToString5Result = astToString3(intl5.formatToParts(tmp58(1128).t["a+lJKl"], obj28));
                    }
                  }
                }
                return astToString5Result;
              } else {
                return mentions.content;
              }
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
              const content3 = mentions.content;
              const channel1 = ChannelStore.getChannel(channel_id);
              let tmp42 = null;
              if (null != channel1) {
                const guild1 = GuildStore.getGuild(channel1.getGuildId());
                let astToString2Result = null;
                if (null != guild1) {
                  const astToString2 = MarkupParser.astToString;
                  MarkupParser;
                  const intl4 = intl23.intl;
                  const formatToParts = intl4.formatToParts;
                  const obj29 = { username: name, guildName: guild1.name, time: str2 };
                  str2 = "";
                  const iOuWPk = intl23.t.iOuWPk;
                  const tmp46 = require;
                  if ("" !== content3) {
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const date = new Date(content3);
                    str2 = date.toLocaleString(tmp46(1128).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                  }
                  astToString2Result = astToString2(formatToParts(iOuWPk, obj29));
                }
                tmp42 = astToString2Result;
              }
              return tmp42;
            } else if (unpackModuleId.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
              const channel2 = ChannelStore.getChannel(channel_id);
              let tmp35 = null;
              if (null != channel2) {
                const guild2 = GuildStore.getGuild(channel2.getGuildId());
                let astToStringResult = null;
                if (null != guild2) {
                  const astToString = MarkupParser.astToString;
                  MarkupParser;
                  const intl3 = intl23.intl;
                  const obj30 = { username: name, guildName: guild2.name };
                  astToStringResult = astToString(intl3.formatToParts(intl23.t.axmbpm, obj30));
                }
                tmp35 = astToStringResult;
              }
              return tmp35;
            } else if (unpackModuleId.GUILD_SPACE_MESSAGE === type) {
              let music;
              const parseGuildSpaceMusicMessageData = PopularMusicSystemMessageTypes.parseGuildSpaceMusicMessageData;
              PopularMusicSystemMessageTypes;
              const tmp13 = MessageRecord;
              if (mentions instanceof MessageRecord) {
                const guildSpaceData = mentions.guildSpaceData;
                let music1;
                if (guildSpaceData != null) {
                  music1 = guildSpaceData.music;
                }
                music = music1;
              } else {
                const guild_space_data = mentions.guild_space_data;
                if (guild_space_data != null) {
                  music = guild_space_data.music;
                }
              }
              const result = parseGuildSpaceMusicMessageData(music);
              if (null != result) {
                let content2;
                const user2 = UserStore.getUser(result.userId);
                let name2 = null;
                const getMusicSystemMessage = PopularMusicSystemMessageCopy.getMusicSystemMessage;
                PopularMusicSystemMessageCopy;
                if (null != user2) {
                  const tmp7Result8 = NicknameUtilsDefault;
                  name2 = tmp7Result8.getName(isForumPost.getGuildId(), channel_id, user2);
                }
                const musicSystemMessage = getMusicSystemMessage(result, name2);
                if (null == musicSystemMessage) {
                  content2 = mentions.content;
                } else {
                  const intl2 = tmp11(1128).intl;
                  const formatToPlainString2 = intl2.formatToPlainString;
                  const message2 = musicSystemMessage.message;
                  const obj31 = {
                    usernameHook(arg0) {
                                    return arg0;
                                  }
                  };
                  const merged = Object.assign(musicSystemMessage.values);
                  content2 = formatToPlainString2(message2, obj31);
                }
                return content2;
              } else {
                let leaderboard;
                const parseGuildSpaceLeaderboardMessageData = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData;
                GuildLeaderboardTypes;
                if (mentions instanceof tmp13) {
                  const guildSpaceData2 = mentions.guildSpaceData;
                  let leaderboard1;
                  if (guildSpaceData2 != null) {
                    leaderboard1 = guildSpaceData2.leaderboard;
                  }
                  leaderboard = leaderboard1;
                } else {
                  const guild_space_data2 = mentions.guild_space_data;
                  if (guild_space_data2 != null) {
                    leaderboard = guild_space_data2.leaderboard;
                  }
                }
                const result1 = parseGuildSpaceLeaderboardMessageData(leaderboard);
                let userId;
                const resolveGuildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage;
                const getUser = UserStore.getUser;
                GuildLeaderboardSystemMessageCopy;
                const tmp19 = UserStore;
                if (result1 != null) {
                  userId = result1.userId;
                }
                let secondaryUserId;
                const user3 = getUser(userId);
                const getUser2 = tmp19.getUser;
                if (result1 != null) {
                  secondaryUserId = result1.secondaryUserId;
                }
                const guildSpaceLeaderboardMessage = resolveGuildSpaceLeaderboardMessage(result1, user3, getUser2(secondaryUserId));
                if (null == guildSpaceLeaderboardMessage) {
                  return mentions.content;
                } else {
                  let content;
                  const guildId = isForumPost.getGuildId();
                  const obj32 = { username: tmp7Result9.getName(guildId, channel_id, guildSpaceLeaderboardMessage.subject), previousUsername: str };
                  const getLeaderboardSystemMessage = GuildLeaderboardSystemMessageCopy.getLeaderboardSystemMessage;
                  const data = guildSpaceLeaderboardMessage.data;
                  GuildLeaderboardSystemMessageCopy;
                  str = "";
                  tmp7Result9 = NicknameUtilsDefault;
                  if (guildSpaceLeaderboardMessage.data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
                    const tmp7Result10 = NicknameUtilsDefault;
                    str = tmp7Result10.getName(guildId, channel_id, guildSpaceLeaderboardMessage.previousLeader);
                  }
                  const leaderboardSystemMessage = getLeaderboardSystemMessage(data, obj32);
                  if (null == leaderboardSystemMessage) {
                    content = mentions.content;
                  } else {
                    const intl = tmp11(1128).intl;
                    const formatToPlainString = intl.formatToPlainString;
                    const message = leaderboardSystemMessage.message;
                    const obj33 = {
                      usernameHook(arg0) {
                                        return arg0;
                                      },
                      previousUsernameHook(arg0) {
                                        return arg0;
                                      }
                    };
                    const merged1 = Object.assign(leaderboardSystemMessage.values);
                    content = formatToPlainString(message, obj33);
                  }
                  return content;
                }
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
          const intl10 = intl23.intl;
          const obj34 = { username: name, usernameOnClick };
          astToString11Result = astToString11(intl10.formatToParts(intl23.t.ihxM9x, obj34));
        }
        return astToString11Result;
      }
      const astToString12 = MarkupParser.astToString;
      MarkupParser;
      const intl11 = intl23.intl;
      const obj35 = { username: name, usernameOnClick };
      astToString11Result = astToString12(intl11.formatToParts(intl23.t.ihxM9x, obj35));
    }
  },
  getSystemMessageUserJoin(id) {
    const items = [intl23.t["0cuj7l"], intl23.t["MuW+CN"], intl23.t.osqpHX, intl23.t["5ToSh2"], intl23.t.JEB8ps, intl23.t.pkOV5T, intl23.t["kRb1J+"], intl23.t["EmKLY+"], intl23.t.rPtBnb, intl23.t["5B/ekS"], intl23.t.ESNC3Y, intl23.t.Iw6d8w, intl23.t["WecSZ/"]];
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
      const intl2 = intl23.intl;
      const obj2 = { appName: authorNick, appNameOnClick };
      astToString2Result = astToString2(intl2.formatToParts(intl23.t.EAkHd2, obj2));
    } else {
      const astToString = MarkupParser.astToString;
      MarkupParser;
      const intl = intl23.intl;
      const obj = { username: actorNick, usernameOnClick: appNameOnClick, appName: authorNick, appNameOnClick };
      astToString2Result = astToString(intl.formatToParts(intl23.t["x6G/Rr"], obj));
    }
    return astToString2Result;
  }
};
let result = size.fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default obj;
