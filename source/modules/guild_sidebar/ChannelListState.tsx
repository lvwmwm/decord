// Module ID: 6760
// Function ID: 52780
// Name: _superPropGet
// Dependencies: [102, 15, 17, 18, 6, 7, 1347, 4167, 6761, 1908, 6758, 1909, 6762, 6763, 6764, 5039, 3760, 1352, 5076, 1348, 6759, 1838, 3758, 4142, 1906, 4325, 4146, 4203, 6765, 6766, 653, 1355, 482, 22, 6767, 5605, 5668, 5647, 6768, 44, 1327, 21, 4313, 2]

// Module 6760 (_superPropGet)
import _get from "_get";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_24 from "_isNativeReflectConstruct";
import closure_25 from "_isNativeReflectConstruct";
import closure_26 from "_isNativeReflectConstruct";
import closure_27 from "_createForOfIteratorHelperLoose";
import closure_28 from "_isNativeReflectConstruct";
import closure_29 from "_isNativeReflectConstruct";
import closure_30 from "_isNativeReflectConstruct";
import closure_31 from "_isNativeReflectConstruct";
import closure_32 from "_isNativeReflectConstruct";
import closure_33 from "_isNativeReflectConstruct";
import closure_34 from "_isNativeReflectConstruct";
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow";
import ME from "ME";
import { ChannelFlags } from "set";
import { Permissions } from "sum";
import set from "_getPrototypeOf";

let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_36;
let closure_37;
const require = arg1;
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(closure_5(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
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
  return _isNativeReflectConstruct(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _computeSubtitle(type) {
  type = type.type;
  if (constants.GUILD_VOICE === type) {
    const activeEventByChannel = store.getActiveEventByChannel(type.id);
    if (null != activeEventByChannel) {
      let obj = { type: "event", name: activeEventByChannel.name };
      return obj;
    } else {
      if (arg2) {
        if (arg1) {
          let obj1 = require(4313) /* hasStream */;
          if (obj1.hasStream(tmp18)) {
            obj = { type: "go-live" };
            return obj;
          }
        }
      }
      channelStatus = channelStatus.getChannelStatus(type);
      if (null != channelStatus) {
        if (channelStatus.length > 0) {
          obj1 = { type: "voice", text: channelStatus };
          return obj1;
        }
      }
      embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(type.id);
      const mapped = embeddedActivitiesForChannel.map((applicationId) => {
        const application = outer1_10.getApplication(applicationId.applicationId);
        let name;
        if (null != application) {
          name = application.name;
        }
        return name;
      });
      const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
      let tmp16 = null;
      if (found.length > 0) {
        const obj2 = { type: "embedded-activities", name: found.join(", ") };
        tmp16 = obj2;
      }
      return tmp16;
    }
  } else if (constants.GUILD_STAGE_VOICE === type) {
    const activeEventByChannel1 = store.getActiveEventByChannel(type.id);
    let tmp5 = null;
    if (null != activeEventByChannel1) {
      obj = { type: "event", name: activeEventByChannel1.name };
      tmp5 = obj;
    }
    return tmp5;
  } else {
    return null;
  }
}
function computeThreadIds(id, activeJoinedUnreadThreadsForParent, outer1_2, outer1_3, outer1_1) {
  let arr = outer1_2;
  let tmp = null != outer1_2;
  if (tmp) {
    let tmp2 = arr.id === id.id;
    if (!tmp2) {
      tmp2 = outer1_3 === id.id;
    }
    tmp = tmp2;
  }
  if (set.has(id.type)) {
    const _Object = Object;
    const obj2 = importDefault(22);
    const mapped = importDefault(22).sortBy(Object.values(activeJoinedUnreadThreadsForParent), (joinTimestamp) => -joinTimestamp.joinTimestamp).map((channel) => channel.channel.id);
    if (tmp) {
      return mapped;
    } else if (tmp4) {
      let found = mapped;
      if (!(arr.id in activeJoinedUnreadThreadsForParent)) {
        arr = mapped.unshift(arr.id);
        found = mapped;
      }
    } else {
      found = mapped;
      if (outer1_1) {
        found = mapped.filter((id) => {
          let tmp = !outer1_19.isMuted(id);
          if (!tmp) {
            tmp = outer1_29.getMentionCount(id) > 0;
          }
          return tmp;
        });
      }
    }
    const sortByResult = importDefault(22).sortBy(Object.values(activeJoinedUnreadThreadsForParent), (joinTimestamp) => -joinTimestamp.joinTimestamp);
  } else {
    return [];
  }
}
function shouldShowInFavorites(favoriteChannelIds, id) {
  favoriteChannelIds = favoriteChannelIds.favoriteChannelIds;
  return favoriteChannelIds.has(id.id);
}
function shouldAlwaysShowInRecents(id, selectedChannel) {
  selectedChannel = selectedChannel.selectedChannel;
  if (store3.getMentionCount(id.id) > 0) {
    return true;
  } else {
    for (const key10009 in tmp[arg0.id]) {
      let tmp6 = key10009;
      let tmp7 = store3;
      if (store3.getMentionCount(key10009) <= 0) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    if (null != selectedChannel) {
      if (selectedChannel.id === id.id) {
        return false;
      } else if (selectedChannel.isThread()) {
        if (selectedChannel.parent_id === id.id) {
          return false;
        }
      }
    }
    const newChannelIds = store2.getNewChannelIds(id.category.guild.id);
    let hasItem = !tmp4;
    if (newChannelIds.size <= 2) {
      hasItem = newChannelIds.has(id.id);
    }
    return hasItem;
  }
}
function shouldShowInRecents(optInEnabled, type) {
  if (type.type === constants.GUILD_DIRECTORY) {
    return false;
  } else if (optInEnabled.optInEnabled) {
    const optedInChannels = optInEnabled.optedInChannels;
    if (optedInChannels.has(type.id)) {
      return false;
    } else if (type.isThread()) {
      return false;
    } else {
      if (null != type.parent_id) {
        const optedInChannels2 = optInEnabled.optedInChannels;
        if (optedInChannels2.has(type.parent_id)) {
          return false;
        }
      }
      if (optInEnabled.hideResourceChannels) {
        if (type.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
          return false;
        }
      }
      if (type.isGuildVocal()) {
        if (voiceCategoryCollapsed.isVoiceCategoryCollapsed(optInEnabled.id)) {
          if (obj.some(voiceStatesForChannel.getVoiceStatesForChannel(type.id))) {
            return false;
          }
          obj = importDefault(22);
        } else {
          return false;
        }
      }
      if (store3.getMentionCount(type.id) > 0) {
        return true;
      } else {
        for (const key10050 in tmp[arg1.id]) {
          let tmp17 = key10050;
          let tmp18 = store3;
          if (store3.getMentionCount(key10050) > 0) {
            let flag5 = true;
            return true;
          } else {
            let tmp9 = store3;
            if (store3.hasUnread(key10050)) {
              let flag4 = true;
              return true;
            } else {
              let tmp10 = store3;
              if (!store3.hasRecentlyVisitedAndRead(key10050)) {
                continue;
              } else {
                let flag3 = true;
                return true;
              }
            }
          }
        }
        const mutedChannelIds = optInEnabled.mutedChannelIds;
        if (!mutedChannelIds.has(type.id)) {
          if (null != type.parent_id) {
            const mutedChannelIds2 = optInEnabled.mutedChannelIds;
          }
          const newChannelIds = store2.getNewChannelIds(optInEnabled.id);
          const _Array = Array;
          const sorted = Array.from(newChannelIds).sort((arg0, arg1) => outer1_1(outer1_2[41]).compare(arg1, arg0));
          let hasItem = newChannelIds.has(type.id);
          if (hasItem) {
            hasItem = sorted.indexOf(type.id) < 2;
          }
          let result = !tmp14;
          if (!hasItem) {
            result = store3.hasRecentlyVisitedAndRead(type.id);
          }
          return result;
        }
        return false;
      }
    }
  } else {
    return false;
  }
}
({ ChannelRecordBase: closure_20, isGuildReadableType: closure_21, isThread: closure_22, THREADED_CHANNEL_TYPES: closure_23 } = _callSuper);
({ ChannelTypes: closure_36, GuildFeatures: closure_37 } = ME);
let closure_40 = { CannotShow: 1, [1]: "CannotShow", DoNotShow: 2, [2]: "DoNotShow", WouldShowIfUncollapsed: 3, [3]: "WouldShowIfUncollapsed", Show: 4, [4]: "Show" };
let obj = { CHANNEL_NOTICES: 0, [0]: "CHANNEL_NOTICES", GUILD_ACTIONS: 1, [1]: "GUILD_ACTIONS", FAVORITES: 2, [2]: "FAVORITES", RECENTS: 3, [3]: "RECENTS", UNCATEGORIZED_CHANNELS: 4, [4]: "UNCATEGORIZED_CHANNELS", FIRST_NAMED_CATEGORY: 5, [5]: "FIRST_NAMED_CATEGORY" };
const CHANNEL_NOTICES = obj.CHANNEL_NOTICES;
const GUILD_ACTIONS = obj.GUILD_ACTIONS;
const FAVORITES = obj.FAVORITES;
const RECENTS = obj.RECENTS;
const UNCATEGORIZED_CHANNELS = obj.UNCATEGORIZED_CHANNELS;
const FIRST_NAMED_CATEGORY = obj.FIRST_NAMED_CATEGORY;
let items = [String(ChannelListGuildActionRow.GUILD_DIRECTORY)];
let set = new Set(items);
let closure_48 = (() => {
  class ChannelListImpl {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_7(this, ChannelListImpl);
      this.id = arg0;
      this.sortedNamedCategories = null;
      this.sections = null;
      this.rows = null;
      this.firstVoiceChannel = undefined;
      this.allChannelsById = null;
      this.version = 0;
      this.hideMutedChannels = outer1_31.isGuildCollapsed(this.id);
      this.mutedChannelIds = outer1_31.getMutedChannels(this.id);
      optedInChannelsWithPendingUpdates = outer1_31.getOptedInChannelsWithPendingUpdates(this.id);
      if (null == optedInChannelsWithPendingUpdates) {
        tmp3 = outer1_31;
        optedInChannelsWithPendingUpdates = outer1_31.getOptedInChannels(self.id);
      }
      self.optedInChannels = optedInChannelsWithPendingUpdates;
      obj = ChannelListImpl(outer1_2[34]);
      self.optInEnabled = obj.isOptInEnabledForGuild(self.id);
      obj2 = ChannelListImpl(outer1_2[35]);
      self.hideResourceChannels = obj2.canSeeOnboardingHome(self.id);
      guildFavorites = outer1_31.getGuildFavorites(self.id);
      if (null == guildFavorites) {
        guildFavorites = [];
      }
      set = new Set(guildFavorites);
      self.favoriteChannelIds = set;
      self.suggestedFavoriteChannelId = outer1_15.getSuggestedChannelId(self.id);
      self.collapsedCategoryIds = outer1_24.getCollapsedCategories();
      mutableGuildChannelsForGuild = outer1_25.getMutableGuildChannelsForGuild(self.id);
      guild = outer1_27.getGuild(self.id);
      tmp8 = null;
      if (null != guild) {
        tmp6 = outer1_1;
        tmp9 = outer1_2;
        num = 36;
        tmp8 = outer1_1(outer1_2[36])(guild);
      }
      self.moderatorReportChannelId = tmp8;
      tmp10 = null != guild;
      if (tmp10) {
        tmp6 = outer1_1;
        tmp11 = outer1_2;
        num2 = 37;
        tmp10 = outer1_1(outer1_2[37])(guild);
      }
      self.moderatorReportChannelEnabled = tmp10;
      obj = {};
      items = [];
      obj1 = {};
      for (const key10078 in mutableGuildChannelsForGuild) {
        tmp45 = key10078;
        tmp46 = mutableGuildChannelsForGuild[key10078];
        tmp47 = outer1_36;
        GUILD_CATEGORY = outer1_36.GUILD_CATEGORY;
        if (tmp46.type !== GUILD_CATEGORY) {
          continue;
        } else {
          obj[tmp46.id] = tmp46;
          obj1[tmp46.id] = [];
          continue;
        }
        continue;
      }
      items1 = [];
      items2 = [];
      items3 = [];
      initializationData = self.initializationData;
      for (const key10088 in mutableGuildChannelsForGuild) {
        tmp48 = key10088;
        obj7 = mutableGuildChannelsForGuild[key10088];
        tmp49 = outer1_36;
        if (obj7.type === outer1_36.GUILD_CATEGORY) {
          continue;
        } else {
          if (obj7.isGameInvitesChannel()) {
            continue;
          } else {
            tmp12 = outer1_36;
            if (obj7.type !== outer1_36.GUILD_DIRECTORY) {
              tmp16 = outer1_72;
              if (outer1_72(self, obj7, initializationData)) {
                arr = items1.push(obj7);
              } else {
                tmp17 = outer1_36;
                tmp18 = obj7.type !== outer1_36.GUILD_VOICE;
                if (!tmp18) {
                } else {
                  tmp19 = outer1_36;
                  tmp18 = obj7.type !== outer1_36.GUILD_STAGE_VOICE;
                }
                if (tmp18) {
                } else {
                  tmp20 = null != obj7.parent_id;
                  if (!tmp20) {
                  } else {
                    tmp20 = null != obj[obj7.parent_id];
                  }
                  if (!tmp20) {
                  } else {
                    arr1 = items2.push(obj[obj7.parent_id]);
                  }
                  arr2 = items2.push(obj7);
                }
              }
              if (null == obj7.parent_id) {
              } else if (obj7.parent_id in obj1) {
                arr6 = obj1[obj7.parent_id];
                arr3 = arr6.push(obj7);
                continue;
              }
              arr4 = items.push(obj7);
              continue;
            } else {
              hasItem = null == guild;
              if (hasItem) {
              } else {
                features = guild.features;
                tmp14 = outer1_37;
                hasItem = features.has(outer1_37.HUB);
              }
              if (hasItem) {
                continue;
              } else {
                arr5 = items3.push(obj7);
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      self.categories = {};
      for (const key10134 in obj1) {
        tmp50 = key10134;
        tmp51 = outer1_50;
        prototype3 = outer1_50.prototype;
        tmp52 = new.target;
        tmp53 = new.target;
        tmp54 = self;
        tmp55 = initializationData;
        tmp56 = new outer1_50(self, obj[key10134], obj1[key10134], initializationData);
        tmp57 = tmp56;
        self.categories[key10134] = tmp56;
        continue;
      }
      self.recentsSectionNumber = outer1_44;
      self.favoritesSectionNumber = outer1_43;
      tmp26 = new outer1_49(self, items, initializationData);
      self.noParentCategory = tmp26;
      tmp27 = new outer1_51(self, initializationData);
      self.favoritesCategory = tmp27;
      obj5 = ChannelListImpl(outer1_2[38]);
      if (obj5.isRecentlyActiveChannelsEnabled()) {
        tmp35 = outer1_52;
        prototype2 = outer1_52.prototype;
        tmp36 = new.target;
        tmp37 = new.target;
        tmp38 = self;
        tmp39 = mutableGuildChannelsForGuild;
        tmp40 = initializationData;
        tmp34 = new outer1_52(self, mutableGuildChannelsForGuild, initializationData);
      } else {
        tmp28 = outer1_53;
        prototype = outer1_53.prototype;
        tmp29 = new.target;
        tmp30 = new.target;
        tmp31 = self;
        tmp32 = items1;
        tmp33 = initializationData;
        tmp34 = new outer1_53(self, items1, initializationData);
      }
      self.recentsCategory = tmp34;
      tmp41 = new outer1_54(self, items2, obj, initializationData);
      self.voiceChannelsCategory = tmp41;
      tmp42 = new outer1_56(arg1, items3.length > 0);
      self.guildActionSection = tmp42;
      tmp43 = new outer1_55(arg2);
      self.channelNoticeSection = tmp43;
      tmp44 = outer1_1(outer1_2[39])(!("null" in self.categories), "somehow a null got into categories");
      obj6 = outer1_1(outer1_2[33]);
      self.voiceChannelsSectionNumber = outer1_46 + obj6.size(self.categories);
      return;
    }
  }
  let obj = {
    key: "initializationData",
    get() {
      return { selectedChannel: outer1_25.getChannel(outer1_30.getChannelId()), selectedVoiceChannelId: outer1_30.getVoiceChannelId(), activeJoinedRelevantThreads: outer1_18.getActiveJoinedRelevantThreadsForGuild(this.id), activeJoinedUnreadThreads: outer1_18.getActiveJoinedUnreadThreadsForGuild(this.id) };
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "invalidate",
    value() {
      this.sections = null;
      this.rows = null;
      this.sortedNamedCategories = null;
      this.firstVoiceChannel = undefined;
      this.version = this.version + 1;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSortedNamedCategories",
    value() {
      const self = this;
      if (null == this.sortedNamedCategories) {
        const rows = self.getRows();
      }
      return self.sortedNamedCategories;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSortedCategories",
    value() {
      const items = [this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.getSortedNamedCategories(), this.voiceChannelsCategory];
      return items;
    }
  };
  items[4] = {
    key: "getSections",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null == self.sections) {
        const rows = self.getRows();
        self.sections = rows.map((arg0) => arg0.length);
      }
      const sections = self.sections;
      if (flag) {
        const items = [];
        HermesBuiltin.arraySpread(sections, 0);
        let tmp = items;
      } else {
        tmp = sections;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getRows",
    value() {
      const self = this;
      if (null == this.rows) {
        const _Object = Object;
        self.sortedNamedCategories = outer1_1(outer1_2[33]).sortBy(Object.values(self.categories), (record) => record.record.position);
        const items = [, , , , , ];
        ({ channelNoticeSection: arr[0], guildActionSection: arr[1], favoritesCategory: arr[2], recentsCategory: arr[3], noParentCategory: arr[4] } = self);
        let arraySpreadResult = HermesBuiltin.arraySpread(self.sortedNamedCategories, 5);
        items[arraySpreadResult] = self.voiceChannelsCategory;
        const sum = arraySpreadResult + 1;
        self.rows = items.map((getRows) => getRows.getRows());
        const items1 = [self.noParentCategory];
        arraySpreadResult = HermesBuiltin.arraySpread(self.sortedNamedCategories, 1);
        let num2 = 0;
        let num = 0;
        if (0 < items1.length) {
          do {
            let obj = items1[num2];
            let sum1 = num + 1;
            obj.position = sum1;
            let tmp2 = outer1_66;
            let tmp3 = outer1_66(obj.getShownChannelIds());
            let iter = tmp3();
            let tmp4 = sum1;
            num = sum1;
            if (!iter.done) {
              do {
                let sum2 = tmp4 + 1;
                obj.channels[iter.value].position = sum2;
                let iter2 = tmp3();
                tmp4 = sum2;
                iter = iter2;
                num = sum2;
                done = iter2.done;
              } while (!done);
            }
            num2 = num2 + 1;
          } while (num2 < items1.length);
        }
        const obj2 = outer1_1(outer1_2[33]);
      }
      return self.rows;
    }
  };
  items[6] = {
    key: "getCategoryFromSection",
    value(arg0) {
      const self = this;
      if (outer1_41 === arg0) {
        const _Error2 = Error;
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      } else if (outer1_42 === arg0) {
        const _Error = Error;
        throw Error("Invalid section. Use getGuildActionSection instead");
      } else if (outer1_43 === arg0) {
        return self.favoritesCategory;
      } else if (outer1_45 === arg0) {
        return self.noParentCategory;
      } else if (self.recentsSectionNumber === arg0) {
        return self.recentsCategory;
      } else if (self.voiceChannelsSectionNumber === arg0) {
        return self.voiceChannelsCategory;
      } else {
        return self.getSortedNamedCategories()[arg0 - outer1_46];
      }
    }
  };
  items[7] = {
    key: "getNamedCategoryFromSection",
    value(arg0) {
      const self = this;
      const diff = arg0 - outer1_46;
      let tmp3 = diff >= 0;
      if (tmp3) {
        tmp3 = diff < self.getSortedNamedCategories().length;
      }
      outer1_1(outer1_2[39])(tmp3, "invalid section index " + diff);
      return self.getSortedNamedCategories()[diff];
    }
  };
  items[8] = {
    key: "getGuildActionSection",
    value() {
      return this.guildActionSection;
    }
  };
  items[9] = {
    key: "getChannelNoticeSection",
    value() {
      return this.channelNoticeSection;
    }
  };
  items[10] = {
    key: "getChannelFromSectionRow",
    value(recentsSectionNumber) {
      const categoryFromSection = this.getCategoryFromSection(recentsSectionNumber);
      if (null == categoryFromSection) {
        return null;
      } else {
        const tmp2 = categoryFromSection.channels[categoryFromSection.getShownChannelIds(categoryFromSection)[arg1]];
        let tmp3 = null;
        if (null != tmp2) {
          const obj = { category: categoryFromSection, channel: tmp2 };
          tmp3 = obj;
        }
        return tmp3;
      }
    }
  };
  items[11] = {
    key: "isPlaceholderRow",
    value(arg0, arg1) {
      const self = this;
      outer1_1(outer1_2[39])(arg0 > outer1_42, "Invalid section");
      let tmp2 = arg0 !== this.recentsSectionNumber;
      if (tmp2) {
        tmp2 = self.getRows()[arg0][arg1] === "placeholder-channel-id";
      }
      return tmp2;
    }
  };
  items[12] = {
    key: "getFirstVoiceChannel",
    value(arg0) {
      const self = this;
      if (undefined === this.firstVoiceChannel) {
        const favoritesCategory = self.favoritesCategory;
        self.firstVoiceChannel = favoritesCategory.getFirstVoiceChannel(arg0);
        if (null != self.firstVoiceChannel) {
          return self.firstVoiceChannel;
        } else {
          const noParentCategory = self.noParentCategory;
          self.firstVoiceChannel = noParentCategory.getFirstVoiceChannel(arg0);
          if (null != self.firstVoiceChannel) {
            return self.firstVoiceChannel;
          } else {
            const tmp2 = outer1_66(self.getSortedNamedCategories());
            const iter = tmp2();
            let iter2 = iter;
            if (!iter.done) {
              const value = iter2.value;
              while (null == value.getFirstVoiceChannel(arg0)) {
                let iter3 = tmp2();
                iter2 = iter3;
              }
              self.firstVoiceChannel = value.getFirstVoiceChannel(arg0);
            }
          }
        }
      }
      return self.firstVoiceChannel;
    }
  };
  items[13] = {
    key: "getSectionRowsFromChannel",
    value(channelId) {
      const self = this;
      let GUILD_DIRECTORY = null;
      if (null != channelId) {
        GUILD_DIRECTORY = channelId;
        if (!outer1_62.has(channelId)) {
          const channel = outer1_25.getChannel(channelId);
          GUILD_DIRECTORY = null;
          if (null != channel) {
            GUILD_DIRECTORY = null;
            if (channel.isDirectory()) {
              GUILD_DIRECTORY = outer1_35.GUILD_DIRECTORY;
            }
          }
        }
      }
      if (null != GUILD_DIRECTORY) {
        let obj = {};
        const guildActionSection = self.getGuildActionSection();
        const rows = guildActionSection.getRows();
        obj.row = rows.indexOf(GUILD_DIRECTORY);
        obj.section = outer1_42;
        const items = [obj];
        return items;
      } else {
        const items1 = [];
        const channel1 = outer1_25.getChannel(channelId);
        let channel2 = channel1;
        if (null != channel1) {
          if (null != channelId) {
            const isThreadResult = channel1.isThread();
            let tmp7 = channel1;
            if (isThreadResult) {
              channel2 = outer1_25.getChannel(channel1.parent_id);
              tmp7 = channel2;
            }
            if (null == tmp7) {
              return items1;
            } else {
              const favoritesCategory = self.favoritesCategory;
              const shownChannelIds = favoritesCategory.getShownChannelIds();
              const index = shownChannelIds.indexOf(tmp7.id);
              if (index >= 0) {
                obj = { section: outer1_43, row: index };
                items1.push(obj);
              }
              const recentsCategory = self.recentsCategory;
              const shownChannelIds1 = recentsCategory.getShownChannelIds();
              const index1 = shownChannelIds1.indexOf(tmp7.id);
              if (index1 >= 0) {
                const obj1 = { section: self.recentsSectionNumber, row: index1 };
                items1.push(obj1);
              }
              if (tmp7.type === outer1_36.GUILD_CATEGORY) {
                const obj2 = {
                  section: outer1_1(outer1_2[33]).findIndex(self.getSortedNamedCategories(), (id) => {
                              id = undefined;
                              if (null != channel2) {
                                id = channel2.id;
                              }
                              return id.id === id;
                            }) + outer1_46
                };
                const items2 = [obj2];
                return items2;
              } else {
                const category = self.getCategory(tmp7);
                if (category instanceof outer1_49) {
                  let sum = outer1_45;
                } else {
                  const sortedNamedCategories = self.getSortedNamedCategories();
                  sum = sortedNamedCategories.indexOf(category) + outer1_46;
                }
                const shownChannelIds2 = category.getShownChannelIds();
                const index2 = shownChannelIds2.indexOf(tmp7.id);
                if (sum >= 0) {
                  if (index2 >= 0) {
                    let num = 0;
                    if (isThreadResult) {
                      const threadIds = category.channels[tmp7.id].threadIds;
                      num = threadIds.indexOf(channelId);
                    }
                    const obj3 = { section: sum, row: index2, threadOffset: num };
                    items1.push(obj3);
                  }
                }
                const voiceChannelsCategory = self.voiceChannelsCategory;
                const shownChannelIds3 = voiceChannelsCategory.getShownChannelIds();
                const index3 = shownChannelIds3.indexOf(tmp7.id);
                if (index3 >= 0) {
                  const obj4 = { section: self.voiceChannelsSectionNumber, row: index3 };
                  items1.push(obj4);
                }
                return items1;
              }
            }
          }
        }
        return items1;
      }
    }
  };
  items[14] = {
    key: "getCategory",
    value(parent_id) {
      const self = this;
      if (null != parent_id.parent_id) {
        if (parent_id.parent_id in self.categories) {
          let noParentCategory = self.categories[parent_id.parent_id];
        }
        return noParentCategory;
      }
      noParentCategory = self.noParentCategory;
    }
  };
  items[15] = {
    key: "updateRecentsCategory",
    value() {
      const self = this;
      const recentsCategory = this.recentsCategory;
      const updateAllChannelsResult = recentsCategory.updateAllChannels(this.initializationData);
      if (updateAllChannelsResult) {
        self.invalidate();
      }
      return updateAllChannelsResult;
    }
  };
  items[16] = {
    key: "nonPositionalChannelUpdate",
    value(arg0) {
      const self = this;
      const initializationData = this.initializationData;
      const category = this.getCategory(arg0);
      let flag = category.updateChannel(arg0, initializationData);
      const favoritesCategory = this.favoritesCategory;
      if (favoritesCategory.updateChannel(arg0, initializationData)) {
        flag = true;
      }
      const recentsCategory = self.recentsCategory;
      if (recentsCategory.updateChannel(arg0, initializationData)) {
        flag = true;
      }
      const voiceChannelsCategory = self.voiceChannelsCategory;
      if (voiceChannelsCategory.updateChannel(arg0, initializationData)) {
        flag = true;
      }
      if (flag) {
        self.invalidate();
      }
      return flag;
    }
  };
  items[17] = {
    key: "getSlicedChannels",
    value(arg0, ignoreRecents) {
      let iter5;
      outer1_1(outer1_2[39])(arg0.length > 0, "must have at least one channel in the slice");
      const items = [];
      const items1 = [];
      const tmp4 = outer1_66(this.getSortedCategories());
      const iter = tmp4();
      let iter2 = iter;
      let flag = true;
      let flag2 = false;
      if (!iter.done) {
        do {
          let value = iter2.value;
          ignoreRecents = undefined;
          if (null != ignoreRecents) {
            ignoreRecents = ignoreRecents.ignoreRecents;
          }
          if (ignoreRecents) {
            ignoreRecents = value === this.recentsCategory;
          }
          let tmp6 = outer1_66;
          let tmp7 = outer1_66(value.getShownChannelIds());
          let iter3 = tmp7();
          let tmp8 = flag;
          let flag3 = flag2;
          if (!iter3.done) {
            do {
              let tmp9 = value.channels[iter3.value];
              let tmp10 = tmp8;
              if (tmp8) {
                let flag4 = false;
                if (tmp9.id !== tmp2.id) {
                  flag4 = tmp8;
                  if (!ignoreRecents) {
                    let arr = items.push(tmp9);
                    flag4 = tmp8;
                  }
                }
                tmp10 = flag4;
              }
              let tmp12 = flag3;
              if (flag3) {
                tmp12 = !ignoreRecents;
              }
              if (tmp12) {
                arr = items1.push(tmp9);
              }
              let tmp14 = tmp10;
              if (!tmp10) {
                tmp14 = flag3;
              }
              let tmp15 = flag3;
              if (!tmp14) {
                if (tmp9.id === tmp3.id) {
                  flag3 = true;
                }
                tmp15 = flag3;
              }
              iter4 = tmp7();
              flag3 = tmp15;
              tmp8 = tmp10;
              iter3 = iter4;
              flag = tmp10;
              flag2 = tmp15;
              let tmp16 = tmp9;
            } while (!iter4.done);
          }
          iter5 = tmp4();
          iter2 = iter5;
        } while (!iter5.done);
      }
      const items2 = [items, arg0, items1];
      return items2;
    }
  };
  items[18] = {
    key: "_initializeAllChannelsById",
    value() {
      let iter2;
      const self = this;
      if (null == this.allChannelsById) {
        self.allChannelsById = {};
        const tmp2 = outer1_66(self.getSortedCategories());
        let iter = tmp2();
        if (!iter.done) {
          do {
            let value = iter.value;
            for (const key10014 in value.channels) {
              let tmp3 = key10014;
              self.allChannelsById[key10014] = value.channels[key10014];
              continue;
            }
            iter2 = tmp2();
            iter = iter2;
          } while (!iter2.done);
        }
      }
      return self.allChannelsById;
    }
  };
  items[19] = {
    key: "getChannels",
    value(arg0) {
      let iter2;
      const items = [];
      const result = this._initializeAllChannelsById();
      const tmp2 = outer1_66(arg0);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          if (null != result[value]) {
            let arr = items.push(result[value]);
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
      return items;
    }
  };
  items[20] = {
    key: "getChannel",
    value(arg0) {
      const tmp = this._initializeAllChannelsById()[arg0];
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[21] = {
    key: "updateSubtitles",
    value(channelId) {
      const self = this;
      const items = [];
      if (null != channelId) {
        const channel = outer1_25.getChannel(channelId);
        let valueResult = items;
        if (null != channel) {
          if (channel.id in self.favoritesCategory.channels) {
            const items1 = [self.favoritesCategory.channels[channel.id]];
            valueResult = items1;
          } else if (channel.id in self.recentsCategory.channels) {
            const items2 = [self.recentsCategory.channels[channel.id]];
            valueResult = items2;
          } else {
            const category = self.getCategory(channel);
            valueResult = items;
            if (tmp7) {
              const items3 = [category.channels[channelId]];
              valueResult = items3;
            }
            tmp7 = null != category && null != category.channels[channelId];
          }
        }
      } else {
        const tmp3 = outer1_1(outer1_2[33]);
        const mapped = outer1_1(outer1_2[33])(self.getSortedCategories()).map((channels) => Object.values(channels.channels));
        const tmp3Result = outer1_1(outer1_2[33])(self.getSortedCategories());
        valueResult = mapped.flatten().value();
        const iter = mapped.flatten();
      }
      let c0 = false;
      const item = valueResult.forEach((updateSubtitle) => {
        if (updateSubtitle.updateSubtitle()) {
          let c0 = true;
        }
      });
      if (c0) {
        self.version = self.version + 1;
      }
      return c0;
    }
  };
  items[22] = {
    key: "forEachShownChannel",
    value(arg0, ignoreRecents) {
      const tmp = outer1_66(this.getSortedCategories());
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let value = iter2.value;
          if (null != ignoreRecents) {
            if (ignoreRecents.ignoreRecents) {
              let tmp5 = tmp2;
              let tmp6 = tmp3;
              let tmp7 = tmp4;
            }
            let iter9 = tmp();
            tmp2 = tmp5;
            tmp3 = tmp6;
            tmp4 = tmp7;
            iter2 = iter9;
            if (iter9.done) {
              break;
            }
          }
          let tmp8 = outer1_66;
          let tmp9 = outer1_66(value.getShownChannelIds());
          let iter3 = tmp9();
          let iter4 = iter3;
          let tmp10 = tmp4;
          let tmp11 = iter3;
          let tmp12 = tmp9;
          tmp5 = tmp2;
          tmp6 = tmp3;
          tmp7 = tmp4;
          if (!iter3.done) {
            do {
              let tmp13 = value.channels[iter4.value];
              let tmp14 = arg0(tmp13.record);
              let tmp15 = outer1_66;
              let tmp16 = outer1_66(tmp13.threadIds);
              let iter5 = tmp16();
              let iter6 = iter5;
              let tmp17 = iter5;
              if (!iter5.done) {
                do {
                  let tmp18 = outer1_25;
                  let channel = outer1_25.getChannel(iter6.value);
                  if (null != channel) {
                    let tmp20 = arg0(channel);
                  }
                  iter7 = tmp16();
                  iter6 = iter7;
                  tmp17 = iter7;
                  tmp10 = channel;
                } while (!iter7.done);
              }
              iter8 = tmp9();
              tmp5 = tmp17;
              iter4 = iter8;
              let tmp21 = iter8;
              let tmp22 = tmp9;
              tmp6 = tmp16;
              tmp7 = tmp10;
            } while (!iter8.done);
          }
        }
      }
    }
  };
  items[23] = {
    key: "forEachChannel",
    value(arg0, ignoreRecents) {
      const tmp = outer1_66(this.getSortedCategories());
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let value = iter2.value;
          if (null != ignoreRecents) {
            let iter6 = tmp();
            iter2 = iter6;
            if (iter6.done) {
              break;
            }
          }
          let tmp2 = outer1_66;
          let tmp3 = outer1_66(value.getChannelRecords());
          let iter3 = tmp3();
          let iter4 = iter3;
          let tmp4 = iter3;
          let tmp5 = tmp3;
          if (!iter3.done) {
            do {
              let tmp6 = arg0(iter4.value);
              let iter5 = tmp3();
              iter4 = iter5;
              let tmp7 = iter5;
              let tmp8 = tmp3;
              done = iter5.done;
            } while (!done);
          }
        }
      }
    }
  };
  return callback3(ChannelListImpl, items);
})();
let tmp6 = (() => {
  class BaseChannelListCategory {
    constructor(arg0) {
      tmp = outer1_7(this, BaseChannelListCategory);
      this.guild = arg0;
      this.isMuted = false;
      this.isCollapsed = false;
      this.position = -1;
      this.channels = {};
      this.shownChannelIds = null;
      return;
    }
  }
  let obj = {
    key: "updateChannel",
    value(id) {
      const self = this;
      let tmp2 = !tmp;
      if (id.id in this.channels) {
        tmp2 = !self.channels[id.id].updateChannel(id, arg1);
        const obj = self.channels[id.id];
      }
      let flag = !tmp2;
      if (!tmp2) {
        self.invalidate();
        flag = true;
      }
      return flag;
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "invalidate",
    value() {
      this.shownChannelIds = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRows",
    value() {
      const self = this;
      const shownChannelIds = this.getShownChannelIds();
      let tmp = shownChannelIds;
      if (0 === shownChannelIds.length) {
        tmp = shownChannelIds;
        if (self.shouldShowEmptyCategory()) {
          const items = ["placeholder-channel-id"];
          tmp = items;
        }
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "shouldShowEmptyCategory",
    value() {
      return outer1_1(outer1_2[33]).some(this.channels, (renderLevel) => renderLevel.renderLevel >= outer2_40.WouldShowIfUncollapsed);
    }
  };
  items[4] = {
    key: "getShownChannelIds",
    value() {
      const self = this;
      if (null == this.shownChannelIds) {
        const values = outer1_1(outer1_2[33])(self.channels).values();
        const found = values.filter((renderLevel) => renderLevel.renderLevel === outer2_40.Show);
        const obj = outer1_1(outer1_2[33])(self.channels);
        const sortByResult = found.sortBy((record) => {
          record = record.record;
          const position = record.position;
          if (record.isGuildVocal()) {
            let sum = position + 10000;
          } else {
            sum = position;
          }
          return sum;
        });
        self.shownChannelIds = found.sortBy((record) => {
          record = record.record;
          const position = record.position;
          if (record.isGuildVocal()) {
            let sum = position + 10000;
          } else {
            sum = position;
          }
          return sum;
        }).map((id) => id.id).value();
        const iter = found.sortBy((record) => {
          record = record.record;
          const position = record.position;
          if (record.isGuildVocal()) {
            let sum = position + 10000;
          } else {
            sum = position;
          }
          return sum;
        }).map((id) => id.id);
      }
      return self.shownChannelIds;
    }
  };
  items[5] = {
    key: "getShownChannelAndThreadIds",
    value() {
      const values = outer1_1(outer1_2[33])(this.channels).values();
      const obj = outer1_1(outer1_2[33])(this.channels);
      const iter = values.flatMap((threadIds) => threadIds.threadIds);
      const shownChannelIds = this.getShownChannelIds();
      return shownChannelIds.concat(values.flatMap((threadIds) => threadIds.threadIds).value());
    }
  };
  items[6] = {
    key: "isEmpty",
    value() {
      return 0 === this.getShownChannelIds().length;
    }
  };
  items[7] = {
    key: "getChannelRecords",
    value() {
      const values = outer1_1(outer1_2[33])(this.channels).values();
      const found = values.filter((renderLevel) => renderLevel.renderLevel > outer2_40.CannotShow);
      const obj = outer1_1(outer1_2[33])(this.channels);
      return found.map((record) => record.record).value();
    }
  };
  items[8] = {
    key: "getFirstVoiceChannel",
    value(arg0) {
      let value;
      const self = this;
      const tmp = outer1_66(this.getShownChannelIds());
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          value = iter2.value;
          if (arg0) {
            let record = self.channels[value].record;
            if (record.isGuildStageVoice()) {
              break;
            }
          }
          if (!arg0) {
            let record2 = self.channels[value].record;
            if (record2.isGuildVocal()) {
              return self.channels[value];
            }
          }
          let iter3 = tmp();
          iter2 = iter3;
        }
        return self.channels[value];
      }
      return null;
    }
  };
  return callback3(BaseChannelListCategory, items);
})();
let closure_49 = ((arg0) => {
  class ChannelListCategoryNoParent {
    constructor(arg0, arg1, arg2) {
      closure_0 = arg2;
      tmp = outer1_7(this, closure_0);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_64(this, closure_0, items);
      closure_1 = tmp2;
      arr2 = outer1_1(outer1_2[33])(arg1);
      mapped = arr2.map((arg0) => new outer2_57(closure_1, arg0, closure_0));
      iter = mapped.keyBy((id) => id.id);
      tmp2.channels = iter.value();
      return tmp2;
    }
  }
  callback2(ChannelListCategoryNoParent, arg0);
  return callback3(ChannelListCategoryNoParent);
})(tmp6);
let closure_50 = ((arg0) => {
  class ChannelListCategoryWithParent {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = outer1_7(this, ChannelListCategoryWithParent);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_64(this, ChannelListCategoryWithParent, items);
      tmp2.record = arg1;
      tmp2.id = arg1.id;
      tmp2.isCollapsed = true === arg0.collapsedCategoryIds[arg1.id];
      mutedChannelIds = arg0.mutedChannelIds;
      tmp2.isMuted = mutedChannelIds.has(arg1.id);
      tmp2.channels = {};
      tmp3 = outer1_66(arg2);
      iter = tmp3();
      if (!iter.done) {
        do {
          value = iter.value;
          tmp4 = outer1_57;
          prototype = outer1_57.prototype;
          tmp5 = new.target;
          tmp6 = new.target;
          tmp7 = tmp2;
          tmp8 = value;
          tmp9 = arg3;
          tmp10 = new outer1_57(tmp2, value, arg3);
          tmp11 = tmp10;
          tmp2.channels[value.id] = tmp10;
          iter2 = tmp3();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      return tmp2;
    }
  }
  callback2(ChannelListCategoryWithParent, arg0);
  let items = [
    {
      key: "shouldShowEmptyCategory",
      value() {
        const self = this;
        const tmp = !outer1_63(ChannelListCategoryWithParent, "shouldShowEmptyCategory", this, 3)([]);
        let tmp2 = !tmp;
        if (tmp) {
          let canResult = outer1_28.can(outer1_39.MANAGE_CHANNELS, self.record);
          if (canResult) {
            canResult = outer1_28.can(outer1_39.VIEW_CHANNEL, self.record);
          }
          if (canResult) {
            canResult = outer1_1(outer1_2[33]).isEmpty(self.channels);
            const obj = outer1_1(outer1_2[33]);
          }
          let tmp10 = !canResult;
          if (!tmp10) {
            let optInEnabled = self.guild.optInEnabled;
            if (optInEnabled) {
              const optedInChannels = self.guild.optedInChannels;
              optInEnabled = !optedInChannels.has(self.id);
            }
            tmp10 = optInEnabled;
          }
          tmp2 = !tmp10;
        }
        return tmp2;
      }
    }
  ];
  return callback3(ChannelListCategoryWithParent, items);
})(tmp6);
let tmp7 = ((arg0) => {
  class ChannelListFavoritesCategory {
    constructor(arg0, arg1) {
      closure_0 = arg1;
      tmp = outer1_7(this, closure_0);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_64(this, closure_0, items);
      closure_1 = tmp2;
      tmp3 = outer1_1(outer1_2[33]);
      guildFavorites = outer1_31.getGuildFavorites(arg0.id);
      if (null == guildFavorites) {
        guildFavorites = [];
      }
      tmp3Result = tmp3(guildFavorites);
      mapped = tmp3Result.map((channelId) => outer2_25.getChannel(channelId));
      found = mapped.filter(ChannelListFavoritesCategory(outer1_2[40]).isNotNullish);
      mapped1 = found.map((arg0) => new outer2_58(closure_1, arg0, closure_0));
      iter = mapped1.keyBy((id) => id.id);
      tmp2.channels = iter.value();
      suggestedChannelId = outer1_15.getSuggestedChannelId(arg0.id);
      channel = outer1_25.getChannel(suggestedChannelId);
      tmp6 = null != channel && null != suggestedChannelId;
      if (tmp6) {
        tmp7 = outer1_58;
        obj = {};
        tmp8 = obj;
        tmp9 = arg1;
        merged = Object.assign(arg1);
        str = "activeJoinedRelevantThreads";
        obj["activeJoinedRelevantThreads"] = {};
        str2 = "activeJoinedUnreadThreads";
        obj["activeJoinedUnreadThreads"] = {};
        prototype = outer1_58.prototype;
        tmp11 = new.target;
        tmp12 = new.target;
        tmp13 = tmp2;
        tmp14 = channel;
        tmp15 = obj;
        tmp16 = new outer1_58(tmp2, channel, obj);
        tmp17 = tmp16;
        tmp2.channels[suggestedChannelId] = tmp16;
      }
      return tmp2;
    }
  }
  callback2(ChannelListFavoritesCategory, arg0);
  let obj = {
    key: "updateChannel",
    value(id) {
      const self = this;
      let isFavoriteResult = id.id in this.channels;
      if (isFavoriteResult) {
        isFavoriteResult = outer1_31.isFavorite(id.guild_id, id.id);
      }
      const suggestedChannelId = outer1_15.getSuggestedChannelId(id.guild_id);
      let tmp7 = arg1;
      if (tmp6) {
        const obj = {};
        const merged = Object.assign(arg1);
        obj["activeJoinedRelevantThreads"] = {};
        obj["activeJoinedUnreadThreads"] = {};
        tmp7 = obj;
      }
      if (id.id in self.channels) {
        if (obj2.updateChannel(id, tmp7)) {
          self.invalidate();
          let flag = true;
        }
        return flag;
      }
      let tmp12 = !tmp11;
      if (id.id in self.channels) {
        tmp12 = id.id === suggestedChannelId;
      }
      if (!tmp12) {
        tmp12 = isFavoriteResult;
      }
      flag = !tmp12;
      if (flag) {
        const channels = self.channels;
        id = id.id;
        delete tmp2[tmp];
        self.invalidate();
        flag = true;
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "getFirstVoiceChannel",
    value() {
      return null;
    }
  };
  items[1] = obj;
  return callback3(ChannelListFavoritesCategory, items);
})(tmp6);
let closure_51 = tmp7;
let tmp8 = ((arg0) => {
  class ChannelListRecentlyActiveCategory {
    constructor(arg0, arg1, arg2) {
      tmp = outer1_7(this, ChannelListRecentlyActiveCategory);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_64(this, ChannelListRecentlyActiveCategory, items);
      tmp2.enabled = false;
      tmp2.isCollapsed = outer1_16.isCollapsed(arg0.id);
      tmp2.enabled = Object.keys(arg1).length >= ChannelListRecentlyActiveCategory.MIN_READABLE_CHANNELS;
      if (tmp2.enabled) {
        _Object = Object;
        values = Object.values(arg1);
        for (let num = 0; num < values.length; num = num + 1) {
          tmp3 = values[num];
          tmp4 = outer1_21;
          tmp5 = outer1_21(tmp3.type);
          if (tmp5) {
            tmp6 = outer1_22;
            tmp5 = !outer1_22(tmp3.type);
          }
          if (tmp5) {
            tmp7 = outer1_60;
            prototype = outer1_60.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = tmp2;
            tmp11 = tmp3;
            tmp12 = arg2;
            tmp13 = new outer1_60(tmp2, tmp3, arg2);
            tmp14 = tmp13;
            tmp2.channels[tmp3.id] = tmp13;
          }
        }
      }
      return tmp2;
    }
  }
  callback2(ChannelListRecentlyActiveCategory, arg0);
  let obj = {
    key: "shouldShowEmptyCategory",
    value() {
      const self = this;
      let tmp = this.enabled && self.isCollapsed;
      if (tmp) {
        tmp = outer1_63(ChannelListRecentlyActiveCategory, "shouldShowEmptyCategory", self, 3)([]);
      }
      return tmp;
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "updateAllChannels",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      const values = Object.values(this.channels);
      return values.reduce((arg0, record) => self.updateChannel(record.record, closure_1) || arg0, false);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateChannel",
    value(type) {
      const self = this;
      if (this.enabled) {
        if (outer1_22(type.type)) {
          return null != self.channels[type.parent_id] && self.updateShownChannelIds(self.channels[type.parent_id]);
        } else if (outer1_21(type.type)) {
          const items = [type, arg1];
          if (null == self.channels[type.id]) {
            const prototype = outer1_60.prototype;
            const tmp15 = new outer1_60(self, type, arg1);
            self.channels[type.id] = tmp15;
            self.invalidate();
            let flag3 = true;
          } else {
            flag3 = self.updateShownChannelIds(tmp7) || tmp6;
          }
          return flag3;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFirstVoiceChannel",
    value() {
      return null;
    }
  };
  items[4] = {
    key: "getShownChannelIds",
    value() {
      const self = this;
      if (null != this.shownChannelIds) {
        return self.shownChannelIds;
      } else {
        const ChannelListRecentlyActiveCategory = self.isCollapsed ? tmp4.Show : tmp4.WouldShowIfUncollapsed;
        if (self.enabled) {
          const found = outer1_1(outer1_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel >= closure_0);
          const mapped = found.map((arg0) => {
            const items = [, , ];
            ({ id: arr[0], lastMessageTimestamp: arr[1], renderLevel: arr[2] } = arg0);
            return items;
          });
          const found1 = mapped.filter((arg0) => {
            let tmp2;
            let tmp3;
            [, tmp2, tmp3] = arg0;
            let tmp5 = tmp4;
            if (tmp3 !== outer2_40.Show) {
              let tmp8 = tmp7;
              if (tmp2 > 0) {
                const _Date = Date;
                tmp8 = Date.now() - tmp < constants.MAX_TIMESTAMP_DELTA;
              }
              tmp5 = tmp8;
            }
            return tmp5;
          });
          const arr2 = outer1_1(outer1_2[33])(self.channels);
          const sortByResult = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== outer2_40.Show) {
              num = ChannelListRecentlyActiveCategory(outer2_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          });
          const takeResult = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== outer2_40.Show) {
              num = ChannelListRecentlyActiveCategory(outer2_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS);
          const sortByResult1 = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== outer2_40.Show) {
              num = ChannelListRecentlyActiveCategory(outer2_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS).sortBy((arg0) => {
            let tmp;
            [, tmp] = arg0;
            return -tmp;
          });
          let items = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== outer2_40.Show) {
              num = ChannelListRecentlyActiveCategory(outer2_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS).sortBy((arg0) => {
            let tmp;
            [, tmp] = arg0;
            return -tmp;
          }).map((arg0) => {
            let tmp;
            [tmp] = arg0;
            return tmp;
          }).value();
          const iter = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== outer2_40.Show) {
              num = ChannelListRecentlyActiveCategory(outer2_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS).sortBy((arg0) => {
            let tmp;
            [, tmp] = arg0;
            return -tmp;
          }).map((arg0) => {
            let tmp;
            [tmp] = arg0;
            return tmp;
          });
        } else {
          items = [];
        }
        self.shownChannelIds = items;
      }
    }
  };
  items[5] = {
    key: "updateShownChannelIds",
    value(renderLevel) {
      const self = this;
      if (null != self.shownChannelIds) {
        if (renderLevel.renderLevel >= tmp) {
          let lastMessageTimestamp;
          if (null != self.channels[self.shownChannelIds[0]]) {
            lastMessageTimestamp = tmp8.lastMessageTimestamp;
          }
          if (renderLevel.lastMessageTimestamp > lastMessageTimestamp) {
            const shownChannelIds = self.shownChannelIds;
            const index = shownChannelIds.indexOf(renderLevel.id);
            if (index > -1) {
              const shownChannelIds1 = self.shownChannelIds;
              shownChannelIds1.splice(index, 1);
            }
            const shownChannelIds2 = self.shownChannelIds;
            shownChannelIds2.splice(0, 0, renderLevel.id);
            if (self.shownChannelIds.length > ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS) {
              const shownChannelIds3 = self.shownChannelIds;
              self.shownChannelIds = shownChannelIds3.slice(0, ChannelListRecentlyActiveCategory.MAX_RECENT_CHANNELS);
            }
            return true;
          } else {
            return false;
          }
        }
      }
      return false;
    }
  };
  return callback3(ChannelListRecentlyActiveCategory, items);
})(tmp6);
let closure_52 = tmp8;
tmp8.MIN_READABLE_CHANNELS = 7;
tmp8.MAX_RECENT_CHANNELS = 10;
tmp8.MAX_TIMESTAMP_DELTA = 604800000;
let closure_53 = ((arg0) => {
  class ChannelListRecentsCategory {
    constructor(arg0, arg1, arg2) {
      closure_0 = arg2;
      tmp = outer1_7(this, closure_0);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_64(this, closure_0, items);
      closure_1 = tmp2;
      if (arg0.optInEnabled) {
        tmp4 = outer1_14;
        if (outer1_14.isFullServerPreview(arg0.id)) {
          tmp9 = outer1_4;
          tmp8 = outer1_4(tmp2);
        } else {
          flag = false;
          tmp2.isCollapsed = false;
          tmp2.isMuted = false;
          tmp5 = outer1_1;
          tmp6 = outer1_2;
          num = 33;
          tmp7 = arg1;
          arr2 = outer1_1(outer1_2[33])(arg1);
          mapped = arr2.map((arg0) => new outer2_59(closure_1, arg0, closure_0));
          iter = mapped.keyBy((id) => id.id);
          tmp2.channels = iter.value();
          tmp8 = tmp2;
        }
        tmp10 = tmp8;
      } else {
        tmp3 = outer1_4;
        return outer1_4(tmp2);
      }
      return;
    }
  }
  callback2(ChannelListRecentsCategory, arg0);
  let obj = {
    key: "updateAllChannels",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      let c2 = false;
      const keys = outer1_1(outer1_2[41]).keys(this.channels);
      const item = keys.forEach((arg0) => {
        if (self.updateChannel(self.channels[arg0].record, closure_1)) {
          let c2 = true;
        }
      });
      return c2;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "updateChannel",
    value(id) {
      const self = this;
      const items = [id, arg1];
      if (this.guild.optInEnabled) {
        if (outer1_72(self.guild, id, arg1)) {
          if (null == self.channels[id.id]) {
            const prototype = outer1_59.prototype;
            const tmp10 = new outer1_59(self, id, arg1);
            self.channels[id.id] = tmp10;
            self.invalidate();
            return true;
          }
        }
      }
      return outer1_63(ChannelListRecentsCategory, "updateChannel", this, 3)(items);
    }
  };
  items[1] = obj;
  obj = {
    key: "getFirstVoiceChannel",
    value() {
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getShownChannelIds",
    value() {
      const self = this;
      if (null == this.shownChannelIds) {
        const values = outer1_1(outer1_2[33])(self.channels).values();
        const found = values.filter((renderLevel) => {
          let tmp = renderLevel.renderLevel === outer2_40.Show;
          if (!tmp) {
            tmp = renderLevel.renderLevel === outer2_40.WouldShowIfUncollapsed;
          }
          return tmp;
        });
        const obj = outer1_1(outer1_2[33])(self.channels);
        const sortByResult = found.sortBy((record) => record.record.position);
        const valueResult = found.sortBy((record) => record.record.position).take(5).value();
        const iter = found.sortBy((record) => record.record.position).take(5);
        const _Set = Set;
        const items = [];
        HermesBuiltin.arraySpread(valueResult, HermesBuiltin.arraySpread(found.filter((renderLevel) => renderLevel.renderLevel === outer2_40.Show).value(), 0));
        const set = new Set(items);
        const items1 = [];
        const iter2 = found.filter((renderLevel) => renderLevel.renderLevel === outer2_40.Show);
        HermesBuiltin.arraySpread(set, 0);
        const tmp14 = outer1_1(outer1_2[33]);
        const tmp14Result = outer1_1(outer1_2[33])(items1);
        const sortByResult1 = outer1_1(outer1_2[33])(items1).sortBy((record) => record.record.position);
        self.shownChannelIds = outer1_1(outer1_2[33])(items1).sortBy((record) => record.record.position).map((id) => id.id).value();
        const iter3 = outer1_1(outer1_2[33])(items1).sortBy((record) => record.record.position).map((id) => id.id);
      }
      return self.shownChannelIds;
    }
  };
  return callback3(ChannelListRecentsCategory, items);
})(tmp6);
let tmp9 = ((arg0) => {
  class ChannelListVoiceChannelsCategory {
    constructor(arg0, arg1, arg2, arg3) {
      closure_0 = arg3;
      tmp = outer1_7(this, closure_0);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_64(this, closure_0, items);
      closure_1 = tmp2;
      tmp2.categoriesById = arg2;
      tmp2.hiddenChannelIds = null;
      if (arg0.optInEnabled) {
        tmp5 = outer1_34;
        tmp2.isCollapsed = outer1_34.isVoiceCategoryCollapsed(arg0.id);
        flag = false;
        tmp2.isMuted = false;
        tmp2.categoriesById = arg2;
        tmp6 = outer1_1;
        tmp7 = outer1_2;
        num = 33;
        tmp8 = arg1;
        arr2 = outer1_1(outer1_2[33])(arg1);
        mapped = arr2.map((arg0) => new outer2_61(closure_1, arg0, closure_0));
        iter = mapped.keyBy((id) => id.id);
        tmp2.channels = iter.value();
        tmp4 = tmp2;
      } else {
        tmp3 = outer1_4;
        tmp4 = outer1_4(tmp2);
      }
      return tmp4;
    }
  }
  callback2(ChannelListVoiceChannelsCategory, arg0);
  let obj = {
    key: "invalidate",
    value() {
      outer1_63(ChannelListVoiceChannelsCategory, "invalidate", this, 3)([]);
      this.hiddenChannelIds = null;
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getHiddenChannelIds",
    value() {
      const self = this;
      if (this.guild.optInEnabled) {
        if (null == self.hiddenChannelIds) {
          const arr = outer1_1(outer1_2[33])(self.channels);
          const valueResult = outer1_1(outer1_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel === outer2_40.WouldShowIfUncollapsed).value();
          if (valueResult.every((record) => {
            record = record.record;
            return record.isCategory();
          })) {
            self.hiddenChannelIds = [];
            return self.hiddenChannelIds;
          } else {
            self.hiddenChannelIds = valueResult.map((id) => id.id);
          }
          const iter = outer1_1(outer1_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel === outer2_40.WouldShowIfUncollapsed);
        }
        return self.hiddenChannelIds;
      } else {
        return [];
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getRows",
    value() {
      const self = this;
      if (this.guild.optInEnabled) {
        const shownChannelIds = self.getShownChannelIds();
        let tmp = shownChannelIds;
        if (0 === shownChannelIds.length) {
          tmp = shownChannelIds;
          if (self.getHiddenChannelIds().length > 0) {
            const items = ["placeholder-channel-id"];
            tmp = items;
          }
        }
        return tmp;
      } else {
        return [];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getShownChannelIds",
    value() {
      let self = this;
      self = this;
      if (this.guild.optInEnabled) {
        if (null == self.shownChannelIds) {
          const found = outer1_1(outer1_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel === outer2_40.Show);
          const items = [
            (record) => {
                  if (record.record.type === outer2_36.GUILD_CATEGORY) {
                    let num2 = record.record.position;
                  } else {
                    num2 = -1;
                    if (null != record.record.parent_id) {
                      let position;
                      if (null != tmp[record.record.parent_id]) {
                        position = tmp3.position;
                      }
                      num2 = -1;
                      if (null != position) {
                        num2 = position;
                      }
                    }
                  }
                  return num2;
                },
            (record) => {
                  let num = -1;
                  if (record.record.type !== outer2_36.GUILD_CATEGORY) {
                    num = record.record.position;
                  }
                  return num;
                }
          ];
          const arr2 = outer1_1(outer1_2[33])(self.channels);
          const valueResult = found.orderBy(items, ["asc", "asc"]).value();
          self.shownChannelIds = [];
          for (let num = 0; num < valueResult.length; num = num + 1) {
            let tmp2 = valueResult[num];
            let tmp3 = num < valueResult.length - 1;
            if (tmp3) {
              let tmp4 = outer1_36;
              tmp3 = tmp2.record.type === outer1_36.GUILD_CATEGORY;
            }
            if (tmp3) {
              let tmp5 = valueResult[num + 1];
              let type;
              if (null != tmp5) {
                type = tmp5.record.type;
              }
              let tmp7 = outer1_36;
              tmp3 = type === outer1_36.GUILD_CATEGORY;
              let tmp8 = tmp5;
            }
            if (!tmp3) {
              let tmp9 = num === valueResult.length - 1;
              if (tmp9) {
                let tmp10 = outer1_36;
                tmp9 = tmp2.record.type === outer1_36.GUILD_CATEGORY;
              }
              if (!tmp9) {
                let shownChannelIds = self.shownChannelIds;
                let arr = shownChannelIds.push(tmp2.id);
              }
            }
          }
          const iter = found.orderBy(items, ["asc", "asc"]);
        }
        return self.shownChannelIds;
      } else {
        return [];
      }
    }
  };
  items[4] = {
    key: "getFirstVoiceChannel",
    value() {
      return null;
    }
  };
  return callback3(ChannelListVoiceChannelsCategory, items);
})(tmp6);
let closure_54 = tmp9;
let closure_55 = (() => {
  class ChannelListChannelNoticeSection {
    constructor(arg0) {
      tmp = outer1_7(this, ChannelListChannelNoticeSection);
      this.rows = arg0;
      return;
    }
  }
  let obj = {
    key: "isEmpty",
    value() {
      return 0 === this.rows.length;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getRows",
    value() {
      return this.rows;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRow",
    value(arg0) {
      return this.rows[arg0];
    }
  };
  items[2] = obj;
  return callback3(ChannelListChannelNoticeSection, items);
})();
let closure_56 = (() => {
  class ChannelListGuildActionSection {
    constructor(arg0, arg1) {
      tmp = outer1_7(this, ChannelListGuildActionSection);
      this.guildActionRows = arg0.map(String);
      if (arg1) {
        guildActionRows = this.guildActionRows;
        _String = String;
        tmp2 = outer1_35;
        arr = guildActionRows.push(String(outer1_35.GUILD_DIRECTORY));
      }
      return;
    }
  }
  let obj = {
    key: "isEmpty",
    value() {
      return 0 === this.guildActionRows.length;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getRows",
    value() {
      return this.guildActionRows;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRow",
    value(arg0) {
      return this.guildActionRows[arg0];
    }
  };
  items[2] = obj;
  return callback3(ChannelListGuildActionSection, items);
})();
let tmp10 = (() => {
  class BaseChannelListChannel {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_7(this, BaseChannelListChannel);
      this.category = arg0;
      this.record = arg1;
      this.position = -1;
      this.threadIds = [];
      this.threadCount = 0;
      this.subtitle = null;
      this.renderLevel = outer1_40.CannotShow;
      this.id = arg1.id;
      state = this.computeState(arg2);
      ({ renderLevel, threadIds } = state);
      this.renderLevel = renderLevel;
      obj = outer1_1(outer1_2[33]);
      this.threadCount = obj.size(threadIds);
      this.threadIds = threadIds;
      if (renderLevel === outer1_40.Show) {
        self.subtitle = self.computeSubtitle();
      }
      return;
    }
  }
  let obj = {
    key: "isMuted",
    get() {
      const mutedChannelIds = this.category.guild.mutedChannelIds;
      return mutedChannelIds.has(this.id);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "isCollapsed",
    get() {
      return outer1_26.isCollapsed(this.id);
    }
  };
  items[1] = obj;
  obj = {
    key: "isFirstVoiceChannel",
    get() {
      const category = this.category;
      return category.getFirstVoiceChannel() === this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastMessageTimestamp",
    get() {
      const items = [outer1_29.lastMessageTimestamp(this.id), ...threadIds.map(outer1_29.lastMessageTimestamp)];
      threadIds = this.threadIds;
      return Math.max.apply(items);
    }
  };
  items[4] = {
    key: "updateChannel",
    value(record) {
      const self = this;
      let flag = false;
      if (tmp) {
        self.record = record;
        flag = true;
      }
      const state = self.computeState(arg1);
      let isEqualResult = state.renderLevel === self.renderLevel;
      if (isEqualResult) {
        isEqualResult = outer1_1(outer1_2[33]).isEqual(state.threadIds, self.threadIds);
        const obj = outer1_1(outer1_2[33]);
      }
      if (!isEqualResult) {
        ({ renderLevel: self.renderLevel, threadIds: self.threadIds } = state);
        self.threadCount = outer1_1(outer1_2[33]).size(state.threadIds);
        flag = true;
        const obj2 = outer1_1(outer1_2[33]);
      }
      if (tmp8) {
        flag = true;
      }
      return flag;
    }
  };
  items[5] = {
    key: "updateSubtitle",
    value() {
      const subtitle = this.computeSubtitle();
      let flag = !outer1_1(outer1_2[33]).isEqual(this.subtitle, subtitle);
      if (flag) {
        this.subtitle = subtitle;
        flag = true;
      }
      return flag;
    }
  };
  items[6] = {
    key: "computeSubtitle",
    value() {
      const self = this;
      let isCollapsed = this.isCollapsed;
      if (!isCollapsed) {
        isCollapsed = self.category.isCollapsed;
      }
      return outer1_68(this.record, isCollapsed, self.category.guild.optInEnabled);
    }
  };
  return callback3(BaseChannelListChannel, items);
})();
let tmp11 = ((arg0) => {
  class ChannelListChannelImpl {
    constructor() {
      tmp = outer1_7(this, ChannelListChannelImpl);
      return outer1_64(this, ChannelListChannelImpl, arguments);
    }
  }
  callback2(ChannelListChannelImpl, arg0);
  const items = [
    {
      key: "computeState",
      value(arg0) {
        let activeJoinedRelevantThreads;
        let activeJoinedUnreadThreads;
        let selectedChannel;
        let selectedVoiceChannelId;
        const self = this;
        ({ selectedChannel, selectedVoiceChannelId } = arg0);
        ({ activeJoinedRelevantThreads, activeJoinedUnreadThreads } = arg0);
        if (!outer1_28.can(outer1_39.VIEW_CHANNEL, this.record)) {
          if (self.id === selectedVoiceChannelId) {
            let obj = { renderLevel: outer1_40.Show, threadIds: [] };
            return obj;
          } else if (!outer1_12.isChannelGatedAndVisible(self.record.guild_id, self.record.id)) {
            obj = { renderLevel: outer1_40.CannotShow, threadIds: [] };
            return obj;
          }
        }
        const parent_id = self.record.parent_id;
        const guild = self.category.guild;
        if (outer1_70(guild, self.record)) {
          obj = { renderLevel: outer1_40.CannotShow, threadIds: [] };
          return obj;
        } else {
          let id;
          if (null != selectedChannel) {
            id = selectedChannel.id;
          }
          const tmp7 = null != selectedChannel && selectedChannel.isThread() && selectedChannel.parent_id === self.id;
          if (!(id === self.id || selectedVoiceChannelId === self.id)) {
            if (!tmp7) {
              let obj1 = activeJoinedUnreadThreads[self.id];
            }
            if (null == obj1) {
              obj1 = {};
            }
            const tmp12 = outer1_69(self.record, obj1, selectedChannel, selectedVoiceChannelId, guild.hideMutedChannels);
            if (self.id === guild.moderatorReportChannelId) {
              const obj2 = { renderLevel: outer1_40.DoNotShow, threadIds: tmp12 };
              return obj2;
            } else {
              if (guild.optInEnabled) {
                if (guild.hideResourceChannels) {
                  const record = self.record;
                  if (record.hasFlag(outer1_38.IS_GUILD_RESOURCE_CHANNEL)) {
                    const obj3 = { renderLevel: tmp6 ? outer1_40.Show : outer1_40.CannotShow, threadIds: tmp12 };
                    return obj3;
                  }
                }
              }
              if (guild.optInEnabled) {
                const optedInChannels = guild.optedInChannels;
                if (!optedInChannels.has(self.id)) {
                  if (null != parent_id) {
                    const optedInChannels2 = guild.optedInChannels;
                  }
                  let obj4 = { renderLevel: outer1_40.DoNotShow, threadIds: tmp12 };
                  return obj4;
                }
              }
              if (!tmp6) {
                if (!tmp7) {
                  obj4 = outer1_1(outer1_2[33]);
                  if (obj4.isEmpty(tmp12)) {
                    if (outer1_29.getMentionCount(self.id) <= 0) {
                      if (guild.hideMutedChannels) {
                        const mutedChannelIds = guild.mutedChannelIds;
                        if (mutedChannelIds.has(self.id)) {
                          const obj5 = { renderLevel: outer1_40.DoNotShow, threadIds: tmp12 };
                          return obj5;
                        }
                      }
                      if (self.category.isCollapsed) {
                        const mutedChannelIds2 = guild.mutedChannelIds;
                        if (!mutedChannelIds2.has(self.id)) {
                          if (null != parent_id) {
                            const mutedChannelIds3 = guild.mutedChannelIds;
                          }
                          const record2 = self.record;
                          if (!record2.isGuildVocal()) {
                            if (self.record.type !== outer1_36.GUILD_STORE) {
                              if (outer1_21(self.record.type)) {
                                if (!outer1_29.hasUnread(self.record.id)) {
                                  const obj6 = { renderLevel: outer1_40.WouldShowIfUncollapsed, threadIds: tmp12 };
                                  return obj6;
                                }
                              }
                            }
                          }
                          const obj7 = { renderLevel: outer1_40.WouldShowIfUncollapsed, threadIds: tmp12 };
                          return obj7;
                        }
                        const obj8 = { renderLevel: outer1_40.WouldShowIfUncollapsed, threadIds: tmp12 };
                        return obj8;
                      }
                      const obj9 = { renderLevel: outer1_40.Show, threadIds: tmp12 };
                      return obj9;
                    }
                  }
                }
              }
              const obj10 = { renderLevel: outer1_40.Show, threadIds: tmp12 };
              return obj10;
            }
          }
          obj1 = activeJoinedRelevantThreads[self.id];
        }
      }
    }
  ];
  return callback3(ChannelListChannelImpl, items);
})(tmp10);
let closure_57 = tmp11;
let closure_58 = ((arg0) => {
  class FavoritesChannelListChannel {
    constructor() {
      tmp = outer1_7(this, FavoritesChannelListChannel);
      return outer1_64(this, FavoritesChannelListChannel, arguments);
    }
  }
  callback2(FavoritesChannelListChannel, arg0);
  const items = [
    {
      key: "computeState",
      value(arg0) {
        let selectedChannel;
        let selectedVoiceChannelId;
        const self = this;
        ({ selectedChannel, selectedVoiceChannelId } = arg0);
        let obj = {};
        if (outer1_28.can(outer1_39.VIEW_CHANNEL, this.record)) {
          obj.renderLevel = tmp.Show;
          const record = self.record;
          obj = arg0.activeJoinedRelevantThreads[self.id];
          if (null == obj) {
            obj = {};
          }
          obj.threadIds = outer1_69(record, obj, selectedChannel, selectedVoiceChannelId, false);
          let tmp2 = obj;
          const tmp3 = outer1_69;
        } else {
          obj.renderLevel = tmp.CannotShow;
          obj.threadIds = [];
          tmp2 = obj;
        }
        return tmp2;
      }
    }
  ];
  return callback3(FavoritesChannelListChannel, items);
})(tmp10);
let closure_59 = ((arg0) => {
  class RecentsChannelListChannel {
    constructor() {
      tmp = outer1_7(this, RecentsChannelListChannel);
      return outer1_64(this, RecentsChannelListChannel, arguments);
    }
  }
  callback2(RecentsChannelListChannel, arg0);
  const items = [
    {
      key: "computeState",
      value(arg0) {
        let activeJoinedRelevantThreads;
        let selectedChannel;
        let selectedVoiceChannelId;
        let tmp = arg0;
        let self = this;
        ({ selectedChannel, selectedVoiceChannelId, activeJoinedRelevantThreads } = arg0);
        if (outer1_28.can(outer1_39.VIEW_CHANNEL, this.record)) {
          let obj = {};
          if (outer1_72(self.category.guild, self.record, tmp)) {
            tmp = outer1_40;
            obj.renderLevel = outer1_71(self, tmp) ? tmp.Show : tmp.WouldShowIfUncollapsed;
            const record = self.record;
            activeJoinedRelevantThreads = activeJoinedRelevantThreads[self.id];
            if (null == activeJoinedRelevantThreads) {
              activeJoinedRelevantThreads = {};
            }
            self = outer1_69(record, activeJoinedRelevantThreads, selectedChannel, selectedVoiceChannelId, false);
            obj.threadIds = self;
            let tmp5 = obj;
            const tmp7 = outer1_71(self, tmp);
            const tmp8 = outer1_69;
          } else {
            obj.renderLevel = outer1_40.DoNotShow;
            obj.threadIds = [];
            tmp5 = obj;
          }
        } else {
          obj = { renderLevel: outer1_40.CannotShow, threadIds: [] };
          return obj;
        }
      }
    }
  ];
  return callback3(RecentsChannelListChannel, items);
})(tmp10);
let closure_60 = ((arg0) => {
  class RecentlyActiveChannelListChannel {
    constructor() {
      tmp = outer1_7(this, RecentlyActiveChannelListChannel);
      return outer1_64(this, RecentlyActiveChannelListChannel, arguments);
    }
  }
  callback2(RecentlyActiveChannelListChannel, arg0);
  let items = [
    {
      key: "computeState",
      value(arg0) {
        let renderLevel;
        let threadIds;
        const self = this;
        const items = [arg0];
        ({ renderLevel, threadIds } = outer1_63(RecentlyActiveChannelListChannel, "computeState", this, 3)(items));
        let sortByResult = threadIds;
        let tmp3 = renderLevel;
        if (renderLevel > outer1_40.CannotShow) {
          const parent_id = self.record.parent_id;
          const guild = self.category.guild;
          const mutedChannelIds2 = guild.mutedChannelIds;
          if (!mutedChannelIds2.has(self.id)) {
            if (null != parent_id) {
              const mutedChannelIds = guild.mutedChannelIds;
              let tmp13 = renderLevel === outer1_40.WouldShowIfUncollapsed;
              if (tmp13) {
                tmp13 = outer1_71(self, arg0);
              }
              if (tmp13) {
                renderLevel = outer1_40.Show;
              }
              let obj = outer1_1(outer1_2[33]);
              sortByResult = obj.sortBy(threadIds, (arg0) => -outer2_29.lastMessageTimestamp(arg0));
              tmp3 = renderLevel;
            }
            let tmp6 = renderLevel === outer1_40.Show;
            if (!tmp6) {
              let tmp8 = renderLevel === outer1_40.DoNotShow;
              if (tmp8) {
                tmp8 = outer1_72(self.category.guild, self.record, arg0);
              }
              tmp6 = tmp8;
            }
            if (tmp6) {
              renderLevel = outer1_40.WouldShowIfUncollapsed;
            }
          }
          renderLevel = outer1_40.DoNotShow;
        }
        obj = { renderLevel: tmp3, threadIds: sortByResult };
        return obj;
      }
    }
  ];
  return callback3(RecentlyActiveChannelListChannel, items);
})(tmp11);
let closure_61 = ((arg0) => {
  class VoiceChannelListChannel {
    constructor() {
      tmp = outer1_7(this, VoiceChannelListChannel);
      return outer1_64(this, VoiceChannelListChannel, arguments);
    }
  }
  callback2(VoiceChannelListChannel, arg0);
  let obj = {
    key: "getRenderLevel",
    value(arg0) {
      const self = this;
      if (outer1_28.can(outer1_39.VIEW_CHANNEL, this.record)) {
        if (arg0 !== tmp.Show) {
          if (arg0 !== outer1_40.WouldShowIfUncollapsed) {
            if (!outer1_70(this.category.guild, self.record)) {
              if (self.category.isCollapsed) {
                outer1_1(outer1_2[33]).some(outer1_32.getVoiceStatesForChannel(self.record.id)) ? outer1_40.Show : outer1_40.WouldShowIfUncollapsed;
                const obj = outer1_1(outer1_2[33]);
              } else {
                let CannotShow = outer1_40.Show;
              }
            }
          }
        }
        CannotShow = outer1_40.CannotShow;
      } else {
        return tmp.CannotShow;
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "computeState",
    value(arg0) {
      const self = this;
      const items = [arg0];
      const renderLevel = this.getRenderLevel(outer1_63(VoiceChannelListChannel, "computeState", this, 3)(items).renderLevel);
      if (renderLevel === outer1_40.Show) {
        let isCollapsed = self.isCollapsed;
        if (!isCollapsed) {
          isCollapsed = self.category.isCollapsed;
        }
        self.subtitle = outer1_68(self.record, isCollapsed, self.category.guild.optInEnabled);
        const tmp2 = outer1_68;
      }
      return { threadIds: [], renderLevel };
    }
  };
  items[1] = obj;
  return callback3(VoiceChannelListChannel, items);
})(tmp11);
const set1 = new Set(Object.values(ChannelListGuildActionRow));
let result = set.fileFinishedImporting("modules/guild_sidebar/ChannelListState.tsx");

export default (() => {
  class ChannelListStates {
    constructor() {
      tmp = outer1_7(this, ChannelListStates);
      this.guilds = {};
      return;
    }
  }
  let obj = {
    key: "_areGuildActionRowsUpdated",
    value(arg0, arg1) {
      let found;
      if (null != this.guilds[arg0]) {
        const guildActionSection = obj2.getGuildActionSection();
        const rows = guildActionSection.getRows();
        found = rows.filter((arg0) => !outer2_47.has(arg0));
      }
      return !outer1_1(outer1_2[33]).isEqual(found, arg1);
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "_areChannelNoticeRowsUpdated",
    value(arg0, arg1) {
      let rows;
      if (null != this.guilds[arg0]) {
        const channelNoticeSection = obj2.getChannelNoticeSection();
        rows = channelNoticeSection.getRows();
      }
      return !outer1_1(outer1_2[33]).isEqual(rows, arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "_areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow",
    value(arg0) {
      if (null == this.guilds[arg0]) {
        return false;
      } else {
        const categoryFromSection = obj.getCategoryFromSection(obj.voiceChannelsSectionNumber);
        const categoryFromSection1 = obj.getCategoryFromSection(obj.recentsSectionNumber);
        for (const key10005 in categoryFromSection1.channels) {
          let tmp7 = key10005;
          let tmp8 = categoryFromSection1.channels[key10005];
          let tmp9 = outer1_40;
          if (tmp8.renderLevel !== outer1_40.DoNotShow) {
            continue;
          } else {
            let record = tmp8.record;
            if (!record.isGuildVocal()) {
              continue;
            } else {
              if (null != categoryFromSection.channels[tmp8.id]) {
                continue;
              } else {
                let tmp = outer1_1;
                let tmp2 = outer1_2;
                let obj2 = outer1_1(outer1_2[33]);
                let tmp3 = outer1_32;
                if (!obj2.some(outer1_32.getVoiceStatesForChannel(tmp8.id))) {
                  continue;
                } else {
                  let tmp4 = outer1_29;
                  if (outer1_29.getMentionCount(tmp8.id) <= 0) {
                    continue;
                  } else {
                    let flag3 = true;
                    return true;
                  }
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        return false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuild",
    value(arg0, arg1, arg2) {
      const self = this;
      let result = !tmp;
      if (arg0 in this.guilds) {
        result = self._areGuildActionRowsUpdated(arg0, arg1);
      }
      if (!result) {
        result = self._areChannelNoticeRowsUpdated(arg0, arg2);
      }
      if (!result) {
        result = self._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(arg0);
      }
      if (result) {
        const prototype = outer1_48.prototype;
        const tmp9 = new outer1_48(arg0, arg1, arg2);
        self.guilds[arg0] = tmp9;
      }
      return self.guilds[arg0];
    }
  };
  items[4] = {
    key: "getGuildChannelRowsOnly",
    value(arg0) {
      const self = this;
      if (!(arg0 in this.guilds)) {
        const prototype = outer1_48.prototype;
        const tmp5 = new outer1_48(arg0, [], []);
        self.guilds[arg0] = tmp5;
      }
      return self.guilds[arg0];
    }
  };
  items[5] = {
    key: "clear",
    value() {
      this.guilds = {};
    }
  };
  items[6] = {
    key: "clearGuildId",
    value(arg0) {
      const self = this;
      let flag = null != arg0 && arg0 in self.guilds;
      if (flag) {
        const guilds = self.guilds;
        delete tmp[tmp2];
        flag = true;
      }
      return flag;
    }
  };
  items[7] = {
    key: "updateRecentsCategory",
    value(arg0) {
      const self = this;
      let tmp = null != arg0 && arg0 in self.guilds;
      if (tmp) {
        let result;
        if (null != self.guilds[arg0]) {
          result = obj.updateRecentsCategory();
        }
        tmp = null != result && result;
        const tmp3 = null != result && result;
      }
      return tmp;
    }
  };
  items[8] = {
    key: "nonPositionalChannelIdUpdate",
    value(channelId) {
      const self = this;
      let basicChannel = outer1_25.getBasicChannel(channelId);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        let tmp3 = null != basicChannel.guild_id;
        if (tmp3) {
          let tmp4 = null != self.guilds[basicChannel.guild_id];
          if (tmp4) {
            let result = basicChannel instanceof outer1_20;
            if (!result) {
              const channel = outer1_25.getChannel(channelId);
              result = null != channel;
              basicChannel = channel;
            }
            if (result) {
              result = self.nonPositionalChannelUpdate(basicChannel);
            }
            tmp4 = result;
          }
          tmp3 = tmp4;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "nonPositionalChannelUpdate",
    value(guild_id) {
      const self = this;
      if (null == guild_id.guild_id) {
        return false;
      } else if (null == self.guilds[guild_id.guild_id]) {
        return false;
      } else {
        let flag = false;
        if (guild_id.isThread()) {
          flag = self.nonPositionalChannelIdUpdate(guild_id.parent_id);
        }
        return obj.nonPositionalChannelUpdate(guild_id) || flag;
      }
    }
  };
  items[10] = {
    key: "updateSubtitles",
    value(arg0, arg1) {
      const self = this;
      let closure_0 = arg1;
      if (null == arg0) {
        const _Object = Object;
        let items = Object.values(self.guilds);
      } else if (arg0 in self.guilds) {
        items = [self.guilds[arg0]];
      } else {
        items = [];
      }
      const item = items.forEach((updateSubtitles) => updateSubtitles.updateSubtitles(closure_0));
    }
  };
  return callback3(ChannelListStates, items);
})();
export const MAX_NEW_CHANNELS_TO_SHOW = 2;
export const ChannelListSections = obj;
export const SECTION_INDEX_CHANNEL_NOTICES = CHANNEL_NOTICES;
export const SECTION_INDEX_GUILD_ACTIONS = GUILD_ACTIONS;
export const SECTION_INDEX_FAVORITES = FAVORITES;
export const SECTION_INDEX_RECENTS = RECENTS;
export const SECTION_INDEX_UNCATEGORIZED_CHANNELS = UNCATEGORIZED_CHANNELS;
export const SECTION_INDEX_FIRST_NAMED_CATEGORY = FIRST_NAMED_CATEGORY;
export const ChannelListFavoritesCategory = tmp7;
export const ChannelListVoiceChannelsCategory = tmp9;
export const computeSubtitle = _computeSubtitle;
export { computeThreadIds };
