// Module ID: 6691
// Function ID: 51597
// Name: trackInvite
// Dependencies: [57, 5, 6, 7, 4808, 6692, 6693, 6694, 6920, 6922, 6830, 5035, 4149, 1194, 1348, 6923, 1838, 4115, 4349, 3758, 4217, 4142, 6928, 1849, 653, 6930, 5720, 4123, 27, 3, 4114, 6931, 4119, 6934, 6935, 4324, 6940, 4981, 6959, 6977, 675, 4116, 6978, 6981, 4366, 6983, 1212, 1920, 4666, 686, 6995, 4329, 6996, 6835, 507, 4351, 5606, 14, 6720, 4803, 21, 1882, 1901, 6709, 4806, 6997, 6998, 7001, 7002, 3776, 6925, 1360, 5648, 7003, 7072, 7076, 7079, 7085, 7086, 7108, 664, 7109, 1881, 7007, 3976, 7110, 4470, 2]

// Module 6691 (trackInvite)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import { ReferencedMessageState } from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_createForOfIteratorHelperLoose";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import closure_25 from "_isNativeReflectConstruct";
import { SlowmodeType } from "_isNativeReflectConstruct";
import closure_27 from "_isNativeReflectConstruct";
import ME from "ME";
import { LinkType } from "LinkType";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import importDefaultResult1 from "_defineProperties";
import importDefaultResult2 from "_defineProperties";

let Permissions;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_38;
let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_43;
let closure_44;
let closure_45;
let closure_48;
let closure_49;
const require = arg1;
function trackInvite(channelId) {
  let _location;
  let inviteAnalyticsMetadata;
  let inviteKey;
  let messageId;
  let overrideProperties;
  ({ inviteKey, messageId, location: _location, inviteAnalyticsMetadata, overrideProperties } = channelId);
  if (overrideProperties === undefined) {
    overrideProperties = {};
  }
  id = id.getId();
  invite = invite.getInvite(inviteKey);
  let obj = require(4116) /* readSnowflake */;
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  let result1 = null != invite;
  if (result1) {
    let obj1 = require(6978) /* isGroupDMInvite */;
    result1 = obj1.isEmbeddedApplicationInvite(invite);
  }
  let id1;
  if (null != invite) {
    const target_application = invite.target_application;
    if (null != target_application) {
      id1 = target_application.id;
    }
  }
  if (tmp8) {
    let obj2 = require(6935) /* trackAppEmbedViewed */;
    const result2 = obj2.trackAppEmbedLinkSent(id1, LinkType.ACTIVITY_INVITE, id);
  }
  let channel = store.getChannel(channelId.channelId);
  if (null != channel) {
    if (channel.isMultiUserDM()) {
      let GDM_INVITE = constants3.GDM_INVITE;
    } else {
      GDM_INVITE = null;
      if (!channel.isPrivate()) {
        GDM_INVITE = constants3.SERVER_INVITE;
      }
    }
    obj = {};
    let STREAM = GDM_INVITE;
    if (null != invite) {
      STREAM = GDM_INVITE;
      if (invite.state === constants5.RESOLVED) {
        STREAM = GDM_INVITE;
        if (null != invite.channel) {
          channel = invite.channel;
          obj.invite_channel_id = channel.id;
          const guild = invite.guild;
          let id2;
          if (null != guild) {
            id2 = guild.id;
          }
          obj.invite_guild_id = id2;
          obj.invite_channel_type = channel.type;
          if (null != invite.inviter) {
            obj.invite_inviter_id = invite.inviter.id;
          }
          if (null != invite.target_application) {
            obj.application_id = invite.target_application.id;
          }
          lastActiveStream = lastActiveStream.getLastActiveStream();
          STREAM = GDM_INVITE;
          if (null != lastActiveStream) {
            STREAM = GDM_INVITE;
            if (lastActiveStream.channelId === channel.id) {
              obj.destination_user_id = lastActiveStream.ownerId;
              const streamerApplication = require(6981) /* _findPlayingActivity */.getStreamerApplication(lastActiveStream, closure_24);
              let id3 = null;
              if (null != streamerApplication) {
                id3 = streamerApplication.id;
              }
              obj.application_id = id3;
              STREAM = constants3.STREAM;
              const obj9 = require(6981) /* _findPlayingActivity */;
            }
          }
        }
      }
    }
    if (null != inviteAnalyticsMetadata) {
      if (null != inviteAnalyticsMetadata.suggestionData) {
        obj.is_suggested = inviteAnalyticsMetadata.suggestionData.isAffinitySuggestion;
        obj.row_num = inviteAnalyticsMetadata.suggestionData.rowNum;
        obj.num_total = inviteAnalyticsMetadata.suggestionData.numTotal;
        obj.num_affinity_connections = inviteAnalyticsMetadata.suggestionData.numAffinityConnections;
        obj.is_filtered = inviteAnalyticsMetadata.suggestionData.isFiltered;
      }
      obj.source = inviteAnalyticsMetadata.source;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj["location"] = _location;
    obj["invite_type"] = STREAM;
    obj["invite_code"] = result.baseCode;
    obj["guild_id"] = channel.getGuildId();
    obj["channel_id"] = channel.id;
    obj["message_id"] = messageId;
    obj["send_type"] = constants4.DIRECT_MESSAGE;
    obj["invite_guild_scheduled_event_id"] = result.guildScheduledEventId;
    const inviteInstanceId = require(4116) /* readSnowflake */.getInviteInstanceId(result.baseCode, messageId);
    let tmp48 = null;
    if (null != inviteInstanceId) {
      tmp48 = inviteInstanceId;
    }
    obj["invite_instance_id"] = tmp48;
    const merged1 = Object.assign(overrideProperties);
    const obj11 = require(4116) /* readSnowflake */;
    importDefault(4324).trackWithMetadata(constants.INVITE_SENT, obj);
    const obj12 = importDefault(4324);
  } else {
    obj1 = {};
    if (null != invite) {
      if (invite.state === constants5.RESOLVED) {
        if (null != invite.inviter) {
          obj1.invite_inviter_id = invite.inviter.id;
          if (null != invite.target_application) {
            obj1.application_id = invite.target_application.id;
          }
          obj2 = {};
          const merged2 = Object.assign(obj1);
          obj2["location"] = _location;
          obj2["invite_type"] = constants3.FRIEND_INVITE;
          obj2["invite_code"] = result.baseCode;
          obj2["message_id"] = messageId;
          obj2["send_type"] = constants4.DIRECT_MESSAGE;
          obj2["invite_guild_scheduled_event_id"] = result.guildScheduledEventId;
          const inviteInstanceId1 = require(4116) /* readSnowflake */.getInviteInstanceId(result.baseCode, messageId);
          let tmp21 = null;
          if (null != inviteInstanceId1) {
            tmp21 = inviteInstanceId1;
          }
          obj2["invite_instance_id"] = tmp21;
          const merged3 = Object.assign(overrideProperties);
          const obj6 = require(4116) /* readSnowflake */;
          importDefault(4324).trackWithMetadata(constants.INVITE_SENT, obj2);
          const obj7 = importDefault(4324);
        }
      }
    }
  }
}
const AbortCodes = ME.AbortCodes;
({ AnalyticEvents: closure_29, Endpoints: closure_30, Permissions, ChannelTypes: closure_31, LoggingInviteTypes: closure_32, SendTypes: closure_33, InviteStates: closure_34, MessageFlags: closure_35, MAX_MESSAGES_FOR_JUMP: closure_36, MessageTypes: closure_37, AllowedMentionTypes: closure_38, HelpdeskArticles: closure_39, MarketingURLs: closure_40, MessageReferenceTypes: closure_41, LOCAL_BOT_ID: closure_42, NON_USER_BOT_DISCRIMINATOR: closure_43, MessageStates: closure_44, ActivityActionTypes: closure_45 } = ME);
({ FileUploadErrorTypes: closure_48, MessageSendLocation: closure_49 } = MESSAGE_GROUP_SPACING);
const MediaPlayerManager = require("MESSAGE_GROUP_SPACING").NativeModules.MediaPlayerManager;
importDefaultResult1 = new importDefaultResult1("MessageActionCreators");
importDefaultResult2 = new importDefaultResult2("MessageQueue");
let c53 = false;
let closure_54 = (() => {
  class RemoteFetch {
    constructor() {
      tmp = outer1_6(this, RemoteFetch);
      this.completed = false;
      return;
    }
  }
  const items = [
    {
      key: "markComplete",
      value() {
        this.completed = true;
      }
    }
  ];
  return callback2(RemoteFetch, items);
})();
let obj = {
  messageName: "SLOWMODE_RATE_LIMITED",
  messageGetter(rateLimitPerUser) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.IWntYg, { seconds: rateLimitPerUser.rateLimitPerUser });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
  messageGetter(rawRecipients) {
    let obj = importDefault(1920);
    const articleURL = obj.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
    rawRecipients = rawRecipients.rawRecipients;
    if (null == rawRecipients) {
      rawRecipients = [];
    }
    if (rawRecipients.isDM()) {
      if (1 === rawRecipients.length) {
        if (rawRecipients.some((bot) => bot.bot)) {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj = { helpUrl: articleURL };
          let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.SkGL7l, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.llTkqr, { helpUrl: articleURL });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_USER",
  messageGetter() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { helpUrl: importDefault(1920).getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.SkGL7l, obj);
  }
};
let closure_55 = {
  [AbortCodes.SLOWMODE_RATE_LIMITED]: obj,
  [AbortCodes.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: obj,
  [AbortCodes.INVALID_MESSAGE_SEND_USER]: obj,
  [AbortCodes.TOO_MANY_THREADS]: {
    messageName: "TOO_MANY_THREADS",
    messageGetter(isForumLikeChannel) {
      if (!isForumLikeChannel.isForumLikeChannel()) {
        if (!isForumLikeChannel.isForumPost()) {
          const intl = require(1212) /* getSystemLocale */.intl;
          let stringResult = intl.string(require(1212) /* getSystemLocale */.t["5EMPA7"]);
        }
        return stringResult;
      }
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t["/jUd2+"]);
    }
  },
  [AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS]: {
    messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["aY+lLC"]);
    }
  },
  [AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED]: {
    messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
    }
  },
  [AbortCodes.HARMFUL_URL_BLOCKED]: {
    messageName: "HARMFUL_URL_BLOCKED",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.WxX2Fd);
    }
  },
  [AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
    messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.k1Cjqr);
    }
  },
  [AbortCodes.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
    messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.Z5SUuv);
    }
  },
  [AbortCodes.RATE_LIMIT_DM_OPEN]: {
    messageName: "BOT_DM_RATE_LIMITED",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.E8nbNb);
    }
  },
  [AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.aRUbah);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["/meGhR"]);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.Oc1Zjw);
    }
  },
  [AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
    messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj = { maxSizeMb: require(4666) /* items */.MAX_TOTAL_ATTACHMENT_SIZE_MB };
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.DYFPg2, obj);
    }
  },
  [AbortCodes.CLOUD_UPLOAD_NOT_FOUND]: {
    messageName: "CLOUD_UPLOAD_NOT_FOUND",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.bQldfH);
    }
  },
  [AbortCodes.INVALID_PERMISSIONS]: {
    messageName: "INVALID_PERMISSIONS",
    messageGetter() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.zl4Weq);
    }
  }
};
let obj14 = {
  receiveMessage(channel_id, body, arg2, outer1_2) {
    let flag = arg2;
    let obj = outer1_2;
    if (arg2 === undefined) {
      flag = false;
    }
    if (obj === undefined) {
      obj = {};
    }
    obj = { type: "MESSAGE_CREATE", channelId: channel_id, message: body, optimistic: flag };
    obj.sendMessageOptions = obj;
    obj.isPushNotification = false;
    importDefault(686).dispatch(obj);
  },
  sendBotMessage(id, intl, messageName, nonce) {
    if (null != messageName) {
      let obj = importDefault(4324);
      obj = { message_author: "Clyde", message_name: messageName };
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_RECEIVED, obj);
    }
    obj = { messageId: nonce, channelId: id, content: intl, loggingName: messageName };
    obj14.receiveMessage(id, require(6995) /* userRecordToServer */.createBotMessage(obj));
  },
  sendNitroSystemMessage(channelId, content, nonce) {
    obj = { channelId, nonce, type: constants6.NITRO_NOTIFICATION, content, flags: closure_35.EPHEMERAL, author: obj };
    obj = { id: closure_42, username: "Nitro Notification", discriminator: closure_43, avatar: "nitro", bot: true };
    obj = {};
    const merged = Object.assign(importDefault(6995)(obj));
    obj["state"] = constants9.SENT;
    obj["channel_id"] = channelId;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGiftingPromptSystemMessage(channelId, giftingPrompt) {
    obj = { channelId, type: constants6.GIFTING_PROMPT, content: "", flags: closure_35.EPHEMERAL, author: obj, giftingPrompt };
    obj = { id: closure_42, username: "Gifting Prompt", discriminator: closure_43, avatar: "gifting_prompt", bot: true };
    obj = {};
    const merged = Object.assign(importDefault(6995)(obj));
    obj["state"] = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGuildBoostUpsellSystemMessage(channelId, boostingPrompt) {
    obj = { channelId, type: constants6.GUILD_BOOST_UPSELL, content: "", flags: closure_35.EPHEMERAL, author: obj, boostingPrompt };
    obj = { id: closure_42, username: "Guild Boost Upsell", discriminator: closure_43, avatar: "guild_boost_upsell", bot: true };
    obj = {};
    const merged = Object.assign(importDefault(6995)(obj));
    obj["state"] = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendClydeError(closure_0, code) {
    let num = code;
    if (code === undefined) {
      num = 0;
    }
    const channel = store.getChannel(closure_0);
    if (null != channel) {
      let obj = table[num];
      if (null != obj) {
        obj14.sendBotMessage(closure_0, obj.messageGetter(channel), obj.messageName);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { helpUrl: importDefault(1920).getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
        const _HermesInternal = HermesInternal;
        const obj3 = importDefault(1920);
        obj14.sendBotMessage(closure_0, intl.formatToPlainString(require(1212) /* getSystemLocale */.t.SkGL7l, obj), "SEND_FAILED (" + num + ")");
        const formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.SkGL7l, obj);
      }
    }
  },
  sendExplicitMediaClydeError(channelId, attachments1, EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED) {
    let message;
    let messageName;
    const channel = store.getChannel(channelId);
    if (null != channel) {
      let obj = { isDM: channel.isDM(), isGDM: channel.isGroupDM() };
      const match = require(4329) /* n */.match(obj);
      obj = { isDM: true };
      const str2 = require(4329) /* n */;
      const withResult = match.with(obj, () => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t["mktny/"]);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      });
      const withResult1 = match.with(obj, () => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t["mktny/"]);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t["mktny/"]);
        obj.messageName = "BOT_GDM_EXPLICIT_CONTENT";
        return obj;
      });
      ({ message, messageName } = match.with(obj, () => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t["mktny/"]);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t["mktny/"]);
        obj.messageName = "BOT_GDM_EXPLICIT_CONTENT";
        return obj;
      }).otherwise(() => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t.i4AbAS);
        obj.messageName = "BOT_GUILD_EXPLICIT_CONTENT";
        return obj;
      }));
      const otherwiseResult = match.with(obj, () => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t["mktny/"]);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      }).with({ isDM: false, isGDM: true }, () => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t["mktny/"]);
        obj.messageName = "BOT_GDM_EXPLICIT_CONTENT";
        return obj;
      }).otherwise(() => {
        const obj = {};
        const intl = outer1_0(outer1_3[46]).intl;
        obj.message = intl.string(outer1_0(outer1_3[46]).t.i4AbAS);
        obj.messageName = "BOT_GUILD_EXPLICIT_CONTENT";
        return obj;
      });
      const nonce = require(6996) /* snowflakeSequence */.createNonce();
      obj14.sendBotMessage(channelId, message, messageName, nonce);
      const obj9 = require(6996) /* snowflakeSequence */;
      let obj1 = { action: require(6835) /* timeoutAttachmentsAndEmbedsForMessage */.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT, messageId: nonce, channelId, context: EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED };
      const result = require(6835) /* timeoutAttachmentsAndEmbedsForMessage */.trackMediaRedactionAction(obj1);
      let tmp = null != attachments1;
      if (tmp) {
        tmp = attachments1.length > 0;
      }
      if (tmp) {
        obj1 = importDefault(686);
        const obj2 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: nonce, channelId, attachments: attachments1 };
        obj1.dispatch(obj2);
      }
      const obj10 = require(6835) /* timeoutAttachmentsAndEmbedsForMessage */;
    }
  },
  truncateMessages(channelId, truncateBottom, truncateTop) {
    let obj = importDefault(686);
    obj = { type: "TRUNCATE_MESSAGES", channelId, truncateBottom, truncateTop };
    obj.dispatch(obj);
  },
  clearChannel(channelId) {
    let obj = importDefault(686);
    obj = { type: "CLEAR_MESSAGES", channelId };
    obj.dispatch(obj);
  },
  jumpToPresent(channelId, limit) {
    obj14.trackJump(channelId, null, "Present");
    let obj = { present: true };
    if (closure_23.hasPresent(channelId)) {
      obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED" };
      obj.jump = obj;
      obj.channelId = channelId;
      obj.limit = limit;
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    } else {
      obj = { channelId, limit };
      obj.jump = obj;
      const messages = obj14.fetchMessages(obj);
    }
  },
  trackJump(channelId, id, Present, extraProperties) {
    let obj = importDefault(4324);
    obj = { context: Present, channel_id: channelId, message_id: id };
    const merged = Object.assign(extraProperties);
    obj.trackWithMetadata(constants.JUMP, obj);
  },
  jumpToMessage(arg0) {
    let avoidInitialScroll;
    let channelId;
    let context;
    let extraProperties;
    let flash;
    let isPreload;
    let jumpType;
    let messageId;
    let offset;
    let onJumpComplete;
    let returnMessageId;
    let skipLocalFetch;
    ({ channelId, messageId, flash } = arg0);
    if (flash === undefined) {
      flash = false;
    }
    ({ context, extraProperties, offset } = arg0);
    if (extraProperties === undefined) {
      extraProperties = null;
    }
    ({ isPreload, returnMessageId, skipLocalFetch, jumpType, avoidInitialScroll, onJumpComplete } = arg0);
    if ("string" === typeof context) {
      obj14.trackJump(channelId, messageId, context, extraProperties);
    }
    let tmp8 = null == MediaPlayerManager;
    if (!tmp8) {
      tmp8 = null == MediaPlayerManager.pauseAllMediaPlayers;
    }
    if (!tmp8) {
      MediaPlayerManager.pauseAllMediaPlayers();
    }
    obj = { channelId, limit: closure_36, jump: obj, isPreload, skipLocalFetch, avoidInitialScroll };
    obj = { messageId, flash, offset, returnMessageId, jumpType, onJumpComplete };
    return obj14.fetchMessages(obj);
  },
  focusMessage(channelId) {
    obj = { channelId: channelId.channelId, limit: closure_36, focus: obj };
    obj = { messageId: channelId.messageId };
    const messages = obj14.fetchMessages(obj);
  },
  fetchMessage(arg0) {
    let importDefault;
    let require;
    ({ channelId: require, messageId: importDefault } = arg0);
    return callback(async () => {
      const HTTP = outer2_0(outer2_3[54]).HTTP;
      obj = { url: outer2_30.MESSAGES(outer1_0), query: obj, retries: 2, oldFormErrors: true };
      obj = { limit: 1, around: outer1_1, rejectWithError: outer2_0(outer2_3[54]).rejectWithMigratedError() };
      const tmp = yield HTTP.get(obj);
      if (tmp.body.length > 0) {
        return outer2_0(outer2_3[55]).createMessageRecord(tmp.body[0]);
      }
      const obj3 = outer2_0(outer2_3[54]);
    })();
  },
  fetchMessages(channelId) {
    let closure_6;
    let closure_7;
    let feature;
    let fetchKey;
    let focus;
    let isPreload;
    let skipLocalFetch;
    let truncate;
    const self = this;
    channelId = channelId.channelId;
    const before = channelId.before;
    const after = channelId.after;
    const limit = channelId.limit;
    const jump = channelId.jump;
    ({ focus, truncate } = channelId);
    ({ forICYMI: closure_6, avoidInitialScroll: closure_7, fetchKey } = channelId);
    let messageId;
    let c12;
    ({ isPreload, skipLocalFetch, feature } = channelId);
    const channel = store.getChannel(channelId);
    let closure_9 = fetchKey.isConnectedOrOverlay();
    let timestamp = Date.now();
    if (null != channel) {
      if (channel.type === constants2.GUILD_STORE) {
        return false;
      }
    }
    if (channelId !== channelId(limit[56]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      importDefaultResult1.log("Fetching messages for " + channelId + " between " + after + " and " + before + ". jump=" + JSON.stringify(jump));
      let obj = { channelId, before, after, limit, jump, focus, truncate };
      if (!obj14._tryFetchMessagesCached(obj)) {
        let fetchMessages = before(limit[57]).fetchMessages;
        fetchMessages.recordStart();
        obj = before(limit[58]);
        let tmp7 = timestamp;
        if (null != fetchKey) {
          tmp7 = fetchKey;
        }
        let result = obj.recordChannelFetchStart(channelId, tmp7, before, after, limit);
        let tmp15;
        if (null != jump) {
          tmp15 = jump;
        }
        if (tmp16) {
          obj = {};
          const merged = Object.assign(focus);
          tmp15 = obj;
        }
        let obj2 = before(limit[59]);
        const orCreate = obj2.getOrCreate(channelId);
        const start = orCreate.loadStart(tmp15);
        before(limit[59]).commit(start);
        const obj5 = before(limit[59]);
        tmp16 = null == tmp15 && null != focus;
        const obj1 = { type: "LOAD_MESSAGES" };
        before(limit[49]).dispatch(obj1);
        messageId = undefined;
        if (null != tmp15) {
          messageId = tmp15.messageId;
        }
        const prototype = ctor.prototype;
        const tmp29 = new ctor();
        c12 = tmp29;
        if (!skipLocalFetch) {
          if (null != fetchKey) {
            timestamp = fetchKey;
          }
          const localMessages = self.fetchLocalMessages(channelId, timestamp, before, after, limit, tmp30);
        }
        const HTTP = channelId(limit[54]).HTTP;
        obj2 = { url: closure_30.MESSAGES(channelId) };
        const obj3 = { before, after, limit, around: messageId, preload: isPreload, feature };
        obj2.query = obj3;
        obj2.retries = 2;
        obj2.oldFormErrors = true;
        const obj6 = before(limit[49]);
        obj2.rejectWithError = channelId(limit[54]).rejectWithMigratedError();
        const value = HTTP.get(obj2);
        return value.then((arg0) => {
          let closure_0 = arg0;
          const fetchMessages = before(limit[57]).fetchMessages;
          fetchMessages.recordEnd();
          const dispatchMessages = before(limit[57]).dispatchMessages;
          dispatchMessages.measure(() => {
            body = body.body;
            let flag = null != outer1_11;
            if (!flag) {
              let tmp4 = body.length === outer1_3;
              if (tmp4) {
                let tmp5 = tmp;
                if (!tmp) {
                  let tmp7 = null == outer1_1;
                  if (tmp7) {
                    tmp7 = null == outer1_2;
                  }
                  tmp5 = tmp7;
                }
                tmp4 = tmp5;
              }
              flag = tmp4;
            }
            let flag2 = null != outer1_11;
            if (!flag2) {
              let tmp9 = tmp2;
              if (tmp2) {
                tmp9 = body.length === outer1_3;
              }
              flag2 = tmp9;
            }
            let tmp11 = flag;
            let flag3 = flag2;
            if (null != outer1_11) {
              const _Math = Math;
              const rounded = Math.floor(outer1_3 / 2);
              const items = [outer1_11];
              HermesBuiltin.arraySpread(body.map((id) => id.id), 1);
              const found = items.filter((arg0, arg1, arr) => arr.indexOf(arg0) === arg1);
              const sorted = found.sort(before(limit[60]).compare);
              const index = sorted.indexOf(outer1_11);
              if (index < rounded + outer1_3 % 2 - 1) {
                flag = false;
              }
              if (body.length - index < rounded) {
                flag2 = false;
              }
              tmp11 = flag;
              flag3 = flag2;
              if (flag2) {
                tmp11 = flag;
                flag3 = flag2;
                if (body.length > 0) {
                  tmp11 = flag;
                  flag3 = flag2;
                  if (body[0].id === outer2_25.lastMessageId(body)) {
                    flag3 = false;
                    tmp11 = flag;
                  }
                }
              }
            }
            outer2_51.log("Fetched " + body.length + " messages for " + body + " isBefore:" + null != outer1_1 + " isAfter:" + null != outer1_2);
            outer1_12.markComplete();
            let obj = before(limit[49]);
            obj = { type: "LOAD_MESSAGES_SUCCESS", channelId: body, messages: body, isBefore: tmp, isAfter: tmp2, hasMoreBefore: tmp11, hasMoreAfter: flag3, limit: outer1_3, jump: outer1_4, forICYMI: outer1_6 };
            let tmp16 = !outer1_9;
            if (!tmp16) {
              tmp16 = fetchKey.lastTimeConnectedChanged() >= outer1_10;
            }
            obj.isStale = tmp16;
            obj.truncate = outer1_5;
            obj.avoidInitialScroll = outer1_7;
            obj.dispatch(obj);
            const result = before(limit[58]).recordChannelFetchedNetwork(body, null != outer1_8 ? outer1_8 : outer1_10, outer1_1, outer1_2, outer1_3, body);
          });
          return true;
        }, () => {
          outer1_51.log("Failed to fetch messages for " + channelId);
          let obj = before(limit[49]);
          obj = { type: "LOAD_MESSAGES_FAILURE", channelId };
          obj.dispatch(obj);
          return false;
        });
      }
    }
  },
  fetchLocalMessages(channelId, timestamp, before, after, limit, arg5) {
    let closure_0 = channelId;
    let closure_1 = timestamp;
    let closure_2 = before;
    let closure_3 = after;
    let _createForOfIteratorHelperLoose = limit;
    const callback = arg5;
    return callback(async () => {
      let c0;
      const basicChannel = outer2_19.getBasicChannel(outer1_0);
      let obj = callback2(4803);
      const orCreate = obj.getOrCreate(outer1_0);
      const databaseResult = callback2(1882).database();
      c0 = databaseResult;
      if (null != databaseResult) {
        if (null != basicChannel) {
          if (null == outer1_2) {
            if (null == outer1_3) {
              if (orCreate.ready) {
                if (!orCreate.cached) {
                  callback2(14).addLocalMessages(outer1_0, -2);
                  const obj4 = callback2(14);
                }
              }
              const tmp13 = yield callback(1901).tryLoadAsync(() => callback(table[63]).load(c0, outer2_0, outer2_4));
              if (null != tmp13) {
                const _HermesInternal = HermesInternal;
                outer2_51.log("fetched " + tmp13.messages.length + " messages from local database (channel_id: " + outer1_0 + ", remote_fetch_completed: " + outer1_5.completed + ")");
                callback2(14).addLocalMessages(outer1_0, tmp13.messages.length);
                if (!outer1_5.completed) {
                  if (tmp13.messages.length > 0) {
                    let tmp28 = tmp13.messages.length >= outer1_4;
                    if (tmp28) {
                      tmp28 = tmp13.connectionId === outer2_8.lastTimeConnectedChanged();
                    }
                    const obj8 = callback2(6720);
                    const result = obj8.recordChannelFetchedLocal(outer1_0, outer1_1, outer1_2, outer1_3, outer1_4, tmp13.messages);
                    obj = { type: "LOCAL_MESSAGES_LOADED", guildId: basicChannel.guild_id, channelId: outer1_0 };
                    ({ users: obj10.users, members: obj10.members, messages: obj10.messages } = tmp13);
                    obj.stale = !tmp28;
                    callback2(686).dispatch(obj);
                    const obj9 = callback2(686);
                  }
                }
                const obj7 = callback2(14);
              } else {
                callback2(14).addLocalMessages(outer1_0, -3);
                const obj6 = callback2(14);
              }
              const obj5 = callback(1901);
            }
          }
        }
      }
      const obj2 = callback2(1882);
      callback2(14).addLocalMessages(outer1_0, -1);
    })();
  },
  fetchNewLocalMessages(channelId, closure_18) {
    let closure_0 = channelId;
    let closure_1 = closure_18;
    return callback(async () => {
      let c0;
      let id;
      const basicChannel = outer2_19.getBasicChannel(outer1_0);
      let obj = callback2(outer2_3[61]);
      const databaseResult = obj.database();
      c0 = databaseResult;
      if (null != databaseResult) {
        if (null != basicChannel) {
          if (!obj3.getOrCreate(outer1_0).hasMoreAfter) {
            const tmp5 = yield callback(outer2_3[62]).tryLoadAsync(() => id(outer3_3[63]).load(c0, outer2_0, outer2_1));
            if (null != tmp5) {
              const orCreate = callback2(outer2_3[59]).getOrCreate(outer1_0);
              const lastResult = orCreate.last();
              id = undefined;
              if (null != lastResult) {
                id = lastResult.id;
              }
              if (null == id) {
                let messages = tmp5.messages;
              } else {
                const messages1 = tmp5.messages;
                messages = messages1.filter((id) => id(outer3_3[60]).compare(id.id, id) > 0);
              }
              const _HermesInternal = HermesInternal;
              outer2_51.log("Fetched " + tmp5.messages.length + " messages from the cache after foregrounding. " + messages.length + " are new");
              if (0 !== messages.length) {
                obj = { type: "LOCAL_MESSAGES_LOADED", guildId: basicChannel.guild_id, channelId: outer1_0 };
                ({ users: obj7.users, members: obj7.members } = tmp5);
                obj.messages = messages;
                obj.stale = true;
                const obj6 = callback2(outer2_3[49]);
                obj.isForegroundCacheLoad = callback(outer2_3[64]).isIOSPushNotificationRawPayloadFixExperimentEnabled();
                obj6.dispatch(obj);
                const obj8 = callback(outer2_3[64]);
              }
              const obj4 = callback2(outer2_3[59]);
            }
            const obj2 = callback(outer2_3[62]);
          }
          obj3 = callback2(outer2_3[59]);
        }
      }
    })();
  },
  _tryFetchMessagesCached(arg0) {
    let after;
    let before;
    let channelId;
    let focus;
    let jump;
    let limit;
    let truncate;
    ({ channelId, before, after, limit, jump, focus, truncate } = arg0);
    const messages = closure_23.getMessages(channelId);
    if (!messages.cached) {
      if (messages.ready) {
        let messageId;
        if (null != jump) {
          messageId = jump.messageId;
        }
        if (null == messageId) {
          let messageId1;
          if (null != focus) {
            messageId1 = focus.messageId;
          }
          if (null == messageId1) {
            if (null != before) {
              if (messages.hasBeforeCached(before)) {
                let obj3 = importDefault(686);
                let obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, before, limit, truncate };
                obj3.dispatch(obj);
                let flag = true;
              }
              return flag;
            }
            const tmp4 = null == after || !messages.hasAfterCached(after);
            flag = !tmp4;
            if (!tmp4) {
              let obj1 = importDefault(686);
              obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, after, limit, truncate };
              obj1.dispatch(obj);
              flag = true;
            }
          }
        }
        let messageId2;
        if (null != jump) {
          messageId2 = jump.messageId;
        }
        if (null != messageId2) {
          if (messages.has(jump.messageId, false)) {
            obj1 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump, limit, truncate };
            importDefault(686).dispatch(obj1);
            return true;
          }
        }
        let messageId3;
        if (null != focus) {
          messageId3 = focus.messageId;
        }
        let tmp13 = jump;
        if (null != messageId3) {
          if (messages.has(focus.messageId, false)) {
            const obj2 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, focus, limit, truncate };
            importDefault(686).dispatch(obj2);
            return true;
          } else {
            obj3 = {};
            const merged = Object.assign(focus);
            tmp13 = obj3;
          }
        }
        let messageId4;
        if (null != tmp13) {
          messageId4 = tmp13.messageId;
        }
        let num3 = 0;
        if (null != messageId4) {
          let messageId5;
          if (null != tmp13) {
            messageId5 = tmp13.messageId;
          }
          num3 = importDefault(21).extractTimestamp(messageId5);
          const obj7 = importDefault(21);
        }
        const firstResult = messages.first();
        const lastResult = messages.last();
        let flag4 = !messages.hasMoreBefore && null != firstResult;
        if (flag4) {
          flag4 = importDefault(21).extractTimestamp(firstResult.id) >= num3;
          const obj8 = importDefault(21);
        }
        if (!flag4) {
          let tmp25 = !messages.hasMoreAfter && null != lastResult;
          if (tmp25) {
            tmp25 = importDefault(21).extractTimestamp(lastResult.id) <= num3;
            const obj9 = importDefault(21);
          }
          flag4 = tmp25;
        }
        if (!flag4) {
          let tmp28 = null != firstResult && null != lastResult;
          if (tmp28) {
            tmp28 = importDefault(21).extractTimestamp(firstResult.id) < num3;
            const obj10 = importDefault(21);
          }
          if (tmp28) {
            tmp28 = importDefault(21).extractTimestamp(lastResult.id) > num3;
            const obj11 = importDefault(21);
          }
          flag4 = tmp28;
        }
        if (flag4) {
          const obj4 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump: tmp13, limit: closure_36 };
          importDefault(686).dispatch(obj4);
          flag4 = true;
          const obj12 = importDefault(686);
        }
        return flag4;
      }
    }
    return false;
  },
  sendMessage(arg0, arg1) {
    let flag = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (arg2 === undefined) {
      flag = true;
    }
    let closure_3 = arg3;
    return callback(async () => {
      let c0;
      if (outer1_1.reaction) {
        return Promise.resolve();
      } else {
        const tmp4 = yield closure_1(closure_3[65])(outer1_0);
        if (null != tmp4) {
          return outer2_56.sendMessage(tmp4, outer1_1, outer1_2, outer1_3);
        } else {
          let nonce = outer1_3.nonce;
          if (null == nonce) {
            let obj = callback(6996);
            nonce = obj.createNonce();
          }
          obj = {};
          const merged = Object.assign(outer1_3);
          obj["nonce"] = nonce;
          outer1_3 = obj;
          const backgroundifyResult = callback2(6998).backgroundify(function _trySend() {
            return outer3_56._sendMessage(outer2_0, outer2_1, outer2_3);
          }, undefined);
          c0 = backgroundifyResult;
          const result = outer2_11.recordMessageSendAttempt(outer1_0, nonce, outer1_3);
          if (outer2_23.isReady(outer1_0)) {
            let backgroundifyResultResult = backgroundifyResult();
          } else {
            if (outer1_2) {
              if (outer1_0 !== callback(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
                const _HermesInternal = HermesInternal;
                outer2_52.info("Waiting for channel " + outer1_0 + " to be ready before sending.");
                backgroundifyResultResult = new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  let closure_1 = arg1;
                  outer3_23.whenReady(outer2_0, () => {
                    outer4_52.info("Channel " + outer3_0 + " is ready for sending now.");
                    callback().then(callback, closure_1);
                  });
                });
              }
            }
            backgroundifyResultResult = backgroundifyResult();
          }
          return backgroundifyResultResult;
        }
      }
    })();
  },
  getSendMessageOptionsForReply(pendingReply) {
    if (null == pendingReply) {
      let obj = {};
    } else {
      obj = {};
      obj = {};
      const channel = pendingReply.channel;
      const guildId = channel.getGuildId();
      let tmp;
      if (null != guildId) {
        tmp = guildId;
      }
      obj.guild_id = tmp;
      obj.channel_id = pendingReply.channel.id;
      obj.message_id = pendingReply.message.id;
      obj.messageReference = obj;
      let tmp2;
      if (!pendingReply.shouldMention) {
        obj = {};
        const _Object = Object;
        obj.parse = Object.values(closure_38);
        obj.replied_user = false;
        tmp2 = obj;
      }
      obj.allowedMentions = tmp2;
      obj.mediaMention = pendingReply.mediaMention;
    }
    return obj;
  },
  getSendMessageOptionsForStickers(stickers) {
    stickers = stickers.stickers;
    if (null != stickers) {
      if (0 !== stickers.length) {
        if (!tmp) {
          let obj = { stickerIds: stickers };
        }
        return obj;
      }
    }
    obj = {};
  },
  getSendMessageOptionsForScheduledMessage(scheduledTimestamp) {
    scheduledTimestamp = scheduledTimestamp.scheduledTimestamp;
    if (null == scheduledTimestamp) {
      let obj = {};
    } else {
      obj = { scheduledTimestamp };
    }
    return obj;
  },
  getSendMessageOptionsForAlsoForwardToChannel(alsoForwardToChannelId) {
    return { alsoForwardToChannelId: alsoForwardToChannelId.alsoForwardToChannelId };
  },
  getSendMessageOptions(pendingReply) {
    let obj = {};
    const merged = Object.assign(obj14.getSendMessageOptionsForReply(pendingReply.pendingReply));
    obj = {};
    const merged1 = Object.assign(pendingReply);
    const merged2 = Object.assign(obj14.getSendMessageOptionsForStickers(obj));
    obj = {};
    const merged3 = Object.assign(pendingReply);
    const merged4 = Object.assign(obj14.getSendMessageOptionsForScheduledMessage(obj));
    const merged5 = Object.assign(pendingReply);
    const merged6 = Object.assign(obj14.getSendMessageOptionsForAlsoForwardToChannel({}));
    return obj;
  },
  sendInvite(id, code, _location, closure_1, content) {
    const tmp = importDefault(7001)(code);
    let combined = tmp;
    if (null != content) {
      const _HermesInternal = HermesInternal;
      combined = "" + content + "\n" + tmp;
    }
    let obj = { content: combined, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] };
    obj = { location: _location, inviteAnalyticsMetadata: closure_1 };
    return obj14._sendMessage(id, obj, obj);
  },
  sendActivityBookmark(arg0, content, location, inviteAnalyticsMetadata) {
    let obj = { content, tts: false, validNonShortcutEmojis: [], invalidEmojis: [] };
    obj = { location, inviteAnalyticsMetadata };
    return obj14._sendMessage(arg0, obj, obj);
  },
  sendStickers(id, items1, result, arg3) {
    let str = result;
    let flag = arg4;
    if (result === undefined) {
      str = "";
    }
    if (flag === undefined) {
      flag = false;
    }
    if ("string" === typeof str) {
      let obj = { content: str, invalidEmojis: [], validNonShortcutEmojis: [], tts: flag };
      let tmp6 = obj;
    } else {
      obj = {};
      const merged = Object.assign(str);
      const tts = str.tts;
      let tmp5 = flag;
      if (null != tts) {
        tmp5 = tts;
      }
      obj["tts"] = tmp5;
      tmp6 = obj;
    }
    obj = {};
    const merged1 = Object.assign(arg3);
    obj["stickerIds"] = items1;
    return obj14._sendMessage(id, tmp6, obj);
  },
  sendGreetMessage(id, _749054660769218631, sendMessageOptionsForReply) {
    let allowedMentions;
    let messageReference;
    let obj = sendMessageOptionsForReply;
    const _require = id;
    let closure_1 = _749054660769218631;
    if (sendMessageOptionsForReply === undefined) {
      obj = {};
    }
    ({ messageReference, allowedMentions } = obj);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_30.MESSAGES_GREET(id), body: { sticker_ids: items, allowed_mentions: allowedMentions, message_reference: messageReference }, oldFormErrors: true };
    items = [_749054660769218631];
    obj.rejectWithError = _require(507).rejectWithMigratedError();
    obj = { location: constants10.GREET };
    obj.context = obj;
    const obj3 = _require(507);
    return HTTP.post(obj).then((body) => {
      v749054660769218631(outer1_3[68]).donateSentMessage(body.body.content, closure_0);
      outer1_56.receiveMessage(closure_0, body.body);
      const obj = v749054660769218631(outer1_3[68]);
      const items = [v749054660769218631];
      v749054660769218631(outer1_3[49]).dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: items });
      return body;
    }, (messageId) => {
      outer1_51.log("Failed to send greeting");
      if (429 !== messageId.status) {
        outer1_56.sendClydeError(closure_0, messageId.body.code);
      }
      let obj = v749054660769218631(outer1_3[49]);
      obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.body.id, channelId: closure_0 };
      obj.dispatch(obj);
      throw messageId;
    });
  },
  sendPollMessage(id, arg1, arg2) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    obj = { content: "", tts: false, validNonShortcutEmojis: [], invalidEmojis: [] };
    obj = {};
    const merged = Object.assign(obj);
    obj["poll"] = arg1;
    obj["location"] = constants10.POLL_CREATION;
    return obj14._sendMessage(id, obj, obj);
  },
  validateMessage(invalidEmojis, currentUser, outer1_0) {
    if (invalidEmojis.some((animated) => animated.animated)) {
      let obj = importDefault(3776);
      if (!obj.canUseAnimatedEmojis(currentUser)) {
        const intl = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl.string(require(1212) /* getSystemLocale */.t["V5/GgC"]);
        let str = "INVALID_ANIMATED_EMOJI_BODY";
      }
      obj = { errorMessage: stringResult, errorMessageName: str };
      return obj;
    }
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t["Q87rI/"]);
    str = "INVALID_EXTERNAL_EMOJI_BODY";
  },
  _sendMessage(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return callback(async () => {
      let _location;
      let activity;
      let activityAction;
      let allowedMentions;
      let announcementSendOptions;
      let attachments;
      let attachments2;
      let attachmentsToUpload;
      let c1;
      let c13;
      let c3;
      let contentInventoryEntry;
      let flags;
      let invalidEmojis;
      let mediaMention;
      let onAttachmentUploadError;
      let poll;
      let publish;
      let sharedCustomTheme;
      let stickerIds;
      let tts;
      let withCheckpoint;
      let content;
      c1 = undefined;
      _location = undefined;
      c3 = undefined;
      stickerIds = undefined;
      let messageReference;
      poll = undefined;
      contentInventoryEntry = undefined;
      attachmentsToUpload = undefined;
      let c9;
      let DEFAULT;
      let nonce;
      nonce = undefined;
      c13 = undefined;
      let obj;
      const promise = callback2(outer2_3[65])(outer1_0);
      if (null != promise) {
        let infoResult = outer2_52;
        infoResult = outer2_52.info("Converting channel to a private channel");
        return promise.then((arg0) => {
          outer3_52.info("Finished converting channel to a private channel");
          return outer3_56._sendMessage(arg0, outer2_1, outer2_2);
        });
      } else {
        infoResult = outer1_1;
        content = outer1_1.content;
        ({ invalidEmojis, validNonShortcutEmojis: c1, tts } = outer1_1);
        infoResult = undefined !== tts && tts;
        ({ activityAction, location: _location } = outer1_2);
        ({ inviteAnalyticsMetadata: c3, stickerIds } = outer1_2);
        messageReference = outer1_2.messageReference;
        ({ allowedMentions, poll } = outer1_2);
        ({ sharedCustomTheme, contentInventoryEntry } = outer1_2);
        ({ attachments, attachmentsToUpload } = outer1_2);
        ({ onAttachmentUploadError, announcementSendOptions, withCheckpoint, mediaMention, flags } = outer1_2);
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        const tmp6 = outer2_4(callback2(outer2_3[70])(content), 2);
        let tmp8 = content;
        let addFlagResult = num2;
        if (tmp6[0]) {
          content = tmp7;
          obj = callback(outer2_3[71]);
          addFlagResult = obj.addFlag(num2, outer2_35.SUPPRESS_NOTIFICATIONS);
          tmp8 = tmp7;
        }
        let channel = outer2_19.getChannel(outer1_0);
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        const guild = outer2_21.getGuild(guild_id);
        let obj1 = callback(outer2_3[72]);
        let addFlagResult1 = addFlagResult;
        if (obj1.canSendGuildOfficialMessages(guild, channel, "_sendMessage")) {
          let obj2 = callback(outer2_3[71]);
          addFlagResult1 = obj2.addFlag(addFlagResult, outer2_35.IS_GUILD_OFFICIAL);
        }
        let flag2 = false;
        const messageReference2 = outer1_2.messageReference;
        let type;
        if (null != messageReference2) {
          type = messageReference2.type;
        }
        c9 = tmp28;
        if ("" === tmp8) {
          if (null == activityAction) {
            if (null == stickerIds) {
              if (null == poll) {
                if (null == sharedCustomTheme) {
                  if (null == contentInventoryEntry) {
                    if (!tmp28) {
                      if (null == attachments) {
                        if (!withCheckpoint) {
                          if (null == outer1_1.components) {
                            if (null != arr) {
                              if (arr.length > 0) {
                                flag2 = true;
                              }
                            }
                            return Promise.resolve();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null != messageReference) {
          DEFAULT = outer2_37.REPLY;
        } else {
          DEFAULT = outer2_37.DEFAULT;
        }
        nonce = outer1_2.nonce;
        if (null == nonce) {
          let obj3 = callback(outer2_3[52]);
          nonce = obj3.createNonce();
        }
        obj = { channelId: outer1_0, content: tmp8, tts: infoResult, type: DEFAULT, messageReference, allowedMentions };
        let tmp44;
        if (0 !== addFlagResult1) {
          tmp44 = addFlagResult1;
        }
        obj.flags = tmp44;
        obj.nonce = nonce;
        const tmp42 = callback2(outer2_3[50]);
        obj.poll = callback(outer2_3[73]).createPollServerDataFromCreateRequest(poll);
        obj.sharedCustomTheme = sharedCustomTheme;
        obj.mediaMention = mediaMention;
        const tmp42Result = tmp42(obj);
        if (false !== outer1_2.eagerDispatch) {
          let result = callback(outer2_3[74]).updateComboOnMessageSend(outer1_0, tmp42Result.id);
          if (null != stickerIds) {
            const mapped = stickerIds.map((arg0) => outer3_16.getStickerById(arg0));
            tmp42Result.sticker_items = mapped.filter((arg0) => null != arg0);
          }
          outer2_56.receiveMessage(outer1_0, tmp42Result, true, outer1_2);
          let obj7 = callback(outer2_3[74]);
        }
        if (!outer2_53) {
          if (null != invalidEmojis) {
            if (invalidEmojis.length > 0) {
              outer2_53 = true;
              const validateMessageResult = outer2_56.validateMessage(invalidEmojis, outer2_27.getCurrentUser(), outer1_0);
              outer2_56.sendBotMessage(outer1_0, validateMessageResult.errorMessage, validateMessageResult.errorMessageName);
            }
          }
        }
        obj = {};
        if (null != announcementSendOptions) {
          let SEND = callback(outer2_3[75]).MessageDataType.SEND_ANNOUNCEMENT;
        } else {
          SEND = callback(outer2_3[75]).MessageDataType.SEND;
        }
        obj.type = SEND;
        obj1 = { channelId: outer1_0, content: tmp8, nonce, tts: infoResult, message_reference: messageReference, allowed_mentions: allowedMentions, flags: addFlagResult1, analyticsLocation: _location };
        obj.message = obj1;
        if (null != outer1_1.components) {
          tmp75.message.components = outer1_1.components;
        }
        if (null != announcementSendOptions) {
          ({ createThread: tmp75.message.create_thread, threadName: tmp75.message.title, publish } = announcementSendOptions);
          let tmp80 = null != publish;
          if (tmp80) {
            tmp80 = publish;
          }
          tmp75.message.publish = tmp80;
        }
        if (null != activityAction) {
          let session_id;
          if (null != activityAction) {
            session_id = activityAction.activity.session_id;
          }
          let sessionId = session_id;
          if (activityAction.type !== outer2_45.JOIN_REQUEST) {
            sessionId = session_id;
            if (activityAction.type !== outer2_45.STREAM_REQUEST) {
              sessionId = session_id;
              if (null == session_id) {
                sessionId = outer2_18.getSessionId();
              }
            }
          }
          if (null != sessionId) {
            obj2 = { type: activityAction.type, session_id: sessionId };
            ({ targetUserId: obj10.target_user_id, activity } = activityAction);
            if (tmp86) {
              obj2.party_id = activity.party.id;
            }
            tmp75.message.application_id = activity.application_id;
            tmp75.message.activity = obj2;
            tmp86 = null != activity.party && null != activity.party.id;
          }
        }
        if (null != poll) {
          tmp75.message.poll = poll;
        }
        if (null != sharedCustomTheme) {
          tmp75.message.shared_client_theme = sharedCustomTheme;
        }
        if (null != stickerIds) {
          tmp75.message.sticker_ids = stickerIds;
        }
        if (outer2_12.isEnabled()) {
          tmp75.message.has_poggermode_enabled = true;
        }
        if (withCheckpoint) {
          tmp75.message.with_checkpoint = true;
        }
        if (null != contentInventoryEntry) {
          tmp75.message.content_inventory_entry = contentInventoryEntry;
        }
        if (null != mediaMention) {
          tmp75.message.media_mention = mediaMention;
        }
        if (tmp96) {
          tmp75.message.attachments = attachments;
        }
        if (null != attachmentsToUpload) {
          infoResult = attachmentsToUpload;
          if (arr.length > 0) {
            infoResult = callback;
            infoResult = outer2_3;
            obj3 = {};
            infoResult = outer1_0;
            obj3.channelId = outer1_0;
            obj3.nonce = nonce;
            obj3.items = attachmentsToUpload;
            obj3.message = tmp42Result;
            infoResult = outer1_2;
            infoResult = !outer1_2.doNotNotifyOnError;
            obj3.shouldUploadFailureSendNotification = infoResult;
            infoResult = yield callback(outer2_3[76]).uploadMessageAttachments(obj3);
            if (null != infoResult) {
              ({ attachments: attachments2, uploader: c13 } = infoResult);
              if (flag2) {
                infoResult = attachments2;
                if (null != attachments2) {
                  infoResult = attachments2;
                }
              }
              infoResult = attachments2;
              if (null != attachments2) {
                infoResult = attachments2;
                obj.message.attachments = attachments2.map((id) => content(outer3_3[48]).getAttachmentPayload(id, arg1));
              }
            }
            let obj11 = callback(outer2_3[76]);
            const tmp99 = infoResult;
          }
        }
        infoResult = globalThis;
        infoResult = new.target;
        infoResult = new.target;
        infoResult = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          const _undefined = arg1;
          let closure_2 = Date.now();
          _undefined(outer3_3[75]).length;
          const rounded = Math.floor(10000 * Math.random());
          outer3_52.info("Queueing message to be sent LogId:" + rounded);
          let obj = _undefined(outer3_3[75]);
          obj.enqueue(obj, (ok) => {
            let applicationStatus;
            let body;
            let guildId;
            let userId;
            const callback = ok;
            if (ok.ok) {
              let obj15 = callback2(outer4_3[68]);
              obj15.donateSentMessage(callback, outer3_0);
              let obj = {};
              obj = { duration: message, queueSize: length };
              obj.sendAnalytics = obj;
              obj.poll = outer1_6;
              outer4_56.receiveMessage(outer3_0, ok.body, true, obj);
              if (null != outer3_2.alsoForwardToChannelId) {
                let obj18 = callback2(outer4_3[78]);
                let obj19 = callback(outer4_3[55]);
                const sendForwardResult = obj18.sendForward(obj19.createMessageRecord(ok.body), outer3_2.alsoForwardToChannelId);
                obj18.sendForward(obj19.createMessageRecord(ok.body), outer3_2.alsoForwardToChannelId).then(() => {
                  let channelId;
                  let destinationChannelId;
                  let guildId;
                  let referencedMessageId;
                  const obj = {};
                  const body = ok.body;
                  let id;
                  if (null != body) {
                    id = body.id;
                  }
                  obj.referencedMessageId = id;
                  const body2 = ok.body;
                  let guild_id;
                  if (null != body2) {
                    guild_id = body2.guild_id;
                  }
                  obj.guildId = guild_id;
                  const body3 = ok.body;
                  let channel_id;
                  if (null != body3) {
                    channel_id = body3.channel_id;
                  }
                  obj.channelId = channel_id;
                  obj.destinationChannelId = outer4_2.alsoForwardToChannelId;
                  ({ referencedMessageId, guildId, channelId, destinationChannelId } = obj);
                  callback(outer5_3[40]).track(outer5_29.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: referencedMessageId, guild_id: guildId, channel_id: channelId, destination_channel_id: destinationChannelId });
                }).catch((arg0) => {
                  const obj = {};
                  const body = ok.body;
                  let id;
                  const combined = "Failed to forward thread message to parent channel LogId:" + outer1_4;
                  if (null != body) {
                    id = body.id;
                  }
                  obj.referencedMessageId = id;
                  obj.channelId = outer4_0;
                  obj.destinationChannelId = outer4_2.alsoForwardToChannelId;
                  obj.error = arg0.toString();
                  outer5_51.log(combined, obj);
                });
                const nextPromise = obj18.sendForward(obj19.createMessageRecord(ok.body), outer3_2.alsoForwardToChannelId).then(() => {
                  let channelId;
                  let destinationChannelId;
                  let guildId;
                  let referencedMessageId;
                  const obj = {};
                  const body = ok.body;
                  let id;
                  if (null != body) {
                    id = body.id;
                  }
                  obj.referencedMessageId = id;
                  const body2 = ok.body;
                  let guild_id;
                  if (null != body2) {
                    guild_id = body2.guild_id;
                  }
                  obj.guildId = guild_id;
                  const body3 = ok.body;
                  let channel_id;
                  if (null != body3) {
                    channel_id = body3.channel_id;
                  }
                  obj.channelId = channel_id;
                  obj.destinationChannelId = outer4_2.alsoForwardToChannelId;
                  ({ referencedMessageId, guildId, channelId, destinationChannelId } = obj);
                  callback(outer5_3[40]).track(outer5_29.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: referencedMessageId, guild_id: guildId, channel_id: channelId, destination_channel_id: destinationChannelId });
                });
              }
              const request = outer4_9.getRequest(callback2(outer4_3[60]).cast(outer3_0));
              if (null != request) {
                ({ guildId, userId, applicationStatus } = request);
                let obj1 = { guildId, channelId: outer3_0, messageId: ok.body.id, joinRequestStatus: applicationStatus, joinRequestUserId: userId };
                let result = callback(outer4_3[79]).trackMemberApplicationInterviewMessage(obj1);
                const obj22 = callback(outer4_3[79]);
              }
              let result1 = outer4_11.recordMessageSendApiResponse(outer1_11);
              if (outer1_10 === outer4_37.REPLY) {
                const id2 = ok.body.id;
                message = outer3_0;
                message = outer1_5;
                if (null != outer1_5) {
                  const message_id = outer1_5.message_id;
                }
                const pendingReplyActionSource = outer4_13.getPendingReplyActionSource(message);
                if ("message_swipe" === pendingReplyActionSource) {
                  message = null;
                  if (null != message_id) {
                    message = outer4_23;
                    message = outer4_23.getMessage(message, message_id);
                  }
                  message = outer4_19;
                  message = outer4_19.getChannel(message);
                  message = outer4_27;
                  message = outer4_27.getCurrentUser();
                  message = callback2;
                  message = outer4_3;
                  message = outer4_29;
                  let obj2 = { message_id: id2, channel_id: message };
                  message = undefined;
                  if (null != message) {
                    message = message.guild_id;
                  }
                  obj2.guild_id = message;
                  obj2.swipe_action = "reply";
                  message = null != message;
                  if (message) {
                    message = undefined;
                    if (null != message) {
                      message = message.author.id;
                    }
                    message = message.id === message;
                  }
                  obj2.is_own_message = message;
                  message = callback2(outer4_3[40]).track(outer4_29.MESSAGE_SWIPE_ACTION_SENT, obj2);
                  const obj26 = callback2(outer4_3[40]);
                } else if ("message_shortcut" === pendingReplyActionSource) {
                  message = outer4_19;
                  message = outer4_19.getChannel(message);
                  message = callback2;
                  message = outer4_3;
                  message = outer4_29;
                  let obj3 = { message_id: id2, channel_id: message };
                  let guild_id;
                  if (null != message) {
                    guild_id = message.guild_id;
                  }
                  obj3.guild_id = guild_id;
                  obj3.original_message_id = message_id;
                  obj3.action = "reply";
                  message = outer4_3;
                  const obj42 = callback2(outer4_3[40]);
                  message = undefined;
                  if (null != message) {
                    message = message.guild_id;
                  }
                  message = obj3;
                  message = Object.assign(callback(outer4_3[35]).collectGuildAnalyticsMetadata(message));
                  message = callback;
                  message = outer4_3;
                  const obj24 = callback(outer4_3[35]);
                  message = obj3;
                  message = Object.assign(callback(outer4_3[35]).collectChannelAnalyticsMetadata(message));
                  message = obj42.track(outer4_29.MESSAGE_SHORTCUT_ACTION_SENT, obj3);
                  const obj25 = callback(outer4_3[35]);
                }
              }
              message = callback2;
              message = outer4_3;
              const obj21 = callback2(outer4_3[60]);
              let obj4 = { type: "SLOWMODE_RESET_COOLDOWN" };
              message = outer4_26;
              obj4.slowmodeType = outer4_26.SendMessage;
              message = outer3_0;
              obj4.channelId = outer3_0;
              message = callback2(outer4_3[49]).dispatch(obj4);
              const obj28 = callback2(outer4_3[49]);
              let obj5 = { type: "EMOJI_TRACK_USAGE" };
              message = callback2;
              obj5.emojiUsed = callback2;
              message = callback2(outer4_3[49]).dispatch(obj5);
              const obj30 = callback2(outer4_3[49]);
              let obj6 = { type: "STICKER_TRACK_USAGE" };
              message = rounded;
              obj6.stickerIds = rounded;
              message = callback2(outer4_3[49]).dispatch(obj6);
              const obj32 = callback2(outer4_3[49]);
              const obj7 = { type: "LOCAL_MESSAGE_CREATE" };
              let obj8 = { channel_id: outer3_0 };
              message = outer4_27;
              obj8.author = outer4_27.getCurrentUser();
              obj7.message = obj8;
              message = callback2(outer4_3[49]).dispatch(obj7);
              let obj9 = {};
              message = callback;
              obj9.content = callback;
              obj9.channelId = outer3_0;
              obj9.messageId = ok.body.id;
              message = closure_2;
              let str15 = "chat_input";
              let str16 = "chat_input";
              if (null != closure_2) {
                str16 = closure_2;
              }
              obj9.location = str16;
              message = length;
              obj9.inviteAnalyticsMetadata = length;
              message = (function trackCodedLinks(content) {
                let closure_0;
                let closure_1;
                let closure_2;
                let closure_3;
                let overrideProperties;
                ({ channelId: closure_0, messageId: closure_1, location: closure_2, inviteAnalyticsMetadata: closure_3, overrideProperties } = content);
                if (overrideProperties === undefined) {
                  overrideProperties = {};
                }
                let id;
                id = outer5_18.getId();
                const item = callback(outer5_3[30])(content.content).forEach(() => { ... });
              })(obj9);
              message = callback;
              message = outer3_0;
              let id = ok.body.id;
              message = closure_2;
              message = str15;
              if (null != closure_2) {
                message = closure_2;
              }
              message = outer3_2;
              message = id;
              message = (function trackGiftCodes(message, message2, id, message3, isGiftLinkSentOnBehalfOfUser) {
                const ok = message2;
                let closure_1 = id;
                let closure_2 = message3;
                let closure_3 = isGiftLinkSentOnBehalfOfUser;
                let obj = ok(outer5_3[44]);
                const item = ok(outer5_3[44]).findGiftCodes(message).forEach(() => { ... });
              })(message, message, id, message, outer3_2.isGiftLinkSentOnBehalfOfUser);
              if (null != outer3_2.gifMetadata) {
                message = outer3_2;
                message = closure_2;
                message = outer3_0;
                if (null != closure_2) {
                  str15 = closure_2;
                }
                message = outer4_19;
                let channel = outer4_19.getChannel(message);
                if (null != channel) {
                  message = callback2;
                  message = outer4_3;
                  message = outer4_29;
                  let obj10 = { location: str15, message_id: ok.body.id };
                  ({ gif_provider: obj45.gif_provider, load_id: obj45.load_id, source_object: obj45.source_object, gif_url: obj45.gif_url, gif_id: obj45.gif_id } = outer3_2.gifMetadata);
                  message = callback;
                  const obj44 = callback2(outer4_3[40]);
                  message = obj10;
                  message = Object.assign(callback(outer4_3[35]).collectGuildAnalyticsMetadata(channel.getGuildId()));
                  const obj46 = callback(outer4_3[35]);
                  message = obj10;
                  message = Object.assign(callback(outer4_3[35]).collectChannelAnalyticsMetadata(channel));
                  message = obj44.track(outer4_29.MESSAGE_SENT_WITH_GIF, obj10);
                  const obj47 = callback(outer4_3[35]);
                }
              }
              const obj11 = {};
              message = outer3_0;
              obj11.channelId = outer3_0;
              obj11.messageId = ok.body.id;
              let attachments = ok.body.attachments;
              if (null == attachments) {
                attachments = [];
              }
              obj11.attachments = attachments;
              message = outer1_8;
              obj11.attachmentsToUpload = null != outer1_8 ? outer1_8 : [];
              message = outer1_5;
              obj11.messageReference = outer1_5;
              message = (function trackClipsShared(channelId) {
                let attachments;
                let closure_1;
                channelId = channelId.channelId;
                ({ messageId: closure_1, attachments } = channelId);
                const attachmentsToUpload = channelId.attachmentsToUpload;
                let channel;
                let messageByReference;
                if (attachments.length === attachmentsToUpload.length) {
                  channel = outer5_19.getChannel(channelId);
                  if (null != channel) {
                    messageByReference = outer5_14.getMessageByReference(tmp);
                    const item = attachmentsToUpload.forEach(() => { ... });
                  }
                }
              })(obj11);
              message = outer1_13;
              if (null != outer1_13) {
                message = callback2;
                message = outer4_3;
                let obj12 = { type: "UPLOAD_COMPLETE" };
                message = outer3_0;
                obj12.channelId = outer3_0;
                message = outer1_13;
                obj12.file = outer1_13._file;
                obj12.aborted = false;
                message = callback2(outer4_3[49]).dispatch(obj12);
                const obj40 = callback2(outer4_3[49]);
              }
              message = callback;
              message = callback(ok);
              const obj34 = callback2(outer4_3[49]);
            } else {
              obj = {};
              ({ hasErr: obj.hasErr, status: obj.status, body } = ok);
              let code;
              if (null != body) {
                code = body.code;
              }
              obj.code = code;
              obj.error = ok.err;
              outer4_51.log("Failed to send message", obj);
              if (ok.hasErr) {
                let flag = false;
                if ("ABORTED" === ok.err.code) {
                  flag = true;
                }
              } else {
                flag = false;
                if (ok.status >= 400) {
                  flag = false;
                  if (ok.status < 500) {
                    flag = false;
                    if (ok.body) {
                      if (ok.body.code === outer4_28.SLOWMODE_RATE_LIMITED) {
                        const retry_after = ok.body.retry_after;
                        let tmp22 = null != retry_after;
                        if (tmp22) {
                          tmp22 = retry_after > 0;
                        }
                        flag = false;
                        if (tmp22) {
                          obj6 = callback2(outer4_3[49]);
                          const obj13 = { type: "SLOWMODE_SET_COOLDOWN", channelId: outer3_0, slowmodeType: outer4_26.SendMessage, cooldownMs: retry_after * callback2(outer4_3[80]).Millis.SECOND };
                          obj6.dispatch(obj13);
                          flag = false;
                        }
                      } else {
                        message = callback;
                        message = outer4_3;
                        const AUTOMOD_ERROR_CODES = callback(outer4_3[81]).AUTOMOD_ERROR_CODES;
                        if (AUTOMOD_ERROR_CODES.has(ok.body.code)) {
                          obj3 = callback2(outer4_3[49]);
                          let obj14 = { type: "MESSAGE_SEND_FAILED_AUTOMOD", messageData: outer1_14 };
                          obj15 = { code: ok.body.code, message: ok.body.message };
                          obj14.errorResponseBody = obj15;
                          obj3.dispatch(obj14);
                          flag = false;
                        } else if (ok.body.code === outer4_28.POGGERMODE_TEMPORARILY_DISABLED) {
                          obj1 = callback2(outer4_3[49]);
                          let obj16 = { type: "POGGERMODE_TEMPORARILY_DISABLED" };
                          obj1.dispatch(obj16);
                          flag = false;
                        } else {
                          message = outer4_28;
                          if (ok.body.code === outer4_28.EXPLICIT_CONTENT) {
                            const EXPLICIT_CONTENT = outer4_48.EXPLICIT_CONTENT;
                            flag = false;
                          } else {
                            let tmp9 = null != outer1_6 || outer1_9;
                            if (!tmp9) {
                              tmp9 = null != outer1_7;
                            }
                            flag = false;
                            if (!tmp9) {
                              outer4_56.sendClydeError(outer3_0, ok.body.code);
                              flag = false;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (flag) {
                outer4_56.deleteMessage(outer3_0, outer1_12, true);
              } else {
                if (null != outer1_13) {
                  obj8 = callback2(outer4_3[49]);
                  let obj17 = { type: "UPLOAD_FAIL", channelId: outer3_0, file: outer1_13._file, messageId: outer1_12, reason: EXPLICIT_CONTENT, noSendFailed: true };
                  obj8.dispatch(obj17);
                }
                if (!ok.hasErr) {
                  if (EXPLICIT_CONTENT === outer4_48.EXPLICIT_CONTENT) {
                    let body2 = ok.body;
                    let attachments1;
                    if (null != body2) {
                      attachments1 = body2.attachments;
                    }
                    let result2 = outer4_56.sendExplicitMediaClydeError(outer3_0, attachments1, callback(outer4_3[53]).TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    const tmp37 = outer3_0;
                  }
                }
                obj10 = callback2(outer4_3[49]);
                obj18 = { type: "MESSAGE_SEND_FAILED", messageId: outer1_12, channelId: outer3_0, shouldNotify: !outer3_2.doNotNotifyOnError, reason: EXPLICIT_CONTENT };
                obj10.dispatch(obj18);
                obj12 = callback(outer4_3[77]);
                obj19 = {};
                let status;
                if (!ok.hasErr) {
                  status = ok.status;
                }
                obj19.failureCode = status;
                let message1;
                if (ok.hasErr) {
                  message1 = ok.err.message;
                }
                obj19.errorMessage = message1;
                let result3 = obj12.logMessageSendFailure(obj19);
                obj14 = callback2(outer4_3[75]);
                let result4 = obj14.cancelPendingSendRequests(outer3_0);
                let item = result4.forEach((messageId) => {
                  outer5_51.log("Cancelling pending message", messageId.nonce);
                  let obj = callback(outer5_3[49]);
                  obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.nonce, channelId: messageId.channelId };
                  obj.dispatch(obj);
                });
              }
              callback2(ok);
            }
          }, rounded);
        });
        return infoResult;
      }
    })();
  },
  startEditMessage(channelId, messageId, content, source) {
    let obj = importDefault(686);
    obj = { type: "MESSAGE_START_EDIT", channelId, messageId, content, source };
    obj.dispatch(obj);
  },
  startEditMessageRecord(id, flags, source) {
    let obj = require(1360) /* hasFlag */;
    if (obj.hasFlag(flags.flags, closure_35.IS_COMPONENTS_V2)) {
      const components = flags.components;
      const found = components.filter((type) => type.type === outer1_0(outer1_3[82]).ComponentType.TEXT_DISPLAY);
      if (found.length > 0) {
        const mapped = found.map((content) => content.content);
        const joined = mapped.join("\n");
        obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: joined, source };
        importDefault(686).dispatch(obj);
      }
    }
    obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source };
    importDefault(686).dispatch(obj);
  },
  updateEditMessage(channelId, textValue, richValue) {
    let obj = importDefault(686);
    obj = { type: "MESSAGE_UPDATE_EDIT", channelId, textValue, richValue };
    obj.dispatch(obj);
  },
  endEditMessage(id, response) {
    let obj = importDefault(686);
    obj = { type: "MESSAGE_END_EDIT", channelId: id, response };
    obj.dispatch(obj);
  },
  editMessage(id, id2, parsed) {
    let dependencyMap;
    let importAll;
    let closure_0 = id;
    let closure_1 = id2;
    ({ content: importAll, components: dependencyMap } = parsed);
    return callback(async () => {
      let obj1;
      if ("message_swipe" === outer2_20.getEditActionSource(outer1_0)) {
        const channel = outer2_19.getChannel(tmp2);
        let obj = callback2(outer2_3[40]);
        obj = { message_id: outer1_1, channel_id: tmp2 };
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.swipe_action = "edit";
        obj.is_own_message = true;
        obj.track(outer2_29.MESSAGE_SWIPE_ACTION_SENT, obj);
      }
      let obj2 = callback2(outer2_3[83]);
      yield obj2.unarchiveThreadIfNecessary(outer1_0);
      const message = outer2_23.getMessage(outer1_0, outer1_1);
      let tmp15;
      if (null != message) {
        if (message.type === outer2_37.REPLY) {
          const messageByReference = outer2_14.getMessageByReference(message.messageReference);
          if (messageByReference.state === outer2_15.LOADED) {
            const mentions = message.mentions;
            if (!mentions.includes(messageByReference.message.author.id)) {
              obj = {};
              const _Object = Object;
              obj.parse = Object.values(outer2_38);
              obj.replied_user = false;
              tmp15 = obj;
            }
          }
        }
      }
      const message1 = outer2_23.getMessage(tmp12, tmp13);
      let hasFlagResult = null != message1;
      if (hasFlagResult) {
        hasFlagResult = message1.hasFlag(outer2_35.CROSSPOSTED);
      }
      obj1 = { channelId: tmp12, messageId: tmp13, content: outer1_2, isCrossposted: hasFlagResult, allowed_mentions: tmp15, components: outer1_3 };
      obj2 = { type: callback(outer2_3[75]).MessageDataType.EDIT, message: obj1 };
      callback2(outer2_3[75]).enqueue(obj2, (hasErr) => {
        let hasItem = !hasErr.hasErr;
        if (hasItem) {
          const AUTOMOD_ERROR_CODES = obj1(outer3_3[81]).AUTOMOD_ERROR_CODES;
          hasItem = AUTOMOD_ERROR_CODES.has(hasErr.body.code);
        }
        if (hasItem) {
          let obj = { type: obj1(outer3_3[75]).MessageDataType.EDIT, message: obj1 };
          obj1 = callback(outer3_3[49]);
          obj = { type: "MESSAGE_EDIT_FAILED_AUTOMOD" };
          obj.messageData = obj;
          obj = { code: hasErr.body.code, message: hasErr.body.message };
          obj.errorResponseBody = obj;
          obj1.dispatch(obj);
        }
        const AccessibilityAnnouncer = obj1(outer3_3[84]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = obj1(outer3_3[46]).intl;
        const string = intl.string;
        const t = obj1(outer3_3[46]).t;
        if (hasErr.hasErr) {
          announce(string(t.Atp7FP));
        } else if (hasItem) {
          announce(string(t.Hym4ix));
        } else {
          announce(string(t["0x1HBD"]));
        }
        let tmp14;
        if (!hasErr.hasErr) {
          tmp14 = hasErr;
        }
        outer3_56.endEditMessage(outer2_0, tmp14);
        obj1 = { channelId: outer2_0, messageId: outer2_1 };
        outer3_56.focusMessage(obj1);
      });
    })();
  },
  suppressEmbeds(closure_0, closure_1) {
    return callback(async () => {
      let obj = callback2(outer2_3[83]);
      yield obj.unarchiveThreadIfNecessary(outer1_0);
      const message = outer2_23.getMessage(outer1_0, outer1_1);
      if (null != message) {
        const HTTP = callback(outer2_3[54]).HTTP;
        obj = { url: outer2_30.MESSAGE(outer1_0, outer1_1) };
        obj = { flags: callback(outer2_3[71]).setFlag(message.flags, outer2_35.SUPPRESS_EMBEDS, true) };
        obj.body = obj;
        obj.oldFormErrors = true;
        const obj4 = callback(outer2_3[71]);
        obj.rejectWithError = callback(outer2_3[54]).rejectWithMigratedError();
        HTTP.patch(obj);
        const obj5 = callback(outer2_3[54]);
      }
    })();
  },
  patchMessageGuildOfficial(id, id2, arg2) {
    let closure_0 = id;
    let closure_1 = id2;
    let closure_2 = arg2;
    return callback(async () => {
      let obj = callback2(outer2_3[83]);
      yield obj.unarchiveThreadIfNecessary(outer1_0);
      const message = outer2_23.getMessage(outer1_0, outer1_1);
      if (null != message) {
        const HTTP = callback(outer2_3[54]).HTTP;
        obj = { url: outer2_30.MESSAGE(outer1_0, outer1_1) };
        obj = { flags: callback(outer2_3[71]).setFlag(message.flags, outer2_35.IS_GUILD_OFFICIAL, outer1_2) };
        obj.body = obj;
        obj.oldFormErrors = true;
        const obj4 = callback(outer2_3[71]);
        obj.rejectWithError = callback(outer2_3[54]).rejectWithMigratedError();
        HTTP.patch(obj);
        const obj5 = callback(outer2_3[54]);
      }
    })();
  },
  patchMessageAttachments(closure_0, id, found) {
    let closure_1 = id;
    let closure_2 = found;
    return callback(async () => {
      let obj = callback2(outer2_3[83]);
      yield obj.unarchiveThreadIfNecessary(outer1_0);
      const HTTP = callback(outer2_3[54]).HTTP;
      obj = { url: outer2_30.MESSAGE(outer1_0, outer1_1), body: obj, oldFormErrors: true };
      obj = { attachments: outer1_2, rejectWithError: callback(outer2_3[54]).rejectWithMigratedError() };
      HTTP.patch(obj);
    })();
  },
  deleteMessage(arg0, arg1) {
    let flag = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (arg2 === undefined) {
      flag = false;
    }
    return callback(async () => {
      function dispatchDelete() {
        let obj = callback(outer3_3[49]);
        obj = { type: "MESSAGE_DELETE", id: outer2_1, channelId: outer2_0 };
        obj.dispatch(obj).then(() => {
          const AccessibilityAnnouncer = callback(outer4_3[84]).AccessibilityAnnouncer;
          const intl = callback(outer4_3[46]).intl;
          AccessibilityAnnouncer.announce(intl.string(callback(outer4_3[46]).t.RYMs7s));
        });
      }
      if (outer1_2) {
        dispatchDelete();
      } else {
        let obj = callback2(outer2_3[83]);
        yield obj.unarchiveThreadIfNecessary(outer1_0);
        const HTTP = callback(outer2_3[54]).HTTP;
        obj = { url: outer2_30.MESSAGE(outer1_0, outer1_1), oldFormErrors: true, rejectWithError: callback(outer2_3[54]).rejectWithMigratedError() };
        const obj3 = callback(outer2_3[54]);
        HTTP.del(obj).then(() => {
          dispatchDelete();
        });
        const delResult = HTTP.del(obj);
      }
    })();
  },
  dismissAutomatedMessage(message) {
    const self = this;
    if (null != message.loggingName) {
      let obj = importDefault(4324);
      obj = { message_name: message.loggingName, message_author: message.author.username };
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_DISMISSED, obj);
    }
    const result = require(7110) /* dismissGiftIntent */.logGiftIntentMessageDismissed(message.channel_id, message.id);
    self.deleteMessage(message.channel_id, message.id, true);
  },
  revealMessage(id, messageId) {
    let obj = importDefault(686);
    obj = { type: "MESSAGE_REVEAL", channelId: id, messageId };
    obj.dispatch(obj);
  },
  crosspostMessage(closure_0, closure_1) {
    return callback(async () => {
      const HTTP = callback(outer2_3[54]).HTTP;
      const obj = { url: outer2_30.MESSAGE_CROSSPOST(outer1_0, outer1_1), oldFormErrors: true, failImmediatelyWhenRateLimited: true, rejectWithError: callback(outer2_3[54]).rejectWithMigratedError() };
      return yield HTTP.post(obj);
    })();
  },
  trackInvite
};
let result = require("_classCallCheck").fileFinishedImporting("actions/MessageActionCreators.tsx");

export default obj14;
