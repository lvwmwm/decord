// Module ID: 17184
// Function ID: 17185
// Name: MessageCodedLinkManager
// Dependencies: [5, 6881, 2051, 4818, 4817, 4822, 17185, 7830, 6743, 17192, 11429, 6540, 17194, 2]

// Module 17184 (MessageCodedLinkManager)
import findCodedLinksDefault from "findCodedLinks" /* 4817 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17194 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6881 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import InviteStore from "InviteStore" /* 4818 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let c0, c1;

let tmp;
let tmp2;
let tmp3;
function resolveMessageCodedLinks(content) {
  const f129449 = (item) => {
    let code;
    let type;
    ({ type, code } = item);
    const tmp2 = closure_2;
    if (code(closure_2[5]).CodedLinkType.INVITE === type) {
      const tmp9 = closure_3;
      const tmpResult = code(tmp2[6]);
      const result = tmpResult.queueMessageLinkFetch(closure_3(function*(arg0, value) {
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
            return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
          } catch (tmp9) {
            c0 = 3;
            throw tmp9;
          }
        }
      }));
    } else if (code(tmp2[5]).CodedLinkType.TEMPLATE === type) {
      const tmpResult3 = code(tmp2[6]);
      const result1 = tmpResult3.queueMessageLinkFetch(closure_3(function*(arg0, value) {
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
            return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
          } catch (tmp9) {
            c0 = 3;
            throw tmp9;
          }
        }
      }));
    } else if (code(tmp2[5]).CodedLinkType.BUILD_OVERRIDE !== type) {
      if (code(tmp2[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
        if (code(tmp2[5]).CodedLinkType.EVENT !== type) {
          if (code(tmp2[5]).CodedLinkType.CHANNEL_LINK !== type) {
            if (code(tmp2[5]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
              if (code(tmp2[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                if (code(tmp2[5]).CodedLinkType.GUILD_PRODUCT !== type) {
                  if (code(tmp2[5]).CodedLinkType.SERVER_SHOP !== type) {
                    if (code(tmp2[5]).CodedLinkType.QUESTS_EMBED !== type) {
                      if (code(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                        if (code(tmp2[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                          if (code(tmp2[5]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                            if (code(tmp2[5]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                              if (code(tmp2[5]).CodedLinkType.EXPERIMENT !== type) {
                                if (code(tmp2[5]).CodedLinkType.GAME_PROFILE !== type) {
                                  if (code(tmp2[5]).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                    if (code(tmp2[5]).CodedLinkType.USER_PROFILE !== type) {
                                      if (code(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                                        if (code(tmp2[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                                          if (code(tmp2[5]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                            const tmpResult4 = code(tmp2[10]);
                                            const embedApplication = tmpResult4.getEmbedApplication(code);
                                          } else {
                                            const _Error = Error;
                                            const _HermesInternal = HermesInternal;
                                            throw Error("Unknown coded link type: " + type);
                                          }
                                        }
                                      }
                                      let tmp5 = closure_1;
                                      closure_1(tmp2[9])(type, code);
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
  };
  let closure_0 = content;
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
    let item = arr.forEach(f129449);
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
        const item = arr.forEach(f129449);
      }
    });
  }
}
class MessageCodedLinkManager extends AutomaticLifecycleManager {
  constructor() {
    const tmp3 = new MessageCodedLinkManager(tmp2, tmp, new.target);
    setupLoadFromMessageManagerHandlersDefault(tmp3, resolveMessageCodedLinks);
    return tmp3;
  }
}
let tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, MessageCodedLinkManager, importDefault);
let tmp9 = setupLoadFromMessageManagerHandlersDefault(tmp5, resolveMessageCodedLinks);
let result = size.fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp5;
