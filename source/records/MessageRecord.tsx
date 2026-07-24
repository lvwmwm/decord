// Module ID: 3768
// Function ID: 28912
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 1858, 653, 1360, 3769, 5679, 7005, 8224, 2]
// Exports: isMessageComponentsV2

// Module 3768 (_callSuper)
import closure_3 from "ME";
import importDefaultResult from "hasFlag";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult1 from "Record";
import ME from "ME";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ MessageFlags: closure_8, MessageStates: closure_9, MessageTypes: closure_10 } = ME);
const tmp5 = ((importDefaultResult1) => {
  class MinimalMessageRecord {
    constructor(arg0) {
      tmp = outer1_3(this, MinimalMessageRecord);
      tmp2 = outer1_12(this, MinimalMessageRecord);
      DEFAULT = importDefaultResult1.type;
      if (null == DEFAULT) {
        tmp3 = outer1_10;
        DEFAULT = outer1_10.DEFAULT;
      }
      tmp2.type = DEFAULT;
      content = importDefaultResult1.content;
      str = "";
      if (null != content) {
        str = content;
      }
      tmp2.content = str;
      attachments = importDefaultResult1.attachments;
      if (null == attachments) {
        attachments = [];
      }
      tmp2.attachments = attachments;
      embeds = importDefaultResult1.embeds;
      if (null == embeds) {
        embeds = [];
      }
      tmp2.embeds = embeds;
      timestamp = importDefaultResult1.timestamp;
      if (null == timestamp) {
        tmp4 = globalThis;
        _Date = Date;
        prototype = Date.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        timestamp = new Date();
      }
      tmp2.timestamp = timestamp;
      editedTimestamp = importDefaultResult1.editedTimestamp;
      tmp7 = null;
      if (null != editedTimestamp) {
        tmp7 = editedTimestamp;
      }
      tmp2.editedTimestamp = tmp7;
      flags = importDefaultResult1.flags;
      num = 0;
      if (null != flags) {
        num = flags;
      }
      tmp2.flags = num;
      components = importDefaultResult1.components;
      if (null == components) {
        components = [];
      }
      tmp2.components = components;
      codedLinks = importDefaultResult1.codedLinks;
      if (null == codedLinks) {
        codedLinks = [];
      }
      tmp2.codedLinks = codedLinks;
      stickers = importDefaultResult1.stickers;
      if (null == stickers) {
        stickers = [];
      }
      tmp2.stickers = stickers;
      sticker_items = importDefaultResult1.sticker_items;
      if (null == sticker_items) {
        sticker_items = importDefaultResult1.stickerItems;
      }
      if (null == sticker_items) {
        sticker_items = [];
      }
      tmp2.stickerItems = sticker_items;
      soundboardSounds = importDefaultResult1.soundboard_sounds;
      if (null == soundboardSounds) {
        soundboardSounds = importDefaultResult1.soundboardSounds;
      }
      tmp2.soundboardSounds = soundboardSounds;
      return tmp2;
    }
  }
  callback3(MinimalMessageRecord, importDefaultResult1);
  const items = [
    {
      key: "hasFlag",
      value(arg0) {
        return MinimalMessageRecord(outer1_2[7]).hasFlag(this.flags, arg0);
      }
    }
  ];
  return importDefaultResult(MinimalMessageRecord, items);
})(importDefaultResult1);
let closure_11 = tmp5;
class ModeratorReport {
  constructor(arg0) {
    tmp = closure_3(this, ModeratorReport);
    ({ reporting_user_id: this.reporting_user_id, reported_user_id: this.reported_user_id, reporting_member: this.reporting_member, reported_member: this.reported_member } = global);
    return;
  }
}
const importDefaultResultResult = importDefaultResult(ModeratorReport);
let tmp7 = ((importDefaultResult1) => {
  class MessageSnapshotRecord {
    constructor(arg0) {
      tmp = outer1_3(this, MessageSnapshotRecord);
      tmp2 = outer1_12(this, MessageSnapshotRecord);
      tmp3 = new outer1_11(importDefaultResult1.message);
      tmp2.message = tmp3;
      moderator_report = importDefaultResult1.moderator_report;
      tmp4 = null;
      if (null != moderator_report) {
        tmp4 = moderator_report;
      }
      tmp2.moderatorReport = tmp4;
      return tmp2;
    }
  }
  callback3(MessageSnapshotRecord, importDefaultResult1);
  return importDefaultResult(MessageSnapshotRecord);
})(importDefaultResult1);
let tmp8 = ((arg0) => {
  class MessageRecord {
    constructor(arg0) {
      tmp = outer1_3(this, MessageRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_12(this, MessageRecord, items);
      ({ id: tmp2.id, channel_id: tmp2.channel_id, author: tmp2.author, customRenderedContent: tmp2.customRenderedContent } = arg0);
      tmp2.mentions = arg0.mentions || [];
      tmp2.mentionRoles = arg0.mentionRoles || [];
      tmp2.mentionChannels = arg0.mentionChannels || [];
      if (arg0.mentionGames instanceof Map) {
        mentionGames = arg0.mentionGames;
      } else {
        _Map = Map;
        mentionGames = arg0.mentionGames;
        tmp3 = null;
        if (null == mentionGames) {
          mentionGames = [];
        }
        prototype = _Map.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        mentionGames = new _Map(mentionGames.map((id) => {
          const items = [id.id, id];
          return items;
        }));
      }
      tmp2.mentionGames = mentionGames;
      tmp2.mentioned = arg0.mentioned || false;
      tmp2.pinned = arg0.pinned || false;
      tmp2.mentionEveryone = arg0.mentionEveryone || false;
      tmp2.tts = arg0.tts || false;
      tmp2.giftCodes = arg0.giftCodes || [];
      SENT = arg0.state;
      if (!SENT) {
        tmp6 = outer1_9;
        SENT = outer1_9.SENT;
      }
      tmp2.state = SENT;
      nonce = arg0.nonce;
      tmp7 = undefined;
      if (null != nonce) {
        tmp7 = nonce;
      }
      tmp2.nonce = tmp7;
      tmp2.blocked = arg0.blocked || false;
      tmp2.ignored = arg0.ignored || false;
      tmp2.call = arg0.call || null;
      tmp2.bot = arg0.bot || false;
      tmp2.webhookId = arg0.webhookId || null;
      tmp2.reactions = arg0.reactions || [];
      tmp2.applicationId = arg0.application_id || arg0.applicationId || null;
      tmp2.application = arg0.application || null;
      tmp2.activity = arg0.activity || null;
      tmp2.activityInstance = arg0.activity_instance || arg0.activityInstance || null;
      tmp2.messageReference = arg0.messageReference || null;
      tmp2.isSearchHit = arg0.hit || arg0.isSearchHit || false;
      tmp2.loggingName = arg0.loggingName || null;
      ({ colorString: tmp2.colorString, nick: tmp2.nick } = arg0);
      tmp2.interaction = arg0.interaction || null;
      tmp2.interactionData = arg0.interactionData || null;
      tmp2.interactionMetadata = arg0.interactionMetadata || null;
      tmp2.interactionError = arg0.interactionError || null;
      ({ roleSubscriptionData: tmp2.roleSubscriptionData, purchaseNotification: tmp2.purchaseNotification, poll: tmp2.poll } = arg0);
      tmp2.sharedClientTheme = arg0.shared_client_theme || arg0.sharedClientTheme;
      tmp2.referralTrialOfferId = arg0.referralTrialOfferId || null;
      tmp2.premiumGroupInviteId = arg0.premiumGroupInviteId || null;
      giftInfo = arg0.gift_info;
      if (null == giftInfo) {
        giftInfo = arg0.giftInfo;
      }
      tmp2.giftInfo = giftInfo;
      tmp2.giftingPrompt = arg0.giftingPrompt || null;
      tmp2.boostingPrompt = arg0.boostingPrompt || null;
      tmp2.messageSnapshots = arg0.messageSnapshots || [];
      tmp2.isUnsupported = arg0.isUnsupported || false;
      changelog_id = arg0.changelog_id;
      if (null == changelog_id) {
        tmp8 = arg0.changelogId || null;
        changelog_id = tmp8;
      }
      tmp2.changelogId = changelog_id;
      mediaMention = arg0.media_mention;
      if (null == mediaMention) {
        mediaMention = arg0.mediaMention;
      }
      tmp9 = null;
      if (null != mediaMention) {
        tmp9 = mediaMention;
      }
      tmp2.mediaMention = tmp9;
      lobby_member = arg0.lobby_member;
      additional_name = undefined;
      if (null != lobby_member) {
        additional_name = lobby_member.additional_name;
      }
      if (null == additional_name) {
        additional_name = arg0.additionalName;
      }
      tmp11 = null;
      if (null != additional_name) {
        tmp11 = additional_name;
      }
      tmp2.additionalName = tmp11;
      return tmp2;
    }
  }
  callback3(MessageRecord, arg0);
  let obj = {
    key: "isEdited",
    value() {
      return null != this.editedTimestamp;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getChannelId",
    value() {
      return this.channel_id;
    }
  };
  items[1] = obj;
  obj = {
    key: "getReaction",
    value(arg0) {
      let closure_0 = arg0;
      const reactions = this.reactions;
      return reactions.find((emoji) => MessageRecord(outer2_2[8]).emojiEquals(emoji.emoji, closure_0));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getContentMessage",
    value() {
      let self = this;
      if (outer1_1(outer1_2[9])(this)) {
        self = this.messageSnapshots[0].message;
      }
      return self;
    }
  };
  items[4] = {
    key: "userHasReactedWithEmoji",
    value(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const reactions = this.reactions;
      return reactions.some((emoji) => {
        if (obj.emojiEquals(emoji.emoji, closure_0)) {
          let me = closure_1;
          if (closure_1) {
            me = emoji.me;
          }
          if (!me) {
            me = !closure_1 && emoji.me_burst;
            const tmp2 = !closure_1 && emoji.me_burst;
          }
          return me;
        }
        obj = MessageRecord(outer2_2[8]);
      });
    }
  };
  items[5] = {
    key: "addReaction",
    value(emoji) {
      let flag = arg1;
      let items = arg2;
      let NORMAL = arg3;
      const self = this;
      let closure_0 = emoji;
      if (arg1 === undefined) {
        flag = false;
      }
      if (items === undefined) {
        items = [];
      }
      if (NORMAL === undefined) {
        NORMAL = MessageRecord(outer1_2[10]).ReactionTypes.NORMAL;
      }
      let c4 = -1;
      const reactions = self.reactions;
      const mapped = reactions.map((emoji) => {
        let obj = MessageRecord(outer2_2[8]);
        let tmp = emoji;
        if (obj.emojiEquals(emoji.emoji, closure_0)) {
          let closure_4 = arg1;
          if (NORMAL === MessageRecord(outer2_2[10]).ReactionTypes.BURST) {
            if (flag) {
              if (emoji.me_burst) {
                return emoji;
              }
            }
            const sum = emoji.burst_count + 1;
            if (null != emoji.burst_colors) {
              if (emoji.burst_colors.length > 0) {
                let burst_colors = emoji.burst_colors;
              }
              obj = {};
              const merged = Object.assign(emoji);
              let me_burst = !tmp33;
              if (!flag) {
                me_burst = emoji.me_burst;
              }
              obj["me_burst"] = me_burst;
              obj["burst_count"] = sum;
              obj = {};
              const merged1 = Object.assign(emoji.count_details);
              obj["burst"] = sum;
              obj["count_details"] = obj;
              obj["burst_colors"] = burst_colors;
              tmp = obj;
            }
            burst_colors = items;
          } else if (NORMAL === MessageRecord(outer2_2[10]).ReactionTypes.VOTE) {
            const count_details = emoji.count_details;
            let vote;
            if (null != count_details) {
              vote = count_details.vote;
            }
            let num3 = 0;
            if (null != vote) {
              num3 = vote;
            }
            if (!flag) {
              let sum1 = num3 + 1;
            } else {
              sum1 = num3;
            }
            const obj1 = {};
            const merged2 = Object.assign(emoji);
            const obj2 = {};
            const merged3 = Object.assign(emoji.count_details);
            obj2["vote"] = sum1;
            obj1["count_details"] = obj2;
            let me_vote = !tmp25;
            if (!flag) {
              me_vote = emoji.me_vote;
            }
            obj1["me_vote"] = me_vote;
            tmp = obj1;
          } else {
            if (flag) {
              if (emoji.me) {
                return emoji;
              }
            }
            const sum2 = emoji.count + 1;
            const obj3 = {};
            const merged4 = Object.assign(emoji);
            obj3["count"] = sum2;
            const obj4 = {};
            const merged5 = Object.assign(emoji.count_details);
            obj4["normal"] = sum2;
            obj3["count_details"] = obj4;
            let me = !tmp14;
            if (!flag) {
              me = emoji.me;
            }
            obj3["me"] = me;
            tmp = obj3;
          }
        }
        return tmp;
      });
      if (-1 === c4) {
        if (NORMAL === MessageRecord(outer1_2[10]).ReactionTypes.BURST) {
          let obj = { emoji, me: false, me_burst: flag, count: 0, count_details: { burst: 1, normal: 0 }, burst_count: 1, burst_colors: items };
          mapped.push(obj);
        } else if (NORMAL === MessageRecord(outer1_2[10]).ReactionTypes.VOTE) {
          obj = { emoji, me: false, me_burst: false, me_vote: flag, count: 0, count_details: { burst: 0, normal: 0, vote: 1 }, burst_count: 0, burst_colors: [] };
          mapped.push(obj);
        } else {
          obj = { emoji, me: flag, me_burst: false, count: 1, count_details: { burst: 0, normal: 1 }, burst_count: 0, burst_colors: [] };
          mapped.push(obj);
        }
      }
      return self.set("reactions", mapped);
    }
  };
  items[6] = {
    key: "addReactionBatch",
    value(arr) {
      let closure_0 = arg1;
      return arr.reduce((arg0, arg1) => {
        let closure_0;
        let closure_1;
        let users;
        ({ users, emoji: closure_0, reactionType: closure_1 } = arg1);
        return users.reduce((addReaction) => addReaction.addReaction(closure_0, arg1 === outer1_0, [], closure_1), arg0);
      }, this);
    }
  };
  items[7] = {
    key: "removeReaction",
    value(arg0) {
      let burst_count;
      let count;
      let flag = arg1;
      let NORMAL = arg2;
      const self = this;
      let closure_0 = arg0;
      if (arg1 === undefined) {
        flag = false;
      }
      if (NORMAL === undefined) {
        NORMAL = MessageRecord(outer1_2[10]).ReactionTypes.NORMAL;
      }
      let c3 = -1;
      const reactions = self.reactions;
      const mapped = reactions.map((emoji) => {
        let str = emoji;
        let obj = MessageRecord(outer2_2[8]);
        if (!obj.emojiEquals(emoji.emoji, closure_0)) {
          return str;
        } else {
          if (NORMAL === MessageRecord(outer2_2[10]).ReactionTypes.BURST) {
            if (flag) {
              if (!str.me_burst) {
                let burst_count = str.burst_count;
              }
              obj = {};
              const merged = Object.assign(str);
              obj["burst_count"] = burst_count;
              obj["me_burst"] = !flag && str.me_burst;
              obj = {};
              const merged1 = Object.assign(str.count_details);
              obj["burst"] = burst_count;
              str = "count_details";
              obj["count_details"] = obj;
              let obj1 = obj;
              let closure_3 = arg1;
              const tmp28 = !flag && str.me_burst;
            }
            burst_count = str.burst_count - 1;
          } else if (NORMAL !== MessageRecord(outer2_2[10]).ReactionTypes.VOTE) {
            if (flag) {
              if (!str.me) {
                let count = str.count;
              }
              obj1 = {};
              const merged2 = Object.assign(str);
              obj1["count"] = count;
              obj1["me"] = !flag && str.me;
              const obj2 = {};
              const merged3 = Object.assign(str.count_details);
              obj2["normal"] = count;
              obj1["count_details"] = obj2;
              const tmp9 = !flag && str.me;
            }
            count = str.count - 1;
          }
          const count_details = str.count_details;
          let vote;
          if (null != count_details) {
            vote = count_details.vote;
          }
          let num3 = 0;
          if (null != vote) {
            num3 = vote;
          }
          if (!flag) {
            let diff = num3 - 1;
          } else {
            diff = num3;
          }
          const obj3 = {};
          const merged4 = Object.assign(str);
          const obj4 = {};
          const merged5 = Object.assign(str.count_details);
          obj4["vote"] = diff;
          obj3["count_details"] = obj4;
          obj3["me_vote"] = !flag && str.me_vote;
          obj1 = obj3;
          const tmp22 = !flag && str.me_vote;
        }
      });
      let obj = mapped[c3];
      if (null == obj) {
        obj = {};
      }
      let count_details = obj.count_details;
      let normal;
      ({ count, burst_count } = obj);
      if (null != count_details) {
        normal = count_details.normal;
      }
      let num2 = 0;
      if (null != normal) {
        num2 = normal;
      }
      let burst;
      if (null != count_details) {
        burst = count_details.burst;
      }
      let num3 = 0;
      if (null != burst) {
        num3 = burst;
      }
      let vote;
      if (null != count_details) {
        vote = count_details.vote;
      }
      let num4 = 0;
      if (null != vote) {
        num4 = vote;
      }
      if (tmp6) {
        mapped.splice(c3, 1);
      }
      return self.set("reactions", mapped);
    }
  };
  items[8] = {
    key: "removeReactionsForEmoji",
    value(arg0) {
      let reactions;
      let set;
      let closure_0 = arg0;
      ({ reactions, set } = this);
      return set("reactions", reactions.filter((emoji) => !MessageRecord(outer2_2[8]).emojiEquals(emoji.emoji, closure_0)));
    }
  };
  items[9] = {
    key: "isSystemDM",
    value() {
      const author = this.author;
      return author.isSystemUser();
    }
  };
  items[10] = {
    key: "isCommandType",
    value() {
      let tmp = this.type === outer1_10.CHAT_INPUT_COMMAND;
      if (!tmp) {
        tmp = this.type === outer1_10.CONTEXT_MENU_COMMAND;
      }
      return tmp;
    }
  };
  items[11] = {
    key: "isPoll",
    value() {
      return null != this.poll;
    }
  };
  items[12] = {
    key: "isInteractionPlaceholder",
    value() {
      let isNonUserBotResult = null != this.interaction;
      if (isNonUserBotResult) {
        const author = this.author;
        isNonUserBotResult = author.isNonUserBot();
      }
      return isNonUserBotResult;
    }
  };
  items[13] = {
    key: "canDeleteOwnMessage",
    value(arg0) {
      const self = this;
      if (this.author.id === arg0) {
        return true;
      } else {
        const interactionMetadata2 = self.interactionMetadata;
        let prop;
        if (null != interactionMetadata2) {
          prop = interactionMetadata2.authorizing_integration_owners;
        }
        if (null == prop) {
          prop = {};
        }
        const interactionMetadata = self.interactionMetadata;
        let id;
        if (null != interactionMetadata) {
          id = interactionMetadata.user.id;
        }
        let tmp2 = id === arg0;
        if (tmp2) {
          const _Object = Object;
          tmp2 = 1 === Object.keys(prop).length;
        }
        if (tmp2) {
          tmp2 = MessageRecord(outer1_2[11]).ApplicationIntegrationType.USER_INSTALL in prop;
        }
        return tmp2;
      }
    }
  };
  items[14] = {
    key: "toJS",
    value() {
      const obj = {};
      const merged = Object.assign(this);
      const mentionGames = this.mentionGames;
      const items = [...mentionGames.values()];
      obj["mentionGames"] = items;
      obj["webkhook_id"] = this.webhookId;
      obj["edited_timestamp"] = this.editedTimestamp;
      obj["mention_everyone"] = this.mentionEveryone;
      return obj;
    }
  };
  items[15] = {
    key: "isFirstMessageInForumPost",
    value(isForumPost) {
      return this.id === this.channel_id && isForumPost.isForumPost();
    }
  };
  return importDefaultResult(MessageRecord, items);
})(tmp5);
let result = require("_possibleConstructorReturn").fileFinishedImporting("records/MessageRecord.tsx");

export default tmp8;
export const MinimalMessageRecord = tmp5;
export const ModeratorReport = importDefaultResultResult;
export const MessageSnapshotRecord = tmp7;
export const isMessageComponentsV2 = function isMessageComponentsV2(contentMessage) {
  return require(1360) /* hasFlag */.hasFlag(contentMessage.flags, IS_COMPONENTS_V2.IS_COMPONENTS_V2);
};
