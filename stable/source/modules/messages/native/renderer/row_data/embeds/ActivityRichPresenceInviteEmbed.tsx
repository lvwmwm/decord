// Module ID: 12802
// Function ID: 12803
// Name: ActivityRichPresenceInviteEmbed
// Dependencies: [5064, 5593, 12803, 1392, 502, 2051, 12804, 8809, 5057, 4877, 5592, 1378, 10868, 1086, 7792, 6585, 12805, 1127, 11296, 12806, 11128, 11133, 7599, 12807, 11129, 12611, 11135, 11132, 12808, 8778, 8587, 11127, 7596, 11299, 12809, 12810, 11136, 11137, 12811, 12812, 12815, 2976, 2]
// Exports: createActivityRichPresenceInviteEmbed

// Module 12802 (ActivityRichPresenceInviteEmbed)
import _modDef2976 from "module_2976" /* 2976 */;
import isInviteActiveDefault from "isInviteActive" /* 11128 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11135 */;
import SpotifyApplicationRecord from "SpotifyApplicationRecord" /* 12803 */;
import getCoverImageFromActivityDefault from "getCoverImageFromActivity" /* 12809 */;
import getRequestToStreamCTAAndIsDisabledDefault from "getRequestToStreamCTAAndIsDisabled" /* 12815 */;
import ApplicationStore from "ApplicationStore" /* 5064 */;
import SpotifyStore from "SpotifyStore" /* 5593 */;
import UserRecord from "UserRecord" /* 1392 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GamePartyStore from "GamePartyStore" /* 12804 */;
import LocalActivityStore from "LocalActivityStore" /* 8809 */;
import MessageStore from "MessageStore" /* 5057 */;
import PresenceStore from "PresenceStore" /* 4877 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5592 */;
import UserStore from "UserStore" /* 1378 */;
import ActivityLauncherStore from "ActivityLauncherStore" /* 10868 */;
import Constants from "Constants" /* 1086 */;
import SpotifyConstants from "SpotifyConstants" /* 7792 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
const SpotifyApplication = SpotifyApplicationRecord.SpotifyApplication;
({ ActivityActionStates: closure_16, ActivityActionTypes: closure_17, ActivityTypes: closure_18 } = Constants);
({ isSpotifyParty: closure_19, SPOTIFY_PLATFORM_NAME: closure_20 } = SpotifyConstants);
const EmbedDisplayType = { ACTIVE: "active", DEAD: "dead", DEAD_COMPACT: "dead_compact", BLOCKED: "blocked" };
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx");

export { EmbedDisplayType };
export const createActivityRichPresenceInviteEmbed = function createActivityRichPresenceInviteEmbed(message, channel) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl18;
  let intl7;
  let intl8;
  let intl9;
  let obj;
  let obj14;
  let stringResult5;
  let type6;
  const f112666 = (type) => type.type === constants.LISTENING;
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
        if (tmp4(11296).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          let applicationActivity;
          let obj5;
          _require = channel;
          const application2 = message.application;
          let id1;
          const tmp4Result = tmp4(12806);
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
            const tmp4Result26 = tmp4(6585);
            const application3 = tmp4Result26.fetchApplication(id1, false);
          }
          if (application1 == null) {
            application1 = applicationFromMessage;
          }
          const id4 = AuthenticationStore.getId();
          if (null != message.application) {
            let tmp25;
            const id = message.author.id;
            const activity = message.activity;
            let type;
            if (activity != null) {
              type = activity.type;
            }
            if (type === constants2.JOIN_REQUEST) {
              let recipientId = id4;
              if (id === id4) {
                recipientId = id4;
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
                tmp25 = id4;
              }
            }
            applicationActivity = PresenceStore.getApplicationActivity(tmp25, message.application.id);
            obj5 = PresenceStore;
          } else {
            applicationActivity = PresenceStore.findActivity(message.author.id, f112666);
            obj5 = PresenceStore;
          }
          let tmp28;
          if (null != application1) {
            const activity3 = message.activity;
            let type2;
            if (activity3 != null) {
              type2 = activity3.type;
            }
            if (type2 === constants2.STREAM_REQUEST) {
              let applicationActivity1;
              let appIconSrc = null;
              if (null != application1.icon) {
                const tmp4Result27 = tmp4(11299);
                appIconSrc = tmp4Result27.getAppIconSrc(application1.id, application1.icon, application1.bot);
              }
              const tmp4Result28 = tmp4(11299);
              const appGradientColors = tmp4Result28.getAppGradientColors(appIconSrc);
              const id5 = obj4.getId();
              if (null != message.application) {
                let tmp134;
                const id3 = message.author.id;
                const activity7 = message.activity;
                let type3;
                if (activity7 != null) {
                  type3 = activity7.type;
                }
                if (type3 === constants2.JOIN_REQUEST) {
                  let recipientId1 = id5;
                  if (id3 === id5) {
                    recipientId1 = id5;
                    if (channel.isPrivate()) {
                      recipientId1 = channel.getRecipientId();
                    }
                  }
                  tmp134 = recipientId1;
                } else {
                  const activity8 = message.activity;
                  let type4;
                  if (activity8 != null) {
                    type4 = activity8.type;
                  }
                  tmp134 = id3;
                  if (type4 === constants2.STREAM_REQUEST) {
                    tmp134 = id5;
                  }
                }
                applicationActivity1 = obj5.getApplicationActivity(tmp134, message.application.id);
              } else {
                applicationActivity1 = obj5.findActivity(message.author.id, f112666);
              }
              const tmp137 = isInviteActiveDefault(applicationActivity1, message, application1.id);
              const tmp4Result29 = tmp4(12807);
              const requestToStreamText = tmp4Result29.getRequestToStreamText(message, channel, obj4.getId());
              const tmp139 = getRequestToStreamCTAAndIsDisabledDefault(message);
              const obj2 = { displayType: tmp137 ? obj.ACTIVE : obj.DEAD, ctaButtonEnabled: !tmp139.isDisabled, ctaButtonText: tmp139.text, ctaButtonIsLoading: false, footerLabel: null, gradientColors: appGradientColors, headerText: intl18.string(_modDef2976.nAyuPp), iconSrc: appIconSrc, isSpotifyParty: false, isPlatformSupported: true, maxPartySize: 0, partyMemberAvatarURIs: null, partySizeText: null, platformIconKeys: [], coverImageUrl: null, detailsText: null, subtitle: requestToStreamText, title: application1.name };
              intl18 = tmp4(1127).intl;
              tmp28 = obj2;
            } else {
              const tmp142 = isInviteActiveDefault(applicationActivity, message, application1.id);
              const activity9 = message.activity;
              let name_override;
              const tmp143 = !tmp142;
              const tmp4Result30 = tmp4(11133);
              const isAskToJoin = tmp4Result30.getIsAskToJoin(message);
              if (activity9 != null) {
                name_override = activity9.name_override;
              }
              if (name_override == null) {
                name_override = application1.name;
              }
              const activity4 = message.activity;
              let icon_override;
              if (activity4 != null) {
                icon_override = activity4.icon_override;
              }
              let assetImage = null;
              if (null != icon_override) {
                const tmp4Result31 = tmp4(7599);
                assetImage = tmp4Result31.getAssetImage(application1.id, message.activity.icon_override);
              }
              const activity5 = message.activity;
              let type5;
              const getHeaderText = tmp4(12807).getHeaderText;
              tmp4(12807);
              if (activity5 != null) {
                type5 = activity5.type;
              }
              const headerText = getHeaderText(name_override, type5, tmp143);
              if (null != applicationActivity) {
                let fromResult;
                let end;
                let flag5;
                let flag4;
                let name;
                let tmp72;
                let stringResult2;
                let tmp73;
                let str3;
                let tmp74;
                let flag3;
                let stringResult4;
                let tmp75;
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
                const tmp4Result33 = tmp4(11129);
                let length = tmp4Result33.getPartySize(applicationActivity).maxPartySize;
                const tmp4Result34 = tmp4(12611);
                const currentActivityGamePlatform = tmp4Result34.getCurrentActivityGamePlatform();
                const tmp42 = getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, application1.id);
                const tmp4Result35 = tmp4(11132);
                const isInParty = tmp4Result35.getIsInParty(tmp42, applicationActivity);
                let supported_platforms;
                const tmp4Result36 = tmp4(12808);
                const canSendInvite = tmp4Result36.getCanSendInvite(applicationActivity, message, application1, id4);
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
                const tmp4Result37 = tmp4(8778);
                const canLaunchFrameResult = tmp4Result37.canLaunchFrame(application1);
                const tmp4Result38 = tmp4(8587);
                const obj3 = { presenceActivity: applicationActivity, currentUserPresenceActivity: tmp42, currentUserId: id4, message, application: application1, isEmbeddedApplication: tmp4Result38.isEmbeddedApp(application1), isFrameApplication: canLaunchFrameResult, isGameLaunchable: hasItem };
                const tmp4Result39 = tmp4(11127);
                const canJoin1 = tmp4Result39.getCanJoin(obj3);
                const remoteJoinPlatform = canJoin1.remoteJoinPlatform;
                let id6;
                const canJoin = canJoin1.canJoin;
                const tmp57 = closure_19;
                if (applicationActivity != null) {
                  const party = applicationActivity.party;
                  if (party != null) {
                    id6 = party.id;
                  }
                }
                const tmp57Result = tmp57(id6) || application1.id === SpotifyApplication.id;
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
                  const tmp4Result40 = tmp4(7596);
                  str2 = tmp4Result40.formatActiveTimestamp(obj6, Date.now());
                }
                if (assetImage == null) {
                  let appIconSrc1 = null;
                  if (null != application1.icon) {
                    const tmp4Result41 = tmp4(11299);
                    appIconSrc1 = tmp4Result41.getAppIconSrc(application1.id, application1.icon, application1.bot);
                  }
                  assetImage = appIconSrc1;
                }
                if (tmp57Result) {
                  if (null != applicationActivity) {
                    if (null != applicationActivity.details) {
                      let name2;
                      if (null != applicationActivity.state) {
                        const intl13 = tmp4(1127).intl;
                        const obj7 = { track: null, artist: null };
                        ({ details: obj31.track, state: obj31.artist } = applicationActivity);
                        const str4 = intl13.formatToPlainString(tmp4(1127).t.JCvHtx, obj7);
                        name2 = str4.replace("\n", " ");
                      }
                      const intl14 = tmp4(1127).intl;
                      const stringResult = intl14.string(tmp4(1127).t.sTo7s3);
                      if (tmp142) {
                        let stringResult1;
                        const author = message.author;
                        const tmp98 = getCoverImageFromActivityDefault(applicationActivity, application1.id);
                        const hasConnectedAccountResult = SpotifyStore.hasConnectedAccount();
                        const syncingWith = SpotifyStore.getSyncingWith();
                        const activity1 = SpotifyStore.getActivity();
                        const id2 = author.id;
                        let party3;
                        const id7 = obj4.getId();
                        if (activity1 != null) {
                          party3 = activity1.party;
                        }
                        let tmp105 = null != party3;
                        if (tmp105) {
                          let id8;
                          if (applicationActivity != null) {
                            const party2 = applicationActivity.party;
                            if (party2 != null) {
                              id8 = party2.id;
                            }
                          }
                          tmp105 = id8 === activity1.party.id;
                        }
                        let userId;
                        if (syncingWith != null) {
                          userId = syncingWith.userId;
                        }
                        let tmp108 = null != userId;
                        if (tmp108) {
                          let userId1;
                          if (syncingWith != null) {
                            userId1 = syncingWith.userId;
                          }
                          tmp108 = userId1 === author.id;
                        }
                        const string = tmp4(1127).intl.string;
                        if (hasConnectedAccountResult) {
                          stringResult1 = tmp110;
                          const tmp113 = tmp108 || tmp105;
                          if (tmp113) {
                            const intl17 = tmp4(1127).intl;
                            stringResult1 = intl17.string(tmp4(1127).t.KC26NR);
                          }
                        } else {
                          const intl16 = tmp4(1127).intl;
                          const obj8 = { platform };
                          stringResult1 = intl16.formatToPlainString(tmp4(1127).t.XWSHTb, obj8);
                        }
                        flag5 = !(id2 === id7 || tmp108 || tmp105);
                        flag4 = false;
                        name = name2;
                        tmp72 = tmp98;
                        stringResult2 = str2;
                        tmp73 = null;
                        str3 = "";
                        tmp74 = null;
                        flag3 = false;
                        stringResult4 = headerText;
                        tmp75 = stringResult;
                        stringResult3 = stringResult1;
                      } else {
                        const intl15 = tmp4(1127).intl;
                        stringResult2 = intl15.string(tmp4(1127).t["84qx9r"]);
                        name = application1.name;
                        flag4 = false;
                        tmp72 = assetImage;
                        tmp73 = null;
                        str3 = "";
                        tmp74 = null;
                        flag3 = false;
                        flag5 = false;
                        stringResult4 = headerText;
                        tmp75 = stringResult;
                      }
                    }
                  }
                  name2 = application1.name;
                } else if (tmp142) {
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
                  const activity6 = message.activity;
                  const obj9 = { maxPartySize: length, partySize: fromResult.length, activityActionType: type6 };
                  type6 = undefined;
                  const getPartyText = tmp4(12807).getPartyText;
                  tmp4(12807);
                  if (activity6 != null) {
                    type6 = activity6.type;
                  }
                  let details;
                  const partyText = getPartyText(obj9);
                  if (applicationActivity != null) {
                    details = applicationActivity.details;
                  }
                  let tmp88 = null;
                  const tmp87 = null != details && "" !== details;
                  if (tmp87) {
                    tmp88 = details;
                  }
                  const tmp4Result43 = tmp4(11136);
                  const supportsRemoteJoin = tmp4Result43.getSupportsRemoteJoin(applicationActivity);
                  tmp4(11137);
                  if (canJoin) {
                    let remoteJoinFooterLabel;
                    if (null != remoteJoinPlatform) {
                      const tmp4Result45 = tmp4(12805);
                      remoteJoinFooterLabel = tmp4Result45.getRemoteJoinFooterLabel(remoteJoinPlatform);
                    }
                    const obj10 = { label: intl12.string(tmp4(1127).t.VJlc0S), disabled: false, footerLabel: remoteJoinFooterLabel };
                    intl12 = tmp4(1127).intl;
                    obj16 = obj10;
                  } else if (canSendInvite) {
                    const obj11 = { label: intl11.string(tmp4(1127).t["hC/Zey"]), disabled: message.author.id === id4, footerLabel: "r" };
                    intl11 = tmp4(1127).intl;
                    obj16 = obj11;
                  } else if (isInParty) {
                    const obj12 = { label: intl10.string(tmp4(1127).t.KC26NR), disabled: true, footerLabel: "Boolean" };
                    intl10 = tmp4(1127).intl;
                    obj16 = obj12;
                  } else if (isAskToJoin) {
                    const obj13 = { label: "Reflect", disabled: null, footerLabel: intl9.formatToPlainString(tmp4(1127).t.gYVkSW, obj14) };
                    intl9 = tmp4(1127).intl;
                    obj16 = obj13;
                    obj14 = { username: message.author.globalName, appName: name_override };
                  } else {
                    if (supportsRemoteJoin) {
                      if (tmp91) {
                        const obj15 = { label: intl8.string(tmp4(1127).t.lw71Nf), disabled: false, footerLabel: "r" };
                        intl8 = tmp4(1127).intl;
                        obj16 = obj15;
                      }
                    }
                    obj16 = { label: "Reflect", disabled: null, footerLabel: intl7.string(tmp4(1127).t.OAB5TK) };
                    intl7 = tmp4(1127).intl;
                  }
                  let tmp94 = null != applicationActivity;
                  const label = obj16.label;
                  const footerLabel = obj16.footerLabel;
                  const tmp93 = !obj16.disabled;
                  if (tmp94) {
                    tmp94 = null != applicationActivity.application_id;
                  }
                  if (tmp94) {
                    tmp94 = ActivityLauncherStore.getState(applicationActivity.application_id, tmp30.JOIN) === constants.LOADING;
                  }
                  flag4 = false;
                  flag3 = tmp94;
                  name = name_override;
                  tmp72 = assetImage;
                  stringResult2 = str2;
                  tmp73 = tmp88;
                  str3 = partyText;
                  tmp74 = mapped;
                  flag5 = tmp93;
                  stringResult4 = headerText;
                  tmp75 = footerLabel;
                  stringResult3 = label;
                } else {
                  let messages;
                  if (null != application1.deepLinkUri) {
                    messages = MessageStore.getMessages(channel.id);
                  }
                  if (null != application1.deepLinkUri) {
                    if (null != messages) {
                      const tmp4Result46 = tmp4(12810);
                      if (tmp4Result46.isMostRecentDeadEndInvite(message.id, messages, application1.id, applicationActivity)) {
                        const tmp4Result47 = tmp4(12807);
                        stringResult2 = tmp4Result47.getDeadGameInviteText(message, name_override, channel, id4, true);
                        const intl6 = tmp4(1127).intl;
                        stringResult3 = intl6.string(tmp4(1127).t["s+J8Dl"]);
                        flag4 = false;
                        name = name_override;
                        tmp72 = assetImage;
                        tmp73 = null;
                        str3 = "";
                        tmp74 = null;
                        flag3 = false;
                        flag5 = true;
                        stringResult4 = headerText;
                      }
                    }
                  }
                  const intl4 = tmp4(1127).intl;
                  stringResult4 = intl4.string(tmp4(1127).t.pkq6Vq);
                  const intl5 = tmp4(1127).intl;
                  stringResult2 = intl5.string(tmp4(1127).t["Sq/E1I"]);
                  flag3 = false;
                  name = name_override;
                  tmp72 = assetImage;
                  flag4 = true;
                  tmp73 = null;
                  str3 = "";
                  tmp74 = null;
                  flag5 = false;
                }
                if (null != remoteJoinPlatform) {
                  const items = [];
                  const tmp118 = tmp4(12811).ACTIVITY_GAME_PLATFORM_TO_ICON_KEY[remoteJoinPlatform];
                  joinFromSupportedPlatformsIconKeys = items;
                  if (null != tmp118) {
                    items.push(tmp118);
                    joinFromSupportedPlatformsIconKeys = items;
                  }
                } else {
                  let supported_platforms1;
                  const getJoinFromSupportedPlatformsIconKeys = tmp4(12811).getJoinFromSupportedPlatformsIconKeys;
                  tmp4(12811);
                  if (applicationActivity != null) {
                    supported_platforms1 = applicationActivity.supported_platforms;
                  }
                  const obj17 = { platforms: supported_platforms1, currentPlatform: currentActivityGamePlatform, isGameLaunchable: hasItem };
                  joinFromSupportedPlatformsIconKeys = getJoinFromSupportedPlatformsIconKeys(obj17);
                }
                channel = null;
                const tmp4Result49 = tmp4(11299);
                const appGradientColors1 = tmp4Result49.getAppGradientColors(tmp72);
                if (null != channel.parent_id) {
                  channel = ChannelStore.getChannel(channel.parent_id);
                }
                let isGameInvitesChannelResult;
                if (channel != null) {
                  isGameInvitesChannelResult = channel.isGameInvitesChannel();
                }
                if (true !== isGameInvitesChannelResult) {
                  const obj18 = { messageId: message.id, presenceActivity: applicationActivity, application: application1 };
                  const tmp4Result50 = tmp4(12812);
                  presenceActivityInviteCoverImageURL = tmp4Result50.getPresenceActivityInviteCoverImageURL(obj18);
                } else {
                  presenceActivityInviteCoverImageURL = null;
                }
                if (flag4) {
                  DEAD_COMPACT = tmp126.DEAD_COMPACT;
                } else {
                  DEAD_COMPACT = tmp142 ? tmp126.ACTIVE : tmp126.DEAD;
                }
                const obj19 = { displayType: DEAD_COMPACT, ctaButtonEnabled: flag5, ctaButtonText: stringResult3, ctaButtonIsLoading: flag3, footerLabel: tmp75, gradientColors: appGradientColors1, headerText: stringResult4, iconSrc: tmp72, isPlatformSupported: hasItem, isSpotifyParty: tmp57Result, maxPartySize: length, partyMemberAvatarURIs: tmp74, partySizeText: str3, platformIconKeys: joinFromSupportedPlatformsIconKeys, coverImageUrl: presenceActivityInviteCoverImageURL, detailsText: tmp73, subtitle: stringResult2, title: name };
                if (length <= 0) {
                  length = fromResult.length;
                }
                tmp28 = obj19;
              }
              fromResult = [];
            }
          }
          return tmp28;
        } else {
          if (tmp4(11296).ContentClassificationVisibility.BLOCK_UNDERAGE !== contentClassificationVisibility) {
            if (tmp4(11296).ContentClassificationVisibility.BLOCK_CHANNEL_RESTRICTION !== contentClassificationVisibility) {
              return null;
            }
          }
          obj = { displayType: obj.BLOCKED, headerText: intl.string(tmp4(1127).t.pkq6Vq), subtitle: stringResult5, ctaButtonEnabled: false, ctaButtonText: "Reflect", ctaButtonIsLoading: "Array", footerLabel: "Set", gradientColors: [], iconSrc: null, isPlatformSupported: "Array", isSpotifyParty: "applicationId", maxPartySize: "ty", partyMemberAvatarURIs: "bm", partySizeText: null, platformIconKeys: [], coverImageUrl: "function GuildOnboardingCompletedTsx2(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}", detailsText: "user", title: "2025-11_tida_webform" };
          intl = tmp4(1127).intl;
          if (contentClassificationVisibility === tmp4(11296).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl3 = tmp4(1127).intl;
            stringResult5 = intl3.string(tmp4(1127).t.GhU4yl);
          } else {
            const intl2 = tmp4(1127).intl;
            stringResult5 = intl2.string(tmp4(1127).t.B99UMJ);
          }
          return obj;
        }
      }
    }
  }
};
