// Module ID: 15440
// Function ID: 15441
// Name: CodedLinks
// Dependencies: [32, 5176, 5114, 1385, 8729, 14441, 5992, 15441, 15446, 15460, 15462, 15452, 15464, 15457, 12326, 14001, 12345, 15465, 15468, 15469, 15471, 15473, 12351, 12442, 15474, 1380, 2]
// Exports: createCodedLinkEmbeds

// Module 15440 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import CodedLink from "CodedLink" /* 5992 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 8729 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 12326 */;
import storefrontCodedLink from "storefrontCodedLink" /* 12345 */;
import conjureProjectLink from "conjureProjectLink" /* 12351 */;
import LinkedGameOrgInvitesExperiment from "LinkedGameOrgInvitesExperiment" /* 12442 */;
import ExperimentEmbed from "ExperimentEmbed" /* 14001 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 14441 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 15441 */;
import InviteEmbed from "InviteEmbed" /* 15446 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 15452 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 15457 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 15460 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 15462 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 15464 */;
import createSocialLayerStorefrontMultiSkuEmbed2 from "createSocialLayerStorefrontMultiSkuEmbed" /* 15465 */;
import createSocialLayerStorefrontProductDetailsEmbed2 from "createSocialLayerStorefrontProductDetailsEmbed" /* 15468 */;
import QuestEmbed from "QuestEmbed" /* 15469 */;
import UserProfileEmbed from "UserProfileEmbed" /* 15471 */;
import createConjureProjectLinkEmbedDefault from "createConjureProjectLinkEmbed" /* 15473 */;
import GameOrganizationInviteEmbed from "GameOrganizationInviteEmbed" /* 15474 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 5176 */;
import GuildStore from "GuildStore" /* 5114 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        let code;
        let id;
        let obj10;
        let obj13;
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
              const tmpResult23 = ApplicationCodedLink;
              const applicationCodedLinkData = tmpResult23.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const applicationId = applicationCodedLinkData.applicationId;
                const obj2 = { appId: applicationId, channel: tmp49, message, theme };
                const tmpResult24 = createAppMessageEmbed;
                const appLinkGateResult = tmpResult24.getAppLinkGateResult(obj2);
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
                    const tmpResult25 = createActivityMessageEmbed;
                    return tmpResult25.createActivityMessageEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme, embedUrl: url, message, app };
                    const tmpResult26 = createAppMessageEmbed;
                    return tmpResult26.createAppMessageEmbed(obj4);
                  }
                }
              }
            } else {
              return null;
            }
          }
        } else if (CodedLink.CodedLinkType.INVITE === type) {
          const tmpResult27 = InviteEmbed;
          return tmpResult27.createInviteEmbed(message, code, theme);
        } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
          const tmpResult28 = GuildTemplateEmbed;
          return tmpResult28.createGuildTemplateEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.BUILD_OVERRIDE === type) {
          const tmpResult29 = BuildOverrideEmbed;
          return tmpResult29.createBuildOverrideEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          const obj20 = UserStore;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = obj20.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            isStaffResult = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
            const tmp41 = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            const tmpResult30 = BuildOverrideEmbed;
            buildOverrideEmbed = tmpResult30.createBuildOverrideEmbed(code, theme);
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          const tmpResult31 = GuildScheduledEventEmbed;
          return tmpResult31.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          const tmpResult32 = VoiceChannelLinkEmbed;
          return tmpResult32.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          const tmpResult33 = EmbeddedActivityInviteEmbed;
          return tmpResult33.createEmbeddedActivityInviteEmbed(obj5);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          const tmpResult34 = useCodedLinksExperimentEmbeds;
          if (tmpResult34.canSeeExperimentEmbeds()) {
            const tmpResult35 = ExperimentEmbed;
            experimentEmbed = tmpResult35.createExperimentEmbed(url, theme);
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    const tmpResult36 = QuestEmbed;
                    return tmpResult36.createQuestsEmbed(obj6);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
                            if (CodedLink.CodedLinkType.USER_PROFILE === type) {
                              let guild_id;
                              const createUserProfileEmbed = UserProfileEmbed.createUserProfileEmbed;
                              UserProfileEmbed;
                              if (channel != null) {
                                guild_id = channel.guild_id;
                              }
                              return createUserProfileEmbed(code, guild_id, theme);
                            } else if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                              const tmp9 = createConjureProjectLinkEmbedDefault;
                              const tmpResult38 = conjureProjectLink;
                              const result = tmpResult38.conjureProjectLinkTicket(url);
                              let guild_id1;
                              if (channel != null) {
                                guild_id1 = tmp12.guild_id;
                              }
                              if (guild_id1 == null) {
                                guild_id1 = null;
                              }
                              const obj7 = { guildId: guild_id1, channelId: id };
                              id = undefined;
                              if (channel != null) {
                                id = tmp12.id;
                              }
                              if (id == null) {
                                id = null;
                              }
                              return tmp9(code, result, theme, obj7);
                            } else if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                              let gameOrganizationInviteEmbed = null;
                              const tmpResult39 = LinkedGameOrgInvitesExperiment;
                              if (tmpResult39.getLinkedGameOrgInvitesEnabled("mobile_coded_link_embed")) {
                                let id1;
                                const createGameOrganizationInviteEmbed = GameOrganizationInviteEmbed.createGameOrganizationInviteEmbed;
                                GameOrganizationInviteEmbed;
                                const tmp6 = theme;
                                if (currentUser != null) {
                                  id1 = currentUser.id;
                                }
                                gameOrganizationInviteEmbed = createGameOrganizationInviteEmbed(code, tmp6, id1);
                              }
                              return gameOrganizationInviteEmbed;
                            } else {
                              const tmpResult41 = GlobalUtils;
                              return tmpResult41.assertNever(type);
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const tmpResult42 = storefrontCodedLink;
              const result1 = tmpResult42.parseStorefrontCodedLink(code);
              if (null == result1) {
                return null;
              } else if (result1.skuIds.length > 1) {
                const obj8 = { skuIds: result1.skuIds, guildOrApplication: obj10 };
                const createSocialLayerStorefrontMultiSkuEmbed = createSocialLayerStorefrontMultiSkuEmbed2.createSocialLayerStorefrontMultiSkuEmbed;
                createSocialLayerStorefrontMultiSkuEmbed2;
                if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                  obj10 = { type: "application", applicationId: result1.scopeId };
                  const obj9 = { type: "application", applicationId: result1.scopeId };
                } else {
                  obj10 = { type: "guild", guildId: result1.scopeId };
                }
                return createSocialLayerStorefrontMultiSkuEmbed(obj8);
              } else {
                const first = _slicedToArray(result1.skuIds, 1)[0];
                const obj11 = { skuId: first, guildOrApplication: obj13, theme };
                const createSocialLayerStorefrontProductDetailsEmbed = createSocialLayerStorefrontProductDetailsEmbed2.createSocialLayerStorefrontProductDetailsEmbed;
                createSocialLayerStorefrontProductDetailsEmbed2;
                if (type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                  obj13 = { type: "application", applicationId: result1.scopeId };
                  const obj12 = { type: "application", applicationId: result1.scopeId };
                } else {
                  obj13 = { type: "guild", guildId: result1.scopeId };
                }
                return createSocialLayerStorefrontProductDetailsEmbed(obj11);
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
