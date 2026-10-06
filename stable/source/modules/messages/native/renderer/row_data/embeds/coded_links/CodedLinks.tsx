// Module ID: 12781
// Function ID: 12782
// Name: CodedLinks
// Dependencies: [32, 4473, 2073, 1378, 7107, 11295, 4822, 12782, 12783, 12793, 12795, 12788, 12797, 12790, 10883, 11159, 10894, 10892, 12798, 1376, 2]
// Exports: createCodedLinkEmbeds

// Module 12781 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1376 */;
import CodedLink from "CodedLink" /* 4822 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 7107 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 10883 */;
import createSocialLayerStorefrontProductDetailsEmbed2 from "createSocialLayerStorefrontProductDetailsEmbed" /* 10892 */;
import storefrontCodedLink from "storefrontCodedLink" /* 10894 */;
import ExperimentEmbed from "ExperimentEmbed" /* 11159 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 11295 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 12782 */;
import InviteEmbed from "InviteEmbed" /* 12783 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 12788 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 12790 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 12793 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 12795 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 12797 */;
import QuestEmbed from "QuestEmbed" /* 12798 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 4473 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  let closure_1 = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        let code;
        let obj9;
        let type;
        let url;
        ({ type, code, url } = item);
        const obj = ApplicationCodedLink;
        if (obj.isApplicationCodedLink(type)) {
          if (null == channel) {
            return null;
          } else {
            const tmpResult = ApplicationCodedLink;
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              const tmpResult18 = ApplicationCodedLink;
              const applicationCodedLinkData = tmpResult18.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const applicationId = applicationCodedLinkData.applicationId;
                const obj2 = { appId: applicationId, channel: tmp27, message, theme };
                const tmpResult19 = createAppMessageEmbed;
                const appLinkGateResult = tmpResult19.getAppLinkGateResult(obj2);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    const params = applicationCodedLinkData.params;
                    const obj3 = { theme, embedUrl: url, message, app, params };
                    const tmpResult20 = createActivityMessageEmbed;
                    return tmpResult20.createActivityMessageEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme, embedUrl: url, message, app };
                    const tmpResult21 = createAppMessageEmbed;
                    return tmpResult21.createAppMessageEmbed(obj4);
                  }
                }
              }
            } else {
              return null;
            }
          }
        } else if (CodedLink.CodedLinkType.INVITE === type) {
          const tmpResult22 = InviteEmbed;
          return tmpResult22.createInviteEmbed(message, code, theme);
        } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
          const tmpResult23 = GuildTemplateEmbed;
          return tmpResult23.createGuildTemplateEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.BUILD_OVERRIDE === type) {
          const tmpResult24 = BuildOverrideEmbed;
          return tmpResult24.createBuildOverrideEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          const obj14 = UserStore;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = obj14.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            isStaffResult = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
            const tmp19 = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            const tmpResult25 = BuildOverrideEmbed;
            buildOverrideEmbed = tmpResult25.createBuildOverrideEmbed(code, theme);
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          const tmpResult26 = GuildScheduledEventEmbed;
          return tmpResult26.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          const tmpResult27 = VoiceChannelLinkEmbed;
          return tmpResult27.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          const tmpResult28 = EmbeddedActivityInviteEmbed;
          return tmpResult28.createEmbeddedActivityInviteEmbed(obj5);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          const tmpResult29 = useCodedLinksExperimentEmbeds;
          if (tmpResult29.canSeeExperimentEmbeds()) {
            const tmpResult30 = ExperimentEmbed;
            experimentEmbed = tmpResult30.createExperimentEmbed(url, theme);
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    const tmpResult31 = QuestEmbed;
                    return tmpResult31.createQuestsEmbed(obj6);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                            const tmpResult32 = GlobalUtils;
                            return tmpResult32.assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const tmpResult33 = storefrontCodedLink;
              const result = tmpResult33.parseStorefrontCodedLink(code);
              if (null != result) {
                if (result.skuIds.length <= 1) {
                  const first = _slicedToArray(result.skuIds, 1)[0];
                  const obj7 = { skuId: first, guildOrApplication: obj9, theme };
                  const createSocialLayerStorefrontProductDetailsEmbed = createSocialLayerStorefrontProductDetailsEmbed2.createSocialLayerStorefrontProductDetailsEmbed;
                  createSocialLayerStorefrontProductDetailsEmbed2;
                  if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                    obj9 = { type: "application", applicationId: result.scopeId };
                    const obj8 = { type: "application", applicationId: result.scopeId };
                  } else {
                    obj9 = { type: "guild", guildId: result.scopeId };
                  }
                  return createSocialLayerStorefrontProductDetailsEmbed(obj7);
                }
              }
              return null;
            }
          }
          return null;
        }
      });
    }
  }
  return [];
};
