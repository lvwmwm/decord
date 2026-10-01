// Module ID: 12984
// Function ID: 12985
// Name: CodedLinks
// Dependencies: [32, 4499, 2066, 1372, 7276, 11631, 4830, 12985, 12986, 12996, 12998, 12991, 13000, 12993, 11224, 11498, 11235, 11233, 13001, 1370, 2]
// Exports: createCodedLinkEmbeds

// Module 12984 (CodedLinks)
import ApplicationCodedLink from "ApplicationCodedLink" /* 7276 */;
import _slicedToArray from "module_32" /* 32 */;
import LurkingStore from "LurkingStore" /* 4499 */;
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
              const applicationCodedLinkData = tmp(7276).getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const obj2 = { appId: applicationCodedLinkData.applicationId, channel: tmp27, message, theme };
                const appLinkGateResult = tmp(11631).getAppLinkGateResult(obj2);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (tmp(4830).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    const obj3 = { theme: tmp32, embedUrl: url, message: tmp31, app, params: applicationCodedLinkData.params };
                    return tmp(12985).createActivityMessageEmbed(obj3);
                  } else {
                    if (tmp(4830).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (tmp(4830).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme: tmp32, embedUrl: url, message: tmp31, app };
                    return tmp(11631).createAppMessageEmbed(obj4);
                  }
                }
                const tmpResult19 = tmp(11631);
              }
              const tmpResult18 = tmp(7276);
            } else {
              return null;
            }
            tmpResult = tmp(7276);
          }
        } else if (tmp(4830).CodedLinkType.INVITE === type) {
          return tmp(12986).createInviteEmbed(message, code, theme);
        } else if (tmp(4830).CodedLinkType.TEMPLATE === type) {
          return tmp(12996).createGuildTemplateEmbed(code, theme);
        } else if (tmp(4830).CodedLinkType.BUILD_OVERRIDE === type) {
          return tmp(12998).createBuildOverrideEmbed(code, theme);
        } else if (tmp(4830).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
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
            buildOverrideEmbed = tmp(12998).createBuildOverrideEmbed(code, theme);
            const tmpResult25 = tmp(12998);
          }
          return buildOverrideEmbed;
        } else if (tmp(4830).CodedLinkType.EVENT === type) {
          return tmp(12991).createGuildScheduledEventLinkEmbed(code, theme);
        } else if (tmp(4830).CodedLinkType.CHANNEL_LINK === type) {
          return tmp(13000).createVoiceChannelLinkEmbed(code, theme);
        } else if (tmp(4830).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          return tmp(12993).createEmbeddedActivityInviteEmbed(obj5);
        } else if (tmp(4830).CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult29.canSeeExperimentEmbeds()) {
            experimentEmbed = tmp(11498).createExperimentEmbed(url, theme);
            const tmpResult30 = tmp(11498);
          }
          return experimentEmbed;
        } else {
          if (tmp(4830).CodedLinkType.GUILD_PRODUCT !== type) {
            if (tmp(4830).CodedLinkType.SERVER_SHOP !== type) {
              if (tmp(4830).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (tmp(4830).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (tmp(4830).CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    return tmp(13001).createQuestsEmbed(obj6);
                  } else {
                    if (tmp(4830).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (tmp(4830).CodedLinkType.GAME_PROFILE !== type) {
                        if (tmp(4830).CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (tmp(4830).CodedLinkType.USER_PROFILE !== type) {
                            if (tmp(4830).CodedLinkType.GAME_ORGANIZATION_INVITE !== type) {
                              return tmp(1370).assertNever(type);
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const result = tmp(11235).parseStorefrontCodedLink(code);
              if (null != result) {
                if (result.skuIds.length <= 1) {
                  const obj7 = { skuId: _slicedToArray(result.skuIds, 1)[0], guildOrApplication: null, theme: null };
                  if (type === tmp(4830).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    const obj8 = { type: "application", applicationId: result.scopeId };
                    let obj9 = obj8;
                  } else {
                    obj9 = { type: "guild", guildId: result.scopeId };
                  }
                  obj7.guildOrApplication = obj9;
                  obj7.theme = theme;
                  return tmp(11233).createSocialLayerStorefrontProductDetailsEmbed(obj7);
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
