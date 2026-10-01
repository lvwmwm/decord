// Module ID: 17432
// Function ID: 17433
// Name: MessageCodedLinkManager
// Dependencies: [5, 7065, 2044, 4826, 4825, 4830, 17433, 8010, 6929, 17440, 17441, 17446, 11764, 6725, 17448, 2]

// Module 17432 (MessageCodedLinkManager)
import findCodedLinksDefault from "findCodedLinks" /* 4825 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17448 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7065 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import InviteStore from "InviteStore" /* 4826 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6725 */;

const require = fn;
function resolveMessageCodedLinks(content) {
  closure_0 = content;
  content = content.content;
  if (content == null) {
    content = null;
  }
  let arr = findCodedLinksDefault(content);
  let tmp2 = null != arr;
  if (tmp2) {
    tmp2 = 0 !== arr.length;
  }
  if (tmp2) {
    let item = arr.forEach((item) => {
      ({ type, code } = item);
      if (code(4830).CodedLinkType.INVITE === type) {
        const result = tmp(17433).queueMessageLinkFetch(closure_3(function*(arg0, value) {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  if (null == invite.getInvite(code)) {
                    v1 = 1;
                    c0 = 1;
                    const obj5 = { value: v1(dependencyMap[7]).resolveInvite(tmp6), done: false };
                    return obj5;
                  }
                  tmp6 = code;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "HermesInternal", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
        const tmpResult = tmp(17433);
      } else if (tmp(4830).CodedLinkType.TEMPLATE === type) {
        const result1 = tmp(17433).queueMessageLinkFetch(closure_3(function*(arg0, value) {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  if (null == guildTemplate.getGuildTemplate(code)) {
                    v1 = 1;
                    c0 = 1;
                    const obj5 = { value: v1(dependencyMap[8]).resolveGuildTemplate(tmp6), done: false };
                    return obj5;
                  }
                  tmp6 = code;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "HermesInternal", done: null };
            } catch (tmp10) {
              c0 = tmp;
              throw tmp10;
            }
          }
        }));
        const tmpResult5 = tmp(17433);
      } else if (tmp(4830).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (tmp(4830).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (tmp(4830).CodedLinkType.EVENT !== type) {
            if (tmp(4830).CodedLinkType.CHANNEL_LINK !== type) {
              if (tmp(4830).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (tmp(4830).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (tmp(4830).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (tmp(4830).CodedLinkType.SERVER_SHOP !== type) {
                      if (tmp(4830).CodedLinkType.QUESTS_EMBED !== type) {
                        if (tmp(4830).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                          if (tmp(4830).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                            if (tmp(4830).CodedLinkType.APP_OAUTH2_LINK !== type) {
                              if (tmp(4830).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                if (tmp(4830).CodedLinkType.EXPERIMENT !== type) {
                                  if (tmp(4830).CodedLinkType.GAME_PROFILE !== type) {
                                    if (tmp(4830).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                      if (tmp(4830).CodedLinkType.USER_PROFILE !== type) {
                                        if (tmp(4830).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                          if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                            const result2 = tmp(17433).queueMessageLinkFetch(() => {
                                              const useGameOrganizationInviteFetch = content(17441).useGameOrganizationInviteFetch;
                                              const items = [code];
                                              return useGameOrganizationInviteFetch.fetchMany(items);
                                            });
                                            const tmpResult7 = tmp(17433);
                                          }
                                          tmpResult6 = tmp(17440);
                                        } else {
                                          if (tmp(4830).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                            if (tmp(4830).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                              if (tmp(4830).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                const embedApplication = tmp(11764).getEmbedApplication(code);
                                                const tmpResult8 = tmp(11764);
                                              } else {
                                                const _Error = Error;
                                                const _HermesInternal = HermesInternal;
                                                throw Error("Unknown coded link type: " + type);
                                              }
                                            }
                                          }
                                          closure_1(17446)(type, code);
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
            }
          }
        }
      }
    });
  }
  const message_snapshots = content.message_snapshots;
  if (message_snapshots != null) {
    const item1 = message_snapshots.forEach((message) => {
      const arr = findCodedLinksDefault(message.message.content);
      let tmp = null != arr;
      if (tmp) {
        tmp = 0 !== arr.length;
      }
      if (tmp) {
        const item = arr.forEach((item) => {
          ({ type, code } = item);
          if (code(4830).CodedLinkType.INVITE === type) {
            const result = tmp(17433).queueMessageLinkFetch(closure_3(function*(arg0, value) {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c0 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      if (null == invite.getInvite(code)) {
                        v1 = 1;
                        c0 = 1;
                        const obj5 = { value: v1(dependencyMap[7]).resolveInvite(tmp6), done: false };
                        return obj5;
                      }
                      tmp6 = code;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "HermesInternal", done: null };
                } catch (tmp10) {
                  c0 = tmp;
                  throw tmp10;
                }
              }
            }));
            const tmpResult = tmp(17433);
          } else if (tmp(4830).CodedLinkType.TEMPLATE === type) {
            const result1 = tmp(17433).queueMessageLinkFetch(closure_3(function*(arg0, value) {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c0 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      if (null == guildTemplate.getGuildTemplate(code)) {
                        v1 = 1;
                        c0 = 1;
                        const obj5 = { value: v1(dependencyMap[8]).resolveGuildTemplate(tmp6), done: false };
                        return obj5;
                      }
                      tmp6 = code;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "HermesInternal", done: null };
                } catch (tmp10) {
                  c0 = tmp;
                  throw tmp10;
                }
              }
            }));
            const tmpResult5 = tmp(17433);
          } else if (tmp(4830).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (tmp(4830).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (tmp(4830).CodedLinkType.EVENT !== type) {
                if (tmp(4830).CodedLinkType.CHANNEL_LINK !== type) {
                  if (tmp(4830).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                    if (tmp(4830).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (tmp(4830).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (tmp(4830).CodedLinkType.SERVER_SHOP !== type) {
                          if (tmp(4830).CodedLinkType.QUESTS_EMBED !== type) {
                            if (tmp(4830).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (tmp(4830).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (tmp(4830).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (tmp(4830).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (tmp(4830).CodedLinkType.EXPERIMENT !== type) {
                                      if (tmp(4830).CodedLinkType.GAME_PROFILE !== type) {
                                        if (tmp(4830).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (tmp(4830).CodedLinkType.USER_PROFILE !== type) {
                                            if (tmp(4830).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                              if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                                const result2 = tmp(17433).queueMessageLinkFetch(() => {
                                                  const useGameOrganizationInviteFetch = content(17441).useGameOrganizationInviteFetch;
                                                  const items = [code];
                                                  return useGameOrganizationInviteFetch.fetchMany(items);
                                                });
                                                const tmpResult7 = tmp(17433);
                                              }
                                              tmpResult6 = tmp(17440);
                                            } else {
                                              if (tmp(4830).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                                if (tmp(4830).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                                  if (tmp(4830).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                    const embedApplication = tmp(11764).getEmbedApplication(code);
                                                    const tmpResult8 = tmp(11764);
                                                  } else {
                                                    const _Error = Error;
                                                    const _HermesInternal = HermesInternal;
                                                    throw Error("Unknown coded link type: " + type);
                                                  }
                                                }
                                              }
                                              closure_1(17446)(type, code);
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
                }
              }
            }
          }
        });
      }
    });
  }
}
class MessageCodedLinkManager extends tmp7 {
  constructor() {
    tmp3 = new MessageCodedLinkManager(tmp2, tmp, new.target);
    tmp4 = closure_1(closure_2[14])(tmp3, resolveMessageCodedLinks);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, MessageCodedLinkManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, resolveMessageCodedLinks);
const size = fn(2);
let result = size.fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp5;
