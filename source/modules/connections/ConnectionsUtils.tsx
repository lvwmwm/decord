// Module ID: 4936
// Function ID: 42284
// Name: officialApplicationIds
// Dependencies: []
// Exports: getCallbackParamsFromURL, getConnectionsCheckText, getCreatedAtDate, getVisibleConnectionsRole, isVerifiedRolesChannelVisible, useShowLinkedRolesAdminNux

// Module 4936 (officialApplicationIds)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ MetadataFields: closure_6, OperatorTypes: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ Permissions: closure_8, PlatformTypes: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/connections/ConnectionsUtils.tsx");

export const officialApplicationIds = ["system_channel_flags", "linkTextLocalized", "bbuXIn", "ACCOUNT_STANDING_CATEGORY", "focusHook", "scrollEventsHandlersHook"];
export const ConnectionConfigurationRuleOperator = { AND: 0, [0]: "AND", OR: 1, [1]: "OR" };
export const getCallbackParamsFromURL = function getCallbackParamsFromURL(closure_1) {
  let code;
  let error;
  let error_description;
  let state;
  let obj = importDefault(dependencyMap[5]);
  let toURLSafeResult = obj.toURLSafe(closure_1);
  if (null == toURLSafeResult) {
    obj = {};
    const _URLSearchParams = URLSearchParams;
    const uRLSearchParams = new URLSearchParams();
    obj.searchParams = uRLSearchParams;
    toURLSafeResult = obj;
  }
  ({ code, state, error, error_description } = Object.fromEntries(toURLSafeResult.searchParams));
  const fromEntriesResult = Object.fromEntries(toURLSafeResult.searchParams);
  importDefault(dependencyMap[6])(!Array.isArray(code), "Received multiple query param values for code");
  const tmp8 = importDefault(dependencyMap[6]);
  importDefault(dependencyMap[6])(!Array.isArray(state), "Received multiple query param values for state");
  const tmp10 = importDefault(dependencyMap[6]);
  importDefault(dependencyMap[6])(!Array.isArray(error), "Received multiple query param values for error");
  const tmp12 = importDefault(dependencyMap[6]);
  importDefault(dependencyMap[6])(!Array.isArray(errorDescription), "Received multiple query param values for error_description");
  return { code, state, error, errorDescription };
};
export const getConnectionsCheckText = function getConnectionsCheckText(value) {
  let connectionMetadataField;
  let connectionType;
  let operator;
  let operatorText;
  ({ connectionType, connectionMetadataField, operator, operatorText } = value);
  let rounded = Math.round(Number(value.value));
  let callback = rounded;
  if (constants.EQUAL === operator) {
    let tmp14 = connectionType === constants2.PAYPAL;
    if (tmp14) {
      tmp14 = connectionMetadataField === closure_6.PAYPAL_VERIFIED;
    }
    let H97H4S = callback(dependencyMap[7]).t.H97H4S;
    if (tmp14) {
      H97H4S = callback(dependencyMap[7]).t.N95b+f;
    }
  } else if (constants.NOT_EQUAL === operator) {
    H97H4S = callback(dependencyMap[7]).t.D9B/q2;
  } else if (constants.LESS_THAN === operator) {
    H97H4S = callback(dependencyMap[7]).t.3ru8/N;
    const _Math2 = Math;
    callback = Math.max(0, rounded - 1);
  } else if (constants.GREATER_THAN === operator) {
    H97H4S = callback(dependencyMap[7]).t.wCVDHn;
    const _Math = Math;
    callback = Math.max(0, rounded + 1);
  } else {
    if (undefined !== operator) {
      H97H4S = null;
    }
    return null;
  }
  if (null != operatorText) {
    H97H4S = operatorText;
  }
  let formatResult = H97H4S;
  if (null != H97H4S) {
    formatResult = H97H4S;
    if (null != operator) {
      if (constants2.REDDIT === connectionType) {
        if (closure_6.CREATED_AT === connectionMetadataField) {
          const intl26 = callback(dependencyMap[7]).intl;
          let obj = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.TPbtEu, { days: callback });
                    }
          };
          formatResult = intl26.format(H97H4S, obj);
        } else {
          rounded = closure_6;
          if (closure_6.REDDIT_TOTAL_KARMA === connectionMetadataField) {
            const intl25 = callback(dependencyMap[7]).intl;
            obj = {
              platformQuantityHook() {
                          const intl = callback(closure_2[7]).intl;
                          return intl.formatToPlainString(callback(closure_2[7]).t.P2JAEc, { karma: callback });
                        }
            };
            formatResult = intl25.format(H97H4S, obj);
          } else {
            rounded = closure_6;
            if (closure_6.REDDIT_GOLD === connectionMetadataField) {
              const intl24 = callback(dependencyMap[7]).intl;
              const obj1 = {
                platformQuantityHook() {
                              const intl = callback(closure_2[7]).intl;
                              return intl.string(callback(closure_2[7]).t.+/5TCx);
                            }
              };
              formatResult = intl24.format(H97H4S, obj1);
            } else if (closure_6.REDDIT_MOD === connectionMetadataField) {
              const intl23 = callback(dependencyMap[7]).intl;
              const obj2 = {
                platformQuantityHook() {
                              const intl = callback(closure_2[7]).intl;
                              return intl.string(callback(closure_2[7]).t.9rPbEs);
                            }
              };
              formatResult = intl23.format(H97H4S, obj2);
            } else {
              return null;
            }
          }
        }
      } else if (constants2.STEAM === connectionType) {
        if (closure_6.CREATED_AT === connectionMetadataField) {
          const intl22 = callback(dependencyMap[7]).intl;
          const obj3 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.TPbtEu, { days: callback });
                    }
          };
          formatResult = intl22.format(H97H4S, obj3);
        } else {
          rounded = closure_6;
          if (closure_6.STEAM_GAME_COUNT === connectionMetadataField) {
            const intl21 = callback(dependencyMap[7]).intl;
            const obj4 = {
              platformQuantityHook() {
                          const intl = callback(closure_2[7]).intl;
                          return intl.formatToPlainString(callback(closure_2[7]).t.H9eLoe, { count: callback });
                        }
            };
            formatResult = intl21.format(H97H4S, obj4);
          } else {
            rounded = closure_6;
            if (closure_6.STEAM_ITEM_COUNT_TF2 === connectionMetadataField) {
              const intl20 = callback(dependencyMap[7]).intl;
              const obj5 = {
                platformQuantityHook() {
                              const intl = callback(closure_2[7]).intl;
                              return intl.formatToPlainString(callback(closure_2[7]).t.MceZJ6, { count: callback });
                            }
              };
              formatResult = intl20.format(H97H4S, obj5);
            } else if (closure_6.STEAM_ITEM_COUNT_DOTA2 === connectionMetadataField) {
              const intl19 = callback(dependencyMap[7]).intl;
              const obj6 = {
                platformQuantityHook() {
                              const intl = callback(closure_2[7]).intl;
                              return intl.formatToPlainString(callback(closure_2[7]).t.dMnRar, { count: callback });
                            }
              };
              formatResult = intl19.format(H97H4S, obj6);
            } else {
              return null;
            }
          }
        }
      } else if (constants2.BLUESKY === connectionType) {
        if (closure_6.CREATED_AT === connectionMetadataField) {
          const intl18 = callback(dependencyMap[7]).intl;
          const obj7 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.TPbtEu, { days: callback });
                    }
          };
          formatResult = intl18.format(H97H4S, obj7);
        } else {
          rounded = closure_6;
          if (closure_6.BLUESKY_FOLLOWERS_COUNT === connectionMetadataField) {
            const intl17 = callback(dependencyMap[7]).intl;
            const obj8 = {
              platformQuantityHook() {
                          const intl = callback(closure_2[7]).intl;
                          return intl.formatToPlainString(callback(closure_2[7]).t.xIdKU8, { count: callback });
                        }
            };
            formatResult = intl17.format(H97H4S, obj8);
          } else if (closure_6.BLUESKY_STATUSES_COUNT === connectionMetadataField) {
            const intl16 = callback(dependencyMap[7]).intl;
            const obj9 = {
              platformQuantityHook() {
                          const intl = callback(closure_2[7]).intl;
                          return intl.formatToPlainString(callback(closure_2[7]).t.dy3+NR, { count: callback });
                        }
            };
            formatResult = intl16.format(H97H4S, obj9);
          } else {
            return null;
          }
        }
      } else if (constants2.TWITTER === connectionType) {
        if (closure_6.CREATED_AT === connectionMetadataField) {
          const intl15 = callback(dependencyMap[7]).intl;
          const obj10 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.TPbtEu, { days: callback });
                    }
          };
          formatResult = intl15.format(H97H4S, obj10);
        } else if (closure_6.TWITTER_VERIFIED === connectionMetadataField) {
          const intl14 = callback(dependencyMap[7]).intl;
          const obj11 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.string(callback(closure_2[7]).t.xRygZL);
                    }
          };
          formatResult = intl14.format(H97H4S, obj11);
        } else {
          rounded = closure_6;
          if (closure_6.TWITTER_FOLLOWERS_COUNT === connectionMetadataField) {
            const intl13 = callback(dependencyMap[7]).intl;
            const obj12 = {
              platformQuantityHook() {
                          const intl = callback(closure_2[7]).intl;
                          return intl.formatToPlainString(callback(closure_2[7]).t.bkajar, { count: callback });
                        }
            };
            formatResult = intl13.format(H97H4S, obj12);
          } else if (closure_6.TWITTER_STATUSES_COUNT === connectionMetadataField) {
            const intl12 = callback(dependencyMap[7]).intl;
            const obj13 = {
              platformQuantityHook() {
                          const intl = callback(closure_2[7]).intl;
                          return intl.formatToPlainString(callback(closure_2[7]).t.MI7NKi, { count: callback });
                        }
            };
            formatResult = intl12.format(H97H4S, obj13);
          } else {
            return null;
          }
        }
      } else if (constants2.PAYPAL === connectionType) {
        if (closure_6.CREATED_AT === connectionMetadataField) {
          const intl11 = callback(dependencyMap[7]).intl;
          const obj14 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.TPbtEu, { days: callback });
                    }
          };
          formatResult = intl11.format(H97H4S, obj14);
        } else if (closure_6.PAYPAL_VERIFIED === connectionMetadataField) {
          const intl10 = callback(dependencyMap[7]).intl;
          const obj15 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.string(callback(closure_2[7]).t.slSQuB);
                    }
          };
          formatResult = intl10.format(H97H4S, obj15);
        } else {
          return null;
        }
      } else if (constants2.EBAY === connectionType) {
        if (closure_6.CREATED_AT === connectionMetadataField) {
          const intl9 = callback(dependencyMap[7]).intl;
          const obj16 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.TPbtEu, { days: callback });
                    }
          };
          formatResult = intl9.format(H97H4S, obj16);
        } else if (closure_6.EBAY_TOP_RATED_SELLER === connectionMetadataField) {
          const intl8 = callback(dependencyMap[7]).intl;
          const obj17 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.string(callback(closure_2[7]).t.TEEYwa);
                    }
          };
          formatResult = intl8.format(H97H4S, obj17);
        } else if (closure_6.EBAY_POSITIVE_FEEDBACK_PERCENTAGE === connectionMetadataField) {
          const intl7 = callback(dependencyMap[7]).intl;
          const obj18 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.rl9Vgy, { value: callback });
                    }
          };
          formatResult = intl7.format(H97H4S, obj18);
        } else if (closure_6.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl6 = callback(dependencyMap[7]).intl;
          const obj19 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.QP5W1R, { count: callback });
                    }
          };
          formatResult = intl6.format(H97H4S, obj19);
        } else if (closure_6.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl5 = callback(dependencyMap[7]).intl;
          const obj20 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.6ZFYdK, { count: callback });
                    }
          };
          formatResult = intl5.format(H97H4S, obj20);
        } else {
          return null;
        }
      } else if (constants2.TIKTOK === connectionType) {
        if (closure_6.TIKTOK_VERIFIED === connectionMetadataField) {
          const intl4 = callback(dependencyMap[7]).intl;
          const obj21 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.string(callback(closure_2[7]).t.uv7ety);
                    }
          };
          formatResult = intl4.format(H97H4S, obj21);
        } else if (closure_6.TIKTOK_FOLLOWER_COUNT === connectionMetadataField) {
          const intl3 = callback(dependencyMap[7]).intl;
          const obj22 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.qIPDRy, { count: callback });
                    }
          };
          formatResult = intl3.format(H97H4S, obj22);
        } else if (closure_6.TIKTOK_FOLLOWING_COUNT === connectionMetadataField) {
          const intl2 = callback(dependencyMap[7]).intl;
          const obj23 = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.zRta4X, { count: callback });
                    }
          };
          formatResult = intl2.format(H97H4S, obj23);
        } else if (closure_6.TIKTOK_LIKES_COUNT === connectionMetadataField) {
          const intl = callback(dependencyMap[7]).intl;
          obj = {
            platformQuantityHook() {
                      const intl = callback(closure_2[7]).intl;
                      return intl.formatToPlainString(callback(closure_2[7]).t.ar0WW+, { count: callback });
                    }
          };
          formatResult = intl.format(H97H4S, obj);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }
  return formatResult;
};
export const isVerifiedRolesChannelVisible = function isVerifiedRolesChannelVisible(sortedRoles) {
  return sortedRoles.some((tags) => null === tags.tags.guild_connections);
};
export const getVisibleConnectionsRole = function getVisibleConnectionsRole(guildMember) {
  let channel;
  let guild;
  let onlyChannelConnectionRoles;
  let sortedGuildRoles;
  guildMember = guildMember.guildMember;
  const arg1 = guildMember;
  ({ guild, sortedGuildRoles, channel, onlyChannelConnectionRoles } = guildMember);
  if (onlyChannelConnectionRoles === undefined) {
    onlyChannelConnectionRoles = false;
  }
  if (null == guildMember) {
    return null;
  } else {
    if (tmp) {
      guild = guild.getGuild(channel.getGuildId());
    }
    if (null == guild) {
      return null;
    } else {
      if (null == sortedGuildRoles) {
        sortedGuildRoles = sortedRoles.getSortedRoles(tmp12);
      }
      const found = sortedGuildRoles.filter((tags) => {
        let hasItem = null === tags.tags.guild_connections;
        if (hasItem) {
          const roles = guildMember.roles;
          hasItem = roles.includes(tags.id);
        }
        return hasItem;
      });
      const intersectionResult = importDefault(dependencyMap[8]).intersection(found, importDefault(dependencyMap[9])(channel));
      if (intersectionResult.length > 0) {
        const first = intersectionResult[0];
        let tmp11 = null;
        if (null != first) {
          tmp11 = first;
        }
        let tmp7 = tmp11;
      } else {
        tmp7 = null;
        if (!onlyChannelConnectionRoles) {
          const first1 = found[0];
          let tmp9 = null;
          if (null != first1) {
            tmp9 = first1;
          }
          tmp7 = tmp9;
        }
      }
      return tmp7;
    }
    const tmp = null == guild && null != channel;
  }
};
export const getCreatedAtDate = function getCreatedAtDate(date, locale) {
  if (null != date) {
    if ("" !== date) {
      const _Date = Date;
      date = new Date(date);
      const _Date2 = Date;
      let toLocaleDateStringResult = null;
      if (date instanceof Date) {
        const _isNaN = isNaN;
        toLocaleDateStringResult = null;
        if (!isNaN(date.getTime())) {
          toLocaleDateStringResult = date.toLocaleDateString(locale, { <string:3478312518>: true, <string:4217799105>: true, <string:1449286816>: true });
        }
      }
      return toLocaleDateStringResult;
    }
  }
  return null;
};
export const useShowLinkedRolesAdminNux = function useShowLinkedRolesAdminNux(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_5];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    const sortedRoles = sortedRoles.getSortedRoles(arg0.id);
    const someResult = sortedRoles.some((tags) => null === tags.tags.guild_connections);
    const result = arg0(closure_2[11]).UNSAFE_isDismissibleContentDismissed(arg0(closure_2[12]).DismissibleContent.CONNECTIONS_NUX);
    let tmp4 = !someResult;
    const obj2 = arg0(closure_2[11]);
    if (tmp4) {
      tmp4 = result;
    }
    if (tmp4) {
      tmp4 = canResult;
    }
    return tmp4;
  });
};
