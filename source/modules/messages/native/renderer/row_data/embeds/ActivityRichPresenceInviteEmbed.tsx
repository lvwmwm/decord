// Module ID: 12329
// Function ID: 96068
// Name: getPresenceActivity
// Dependencies: [4167, 4811, 12330, 1857, 1194, 12331, 10473, 4349, 4217, 4810, 1849, 10472, 653, 8355, 5463, 12332, 1212, 11112, 12333, 10933, 10938, 7909, 12334, 10934, 11984, 10940, 10937, 12335, 10511, 8006, 10932, 7906, 11115, 12336, 12337, 10941, 10942, 12338, 12339, 12342, 2652, 2]
// Exports: createActivityRichPresenceInviteEmbed

// Module 12329 (getPresenceActivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { SpotifyApplication } from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import spotifyUtmParams from "spotifyUtmParams";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function getPresenceActivity(application, isPrivate, id) {
  if (null != application.application) {
    id = application.author.id;
    const activity = application.activity;
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type === constants2.JOIN_REQUEST) {
      let recipientId = id;
      if (id === id) {
        recipientId = id;
        if (isPrivate.isPrivate()) {
          recipientId = isPrivate.getRecipientId();
        }
      }
      let tmp6 = recipientId;
    } else {
      const activity2 = application.activity;
      let type1;
      if (null != activity2) {
        type1 = activity2.type;
      }
      tmp6 = id;
      if (type1 === constants2.STREAM_REQUEST) {
        tmp6 = id;
      }
    }
    return closure_11.getApplicationActivity(tmp6, application.application.id);
  } else {
    return closure_11.findActivity(application.author.id, (type) => type.type === outer1_17.LISTENING);
  }
}
function createRichPresenceDisplayActivityInviteEmbed(application, id) {
  let message;
  let remoteJoinPlatform2;
  const _require = id;
  let obj = _require(12333);
  let applicationFromMessage = obj.getApplicationFromMessage(application);
  application = application.application;
  id = undefined;
  if (null != application) {
    id = application.id;
  }
  application = null;
  if (null != id) {
    application = _isNativeReflectConstruct.getApplication(id);
  }
  let tmp5 = null == application && null != id;
  if (tmp5) {
    tmp5 = false === _isNativeReflectConstruct.isFetchingApplication(id);
  }
  if (tmp5) {
    let obj1 = _require(5463);
    const application1 = obj1.fetchApplication(id, false);
  }
  if (null != application) {
    applicationFromMessage = application;
  }
  const id1 = store2.getId();
  const tmp11 = getPresenceActivity(application, id, id1);
  if (null != applicationFromMessage) {
    const activity = application.activity;
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type === constants2.STREAM_REQUEST) {
      applicationFromMessage = null;
      if (null != applicationFromMessage.icon) {
        applicationFromMessage = _require;
        applicationFromMessage = dependencyMap;
        applicationFromMessage = _require(11115).getAppIconSrc(applicationFromMessage.id, applicationFromMessage.icon, applicationFromMessage.bot);
        const obj41 = _require(11115);
      }
      applicationFromMessage = undefined;
      applicationFromMessage = _require;
      applicationFromMessage = dependencyMap;
      applicationFromMessage = getPresenceActivity;
      applicationFromMessage = store2;
      applicationFromMessage = _require(11115).getAppGradientColors(applicationFromMessage);
      applicationFromMessage = importDefault;
      applicationFromMessage = getPresenceActivity(application, id, store2.getId());
      applicationFromMessage = importDefault(10933)(applicationFromMessage, application, applicationFromMessage.id);
      const obj42 = _require(11115);
      applicationFromMessage = store2;
      applicationFromMessage = _require(12334).getRequestToStreamText(application, id, store2.getId());
      applicationFromMessage = importDefault(12342)(application);
      obj = {};
      applicationFromMessage = obj;
      obj.displayType = applicationFromMessage ? applicationFromMessage.ACTIVE : applicationFromMessage.DEAD;
      obj.ctaButtonEnabled = !applicationFromMessage.isDisabled;
      obj.ctaButtonText = applicationFromMessage.text;
      obj.ctaButtonIsLoading = false;
      obj.footerLabel = null;
      obj.gradientColors = applicationFromMessage;
      applicationFromMessage = _require;
      applicationFromMessage = dependencyMap;
      const intl15 = _require(1212).intl;
      applicationFromMessage = importDefault;
      obj.headerText = intl15.string(importDefault(2652).nAyuPp);
      obj.iconSrc = applicationFromMessage;
      obj.isSpotifyParty = false;
      obj.isPlatformSupported = true;
      obj.maxPartySize = 0;
      obj.partyMemberAvatarURIs = null;
      obj.partySizeText = null;
      obj.platformIconKeys = [];
      obj.coverImageUrl = null;
      obj.detailsText = null;
      obj.subtitle = applicationFromMessage;
      obj.title = applicationFromMessage.name;
      return obj;
    } else {
      applicationFromMessage = importDefault;
      applicationFromMessage = dependencyMap;
      applicationFromMessage = !importDefault(10933)(tmp11, application, applicationFromMessage.id);
      applicationFromMessage = _require;
      const activity5 = application.activity;
      let name_override;
      applicationFromMessage = _require(10938).getIsAskToJoin(application);
      if (null != activity5) {
        name_override = activity5.name_override;
      }
      if (null == name_override) {
        name_override = applicationFromMessage.name;
      }
      const activity2 = application.activity;
      let icon_override;
      if (null != activity2) {
        icon_override = activity2.icon_override;
      }
      let assetImage = null;
      if (null != icon_override) {
        let obj2 = _require(7909);
        assetImage = obj2.getAssetImage(applicationFromMessage.id, application.activity.icon_override);
      }
      let obj3 = _require(12334);
      const activity3 = application.activity;
      let type1;
      if (null != activity3) {
        type1 = activity3.type;
      }
      const headerText = obj3.getHeaderText(name_override, type1, applicationFromMessage);
      if (null != tmp11) {
        if (null != tmp11.party) {
          party = party.getParty(tmp11.party.id);
          if (null == party) {
            party = [];
          }
          let items = Array.from(party);
        }
        let obj4 = _require(10934);
        let length = obj4.getPartySize(tmp11).maxPartySize;
        let obj5 = _require(11984);
        const currentActivityGamePlatform = obj5.getCurrentActivityGamePlatform();
        const tmp31 = importDefault(10940)(closure_9, closure_12, applicationFromMessage.id);
        let obj6 = _require(10937);
        const isInParty = obj6.getIsInParty(tmp31, tmp11);
        let obj7 = _require(12335);
        let _Set = Set;
        let supported_platforms;
        const canSendInvite = obj7.getCanSendInvite(tmp11, application, applicationFromMessage, id1);
        if (null != tmp11) {
          supported_platforms = tmp11.supported_platforms;
        }
        if (null == supported_platforms) {
          supported_platforms = [];
        }
        let prototype = _Set.prototype;
        _Set = new _Set(supported_platforms);
        const hasItem = _Set.has(currentActivityGamePlatform);
        let obj9 = _require(10511);
        let obj10 = _require(8006);
        const canLaunchFrameResult = obj9.canLaunchFrame(applicationFromMessage);
        let obj11 = _require(10932);
        obj = { presenceActivity: tmp11, currentUserPresenceActivity: tmp31, currentUserId: id1, message: application, application: applicationFromMessage, isEmbeddedApplication: obj10.isEmbeddedApp(applicationFromMessage), isFrameApplication: canLaunchFrameResult, isGameLaunchable: hasItem };
        const canJoin = obj11.getCanJoin(obj);
        const remoteJoinPlatform = canJoin.remoteJoinPlatform;
        let id2;
        if (null != tmp11) {
          party = tmp11.party;
          if (null != party) {
            id2 = party.id;
          }
        }
        let tmp50Result = closure_18(id2);
        if (!tmp50Result) {
          tmp50Result = applicationFromMessage.id === SpotifyApplication.id;
        }
        let start;
        if (null != tmp11) {
          const timestamps = tmp11.timestamps;
          if (null != timestamps) {
            start = timestamps.start;
          }
        }
        if (null == start) {
          let created_at;
          if (null != tmp11) {
            created_at = tmp11.created_at;
          }
          start = created_at;
        }
        if (null != tmp11) {
          const timestamps2 = tmp11.timestamps;
          if (null != timestamps2) {
            const end = timestamps2.end;
          }
        }
        let str2 = "";
        if (null != start) {
          let obj13 = _require(7906);
          obj1 = { start, end };
          const _Date = Date;
          str2 = obj13.formatActiveTimestamp(obj1, Date.now());
        }
        if (null == assetImage) {
          let appIconSrc = null;
          if (null != applicationFromMessage.icon) {
            let obj15 = _require(11115);
            appIconSrc = obj15.getAppIconSrc(applicationFromMessage.id, applicationFromMessage.icon, applicationFromMessage.bot);
          }
          assetImage = appIconSrc;
        }
        if (tmp50Result) {
          if (null != tmp11) {
            if (null != tmp11.details) {
              if (null != tmp11.state) {
                applicationFromMessage = _require;
                applicationFromMessage = dependencyMap;
                const intl10 = _require(1212).intl;
                obj2 = {};
                ({ details: obj32.track, state: obj32.artist } = tmp11);
                let name2 = intl10.formatToPlainString(_require(1212).t.JCvHtx, obj2).replace("\n", " ");
                const str4 = intl10.formatToPlainString(_require(1212).t.JCvHtx, obj2);
              }
              applicationFromMessage = _require;
              applicationFromMessage = dependencyMap;
              const intl11 = _require(1212).intl;
              applicationFromMessage = intl11.string(_require(1212).t.sTo7s3);
              if (applicationFromMessage) {
                applicationFromMessage = _require;
                applicationFromMessage = dependencyMap;
                const intl14 = _require(1212).intl;
                let stringResult = intl14.string(_require(1212).t["84qx9r"]);
                let name = applicationFromMessage.name;
                let flag8 = false;
                let footerLabel = applicationFromMessage;
                let stringResult1 = headerText;
                let flag9 = false;
                let tmp97 = null;
                let str3 = "";
                let tmp68 = null;
                let flag10 = false;
                let tmp99 = assetImage;
              } else {
                applicationFromMessage = importDefault;
                applicationFromMessage = dependencyMap;
                applicationFromMessage = importDefault(12336)(tmp11, applicationFromMessage.id);
                applicationFromMessage = undefined;
                const author = application.author;
                applicationFromMessage = store;
                applicationFromMessage = store;
                applicationFromMessage = store.hasConnectedAccount();
                applicationFromMessage = store.getSyncingWith();
                applicationFromMessage = store;
                applicationFromMessage = store.getActivity();
                applicationFromMessage = store2;
                applicationFromMessage = author.id === store2.getId();
                applicationFromMessage = undefined;
                if (null != applicationFromMessage) {
                  applicationFromMessage = applicationFromMessage.party;
                }
                applicationFromMessage = null != applicationFromMessage;
                if (applicationFromMessage) {
                  applicationFromMessage = undefined;
                  if (null != tmp11) {
                    const party2 = tmp11.party;
                    if (null != party2) {
                      applicationFromMessage = party2.id;
                    }
                  }
                  applicationFromMessage = applicationFromMessage === applicationFromMessage.party.id;
                }
                applicationFromMessage = undefined;
                if (null != applicationFromMessage) {
                  applicationFromMessage = applicationFromMessage.userId;
                }
                applicationFromMessage = null != applicationFromMessage;
                if (applicationFromMessage) {
                  applicationFromMessage = undefined;
                  if (null != applicationFromMessage) {
                    applicationFromMessage = applicationFromMessage.userId;
                  }
                  applicationFromMessage = applicationFromMessage === author.id;
                }
                applicationFromMessage = _require;
                applicationFromMessage = dependencyMap;
                const string = _require(1212).intl.string;
                if (applicationFromMessage) {
                  if (applicationFromMessage) {
                    applicationFromMessage = _require;
                    applicationFromMessage = dependencyMap;
                    const intl13 = _require(1212).intl;
                    applicationFromMessage = intl13.string(_require(1212).t.KC26NR);
                  }
                } else {
                  applicationFromMessage = _require;
                  applicationFromMessage = dependencyMap;
                  const intl12 = _require(1212).intl;
                  obj3 = {};
                  applicationFromMessage = closure_19;
                  obj3.platform = closure_19;
                  applicationFromMessage = intl12.formatToPlainString(_require(1212).t.XWSHTb, obj3);
                }
                obj4 = { label: applicationFromMessage, disabled: applicationFromMessage };
                let label = obj4.label;
                flag8 = !obj4.disabled;
                flag9 = false;
                footerLabel = applicationFromMessage;
                stringResult1 = headerText;
                tmp97 = null;
                str3 = "";
                tmp68 = null;
                stringResult = str2;
                flag10 = false;
                tmp99 = applicationFromMessage;
                name = name2;
              }
            }
          }
          name2 = applicationFromMessage.name;
        } else if (applicationFromMessage) {
          applicationFromMessage = null != applicationFromMessage.deepLinkUri;
          if (applicationFromMessage) {
            applicationFromMessage = messages;
            applicationFromMessage = messages.getMessages(id.id);
          }
          if (applicationFromMessage) {
            if (null != applicationFromMessage) {
              applicationFromMessage = _require;
              applicationFromMessage = dependencyMap;
              const obj30 = _require(12337);
              applicationFromMessage = obj30;
              applicationFromMessage = tmp11;
              if (obj30.isMostRecentDeadEndInvite(application.id, applicationFromMessage, applicationFromMessage.id, tmp11)) {
                applicationFromMessage = _require;
                applicationFromMessage = dependencyMap;
                const obj31 = _require(12334);
                applicationFromMessage = obj31;
                applicationFromMessage = application;
                applicationFromMessage = name_override;
                applicationFromMessage = id;
                applicationFromMessage = id1;
                stringResult = obj31.getDeadGameInviteText(application, name_override, id, id1, true);
                const intl9 = _require(1212).intl;
                label = intl9.string(_require(1212).t["s+J8Dl"]);
                flag9 = false;
                stringResult1 = headerText;
                flag8 = true;
                tmp97 = null;
                str3 = "";
                tmp68 = null;
                flag10 = false;
                tmp99 = assetImage;
                name = name_override;
              }
            }
          }
          applicationFromMessage = _require;
          applicationFromMessage = dependencyMap;
          const intl7 = _require(1212).intl;
          stringResult1 = intl7.string(_require(1212).t.pkq6Vq);
          const intl8 = _require(1212).intl;
          stringResult = intl8.string(_require(1212).t["Sq/E1I"]);
          flag8 = false;
          flag10 = true;
          flag9 = false;
          tmp97 = null;
          str3 = "";
          tmp68 = null;
          tmp99 = assetImage;
          name = name_override;
        } else {
          const mapped = items.map((arg0) => {
            let user = outer1_13.getUser(arg0);
            if (null == user) {
              const obj = { discriminator: "0005" };
              const prototype = outer1_6.prototype;
              user = new outer1_6(obj);
            }
            let avatarURL;
            if (null != user) {
              avatarURL = user.getAvatarURL(guild_id.guild_id, 64);
            }
            return String(avatarURL);
          });
          let obj16 = _require(12334);
          obj5 = { maxPartySize: length, partySize: items.length };
          const activity4 = application.activity;
          let type2;
          if (null != activity4) {
            type2 = activity4.type;
          }
          obj5.activityActionType = type2;
          let details;
          const partyText = obj16.getPartyText(obj5);
          if (null != tmp11) {
            details = tmp11.details;
          }
          tmp68 = null;
          if (tmp67) {
            tmp68 = details;
          }
          obj6 = { canJoin: canJoin.canJoin, remoteJoinPlatform, canSendInvite, isInParty, message: application, currentUserId: id1, applicationName: name_override, isAskToJoin: applicationFromMessage, supportsRemoteJoin: _require(10941).getSupportsRemoteJoin(tmp11) };
          const obj20 = _require(10941);
          tmp67 = null != details && "" !== details;
          obj6.canPromptAuth = _require(10942).getShouldShowAppAuthPrompt(applicationFromMessage);
          ({ remoteJoinPlatform: remoteJoinPlatform2, message } = obj6);
          if (obj6.canJoin) {
            let remoteJoinFooterLabel;
            if (null != remoteJoinPlatform2) {
              remoteJoinFooterLabel = _require(12332).getRemoteJoinFooterLabel(remoteJoinPlatform2);
              const obj28 = _require(12332);
            }
            obj7 = {};
            const intl6 = _require(1212).intl;
            obj7.label = intl6.string(_require(1212).t.VJlc0S);
            obj7.disabled = false;
            obj7.footerLabel = remoteJoinFooterLabel;
            obj13 = obj7;
          } else if (tmp71) {
            const obj8 = {};
            const intl5 = _require(1212).intl;
            obj8.label = intl5.string(_require(1212).t["hC/Zey"]);
            obj8.disabled = message.author.id === tmp73;
            obj8.footerLabel = undefined;
            obj13 = obj8;
          } else if (tmp72) {
            obj9 = {};
            const intl4 = _require(1212).intl;
            obj9.label = intl4.string(_require(1212).t.KC26NR);
            obj9.disabled = true;
            obj9.footerLabel = undefined;
            obj13 = obj9;
          } else if (tmp75) {
            obj10 = { label: undefined, disabled: false };
            const intl3 = _require(1212).intl;
            obj11 = { username: message.author.globalName, appName: tmp74 };
            obj10.footerLabel = intl3.formatToPlainString(_require(1212).t.gYVkSW, obj11);
            obj13 = obj10;
          } else {
            if (tmp76) {
              if (tmp77) {
                const obj12 = {};
                const intl2 = _require(1212).intl;
                obj12.label = intl2.string(_require(1212).t.lw71Nf);
                obj12.disabled = false;
                obj12.footerLabel = undefined;
                obj13 = obj12;
              }
            }
            obj13 = { label: undefined, disabled: false };
            const intl = _require(1212).intl;
            obj13.footerLabel = intl.string(_require(1212).t.OAB5TK);
          }
          label = obj13.label;
          flag8 = !obj13.disabled;
          footerLabel = obj13.footerLabel;
          flag9 = null != tmp11 && null != tmp11.application_id;
          if (flag9) {
            flag9 = state.getState(tmp11.application_id, constants2.JOIN) === constants.LOADING;
          }
          stringResult1 = headerText;
          tmp97 = mapped;
          str3 = partyText;
          stringResult = str2;
          flag10 = false;
          tmp99 = assetImage;
          name = name_override;
          const obj21 = _require(10942);
        }
        items = [];
        if (null != remoteJoinPlatform) {
          applicationFromMessage = _require;
          applicationFromMessage = dependencyMap;
          applicationFromMessage = _require(12338).ACTIVITY_GAME_PLATFORM_TO_ICON_KEY[remoteJoinPlatform];
          applicationFromMessage = items;
          if (null != applicationFromMessage) {
            applicationFromMessage = items.push(applicationFromMessage);
            applicationFromMessage = items;
          }
        } else {
          applicationFromMessage = _require;
          applicationFromMessage = dependencyMap;
          const obj14 = {};
          applicationFromMessage = undefined;
          if (null != tmp11) {
            applicationFromMessage = tmp11.supported_platforms;
          }
          obj14.platforms = applicationFromMessage;
          obj14.currentPlatform = currentActivityGamePlatform;
          obj14.isGameLaunchable = hasItem;
          applicationFromMessage = _require(12338).getJoinFromSupportedPlatformsIconKeys(obj14);
          const obj35 = _require(12338);
        }
        applicationFromMessage = undefined;
        if (null != tmp99) {
          applicationFromMessage = tmp99;
        }
        applicationFromMessage = _require;
        applicationFromMessage = dependencyMap;
        const isEmbeddedAppResult = obj10.isEmbeddedApp(applicationFromMessage);
        const tmp50 = closure_18;
        applicationFromMessage = _require(11115).getAppGradientColors(applicationFromMessage);
        const obj37 = _require(11115);
        obj15 = { messageId: application.id, presenceActivity: tmp11, application: applicationFromMessage };
        obj16 = {};
        applicationFromMessage = obj;
        applicationFromMessage = _require(12339).getPresenceActivityInviteCoverImageURL(obj15);
        if (flag10) {
          let DEAD_COMPACT = applicationFromMessage.DEAD_COMPACT;
        } else {
          DEAD_COMPACT = applicationFromMessage ? applicationFromMessage.DEAD : applicationFromMessage.ACTIVE;
        }
        obj16.displayType = DEAD_COMPACT;
        obj16.ctaButtonEnabled = flag8;
        obj16.ctaButtonText = label;
        obj16.ctaButtonIsLoading = flag9;
        obj16.footerLabel = footerLabel;
        obj16.gradientColors = applicationFromMessage;
        obj16.headerText = stringResult1;
        obj16.iconSrc = tmp99;
        obj16.isPlatformSupported = hasItem;
        obj16.isSpotifyParty = tmp50Result;
        if (length <= 0) {
          length = items.length;
        }
        obj16.maxPartySize = length;
        obj16.partyMemberAvatarURIs = tmp97;
        obj16.partySizeText = str3;
        obj16.platformIconKeys = applicationFromMessage;
        obj16.coverImageUrl = applicationFromMessage;
        obj16.detailsText = tmp68;
        obj16.subtitle = stringResult;
        obj16.title = name;
        return obj16;
      }
      items = [];
      const obj45 = _require(10938);
    }
  }
}
({ ActivityActionStates: closure_15, ActivityActionTypes: closure_16, ActivityTypes: closure_17 } = ME);
({ isSpotifyParty: closure_18, SPOTIFY_PLATFORM_NAME: closure_19 } = spotifyUtmParams);
let obj = { ACTIVE: "active", DEAD: "dead", DEAD_COMPACT: "dead_compact", BLOCKED: "blocked" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx");

export const EmbedDisplayType = obj;
export const createActivityRichPresenceInviteEmbed = function createActivityRichPresenceInviteEmbed(message, channel) {
  if (null != message.author) {
    if (null != message.activity) {
      if (null != channel) {
        currentUser = currentUser.getCurrentUser();
        let obj = require(11112) /* getContentClassificationVisibility */;
        const application = message.application;
        let prop;
        if (null != application) {
          prop = application.content_classification;
        }
        let nsfwAllowed;
        if (null != currentUser) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const contentClassificationVisibility = obj.getContentClassificationVisibility(prop, channel, nsfwAllowed);
        if (require(11112) /* getContentClassificationVisibility */.ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          return createRichPresenceDisplayActivityInviteEmbed(message, channel);
        } else {
          if (require(11112) /* getContentClassificationVisibility */.ContentClassificationVisibility.BLOCK_UNDERAGE !== contentClassificationVisibility) {
            if (require(11112) /* getContentClassificationVisibility */.ContentClassificationVisibility.BLOCK_CHANNEL_RESTRICTION !== contentClassificationVisibility) {
              return null;
            }
          }
          obj = {};
          obj.displayType = obj.BLOCKED;
          const intl = require(1212) /* getSystemLocale */.intl;
          obj.headerText = intl.string(require(1212) /* getSystemLocale */.t.pkq6Vq);
          if (contentClassificationVisibility === require(11112) /* getContentClassificationVisibility */.ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl3 = require(1212) /* getSystemLocale */.intl;
            let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.GhU4yl);
          } else {
            const intl2 = require(1212) /* getSystemLocale */.intl;
            stringResult = intl2.string(require(1212) /* getSystemLocale */.t.B99UMJ);
          }
          obj.subtitle = stringResult;
          obj.ctaButtonEnabled = false;
          obj.ctaButtonText = undefined;
          obj.ctaButtonIsLoading = false;
          obj.footerLabel = undefined;
          obj.gradientColors = [];
          obj.iconSrc = undefined;
          obj.isPlatformSupported = false;
          obj.isSpotifyParty = false;
          obj.maxPartySize = 0;
          obj.partyMemberAvatarURIs = null;
          obj.partySizeText = undefined;
          obj.platformIconKeys = [];
          obj.coverImageUrl = undefined;
          obj.detailsText = undefined;
          obj.title = undefined;
          return obj;
        }
      }
    }
  }
};
