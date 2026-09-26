// Module ID: 12780
// Function ID: 12781
// Name: CodedLinks
// Dependencies: [32, 4470, 2067, 1372, 7103, 11420, 4821, 12781, 12782, 12792, 12794, 12787, 12796, 12789, 11015, 11285, 11026, 11024, 12797, 1370, 2]
// Exports: createCodedLinkEmbeds

// Module 12780 (CodedLinks)
import ApplicationCodedLink from "ApplicationCodedLink" /* 7103 */;
import _slicedToArray from "module_32" /* 32 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import GuildStore from "GuildStore" /* 2067 */;
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
              const applicationCodedLinkData = tmp(7103).getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const obj2 = { appId: applicationCodedLinkData.applicationId, channel: tmp27, message, theme };
                const appLinkGateResult = tmp(11420).getAppLinkGateResult(obj2);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (tmp(4821).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    const obj3 = { theme: tmp32, embedUrl: url, message: tmp31, app, params: applicationCodedLinkData.params };
                    return tmp(12781).createActivityMessageEmbed(obj3);
                  } else {
                    if (tmp(4821).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (tmp(4821).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme: tmp32, embedUrl: url, message: tmp31, app };
                    return tmp(11420).createAppMessageEmbed(obj4);
                  }
                }
                const tmpResult19 = tmp(11420);
              }
              const tmpResult18 = tmp(7103);
            } else {
              return null;
            }
            tmpResult = tmp(7103);
          }
        } else if (tmp(4821).CodedLinkType.INVITE === type) {
          return tmp(12782).createInviteEmbed(message, code, theme);
        } else if (tmp(4821).CodedLinkType.TEMPLATE === type) {
          return tmp(12792).createGuildTemplateEmbed(code, theme);
        } else if (tmp(4821).CodedLinkType.BUILD_OVERRIDE === type) {
          return tmp(12794).createBuildOverrideEmbed(code, theme);
        } else if (tmp(4821).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
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
            buildOverrideEmbed = tmp(12794).createBuildOverrideEmbed(code, theme);
            const tmpResult25 = tmp(12794);
          }
          return buildOverrideEmbed;
        } else if (tmp(4821).CodedLinkType.EVENT === type) {
          return tmp(12787).createGuildScheduledEventLinkEmbed(code, theme);
        } else if (tmp(4821).CodedLinkType.CHANNEL_LINK === type) {
          return tmp(12796).createVoiceChannelLinkEmbed(code, theme);
        } else if (tmp(4821).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          return tmp(12789).createEmbeddedActivityInviteEmbed(obj5);
        } else if (tmp(4821).CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult29.canSeeExperimentEmbeds()) {
            experimentEmbed = tmp(11285).createExperimentEmbed(url, theme);
            const tmpResult30 = tmp(11285);
          }
          return experimentEmbed;
        } else {
          if (tmp(4821).CodedLinkType.GUILD_PRODUCT !== type) {
            if (tmp(4821).CodedLinkType.SERVER_SHOP !== type) {
              if (tmp(4821).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (tmp(4821).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (tmp(4821).CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    return tmp(12797).createQuestsEmbed(obj6);
                  } else {
                    if (tmp(4821).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (tmp(4821).CodedLinkType.GAME_PROFILE !== type) {
                        if (tmp(4821).CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (tmp(4821).CodedLinkType.USER_PROFILE !== type) {
                            return tmp(1370).assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const result = tmp(11026).parseStorefrontCodedLink(code);
              if (null != result) {
                if (result.skuIds.length <= 1) {
                  const obj7 = { skuId: _slicedToArray(result.skuIds, 1)[0], guildOrApplication: null, theme: null };
                  if (type === tmp(4821).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    const obj8 = { type: "application", applicationId: result.scopeId };
                    let obj9 = obj8;
                  } else {
                    obj9 = { type: "guild", guildId: result.scopeId };
                  }
                  obj7.guildOrApplication = obj9;
                  obj7.theme = theme;
                  return tmp(11024).createSocialLayerStorefrontProductDetailsEmbed(obj7);
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
