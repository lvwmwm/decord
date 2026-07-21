// Module ID: 12163
// Function ID: 93565
// Name: canSeeDevLinks
// Dependencies: []
// Exports: createCodedLinkEmbeds

// Module 12163 (canSeeDevLinks)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  message2 = message;
  const dependencyMap = channel;
  let closure_2 = forcedTheme;
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
        let obj = arg0(arg2[4]);
        if (obj.isApplicationCodedLink(type)) {
          if (null == arg2) {
            return null;
          } else {
            let appLinkGateResult = arg0;
            appLinkGateResult = arg2;
            if (obj28.isApplicationCodedLinkMobileSupported(type)) {
              const applicationCodedLinkData = arg0(arg2[4]).getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                appLinkGateResult = arg0;
                appLinkGateResult = arg2;
                obj = { appId: applicationCodedLinkData.applicationId };
                appLinkGateResult = arg2;
                obj.channel = arg2;
                appLinkGateResult = arg0;
                obj.message = arg0;
                appLinkGateResult = arg3;
                obj.theme = arg3;
                appLinkGateResult = arg0(arg2[5]).getAppLinkGateResult(obj);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  appLinkGateResult = arg0;
                  appLinkGateResult = arg2;
                  if (arg0(arg2[6]).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    obj = { theme: arg3, embedUrl: url, message: arg0, app, params: applicationCodedLinkData.params };
                    return arg0(arg2[7]).createActivityMessageEmbed(obj);
                  } else {
                    appLinkGateResult = arg0;
                    appLinkGateResult = arg2;
                    if (arg0(arg2[6]).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (arg0(arg2[6]).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    let obj1 = { theme: arg3, embedUrl: url, message: arg0, app };
                    return arg0(arg2[5]).createAppMessageEmbed(obj1);
                  }
                }
                const obj29 = arg0(arg2[5]);
              }
              const obj23 = arg0(arg2[4]);
            } else {
              return null;
            }
            const obj28 = arg0(arg2[4]);
          }
        } else {
          appLinkGateResult = arg0;
          if (arg0(arg2[6]).CodedLinkType.INVITE === type) {
            return arg0(arg2[8]).createInviteEmbed(arg0, code, arg3);
          } else if (arg0(arg2[6]).CodedLinkType.TEMPLATE === type) {
            return arg0(arg2[9]).createGuildTemplateEmbed(code, arg3);
          } else if (arg0(arg2[6]).CodedLinkType.BUILD_OVERRIDE === type) {
            return arg0(arg2[10]).createBuildOverrideEmbed(code, arg3);
          } else if (arg0(arg2[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
            let buildOverrideEmbed = null;
            if (callback()) {
              buildOverrideEmbed = arg0(arg2[10]).createBuildOverrideEmbed(code, arg3);
              const obj19 = arg0(arg2[10]);
            }
            return buildOverrideEmbed;
          } else if (arg0(arg2[6]).CodedLinkType.EVENT === type) {
            return arg0(arg2[11]).createGuildScheduledEventLinkEmbed(code, arg3);
          } else if (arg0(arg2[6]).CodedLinkType.CHANNEL_LINK === type) {
            return arg0(arg2[12]).createVoiceChannelLinkEmbed(code, arg3);
          } else if (arg0(arg2[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
            let obj2 = { theme: arg3, inviteCode: code };
            return arg0(arg2[13]).createEmbeddedActivityInviteEmbed(obj2);
          } else if (arg0(arg2[6]).CodedLinkType.EXPERIMENT === type) {
            let experimentEmbed = null;
            if (obj13.canSeeExperimentEmbeds()) {
              experimentEmbed = arg0(arg2[15]).createExperimentEmbed(url, arg3);
              const obj14 = arg0(arg2[15]);
            }
            return experimentEmbed;
          } else {
            if (arg0(arg2[6]).CodedLinkType.GUILD_PRODUCT !== type) {
              if (arg0(arg2[6]).CodedLinkType.SERVER_SHOP !== type) {
                if (arg0(arg2[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                  appLinkGateResult = arg2;
                  if (arg0(arg2[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                    appLinkGateResult = arg0;
                    appLinkGateResult = arg2;
                    if (arg0(arg2[6]).CodedLinkType.QUESTS_EMBED === type) {
                      obj2 = arg0(arg2[18]);
                      const obj3 = { theme: arg3, questId: code, currentUser: closure_3 };
                      return obj2.createQuestsEmbed(obj3);
                    } else {
                      if (arg0(arg2[6]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                        if (arg0(arg2[6]).CodedLinkType.GAME_PROFILE !== type) {
                          obj1 = arg0(arg2[19]);
                          return obj1.assertNever(type);
                        }
                      }
                      return null;
                    }
                  }
                }
                let obj4 = arg0(arg2[16]);
                obj4 = { location: "create_coded_link_embeds" };
                if (obj4.getIsEligibleForSocialLayerStorefrontMobilePurchasing(obj4)) {
                  if (type === arg0(arg2[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    [tmp28, tmp29] = arg3(code.split("-"), 2);
                    const tmp27 = arg3(code.split("-"), 2);
                    const obj5 = { skuId: tmp28 };
                    let obj6 = { type: "application", applicationId: tmp29 };
                    obj5.guildOrApplication = obj6;
                    obj5.theme = arg3;
                    return arg0(arg2[17]).createSocialLayerStorefrontProductDetailsEmbed(obj5);
                  } else {
                    [tmp21, tmp22] = arg3(code.split("-"), 2);
                    obj6 = arg0(arg2[17]);
                    const obj7 = { skuId: tmp21 };
                    const obj8 = { type: "guild", guildId: tmp22 };
                    obj7.guildOrApplication = obj8;
                    obj7.theme = arg3;
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
