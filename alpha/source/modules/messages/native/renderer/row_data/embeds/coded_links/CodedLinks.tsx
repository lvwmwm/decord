// Module ID: 15348
// Function ID: 15349
// Name: CodedLinks
// Dependencies: [32, 5076, 5014, 1385, 7978, 13936, 5889, 15349, 15350, 15361, 15363, 15355, 15365, 15358, 11746, 13465, 11760, 15366, 15369, 15370, 11826, 15372, 1380, 2]
// Exports: createCodedLinkEmbeds

// Module 15348 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import CodedLink from "CodedLink" /* 5889 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 7978 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 11746 */;
import storefrontCodedLink from "storefrontCodedLink" /* 11760 */;
import LinkedGameOrgInvitesExperiment from "LinkedGameOrgInvitesExperiment" /* 11826 */;
import ExperimentEmbed from "ExperimentEmbed" /* 13465 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 13936 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 15349 */;
import InviteEmbed from "InviteEmbed" /* 15350 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 15355 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 15358 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 15361 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 15363 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 15365 */;
import createSocialLayerStorefrontMultiSkuEmbed2 from "createSocialLayerStorefrontMultiSkuEmbed" /* 15366 */;
import createSocialLayerStorefrontProductDetailsEmbed2 from "createSocialLayerStorefrontProductDetailsEmbed" /* 15369 */;
import QuestEmbed from "QuestEmbed" /* 15370 */;
import GameOrganizationInviteEmbed from "GameOrganizationInviteEmbed" /* 15372 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 5076 */;
import GuildStore from "GuildStore" /* 5014 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  let closure_1 = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        let code;
        let obj12;
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
              const tmpResult21 = ApplicationCodedLink;
              const applicationCodedLinkData = tmpResult21.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const applicationId = applicationCodedLinkData.applicationId;
                const obj2 = { appId: applicationId, channel: tmp33, message, theme };
                const tmpResult22 = createAppMessageEmbed;
                const appLinkGateResult = tmpResult22.getAppLinkGateResult(obj2);
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
                    const tmpResult23 = createActivityMessageEmbed;
                    return tmpResult23.createActivityMessageEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme, embedUrl: url, message, app };
                    const tmpResult24 = createAppMessageEmbed;
                    return tmpResult24.createAppMessageEmbed(obj4);
                  }
                }
              }
            } else {
              return null;
            }
          }
        } else if (CodedLink.CodedLinkType.INVITE === type) {
          const tmpResult25 = InviteEmbed;
          return tmpResult25.createInviteEmbed(message, code, theme);
        } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
          const tmpResult26 = GuildTemplateEmbed;
          return tmpResult26.createGuildTemplateEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.BUILD_OVERRIDE === type) {
          const tmpResult27 = BuildOverrideEmbed;
          return tmpResult27.createBuildOverrideEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          const obj18 = UserStore;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = obj18.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            isStaffResult = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
            const tmp25 = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            const tmpResult28 = BuildOverrideEmbed;
            buildOverrideEmbed = tmpResult28.createBuildOverrideEmbed(code, theme);
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          const tmpResult29 = GuildScheduledEventEmbed;
          return tmpResult29.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          const tmpResult30 = VoiceChannelLinkEmbed;
          return tmpResult30.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          const tmpResult31 = EmbeddedActivityInviteEmbed;
          return tmpResult31.createEmbeddedActivityInviteEmbed(obj5);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          const tmpResult32 = useCodedLinksExperimentEmbeds;
          if (tmpResult32.canSeeExperimentEmbeds()) {
            const tmpResult33 = ExperimentEmbed;
            experimentEmbed = tmpResult33.createExperimentEmbed(url, theme);
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    const tmpResult34 = QuestEmbed;
                    return tmpResult34.createQuestsEmbed(obj6);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                            if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                              let gameOrganizationInviteEmbed = null;
                              const tmpResult35 = LinkedGameOrgInvitesExperiment;
                              if (tmpResult35.getLinkedGameOrgInvitesEnabled("mobile_coded_link_embed")) {
                                let id;
                                const createGameOrganizationInviteEmbed = GameOrganizationInviteEmbed.createGameOrganizationInviteEmbed;
                                GameOrganizationInviteEmbed;
                                const tmp6 = theme;
                                if (currentUser != null) {
                                  id = currentUser.id;
                                }
                                gameOrganizationInviteEmbed = createGameOrganizationInviteEmbed(code, tmp6, id);
                              }
                              return gameOrganizationInviteEmbed;
                            } else {
                              const tmpResult37 = GlobalUtils;
                              return tmpResult37.assertNever(type);
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const tmpResult38 = storefrontCodedLink;
              const result = tmpResult38.parseStorefrontCodedLink(code);
              if (null == result) {
                return null;
              } else if (result.skuIds.length > 1) {
                const obj7 = { skuIds: result.skuIds, guildOrApplication: obj9 };
                const createSocialLayerStorefrontMultiSkuEmbed = createSocialLayerStorefrontMultiSkuEmbed2.createSocialLayerStorefrontMultiSkuEmbed;
                createSocialLayerStorefrontMultiSkuEmbed2;
                if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                  obj9 = { type: "application", applicationId: result.scopeId };
                  const obj8 = { type: "application", applicationId: result.scopeId };
                } else {
                  obj9 = { type: "guild", guildId: result.scopeId };
                }
                return createSocialLayerStorefrontMultiSkuEmbed(obj7);
              } else {
                const first = _slicedToArray(result.skuIds, 1)[0];
                const obj10 = { skuId: first, guildOrApplication: obj12, theme };
                const createSocialLayerStorefrontProductDetailsEmbed = createSocialLayerStorefrontProductDetailsEmbed2.createSocialLayerStorefrontProductDetailsEmbed;
                createSocialLayerStorefrontProductDetailsEmbed2;
                if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                  obj12 = { type: "application", applicationId: result.scopeId };
                  const obj11 = { type: "application", applicationId: result.scopeId };
                } else {
                  obj12 = { type: "guild", guildId: result.scopeId };
                }
                return createSocialLayerStorefrontProductDetailsEmbed(obj10);
              }
            }
          }
          return null;
        }
      });
    }
  }
  return [];
}
