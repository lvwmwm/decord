// Module ID: 1352
// Function ID: 16107
// Name: _callSuper
// Dependencies: []
// Exports: createChannelRecordFromInvite, createChannelRecordFromServer, getBasicAccessPermissions, isGuildChannelType, isGuildReadableType, isGuildSelectableChannelType, isGuildTextChannelType, isGuildVocalChannelOrVocalThreadType, isReadableType, isTextChannel

// Module 1352 (_callSuper)
let ChannelTypes;
let Permissions;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_4(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isGuildVocalChannelType(type) {
  let hasItem = "SELECTABLE" !== type;
  if (hasItem) {
    hasItem = set6.has(type);
  }
  return hasItem;
}
function _isPrivate(arg0) {
  return set8.has(arg0);
}
function _isMultiUserDM(arg0) {
  return set9.has(arg0);
}
function isVoiceChannel(arg0) {
  return set11.has(arg0);
}
function _isThread(arg0) {
  return set13.has(arg0);
}
function isVocalThreadType(type) {
  return set14.has(type);
}
function convertPermissionOverwrites(arr) {
  const obj = {};
  const arg1 = obj;
  if (null != arr) {
    const item = arr.forEach((id) => {
      const obj = { id: id.id, type: id.type, allow: callback(closure_3[8]).deserialize(id.allow) };
      const obj2 = callback(closure_3[8]);
      obj.deny = callback(closure_3[8]).deserialize(id.deny);
      obj[id.id] = obj;
    });
  }
  return obj;
}
function convertNicks(arg0) {
  if (null == arg0) {
    let reduced = {};
  } else {
    reduced = importDefault(dependencyMap[9]).reduce(arg0, (arg0, id) => {
      arg0[id.id] = id.nick;
      return arg0;
    }, {});
    const arr = importDefault(dependencyMap[9]);
  }
  return reduced;
}
function convertAvailableTags(arr) {
  if (null == arr) {
    let items = [];
  } else {
    items = arr.map((id) => {
      const obj = { id: id.id, name: id.name };
      let emoji_id;
      if (0 !== id.emoji_id) {
        emoji_id = id.emoji_id;
      }
      obj.emojiId = emoji_id;
      ({ emoji_name: obj.emojiName, moderated: obj.moderated, color: obj.color } = id);
      return obj;
    });
  }
  return items;
}
function convertIconEmoji(arg0) {
  let tmp;
  if (null != arg0) {
    const obj = {};
    ({ id: obj.id, name: obj.name } = arg0);
    tmp = obj;
  }
  return tmp;
}
function getAccessPermissions(type) {
  if (isGuildVocalChannelType(type)) {
    let VIEW_CHANNEL = closure_28;
  } else {
    VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
  }
  return VIEW_CHANNEL;
}
function transformNonUnderscoreProperties(topic) {
  if ("topic" in topic) {
    topic.topic_ = topic.topic;
    delete r0.topic;
  }
  if ("position" in topic) {
    topic.position_ = topic.position;
    delete r0.position;
  }
  if ("permissionOverwrites" in topic) {
    topic.permissionOverwrites_ = topic.permissionOverwrites;
    delete r0.permissionOverwrites;
  }
  if ("bitrate" in topic) {
    topic.bitrate_ = topic.bitrate;
    delete r0.bitrate;
  }
  if ("userLimit" in topic) {
    topic.userLimit_ = topic.userLimit;
    delete r0.userLimit;
  }
  if ("nsfw" in topic) {
    topic.nsfw_ = topic.nsfw;
    delete r0.nsfw;
  }
  if ("rateLimitPerUser" in topic) {
    topic.rateLimitPerUser_ = topic.rateLimitPerUser;
    delete r0.rateLimitPerUser;
  }
  if ("flags" in topic) {
    topic.flags_ = topic.flags;
    delete r0.flags;
  }
  return topic;
}
function castChannelRecord(type) {
  let GUILD_TEXT = type.type;
  if (null == GUILD_TEXT) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let tmp3 = closure_35[GUILD_TEXT];
  if (null == tmp3) {
    tmp3 = tmp34;
  }
  return arg1(dependencyMap[15]).dangerouslyCast(type, tmp3);
}
function createChannelRecord(type) {
  let GUILD_TEXT = type.type;
  if (null == GUILD_TEXT) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let tmp3 = closure_35[GUILD_TEXT];
  if (null == tmp3) {
    tmp3 = tmp34;
  }
  transformNonUnderscoreProperties(type);
  tmp3 = new tmp3(type);
  return tmp3;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
({ BITRATE_DEFAULT: closure_10, ChannelTypes } = tmp3);
const BasicPermissions = tmp3.BasicPermissions;
({ ChannelTypesSets: closure_13, Permissions } = tmp3);
const ChannelFlags = arg1(dependencyMap[7]).ChannelFlags;
const items = [, , , , , , , , , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], ANNOUNCEMENT_THREAD: arr[2], PUBLIC_THREAD: arr[3], PRIVATE_THREAD: arr[4], GUILD_DIRECTORY: arr[5], GUILD_FORUM: arr[6], GUILD_MEDIA: arr[7], DM: arr[8], GROUP_DM: arr[9] } = ChannelTypes);
const set = new Set(items);
const items1 = [, , , , , , , , , , , , , , ];
({ DM: arr2[0], GROUP_DM: arr2[1], GUILD_TEXT: arr2[2], GUILD_VOICE: arr2[3], GUILD_STAGE_VOICE: arr2[4], GUILD_CATEGORY: arr2[5], GUILD_ANNOUNCEMENT: arr2[6], GUILD_STORE: arr2[7], ANNOUNCEMENT_THREAD: arr2[8], PUBLIC_THREAD: arr2[9], PRIVATE_THREAD: arr2[10], GUILD_DIRECTORY: arr2[11], GUILD_FORUM: arr2[12], GUILD_MEDIA: arr2[13], MEDIA_THREAD: arr2[14] } = ChannelTypes);
const items2 = [, , , , ];
({ GUILD_TEXT: arr3[0], GUILD_ANNOUNCEMENT: arr3[1], ANNOUNCEMENT_THREAD: arr3[2], PUBLIC_THREAD: arr3[3], PRIVATE_THREAD: arr3[4] } = ChannelTypes);
const set2 = new Set(items2);
const items3 = [, , , , , ];
({ GUILD_TEXT: arr4[0], GUILD_ANNOUNCEMENT: arr4[1], GUILD_FORUM: arr4[2], GUILD_MEDIA: arr4[3], GUILD_VOICE: arr4[4], GUILD_STAGE_VOICE: arr4[5] } = ChannelTypes);
const set1 = new Set(items1);
const items4 = [, , , , , , , , , , , ];
({ GUILD_TEXT: arr5[0], GUILD_VOICE: arr5[1], GUILD_STAGE_VOICE: arr5[2], GUILD_CATEGORY: arr5[3], GUILD_ANNOUNCEMENT: arr5[4], GUILD_STORE: arr5[5], ANNOUNCEMENT_THREAD: arr5[6], PUBLIC_THREAD: arr5[7], PRIVATE_THREAD: arr5[8], GUILD_DIRECTORY: arr5[9], GUILD_FORUM: arr5[10], GUILD_MEDIA: arr5[11] } = ChannelTypes);
const set4 = new Set(items4);
const items5 = [, , , ];
({ GUILD_TEXT: arr6[0], GUILD_ANNOUNCEMENT: arr6[1], GUILD_FORUM: arr6[2], GUILD_MEDIA: arr6[3] } = ChannelTypes);
const set3 = new Set(items3);
const items6 = [, ];
({ GUILD_VOICE: arr7[0], GUILD_STAGE_VOICE: arr7[1] } = ChannelTypes);
const set6 = new Set(items6);
const items7 = [ChannelTypes.GUILD_STAGE_VOICE];
const set5 = new Set(items5);
const items8 = [, ];
({ DM: arr9[0], GROUP_DM: arr9[1] } = ChannelTypes);
const set8 = new Set(items8);
const items9 = [ChannelTypes.GROUP_DM];
const set9 = new Set(items9);
const items10 = [, , , , , , ];
({ DM: arr11[0], GROUP_DM: arr11[1], GUILD_TEXT: arr11[2], GUILD_ANNOUNCEMENT: arr11[3], ANNOUNCEMENT_THREAD: arr11[4], PUBLIC_THREAD: arr11[5], PRIVATE_THREAD: arr11[6] } = ChannelTypes);
const set10 = new Set(items10);
const items11 = [, , , , , ];
({ DM: arr12[0], GROUP_DM: arr12[1], GUILD_VOICE: arr12[2], GUILD_STAGE_VOICE: arr12[3], PUBLIC_THREAD: arr12[4], PRIVATE_THREAD: arr12[5] } = ChannelTypes);
const set11 = new Set(items11);
const items12 = [, , , , , , , , , ];
({ GUILD_TEXT: arr13[0], GUILD_ANNOUNCEMENT: arr13[1], ANNOUNCEMENT_THREAD: arr13[2], PUBLIC_THREAD: arr13[3], PRIVATE_THREAD: arr13[4], GUILD_DIRECTORY: arr13[5], GUILD_FORUM: arr13[6], GUILD_MEDIA: arr13[7], DM: arr13[8], GROUP_DM: arr13[9] } = ChannelTypes);
const set12 = new Set(items12);
const items13 = [, , , ];
({ ANNOUNCEMENT_THREAD: arr14[0], PUBLIC_THREAD: arr14[1], PRIVATE_THREAD: arr14[2], MEDIA_THREAD: arr14[3] } = ChannelTypes);
const set13 = new Set(items13);
const items14 = [, ];
({ PUBLIC_THREAD: arr15[0], PRIVATE_THREAD: arr15[1] } = ChannelTypes);
const set14 = new Set(items14);
const items15 = [, , , ];
({ GUILD_TEXT: arr16[0], GUILD_ANNOUNCEMENT: arr16[1], GUILD_FORUM: arr16[2], GUILD_MEDIA: arr16[3] } = ChannelTypes);
const set7 = new Set(items7);
const items16 = [, , , , , , , , , , , ];
({ DM: arr17[0], GROUP_DM: arr17[1], GUILD_TEXT: arr17[2], GUILD_ANNOUNCEMENT: arr17[3], ANNOUNCEMENT_THREAD: arr17[4], PUBLIC_THREAD: arr17[5], PRIVATE_THREAD: arr17[6], GUILD_FORUM: arr17[7], GUILD_MEDIA: arr17[8], GUILD_DIRECTORY: arr17[9], GUILD_VOICE: arr17[10], GUILD_STAGE_VOICE: arr17[11] } = ChannelTypes);
const set16 = new Set(items16);
const items17 = [, , , , , , , , , , ];
({ GUILD_TEXT: arr18[0], GUILD_ANNOUNCEMENT: arr18[1], GUILD_STORE: arr18[2], GUILD_VOICE: arr18[3], GUILD_STAGE_VOICE: arr18[4], ANNOUNCEMENT_THREAD: arr18[5], PUBLIC_THREAD: arr18[6], PRIVATE_THREAD: arr18[7], GUILD_DIRECTORY: arr18[8], GUILD_FORUM: arr18[9], GUILD_MEDIA: arr18[10] } = ChannelTypes);
const set15 = new Set(items15);
const items18 = [, , , , , , , , ];
({ GUILD_ANNOUNCEMENT: arr19[0], GUILD_CATEGORY: arr19[1], GUILD_STORE: arr19[2], GUILD_TEXT: arr19[3], GUILD_VOICE: arr19[4], GUILD_STAGE_VOICE: arr19[5], GUILD_DIRECTORY: arr19[6], GUILD_FORUM: arr19[7], GUILD_MEDIA: arr19[8] } = ChannelTypes);
const set17 = new Set(items17);
const items19 = [, ];
({ GUILD_TEXT: arr20[0], GUILD_ANNOUNCEMENT: arr20[1] } = ChannelTypes);
const set18 = new Set(items18);
const items20 = [, , , ];
({ GUILD_TEXT: arr21[0], GUILD_ANNOUNCEMENT: arr21[1], GUILD_FORUM: arr21[2], GUILD_MEDIA: arr21[3] } = ChannelTypes);
const set19 = new Set(items19);
const items21 = [, , , , , ];
({ GUILD_TEXT: arr22[0], GUILD_ANNOUNCEMENT: arr22[1], GUILD_FORUM: arr22[2], GUILD_MEDIA: arr22[3], GUILD_VOICE: arr22[4], GUILD_STAGE_VOICE: arr22[5] } = ChannelTypes);
const set20 = new Set(items20);
const items22 = [, , , , ];
({ GUILD_ANNOUNCEMENT: arr23[0], GUILD_TEXT: arr23[1], GUILD_FORUM: arr23[2], GUILD_MEDIA: arr23[3], ANNOUNCEMENT_THREAD: arr23[4] } = ChannelTypes);
const set21 = new Set(items21);
const items23 = [, , , , , , , ];
({ GUILD_TEXT: arr24[0], GUILD_FORUM: arr24[1], GUILD_MEDIA: arr24[2], ANNOUNCEMENT_THREAD: arr24[3], PUBLIC_THREAD: arr24[4], PRIVATE_THREAD: arr24[5], GUILD_VOICE: arr24[6], GUILD_STAGE_VOICE: arr24[7] } = ChannelTypes);
const set22 = new Set(items22);
const items24 = [, , , ];
({ PUBLIC_THREAD: arr25[0], PRIVATE_THREAD: arr25[1], GUILD_VOICE: arr25[2], GUILD_STAGE_VOICE: arr25[3] } = ChannelTypes);
const set23 = new Set(items23);
const items25 = [, , ];
({ GUILD_TEXT: arr26[0], GUILD_FORUM: arr26[1], GUILD_MEDIA: arr26[2] } = ChannelTypes);
const set24 = new Set(items24);
const items26 = [, , , ];
({ GUILD_TEXT: arr27[0], GUILD_CATEGORY: arr27[1], GUILD_FORUM: arr27[2], GUILD_ANNOUNCEMENT: arr27[3] } = ChannelTypes);
const set25 = new Set(items25);
const items27 = [, , , ];
({ GUILD_TEXT: arr28[0], GUILD_ANNOUNCEMENT: arr28[1], GUILD_FORUM: arr28[2], GUILD_VOICE: arr28[3] } = ChannelTypes);
const set26 = new Set(items26);
const set27 = new Set(items27);
let closure_28 = importAll(dependencyMap[8]).combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
let closure_29 = BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL;
class ChannelRecordProperties {
  constructor(arg0) {
    self = this;
    tmp = closure_8(this, ChannelRecordProperties);
    ({ id: this.id, type } = global);
    if (null == type) {
      tmp2 = ChannelTypes;
      type = ChannelTypes.GUILD_TEXT;
    }
    self.type = type;
    name = global.name;
    str = "";
    if (null != name) {
      str = name;
    }
    self.name = str;
    guild_id = global.guild_id;
    tmp3 = null;
    if (null != guild_id) {
      tmp3 = guild_id;
    }
    self.guild_id = tmp3;
    return;
  }
}
const importDefaultResultResult = importDefaultResult(ChannelRecordProperties);
let closure_30 = Object.freeze({});
const tmp33 = (importDefaultResultResult) => {
  class ChannelRecordBase {
    constructor() {
      tmp = closure_8(this, ChannelRecordBase);
      return closure_36(this, ChannelRecordBase, arguments);
    }
  }
  const arg1 = ChannelRecordBase;
  callback2(ChannelRecordBase, importDefaultResultResult);
  let obj = {
    key: "permissionOverwrites",
    get() {
      let permissionOverwrites_ = this.permissionOverwrites_;
      if (null == permissionOverwrites_) {
        permissionOverwrites_ = closure_30;
      }
      return permissionOverwrites_;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "topic",
    get() {
      const topic_ = this.topic_;
      let str = "";
      if (null != topic_) {
        str = topic_;
      }
      return str;
    }
  };
  items[1] = obj;
  obj = {
    key: "position",
    get() {
      const position_ = this.position_;
      let num = 0;
      if (null != position_) {
        num = position_;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "bitrate",
    get() {
      let bitrate_ = this.bitrate_;
      if (null == bitrate_) {
        bitrate_ = closure_10;
      }
      return bitrate_;
    }
  };
  items[4] = {
    key: "userLimit",
    get() {
      const userLimit_ = this.userLimit_;
      let num = 0;
      if (null != userLimit_) {
        num = userLimit_;
      }
      return num;
    }
  };
  items[5] = {
    key: "nsfw",
    get() {
      const nsfw_ = this.nsfw_;
      return null != nsfw_ && nsfw_;
    }
  };
  items[6] = {
    key: "rateLimitPerUser",
    get() {
      const rateLimitPerUser_ = this.rateLimitPerUser_;
      let num = 0;
      if (null != rateLimitPerUser_) {
        num = rateLimitPerUser_;
      }
      return num;
    }
  };
  items[7] = {
    key: "flags",
    get() {
      const flags_ = this.flags_;
      let num = 0;
      if (null != flags_) {
        num = flags_;
      }
      return num;
    }
  };
  items[8] = {
    key: "toJS",
    value() {
      const merged = Object.assign(this);
      return {};
    }
  };
  items[9] = {
    key: "set",
    value(arg0, arg1) {
      const obj = { [arg0]: arg1 };
      callback9(obj);
      return this.merge(obj);
    }
  };
  items[10] = {
    key: "merge",
    value(arg0) {
      const self = this;
      callback9(arg0);
      let toJSResult = null;
      let tmp4 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp4 = toJSResult;
        while (keys[tmp] !== undefined) {
          let tmp13 = tmp7;
          let tmp8 = arg0.hasOwnProperty(tmp7) && self[tmp7] !== arg0[tmp7];
          if (!tmp8) {
            continue;
          } else {
            toJSResult = tmp6;
            if (null == tmp6) {
              toJSResult = self.toJS();
            }
            toJSResult[tmp7] = arg0[tmp7];
            // continue
          }
          continue;
        }
      }
      let constructor = self;
      if (null != tmp4) {
        constructor = self.constructor;
        const prototype = constructor.prototype;
        constructor = new constructor(tmp4);
      }
      return constructor;
    }
  };
  items[11] = {
    key: "computeLurkerPermissionsAllowList",
    value() {
      if (this.isGuildStageVoice()) {
        if (_public.isPublic(this.id)) {
          return ChannelRecordBase(closure_3[10]).LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST;
        }
      }
    }
  };
  items[12] = {
    key: "isNSFW",
    value() {
      return this.nsfw;
    }
  };
  items[13] = {
    key: "isManaged",
    value() {
      return null != this.application_id;
    }
  };
  items[14] = {
    key: "isPrivate",
    value() {
      return callback4(this.type);
    }
  };
  items[15] = {
    key: "isGroupDM",
    value() {
      return this.type === constants.GROUP_DM;
    }
  };
  items[16] = {
    key: "isMultiUserDM",
    value() {
      return callback5(this.type);
    }
  };
  items[17] = {
    key: "isDM",
    value() {
      return this.type === constants.DM;
    }
  };
  items[18] = {
    key: "isSystemDM",
    value() {
      return false;
    }
  };
  items[19] = {
    key: "isArchivedThread",
    value() {
      let isThreadResult = this.isThread();
      if (isThreadResult) {
        const threadMetadata = this.threadMetadata;
        let archived;
        if (null != threadMetadata) {
          archived = threadMetadata.archived;
        }
        isThreadResult = true === archived;
      }
      return isThreadResult;
    }
  };
  items[20] = {
    key: "isLockedThread",
    value() {
      let isThreadResult = this.isThread();
      if (isThreadResult) {
        const threadMetadata = this.threadMetadata;
        let locked;
        if (null != threadMetadata) {
          locked = threadMetadata.locked;
        }
        isThreadResult = true === locked;
      }
      return isThreadResult;
    }
  };
  items[21] = {
    key: "isScheduledForDeletion",
    value() {
      return this.hasFlag(constants3.IS_SCHEDULED_FOR_DELETION);
    }
  };
  items[22] = {
    key: "isArchivedLockedThread",
    value() {
      const self = this;
      let hasItem = set.has(this.type);
      if (hasItem) {
        const threadMetadata = self.threadMetadata;
        let archived;
        if (null != threadMetadata) {
          archived = threadMetadata.archived;
        }
        hasItem = true === archived;
      }
      if (hasItem) {
        const threadMetadata2 = self.threadMetadata;
        let locked;
        if (null != threadMetadata2) {
          locked = threadMetadata2.locked;
        }
        hasItem = true === locked;
      }
      return hasItem;
    }
  };
  items[23] = {
    key: "isForumPost",
    value() {
      const self = this;
      let hasItem = this.type === constants.PUBLIC_THREAD;
      if (hasItem) {
        hasItem = null != self.parentChannelThreadType;
      }
      if (hasItem) {
        const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
        hasItem = GUILD_THREADS_ONLY.has(self.parentChannelThreadType);
      }
      return hasItem;
    }
  };
  items[24] = {
    key: "isMediaThread",
    value() {
      return this.type === constants.MEDIA_THREAD;
    }
  };
  items[25] = {
    key: "isRingable",
    value() {
      const CALLABLE = constants2.CALLABLE;
      let hasItem = CALLABLE.has(this.type);
      if (!hasItem) {
        hasItem = this.type === constants.GUILD_VOICE;
      }
      return hasItem;
    }
  };
  items[26] = {
    key: "isCategory",
    value() {
      return this.type === constants.GUILD_CATEGORY;
    }
  };
  items[27] = {
    key: "isVocal",
    value() {
      return callback6(this.type);
    }
  };
  items[28] = {
    key: "isGuildVocal",
    value() {
      return callback3(this.type);
    }
  };
  items[29] = {
    key: "isGuildVocalOrThread",
    value() {
      const self = this;
      return this.isGuildVocal() || self.isVocalThread();
    }
  };
  items[30] = {
    key: "isGuildVoice",
    value() {
      return this.type === constants.GUILD_VOICE;
    }
  };
  items[31] = {
    key: "isGuildVoiceOrThread",
    value() {
      const self = this;
      return this.isGuildVoice() || self.isVocalThread();
    }
  };
  items[32] = {
    key: "isGuildStageVoice",
    value() {
      return this.type === constants.GUILD_STAGE_VOICE;
    }
  };
  items[33] = {
    key: "isListenModeCapable",
    value() {
      return this.isGuildStageVoice();
    }
  };
  items[34] = {
    key: "isThread",
    value() {
      return callback7(this.type);
    }
  };
  items[35] = {
    key: "isAnnouncementThread",
    value() {
      return this.type === constants.ANNOUNCEMENT_THREAD;
    }
  };
  items[36] = {
    key: "isVocalThread",
    value() {
      let tmp = this.type === constants.PUBLIC_THREAD;
      if (!tmp) {
        tmp = this.type === constants.PRIVATE_THREAD;
      }
      return tmp;
    }
  };
  items[37] = {
    key: "isActiveThread",
    value() {
      let isThreadResult = this.isThread();
      if (isThreadResult) {
        const threadMetadata = this.threadMetadata;
        let archived;
        if (null != threadMetadata) {
          archived = threadMetadata.archived;
        }
        isThreadResult = true !== archived;
      }
      return isThreadResult;
    }
  };
  items[38] = {
    key: "isDirectory",
    value() {
      return this.type === constants.GUILD_DIRECTORY;
    }
  };
  items[39] = {
    key: "isForumLikeChannel",
    value() {
      const self = this;
      return this.isForumChannel() || self.isMediaChannel();
    }
  };
  items[40] = {
    key: "isForumChannel",
    value() {
      return this.type === constants.GUILD_FORUM;
    }
  };
  items[41] = {
    key: "isMediaChannel",
    value() {
      return this.type === constants.GUILD_MEDIA;
    }
  };
  items[42] = {
    key: "isMediaPost",
    value() {
      let tmp = this.type === constants.PUBLIC_THREAD;
      if (tmp) {
        tmp = this.parentChannelThreadType === constants.GUILD_MEDIA;
      }
      return tmp;
    }
  };
  items[43] = {
    key: "isRoleSubscriptionTemplatePreviewChannel",
    value() {
      return this.hasFlag(constants3.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
  };
  items[44] = {
    key: "isOwner",
    value(arg0) {
      return this.ownerId === arg0;
    }
  };
  items[45] = {
    key: "isObfuscated",
    value() {
      return this.hasFlag(constants3.OBFUSCATED);
    }
  };
  items[46] = {
    key: "getGuildId",
    value() {
      return this.guild_id;
    }
  };
  items[47] = {
    key: "getApplicationId",
    value() {
      return this.application_id;
    }
  };
  items[48] = {
    key: "getDefaultSortOrder",
    value() {
      if (this.isGameInvitesChannel()) {
        let LATEST_ACTIVITY = ChannelRecordBase(closure_3[11]).ThreadSortOrder.CREATION_DATE;
      } else {
        LATEST_ACTIVITY = this.defaultSortOrder;
        if (null == LATEST_ACTIVITY) {
          LATEST_ACTIVITY = ChannelRecordBase(closure_3[11]).ThreadSortOrder.LATEST_ACTIVITY;
        }
      }
      return LATEST_ACTIVITY;
    }
  };
  items[49] = {
    key: "getDefaultLayout",
    value() {
      const self = this;
      if (!this.isMediaChannel()) {
        if (!self.isGameInvitesChannel()) {
          if (null != self.defaultForumLayout) {
            if (self.defaultForumLayout !== ChannelRecordBase(closure_3[12]).ForumLayout.DEFAULT) {
              let GRID = self.defaultForumLayout;
            }
          }
          GRID = ChannelRecordBase(closure_3[12]).ForumLayout.LIST;
        }
        return GRID;
      }
      GRID = ChannelRecordBase(closure_3[12]).ForumLayout.GRID;
    }
  };
  items[50] = {
    key: "getDefaultTagSetting",
    value() {
      let MATCH_SOME = this.defaultTagSetting;
      if (null == MATCH_SOME) {
        MATCH_SOME = ChannelRecordBase(closure_3[13]).ThreadSearchTagSetting.MATCH_SOME;
      }
      return MATCH_SOME;
    }
  };
  items[51] = {
    key: "isModeratorReportChannel",
    value() {
      return this.hasFlag(constants3.IS_MODERATOR_REPORT_CHANNEL);
    }
  };
  items[52] = {
    key: "isSpoilerChannel",
    value() {
      return this.hasFlag(constants3.IS_SPOILER_CHANNEL);
    }
  };
  items[53] = {
    key: "isGameInvitesChannel",
    value() {
      return this.hasFlag(constants3.IS_GAME_INVITES_CHANNEL);
    }
  };
  items[54] = {
    key: "accessPermissions",
    get() {
      return callback8(this.type);
    }
  };
  items[55] = {
    key: "hasFlag",
    value(arg0) {
      return ChannelRecordBase(closure_3[14]).hasFlag(this.flags, arg0);
    }
  };
  items[56] = {
    key: "isHDStreamSplashed",
    get() {
      let tmp2 = null != this.hdStreamingUntil;
      if (tmp2) {
        const _Date = Date;
        const date = new Date(tmp.hdStreamingUntil);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date > date1;
      }
      return tmp2;
    }
  };
  return importDefaultResult(ChannelRecordBase, items);
}(importDefaultResultResult);
const tmp34 = (arg0) => {
  class UnknownChannelRecord {
    constructor(arg0) {
      tmp = closure_8(this, UnknownChannelRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_36(this, UnknownChannelRecord, items);
      ({ application_id: tmp2.application_id, appliedTags: tmp2.appliedTags, availableTags: tmp2.availableTags, bitrate_: tmp2.bitrate_, defaultAutoArchiveDuration: tmp2.defaultAutoArchiveDuration, defaultForumLayout: tmp2.defaultForumLayout, defaultReactionEmoji: tmp2.defaultReactionEmoji, defaultSortOrder: tmp2.defaultSortOrder, defaultTagSetting: tmp2.defaultTagSetting, defaultThreadRateLimitPerUser: tmp2.defaultThreadRateLimitPerUser, flags_: tmp2.flags_, icon: tmp2.icon, iconEmoji: tmp2.iconEmoji, isMessageRequest: tmp2.isMessageRequest, isMessageRequestTimestamp: tmp2.isMessageRequestTimestamp, isSpam: tmp2.isSpam, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, member: tmp2.member, memberCount: tmp2.memberCount, memberIdsPreview: tmp2.memberIdsPreview, memberListId: tmp2.memberListId, messageCount: tmp2.messageCount, nicks: tmp2.nicks, nsfw_: tmp2.nsfw_, originChannelId: tmp2.originChannelId, ownerId: tmp2.ownerId, parent_id: tmp2.parent_id, parentChannelThreadType: tmp2.parentChannelThreadType, permissionOverwrites_: tmp2.permissionOverwrites_, position_: tmp2.position_, rateLimitPerUser_: tmp2.rateLimitPerUser_, rawRecipients: tmp2.rawRecipients, recipients: tmp2.recipients, recipientFlags: tmp2.recipientFlags, rtcRegion: tmp2.rtcRegion, safetyWarnings: tmp2.safetyWarnings, blockedUserWarningDismissed: tmp2.blockedUserWarningDismissed, template: tmp2.template, themeColor: tmp2.themeColor, threadMetadata: tmp2.threadMetadata, topic_: tmp2.topic_, userLimit_: tmp2.userLimit_, version: tmp2.version, videoQualityMode: tmp2.videoQualityMode, linkedLobby: tmp2.linkedLobby, hdStreamingUntil: tmp2.hdStreamingUntil, hdStreamingBuyerId: tmp2.hdStreamingBuyerId, voiceHangout: tmp2.voiceHangout } = arg0);
      return tmp2;
    }
  }
  const arg1 = UnknownChannelRecord;
  callback2(UnknownChannelRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(application_id) {
        let name;
        let guild_id = arg1;
        let obj = { application_id: application_id.application_id, appliedTags: application_id.applied_tags };
        let tmp;
        if (null != application_id.available_tags) {
          tmp = callback5(application_id.available_tags);
        }
        obj.availableTags = tmp;
        ({ bitrate: obj.bitrate_, default_auto_archive_duration: obj.defaultAutoArchiveDuration, default_forum_layout: obj.defaultForumLayout } = application_id);
        let tmp3;
        if (null != application_id.default_reaction_emoji) {
          obj = {};
          let emoji_id;
          if (0 !== application_id.default_reaction_emoji.emoji_id) {
            emoji_id = application_id.default_reaction_emoji.emoji_id;
          }
          obj.emojiId = emoji_id;
          obj.emojiName = application_id.default_reaction_emoji.emoji_name;
          tmp3 = obj;
        }
        obj.defaultReactionEmoji = tmp3;
        ({ default_sort_order: obj.defaultSortOrder, default_tag_setting: obj.defaultTagSetting, default_thread_rate_limit_per_user: obj.defaultThreadRateLimitPerUser, flags: obj.flags_ } = application_id);
        if (null == guild_id) {
          guild_id = application_id.guild_id;
        }
        let tmp5 = null;
        if (null != guild_id) {
          tmp5 = guild_id;
        }
        obj.guild_id = tmp5;
        obj.icon = application_id.icon;
        obj.iconEmoji = callback6(application_id.icon_emoji);
        ({ id: obj.id, is_message_request: obj.isMessageRequest, is_message_request_timestamp: obj.isMessageRequestTimestamp, is_spam: obj.isSpam, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp } = application_id);
        let tmp6;
        if (null != application_id.member) {
          obj = { flags: application_id.member.flags, muted: application_id.member.muted, muteConfig: application_id.member.mute_config, joinTimestamp: application_id.member.join_timestamp };
          tmp6 = obj;
        }
        obj.member = tmp6;
        ({ member_count: obj.memberCount, member_ids_preview: obj.memberIdsPreview, member_list_id: obj.memberListId, message_count: obj.messageCount, name } = application_id);
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        obj.nicks = callback4(application_id.nicks);
        ({ nsfw: obj.nsfw_, origin_channel_id: obj.originChannelId, owner_id: obj.ownerId, parent_id: obj.parent_id } = application_id);
        obj.parentChannelThreadType = undefined;
        obj.permissionOverwrites_ = callback3(application_id.permission_overwrites);
        ({ position: obj.position_, rate_limit_per_user: obj.rateLimitPerUser_ } = application_id);
        obj.rawRecipients = null != application_id.recipients ? application_id.recipients : [];
        if (null != application_id.recipients) {
          const recipients = application_id.recipients;
          let mapped = recipients.map((id) => id.id);
        } else {
          mapped = [];
        }
        obj.recipients = mapped;
        ({ recipient_flags: obj.recipientFlags, rtc_region: obj.rtcRegion, safety_warnings: obj.safetyWarnings, blocked_user_warning_dismissed: obj.blockedUserWarningDismissed, template: obj.template, theme_color: obj.themeColor } = application_id);
        let tmp7;
        if (null != application_id.thread_metadata) {
          const obj1 = { archived: application_id.thread_metadata.archived, autoArchiveDuration: application_id.thread_metadata.auto_archive_duration, archiveTimestamp: application_id.thread_metadata.archive_timestamp, createTimestamp: application_id.thread_metadata.create_timestamp, locked: application_id.thread_metadata.locked };
          const invitable = application_id.thread_metadata.invitable;
          obj1.invitable = null == invitable || invitable;
          tmp7 = obj1;
        }
        obj.threadMetadata = tmp7;
        ({ topic: obj.topic_, total_message_sent: obj.totalMessageSent } = application_id);
        if (null != application_id.type) {
          let UNKNOWN = application_id.type;
        } else {
          UNKNOWN = constants.UNKNOWN;
        }
        obj.type = UNKNOWN;
        ({ user_limit: obj.userLimit_, version: obj.version, video_quality_mode: obj.videoQualityMode, linked_lobby: obj.linkedLobby, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, voice_hangout: obj.voiceHangout } = application_id);
        return UnknownChannelRecord(closure_3[15]).dangerouslyCast(obj, UnknownChannelRecord);
      }
    }
  ];
  return importDefaultResult(UnknownChannelRecord, null, items);
}(tmp33);
const tmp35 = (arg0) => {
  class GuildVocalChannelRecord {
    constructor(arg0) {
      tmp = closure_8(this, GuildVocalChannelRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_36(this, GuildVocalChannelRecord, items);
      ({ application_id: tmp2.application_id, bitrate_: tmp2.bitrate_, flags_: tmp2.flags_, iconEmoji: tmp2.iconEmoji, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, memberListId: tmp2.memberListId, nsfw_: tmp2.nsfw_, originChannelId: tmp2.originChannelId, parent_id: tmp2.parent_id, permissionOverwrites_ } = arg0);
      if (null == permissionOverwrites_) {
        permissionOverwrites_ = {};
      }
      tmp2.permissionOverwrites_ = permissionOverwrites_;
      ({ position_: tmp2.position_, rateLimitPerUser_: tmp2.rateLimitPerUser_, rtcRegion: tmp2.rtcRegion, themeColor: tmp2.themeColor, topic_: tmp2.topic_, userLimit_: tmp2.userLimit_, version: tmp2.version, videoQualityMode: tmp2.videoQualityMode, hdStreamingUntil: tmp2.hdStreamingUntil, hdStreamingBuyerId: tmp2.hdStreamingBuyerId, voiceHangout: tmp2.voiceHangout } = arg0);
      return tmp2;
    }
  }
  const arg1 = GuildVocalChannelRecord;
  callback2(GuildVocalChannelRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(application_id) {
        let name;
        let rate_limit_per_user;
        let guild_id = arg1;
        const obj = { application_id: application_id.application_id, bitrate_: application_id.bitrate, flags_: application_id.flags };
        if (null == arg1) {
          guild_id = application_id.guild_id;
        }
        let tmp2 = null;
        if (null != guild_id) {
          tmp2 = guild_id;
        }
        obj.guild_id = tmp2;
        obj.iconEmoji = callback4(application_id.icon_emoji);
        ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = application_id);
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        const nsfw = application_id.nsfw;
        obj.nsfw_ = null != nsfw && nsfw;
        ({ origin_channel_id: obj.originChannelId, parent_id: obj.parent_id } = application_id);
        obj.permissionOverwrites_ = callback3(application_id.permission_overwrites);
        ({ position: obj.position_, rate_limit_per_user } = application_id);
        let num = 0;
        if (null != rate_limit_per_user) {
          num = rate_limit_per_user;
        }
        obj.rateLimitPerUser_ = num;
        ({ rtc_region: obj.rtcRegion, theme_color: obj.themeColor, topic: obj.topic_ } = application_id);
        if (null != application_id.type) {
          let GUILD_VOICE = application_id.type;
        } else {
          GUILD_VOICE = constants.GUILD_VOICE;
        }
        obj.type = GUILD_VOICE;
        ({ user_limit: obj.userLimit_, version: obj.version, video_quality_mode: obj.videoQualityMode, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, voice_hangout: obj.voiceHangout } = application_id);
        return closure_50(obj);
      }
    }
  ];
  return importDefaultResult(GuildVocalChannelRecord, null, items);
}(tmp33);
const tmp36 = (arg0) => {
  class GuildTextualChannelRecord {
    constructor(arg0) {
      tmp = closure_8(this, GuildTextualChannelRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_36(this, GuildTextualChannelRecord, items);
      ({ application_id: tmp2.application_id, defaultAutoArchiveDuration: tmp2.defaultAutoArchiveDuration, defaultThreadRateLimitPerUser: tmp2.defaultThreadRateLimitPerUser, flags_: tmp2.flags_, iconEmoji: tmp2.iconEmoji, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, memberListId: tmp2.memberListId, nsfw_: tmp2.nsfw_, parent_id: tmp2.parent_id, permissionOverwrites_ } = arg0);
      if (null == permissionOverwrites_) {
        permissionOverwrites_ = {};
      }
      tmp2.permissionOverwrites_ = permissionOverwrites_;
      ({ position_: tmp2.position_, rateLimitPerUser_: tmp2.rateLimitPerUser_, themeColor: tmp2.themeColor, topic_: tmp2.topic_, version: tmp2.version, linkedLobby: tmp2.linkedLobby, hdStreamingBuyerId: tmp2.hdStreamingBuyerId, hdStreamingUntil: tmp2.hdStreamingUntil } = arg0);
      return tmp2;
    }
  }
  const arg1 = GuildTextualChannelRecord;
  callback2(GuildTextualChannelRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(application_id) {
        let name;
        let rate_limit_per_user;
        let guild_id = arg1;
        const obj = { application_id: application_id.application_id, defaultAutoArchiveDuration: application_id.default_auto_archive_duration, defaultThreadRateLimitPerUser: application_id.default_thread_rate_limit_per_user, flags_: application_id.flags };
        if (null == arg1) {
          guild_id = application_id.guild_id;
        }
        let tmp2 = null;
        if (null != guild_id) {
          tmp2 = guild_id;
        }
        obj.guild_id = tmp2;
        obj.iconEmoji = callback4(application_id.icon_emoji);
        ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = application_id);
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        const nsfw = application_id.nsfw;
        obj.nsfw_ = null != nsfw && nsfw;
        obj.parent_id = application_id.parent_id;
        obj.permissionOverwrites_ = callback3(application_id.permission_overwrites);
        ({ position: obj.position_, rate_limit_per_user } = application_id);
        let num = 0;
        if (null != rate_limit_per_user) {
          num = rate_limit_per_user;
        }
        obj.rateLimitPerUser_ = num;
        ({ theme_color: obj.themeColor, topic: obj.topic_ } = application_id);
        if (null != application_id.type) {
          let GUILD_TEXT = application_id.type;
        } else {
          GUILD_TEXT = constants.GUILD_TEXT;
        }
        obj.type = GUILD_TEXT;
        ({ linked_lobby: obj.linkedLobby, hd_streaming_until: obj.hdStreamingUntil, hd_streaming_buyer_id: obj.hdStreamingBuyerId, version: obj.version } = application_id);
        return closure_50(obj);
      }
    }
  ];
  return importDefaultResult(GuildTextualChannelRecord, null, items);
}(tmp33);
const tmp37 = (arg0) => {
  class GuildAnnouncementChannelRecord {
    constructor() {
      tmp = closure_8(this, GuildAnnouncementChannelRecord);
      return closure_36(this, GuildAnnouncementChannelRecord, arguments);
    }
  }
  const arg1 = GuildAnnouncementChannelRecord;
  callback2(GuildAnnouncementChannelRecord, arg0);
  return importDefaultResult(GuildAnnouncementChannelRecord);
}(tmp36);
const tmp38 = (arg0) => {
  class GuildCategoryChannelRecord {
    constructor() {
      tmp = closure_8(this, GuildCategoryChannelRecord);
      return closure_36(this, GuildCategoryChannelRecord, arguments);
    }
  }
  const arg1 = GuildCategoryChannelRecord;
  callback2(GuildCategoryChannelRecord, arg0);
  return importDefaultResult(GuildCategoryChannelRecord);
}(tmp36);
const tmp39 = (arg0) => {
  class GuildDirectoryChannelRecord {
    constructor() {
      tmp = closure_8(this, GuildDirectoryChannelRecord);
      return closure_36(this, GuildDirectoryChannelRecord, arguments);
    }
  }
  const arg1 = GuildDirectoryChannelRecord;
  callback2(GuildDirectoryChannelRecord, arg0);
  return importDefaultResult(GuildDirectoryChannelRecord);
}(tmp36);
const tmp40 = (arg0) => {
  class GuildStageVoiceChannelRecord {
    constructor() {
      tmp = closure_8(this, GuildStageVoiceChannelRecord);
      return closure_36(this, GuildStageVoiceChannelRecord, arguments);
    }
  }
  const arg1 = GuildStageVoiceChannelRecord;
  callback2(GuildStageVoiceChannelRecord, arg0);
  return importDefaultResult(GuildStageVoiceChannelRecord);
}(tmp35);
const tmp41 = (arg0) => {
  class GuildStoreChannelRecord {
    constructor() {
      tmp = closure_8(this, GuildStoreChannelRecord);
      return closure_36(this, GuildStoreChannelRecord, arguments);
    }
  }
  const arg1 = GuildStoreChannelRecord;
  callback2(GuildStoreChannelRecord, arg0);
  return importDefaultResult(GuildStoreChannelRecord);
}(tmp36);
const tmp42 = (arg0) => {
  class GuildTextChannelRecord {
    constructor() {
      tmp = closure_8(this, GuildTextChannelRecord);
      return closure_36(this, GuildTextChannelRecord, arguments);
    }
  }
  const arg1 = GuildTextChannelRecord;
  callback2(GuildTextChannelRecord, arg0);
  return importDefaultResult(GuildTextChannelRecord);
}(tmp36);
const tmp43 = (arg0) => {
  class GuildVoiceChannelRecord {
    constructor() {
      tmp = closure_8(this, GuildVoiceChannelRecord);
      return closure_36(this, GuildVoiceChannelRecord, arguments);
    }
  }
  const arg1 = GuildVoiceChannelRecord;
  callback2(GuildVoiceChannelRecord, arg0);
  return importDefaultResult(GuildVoiceChannelRecord);
}(tmp35);
const tmp44 = (arg0) => {
  class ForumChannelRecord {
    constructor(arg0) {
      tmp = closure_8(this, ForumChannelRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_36(this, ForumChannelRecord, items);
      availableTags = arg0.availableTags;
      if (null == availableTags) {
        availableTags = [];
      }
      tmp2.availableTags = availableTags;
      ({ defaultAutoArchiveDuration: tmp2.defaultAutoArchiveDuration, defaultForumLayout: tmp2.defaultForumLayout, defaultReactionEmoji: tmp2.defaultReactionEmoji, defaultSortOrder: tmp2.defaultSortOrder, defaultTagSetting: tmp2.defaultTagSetting, defaultThreadRateLimitPerUser: tmp2.defaultThreadRateLimitPerUser, flags_: tmp2.flags_, iconEmoji: tmp2.iconEmoji, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, memberListId: tmp2.memberListId, nsfw_: tmp2.nsfw_, parent_id: tmp2.parent_id, permissionOverwrites_ } = arg0);
      if (null == permissionOverwrites_) {
        permissionOverwrites_ = {};
      }
      tmp2.permissionOverwrites_ = permissionOverwrites_;
      ({ position_: tmp2.position_, rateLimitPerUser_: tmp2.rateLimitPerUser_, template: tmp2.template, themeColor: tmp2.themeColor, topic_: tmp2.topic_, version: tmp2.version } = arg0);
      return tmp2;
    }
  }
  const arg1 = ForumChannelRecord;
  callback2(ForumChannelRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(available_tags) {
        let name;
        let rate_limit_per_user;
        let guild_id = arg1;
        let obj = {};
        if (null != available_tags.available_tags) {
          let items = callback4(available_tags.available_tags);
        } else {
          items = [];
        }
        obj.availableTags = items;
        ({ default_auto_archive_duration: obj.defaultAutoArchiveDuration, default_forum_layout: obj.defaultForumLayout } = available_tags);
        let tmp2;
        if (null != available_tags.default_reaction_emoji) {
          obj = {};
          let emoji_id;
          if (0 !== available_tags.default_reaction_emoji.emoji_id) {
            emoji_id = available_tags.default_reaction_emoji.emoji_id;
          }
          obj.emojiId = emoji_id;
          obj.emojiName = available_tags.default_reaction_emoji.emoji_name;
          tmp2 = obj;
        }
        obj.defaultReactionEmoji = tmp2;
        ({ default_sort_order: obj.defaultSortOrder, default_tag_setting: obj.defaultTagSetting, default_thread_rate_limit_per_user: obj.defaultThreadRateLimitPerUser, flags: obj.flags_ } = available_tags);
        if (null == guild_id) {
          guild_id = available_tags.guild_id;
        }
        let tmp4 = null;
        if (null != guild_id) {
          tmp4 = guild_id;
        }
        obj.guild_id = tmp4;
        obj.iconEmoji = callback5(available_tags.icon_emoji);
        ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp, member_list_id: obj.memberListId, name } = available_tags);
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        const nsfw = available_tags.nsfw;
        obj.nsfw_ = null != nsfw && nsfw;
        obj.parent_id = available_tags.parent_id;
        obj.permissionOverwrites_ = callback3(available_tags.permission_overwrites);
        ({ position: obj.position_, rate_limit_per_user } = available_tags);
        let num2 = 0;
        if (null != rate_limit_per_user) {
          num2 = rate_limit_per_user;
        }
        obj.rateLimitPerUser_ = num2;
        ({ template: obj.template, theme_color: obj.themeColor, topic: obj.topic_ } = available_tags);
        if (null != available_tags.type) {
          let GUILD_TEXT = available_tags.type;
        } else {
          GUILD_TEXT = constants.GUILD_TEXT;
        }
        obj.type = GUILD_TEXT;
        obj.version = available_tags.version;
        return ForumChannelRecord(closure_3[15]).dangerouslyCast(obj, ForumChannelRecord);
      }
    }
  ];
  return importDefaultResult(ForumChannelRecord, null, items);
}(tmp33);
let tmp45 = () => {
  class IdAsNumberCache {
    constructor() {
      num = arg0;
      self = this;
      if (arg0 === undefined) {
        num = 100;
      }
      tmp = closure_8(self, IdAsNumberCache);
      tmp2 = closure_1(closure_3[16]);
      tmp2 = new tmp2(num);
      self.cache = tmp2;
      return;
    }
  }
  const arg1 = IdAsNumberCache;
  const items = [
    {
      key: "getOrCompute",
      value(replaced) {
        const cache = this.cache;
        const value = cache.get(replaced);
        if (null != value) {
          return value;
        } else {
          const _parseInt = parseInt;
          const parsed = parseInt(replaced, 10);
          const cache2 = this.cache;
          const result = cache2.set(replaced, parsed);
          return parsed;
        }
      }
    }
  ];
  return importDefaultResult(IdAsNumberCache, items);
}();
tmp45 = new tmp45();
tmp45 = new tmp45();
const tmp48 = (arg0) => {
  class PrivateChannelRecord {
    constructor(arg0) {
      tmp = closure_8(this, PrivateChannelRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_36(this, PrivateChannelRecord, items);
      ({ application_id: tmp2.application_id, flags_: tmp2.flags_, icon: tmp2.icon, isMessageRequest: tmp2.isMessageRequest, isMessageRequestTimestamp: tmp2.isMessageRequestTimestamp, isSpam: tmp2.isSpam, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, nicks: tmp2.nicks, ownerId: tmp2.ownerId } = arg0);
      tmp2.rawRecipients = PrivateChannelRecord.sortRecipients(arg0.rawRecipients, tmp2.id);
      recipients = arg0.recipients;
      if (null == recipients) {
        recipients = [];
      }
      items1 = [...recipients];
      tmp2.recipients = items1.sort(closure_1(closure_3[17]).compare);
      ({ recipientFlags: tmp2.recipientFlags, safetyWarnings } = arg0);
      if (null == safetyWarnings) {
        safetyWarnings = [];
      }
      tmp2.safetyWarnings = safetyWarnings;
      tmp2.blockedUserWarningDismissed = arg0.blockedUserWarningDismissed;
      return tmp2;
    }
  }
  const arg1 = PrivateChannelRecord;
  callback2(PrivateChannelRecord, arg0);
  let obj = {
    key: "isSystemDM",
    value() {
      const first = this.rawRecipients[0];
      let tmp2 = this.type === constants.DM;
      if (tmp2) {
        tmp2 = null != first;
      }
      if (tmp2) {
        tmp2 = true === first.system;
      }
      return tmp2;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getRecipientId",
    value() {
      return this.recipients[0];
    }
  };
  items[1] = obj;
  obj = {
    key: "addRecipient",
    value(arg0, arg1, arg2) {
      const self = this;
      if (arg0 !== arg2) {
        let obj = callback(closure_3[9]);
        let recipients = self.recipients;
        if (null == recipients) {
          recipients = [];
        }
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(recipients, 0);
        items[arraySpreadResult] = arg0;
        const sum = arraySpreadResult + 1;
        const result = self.set("recipients", obj.uniq(items).sort(callback(closure_3[17]).compare));
        let result1 = result;
        if (null != arg1) {
          obj = {};
          const merged = Object.assign(result.nicks);
          obj[arg0] = arg1;
          result1 = result.set("nicks", obj);
        }
        return result1;
      } else {
        return self;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "removeRecipient",
    value(selected) {
      return this.set("recipients", callback(closure_3[9]).without(this.recipients, selected));
    }
  };
  const items1 = [
    {
      key: "sortRecipients",
      value(arg0, arg1) {
        let items = arg0;
        const orCompute2 = orCompute.getOrCompute(arg1);
        if (null == arg0) {
          items = [];
        }
        const items1 = [...items];
        return items1.sort((id, id2) => {
          const orCompute = store.getOrCompute(id.id);
          return (orCompute ^ closure_0) - (store.getOrCompute(id2.id) ^ closure_0);
        });
      }
    },
    {
      key: "fromServer",
      value(application_id) {
        const sortRecipientsResult = PrivateChannelRecord.sortRecipients(application_id.recipients, application_id.id);
        const obj = { application_id: application_id.application_id, flags_: application_id.flags, guild_id: null, icon: application_id.icon, id: application_id.id, isMessageRequest: application_id.is_message_request, isMessageRequestTimestamp: application_id.is_message_request_timestamp, isSpam: tmp, lastMessageId: application_id.last_message_id, lastPinTimestamp: application_id.last_pin_timestamp };
        const is_spam = application_id.is_spam;
        const name = application_id.name;
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        obj.nicks = callback4(application_id.nicks);
        obj.ownerId = application_id.owner_id;
        obj.rawRecipients = sortRecipientsResult;
        obj.recipients = sortRecipientsResult.map((id) => id.id);
        ({ recipient_flags: obj.recipientFlags, safety_warnings: obj.safetyWarnings, blocked_user_warning_dismissed: obj.blockedUserWarningDismissed } = application_id);
        if (null != application_id.type) {
          let DM = application_id.type;
        } else {
          DM = constants.DM;
        }
        obj.type = DM;
        return PrivateChannelRecord(closure_3[15]).dangerouslyCast(obj, PrivateChannelRecord);
      }
    }
  ];
  return importDefaultResult(PrivateChannelRecord, items, items1);
}(tmp33);
const tmp49 = (arg0) => {
  class DMChannelRecord {
    constructor() {
      tmp = closure_8(this, DMChannelRecord);
      return closure_36(this, DMChannelRecord, arguments);
    }
  }
  const arg1 = DMChannelRecord;
  callback2(DMChannelRecord, arg0);
  return importDefaultResult(DMChannelRecord);
}(tmp48);
const tmp50 = (arg0) => {
  class GroupDMChannelRecord {
    constructor() {
      tmp = closure_8(this, GroupDMChannelRecord);
      return closure_36(this, GroupDMChannelRecord, arguments);
    }
  }
  const arg1 = GroupDMChannelRecord;
  callback2(GroupDMChannelRecord, arg0);
  return importDefaultResult(GroupDMChannelRecord);
}(tmp48);
const tmp51 = (arg0) => {
  class ThreadChannelRecord {
    constructor(arg0) {
      tmp = closure_8(this, ThreadChannelRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_36(this, ThreadChannelRecord, items);
      appliedTags = arg0.appliedTags;
      if (null == appliedTags) {
        appliedTags = [];
      }
      tmp2.appliedTags = appliedTags;
      ({ bitrate_: tmp2.bitrate_, flags_: tmp2.flags_, lastMessageId: tmp2.lastMessageId, lastPinTimestamp: tmp2.lastPinTimestamp, member: tmp2.member, memberCount: tmp2.memberCount, memberIdsPreview: tmp2.memberIdsPreview, messageCount: tmp2.messageCount, nsfw_: tmp2.nsfw_, ownerId: tmp2.ownerId, parent_id: tmp2.parent_id, parentChannelThreadType: tmp2.parentChannelThreadType, rateLimitPerUser_: tmp2.rateLimitPerUser_, rtcRegion: tmp2.rtcRegion, threadMetadata: tmp2.threadMetadata, userLimit_: tmp2.userLimit_, videoQualityMode: tmp2.videoQualityMode } = arg0);
      return tmp2;
    }
  }
  const arg1 = ThreadChannelRecord;
  callback2(ThreadChannelRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(applied_tags) {
        let name;
        let guild_id = arg1;
        let obj = {};
        applied_tags = applied_tags.applied_tags;
        if (null == applied_tags) {
          applied_tags = [];
        }
        obj.appliedTags = applied_tags;
        ({ bitrate: obj.bitrate_, flags: obj.flags_ } = applied_tags);
        if (null == guild_id) {
          guild_id = applied_tags.guild_id;
        }
        let tmp = null;
        if (null != guild_id) {
          tmp = guild_id;
        }
        obj.guild_id = tmp;
        ({ id: obj.id, last_message_id: obj.lastMessageId, last_pin_timestamp: obj.lastPinTimestamp } = applied_tags);
        let tmp2;
        if (null != applied_tags.member) {
          obj = { flags: applied_tags.member.flags, muted: applied_tags.member.muted, muteConfig: applied_tags.member.mute_config, joinTimestamp: applied_tags.member.join_timestamp };
          tmp2 = obj;
        }
        obj.member = tmp2;
        ({ member_count: obj.memberCount, member_ids_preview: obj.memberIdsPreview, message_count: obj.messageCount, name } = applied_tags);
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        const nsfw = applied_tags.nsfw;
        obj.nsfw_ = null != nsfw && nsfw;
        ({ owner_id: obj.ownerId, parent_id: obj.parent_id, parentChannelThreadType: obj.parentChannelThreadType, rate_limit_per_user: obj.rateLimitPerUser_, rtc_region: obj.rtcRegion } = applied_tags);
        let tmp3;
        if (null != applied_tags.thread_metadata) {
          obj = { archived: applied_tags.thread_metadata.archived, autoArchiveDuration: applied_tags.thread_metadata.auto_archive_duration, archiveTimestamp: applied_tags.thread_metadata.archive_timestamp, createTimestamp: applied_tags.thread_metadata.create_timestamp, locked: applied_tags.thread_metadata.locked };
          const invitable = applied_tags.thread_metadata.invitable;
          obj.invitable = null == invitable || invitable;
          tmp3 = obj;
        }
        obj.threadMetadata = tmp3;
        obj.totalMessageSent = applied_tags.total_message_sent;
        if (null != applied_tags.type) {
          let PUBLIC_THREAD = applied_tags.type;
        } else {
          PUBLIC_THREAD = constants.PUBLIC_THREAD;
        }
        obj.type = PUBLIC_THREAD;
        ({ user_limit: obj.userLimit_, video_quality_mode: obj.videoQualityMode } = applied_tags);
        return ThreadChannelRecord(closure_3[15]).dangerouslyCast(obj, ThreadChannelRecord);
      }
    }
  ];
  return importDefaultResult(ThreadChannelRecord, null, items);
}(tmp33);
let closure_34 = { [ChannelTypes.DM]: tmp48.fromServer, [ChannelTypes.GROUP_DM]: tmp48.fromServer, [ChannelTypes.GUILD_TEXT]: tmp36.fromServer, [ChannelTypes.GUILD_VOICE]: tmp35.fromServer, [ChannelTypes.GUILD_STAGE_VOICE]: tmp35.fromServer, [ChannelTypes.GUILD_CATEGORY]: tmp36.fromServer, [ChannelTypes.GUILD_ANNOUNCEMENT]: tmp36.fromServer, [ChannelTypes.GUILD_STORE]: tmp36.fromServer, [ChannelTypes.ANNOUNCEMENT_THREAD]: tmp51.fromServer, [ChannelTypes.PUBLIC_THREAD]: tmp51.fromServer, [ChannelTypes.PRIVATE_THREAD]: tmp51.fromServer, [ChannelTypes.MEDIA_THREAD]: tmp51.fromServer, [ChannelTypes.GUILD_DIRECTORY]: tmp36.fromServer, [ChannelTypes.GUILD_FORUM]: tmp44.fromServer, [ChannelTypes.GUILD_MEDIA]: tmp44.fromServer };
let closure_35 = { [ChannelTypes.DM]: tmp49, [ChannelTypes.GROUP_DM]: tmp50, [ChannelTypes.GUILD_TEXT]: tmp42, [ChannelTypes.GUILD_VOICE]: tmp43, [ChannelTypes.GUILD_STAGE_VOICE]: tmp40, [ChannelTypes.GUILD_CATEGORY]: tmp38, [ChannelTypes.GUILD_ANNOUNCEMENT]: tmp37, [ChannelTypes.GUILD_STORE]: tmp41, [ChannelTypes.ANNOUNCEMENT_THREAD]: tmp51, [ChannelTypes.PUBLIC_THREAD]: tmp51, [ChannelTypes.PRIVATE_THREAD]: tmp51, [ChannelTypes.MEDIA_THREAD]: tmp51, [ChannelTypes.GUILD_DIRECTORY]: tmp39, [ChannelTypes.GUILD_FORUM]: tmp44, [ChannelTypes.GUILD_MEDIA]: tmp44 };
const importAllResult = importAll(dependencyMap[8]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("records/ChannelRecord.tsx");

export const isGuildSelectableChannelType = function isGuildSelectableChannelType(arg0) {
  return set.has(arg0);
};
export const ALL_CHANNEL_TYPES = set1;
export const isGuildTextChannelType = function isGuildTextChannelType(type) {
  return set2.has(type);
};
export const GUILD_WEBHOOK_CHANNEL_TYPES = set3;
export const GUILD_CHANNEL_TYPES = set4;
export const isGuildChannelType = function isGuildChannelType(arg0) {
  return set4.has(arg0);
};
export const GUILD_CAN_CONTAIN_THREADS_CHANNEL_TYPES = set5;
export const GUILD_VOCAL_CHANNEL_TYPES = set6;
export { isGuildVocalChannelType };
export const isGuildVocalChannelOrVocalThreadType = function isGuildVocalChannelOrVocalThreadType(type) {
  let tmp = isGuildVocalChannelType(type);
  if (!tmp) {
    tmp = isVocalThreadType(type);
  }
  return tmp;
};
export const SILENT_JOIN_LEAVE_CHANNEL_TYPES = set7;
export const isPrivate = _isPrivate;
export const isMultiUserDM = _isMultiUserDM;
export const TEXT_CHANNEL_TYPES = set10;
export const isTextChannel = function isTextChannel(type) {
  return set10.has(type);
};
export { isVoiceChannel };
export const isGuildReadableType = function isGuildReadableType(arg0) {
  return set12.has(arg0);
};
export const THREAD_CHANNEL_TYPES = set13;
export const VOCAL_THREAD_CHANNEL_TYPES = set14;
export const THREADED_CHANNEL_TYPES = set15;
export const isThread = _isThread;
export { isVocalThreadType };
export const isReadableType = function isReadableType(type) {
  return set16.has(type);
};
export const GUILD_NON_CATEGORY_CHANNEL_TYPES = set17;
export const EDITABLE_CHANNEL_TYPES = set18;
export const TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES = set19;
export const TOPIC_CHANNEL_TYPES = set20;
export const NSFW_CHANNEL_TYPES = set21;
export const CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES = set22;
export const SLOWMODE_CHANNEL_TYPES = set23;
export const EDITABLE_VOICE_SETTINGS_TYPES = set24;
export const VOICE_THREAD_PARENT_CHANNEL_TYPES = set25;
export const CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING = set26;
export const GUILD_FAVORITES_CHANNEL_TYPES = set27;
export { getAccessPermissions };
export const getBasicAccessPermissions = function getBasicAccessPermissions(type) {
  if (isGuildVocalChannelType(type)) {
    let VIEW_CHANNEL = closure_29;
  } else {
    VIEW_CHANNEL = BasicPermissions.VIEW_CHANNEL;
  }
  return VIEW_CHANNEL;
};
export const ChannelRecordProperties = importDefaultResultResult;
export const ChannelRecordBase = tmp33;
export const UnknownChannelRecord = tmp34;
export const GuildVocalChannelRecord = tmp35;
export const GuildTextualChannelRecord = tmp36;
export const GuildAnnouncementChannelRecord = tmp37;
export const GuildCategoryChannelRecord = tmp38;
export const GuildDirectoryChannelRecord = tmp39;
export const GuildStageVoiceChannelRecord = tmp40;
export const GuildStoreChannelRecord = tmp41;
export const GuildTextChannelRecord = tmp42;
export const GuildVoiceChannelRecord = tmp43;
export const ForumChannelRecord = tmp44;
export const PrivateChannelRecord = tmp48;
export const DMChannelRecord = tmp49;
export const GroupDMChannelRecord = tmp50;
export const ThreadChannelRecord = tmp51;
export const createChannelRecordFromServer = function createChannelRecordFromServer(type) {
  let GUILD_TEXT = type.type;
  if (null == GUILD_TEXT) {
    GUILD_TEXT = ChannelTypes.GUILD_TEXT;
  }
  let fromServer = closure_34[GUILD_TEXT];
  if (null == fromServer) {
    fromServer = tmp34.fromServer;
  }
  return fromServer(type, arg1);
};
export const createChannelRecordFromInvite = function createChannelRecordFromInvite(type) {
  return createChannelRecord(type);
};
export { castChannelRecord };
export { createChannelRecord };
