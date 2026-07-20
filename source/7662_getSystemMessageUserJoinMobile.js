// Module ID: 7662
// Function ID: 61239
// Name: getSystemMessageUserJoinMobile
// Dependencies: []

// Module 7662 (getSystemMessageUserJoinMobile)
function getSystemMessageUserJoinMobile(id) {
  const items = [arg1(dependencyMap[8]).t.Jm6e0x, arg1(dependencyMap[8]).t.MGRnRT, arg1(dependencyMap[8]).t.EXOEGh, arg1(dependencyMap[8]).t.5uCTFN, arg1(dependencyMap[8]).t.rl45Qo, arg1(dependencyMap[8]).t.Bh9zpQ, arg1(dependencyMap[8]).t.RdEy1J, arg1(dependencyMap[8]).t.qcdp00, arg1(dependencyMap[8]).t.F7w2Ru, arg1(dependencyMap[8]).t.gSyOgK, arg1(dependencyMap[8]).t.uYgqv7, arg1(dependencyMap[8]).t.b/1SBX, arg1(dependencyMap[8]).t.LhebZF];
  const obj = importDefault(dependencyMap[9]);
  return items[obj.extractTimestamp(obj, id) % items.length];
}
function getSystemMessageUserPremiumGuildSubscription(name) {
  let obj = arg1(dependencyMap[10]);
  const intl = arg1(dependencyMap[8]).intl;
  obj = { username: name, usernameOnClick: closure_12 };
  return obj.astToString(intl.formatToParts(arg1(dependencyMap[8]).t.ihxM9x, obj));
}
function getSystemMessageUserPremiumGuildSubscriptionAchievedTier(name, channel_id) {
  const channel = store.getChannel(channel_id);
  if (null != channel) {
    if (null != store2.getGuild(channel.getGuildId())) {
      const intl = channel_id(dependencyMap[8]).intl;
      const obj = { username: name, usernameOnClick: closure_12 };
      let astToStringResult = channel_id(dependencyMap[10]).astToString(intl.formatToParts(channel_id(dependencyMap[8]).t.ihxM9x, obj));
      const obj2 = channel_id(dependencyMap[10]);
    }
    return astToStringResult;
  }
  astToStringResult = getSystemMessageUserPremiumGuildSubscription(name);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ MessageEmbedTypes: closure_10, MessageTypes: closure_11, NOOP: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = {};
const obj = {
  stringify(mentions, isForumPost) {
    mentions = mentions.mentions;
    if (null == mentions) {
      mentions = [];
    }
    let first = callback(mentions, 1)[0];
    if (null == first) {
      const channel_id = mentions.channel_id;
      let obj = importDefault(dependencyMap[12]);
      const name = obj.getName(null, channel_id, mentions.author);
      const type = mentions.type;
      if (closure_11.RECIPIENT_ADD === type) {
        if (null != null) {
          first = isForumPost;
          first = dependencyMap;
          const intl15 = isForumPost(dependencyMap[8]).intl;
          obj = { username: name };
          first = closure_12;
          obj.usernameOnClick = closure_12;
          first = importDefault;
          const obj54 = isForumPost(dependencyMap[10]);
          obj.otherUsername = importDefault(dependencyMap[12]).getName(null, channel_id, null);
          first = closure_12;
          obj.otherUsernameOnClick = closure_12;
          return obj54.astToString(intl15.formatToParts(isForumPost(dependencyMap[8]).t.7/Xl0S, obj));
        }
      } else {
        first = closure_11;
        if (closure_11.RECIPIENT_REMOVE === type) {
          if (null != null) {
            const author = mentions.author;
            if (null != author) {
              if (author.id !== null.id) {
                first = isForumPost;
                first = dependencyMap;
                const intl14 = isForumPost(dependencyMap[8]).intl;
                obj = { username: name };
                first = closure_12;
                obj.usernameOnClick = closure_12;
                first = importDefault;
                const obj51 = isForumPost(dependencyMap[10]);
                obj.otherUsername = importDefault(dependencyMap[12]).getName(null, channel_id, null);
                first = closure_12;
                obj.otherUsernameOnClick = closure_12;
                first = obj51.astToString(intl14.formatToParts(isForumPost(dependencyMap[8]).t.QtZ0RD, obj));
                const obj53 = importDefault(dependencyMap[12]);
              }
              return first;
            }
            const intl13 = isForumPost(dependencyMap[8]).intl;
            const obj1 = { username: name };
            first = closure_12;
            obj1.usernameOnClick = closure_12;
            first = isForumPost(dependencyMap[10]).astToString(intl13.formatToParts(isForumPost(dependencyMap[8]).t.Qn5+Lf, obj1));
            const obj49 = isForumPost(dependencyMap[10]);
          }
        } else {
          first = closure_11;
          if (closure_11.CALL === type) {
            const call = mentions.call;
            let astToStringResult;
            if (null != call) {
              const participants = call.participants;
              if (-1 === participants.indexOf(id.getId())) {
                const intl12 = isForumPost(dependencyMap[8]).intl;
                let obj2 = { username: name, usernameOnClick: closure_12 };
                astToStringResult = isForumPost(dependencyMap[10]).astToString(intl12.formatToParts(isForumPost(dependencyMap[8]).t.DbgSA0, obj2));
                const obj47 = isForumPost(dependencyMap[10]);
              }
            }
            return astToStringResult;
          } else {
            first = closure_11;
            if (closure_11.CHANNEL_NAME_CHANGE === type) {
              const intl11 = isForumPost(dependencyMap[8]).intl;
              const obj45 = isForumPost(dependencyMap[10]);
              const t = isForumPost(dependencyMap[8]).t;
              const obj3 = { username: name, usernameOnClick: closure_12, channelName: mentions.content };
              return obj45.astToString(intl11.formatToParts(isForumPost.isForumPost() ? t.qa0e/n : t.XCPMEG, obj3));
            } else {
              first = closure_11;
              if (closure_11.CHANNEL_ICON_CHANGE === type) {
                const intl10 = isForumPost(dependencyMap[8]).intl;
                const obj4 = { username: name, usernameOnClick: closure_12 };
                return isForumPost(dependencyMap[10]).astToString(intl10.formatToParts(isForumPost(dependencyMap[8]).t.wypJZ0, obj4));
              } else {
                first = closure_11;
                if (closure_11.CHANNEL_PINNED_MESSAGE === type) {
                  const intl9 = isForumPost(dependencyMap[8]).intl;
                  let obj5 = { username: name, usernameOnClick: closure_12 };
                  return isForumPost(dependencyMap[10]).astToString(intl9.formatToParts(isForumPost(dependencyMap[8]).t./M60j0, obj5));
                } else {
                  first = closure_11;
                  if (closure_11.USER_JOIN === type) {
                    const intl8 = isForumPost(dependencyMap[8]).intl;
                    const obj6 = { username: name, usernameOnClick: closure_12 };
                    return isForumPost(dependencyMap[10]).astToString(intl8.formatToParts(getSystemMessageUserJoinMobile(mentions.id), obj6));
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
                              const intl7 = isForumPost(dependencyMap[8]).intl;
                              return intl7.string(isForumPost(dependencyMap[8]).t.gxyKvr);
                            } else {
                              first = closure_11;
                              if (closure_11.THREAD_STARTER_MESSAGE === type) {
                                const intl6 = isForumPost(dependencyMap[8]).intl;
                                const obj7 = { username: name, threadName: isForumPost(dependencyMap[13]).computeChannelName(isForumPost, authStore, closure_8) };
                                return intl6.formatToPlainString(isForumPost(dependencyMap[8]).t.B8H+Cl, obj7);
                              } else {
                                first = closure_11;
                                if (closure_11.ROLE_SUBSCRIPTION_PURCHASE === type) {
                                  let astToStringResult1 = null;
                                  if (!(mentions instanceof closure_4)) {
                                    const obj34 = isForumPost(dependencyMap[10]);
                                    const obj8 = { username: name, guildId: isForumPost.guild_id, roleSubscriptionData: mentions.role_subscription_data };
                                    astToStringResult1 = obj34.astToString(isForumPost(dependencyMap[14]).getRoleSubscriptionPurchaseSystemMessageContentMobile(obj8));
                                    const obj35 = isForumPost(dependencyMap[14]);
                                  }
                                  return astToStringResult1;
                                } else {
                                  first = closure_11;
                                  if (closure_11.PURCHASE_NOTIFICATION === type) {
                                    let astToStringResult2 = null;
                                    if (!(mentions instanceof closure_4)) {
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
                                        const obj31 = isForumPost(dependencyMap[10]);
                                        let obj9 = { username: name, productName: mentions.purchase_notification.guild_product_purchase.product_name };
                                        astToStringResult2 = obj31.astToString(isForumPost(dependencyMap[15]).getGuildProductPurchaseSystemMessageContentMobile(obj9));
                                        const obj32 = isForumPost(dependencyMap[15]);
                                      }
                                    }
                                    return astToStringResult2;
                                  } else {
                                    first = closure_11;
                                    if (closure_11.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
                                      if (mentions instanceof closure_4) {
                                        return null;
                                      } else {
                                        const obj26 = isForumPost(dependencyMap[16]);
                                        const messageAuthor = obj26.getMessageAuthor(isForumPost(dependencyMap[17]).createMessageRecord(mentions));
                                        const obj27 = isForumPost(dependencyMap[17]);
                                        const obj28 = isForumPost(dependencyMap[10]);
                                        const obj10 = { application: mentions.application, username: messageAuthor.nick };
                                        return obj28.astToString(isForumPost(dependencyMap[18]).getApplicationSubscriptionSystemMessageASTContent(obj10));
                                      }
                                    } else {
                                      first = closure_11;
                                      if (closure_11.PRIVATE_CHANNEL_INTEGRATION_ADDED === type) {
                                        let astToStringResult3 = null;
                                        if (!(mentions instanceof closure_4)) {
                                          const obj21 = isForumPost(dependencyMap[10]);
                                          let obj11 = { application: mentions.application };
                                          const obj22 = isForumPost(dependencyMap[19]);
                                          const obj24 = isForumPost(dependencyMap[16]);
                                          obj11.username = obj24.getMessageAuthor(isForumPost(dependencyMap[17]).createMessageRecord(mentions)).nick;
                                          astToStringResult3 = obj21.astToString(obj22.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj11));
                                          const obj25 = isForumPost(dependencyMap[17]);
                                        }
                                        return astToStringResult3;
                                      } else {
                                        first = closure_11;
                                        if (closure_11.PRIVATE_CHANNEL_INTEGRATION_REMOVED === type) {
                                          let astToStringResult4 = null;
                                          if (!(mentions instanceof closure_4)) {
                                            let obj15 = isForumPost(dependencyMap[10]);
                                            let obj16 = isForumPost(dependencyMap[19]);
                                            const obj12 = { application: mentions.application };
                                            const obj19 = isForumPost(dependencyMap[16]);
                                            obj12.username = obj19.getMessageAuthor(isForumPost(dependencyMap[17]).createMessageRecord(mentions)).nick;
                                            astToStringResult4 = obj15.astToString(obj16.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj12));
                                            const obj20 = isForumPost(dependencyMap[17]);
                                          }
                                          return astToStringResult4;
                                        } else {
                                          first = closure_11;
                                          if (closure_11.AUTO_MODERATION_ACTION === type) {
                                            let embeds = mentions.embeds;
                                            if (null != embeds) {
                                              if (embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION)) {
                                                embeds = mentions.embeds;
                                                const found = embeds.find((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
                                                let found1;
                                                if (null != found) {
                                                  const fields = found.fields;
                                                  if (null != fields) {
                                                    found1 = fields.find((name) => {
                                                      let tmp = "name" in name;
                                                      if (tmp) {
                                                        tmp = name.name === callback(closure_2[20]).AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
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
                                                    if (isForumPost(dependencyMap[11]).AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED === value) {
                                                      let obj13 = isForumPost(dependencyMap[10]);
                                                      const intl5 = isForumPost(dependencyMap[8]).intl;
                                                      obj13 = { guildName: guild.name };
                                                      astToStringResult5 = obj13.astToString(intl5.formatToParts(isForumPost(dependencyMap[8]).t.wt3ZUM, obj13));
                                                    } else {
                                                      first = isForumPost;
                                                      first = dependencyMap;
                                                      if (isForumPost(dependencyMap[11]).AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED === value) {
                                                        obj11 = isForumPost(dependencyMap[10]);
                                                        const intl4 = isForumPost(dependencyMap[8]).intl;
                                                        const obj14 = { guildName: guild.name };
                                                        astToStringResult5 = obj11.astToString(intl4.formatToParts(isForumPost(dependencyMap[8]).t.AkqI0g, obj14));
                                                      } else {
                                                        obj9 = isForumPost(dependencyMap[10]);
                                                        const intl3 = isForumPost(dependencyMap[8]).intl;
                                                        obj15 = { guildName: guild.name };
                                                        astToStringResult5 = obj9.astToString(intl3.formatToParts(isForumPost(dependencyMap[8]).t.a+lJKl, obj15));
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
                                                  obj5 = isForumPost(dependencyMap[10]);
                                                  const intl2 = isForumPost(dependencyMap[8]).intl;
                                                  obj16 = { username: name, guildName: guild1.name };
                                                  let str3 = "";
                                                  if ("" !== content) {
                                                    const _Date = Date;
                                                    const date = new Date(content);
                                                    str3 = date.toLocaleString(isForumPost(dependencyMap[8]).intl.currentLocale, {});
                                                  }
                                                  obj16.time = str3;
                                                  astToStringResult6 = obj5.astToString(intl2.formatToParts(isForumPost(dependencyMap[8]).t.iOuWPk, obj16));
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
                                                    obj2 = isForumPost(dependencyMap[10]);
                                                    const intl = isForumPost(dependencyMap[8]).intl;
                                                    const obj17 = { username: name, guildName: guild2.name };
                                                    astToStringResult7 = obj2.astToString(intl.formatToParts(isForumPost(dependencyMap[8]).t.axmbpm, obj17));
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
    const items = [arg1(dependencyMap[8]).t.0cuj7l, arg1(dependencyMap[8]).t.MuW+CN, arg1(dependencyMap[8]).t.osqpHX, arg1(dependencyMap[8]).t.5ToSh2, arg1(dependencyMap[8]).t.JEB8ps, arg1(dependencyMap[8]).t.pkOV5T, arg1(dependencyMap[8]).t.kRb1J+, arg1(dependencyMap[8]).t.EmKLY+, arg1(dependencyMap[8]).t.rPtBnb, arg1(dependencyMap[8]).t.5B/ekS, arg1(dependencyMap[8]).t.ESNC3Y, arg1(dependencyMap[8]).t.Iw6d8w, arg1(dependencyMap[8]).t.WecSZ/];
    const obj = importDefault(dependencyMap[9]);
    return items[obj.extractTimestamp(obj, id) % items.length];
  },
  getSystemMessageUserJoinMobile,
  getSystemMessageBotJoin(arg0) {
    const arg1 = arg0;
    let formatResult = null;
    if (null != closure_13[arg0]) {
      const intl = arg1(dependencyMap[8]).intl;
      let obj = {};
      obj = {
        onClick() {
            return window.open(closure_13[closure_0]);
          }
      };
      obj.learnOnClick = obj;
      formatResult = intl.format(arg1(dependencyMap[8]).t.xw1Ij0, obj);
    }
    return formatResult;
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("utils/SystemMessageUtils.tsx");

export default obj;
