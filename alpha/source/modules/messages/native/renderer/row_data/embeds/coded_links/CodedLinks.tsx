// Module ID: 13437
// Function ID: 13438
// Name: CodedLinks
// Dependencies: [32, 4710, 2086, 1390, 7371, 11560, 5076, 13438, 13439, 13449, 13451, 13444, 13453, 13446, 10638, 11320, 10651, 10649, 13454, 13456, 13457, 1388, 2]
// Exports: createCodedLinkEmbeds

// Module 13437 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import CodedLink from "CodedLink" /* 5076 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 7371 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 10638 */;
import createSocialLayerStorefrontProductDetailsEmbed2 from "createSocialLayerStorefrontProductDetailsEmbed" /* 10649 */;
import storefrontCodedLink from "storefrontCodedLink" /* 10651 */;
import ExperimentEmbed from "ExperimentEmbed" /* 11320 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 11560 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 13438 */;
import InviteEmbed from "InviteEmbed" /* 13439 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 13444 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 13446 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 13449 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 13451 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 13453 */;
import QuestEmbed from "QuestEmbed" /* 13454 */;
import LinkedGameOrgInvitesExperiment from "LinkedGameOrgInvitesExperiment" /* 13456 */;
import GameOrganizationInviteEmbed from "GameOrganizationInviteEmbed" /* 13457 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 4710 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;
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
              const tmpResult20 = ApplicationCodedLink;
              const applicationCodedLinkData = tmpResult20.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const applicationId = applicationCodedLinkData.applicationId;
                const obj2 = { appId: applicationId, channel: tmp29, message, theme };
                const tmpResult21 = createAppMessageEmbed;
                const appLinkGateResult = tmpResult21.getAppLinkGateResult(obj2);
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
                    const tmpResult22 = createActivityMessageEmbed;
                    return tmpResult22.createActivityMessageEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme, embedUrl: url, message, app };
                    const tmpResult23 = createAppMessageEmbed;
                    return tmpResult23.createAppMessageEmbed(obj4);
                  }
                }
              }
            } else {
              return null;
            }
          }
        } else if (CodedLink.CodedLinkType.INVITE === type) {
          const tmpResult24 = InviteEmbed;
          return tmpResult24.createInviteEmbed(message, code, theme);
        } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
          const tmpResult25 = GuildTemplateEmbed;
          return tmpResult25.createGuildTemplateEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.BUILD_OVERRIDE === type) {
          const tmpResult26 = BuildOverrideEmbed;
          return tmpResult26.createBuildOverrideEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          const obj16 = UserStore;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = obj16.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            isStaffResult = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
            const tmp21 = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            const tmpResult27 = BuildOverrideEmbed;
            buildOverrideEmbed = tmpResult27.createBuildOverrideEmbed(code, theme);
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          const tmpResult28 = GuildScheduledEventEmbed;
          return tmpResult28.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          const tmpResult29 = VoiceChannelLinkEmbed;
          return tmpResult29.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          const tmpResult30 = EmbeddedActivityInviteEmbed;
          return tmpResult30.createEmbeddedActivityInviteEmbed(obj5);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          const tmpResult31 = useCodedLinksExperimentEmbeds;
          if (tmpResult31.canSeeExperimentEmbeds()) {
            const tmpResult32 = ExperimentEmbed;
            experimentEmbed = tmpResult32.createExperimentEmbed(url, theme);
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    const tmpResult33 = QuestEmbed;
                    return tmpResult33.createQuestsEmbed(obj6);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                            if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                              let gameOrganizationInviteEmbed = null;
                              const tmpResult34 = LinkedGameOrgInvitesExperiment;
                              if (tmpResult34.getLinkedGameOrgInvitesEnabled("mobile_coded_link_embed")) {
                                const tmpResult35 = GameOrganizationInviteEmbed;
                                gameOrganizationInviteEmbed = tmpResult35.createGameOrganizationInviteEmbed(code, theme);
                              }
                              return gameOrganizationInviteEmbed;
                            } else {
                              const tmpResult36 = GlobalUtils;
                              return tmpResult36.assertNever(type);
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const tmpResult37 = storefrontCodedLink;
              const result = tmpResult37.parseStorefrontCodedLink(code);
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
