// Module ID: 20297
// Function ID: 20298
// Name: MessageCodedLinkManager
// Dependencies: [5, 8461, 6052, 1083, 6051, 6055, 20298, 7660, 8128, 20305, 12531, 20307, 14101, 20308, 13402, 7882, 20309, 2]

// Module 20297 (MessageCodedLinkManager)
import Constants from "Constants" /* 1083 */;
import findCodedLinksDefault from "findCodedLinks" /* 6051 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 20309 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildTemplateStore from "GuildTemplateStore" /* 8461 */;
import InviteStore from "InviteStore" /* 6052 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
import size from "module_2" /* 2 */;

let c0, c1, c2;

let tmp;
let tmp2;
let tmp3;
function resolveMessageCodedLinks(content) {
  content = content.content;
  if (content == null) {
    content = null;
  }
  let channel_id = content.channel_id;
  let arr = findCodedLinksDefault(content);
  let tmp2 = null != arr;
  if (tmp2) {
    tmp2 = 0 !== arr.length;
  }
  if (tmp2) {
    let item = arr.forEach((item) => {
      let code;
      let type;
      ({ type, code } = item);
      const tmp2 = closure_2_2;
      if (content(closure_2_2[5]).CodedLinkType.INVITE === type) {
        const tmpResult = content(tmp2[6]);
        const result = tmpResult.queueMessageLinkFetch(closure_2_3(function*(arg0, value) {
          let v1;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  const tmp5 = code;
                  if (null == invite.getInvite(code)) {
                    const obj2 = c1(closure_1_2[7]);
                    c1 = 1;
                    c0 = 1;
                    const obj5 = { value: obj2.resolveInvite(tmp5), done: false };
                    return obj5;
                  }
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
            } catch (tmp9) {
              c0 = 3;
              throw tmp9;
            }
          }
        }));
      } else if (content(tmp2[5]).CodedLinkType.TEMPLATE === type) {
        const tmpResult5 = content(tmp2[6]);
        const result1 = tmpResult5.queueMessageLinkFetch(closure_2_3(function*(arg0, value) {
          let v1;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  const tmp5 = code;
                  if (null == guildTemplate.getGuildTemplate(code)) {
                    const obj2 = c1(closure_1_2[8]);
                    c1 = 1;
                    c0 = 1;
                    const obj5 = { value: obj2.resolveGuildTemplate(tmp5), done: false };
                    return obj5;
                  }
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
            } catch (tmp9) {
              c0 = 3;
              throw tmp9;
            }
          }
        }));
      } else if (content(tmp2[5]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (content(tmp2[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (content(tmp2[5]).CodedLinkType.EVENT !== type) {
            if (content(tmp2[5]).CodedLinkType.CHANNEL_LINK !== type) {
              if (content(tmp2[5]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (content(tmp2[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (content(tmp2[5]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (content(tmp2[5]).CodedLinkType.SERVER_SHOP !== type) {
                      if (content(tmp2[5]).CodedLinkType.QUESTS_EMBED !== type) {
                        if (content(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                          if (content(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                            if (content(tmp2[5]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                              if (content(tmp2[5]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                if (content(tmp2[5]).CodedLinkType.EXPERIMENT !== type) {
                                  if (content(tmp2[5]).CodedLinkType.GAME_PROFILE !== type) {
                                    if (content(tmp2[5]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                      if (content(tmp2[5]).CodedLinkType.CONJURE_PROJECT !== type) {
                                        if (content(tmp2[5]).CodedLinkType.USER_WISHLIST !== type) {
                                          if (content(tmp2[5]).CodedLinkType.USER_PROFILE === type) {
                                            const tmp9 = closure_2_1;
                                            closure_2_1(tmp2[9])(code, channel_id);
                                          } else if (content(tmp2[5]).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                            const tmpResult6 = content(tmp2[10]);
                                            if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                              const tmpResult7 = content(tmp2[6]);
                                              const result2 = tmpResult7.queueMessageLinkFetch(closure_2_3(function*(arg0, value) {
                                                let closure_0;
                                                let v1;
                                                if (c2 === 2) {
                                                  c2 = 3;
                                                  throw new TypeError("Generator functions may not be called on executing generators");
                                                } else if (tmp2 === 3) {
                                                  if (arg0 === 1) {
                                                    throw value;
                                                  } else if (arg0 === 2) {
                                                    const obj2 = { value, done: true };
                                                    return obj2;
                                                  } else {
                                                    return { value: "HermesInternal", done: null };
                                                  }
                                                } else {
                                                  try {
                                                    c2 = 2;
                                                    if (0 === c1) {
                                                      if (arg0 === 1) {
                                                        c2 = 3;
                                                        throw value;
                                                      } else if (arg0 === 2) {
                                                        c2 = 3;
                                                        const obj3 = { value, done: true };
                                                        return obj3;
                                                      } else {
                                                        const useGameOrganizationInviteFetch = tmp3(c2[11]).useGameOrganizationInviteFetch;
                                                        const items = [code];
                                                        c1 = 1;
                                                        c2 = 1;
                                                        const obj4 = { value: useGameOrganizationInviteFetch.fetchMany(items), done: false };
                                                        return obj4;
                                                      }
                                                    } else if (arg0 === 1) {
                                                      c2 = 3;
                                                      throw value;
                                                    } else if (arg0 === 2) {
                                                      c2 = 3;
                                                      const obj = { value, done: true };
                                                      return obj;
                                                    } else {
                                                      const promise = c1(c2[12])(closure_128_0);
                                                      promise.catch(closure_1_6);
                                                      c2 = 3;
                                                      return { value: "HermesInternal", done: null };
                                                    }
                                                  } catch (tmp13) {
                                                    c2 = 3;
                                                    throw tmp13;
                                                  }
                                                }
                                              }));
                                            }
                                          } else {
                                            if (content(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                              if (content(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                                if (content(tmp2[5]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                  const tmpResult8 = content(tmp2[14]);
                                                  const embedApplication = tmpResult8.getEmbedApplication(code);
                                                } else {
                                                  const tmp3 = globalThis;
                                                  const _Error = Error;
                                                  const _HermesInternal = HermesInternal;
                                                  throw Error("Unknown coded link type: " + type);
                                                }
                                              }
                                            }
                                            let tmp5 = closure_2_1;
                                            closure_2_1(tmp2[13])(type, code);
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
      }
    });
  }
  const message_snapshots = content.message_snapshots;
  if (message_snapshots != null) {
    const item1 = message_snapshots.forEach((message) => {
      const channel_id = content.channel_id;
      const arr = findCodedLinksDefault(message.message.content);
      let tmp = null != arr;
      if (tmp) {
        tmp = 0 !== arr.length;
      }
      if (tmp) {
        const item = arr.forEach((item) => {
          let code;
          let type;
          ({ type, code } = item);
          const tmp2 = closure_2_2;
          if (content(closure_2_2[5]).CodedLinkType.INVITE === type) {
            const tmpResult = content(tmp2[6]);
            const result = tmpResult.queueMessageLinkFetch(closure_2_3(function*(arg0, value) {
              let v1;
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
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
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      const tmp5 = code;
                      if (null == invite.getInvite(code)) {
                        const obj2 = c1(closure_1_2[7]);
                        c1 = 1;
                        c0 = 1;
                        const obj5 = { value: obj2.resolveInvite(tmp5), done: false };
                        return obj5;
                      }
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
                } catch (tmp9) {
                  c0 = 3;
                  throw tmp9;
                }
              }
            }));
          } else if (content(tmp2[5]).CodedLinkType.TEMPLATE === type) {
            const tmpResult5 = content(tmp2[6]);
            const result1 = tmpResult5.queueMessageLinkFetch(closure_2_3(function*(arg0, value) {
              let v1;
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
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
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      const tmp5 = code;
                      if (null == guildTemplate.getGuildTemplate(code)) {
                        const obj2 = c1(closure_1_2[8]);
                        c1 = 1;
                        c0 = 1;
                        const obj5 = { value: obj2.resolveGuildTemplate(tmp5), done: false };
                        return obj5;
                      }
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
                } catch (tmp9) {
                  c0 = 3;
                  throw tmp9;
                }
              }
            }));
          } else if (content(tmp2[5]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (content(tmp2[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (content(tmp2[5]).CodedLinkType.EVENT !== type) {
                if (content(tmp2[5]).CodedLinkType.CHANNEL_LINK !== type) {
                  if (content(tmp2[5]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                    if (content(tmp2[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (content(tmp2[5]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (content(tmp2[5]).CodedLinkType.SERVER_SHOP !== type) {
                          if (content(tmp2[5]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (content(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (content(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (content(tmp2[5]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (content(tmp2[5]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (content(tmp2[5]).CodedLinkType.EXPERIMENT !== type) {
                                      if (content(tmp2[5]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (content(tmp2[5]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                          if (content(tmp2[5]).CodedLinkType.CONJURE_PROJECT !== type) {
                                            if (content(tmp2[5]).CodedLinkType.USER_WISHLIST !== type) {
                                              if (content(tmp2[5]).CodedLinkType.USER_PROFILE === type) {
                                                const tmp9 = closure_2_1;
                                                closure_2_1(tmp2[9])(code, channel_id);
                                              } else if (content(tmp2[5]).CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                                const tmpResult6 = content(tmp2[10]);
                                                if (tmpResult6.getLinkedGameOrgInvitesEnabled("MessageCodedLinkManager")) {
                                                  const tmpResult7 = content(tmp2[6]);
                                                  const result2 = tmpResult7.queueMessageLinkFetch(closure_2_3(function*(arg0, value) {
                                                    let closure_0;
                                                    let v1;
                                                    if (c2 === 2) {
                                                      c2 = 3;
                                                      throw new TypeError("Generator functions may not be called on executing generators");
                                                    } else if (tmp2 === 3) {
                                                      if (arg0 === 1) {
                                                        throw value;
                                                      } else if (arg0 === 2) {
                                                        const obj2 = { value, done: true };
                                                        return obj2;
                                                      } else {
                                                        return { value: "HermesInternal", done: null };
                                                      }
                                                    } else {
                                                      try {
                                                        c2 = 2;
                                                        if (0 === c1) {
                                                          if (arg0 === 1) {
                                                            c2 = 3;
                                                            throw value;
                                                          } else if (arg0 === 2) {
                                                            c2 = 3;
                                                            const obj3 = { value, done: true };
                                                            return obj3;
                                                          } else {
                                                            const useGameOrganizationInviteFetch = tmp3(c2[11]).useGameOrganizationInviteFetch;
                                                            const items = [code];
                                                            c1 = 1;
                                                            c2 = 1;
                                                            const obj4 = { value: useGameOrganizationInviteFetch.fetchMany(items), done: false };
                                                            return obj4;
                                                          }
                                                        } else if (arg0 === 1) {
                                                          c2 = 3;
                                                          throw value;
                                                        } else if (arg0 === 2) {
                                                          c2 = 3;
                                                          const obj = { value, done: true };
                                                          return obj;
                                                        } else {
                                                          const promise = c1(c2[12])(closure_128_0);
                                                          promise.catch(closure_1_6);
                                                          c2 = 3;
                                                          return { value: "HermesInternal", done: null };
                                                        }
                                                      } catch (tmp13) {
                                                        c2 = 3;
                                                        throw tmp13;
                                                      }
                                                    }
                                                  }));
                                                }
                                              } else {
                                                if (content(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                                  if (content(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                                    if (content(tmp2[5]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                                      const tmpResult8 = content(tmp2[14]);
                                                      const embedApplication = tmpResult8.getEmbedApplication(code);
                                                    } else {
                                                      const tmp3 = globalThis;
                                                      const _Error = Error;
                                                      const _HermesInternal = HermesInternal;
                                                      throw Error("Unknown coded link type: " + type);
                                                    }
                                                  }
                                                }
                                                let tmp5 = closure_2_1;
                                                closure_2_1(tmp2[13])(type, code);
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
          }
        });
      }
    });
  }
}
const NOOP = Constants.NOOP;
class MessageCodedLinkManager extends AutomaticLifecycleManager {
  constructor() {
    const tmp3 = new MessageCodedLinkManager(tmp2, tmp, new.target);
    setupLoadFromMessageManagerHandlersDefault(tmp3, resolveMessageCodedLinks);
    return tmp3;
  }
}
let tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, MessageCodedLinkManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, resolveMessageCodedLinks);
let result = size.fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp5;
