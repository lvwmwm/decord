// Module ID: 12328
// Function ID: 95978
// Name: canSeeDevLinks
// Dependencies: [57, 3794, 1838, 1850, 5955, 11109, 4154, 12329, 12330, 12340, 12342, 12335, 12344, 12337, 10464, 10969, 7865, 10870, 12345, 1327, 2]
// Exports: createCodedLinkEmbeds

// Module 12328 (canSeeDevLinks)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function canSeeDevLinks() {
  const currentUser = authStore.getCurrentUser();
  let isStaffResult;
  if (null != currentUser) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    const currentUser1 = authStore.getCurrentUser();
    let isStaffPersonalResult;
    if (null != currentUser1) {
      isStaffPersonalResult = currentUser1.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  if (!isStaffResult) {
    let tmp5 = null != guild.getGuild("943265993613008967");
    if (tmp5) {
      tmp5 = !lurking.isLurking("943265993613008967");
    }
    isStaffResult = tmp5;
  }
  return isStaffResult;
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  let closure_0 = message;
  let closure_1 = channel;
  let _slicedToArray = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      const currentUser = authStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((arg0) => {
        let code;
        let tmp21;
        let tmp22;
        let tmp28;
        let tmp29;
        let type;
        let url;
        ({ type, code, url } = arg0);
        let obj = message(5955);
        if (obj.isApplicationCodedLink(type)) {
          if (null == dependencyMap) {
            return null;
          } else {
            let appLinkGateResult = message;
            appLinkGateResult = dependencyMap;
            if (obj28.isApplicationCodedLinkMobileSupported(type)) {
              const applicationCodedLinkData = message(5955).getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                appLinkGateResult = message;
                appLinkGateResult = dependencyMap;
                obj = { appId: applicationCodedLinkData.applicationId };
                appLinkGateResult = dependencyMap;
                obj.channel = dependencyMap;
                appLinkGateResult = message;
                obj.message = message;
                appLinkGateResult = callback;
                obj.theme = callback;
                appLinkGateResult = message(11109).getAppLinkGateResult(obj);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  appLinkGateResult = message;
                  appLinkGateResult = dependencyMap;
                  if (message(4154).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    obj = { theme: callback, embedUrl: url, message, app, params: applicationCodedLinkData.params };
                    return message(12329).createActivityMessageEmbed(obj);
                  } else {
                    appLinkGateResult = message;
                    appLinkGateResult = dependencyMap;
                    if (message(4154).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (message(4154).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    let obj1 = { theme: callback, embedUrl: url, message, app };
                    return message(11109).createAppMessageEmbed(obj1);
                  }
                }
                const obj29 = message(11109);
              }
              const obj23 = message(5955);
            } else {
              return null;
            }
            obj28 = message(5955);
          }
        } else {
          appLinkGateResult = message;
          if (message(4154).CodedLinkType.INVITE === type) {
            return message(12330).createInviteEmbed(message, code, callback);
          } else if (message(4154).CodedLinkType.TEMPLATE === type) {
            return message(12340).createGuildTemplateEmbed(code, callback);
          } else if (message(4154).CodedLinkType.BUILD_OVERRIDE === type) {
            return message(12342).createBuildOverrideEmbed(code, callback);
          } else if (message(4154).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
            let buildOverrideEmbed = null;
            if (outer1_6()) {
              buildOverrideEmbed = message(12342).createBuildOverrideEmbed(code, callback);
              const obj19 = message(12342);
            }
            return buildOverrideEmbed;
          } else if (message(4154).CodedLinkType.EVENT === type) {
            return message(12335).createGuildScheduledEventLinkEmbed(code, callback);
          } else if (message(4154).CodedLinkType.CHANNEL_LINK === type) {
            return message(12344).createVoiceChannelLinkEmbed(code, callback);
          } else if (message(4154).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
            let obj2 = { theme: callback, inviteCode: code };
            return message(12337).createEmbeddedActivityInviteEmbed(obj2);
          } else if (message(4154).CodedLinkType.EXPERIMENT === type) {
            let experimentEmbed = null;
            if (obj13.canSeeExperimentEmbeds()) {
              experimentEmbed = message(10969).createExperimentEmbed(url, callback);
              const obj14 = message(10969);
            }
            return experimentEmbed;
          } else {
            if (message(4154).CodedLinkType.GUILD_PRODUCT !== type) {
              if (message(4154).CodedLinkType.SERVER_SHOP !== type) {
                if (message(4154).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                  appLinkGateResult = dependencyMap;
                  if (message(4154).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                    appLinkGateResult = message;
                    appLinkGateResult = dependencyMap;
                    if (message(4154).CodedLinkType.QUESTS_EMBED === type) {
                      obj2 = message(12345);
                      const obj3 = { theme: callback, questId: code, currentUser: _isNativeReflectConstruct };
                      return obj2.createQuestsEmbed(obj3);
                    } else {
                      if (message(4154).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                        if (message(4154).CodedLinkType.GAME_PROFILE !== type) {
                          obj1 = message(1327);
                          return obj1.assertNever(type);
                        }
                      }
                      return null;
                    }
                  }
                }
                let obj4 = message(7865);
                obj4 = { location: "create_coded_link_embeds" };
                if (obj4.getIsEligibleForSocialLayerStorefrontMobilePurchasing(obj4)) {
                  if (type === message(4154).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    [tmp28, tmp29] = callback(code.split("-"), 2);
                    const tmp27 = callback(code.split("-"), 2);
                    const obj5 = { skuId: tmp28 };
                    let obj6 = { type: "application", applicationId: tmp29 };
                    obj5.guildOrApplication = obj6;
                    obj5.theme = callback;
                    return message(10870).createSocialLayerStorefrontProductDetailsEmbed(obj5);
                  } else {
                    [tmp21, tmp22] = callback(code.split("-"), 2);
                    obj6 = message(10870);
                    const obj7 = { skuId: tmp21 };
                    const obj8 = { type: "guild", guildId: tmp22 };
                    obj7.guildOrApplication = obj8;
                    obj7.theme = callback;
                    return obj6.createSocialLayerStorefrontProductDetailsEmbed(obj7);
                  }
                } else {
                  return null;
                }
              }
            }
            return null;
          }
        }
      });
    }
  }
  return [];
};
