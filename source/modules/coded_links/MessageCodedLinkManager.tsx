// Module ID: 16143
// Function ID: 125053
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 5, 6693, 4115, 4114, 4119, 16144, 7540, 5718, 11221, 16151, 5078, 2]

// Module 16143 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resolveMessageCodedLinks(content) {
  const arr = importDefault(4114)(content.content);
  let tmp = null != arr;
  if (tmp) {
    tmp = 0 !== arr.length;
  }
  if (tmp) {
    const item = arr.forEach((arg0) => {
      let code;
      let type;
      ({ type, code } = arg0);
      if (outer1_0(outer1_2[9]).CodedLinkType.INVITE === type) {
        // CreateGeneratorClosureLongIndex (0x67)
        const result = outer1_0(outer1_2[10]).queueMessageLinkFetch(outer1_8(tmp));
        const obj3 = outer1_0(outer1_2[10]);
      } else if (outer1_0(outer1_2[9]).CodedLinkType.TEMPLATE === type) {
        // CreateGeneratorClosureLongIndex (0x67)
        const result1 = outer1_0(outer1_2[10]).queueMessageLinkFetch(outer1_8(tmp8));
        const obj2 = outer1_0(outer1_2[10]);
      } else if (outer1_0(outer1_2[9]).CodedLinkType.BUILD_OVERRIDE !== type) {
        if (outer1_0(outer1_2[9]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (outer1_0(outer1_2[9]).CodedLinkType.EVENT !== type) {
            if (outer1_0(outer1_2[9]).CodedLinkType.CHANNEL_LINK !== type) {
              if (outer1_0(outer1_2[9]).CodedLinkType.ACTIVITY_BOOKMARK !== type) {
                if (outer1_0(outer1_2[9]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                  if (outer1_0(outer1_2[9]).CodedLinkType.GUILD_PRODUCT !== type) {
                    if (outer1_0(outer1_2[9]).CodedLinkType.SERVER_SHOP !== type) {
                      if (outer1_0(outer1_2[9]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                        if (outer1_0(outer1_2[9]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                          if (outer1_0(outer1_2[9]).CodedLinkType.QUESTS_EMBED !== type) {
                            if (outer1_0(outer1_2[9]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (outer1_0(outer1_2[9]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (outer1_0(outer1_2[9]).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                  if (outer1_0(outer1_2[9]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (outer1_0(outer1_2[9]).CodedLinkType.EXPERIMENT !== type) {
                                      if (outer1_0(outer1_2[9]).CodedLinkType.GAME_PROFILE !== type) {
                                        if (outer1_0(outer1_2[9]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                                          const embedApplication = outer1_0(outer1_2[13]).getEmbedApplication(code);
                                          const obj = outer1_0(outer1_2[13]);
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
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/coded_links/MessageCodedLinkManager.tsx");

export default tmp2;
