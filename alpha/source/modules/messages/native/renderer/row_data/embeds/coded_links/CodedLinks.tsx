// Module ID: 14499
// Function ID: 14500
// Name: CodedLinks
// Dependencies: [32, 4976, 4914, 1387, 8354, 12942, 5765, 14500, 14505, 14519, 14521, 14513, 14523, 14516, 11983, 12392, 5786, 14524, 14527, 14528, 14530, 14531, 5787, 12098, 14532, 1255, 2]
// Exports: createCodedLinkEmbeds

// Module 14499 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import CodedLink from "CodedLink" /* 5765 */;
import storefrontCodedLink from "storefrontCodedLink" /* 5786 */;
import conjureProjectLink from "conjureProjectLink" /* 5787 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 8354 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 11983 */;
import LinkedGameOrgInvitesExperiment from "LinkedGameOrgInvitesExperiment" /* 12098 */;
import ExperimentEmbed from "ExperimentEmbed" /* 12392 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 12942 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 14500 */;
import InviteEmbed from "InviteEmbed" /* 14505 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 14513 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 14516 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 14519 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 14521 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 14523 */;
import createSocialLayerStorefrontMultiSkuEmbed2 from "createSocialLayerStorefrontMultiSkuEmbed" /* 14524 */;
import createSocialLayerStorefrontProductDetailsEmbed2 from "createSocialLayerStorefrontProductDetailsEmbed" /* 14527 */;
import QuestEmbed from "QuestEmbed" /* 14528 */;
import UserProfileEmbed from "UserProfileEmbed" /* 14530 */;
import createConjureProjectLinkEmbedDefault from "createConjureProjectLinkEmbed" /* 14531 */;
import GameOrganizationInviteEmbed from "GameOrganizationInviteEmbed" /* 14532 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 4976 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;
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
                const obj2 = { appId: applicationId, channel: tmp47, message, theme };
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
          const obj21 = UserStore;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = obj21.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            isStaffResult = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
            const tmp39 = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
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
                              const tmpResult37 = UserProfileEmbed;
                              return tmpResult37.createUserProfileEmbed(code, channel, theme);
                            } else if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                              const tmp9 = createConjureProjectLinkEmbedDefault;
                              const tmpResult38 = conjureProjectLink;
                              const result = tmpResult38.conjureProjectLinkTicket(url);
                              let guild_id;
                              if (channel != null) {
                                guild_id = tmp12.guild_id;
                              }
                              if (guild_id == null) {
                                guild_id = null;
                              }
                              const obj7 = { guildId: guild_id, channelId: id };
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
