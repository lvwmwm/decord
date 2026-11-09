// Module ID: 15386
// Function ID: 15387
// Name: CodedLinks
// Dependencies: [32, 5073, 5011, 1385, 7909, 13937, 5877, 15387, 15388, 15399, 15401, 15393, 15403, 15396, 11694, 13466, 11708, 15404, 15407, 15408, 15410, 11714, 11783, 15411, 1380, 2]
// Exports: createCodedLinkEmbeds

// Module 15386 (CodedLinks)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import CodedLink from "CodedLink" /* 5877 */;
import ApplicationCodedLink from "ApplicationCodedLink" /* 7909 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 11694 */;
import storefrontCodedLink from "storefrontCodedLink" /* 11708 */;
import conjureProjectLink from "conjureProjectLink" /* 11714 */;
import LinkedGameOrgInvitesExperiment from "LinkedGameOrgInvitesExperiment" /* 11783 */;
import ExperimentEmbed from "ExperimentEmbed" /* 13466 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 13937 */;
import createActivityMessageEmbed from "createActivityMessageEmbed" /* 15387 */;
import InviteEmbed from "InviteEmbed" /* 15388 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 15393 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 15396 */;
import GuildTemplateEmbed from "GuildTemplateEmbed" /* 15399 */;
import BuildOverrideEmbed from "BuildOverrideEmbed" /* 15401 */;
import VoiceChannelLinkEmbed from "VoiceChannelLinkEmbed" /* 15403 */;
import createSocialLayerStorefrontMultiSkuEmbed2 from "createSocialLayerStorefrontMultiSkuEmbed" /* 15404 */;
import createSocialLayerStorefrontProductDetailsEmbed2 from "createSocialLayerStorefrontProductDetailsEmbed" /* 15407 */;
import QuestEmbed from "QuestEmbed" /* 15408 */;
import createConjureProjectLinkEmbedDefault from "createConjureProjectLinkEmbed" /* 15410 */;
import GameOrganizationInviteEmbed from "GameOrganizationInviteEmbed" /* 15411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 5073 */;
import GuildStore from "GuildStore" /* 5011 */;
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
              const tmpResult22 = ApplicationCodedLink;
              const applicationCodedLinkData = tmpResult22.getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const applicationId = applicationCodedLinkData.applicationId;
                const obj2 = { appId: applicationId, channel: tmp45, message, theme };
                const tmpResult23 = createAppMessageEmbed;
                const appLinkGateResult = tmpResult23.getAppLinkGateResult(obj2);
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
                    const tmpResult24 = createActivityMessageEmbed;
                    return tmpResult24.createActivityMessageEmbed(obj3);
                  } else {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme, embedUrl: url, message, app };
                    const tmpResult25 = createAppMessageEmbed;
                    return tmpResult25.createAppMessageEmbed(obj4);
                  }
                }
              }
            } else {
              return null;
            }
          }
        } else if (CodedLink.CodedLinkType.INVITE === type) {
          const tmpResult26 = InviteEmbed;
          return tmpResult26.createInviteEmbed(message, code, theme);
        } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
          const tmpResult27 = GuildTemplateEmbed;
          return tmpResult27.createGuildTemplateEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.BUILD_OVERRIDE === type) {
          const tmpResult28 = BuildOverrideEmbed;
          return tmpResult28.createBuildOverrideEmbed(code, theme);
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
            const tmp37 = null != GuildStore.getGuild("943265993613008967") && !LurkingStore.isLurking("943265993613008967");
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            const tmpResult29 = BuildOverrideEmbed;
            buildOverrideEmbed = tmpResult29.createBuildOverrideEmbed(code, theme);
          }
          return buildOverrideEmbed;
        } else if (CodedLink.CodedLinkType.EVENT === type) {
          const tmpResult30 = GuildScheduledEventEmbed;
          return tmpResult30.createGuildScheduledEventLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.CHANNEL_LINK === type) {
          const tmpResult31 = VoiceChannelLinkEmbed;
          return tmpResult31.createVoiceChannelLinkEmbed(code, theme);
        } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          const tmpResult32 = EmbeddedActivityInviteEmbed;
          return tmpResult32.createEmbeddedActivityInviteEmbed(obj5);
        } else if (CodedLink.CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          const tmpResult33 = useCodedLinksExperimentEmbeds;
          if (tmpResult33.canSeeExperimentEmbeds()) {
            const tmpResult34 = ExperimentEmbed;
            experimentEmbed = tmpResult34.createExperimentEmbed(url, theme);
          }
          return experimentEmbed;
        } else {
          if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
            if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
              if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    const tmpResult35 = QuestEmbed;
                    return tmpResult35.createQuestsEmbed(obj6);
                  } else {
                    if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                        if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                            if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
                              if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                                const tmp9 = createConjureProjectLinkEmbedDefault;
                                const tmpResult36 = conjureProjectLink;
                                const result = tmpResult36.conjureProjectLinkTicket(url);
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
                                const tmpResult37 = LinkedGameOrgInvitesExperiment;
                                if (tmpResult37.getLinkedGameOrgInvitesEnabled("mobile_coded_link_embed")) {
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
                                const tmpResult39 = GlobalUtils;
                                return tmpResult39.assertNever(type);
                              }
                            }
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              const tmpResult40 = storefrontCodedLink;
              const result1 = tmpResult40.parseStorefrontCodedLink(code);
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
