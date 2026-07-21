// Module ID: 15967
// Function ID: 122470
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15967 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resolveMessageCodedLinks(content) {
  const arr = importDefault(dependencyMap[8])(content.content);
  let tmp = null != arr;
  if (tmp) {
    tmp = 0 !== arr.length;
  }
  if (tmp) {
    const item = arr.forEach((arg0) => {
      let code;
      let type;
      ({ type, code } = arg0);
      if (code(closure_2[9]).CodedLinkType.INVITE === type) {
        // CreateGeneratorClosureLongIndex (0x67)
        const result = code(closure_2[10]).queueMessageLinkFetch(callback(tmp));
        const obj3 = code(closure_2[10]);
      } else if (code(closure_2[9]).CodedLinkType.TEMPLATE === type) {
        // CreateGeneratorClosureLongIndex (0x67)
        const result1 = code(closure_2[10]).queueMessageLinkFetch(callback(tmp8));
        const obj2 = code(closure_2[10]);
      } else if (code(closure_2[9]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (code(closure_2[9]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (code(closure_2[9]).CodedLinkType.EVENT !== type) {
            if (code(closure_2[9]).CodedLinkType.CHANNEL_LINK !== type) {
              if (code(closure_2[9]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (code(closure_2[9]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (code(closure_2[9]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (code(closure_2[9]).CodedLinkType.SERVER_SHOP !== type) {
                      if (code(closure_2[9]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                        if (code(closure_2[9]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                          if (code(closure_2[9]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (code(closure_2[9]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (code(closure_2[9]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (code(closure_2[9]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (code(closure_2[9]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (code(closure_2[9]).CodedLinkType.EXPERIMENT !== type) {
                                      if (code(closure_2[9]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (code(closure_2[9]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                          const embedApplication = code(closure_2[13]).getEmbedApplication(code);
                                          const obj = code(closure_2[13]);
                                        } else {
                                          const _Error = Error;
                                          const _HermesInternal = HermesInternal;
                                          throw Error("Unknown coded link type: " + type);
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
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let tmp2 = (arg0) => {
  class MessageCodedLinkManager {
    constructor() {
      self = this;
      tmp = closure_4(this, MessageCodedLinkManager);
      obj = closure_6(MessageCodedLinkManager);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp7 = closure_1(closure_2[14])(tmp2Result, closure_12);
      return tmp2Result;
    }
  }
  const arg1 = MessageCodedLinkManager;
  callback2(MessageCodedLinkManager, arg0);
  return callback(MessageCodedLinkManager);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp2;
