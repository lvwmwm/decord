// Module ID: 6686
// Function ID: 51546
// Name: trackInvite
// Dependencies: []

// Module 6686 (trackInvite)
let Permissions;
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
  const id = id.getId();
  const invite = invite.getInvite(inviteKey);
  let obj = arg1(dependencyMap[41]);
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  let result1 = null != invite;
  if (result1) {
    let obj1 = arg1(dependencyMap[42]);
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
    let obj2 = arg1(dependencyMap[34]);
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
          const lastActiveStream = lastActiveStream.getLastActiveStream();
          STREAM = GDM_INVITE;
          if (null != lastActiveStream) {
            STREAM = GDM_INVITE;
            if (lastActiveStream.channelId === channel.id) {
              obj.destination_user_id = lastActiveStream.ownerId;
              const streamerApplication = arg1(dependencyMap[43]).getStreamerApplication(lastActiveStream, closure_24);
              let id3 = null;
              if (null != streamerApplication) {
                id3 = streamerApplication.id;
              }
              obj.application_id = id3;
              STREAM = constants3.STREAM;
              const obj9 = arg1(dependencyMap[43]);
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
    const inviteInstanceId = arg1(dependencyMap[41]).getInviteInstanceId(result.baseCode, messageId);
    let tmp48 = null;
    if (null != inviteInstanceId) {
      tmp48 = inviteInstanceId;
    }
    obj["invite_instance_id"] = tmp48;
    const merged1 = Object.assign(overrideProperties);
    const obj11 = arg1(dependencyMap[41]);
    importDefault(dependencyMap[35]).trackWithMetadata(constants.INVITE_SENT, obj);
    const obj12 = importDefault(dependencyMap[35]);
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
          const inviteInstanceId1 = arg1(dependencyMap[41]).getInviteInstanceId(result.baseCode, messageId);
          let tmp21 = null;
          if (null != inviteInstanceId1) {
            tmp21 = inviteInstanceId1;
          }
          obj2["invite_instance_id"] = tmp21;
          const merged3 = Object.assign(overrideProperties);
          const obj6 = arg1(dependencyMap[41]);
          importDefault(dependencyMap[35]).trackWithMetadata(constants.INVITE_SENT, obj2);
          const obj7 = importDefault(dependencyMap[35]);
        }
      }
    }
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
const ReferencedMessageState = arg1(dependencyMap[10]).ReferencedMessageState;
let closure_16 = importDefault(dependencyMap[11]);
let closure_17 = importDefault(dependencyMap[12]);
let closure_18 = importDefault(dependencyMap[13]);
let closure_19 = importDefault(dependencyMap[14]);
let closure_20 = importDefault(dependencyMap[15]);
let closure_21 = importDefault(dependencyMap[16]);
let closure_22 = importDefault(dependencyMap[17]);
let closure_23 = importDefault(dependencyMap[18]);
importDefault(dependencyMap[19]);
let closure_24 = importDefault(dependencyMap[20]);
let closure_25 = importDefault(dependencyMap[21]);
const SlowmodeType = arg1(dependencyMap[22]).SlowmodeType;
let closure_27 = importDefault(dependencyMap[23]);
const tmp3 = arg1(dependencyMap[24]);
const AbortCodes = tmp3.AbortCodes;
({ AnalyticEvents: closure_29, Endpoints: closure_30, Permissions, ChannelTypes: closure_31, LoggingInviteTypes: closure_32, SendTypes: closure_33, InviteStates: closure_34, MessageFlags: closure_35, MAX_MESSAGES_FOR_JUMP: closure_36, MessageTypes: closure_37, AllowedMentionTypes: closure_38, HelpdeskArticles: closure_39, MarketingURLs: closure_40, MessageReferenceTypes: closure_41, LOCAL_BOT_ID: closure_42, NON_USER_BOT_DISCRIMINATOR: closure_43, MessageStates: closure_44, ActivityActionTypes: closure_45 } = tmp3);
const LinkType = arg1(dependencyMap[25]).LinkType;
const GuildTemplateStates = arg1(dependencyMap[26]).GuildTemplateStates;
({ FileUploadErrorTypes: closure_48, MessageSendLocation: closure_49 } = arg1(dependencyMap[27]));
const MediaPlayerManager = arg1(dependencyMap[28]).NativeModules.MediaPlayerManager;
let importDefaultResult1 = importDefault(dependencyMap[29]);
importDefaultResult1 = new importDefaultResult1("MessageActionCreators");
let importDefaultResult2 = importDefault(dependencyMap[29]);
importDefaultResult2 = new importDefaultResult2("MessageQueue");
let closure_53 = false;
let closure_54 = () => {
  class RemoteFetch {
    constructor() {
      tmp = closure_6(this, RemoteFetch);
      this.completed = false;
      return;
    }
  }
  const arg1 = RemoteFetch;
  const items = [
    {
      key: "markComplete",
      value() {
        this.completed = true;
      }
    }
  ];
  return callback2(RemoteFetch, items);
}();
let obj = {
  messageName: "SLOWMODE_RATE_LIMITED",
  messageGetter(rateLimitPerUser) {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[46]).t.IWntYg, { seconds: rateLimitPerUser.rateLimitPerUser });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
  messageGetter(rawRecipients) {
    let obj = importDefault(dependencyMap[47]);
    const articleURL = obj.getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED);
    rawRecipients = rawRecipients.rawRecipients;
    if (null == rawRecipients) {
      rawRecipients = [];
    }
    if (rawRecipients.isDM()) {
      if (1 === rawRecipients.length) {
        if (rawRecipients.some((bot) => bot.bot)) {
          const intl2 = arg1(dependencyMap[46]).intl;
          obj = { helpUrl: articleURL };
          let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[46]).t.SkGL7l, obj);
        }
        return formatToPlainStringResult;
      }
    }
    const intl = arg1(dependencyMap[46]).intl;
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[46]).t.llTkqr, { helpUrl: articleURL });
  }
};
obj = {
  messageName: "INVALID_MESSAGE_SEND_USER",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    const obj = { helpUrl: importDefault(dependencyMap[47]).getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
    return intl.formatToPlainString(arg1(dependencyMap[46]).t.SkGL7l, obj);
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
          const intl = arg1(dependencyMap[46]).intl;
          let stringResult = intl.string(arg1(dependencyMap[46]).t.5EMPA7);
        }
        return stringResult;
      }
      const intl2 = arg1(dependencyMap[46]).intl;
      stringResult = intl2.string(arg1(dependencyMap[46]).t./jUd2+);
    }
  },
  [AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS]: {
    messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.aY+lLC);
    }
  },
  [AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED]: {
    messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[46]).t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
    }
  },
  [AbortCodes.HARMFUL_URL_BLOCKED]: {
    messageName: "HARMFUL_URL_BLOCKED",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.WxX2Fd);
    }
  },
  [AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
    messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.k1Cjqr);
    }
  },
  [AbortCodes.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
    messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.Z5SUuv);
    }
  },
  [AbortCodes.RATE_LIMIT_DM_OPEN]: {
    messageName: "BOT_DM_RATE_LIMITED",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.E8nbNb);
    }
  },
  [AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.aRUbah);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t./meGhR);
    }
  },
  [AbortCodes.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
    messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.Oc1Zjw);
    }
  },
  [AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
    messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      const obj = { maxSizeMb: arg1(dependencyMap[48]).MAX_TOTAL_ATTACHMENT_SIZE_MB };
      return intl.formatToPlainString(arg1(dependencyMap[46]).t.DYFPg2, obj);
    }
  },
  [AbortCodes.CLOUD_UPLOAD_NOT_FOUND]: {
    messageName: "CLOUD_UPLOAD_NOT_FOUND",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.bQldfH);
    }
  },
  [AbortCodes.INVALID_PERMISSIONS]: {
    messageName: "INVALID_PERMISSIONS",
    messageGetter() {
      const intl = arg1(dependencyMap[46]).intl;
      return intl.string(arg1(dependencyMap[46]).t.zl4Weq);
    }
  }
};
const obj14 = {
  receiveMessage(channel_id, body, arg2, _location) {
    let flag = arg2;
    let obj = _location;
    if (arg2 === undefined) {
      flag = false;
    }
    if (obj === undefined) {
      obj = {};
    }
    obj = { type: "MESSAGE_CREATE", channelId: channel_id, message: body, optimistic: flag };
    obj.sendMessageOptions = obj;
    obj.isPushNotification = false;
    importDefault(dependencyMap[49]).dispatch(obj);
  },
  sendBotMessage(id, intl, messageName, nonce) {
    if (null != messageName) {
      let obj = importDefault(dependencyMap[35]);
      obj = { message_author: "Clyde", message_name: messageName };
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_RECEIVED, obj);
    }
    obj = { messageId: nonce, channelId: id, content: intl, loggingName: messageName };
    obj14.receiveMessage(id, intl(dependencyMap[50]).createBotMessage(obj));
  },
  sendNitroSystemMessage(channelId, content, nonce) {
    let obj = { channelId, nonce, type: constants6.NITRO_NOTIFICATION, content, flags: closure_35.EPHEMERAL, author: obj };
    obj = { id: closure_42, discriminator: closure_43 };
    obj = {};
    const merged = Object.assign(importDefault(dependencyMap[50])(obj));
    obj["state"] = constants9.SENT;
    obj["channel_id"] = channelId;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGiftingPromptSystemMessage(channelId, giftingPrompt) {
    let obj = { channelId, type: constants6.GIFTING_PROMPT, content: "", flags: closure_35.EPHEMERAL, author: obj, giftingPrompt };
    obj = { ;: 55141372474191760000000000000000000000000000000, \: 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, ,: 0.000000000000000000000000000000000000000000000000000000000000041334633291766945, /: 147377264888991440000000000000000000000000000000000000000000000000000000000000000000000000000000000, n: 0.00000000000000000000000000000000000000000000000000000000000004667261458271638, id: closure_42, discriminator: closure_43 };
    obj = {};
    const merged = Object.assign(importDefault(dependencyMap[50])(obj));
    obj["state"] = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendGuildBoostUpsellSystemMessage(channelId, boostingPrompt) {
    let obj = { channelId, type: constants6.GUILD_BOOST_UPSELL, content: "", flags: closure_35.EPHEMERAL, author: obj, boostingPrompt };
    obj = { ;: 0, \: null, ,: 2, /: 2, n: "absolute", id: closure_42, discriminator: closure_43 };
    obj = {};
    const merged = Object.assign(importDefault(dependencyMap[50])(obj));
    obj["state"] = constants9.SENT;
    obj14.receiveMessage(channelId, obj, true);
  },
  sendClydeError(id, code) {
    let num = code;
    if (code === undefined) {
      num = 0;
    }
    const channel = store.getChannel(id);
    if (null != channel) {
      let obj = closure_55[num];
      if (null != obj) {
        obj14.sendBotMessage(id, obj.messageGetter(channel), obj.messageName);
      } else {
        const intl = code(dependencyMap[46]).intl;
        obj = { helpUrl: importDefault(dependencyMap[47]).getArticleURL(constants7.DM_COULD_NOT_BE_DELIVERED) };
        const _HermesInternal = HermesInternal;
        const obj3 = importDefault(dependencyMap[47]);
        obj14.sendBotMessage(id, intl.formatToPlainString(code(dependencyMap[46]).t.SkGL7l, obj), "SEND_FAILED (" + num + ")");
        const formatToPlainStringResult = intl.formatToPlainString(code(dependencyMap[46]).t.SkGL7l, obj);
      }
    }
  },
  sendExplicitMediaClydeError(channelId, attachments1, EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED) {
    let message;
    let messageName;
    const channel = store.getChannel(channelId);
    if (null != channel) {
      let obj = { isDM: channel.isDM(), isGDM: channel.isGroupDM() };
      const match = attachments1(dependencyMap[51]).match(obj);
      obj = { isDM: true };
      const str2 = attachments1(dependencyMap[51]);
      const withResult = match.with(obj, () => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.mktny/);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      });
      const withResult1 = match.with(obj, () => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.mktny/);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      }).with({ <string:1457041507>: null, <string:2803841106>: null }, () => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.mktny/);
        obj.messageName = "BOT_GDM_EXPLICIT_CONTENT";
        return obj;
      });
      ({ message, messageName } = match.with(obj, () => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.mktny/);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      }).with({ <string:1457041507>: null, <string:2803841106>: null }, () => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.mktny/);
        obj.messageName = "BOT_GDM_EXPLICIT_CONTENT";
        return obj;
      }).otherwise(() => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.i4AbAS);
        obj.messageName = "BOT_GUILD_EXPLICIT_CONTENT";
        return obj;
      }));
      const otherwiseResult = match.with(obj, () => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.mktny/);
        obj.messageName = "BOT_DM_EXPLICIT_CONTENT";
        return obj;
      }).with({ <string:1457041507>: null, <string:2803841106>: null }, () => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.mktny/);
        obj.messageName = "BOT_GDM_EXPLICIT_CONTENT";
        return obj;
      }).otherwise(() => {
        const obj = {};
        const intl = callback(closure_3[46]).intl;
        obj.message = intl.string(callback(closure_3[46]).t.i4AbAS);
        obj.messageName = "BOT_GUILD_EXPLICIT_CONTENT";
        return obj;
      });
      const nonce = attachments1(dependencyMap[52]).createNonce();
      obj14.sendBotMessage(channelId, message, messageName, nonce);
      const obj9 = attachments1(dependencyMap[52]);
      let obj1 = { action: attachments1(dependencyMap[53]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT, messageId: nonce, channelId, context: EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED };
      const result = attachments1(dependencyMap[53]).trackMediaRedactionAction(obj1);
      let tmp = null != attachments1;
      if (tmp) {
        tmp = attachments1.length > 0;
      }
      if (tmp) {
        obj1 = importDefault(dependencyMap[49]);
        const obj2 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: nonce, channelId, attachments: attachments1 };
        obj1.dispatch(obj2);
      }
      const obj10 = attachments1(dependencyMap[53]);
    }
  },
  truncateMessages(channelId, truncateBottom, truncateTop) {
    let obj = importDefault(dependencyMap[49]);
    obj = { type: "TRUNCATE_MESSAGES", channelId, truncateBottom, truncateTop };
    obj.dispatch(obj);
  },
  clearChannel(channelId) {
    let obj = importDefault(dependencyMap[49]);
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
      importDefault(dependencyMap[49]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[49]);
    } else {
      obj = { channelId, limit };
      obj.jump = obj;
      const messages = obj14.fetchMessages(obj);
    }
  },
  trackJump(channelId, id, Present, extraProperties) {
    let obj = importDefault(dependencyMap[35]);
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
    let obj = { channelId, limit: closure_36, jump: obj, isPreload, skipLocalFetch, avoidInitialScroll };
    obj = { messageId, flash, offset, returnMessageId, jumpType, onJumpComplete };
    return obj14.fetchMessages(obj);
  },
  focusMessage(channelId) {
    let obj = { channelId: channelId.channelId, limit: closure_36, focus: obj };
    obj = { messageId: channelId.messageId };
    const messages = obj14.fetchMessages(obj);
  },
  fetchMessage(arg0) {
    ({ channelId: closure_0, messageId: closure_1 } = arg0);
    return callback(async () => {
      const HTTP = callback(closure_3[54]).HTTP;
      let obj = { url: closure_30.MESSAGES(callback), query: obj, retries: 2, oldFormErrors: true };
      obj = { limit: 1, around: closure_1, rejectWithError: callback(closure_3[54]).rejectWithMigratedError() };
      const tmp = yield HTTP.get(obj);
      if (tmp.body.length > 0) {
        return callback(closure_3[55]).createMessageRecord(tmp.body[0]);
      }
      const obj3 = callback(closure_3[54]);
    })();
  },
  fetchMessages(channelId) {
    let feature;
    let fetchKey;
    let focus;
    let isPreload;
    let skipLocalFetch;
    let truncate;
    const self = this;
    channelId = channelId.channelId;
    const arg1 = channelId;
    const before = channelId.before;
    const importDefault = before;
    const after = channelId.after;
    const importAll = after;
    const limit = channelId.limit;
    const dependencyMap = limit;
    const jump = channelId.jump;
    let closure_4 = jump;
    ({ focus, truncate } = channelId);
    let closure_5 = truncate;
    ({ forICYMI: closure_6, avoidInitialScroll: closure_7, fetchKey } = channelId);
    const connectedOrOverlay = fetchKey;
    let closure_11;
    let closure_12;
    ({ isPreload, skipLocalFetch, feature } = channelId);
    const channel = store.getChannel(channelId);
    let closure_9 = connectedOrOverlay.isConnectedOrOverlay();
    let timestamp = Date.now();
    let closure_10 = timestamp;
    if (null != channel) {
      if (channel.type === constants2.GUILD_STORE) {
        return false;
      }
    }
    if (channelId !== arg1(dependencyMap[56]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      importDefaultResult1.log("Fetching messages for " + channelId + " between " + after + " and " + before + ". jump=" + JSON.stringify(jump));
      let obj = { channelId, before, after, limit, jump, focus, truncate };
      if (!obj14._tryFetchMessagesCached(obj)) {
        const fetchMessages = importDefault(dependencyMap[57]).fetchMessages;
        fetchMessages.recordStart();
        obj = importDefault(dependencyMap[58]);
        let tmp7 = timestamp;
        if (null != fetchKey) {
          tmp7 = fetchKey;
        }
        const result = obj.recordChannelFetchStart(channelId, tmp7, before, after, limit);
        let tmp15;
        if (null != jump) {
          tmp15 = jump;
        }
        if (tmp16) {
          obj = {};
          const merged = Object.assign(focus);
          tmp15 = obj;
        }
        let obj2 = importDefault(dependencyMap[59]);
        const orCreate = obj2.getOrCreate(channelId);
        const start = orCreate.loadStart(tmp15);
        importDefault(dependencyMap[59]).commit(start);
        const obj5 = importDefault(dependencyMap[59]);
        const tmp16 = null == tmp15 && null != focus;
        const obj1 = { type: "LOAD_MESSAGES" };
        importDefault(dependencyMap[49]).dispatch(obj1);
        let messageId;
        if (null != tmp15) {
          messageId = tmp15.messageId;
        }
        closure_11 = messageId;
        const prototype = ctor.prototype;
        const tmp29 = new ctor();
        closure_12 = tmp29;
        if (!skipLocalFetch) {
          if (null != fetchKey) {
            timestamp = fetchKey;
          }
          const localMessages = self.fetchLocalMessages(channelId, timestamp, before, after, limit, tmp30);
        }
        const HTTP = arg1(dependencyMap[54]).HTTP;
        obj2 = { url: closure_30.MESSAGES(channelId) };
        const obj3 = { before, after, limit, around: messageId, preload: isPreload, feature };
        obj2.query = obj3;
        obj2.retries = 2;
        obj2.oldFormErrors = true;
        const obj6 = importDefault(dependencyMap[49]);
        obj2.rejectWithError = arg1(dependencyMap[54]).rejectWithMigratedError();
        const value = HTTP.get(obj2);
        return value.then((arg0) => {
          const channelId = arg0;
          const fetchMessages = before(limit[57]).fetchMessages;
          fetchMessages.recordEnd();
          const dispatchMessages = before(limit[57]).dispatchMessages;
          dispatchMessages.measure(() => {
            const body = arg0.body;
            let flag = null != closure_11;
            if (!flag) {
              let tmp4 = body.length === closure_3;
              if (tmp4) {
                let tmp5 = tmp;
                if (!tmp) {
                  let tmp7 = null == callback;
                  if (tmp7) {
                    tmp7 = null == closure_2;
                  }
                  tmp5 = tmp7;
                }
                tmp4 = tmp5;
              }
              flag = tmp4;
            }
            let flag2 = null != closure_11;
            if (!flag2) {
              let tmp9 = tmp2;
              if (tmp2) {
                tmp9 = body.length === closure_3;
              }
              flag2 = tmp9;
            }
            let tmp11 = flag;
            let flag3 = flag2;
            if (null != closure_11) {
              const _Math = Math;
              const rounded = Math.floor(closure_3 / 2);
              const items = [closure_11];
              HermesBuiltin.arraySpread(body.map((id) => id.id), 1);
              const found = items.filter((arg0, arg1, arr) => arr.indexOf(arg0) === arg1);
              const sorted = found.sort(callback(closure_3[60]).compare);
              const index = sorted.indexOf(closure_11);
              if (index < rounded + closure_3 % 2 - 1) {
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
                  if (body[0].id === closure_25.lastMessageId(arg0)) {
                    flag3 = false;
                    tmp11 = flag;
                  }
                }
              }
            }
            closure_51.log("Fetched " + body.length + " messages for " + arg0 + " isBefore:" + null != callback + " isAfter:" + null != closure_2);
            closure_12.markComplete();
            let obj = callback(closure_3[49]);
            obj = { type: "LOAD_MESSAGES_SUCCESS", channelId: arg0, messages: body, isBefore: tmp, isAfter: tmp2, hasMoreBefore: tmp11, hasMoreAfter: flag3, limit: closure_3, jump: closure_4, forICYMI: closure_6 };
            let tmp16 = !closure_9;
            if (!tmp16) {
              tmp16 = closure_8.lastTimeConnectedChanged() >= closure_10;
            }
            obj.isStale = tmp16;
            obj.truncate = closure_5;
            obj.avoidInitialScroll = closure_7;
            obj.dispatch(obj);
            const result = callback(closure_3[58]).recordChannelFetchedNetwork(arg0, null != closure_8 ? closure_8 : closure_10, callback, closure_2, closure_3, body);
          });
          return true;
        }, () => {
          closure_51.log("Failed to fetch messages for " + channelId);
          let obj = before(limit[49]);
          obj = { type: "LOAD_MESSAGES_FAILURE", channelId };
          obj.dispatch(obj);
          return false;
        });
      }
    }
  },
  fetchLocalMessages(channelId, timestamp, before, after, limit, arg5) {
    timestamp = channelId;
    const importDefault = timestamp;
    const importAll = before;
    const dependencyMap = after;
    let closure_4 = limit;
    const callback = arg5;
    return callback(async () => {
      let databaseResult;
      const basicChannel = basicChannel.getBasicChannel(databaseResult);
      let obj = callback(closure_3[59]);
      const orCreate = obj.getOrCreate(databaseResult);
      databaseResult = callback(closure_3[61]).database();
      if (null != databaseResult) {
        if (null != basicChannel) {
          if (null == closure_2) {
            if (null == closure_3) {
              if (orCreate.ready) {
                if (!orCreate.cached) {
                  callback(closure_3[57]).addLocalMessages(databaseResult, -2);
                  const obj4 = callback(closure_3[57]);
                }
              }
              const tmp13 = yield databaseResult(closure_3[62]).tryLoadAsync(() => callback(closure_3[63]).load(databaseResult, databaseResult, closure_4));
              if (null != tmp13) {
                const _HermesInternal = HermesInternal;
                closure_51.log("fetched " + tmp13.messages.length + " messages from local database (channel_id: " + databaseResult + ", remote_fetch_completed: " + closure_5.completed + ")");
                callback(closure_3[57]).addLocalMessages(databaseResult, tmp13.messages.length);
                if (!closure_5.completed) {
                  if (tmp13.messages.length > 0) {
                    let tmp28 = tmp13.messages.length >= closure_4;
                    if (tmp28) {
                      tmp28 = tmp13.connectionId === closure_8.lastTimeConnectedChanged();
                    }
                    const obj8 = callback(closure_3[58]);
                    const result = obj8.recordChannelFetchedLocal(databaseResult, callback, closure_2, closure_3, closure_4, tmp13.messages);
                    obj = { type: "LOCAL_MESSAGES_LOADED", guildId: basicChannel.guild_id, channelId: databaseResult };
                    ({ users: obj10.users, members: obj10.members, messages: obj10.messages } = tmp13);
                    obj.stale = !tmp28;
                    callback(closure_3[49]).dispatch(obj);
                    const obj9 = callback(closure_3[49]);
                  }
                }
                const obj7 = callback(closure_3[57]);
              } else {
                callback(closure_3[57]).addLocalMessages(databaseResult, -3);
                const obj6 = callback(closure_3[57]);
              }
              const obj5 = databaseResult(closure_3[62]);
            }
          }
        }
      }
      const obj2 = callback(closure_3[61]);
      callback(closure_3[57]).addLocalMessages(databaseResult, -1);
    })();
  },
  fetchNewLocalMessages(channelId, closure_16) {
    closure_16 = channelId;
    const importDefault = closure_16;
    return callback(async () => {
      let databaseResult;
      let id;
      const basicChannel = basicChannel.getBasicChannel(databaseResult);
      let obj = id(closure_3[61]);
      databaseResult = obj.database();
      if (null != databaseResult) {
        if (null != basicChannel) {
          if (!obj3.getOrCreate(databaseResult).hasMoreAfter) {
            const tmp5 = yield databaseResult(closure_3[62]).tryLoadAsync(() => id(closure_3[63]).load(databaseResult, databaseResult, id));
            if (null != tmp5) {
              const orCreate = id(closure_3[59]).getOrCreate(databaseResult);
              const lastResult = orCreate.last();
              id = undefined;
              if (null != lastResult) {
                id = lastResult.id;
              }
              if (null == id) {
                let messages = tmp5.messages;
              } else {
                const messages1 = tmp5.messages;
                messages = messages1.filter((id) => id(closure_3[60]).compare(id.id, id) > 0);
              }
              const _HermesInternal = HermesInternal;
              closure_51.log("Fetched " + tmp5.messages.length + " messages from the cache after foregrounding. " + messages.length + " are new");
              if (0 !== messages.length) {
                obj = { type: "LOCAL_MESSAGES_LOADED", guildId: basicChannel.guild_id, channelId: databaseResult };
                ({ users: obj7.users, members: obj7.members } = tmp5);
                obj.messages = messages;
                obj.stale = true;
                const obj6 = id(closure_3[49]);
                obj.isForegroundCacheLoad = databaseResult(closure_3[64]).isIOSPushNotificationRawPayloadFixExperimentEnabled();
                obj6.dispatch(obj);
                const obj8 = databaseResult(closure_3[64]);
              }
              const obj4 = id(closure_3[59]);
            }
            const obj2 = databaseResult(closure_3[62]);
          }
          const obj3 = id(closure_3[59]);
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
                let obj3 = importDefault(dependencyMap[49]);
                let obj = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, before, limit, truncate };
                obj3.dispatch(obj);
                let flag = true;
              }
              return flag;
            }
            const tmp4 = null == after || !messages.hasAfterCached(after);
            flag = !tmp4;
            if (!tmp4) {
              let obj1 = importDefault(dependencyMap[49]);
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
            importDefault(dependencyMap[49]).dispatch(obj1);
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
            importDefault(dependencyMap[49]).dispatch(obj2);
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
          num3 = importDefault(dependencyMap[60]).extractTimestamp(messageId5);
          const obj7 = importDefault(dependencyMap[60]);
        }
        const firstResult = messages.first();
        const lastResult = messages.last();
        let flag4 = !messages.hasMoreBefore && null != firstResult;
        if (flag4) {
          flag4 = importDefault(dependencyMap[60]).extractTimestamp(firstResult.id) >= num3;
          const obj8 = importDefault(dependencyMap[60]);
        }
        if (!flag4) {
          let tmp25 = !messages.hasMoreAfter && null != lastResult;
          if (tmp25) {
            tmp25 = importDefault(dependencyMap[60]).extractTimestamp(lastResult.id) <= num3;
            const obj9 = importDefault(dependencyMap[60]);
          }
          flag4 = tmp25;
        }
        if (!flag4) {
          let tmp28 = null != firstResult && null != lastResult;
          if (tmp28) {
            tmp28 = importDefault(dependencyMap[60]).extractTimestamp(firstResult.id) < num3;
            const obj10 = importDefault(dependencyMap[60]);
          }
          if (tmp28) {
            tmp28 = importDefault(dependencyMap[60]).extractTimestamp(lastResult.id) > num3;
            const obj11 = importDefault(dependencyMap[60]);
          }
          flag4 = tmp28;
        }
        if (flag4) {
          const obj4 = { type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId, jump: tmp13, limit: closure_36 };
          importDefault(dependencyMap[49]).dispatch(obj4);
          flag4 = true;
          const obj12 = importDefault(dependencyMap[49]);
        }
        return flag4;
      }
    }
    return false;
  },
  sendMessage(arg0, arg1) {
    let flag = arg2;
    arg1 = arg0;
    const importDefault = arg1;
    if (arg2 === undefined) {
      flag = true;
    }
    const importAll = flag;
    const dependencyMap = arg3;
    return callback(async () => {
      let backgroundifyResult;
      if (lib.reaction) {
        return Promise.resolve();
      } else {
        const tmp4 = yield closure_1(closure_3[65])(closure_0);
        if (null != tmp4) {
          return closure_56.sendMessage(tmp4, lib, closure_2, obj);
        } else {
          let nonce = obj.nonce;
          if (null == nonce) {
            let obj = backgroundifyResult(obj[52]);
            nonce = obj.createNonce();
          }
          obj = {};
          const merged = Object.assign(obj);
          obj["nonce"] = nonce;
          backgroundifyResult = lib(obj[66]).backgroundify(function _trySend() {
            return closure_56._sendMessage(backgroundifyResult, closure_1, obj);
          }, undefined);
          const result = closure_11.recordMessageSendAttempt(backgroundifyResult, nonce, obj);
          if (ready.isReady(backgroundifyResult)) {
            let backgroundifyResultResult = backgroundifyResult();
          } else {
            if (closure_2) {
              if (backgroundifyResult !== backgroundifyResult(obj[56]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
                const _HermesInternal = HermesInternal;
                closure_52.info("Waiting for channel " + backgroundifyResult + " to be ready before sending.");
                backgroundifyResultResult = new Promise((backgroundifyResult) => {
                  closure_23.whenReady(backgroundifyResult, () => {
                    closure_52.info("Channel " + arg0 + " is ready for sending now.");
                    arg0().then(arg0, arg1);
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
    const tmp = importDefault(dependencyMap[67])(code);
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
  sendGreetMessage(id, 749054660769218631, sendMessageOptionsForReply) {
    let allowedMentions;
    let messageReference;
    let obj = sendMessageOptionsForReply;
    const importDefault = _749054660769218631;
    if (sendMessageOptionsForReply === undefined) {
      obj = {};
    }
    ({ messageReference, allowedMentions } = obj);
    const HTTP = _749054660769218631(dependencyMap[54]).HTTP;
    obj = { url: closure_30.MESSAGES_GREET(id), body: { sticker_ids: items, allowed_mentions: allowedMentions, message_reference: messageReference }, oldFormErrors: true };
    const items = [_749054660769218631];
    obj.rejectWithError = _749054660769218631(dependencyMap[54]).rejectWithMigratedError();
    obj = { location: constants10.GREET };
    obj.context = obj;
    const obj3 = _749054660769218631(dependencyMap[54]);
    return HTTP.post(obj).then((body) => {
      arg1(closure_3[68]).donateSentMessage(body.body.content, body);
      closure_56.receiveMessage(body, body.body);
      const obj = arg1(closure_3[68]);
      const items = [arg1];
      arg1(closure_3[49]).dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: items });
      return body;
    }, (messageId) => {
      closure_51.log("Failed to send greeting");
      if (429 !== messageId.status) {
        closure_56.sendClydeError(messageId, messageId.body.code);
      }
      let obj = arg1(closure_3[49]);
      obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.body.id, channelId: messageId };
      obj.dispatch(obj);
      throw messageId;
    });
  },
  sendPollMessage(id, arg1, arg2) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    obj["poll"] = arg1;
    obj["location"] = constants10.POLL_CREATION;
    return obj14._sendMessage(id, { validNonShortcutEmojis: [], invalidEmojis: [] }, obj);
  },
  validateMessage(invalidEmojis, currentUser, arg2) {
    if (invalidEmojis.some((animated) => animated.animated)) {
      let obj = importDefault(dependencyMap[69]);
      if (!obj.canUseAnimatedEmojis(currentUser)) {
        const intl = currentUser(dependencyMap[46]).intl;
        let stringResult = intl.string(currentUser(dependencyMap[46]).t.V5/GgC);
        let str = "INVALID_ANIMATED_EMOJI_BODY";
      }
      obj = { errorMessage: stringResult, errorMessageName: str };
      return obj;
    }
    const intl2 = currentUser(dependencyMap[46]).intl;
    stringResult = intl2.string(currentUser(dependencyMap[46]).t.Q87rI/);
    str = "INVALID_EXTERNAL_EMOJI_BODY";
  },
  _sendMessage(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const importAll = arg2;
    return callback(async () => {
      let _location;
      let activity;
      let activityAction;
      let allowedMentions;
      let announcementSendOptions;
      let attachments;
      let attachments2;
      let attachmentsToUpload;
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
      let tmp7;
      let lib;
      _location = undefined;
      let closure_3;
      stickerIds = undefined;
      let messageReference;
      poll = undefined;
      contentInventoryEntry = undefined;
      attachmentsToUpload = undefined;
      let tmp28;
      let DEFAULT;
      let nonce;
      nonce = undefined;
      let closure_13;
      let obj;
      const promise = lib(closure_3[65])(tmp7);
      if (null != promise) {
        let infoResult = closure_52;
        infoResult = closure_52.info("Converting channel to a private channel");
        return promise.then((arg0) => {
          closure_52.info("Finished converting channel to a private channel");
          return closure_56._sendMessage(arg0, closure_1, _location);
        });
      } else {
        infoResult = lib;
        const content = lib.content;
        tmp7 = content;
        ({ invalidEmojis, validNonShortcutEmojis: closure_1, tts } = lib);
        infoResult = undefined !== tts && tts;
        ({ activityAction, location: _location } = _location);
        ({ inviteAnalyticsMetadata: closure_3, stickerIds } = _location);
        messageReference = _location.messageReference;
        ({ allowedMentions, poll } = _location);
        ({ sharedCustomTheme, contentInventoryEntry } = _location);
        ({ attachments, attachmentsToUpload } = _location);
        ({ onAttachmentUploadError, announcementSendOptions, withCheckpoint, mediaMention, flags } = _location);
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        const tmp6 = stickerIds(lib(closure_3[70])(content), 2);
        tmp7 = tmp6[1];
        let tmp8 = content;
        let addFlagResult = num2;
        if (tmp6[0]) {
          obj = tmp7(closure_3[71]);
          addFlagResult = obj.addFlag(num2, constants.SUPPRESS_NOTIFICATIONS);
          tmp8 = tmp7;
        }
        const channel = channel.getChannel(tmp7);
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        const guild = guild.getGuild(guild_id);
        let obj1 = tmp7(closure_3[72]);
        let addFlagResult1 = addFlagResult;
        if (obj1.canSendGuildOfficialMessages(guild, channel, "_sendMessage")) {
          let obj2 = tmp7(closure_3[71]);
          addFlagResult1 = obj2.addFlag(addFlagResult, constants.IS_GUILD_OFFICIAL);
        }
        let flag2 = false;
        const messageReference2 = _location.messageReference;
        let type;
        if (null != messageReference2) {
          type = messageReference2.type;
        }
        tmp28 = type === constants3.FORWARD;
        if ("" === tmp8) {
          if (null == activityAction) {
            if (null == stickerIds) {
              if (null == poll) {
                if (null == sharedCustomTheme) {
                  if (null == contentInventoryEntry) {
                    if (!tmp28) {
                      if (null == attachments) {
                        if (!withCheckpoint) {
                          if (null == lib.components) {
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
          DEFAULT = constants2.REPLY;
        } else {
          DEFAULT = constants2.DEFAULT;
        }
        nonce = _location.nonce;
        if (null == nonce) {
          let obj3 = tmp7(closure_3[52]);
          nonce = obj3.createNonce();
        }
        obj = { channelId: tmp7, content: tmp8, tts: infoResult, type: DEFAULT, messageReference, allowedMentions };
        let tmp44;
        if (0 !== addFlagResult1) {
          tmp44 = addFlagResult1;
        }
        obj.flags = tmp44;
        obj.nonce = nonce;
        const tmp42 = lib(closure_3[50]);
        obj.poll = tmp7(closure_3[73]).createPollServerDataFromCreateRequest(poll);
        obj.sharedCustomTheme = sharedCustomTheme;
        obj.mediaMention = mediaMention;
        const tmp42Result = tmp42(obj);
        if (false !== _location.eagerDispatch) {
          const result = tmp7(closure_3[74]).updateComboOnMessageSend(tmp7, tmp42Result.id);
          if (null != stickerIds) {
            const mapped = stickerIds.map((arg0) => stickerById.getStickerById(arg0));
            tmp42Result.sticker_items = mapped.filter((arg0) => null != arg0);
          }
          closure_56.receiveMessage(tmp7, tmp42Result, true, _location);
          const obj7 = tmp7(closure_3[74]);
        }
        if (!closure_53) {
          if (null != invalidEmojis) {
            if (invalidEmojis.length > 0) {
              closure_53 = true;
              const validateMessageResult = closure_56.validateMessage(invalidEmojis, currentUser.getCurrentUser(), tmp7);
              closure_56.sendBotMessage(tmp7, validateMessageResult.errorMessage, validateMessageResult.errorMessageName);
            }
          }
        }
        obj = {};
        if (null != announcementSendOptions) {
          let SEND = tmp7(closure_3[75]).MessageDataType.SEND_ANNOUNCEMENT;
        } else {
          SEND = tmp7(closure_3[75]).MessageDataType.SEND;
        }
        obj.type = SEND;
        obj1 = { channelId: tmp7, content: tmp8, nonce, tts: infoResult, message_reference: messageReference, allowed_mentions: allowedMentions, flags: addFlagResult1, analyticsLocation: _location };
        obj.message = obj1;
        if (null != lib.components) {
          tmp75.message.components = lib.components;
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
          if (activityAction.type !== constants4.JOIN_REQUEST) {
            sessionId = session_id;
            if (activityAction.type !== constants4.STREAM_REQUEST) {
              sessionId = session_id;
              if (null == session_id) {
                sessionId = sessionId.getSessionId();
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
            const tmp86 = null != activity.party && null != activity.party.id;
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
        if (nonce.isEnabled()) {
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
            infoResult = tmp7;
            infoResult = closure_3;
            obj3 = {};
            infoResult = tmp7;
            obj3.channelId = tmp7;
            obj3.nonce = nonce;
            obj3.items = attachmentsToUpload;
            obj3.message = tmp42Result;
            infoResult = _location;
            infoResult = !_location.doNotNotifyOnError;
            obj3.shouldUploadFailureSendNotification = infoResult;
            infoResult = yield tmp7(closure_3[76]).uploadMessageAttachments(obj3);
            if (null != infoResult) {
              ({ attachments: attachments2, uploader: closure_13 } = infoResult);
              if (flag2) {
                infoResult = attachments2;
                if (null != attachments2) {
                  infoResult = attachments2;
                }
              }
              infoResult = attachments2;
              if (null != attachments2) {
                infoResult = attachments2;
                obj.message.attachments = attachments2.map((id) => tmp7(closure_3[48]).getAttachmentPayload(id, arg1));
              }
            }
            const obj11 = tmp7(closure_3[76]);
            const tmp99 = infoResult;
          }
        }
        infoResult = globalThis;
        infoResult = new.target;
        infoResult = new.target;
        infoResult = new Promise((arg0, arg1) => {
          const _undefined = arg1;
          let closure_2 = Date.now();
          closure_3 = _undefined(closure_3[75]).length;
          const rounded = Math.floor(10000 * Math.random());
          const stickerIds = rounded;
          closure_52.info("Queueing message to be sent LogId:" + rounded);
          const obj = _undefined(closure_3[75]);
          obj.enqueue(obj, (ok) => {
            let applicationStatus;
            let body;
            let guildId;
            let userId;
            if (ok.ok) {
              let obj15 = arg1(length[68]);
              obj15.donateSentMessage(ok, ok);
              let obj = {};
              obj = { duration: message, queueSize: length };
              obj.sendAnalytics = obj;
              obj.poll = closure_6;
              closure_56.receiveMessage(ok, ok.body, true, obj);
              if (null != closure_2.alsoForwardToChannelId) {
                let obj18 = arg1(length[78]);
                let obj19 = ok(length[55]);
                const sendForwardResult = obj18.sendForward(obj19.createMessageRecord(ok.body), closure_2.alsoForwardToChannelId);
                obj18.sendForward(obj19.createMessageRecord(ok.body), closure_2.alsoForwardToChannelId).then(() => {
                  let channelId;
                  let destinationChannelId;
                  let guildId;
                  let referencedMessageId;
                  const obj = {};
                  const body = arg0.body;
                  let id;
                  if (null != body) {
                    id = body.id;
                  }
                  obj.referencedMessageId = id;
                  const body2 = arg0.body;
                  let guild_id;
                  if (null != body2) {
                    guild_id = body2.guild_id;
                  }
                  obj.guildId = guild_id;
                  const body3 = arg0.body;
                  let channel_id;
                  if (null != body3) {
                    channel_id = body3.channel_id;
                  }
                  obj.channelId = channel_id;
                  obj.destinationChannelId = closure_2.alsoForwardToChannelId;
                  ({ referencedMessageId, guildId, channelId, destinationChannelId } = obj);
                  callback(closure_3[40]).track(constants.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: referencedMessageId, guild_id: guildId, channel_id: channelId, destination_channel_id: destinationChannelId });
                }).catch((arg0) => {
                  const obj = {};
                  const body = arg0.body;
                  let id;
                  const combined = "Failed to forward thread message to parent channel LogId:" + closure_4;
                  if (null != body) {
                    id = body.id;
                  }
                  obj.referencedMessageId = id;
                  obj.channelId = arg0;
                  obj.destinationChannelId = closure_2.alsoForwardToChannelId;
                  obj.error = arg0.toString();
                  closure_51.log(combined, obj);
                });
                const nextPromise = obj18.sendForward(obj19.createMessageRecord(ok.body), closure_2.alsoForwardToChannelId).then(() => {
                  let channelId;
                  let destinationChannelId;
                  let guildId;
                  let referencedMessageId;
                  const obj = {};
                  const body = arg0.body;
                  let id;
                  if (null != body) {
                    id = body.id;
                  }
                  obj.referencedMessageId = id;
                  const body2 = arg0.body;
                  let guild_id;
                  if (null != body2) {
                    guild_id = body2.guild_id;
                  }
                  obj.guildId = guild_id;
                  const body3 = arg0.body;
                  let channel_id;
                  if (null != body3) {
                    channel_id = body3.channel_id;
                  }
                  obj.channelId = channel_id;
                  obj.destinationChannelId = closure_2.alsoForwardToChannelId;
                  ({ referencedMessageId, guildId, channelId, destinationChannelId } = obj);
                  callback(closure_3[40]).track(constants.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, { referenced_message_id: referencedMessageId, guild_id: guildId, channel_id: channelId, destination_channel_id: destinationChannelId });
                });
              }
              const request = request.getRequest(arg1(length[60]).cast(ok));
              if (null != request) {
                ({ guildId, userId, applicationStatus } = request);
                let obj1 = { guildId, channelId: ok, messageId: ok.body.id, joinRequestStatus: applicationStatus, joinRequestUserId: userId };
                const result = ok(length[79]).trackMemberApplicationInterviewMessage(obj1);
                const obj22 = ok(length[79]);
              }
              const result1 = closure_11.recordMessageSendApiResponse(closure_11);
              if (closure_10 === constants3.REPLY) {
                const id2 = ok.body.id;
                let message = ok;
                message = message_id;
                if (null != message_id) {
                  const message_id = message_id.message_id;
                }
                const pendingReplyActionSource = pendingReplyActionSource.getPendingReplyActionSource(message);
                if ("message_swipe" === pendingReplyActionSource) {
                  message = null;
                  if (null != message_id) {
                    message = message.getMessage(message, message_id);
                  }
                  message = store;
                  message = store.getChannel(message);
                  message = authStore;
                  message = authStore.getCurrentUser();
                  message = arg1;
                  message = length;
                  message = constants2;
                  const obj2 = { message_id: id2, channel_id: message };
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
                  message = arg1(length[40]).track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj2);
                  const obj26 = arg1(length[40]);
                } else if ("message_shortcut" === pendingReplyActionSource) {
                  message = store;
                  message = store.getChannel(message);
                  message = arg1;
                  message = length;
                  message = constants2;
                  let obj3 = { message_id: id2, channel_id: message };
                  let guild_id;
                  if (null != message) {
                    guild_id = message.guild_id;
                  }
                  obj3.guild_id = guild_id;
                  obj3.original_message_id = message_id;
                  obj3.action = "reply";
                  message = length;
                  const obj42 = arg1(length[40]);
                  message = undefined;
                  if (null != message) {
                    message = message.guild_id;
                  }
                  message = obj3;
                  message = Object.assign(ok(length[35]).collectGuildAnalyticsMetadata(message));
                  message = ok;
                  message = length;
                  const obj24 = ok(length[35]);
                  message = obj3;
                  message = Object.assign(ok(length[35]).collectChannelAnalyticsMetadata(message));
                  message = obj42.track(constants2.MESSAGE_SHORTCUT_ACTION_SENT, obj3);
                  const obj25 = ok(length[35]);
                }
              }
              message = arg1;
              message = length;
              const obj21 = arg1(length[60]);
              const obj4 = { type: "SLOWMODE_RESET_COOLDOWN" };
              message = closure_26;
              obj4.slowmodeType = closure_26.SendMessage;
              message = ok;
              obj4.channelId = ok;
              message = arg1(length[49]).dispatch(obj4);
              const obj28 = arg1(length[49]);
              const obj5 = { type: "EMOJI_TRACK_USAGE" };
              message = arg1;
              obj5.emojiUsed = arg1;
              message = arg1(length[49]).dispatch(obj5);
              const obj30 = arg1(length[49]);
              let obj6 = { type: "STICKER_TRACK_USAGE" };
              message = rounded;
              obj6.stickerIds = rounded;
              message = arg1(length[49]).dispatch(obj6);
              const obj32 = arg1(length[49]);
              const obj7 = { type: "LOCAL_MESSAGE_CREATE" };
              let obj8 = { channel_id: ok };
              message = authStore;
              obj8.author = authStore.getCurrentUser();
              obj7.message = obj8;
              message = arg1(length[49]).dispatch(obj7);
              const obj9 = {};
              message = ok;
              obj9.content = ok;
              obj9.channelId = ok;
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
              message = function trackCodedLinks(content) {
                let overrideProperties;
                ({ channelId: closure_0, messageId: closure_1, location: closure_2, inviteAnalyticsMetadata: closure_3, overrideProperties } = content);
                if (overrideProperties === undefined) {
                  overrideProperties = {};
                }
                let id2;
                id2 = id.getId();
                const item = callback(closure_3[30])(content.content).forEach(() => { ... });
              }(obj9);
              message = ok;
              message = ok;
              const id = ok.body.id;
              message = closure_2;
              message = str15;
              if (null != closure_2) {
                message = closure_2;
              }
              message = closure_2;
              message = id;
              message = function trackGiftCodes(message, message2, id, message3, isGiftLinkSentOnBehalfOfUser) {
                message = message2;
                const obj = message(isGiftLinkSentOnBehalfOfUser[44]);
                const item = message(isGiftLinkSentOnBehalfOfUser[44]).findGiftCodes(message).forEach(() => { ... });
              }(message, message, id, message, closure_2.isGiftLinkSentOnBehalfOfUser);
              if (null != closure_2.gifMetadata) {
                message = closure_2;
                message = closure_2;
                message = ok;
                if (null != closure_2) {
                  str15 = closure_2;
                }
                message = store;
                const channel = store.getChannel(message);
                if (null != channel) {
                  message = arg1;
                  message = length;
                  message = constants2;
                  let obj10 = { location: str15, message_id: ok.body.id };
                  ({ gif_provider: obj45.gif_provider, load_id: obj45.load_id, source_object: obj45.source_object, gif_url: obj45.gif_url, gif_id: obj45.gif_id } = closure_2.gifMetadata);
                  message = ok;
                  const obj44 = arg1(length[40]);
                  message = obj10;
                  message = Object.assign(ok(length[35]).collectGuildAnalyticsMetadata(channel.getGuildId()));
                  const obj46 = ok(length[35]);
                  message = obj10;
                  message = Object.assign(ok(length[35]).collectChannelAnalyticsMetadata(channel));
                  message = obj44.track(constants2.MESSAGE_SENT_WITH_GIF, obj10);
                  const obj47 = ok(length[35]);
                }
              }
              const obj11 = {};
              message = ok;
              obj11.channelId = ok;
              obj11.messageId = ok.body.id;
              let attachments = ok.body.attachments;
              if (null == attachments) {
                attachments = [];
              }
              obj11.attachments = attachments;
              message = closure_8;
              obj11.attachmentsToUpload = null != closure_8 ? closure_8 : [];
              message = message_id;
              obj11.messageReference = message_id;
              message = function trackClipsShared(channelId) {
                let attachments;
                channelId = channelId.channelId;
                ({ messageId: closure_1, attachments } = channelId);
                const attachmentsToUpload = channelId.attachmentsToUpload;
                let channel;
                let messageByReference2;
                if (attachments.length === attachmentsToUpload.length) {
                  channel = channel.getChannel(channelId);
                  if (null != channel) {
                    messageByReference2 = messageByReference.getMessageByReference(tmp);
                    const item = attachmentsToUpload.forEach(() => { ... });
                  }
                }
              }(obj11);
              message = pendingReplyActionSource;
              if (null != pendingReplyActionSource) {
                message = arg1;
                message = length;
                let obj12 = { type: "UPLOAD_COMPLETE" };
                message = ok;
                obj12.channelId = ok;
                message = pendingReplyActionSource;
                obj12.file = pendingReplyActionSource._file;
                obj12.aborted = false;
                message = arg1(length[49]).dispatch(obj12);
                const obj40 = arg1(length[49]);
              }
              message = ok;
              message = ok(ok);
              const obj34 = arg1(length[49]);
            } else {
              obj = {};
              ({ hasErr: obj.hasErr, status: obj.status, body } = ok);
              let code;
              if (null != body) {
                code = body.code;
              }
              obj.code = code;
              obj.error = ok.err;
              closure_51.log("Failed to send message", obj);
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
                      if (ok.body.code === constants.SLOWMODE_RATE_LIMITED) {
                        const retry_after = ok.body.retry_after;
                        let tmp22 = null != retry_after;
                        if (tmp22) {
                          tmp22 = retry_after > 0;
                        }
                        flag = false;
                        if (tmp22) {
                          obj6 = arg1(length[49]);
                          const obj13 = { type: "SLOWMODE_SET_COOLDOWN", channelId: ok, slowmodeType: closure_26.SendMessage, cooldownMs: retry_after * arg1(length[80]).Millis.SECOND };
                          obj6.dispatch(obj13);
                          flag = false;
                        }
                      } else {
                        message = ok;
                        message = length;
                        const AUTOMOD_ERROR_CODES = ok(length[81]).AUTOMOD_ERROR_CODES;
                        if (AUTOMOD_ERROR_CODES.has(ok.body.code)) {
                          obj3 = arg1(length[49]);
                          let obj14 = { type: "MESSAGE_SEND_FAILED_AUTOMOD", messageData: closure_14 };
                          obj15 = { code: ok.body.code, message: ok.body.message };
                          obj14.errorResponseBody = obj15;
                          obj3.dispatch(obj14);
                          flag = false;
                        } else if (ok.body.code === constants.POGGERMODE_TEMPORARILY_DISABLED) {
                          obj1 = arg1(length[49]);
                          const obj16 = { type: "POGGERMODE_TEMPORARILY_DISABLED" };
                          obj1.dispatch(obj16);
                          flag = false;
                        } else {
                          message = constants;
                          if (ok.body.code === constants.EXPLICIT_CONTENT) {
                            const EXPLICIT_CONTENT = constants4.EXPLICIT_CONTENT;
                            flag = false;
                          } else {
                            let tmp9 = null != closure_6 || request;
                            if (!tmp9) {
                              tmp9 = null != closure_7;
                            }
                            flag = false;
                            if (!tmp9) {
                              closure_56.sendClydeError(ok, ok.body.code);
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
                closure_56.deleteMessage(ok, closure_12, true);
              } else {
                if (null != pendingReplyActionSource) {
                  obj8 = arg1(length[49]);
                  const obj17 = { type: "UPLOAD_FAIL", channelId: ok, file: pendingReplyActionSource._file, messageId: closure_12, reason: EXPLICIT_CONTENT, noSendFailed: true };
                  obj8.dispatch(obj17);
                }
                if (!ok.hasErr) {
                  if (EXPLICIT_CONTENT === constants4.EXPLICIT_CONTENT) {
                    const body2 = ok.body;
                    let attachments1;
                    if (null != body2) {
                      attachments1 = body2.attachments;
                    }
                    const result2 = closure_56.sendExplicitMediaClydeError(ok, attachments1, ok(length[53]).TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    const tmp37 = ok;
                  }
                }
                obj10 = arg1(length[49]);
                obj18 = { type: "MESSAGE_SEND_FAILED", messageId: closure_12, channelId: ok, shouldNotify: !closure_2.doNotNotifyOnError, reason: EXPLICIT_CONTENT };
                obj10.dispatch(obj18);
                obj12 = ok(length[77]);
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
                const result3 = obj12.logMessageSendFailure(obj19);
                obj14 = arg1(length[75]);
                const result4 = obj14.cancelPendingSendRequests(ok);
                const item = result4.forEach((messageId) => {
                  closure_51.log("Cancelling pending message", messageId.nonce);
                  let obj = callback(closure_3[49]);
                  obj = { type: "MESSAGE_SEND_FAILED", messageId: messageId.nonce, channelId: messageId.channelId };
                  obj.dispatch(obj);
                });
              }
              arg1(ok);
            }
          }, rounded);
        });
        return infoResult;
      }
    })();
  },
  startEditMessage(channelId, messageId, content, source) {
    let obj = importDefault(dependencyMap[49]);
    obj = { type: "MESSAGE_START_EDIT", channelId, messageId, content, source };
    obj.dispatch(obj);
  },
  startEditMessageRecord(id, flags, source) {
    let obj = flags(dependencyMap[71]);
    if (obj.hasFlag(flags.flags, closure_35.IS_COMPONENTS_V2)) {
      const components = flags.components;
      const found = components.filter((type) => type.type === callback(closure_3[82]).ComponentType.TEXT_DISPLAY);
      if (found.length > 0) {
        const mapped = found.map((content) => content.content);
        const joined = mapped.join("\n");
        obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: joined, source };
        importDefault(dependencyMap[49]).dispatch(obj);
      }
    }
    obj = { type: "MESSAGE_START_EDIT", channelId: id, messageId: flags.id, content: flags.content, source };
    importDefault(dependencyMap[49]).dispatch(obj);
  },
  updateEditMessage(channelId, textValue, richValue) {
    let obj = importDefault(dependencyMap[49]);
    obj = { type: "MESSAGE_UPDATE_EDIT", channelId, textValue, richValue };
    obj.dispatch(obj);
  },
  endEditMessage(id, response) {
    let obj = importDefault(dependencyMap[49]);
    obj = { type: "MESSAGE_END_EDIT", channelId: id, response };
    obj.dispatch(obj);
  },
  editMessage(id, id2, parsed) {
    id2 = id;
    const importDefault = id2;
    ({ content: closure_2, components: closure_3 } = parsed);
    return callback(async () => {
      let obj1;
      if ("message_swipe" === editActionSource.getEditActionSource(obj1)) {
        const channel = channel.getChannel(tmp2);
        let obj = callback(closure_3[40]);
        obj = { message_id: callback, channel_id: tmp2 };
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.swipe_action = "edit";
        obj.is_own_message = true;
        obj.track(constants2.MESSAGE_SWIPE_ACTION_SENT, obj);
      }
      let obj2 = callback(closure_3[83]);
      yield obj2.unarchiveThreadIfNecessary(obj1);
      const message = store.getMessage(obj1, callback);
      let tmp15;
      if (null != message) {
        if (message.type === constants4.REPLY) {
          const messageByReference = messageByReference.getMessageByReference(message.messageReference);
          if (messageByReference.state === constants.LOADED) {
            const mentions = message.mentions;
            if (!mentions.includes(messageByReference.message.author.id)) {
              obj = {};
              const _Object = Object;
              obj.parse = Object.values(closure_38);
              obj.replied_user = false;
              tmp15 = obj;
            }
          }
        }
      }
      const message1 = store.getMessage(tmp12, tmp13);
      let hasFlagResult = null != message1;
      if (hasFlagResult) {
        hasFlagResult = message1.hasFlag(constants3.CROSSPOSTED);
      }
      obj1 = { channelId: tmp12, messageId: tmp13, content: closure_2, isCrossposted: hasFlagResult, allowed_mentions: tmp15, components: closure_3 };
      obj2 = { type: obj1(closure_3[75]).MessageDataType.EDIT, message: obj1 };
      callback(closure_3[75]).enqueue(obj2, (hasErr) => {
        let hasItem = !hasErr.hasErr;
        if (hasItem) {
          const AUTOMOD_ERROR_CODES = obj1(closure_3[81]).AUTOMOD_ERROR_CODES;
          hasItem = AUTOMOD_ERROR_CODES.has(hasErr.body.code);
        }
        if (hasItem) {
          let obj = { type: obj1(closure_3[75]).MessageDataType.EDIT, message: obj1 };
          let obj1 = callback(closure_3[49]);
          obj = { type: "MESSAGE_EDIT_FAILED_AUTOMOD" };
          obj.messageData = obj;
          obj = { code: hasErr.body.code, message: hasErr.body.message };
          obj.errorResponseBody = obj;
          obj1.dispatch(obj);
        }
        const AccessibilityAnnouncer = obj1(closure_3[84]).AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = obj1(closure_3[46]).intl;
        const string = intl.string;
        const t = obj1(closure_3[46]).t;
        if (hasErr.hasErr) {
          announce(string(t.Atp7FP));
        } else if (hasItem) {
          announce(string(t.Hym4ix));
        } else {
          announce(string(t.0x1HBD));
        }
        let tmp14;
        if (!hasErr.hasErr) {
          tmp14 = hasErr;
        }
        closure_56.endEditMessage(obj1, tmp14);
        obj1 = { channelId: obj1, messageId: callback };
        closure_56.focusMessage(obj1);
      });
    })();
  },
  suppressEmbeds(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      let obj = callback2(closure_3[83]);
      yield obj.unarchiveThreadIfNecessary(closure_0);
      const message = message.getMessage(callback, callback2);
      if (null != message) {
        const HTTP = callback(closure_3[54]).HTTP;
        obj = { url: closure_30.MESSAGE(callback, callback2) };
        obj = { flags: callback(closure_3[71]).setFlag(message.flags, constants.SUPPRESS_EMBEDS, true) };
        obj.body = obj;
        obj.oldFormErrors = true;
        const obj4 = callback(closure_3[71]);
        obj.rejectWithError = callback(closure_3[54]).rejectWithMigratedError();
        HTTP.patch(obj);
        const obj5 = callback(closure_3[54]);
      }
    })();
  },
  patchMessageGuildOfficial(id, id2, arg2) {
    id2 = id;
    const importDefault = id2;
    const importAll = arg2;
    return callback(async () => {
      let obj = callback2(closure_3[83]);
      yield obj.unarchiveThreadIfNecessary(closure_0);
      const message = message.getMessage(callback, callback2);
      if (null != message) {
        const HTTP = callback(closure_3[54]).HTTP;
        obj = { url: closure_30.MESSAGE(callback, callback2) };
        obj = { flags: callback(closure_3[71]).setFlag(message.flags, constants.IS_GUILD_OFFICIAL, closure_2) };
        obj.body = obj;
        obj.oldFormErrors = true;
        const obj4 = callback(closure_3[71]);
        obj.rejectWithError = callback(closure_3[54]).rejectWithMigratedError();
        HTTP.patch(obj);
        const obj5 = callback(closure_3[54]);
      }
    })();
  },
  patchMessageAttachments(arg0, id, found) {
    id = arg0;
    const importDefault = id;
    const importAll = found;
    return callback(async () => {
      let obj = callback2(closure_3[83]);
      yield obj.unarchiveThreadIfNecessary(closure_0);
      const HTTP = callback(closure_3[54]).HTTP;
      obj = { url: closure_30.MESSAGE(callback, callback2), body: obj, oldFormErrors: true };
      obj = { attachments: closure_2, rejectWithError: callback(closure_3[54]).rejectWithMigratedError() };
      HTTP.patch(obj);
    })();
  },
  deleteMessage(arg0, arg1) {
    let flag = arg2;
    arg1 = arg0;
    const importDefault = arg1;
    if (arg2 === undefined) {
      flag = false;
    }
    const importAll = flag;
    return callback(async () => {
      function dispatchDelete(arg0) {
        let obj = callback(closure_3[49]);
        obj = { type: "MESSAGE_DELETE", id: callback, channelId: dispatchDelete };
        obj.dispatch(obj).then(() => {
          const AccessibilityAnnouncer = callback(closure_3[84]).AccessibilityAnnouncer;
          const intl = callback(closure_3[46]).intl;
          AccessibilityAnnouncer.announce(intl.string(callback(closure_3[46]).t.RYMs7s));
        });
      }
      if (closure_2) {
        dispatchDelete();
      } else {
        let obj = callback(closure_3[83]);
        yield obj.unarchiveThreadIfNecessary(closure_0);
        const HTTP = dispatchDelete(closure_3[54]).HTTP;
        obj = { url: closure_30.MESSAGE(dispatchDelete, callback), oldFormErrors: true, rejectWithError: dispatchDelete(closure_3[54]).rejectWithMigratedError() };
        const obj3 = dispatchDelete(closure_3[54]);
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
      let obj = importDefault(dependencyMap[35]);
      obj = { message_name: message.loggingName, message_author: message.author.username };
      obj.trackWithMetadata(constants.AUTOMATED_MESSAGE_DISMISSED, obj);
    }
    const result = arg1(dependencyMap[85]).logGiftIntentMessageDismissed(message.channel_id, message.id);
    self.deleteMessage(message.channel_id, message.id, true);
  },
  revealMessage(id, messageId) {
    let obj = importDefault(dependencyMap[49]);
    obj = { type: "MESSAGE_REVEAL", channelId: id, messageId };
    obj.dispatch(obj);
  },
  crosspostMessage(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      const HTTP = callback(closure_3[54]).HTTP;
      const obj = { handleRemoveAvatarSelect: null, __index__: null, ALLOW_GAME_FRIEND_DMS: null, url: closure_30.MESSAGE_CROSSPOST(callback, closure_1), rejectWithError: callback(closure_3[54]).rejectWithMigratedError() };
      return yield HTTP.post(obj);
    })();
  },
  trackInvite
};
const obj1 = {
  messageName: "TOO_MANY_THREADS",
  messageGetter(isForumLikeChannel) {
    if (!isForumLikeChannel.isForumLikeChannel()) {
      if (!isForumLikeChannel.isForumPost()) {
        const intl = arg1(dependencyMap[46]).intl;
        let stringResult = intl.string(arg1(dependencyMap[46]).t.5EMPA7);
      }
      return stringResult;
    }
    const intl2 = arg1(dependencyMap[46]).intl;
    stringResult = intl2.string(arg1(dependencyMap[46]).t./jUd2+);
  }
};
const obj10 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.Oc1Zjw);
  }
};
const obj11 = {
  messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    const obj = { maxSizeMb: arg1(dependencyMap[48]).MAX_TOTAL_ATTACHMENT_SIZE_MB };
    return intl.formatToPlainString(arg1(dependencyMap[46]).t.DYFPg2, obj);
  }
};
const obj12 = {
  messageName: "CLOUD_UPLOAD_NOT_FOUND",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.bQldfH);
  }
};
const obj13 = {
  messageName: "INVALID_PERMISSIONS",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.zl4Weq);
  }
};
const obj2 = {
  messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.aY+lLC);
  }
};
const obj3 = {
  messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[46]).t.zSG3Qy, { helpUrl: constants8.HARMFUL_LINKS });
  }
};
const obj4 = {
  messageName: "HARMFUL_URL_BLOCKED",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.WxX2Fd);
  }
};
const obj5 = {
  messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.k1Cjqr);
  }
};
const obj6 = {
  messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.Z5SUuv);
  }
};
const obj7 = {
  messageName: "BOT_DM_RATE_LIMITED",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.E8nbNb);
  }
};
const obj8 = {
  messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t.aRUbah);
  }
};
const obj9 = {
  messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
  messageGetter() {
    const intl = arg1(dependencyMap[46]).intl;
    return intl.string(arg1(dependencyMap[46]).t./meGhR);
  }
};
const tmp4 = arg1(dependencyMap[27]);
const result = arg1(dependencyMap[87]).fileFinishedImporting("actions/MessageActionCreators.tsx");

export default obj14;
