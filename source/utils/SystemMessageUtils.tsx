// Module ID: 7673
// Function ID: 61310
// Name: getSystemMessageUserJoinMobile
// Dependencies: [57, 3768, 1194, 1348, 1838, 3767, 1849, 653, 1212, 21, 7674, 7678, 4319, 4320, 7679, 7681, 4360, 4351, 7682, 7683, 6748, 2]

// Module 7673 (getSystemMessageUserJoinMobile)
import _slicedToArray from "_slicedToArray";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function getSystemMessageUserJoinMobile(id) {
  const items = [require(1212) /* getSystemLocale */.t.Jm6e0x, require(1212) /* getSystemLocale */.t.MGRnRT, require(1212) /* getSystemLocale */.t.EXOEGh, require(1212) /* getSystemLocale */.t["5uCTFN"], require(1212) /* getSystemLocale */.t.rl45Qo, require(1212) /* getSystemLocale */.t.Bh9zpQ, require(1212) /* getSystemLocale */.t.RdEy1J, require(1212) /* getSystemLocale */.t.qcdp00, require(1212) /* getSystemLocale */.t.F7w2Ru, require(1212) /* getSystemLocale */.t.gSyOgK, require(1212) /* getSystemLocale */.t.uYgqv7, require(1212) /* getSystemLocale */.t["b/1SBX"], require(1212) /* getSystemLocale */.t.LhebZF];
  const obj = importDefault(21);
  return items[obj.extractTimestamp(obj, id) % items.length];
}
function getSystemMessageUserPremiumGuildSubscription(name) {
  let obj = require(7674) /* reactParserFor */;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: name, usernameOnClick: closure_12 };
  return obj.astToString(intl.formatToParts(require(1212) /* getSystemLocale */.t.ihxM9x, obj));
}
function getSystemMessageUserPremiumGuildSubscriptionAchievedTier(name, channel_id) {
  const channel = store.getChannel(channel_id);
  if (null != channel) {
    if (null != store2.getGuild(channel.getGuildId())) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj = { username: name, usernameOnClick: closure_12 };
      let astToStringResult = require(7674) /* reactParserFor */.astToString(intl.formatToParts(require(1212) /* getSystemLocale */.t.ihxM9x, obj));
      const obj2 = require(7674) /* reactParserFor */;
    }
    return astToStringResult;
  }
  astToStringResult = getSystemMessageUserPremiumGuildSubscription(name);
}
({ MessageEmbedTypes: closure_10, MessageTypes: closure_11, NOOP: closure_12 } = ME);
let closure_13 = { "234395307759108106": "https://groovy.bot/commands", "365975655608745985": "https://www.pokecord.com/getting-started", "512412940897484800": "http://jameslantz.net/smilebot" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default {
  stringify(mentions, isForumPost) {
    mentions = mentions.mentions;
    if (null == mentions) {
      mentions = [];
    }
    let first = callback(mentions, 1)[0];
    if (null == first) {
      const channel_id = mentions.channel_id;
      let obj = importDefault(4319);
      const name = obj.getName(null, channel_id, mentions.author);
      const type = mentions.type;
      if (closure_11.RECIPIENT_ADD === type) {
        if (null != null) {
          first = require;
          first = dependencyMap;
          const intl15 = require(1212) /* getSystemLocale */.intl;
          obj = { username: name };
          first = closure_12;
          obj.usernameOnClick = closure_12;
          first = importDefault;
          const obj54 = require(7674) /* reactParserFor */;
          obj.otherUsername = importDefault(4319).getName(null, channel_id, null);
          first = closure_12;
          obj.otherUsernameOnClick = closure_12;
          return obj54.astToString(intl15.formatToParts(require(1212) /* getSystemLocale */.t["7/Xl0S"], obj));
        }
      } else {
        first = closure_11;
        if (closure_11.RECIPIENT_REMOVE === type) {
          if (null != null) {
            const author = mentions.author;
            if (null != author) {
              if (author.id !== null.id) {
                first = require;
                first = dependencyMap;
                const intl14 = require(1212) /* getSystemLocale */.intl;
                obj = { username: name };
                first = closure_12;
                obj.usernameOnClick = closure_12;
                first = importDefault;
                const obj51 = require(7674) /* reactParserFor */;
                obj.otherUsername = importDefault(4319).getName(null, channel_id, null);
                first = closure_12;
                obj.otherUsernameOnClick = closure_12;
                first = obj51.astToString(intl14.formatToParts(require(1212) /* getSystemLocale */.t.QtZ0RD, obj));
                const obj53 = importDefault(4319);
              }
              return first;
            }
            const intl13 = require(1212) /* getSystemLocale */.intl;
            const obj1 = { username: name };
            first = closure_12;
            obj1.usernameOnClick = closure_12;
            first = require(7674) /* reactParserFor */.astToString(intl13.formatToParts(require(1212) /* getSystemLocale */.t["Qn5+Lf"], obj1));
            const obj49 = require(7674) /* reactParserFor */;
          }
        } else {
          first = closure_11;
          if (closure_11.CALL === type) {
            const call = mentions.call;
            let astToStringResult;
            if (null != call) {
              const participants = call.participants;
              if (-1 === participants.indexOf(id.getId())) {
                const intl12 = require(1212) /* getSystemLocale */.intl;
                let obj2 = { username: name, usernameOnClick: closure_12 };
                astToStringResult = require(7674) /* reactParserFor */.astToString(intl12.formatToParts(require(1212) /* getSystemLocale */.t.DbgSA0, obj2));
                const obj47 = require(7674) /* reactParserFor */;
              }
            }
            return astToStringResult;
          } else {
            first = closure_11;
            if (closure_11.CHANNEL_NAME_CHANGE === type) {
              const intl11 = require(1212) /* getSystemLocale */.intl;
              const obj45 = require(7674) /* reactParserFor */;
              const t = require(1212) /* getSystemLocale */.t;
              const obj3 = { username: name, usernameOnClick: closure_12, channelName: mentions.content };
              return obj45.astToString(intl11.formatToParts(isForumPost.isForumPost() ? t["qa0e/n"] : t.XCPMEG, obj3));
            } else {
              first = closure_11;
              if (closure_11.CHANNEL_ICON_CHANGE === type) {
                const intl10 = require(1212) /* getSystemLocale */.intl;
                const obj4 = { username: name, usernameOnClick: closure_12 };
                return require(7674) /* reactParserFor */.astToString(intl10.formatToParts(require(1212) /* getSystemLocale */.t.wypJZ0, obj4));
              } else {
                first = closure_11;
                if (closure_11.CHANNEL_PINNED_MESSAGE === type) {
                  const intl9 = require(1212) /* getSystemLocale */.intl;
                  let obj5 = { username: name, usernameOnClick: closure_12 };
                  return require(7674) /* reactParserFor */.astToString(intl9.formatToParts(require(1212) /* getSystemLocale */.t["/M60j0"], obj5));
                } else {
                  first = closure_11;
                  if (closure_11.USER_JOIN === type) {
                    const intl8 = require(1212) /* getSystemLocale */.intl;
                    const obj6 = { username: name, usernameOnClick: closure_12 };
                    return require(7674) /* reactParserFor */.astToString(intl8.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj6));
                  } else {
                    first = closure_11;
                    if (closure_11.GUILD_BOOST === type) {
                      return getSystemMessageUserPremiumGuildSubscription(name);
                    } else {
                      first = closure_11;
                      if (closure_11.GUILD_BOOST_TIER_1 !== type) {
                        first = closure_11;
                        if (closure_11.GUILD_BOOST_TIER_2 !== type) {
                          first = closure_11;
                          if (closure_11.GUILD_BOOST_TIER_3 !== type) {
                            first = closure_11;
                            if (closure_11.GUILD_INVITE_REMINDER === type) {
                              const intl7 = require(1212) /* getSystemLocale */.intl;
                              return intl7.string(require(1212) /* getSystemLocale */.t.gxyKvr);
                            } else {
                              first = closure_11;
                              if (closure_11.THREAD_STARTER_MESSAGE === type) {
                                const intl6 = require(1212) /* getSystemLocale */.intl;
                                const obj7 = { username: name, threadName: require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(isForumPost, authStore, closure_8) };
                                return intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["B8H+Cl"], obj7);
                              } else {
                                first = closure_11;
                                if (closure_11.ROLE_SUBSCRIPTION_PURCHASE === type) {
                                  let astToStringResult1 = null;
                                  if (!(mentions instanceof _callSuper)) {
                                    const obj34 = require(7674) /* reactParserFor */;
                                    const obj8 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                                    astToStringResult1 = obj34.astToString(require(7679) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj8));
                                    const obj35 = require(7679) /* identityHook */;
                                  }
                                  return astToStringResult1;
                                } else {
                                  first = closure_11;
                                  if (closure_11.PURCHASE_NOTIFICATION === type) {
                                    let astToStringResult2 = null;
                                    if (!(mentions instanceof _callSuper)) {
                                      const purchase_notification = mentions.purchase_notification;
                                      let product_name;
                                      if (null != purchase_notification) {
                                        const guild_product_purchase = purchase_notification.guild_product_purchase;
                                        if (null != guild_product_purchase) {
                                          product_name = guild_product_purchase.product_name;
                                        }
                                      }
                                      astToStringResult2 = null;
                                      if (null != product_name) {
                                        const obj31 = require(7674) /* reactParserFor */;
                                        let obj9 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                                        astToStringResult2 = obj31.astToString(require(7681) /* getGuildProductPurchaseSystemMessageContentMobile */.getGuildProductPurchaseSystemMessageContentMobile(obj9));
                                        const obj32 = require(7681) /* getGuildProductPurchaseSystemMessageContentMobile */;
                                      }
                                    }
                                    return astToStringResult2;
                                  } else {
                                    first = closure_11;
                                    if (closure_11.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                                      if (mentions instanceof _callSuper) {
                                        return null;
                                      } else {
                                        const obj26 = require(4360) /* useNullableMessageAuthor */;
                                        const messageAuthor = obj26.getMessageAuthor(require(4351) /* createMinimalMessageRecord */.createMessageRecord(mentions));
                                        const obj27 = require(4351) /* createMinimalMessageRecord */;
                                        const obj28 = require(7674) /* reactParserFor */;
                                        const obj10 = { application: mentions.application, username: messageAuthor.nick };
                                        return obj28.astToString(require(7682) /* getApplicationSubscriptionSystemMessageASTContent */.getApplicationSubscriptionSystemMessageASTContent(obj10));
                                      }
                                    } else {
                                      first = closure_11;
                                      if (closure_11.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                                        let astToStringResult3 = null;
                                        if (!(mentions instanceof _callSuper)) {
                                          const obj21 = require(7674) /* reactParserFor */;
                                          let obj11 = { application: mentions.application };
                                          const obj22 = require(7683) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
                                          const obj24 = require(4360) /* useNullableMessageAuthor */;
                                          obj11.username = obj24.getMessageAuthor(require(4351) /* createMinimalMessageRecord */.createMessageRecord(mentions)).nick;
                                          astToStringResult3 = obj21.astToString(obj22.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj11));
                                          const obj25 = require(4351) /* createMinimalMessageRecord */;
                                        }
                                        return astToStringResult3;
                                      } else {
                                        first = closure_11;
                                        if (closure_11.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                                          let astToStringResult4 = null;
                                          if (!(mentions instanceof _callSuper)) {
                                            let obj15 = require(7674) /* reactParserFor */;
                                            let obj16 = require(7683) /* getPrivateChannelIntegrationAddedSystemMessageContent */;
                                            const obj12 = { application: mentions.application };
                                            const obj19 = require(4360) /* useNullableMessageAuthor */;
                                            obj12.username = obj19.getMessageAuthor(require(4351) /* createMinimalMessageRecord */.createMessageRecord(mentions)).nick;
                                            astToStringResult4 = obj15.astToString(obj16.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj12));
                                            const obj20 = require(4351) /* createMinimalMessageRecord */;
                                          }
                                          return astToStringResult4;
                                        } else {
                                          first = closure_11;
                                          if (closure_11.AUTO_MODERATION_ACTION === type) {
                                            let embeds = mentions.embeds;
                                            if (null != embeds) {
                                              if (embeds.some((type) => type.type === outer1_10.AUTO_MODERATION_NOTIFICATION)) {
                                                embeds = mentions.embeds;
                                                const found = embeds.find((type) => type.type === outer1_10.AUTO_MODERATION_NOTIFICATION);
                                                let found1;
                                                if (null != found) {
                                                  const fields = found.fields;
                                                  if (null != fields) {
                                                    found1 = fields.find((name) => {
                                                      let tmp = "name" in name;
                                                      if (tmp) {
                                                        tmp = name.name === outer1_0(outer1_2[20]).AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
                                                      }
                                                      return tmp;
                                                    });
                                                  }
                                                }
                                                if (null != found1) {
                                                  if ("value" in found1) {
                                                    const value = found1.value;
                                                  }
                                                }
                                                const channel = store.getChannel(channel_id);
                                                let astToStringResult5 = null;
                                                if (null != channel) {
                                                  const guild = store2.getGuild(channel.getGuildId());
                                                  astToStringResult5 = null;
                                                  if (null != guild) {
                                                    if (require(7678) /* AutomodNotificationEmbedTypeKeys */.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                                                      let obj13 = require(7674) /* reactParserFor */;
                                                      const intl5 = require(1212) /* getSystemLocale */.intl;
                                                      obj13 = { guildName: guild.name };
                                                      astToStringResult5 = obj13.astToString(intl5.formatToParts(require(1212) /* getSystemLocale */.t.wt3ZUM, obj13));
                                                    } else {
                                                      first = require;
                                                      first = dependencyMap;
                                                      if (require(7678) /* AutomodNotificationEmbedTypeKeys */.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                                                        obj11 = require(7674) /* reactParserFor */;
                                                        const intl4 = require(1212) /* getSystemLocale */.intl;
                                                        const obj14 = { guildName: guild.name };
                                                        astToStringResult5 = obj11.astToString(intl4.formatToParts(require(1212) /* getSystemLocale */.t.AkqI0g, obj14));
                                                      } else {
                                                        obj9 = require(7674) /* reactParserFor */;
                                                        const intl3 = require(1212) /* getSystemLocale */.intl;
                                                        obj15 = { guildName: guild.name };
                                                        astToStringResult5 = obj9.astToString(intl3.formatToParts(require(1212) /* getSystemLocale */.t["a+lJKl"], obj15));
                                                      }
                                                    }
                                                  }
                                                }
                                                return astToStringResult5;
                                              }
                                            }
                                            return mentions.content;
                                          } else {
                                            first = closure_11;
                                            if (closure_11.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                                              const content = mentions.content;
                                              const channel1 = store.getChannel(channel_id);
                                              let tmp21 = null;
                                              if (null != channel1) {
                                                const guild1 = store2.getGuild(channel1.getGuildId());
                                                let astToStringResult6 = null;
                                                if (null != guild1) {
                                                  obj5 = require(7674) /* reactParserFor */;
                                                  const intl2 = require(1212) /* getSystemLocale */.intl;
                                                  obj16 = { username: name, guildName: guild1.name };
                                                  let str3 = "";
                                                  if ("" !== content) {
                                                    const _Date = Date;
                                                    const date = new Date(content);
                                                    str3 = date.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
                                                  }
                                                  obj16.time = str3;
                                                  astToStringResult6 = obj5.astToString(intl2.formatToParts(require(1212) /* getSystemLocale */.t.iOuWPk, obj16));
                                                }
                                                tmp21 = astToStringResult6;
                                              }
                                              return tmp21;
                                            } else {
                                              first = closure_11;
                                              if (closure_11.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                                                const channel2 = store.getChannel(channel_id);
                                                let tmp14 = null;
                                                if (null != channel2) {
                                                  const guild2 = store2.getGuild(channel2.getGuildId());
                                                  let astToStringResult7 = null;
                                                  if (null != guild2) {
                                                    obj2 = require(7674) /* reactParserFor */;
                                                    const intl = require(1212) /* getSystemLocale */.intl;
                                                    const obj17 = { username: name, guildName: guild2.name };
                                                    astToStringResult7 = obj2.astToString(intl.formatToParts(require(1212) /* getSystemLocale */.t.axmbpm, obj17));
                                                  }
                                                  tmp14 = astToStringResult7;
                                                }
                                                return tmp14;
                                              } else {
                                                return mentions.content;
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
                      return getSystemMessageUserPremiumGuildSubscriptionAchievedTier(name, channel_id);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if ("object" === typeof first) {
      const user = authStore.getUser(first.id);
      first = null;
      if (null != user) {
        first = user;
      }
      let tmp3 = first;
    } else {
      tmp3 = null;
      if ("string" === tmp2) {
        const user1 = authStore.getUser(first);
        tmp3 = null;
        if (null != user1) {
          tmp3 = user1;
        }
      }
    }
  },
  getSystemMessageUserJoin(id) {
    const items = [require(1212) /* getSystemLocale */.t["0cuj7l"], require(1212) /* getSystemLocale */.t["MuW+CN"], require(1212) /* getSystemLocale */.t.osqpHX, require(1212) /* getSystemLocale */.t["5ToSh2"], require(1212) /* getSystemLocale */.t.JEB8ps, require(1212) /* getSystemLocale */.t.pkOV5T, require(1212) /* getSystemLocale */.t["kRb1J+"], require(1212) /* getSystemLocale */.t["EmKLY+"], require(1212) /* getSystemLocale */.t.rPtBnb, require(1212) /* getSystemLocale */.t["5B/ekS"], require(1212) /* getSystemLocale */.t.ESNC3Y, require(1212) /* getSystemLocale */.t.Iw6d8w, require(1212) /* getSystemLocale */.t["WecSZ/"]];
    const obj = importDefault(21);
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    const _require = arg0;
    let formatResult = null;
    if (null != table[arg0]) {
      const intl = _require(1212).intl;
      let obj = {};
      obj = {
        onClick() {
            return window.open(outer1_13[closure_0]);
          }
      };
      obj.learnOnClick = obj;
      formatResult = intl.format(_require(1212).t.xw1Ij0, obj);
    }
    return formatResult;
  }
};
