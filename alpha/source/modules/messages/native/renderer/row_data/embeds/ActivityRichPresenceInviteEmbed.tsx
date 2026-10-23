// Module ID: 14526
// Function ID: 14527
// Name: ActivityRichPresenceInviteEmbed
// Dependencies: [2045, 6497, 14527, 1406, 502, 4821, 14528, 11190, 6008, 5710, 6496, 1392, 11189, 1087, 8826, 6807, 14529, 1128, 12998, 14530, 11327, 11326, 11332, 8618, 14531, 11328, 14292, 11334, 11331, 14532, 11341, 11325, 8615, 13001, 14533, 14534, 11335, 11336, 14535, 14536, 4966, 587, 14539, 3024, 2]
// Exports: createActivityRichPresenceInviteEmbed

// Module 14526 (ActivityRichPresenceInviteEmbed)
import nativeDefault from "native" /* 587 */;
import ColorUtils from "ColorUtils" /* 4966 */;
import isInviteActiveDefault from "isInviteActive" /* 11326 */;
import RequestToStreamNonGamesExperimentDefault from "RequestToStreamNonGamesExperiment" /* 11327 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11334 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 13001 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 14527 */;
import InviteEmbedTextUtils from "InviteEmbedTextUtils" /* 14531 */;
import getCoverImageFromActivityDefault from "getCoverImageFromActivity" /* 14533 */;
import getRequestToStreamCTAAndIsDisabledDefault from "getRequestToStreamCTAAndIsDisabled" /* 14539 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import SpotifyStore from "SpotifyStore" /* 6497 */;
import UserRecord from "UserRecord" /* 1406 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GamePartyStore from "GamePartyStore" /* 14528 */;
import LocalActivityStore from "LocalActivityStore" /* 11190 */;
import MessageStore from "MessageStore" /* 6008 */;
import PresenceStore from "PresenceStore" /* 5710 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6496 */;
import UserStore from "UserStore" /* 1392 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 11189 */;
import Constants from "Constants" /* 1087 */;
import SpotifyConstants from "SpotifyConstants" /* 8826 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
const f121851 = (type) => type.type === constants.LISTENING;
function createActivityStreamRequestInviteEmbed(application, guildId, forcedTheme, application1) {
  let appGradientColors;
  let applicationActivity;
  let name;
  let str;
  let stringResult;
  const obj = RequestToStreamNonGamesExperimentDefault;
  const obj2 = { guildId: guildId.guild_id, location: "createActivityStreamRequestInviteEmbed" };
  const enabled = obj.getConfig(obj2).enabled && null == application1;
  let icon;
  if (application1 != null) {
    icon = application1.icon;
  }
  let appIconSrc = null;
  if (null != icon) {
    const obj3 = nativeAppMessageEmbedUtil;
    appIconSrc = obj3.getAppIconSrc(application1.id, application1.icon, application1.bot);
  }
  const hexToRgba = ColorUtils.hexToRgba;
  ColorUtils;
  const internal = tmp(587).internal;
  const hexToRgbaResult = hexToRgba(internal.resolveSemanticColor(forcedTheme, nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT));
  const tmp7 = appIconSrc;
  if (enabled) {
    const items = [hexToRgbaResult, hexToRgbaResult];
    appGradientColors = items;
  } else {
    const tmp8Result = nativeAppMessageEmbedUtil;
    appGradientColors = tmp8Result.getAppGradientColors(tmp7);
  }
  const id1 = AuthenticationStore.getId();
  if (null != application.application) {
    let tmp18;
    const id = application.author.id;
    const activity = application.activity;
    let type;
    if (activity != null) {
      type = activity.type;
    }
    if (type === constants2.JOIN_REQUEST) {
      let recipientId = id1;
      if (id === id1) {
        recipientId = id1;
        if (guildId.isPrivate()) {
          recipientId = guildId.getRecipientId();
        }
      }
      tmp18 = recipientId;
    } else {
      const activity2 = application.activity;
      let type1;
      if (activity2 != null) {
        type1 = activity2.type;
      }
      tmp18 = id;
      if (type1 === tmp16.STREAM_REQUEST) {
        tmp18 = id1;
      }
    }
    applicationActivity = PresenceStore.getApplicationActivity(tmp18, application.application.id);
  } else {
    applicationActivity = PresenceStore.findActivity(application.author.id, f121851);
  }
  let id2;
  const tmpResult = isInviteActiveDefault;
  if (application1 != null) {
    id2 = application1.id;
  }
  const tmpResultResult = tmpResult(applicationActivity, application, id2);
  const tmp8Result3 = InviteEmbedTextUtils;
  const requestToStreamText = tmp8Result3.getRequestToStreamText(application, guildId, obj5.getId());
  const tmp8Result4 = InviteEmbedTextUtils;
  const requestToStreamTextParts = tmp8Result4.getRequestToStreamTextParts(application, guildId, obj5.getId());
  const tmp26 = getRequestToStreamCTAAndIsDisabledDefault(application, enabled);
  const obj4 = { displayType: tmpResultResult ? obj.ACTIVE : obj.DEAD, ctaButtonEnabled: !tmp26.isDisabled, ctaButtonText: tmp26.text, ctaButtonIsLoading: false, ctaButtonVariant: str, footerLabel: null, gradientColors: appGradientColors, headerText: stringResult, iconSrc: appIconSrc, isSpotifyParty: false, isPlatformSupported: true, maxPartySize: 0, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: [], coverImageUrl: null, detailsText: null, subtitle: requestToStreamText, structuredSubtitle: requestToStreamTextParts, title: name, hasActivity: !enabled };
  str = "default";
  if (enabled) {
    str = "connected";
  }
  stringResult = undefined;
  if (!enabled) {
    const intl = tmp8(1128).intl;
    stringResult = intl.string(tmp(3024).nAyuPp);
  }
  name = undefined;
  if (application1 != null) {
    name = application1.name;
  }
  return obj4;
}
const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
({ ActivityActionStates: closure_16, ActivityActionTypes: closure_17, ActivityTypes: closure_18 } = Constants);
({ isSpotifyParty: closure_19, SPOTIFY_PLATFORM_NAME: closure_20 } = SpotifyConstants);
const EmbedDisplayType = { ACTIVE: "active", DEAD: "dead", DEAD_COMPACT: "dead_compact", BLOCKED: "blocked" };
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx");

export { EmbedDisplayType };
export const createActivityRichPresenceInviteEmbed = function createActivityRichPresenceInviteEmbed(message, channel, forcedTheme) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl7;
  let intl8;
  let intl9;
  let obj;
  let obj14;
  let stringResult5;
  let type4;
  if (null != message.author) {
    if (null != message.activity) {
      if (null != channel) {
        const currentUser = UserStore.getCurrentUser();
        const tmp4 = _require;
        const application = message.application;
        let prop;
        const getContentClassificationVisibility = require("ContentClassificationVisibility").getContentClassificationVisibility;
        require("ContentClassificationVisibility");
        if (application != null) {
          prop = application.content_classification;
        }
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const contentClassificationVisibility = getContentClassificationVisibility(prop, channel, nsfwAllowed);
        if (tmp4(12998).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          let applicationActivity;
          let obj19;
          _require = channel;
          const application2 = message.application;
          let id1;
          const tmp4Result = tmp4(14530);
          const applicationFromMessage = tmp4Result.getApplicationFromMessage(message);
          if (application2 != null) {
            id1 = application2.id;
          }
          let application1 = null;
          if (null != id1) {
            application1 = ApplicationStore.getApplication(id1);
          }
          const tmp16 = null == application1 && null != id1 && false === ApplicationStore.isFetchingApplication(id1);
          if (tmp16) {
            const tmp4Result22 = tmp4(6807);
            const application3 = tmp4Result22.fetchApplication(id1, false);
          }
          if (application1 == null) {
            application1 = applicationFromMessage;
          }
          const id3 = AuthenticationStore.getId();
          const obj4 = AuthenticationStore;
          if (null != message.application) {
            let tmp25;
            const id = message.author.id;
            const activity = message.activity;
            let type;
            if (activity != null) {
              type = activity.type;
            }
            if (type === constants2.JOIN_REQUEST) {
              let recipientId = id3;
              if (id === id3) {
                recipientId = id3;
                if (channel.isPrivate()) {
                  recipientId = channel.getRecipientId();
                }
              }
              tmp25 = recipientId;
            } else {
              const activity2 = message.activity;
              let type1;
              if (activity2 != null) {
                type1 = activity2.type;
              }
              tmp25 = id;
              if (type1 === tmp23.STREAM_REQUEST) {
                tmp25 = id3;
              }
            }
            applicationActivity = PresenceStore.getApplicationActivity(tmp25, message.application.id);
          } else {
            applicationActivity = PresenceStore.findActivity(message.author.id, f121851);
          }
          const activity3 = message.activity;
          let type2;
          const obj2 = { guildId: channel.guild_id, location: "createRichPresenceDisplayActivityInviteEmbed" };
          const obj5 = RequestToStreamNonGamesExperimentDefault;
          const enabled = obj5.getConfig(obj2).enabled;
          if (activity3 != null) {
            type2 = activity3.type;
          }
          if (null == application1) {
            let tmp136;
            if (enabled) {
              if (type2 === constants2.STREAM_REQUEST) {
                tmp136 = createActivityStreamRequestInviteEmbed(message, channel, forcedTheme);
              }
            }
            obj19 = tmp136;
          } else if (type2 === constants2.STREAM_REQUEST) {
            obj19 = createActivityStreamRequestInviteEmbed(message, channel, forcedTheme, application1);
          } else {
            const tmp33 = isInviteActiveDefault(applicationActivity, message, application1.id);
            const activity4 = message.activity;
            let name_override;
            const tmp34 = !tmp33;
            const tmp4Result23 = tmp4(11332);
            const isAskToJoin = tmp4Result23.getIsAskToJoin(message);
            if (activity4 != null) {
              name_override = activity4.name_override;
            }
            if (name_override == null) {
              name_override = application1.name;
            }
            const activity5 = message.activity;
            let icon_override;
            if (activity5 != null) {
              icon_override = activity5.icon_override;
            }
            let assetImage = null;
            if (null != icon_override) {
              const tmp4Result24 = tmp4(8618);
              assetImage = tmp4Result24.getAssetImage(application1.id, message.activity.icon_override);
            }
            const activity6 = message.activity;
            let type3;
            const getHeaderText = tmp4(14531).getHeaderText;
            tmp4(14531);
            if (activity6 != null) {
              type3 = activity6.type;
            }
            const headerText = getHeaderText(name_override, type3, tmp34);
            if (null != applicationActivity) {
              let fromResult;
              let end;
              let flag5;
              let flag4;
              let name;
              let tmp76;
              let stringResult2;
              let tmp77;
              let str3;
              let tmp78;
              let flag3;
              let stringResult4;
              let tmp79;
              let stringResult3;
              let joinFromSupportedPlatformsIconKeys;
              let presenceActivityInviteCoverImageURL;
              let DEAD_COMPACT;
              if (null != applicationActivity.party) {
                const _Array = Array;
                let party1 = GamePartyStore.getParty(applicationActivity.party.id);
                if (party1 == null) {
                  party1 = [];
                }
                fromResult = from(party1);
              }
              const tmp4Result26 = tmp4(11328);
              let length = tmp4Result26.getPartySize(applicationActivity).maxPartySize;
              const tmp4Result27 = tmp4(14292);
              const currentActivityGamePlatform = tmp4Result27.getCurrentActivityGamePlatform();
              const tmp47 = getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, application1.id);
              const tmp4Result28 = tmp4(11331);
              const isInParty = tmp4Result28.getIsInParty(tmp47, applicationActivity);
              let supported_platforms;
              const tmp4Result29 = tmp4(14532);
              const canSendInvite = tmp4Result29.getCanSendInvite(applicationActivity, message, application1, id3);
              const _Set = Set;
              if (applicationActivity != null) {
                supported_platforms = applicationActivity.supported_platforms;
              }
              if (supported_platforms == null) {
                supported_platforms = [];
              }
              let self = this;
              let self2 = this;
              const _Set1 = new _Set(supported_platforms);
              const hasItem = _Set1.has(currentActivityGamePlatform);
              const tmp4Result30 = tmp4(11341);
              const result = tmp4Result30.canLaunchContextlessFrame(application1);
              const isEmbedded = application1.isEmbedded;
              const obj3 = { presenceActivity: applicationActivity, currentUserPresenceActivity: tmp47, currentUserId: id3, message, application: application1, isEmbeddedApplication: isEmbedded, isFrameApplication: result, isGameLaunchable: hasItem };
              const tmp4Result31 = tmp4(11325);
              const canJoin1 = tmp4Result31.getCanJoin(obj3);
              const remoteJoinPlatform = canJoin1.remoteJoinPlatform;
              let id4;
              const canJoin = canJoin1.canJoin;
              const tmp61 = closure_19;
              if (applicationActivity != null) {
                const party = applicationActivity.party;
                if (party != null) {
                  id4 = party.id;
                }
              }
              const tmp61Result = tmp61(id4) || application1.id === SpotifyApplication.id;
              let start;
              if (applicationActivity != null) {
                const timestamps = applicationActivity.timestamps;
                if (timestamps != null) {
                  start = timestamps.start;
                }
              }
              if (start == null) {
                let created_at;
                if (applicationActivity != null) {
                  created_at = applicationActivity.created_at;
                }
                start = created_at;
              }
              if (applicationActivity != null) {
                const timestamps2 = applicationActivity.timestamps;
                if (timestamps2 != null) {
                  end = timestamps2.end;
                }
              }
              let str2 = "";
              if (null != start) {
                const _Date = Date;
                const obj6 = { start, end };
                const tmp4Result32 = tmp4(8615);
                str2 = tmp4Result32.formatActiveTimestamp(obj6, Date.now());
              }
              if (assetImage == null) {
                let appIconSrc = null;
                if (null != application1.icon) {
                  const tmp4Result33 = tmp4(13001);
                  appIconSrc = tmp4Result33.getAppIconSrc(application1.id, application1.icon, application1.bot);
                }
                assetImage = appIconSrc;
              }
              if (tmp61Result) {
                if (null != applicationActivity) {
                  if (null != applicationActivity.details) {
                    let name2;
                    if (null != applicationActivity.state) {
                      const intl13 = tmp4(1128).intl;
                      const obj7 = { track: null, artist: null };
                      ({ details: obj32.track, state: obj32.artist } = applicationActivity);
                      const str4 = intl13.formatToPlainString(tmp4(1128).t.JCvHtx, obj7);
                      name2 = str4.replace("\n", " ");
                    }
                    const intl14 = tmp4(1128).intl;
                    const stringResult = intl14.string(tmp4(1128).t.sTo7s3);
                    if (tmp33) {
                      let stringResult1;
                      const author = message.author;
                      const tmp102 = getCoverImageFromActivityDefault(applicationActivity, application1.id);
                      const hasConnectedAccountResult = SpotifyStore.hasConnectedAccount();
                      const syncingWith = SpotifyStore.getSyncingWith();
                      const activity1 = SpotifyStore.getActivity();
                      const id2 = author.id;
                      let party3;
                      const id5 = obj4.getId();
                      if (activity1 != null) {
                        party3 = activity1.party;
                      }
                      let tmp109 = null != party3;
                      if (tmp109) {
                        let id6;
                        if (applicationActivity != null) {
                          const party2 = applicationActivity.party;
                          if (party2 != null) {
                            id6 = party2.id;
                          }
                        }
                        tmp109 = id6 === activity1.party.id;
                      }
                      let userId;
                      if (syncingWith != null) {
                        userId = syncingWith.userId;
                      }
                      let tmp112 = null != userId;
                      if (tmp112) {
                        let userId1;
                        if (syncingWith != null) {
                          userId1 = syncingWith.userId;
                        }
                        tmp112 = userId1 === author.id;
                      }
                      const string = tmp4(1128).intl.string;
                      if (hasConnectedAccountResult) {
                        stringResult1 = tmp114;
                        const tmp117 = tmp112 || tmp109;
                        if (tmp117) {
                          const intl17 = tmp4(1128).intl;
                          stringResult1 = intl17.string(tmp4(1128).t.KC26NR);
                        }
                      } else {
                        const intl16 = tmp4(1128).intl;
                        const obj8 = { platform };
                        stringResult1 = intl16.formatToPlainString(tmp4(1128).t.XWSHTb, obj8);
                      }
                      flag5 = !(id2 === id5 || tmp112 || tmp109);
                      flag4 = false;
                      name = name2;
                      tmp76 = tmp102;
                      stringResult2 = str2;
                      tmp77 = null;
                      str3 = "";
                      tmp78 = null;
                      flag3 = false;
                      stringResult4 = headerText;
                      tmp79 = stringResult;
                      stringResult3 = stringResult1;
                    } else {
                      const intl15 = tmp4(1128).intl;
                      stringResult2 = intl15.string(tmp4(1128).t["84qx9r"]);
                      name = application1.name;
                      flag4 = false;
                      tmp76 = assetImage;
                      tmp77 = null;
                      str3 = "";
                      tmp78 = null;
                      flag3 = false;
                      flag5 = false;
                      stringResult4 = headerText;
                      tmp79 = stringResult;
                    }
                  }
                }
                name2 = application1.name;
              } else if (tmp33) {
                let obj16;
                const mapped = fromResult.map(function(item) {
                  let user = UserStore.getUser(item);
                  if (user == null) {
                    const self = this;
                    const self2 = this;
                    user = new UserRecord({ discriminator: "0005" });
                  }
                  let avatarURL;
                  const _String = String;
                  if (user != null) {
                    avatarURL = user.getAvatarURL(channel.guild_id, 64);
                  }
                  return _String(avatarURL);
                });
                const activity7 = message.activity;
                const obj9 = { maxPartySize: length, partySize: fromResult.length, activityActionType: type4 };
                type4 = undefined;
                const getPartyText = tmp4(14531).getPartyText;
                tmp4(14531);
                if (activity7 != null) {
                  type4 = activity7.type;
                }
                let details;
                const partyText = getPartyText(obj9);
                if (applicationActivity != null) {
                  details = applicationActivity.details;
                }
                let tmp92 = null;
                const tmp91 = null != details && "" !== details;
                if (tmp91) {
                  tmp92 = details;
                }
                const tmp4Result35 = tmp4(11335);
                const supportsRemoteJoin = tmp4Result35.getSupportsRemoteJoin(applicationActivity);
                tmp4(11336);
                if (canJoin) {
                  let remoteJoinFooterLabel;
                  if (null != remoteJoinPlatform) {
                    const tmp4Result37 = tmp4(14529);
                    remoteJoinFooterLabel = tmp4Result37.getRemoteJoinFooterLabel(remoteJoinPlatform);
                  }
                  const obj10 = { label: intl12.string(tmp4(1128).t.VJlc0S), disabled: false, footerLabel: remoteJoinFooterLabel };
                  intl12 = tmp4(1128).intl;
                  obj16 = obj10;
                } else if (canSendInvite) {
                  const obj11 = { label: intl11.string(tmp4(1128).t["hC/Zey"]), disabled: message.author.id === id3, footerLabel: "r" };
                  intl11 = tmp4(1128).intl;
                  obj16 = obj11;
                } else if (isInParty) {
                  const obj12 = { label: intl10.string(tmp4(1128).t.KC26NR), disabled: true, footerLabel: "Array" };
                  intl10 = tmp4(1128).intl;
                  obj16 = obj12;
                } else if (isAskToJoin) {
                  const obj13 = { label: "Reflect", disabled: null, footerLabel: intl9.formatToPlainString(tmp4(1128).t.gYVkSW, obj14) };
                  intl9 = tmp4(1128).intl;
                  obj16 = obj13;
                  obj14 = { username: message.author.globalName, appName: name_override };
                } else {
                  if (supportsRemoteJoin) {
                    if (tmp95) {
                      const obj15 = { label: intl8.string(tmp4(1128).t.lw71Nf), disabled: false, footerLabel: "r" };
                      intl8 = tmp4(1128).intl;
                      obj16 = obj15;
                    }
                  }
                  obj16 = { label: "Reflect", disabled: null, footerLabel: intl7.string(tmp4(1128).t.OAB5TK) };
                  intl7 = tmp4(1128).intl;
                }
                let tmp98 = null != applicationActivity;
                const label = obj16.label;
                const footerLabel = obj16.footerLabel;
                const tmp97 = !obj16.disabled;
                if (tmp98) {
                  tmp98 = null != applicationActivity.application_id;
                }
                if (tmp98) {
                  tmp98 = ActivityLauncherStore.getState(applicationActivity.application_id, tmp31.JOIN) === constants.LOADING;
                }
                flag4 = false;
                flag3 = tmp98;
                name = name_override;
                tmp76 = assetImage;
                stringResult2 = str2;
                tmp77 = tmp92;
                str3 = partyText;
                tmp78 = mapped;
                flag5 = tmp97;
                stringResult4 = headerText;
                tmp79 = footerLabel;
                stringResult3 = label;
              } else {
                let messages;
                if (null != application1.deepLinkUri) {
                  messages = MessageStore.getMessages(channel.id);
                }
                if (null != application1.deepLinkUri) {
                  if (null != messages) {
                    const tmp4Result38 = tmp4(14534);
                    if (tmp4Result38.isMostRecentDeadEndInvite(message.id, messages, application1.id, applicationActivity)) {
                      const tmp4Result39 = tmp4(14531);
                      stringResult2 = tmp4Result39.getDeadGameInviteText(message, name_override, channel, id3, true);
                      const intl6 = tmp4(1128).intl;
                      stringResult3 = intl6.string(tmp4(1128).t["s+J8Dl"]);
                      flag4 = false;
                      name = name_override;
                      tmp76 = assetImage;
                      tmp77 = null;
                      str3 = "";
                      tmp78 = null;
                      flag3 = false;
                      flag5 = true;
                      stringResult4 = headerText;
                    }
                  }
                }
                const intl4 = tmp4(1128).intl;
                stringResult4 = intl4.string(tmp4(1128).t.pkq6Vq);
                const intl5 = tmp4(1128).intl;
                stringResult2 = intl5.string(tmp4(1128).t["Sq/E1I"]);
                flag3 = false;
                name = name_override;
                tmp76 = assetImage;
                flag4 = true;
                tmp77 = null;
                str3 = "";
                tmp78 = null;
                flag5 = false;
              }
              if (null != remoteJoinPlatform) {
                const items = [];
                const tmp122 = tmp4(14535).ACTIVITY_GAME_PLATFORM_TO_ICON_KEY[remoteJoinPlatform];
                joinFromSupportedPlatformsIconKeys = items;
                if (null != tmp122) {
                  items.push(tmp122);
                  joinFromSupportedPlatformsIconKeys = items;
                }
              } else {
                let supported_platforms1;
                const getJoinFromSupportedPlatformsIconKeys = tmp4(14535).getJoinFromSupportedPlatformsIconKeys;
                tmp4(14535);
                if (applicationActivity != null) {
                  supported_platforms1 = applicationActivity.supported_platforms;
                }
                const obj17 = { platforms: supported_platforms1, currentPlatform: currentActivityGamePlatform, isGameLaunchable: hasItem };
                joinFromSupportedPlatformsIconKeys = getJoinFromSupportedPlatformsIconKeys(obj17);
              }
              channel = null;
              const tmp4Result41 = tmp4(13001);
              const appGradientColors = tmp4Result41.getAppGradientColors(tmp76);
              if (null != channel.parent_id) {
                channel = ChannelStore.getChannel(channel.parent_id);
              }
              let isGameInvitesChannelResult;
              if (channel != null) {
                isGameInvitesChannelResult = channel.isGameInvitesChannel();
              }
              if (true !== isGameInvitesChannelResult) {
                const obj18 = { messageId: message.id, presenceActivity: applicationActivity, application: application1 };
                const tmp4Result42 = tmp4(14536);
                presenceActivityInviteCoverImageURL = tmp4Result42.getPresenceActivityInviteCoverImageURL(obj18);
              } else {
                presenceActivityInviteCoverImageURL = null;
              }
              if (flag4) {
                DEAD_COMPACT = tmp130.DEAD_COMPACT;
              } else {
                DEAD_COMPACT = tmp33 ? tmp130.ACTIVE : tmp130.DEAD;
              }
              obj19 = { displayType: DEAD_COMPACT, ctaButtonEnabled: flag5, ctaButtonText: stringResult3, ctaButtonIsLoading: flag3, footerLabel: tmp79, gradientColors: appGradientColors, headerText: stringResult4, iconSrc: tmp76, isPlatformSupported: hasItem, isSpotifyParty: tmp61Result, maxPartySize: length, partyMemberAvatarURIs: tmp78, partySizeText: str3, platformIconKeys: joinFromSupportedPlatformsIconKeys, coverImageUrl: presenceActivityInviteCoverImageURL, detailsText: tmp77, subtitle: stringResult2, title: name };
              if (length <= 0) {
                length = fromResult.length;
              }
            }
            fromResult = [];
          }
          return obj19;
        } else {
          if (tmp4(12998).ContentClassificationVisibility.BLOCK_UNDERAGE !== contentClassificationVisibility) {
            if (tmp4(12998).ContentClassificationVisibility.BLOCK_CHANNEL_RESTRICTION !== contentClassificationVisibility) {
              return null;
            }
          }
          obj = { displayType: obj.BLOCKED, headerText: intl.string(tmp4(1128).t.pkq6Vq), subtitle: stringResult5, ctaButtonEnabled: false, ctaButtonText: "Reflect", ctaButtonIsLoading: "Array", footerLabel: "Set", gradientColors: [], iconSrc: null, isPlatformSupported: "Array", isSpotifyParty: "application", maxPartySize: "paths", partyMemberAvatarURIs: "toCharArray$esjava$1", partySizeText: null, platformIconKeys: [], coverImageUrl: null, detailsText: null, title: 267.586 };
          intl = tmp4(1128).intl;
          if (contentClassificationVisibility === tmp4(12998).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl3 = tmp4(1128).intl;
            stringResult5 = intl3.string(tmp4(1128).t.GhU4yl);
          } else {
            const intl2 = tmp4(1128).intl;
            stringResult5 = intl2.string(tmp4(1128).t.B99UMJ);
          }
          return obj;
        }
      }
    }
  }
};
