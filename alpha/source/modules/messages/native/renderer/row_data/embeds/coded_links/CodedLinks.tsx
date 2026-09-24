// Module ID: 13609
// Function ID: 13610
// Name: CodedLinks
// Dependencies: [32, 4465, 2066, 1372, 8013, 12280, 4817, 13610, 13611, 13621, 13623, 13616, 13625, 13618, 11820, 12149, 13333, 11868, 13626, 1370, 2]
// Exports: createCodedLinkEmbeds

// Module 13609 (CodedLinks)
import ApplicationCodedLink from "ApplicationCodedLink" /* 8013 */;
import _slicedToArray from "module_32" /* 32 */;
import LurkingStore from "LurkingStore" /* 4465 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  closure_1 = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        ({ type, code, url } = item);
        if (obj.isApplicationCodedLink(type)) {
          if (null == closure_1) {
            return null;
          } else {
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              const applicationCodedLinkData = tmp(8013).getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const obj2 = { appId: applicationCodedLinkData.applicationId, channel: tmp27, message, theme };
                const appLinkGateResult = tmp(12280).getAppLinkGateResult(obj2);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (tmp(4817).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    const obj3 = { theme: tmp32, embedUrl: url, message: tmp31, app, params: applicationCodedLinkData.params };
                    return tmp(13610).createActivityMessageEmbed(obj3);
                  } else {
                    if (tmp(4817).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (tmp(4817).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme: tmp32, embedUrl: url, message: tmp31, app };
                    return tmp(12280).createAppMessageEmbed(obj4);
                  }
                }
                const tmpResult19 = tmp(12280);
              }
              const tmpResult18 = tmp(8013);
            } else {
              return null;
            }
            tmpResult = tmp(8013);
          }
        } else if (tmp(4817).CodedLinkType.INVITE === type) {
          return tmp(13611).createInviteEmbed(message, code, theme);
        } else if (tmp(4817).CodedLinkType.TEMPLATE === type) {
          return tmp(13621).createGuildTemplateEmbed(code, theme);
        } else if (tmp(4817).CodedLinkType.BUILD_OVERRIDE === type) {
          return tmp(13623).createBuildOverrideEmbed(code, theme);
        } else if (tmp(4817).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = UserStore.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            let tmp19 = null != GuildStore.getGuild("943265993613008967");
            if (tmp19) {
              tmp19 = !LurkingStore.isLurking("943265993613008967");
            }
            isStaffResult = tmp19;
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            buildOverrideEmbed = tmp(13623).createBuildOverrideEmbed(code, theme);
            const tmpResult25 = tmp(13623);
          }
          return buildOverrideEmbed;
        } else if (tmp(4817).CodedLinkType.EVENT === type) {
          return tmp(13616).createGuildScheduledEventLinkEmbed(code, theme);
        } else if (tmp(4817).CodedLinkType.CHANNEL_LINK === type) {
          return tmp(13625).createVoiceChannelLinkEmbed(code, theme);
        } else if (tmp(4817).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          return tmp(13618).createEmbeddedActivityInviteEmbed(obj5);
        } else if (tmp(4817).CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult29.canSeeExperimentEmbeds()) {
            experimentEmbed = tmp(12149).createExperimentEmbed(url, theme);
            const tmpResult30 = tmp(12149);
          }
          return experimentEmbed;
        } else {
          if (tmp(4817).CodedLinkType.GUILD_PRODUCT !== type) {
            if (tmp(4817).CodedLinkType.SERVER_SHOP !== type) {
              if (tmp(4817).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (tmp(4817).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (tmp(4817).CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    return tmp(13626).createQuestsEmbed(obj6);
                  } else {
                    if (tmp(4817).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (tmp(4817).CodedLinkType.GAME_PROFILE !== type) {
                        if (tmp(4817).CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (tmp(4817).CodedLinkType.USER_PROFILE !== type) {
                            return tmp(1370).assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const result = tmp(13333).parseStorefrontCodedLink(code);
              if (null != result) {
                if (result.skuIds.length <= 1) {
                  const obj7 = { skuId: _slicedToArray(result.skuIds, 1)[0], guildOrApplication: null, theme: null };
                  if (type === tmp(4817).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    const obj8 = { type: "application", applicationId: result.scopeId };
                    let obj9 = obj8;
                  } else {
                    obj9 = { type: "guild", guildId: result.scopeId };
                  }
                  obj7.guildOrApplication = obj9;
                  obj7.theme = theme;
                  return tmp(11868).createSocialLayerStorefrontProductDetailsEmbed(obj7);
                }
              }
              return null;
            }
          }
          return null;
        }
        obj = ApplicationCodedLink;
      });
    }
  }
  return [];
};
