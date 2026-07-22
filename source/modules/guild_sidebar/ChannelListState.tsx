// Module ID: 6755
// Function ID: 52726
// Name: _superPropGet
// Dependencies: [6, 7, 15, 17, 18, 1316, 1194, 1348, 1907, 1917, 1838, 4138, 4321, 653, 664, 5656, 686, 5066, 21, 566, 2, 1838, 3756, 4321, 1849, 653, 566, 2, 5087, 5086, 2, 6, 7, 15, 17, 18, 57, 3809, 1196, 1849, 6765, 1387, 21, 6766]

// Module 6755 (_superPropGet)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import module_664 from "module_664";
import SidebarType from "SidebarType";
import dispatcher from "dispatcher";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import initialize from "initialize";
import closure_26 from "result2";
import closure_27 from "_createForOfIteratorHelperLoose";
import closure_28 from "_isNativeReflectConstruct";
import closure_29 from "_isNativeReflectConstruct";
import closure_30 from "_isNativeReflectConstruct";
import closure_31 from "ME";
import closure_32 from "initialize";
import closure_33 from "result2";
import closure_34 from "_isNativeReflectConstruct";
import { ChannelListGuildActionRow } from "useDesignToggle";
import result2 from "result2";
import { ChannelFlags } from "_classCallCheck";
import { Permissions } from "_defineProperties";
import maybeFetchCollectiblesForInvoices from "maybeFetchCollectiblesForInvoices";

function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _classCallCheck(_possibleConstructorReturn(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
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
  return _defineProperties(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
          let obj1 = arg1(dependencyMap[42]);
          if (obj1.hasStream(tmp18)) {
            obj = { type: "go-live" };
            return obj;
          }
        }
      }
      const channelStatus = channelStatus.getChannelStatus(type);
      if (null != channelStatus) {
        if (channelStatus.length > 0) {
          obj1 = { type: "voice", text: channelStatus };
          return obj1;
        }
      }
      const embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(type.id);
      const mapped = embeddedActivitiesForChannel.map((applicationId) => {
        const application = application.getApplication(applicationId.applicationId);
        let name;
        if (null != application) {
          name = application.name;
        }
        return name;
      });
      const found = mapped.filter(arg1(dependencyMap[40]).isNotNullish);
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
function computeThreadIds(id, activeJoinedUnreadThreadsForParent, closure_2, _classCallCheck, closure_1) {
  let arr = closure_2;
  let tmp = null != closure_2;
  if (tmp) {
    let tmp2 = arr.id === id.id;
    if (!tmp2) {
      tmp2 = _classCallCheck === id.id;
    }
    tmp = tmp2;
  }
  if (set.has(id.type)) {
    const _Object = Object;
    const obj2 = importDefault(dependencyMap[33]);
    const mapped = importDefault(dependencyMap[33]).sortBy(Object.values(activeJoinedUnreadThreadsForParent), (joinTimestamp) => -joinTimestamp.joinTimestamp).map((channel) => channel.channel.id);
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
      if (closure_1) {
        found = mapped.filter((id) => {
          let tmp = !muted.isMuted(id);
          if (!tmp) {
            tmp = mentionCount.getMentionCount(id) > 0;
          }
          return tmp;
        });
      }
    }
    const sortByResult = importDefault(dependencyMap[33]).sortBy(Object.values(activeJoinedUnreadThreadsForParent), (joinTimestamp) => -joinTimestamp.joinTimestamp);
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
      let tmp7 = closure_29;
      if (closure_29.getMentionCount(key10009) <= 0) {
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
          const obj = importDefault(dependencyMap[33]);
        } else {
          return false;
        }
      }
      if (store3.getMentionCount(type.id) > 0) {
        return true;
      } else {
        for (const key10050 in tmp[arg1.id]) {
          let tmp17 = key10050;
          let tmp18 = closure_29;
          if (closure_29.getMentionCount(key10050) > 0) {
            let flag5 = true;
            return true;
          } else {
            let tmp9 = closure_29;
            if (closure_29.hasUnread(key10050)) {
              let flag4 = true;
              return true;
            } else {
              let tmp10 = closure_29;
              if (!closure_29.hasRecentlyVisitedAndRead(key10050)) {
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
          const sorted = Array.from(newChannelIds).sort((arg0, arg1) => callback(closure_2[41]).compare(arg1, arg0));
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
({ ChannelRecordBase: closure_20, isGuildReadableType: closure_21, isThread: closure_22, THREADED_CHANNEL_TYPES: closure_23 } = _createForOfIteratorHelperLoose);
({ ChannelTypes: closure_36, GuildFeatures: closure_37 } = result2);
let closure_40 = { CannotShow: 1, [1]: "CannotShow", DoNotShow: 2, [2]: "DoNotShow", WouldShowIfUncollapsed: 3, [3]: "WouldShowIfUncollapsed", Show: 4, [4]: "Show" };
const obj = { CHANNEL_NOTICES: 0, [0]: "CHANNEL_NOTICES", GUILD_ACTIONS: 1, [1]: "GUILD_ACTIONS", FAVORITES: 2, [2]: "FAVORITES", RECENTS: 3, [3]: "RECENTS", UNCATEGORIZED_CHANNELS: 4, [4]: "UNCATEGORIZED_CHANNELS", FIRST_NAMED_CATEGORY: 5, [5]: "FIRST_NAMED_CATEGORY" };
const CHANNEL_NOTICES = obj.CHANNEL_NOTICES;
const GUILD_ACTIONS = obj.GUILD_ACTIONS;
const FAVORITES = obj.FAVORITES;
const RECENTS = obj.RECENTS;
const UNCATEGORIZED_CHANNELS = obj.UNCATEGORIZED_CHANNELS;
const FIRST_NAMED_CATEGORY = obj.FIRST_NAMED_CATEGORY;
const items = [String(ChannelListGuildActionRow.GUILD_DIRECTORY)];
const set = new Set(items);
let closure_48 = () => {
  class ChannelListImpl {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = _inherits(this, ChannelListImpl);
      this.id = arg0;
      this.sortedNamedCategories = null;
      this.sections = null;
      this.rows = null;
      this.firstVoiceChannel = undefined;
      this.allChannelsById = null;
      this.version = 0;
      this.hideMutedChannels = closure_31.isGuildCollapsed(this.id);
      this.mutedChannelIds = closure_31.getMutedChannels(this.id);
      optedInChannelsWithPendingUpdates = closure_31.getOptedInChannelsWithPendingUpdates(this.id);
      if (null == optedInChannelsWithPendingUpdates) {
        tmp3 = closure_31;
        optedInChannelsWithPendingUpdates = closure_31.getOptedInChannels(self.id);
      }
      self.optedInChannels = optedInChannelsWithPendingUpdates;
      obj = ChannelListImpl(closure_2[34]);
      self.optInEnabled = obj.isOptInEnabledForGuild(self.id);
      obj2 = ChannelListImpl(closure_2[35]);
      self.hideResourceChannels = obj2.canSeeOnboardingHome(self.id);
      guildFavorites = closure_31.getGuildFavorites(self.id);
      if (null == guildFavorites) {
        guildFavorites = [];
      }
      set = new Set(guildFavorites);
      self.favoriteChannelIds = set;
      self.suggestedFavoriteChannelId = closure_15.getSuggestedChannelId(self.id);
      self.collapsedCategoryIds = DISCORD_EPOCH.getCollapsedCategories();
      mutableGuildChannelsForGuild = initialize.getMutableGuildChannelsForGuild(self.id);
      guild = closure_27.getGuild(self.id);
      tmp8 = null;
      if (null != guild) {
        tmp6 = closure_1;
        tmp9 = closure_2;
        num = 36;
        tmp8 = closure_1(closure_2[36])(guild);
      }
      self.moderatorReportChannelId = tmp8;
      tmp10 = null != guild;
      if (tmp10) {
        tmp6 = closure_1;
        tmp11 = closure_2;
        num2 = 37;
        tmp10 = closure_1(closure_2[37])(guild);
      }
      self.moderatorReportChannelEnabled = tmp10;
      obj = {};
      items = [];
      obj1 = {};
      for (const key10078 in mutableGuildChannelsForGuild) {
        tmp45 = key10078;
        tmp46 = mutableGuildChannelsForGuild[key10078];
        tmp47 = closure_36;
        GUILD_CATEGORY = closure_36.GUILD_CATEGORY;
        if (tmp46.type !== GUILD_CATEGORY) {
          continue;
        } else {
          obj[tmp46.id] = tmp46;
          obj1[tmp46.id] = [];
          // continue
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
        tmp49 = closure_36;
        if (obj7.type === closure_36.GUILD_CATEGORY) {
          continue;
        } else {
          if (obj7.isGameInvitesChannel()) {
            continue;
          } else {
            tmp12 = closure_36;
            if (obj7.type !== closure_36.GUILD_DIRECTORY) {
              tmp16 = closure_72;
              if (closure_72(self, obj7, initializationData)) {
                arr = items1.push(obj7);
              } else {
                tmp17 = closure_36;
                tmp18 = obj7.type !== closure_36.GUILD_VOICE;
                if (!tmp18) {
                } else {
                  tmp19 = closure_36;
                  tmp18 = obj7.type !== closure_36.GUILD_STAGE_VOICE;
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
                // continue
              }
              arr4 = items.push(obj7);
              // continue
            } else {
              hasItem = null == guild;
              if (hasItem) {
              } else {
                features = guild.features;
                tmp14 = closure_37;
                hasItem = features.has(closure_37.HUB);
              }
              if (hasItem) {
                continue;
              } else {
                arr5 = items3.push(obj7);
                // continue
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
        tmp51 = closure_50;
        prototype3 = closure_50.prototype;
        tmp52 = new.target;
        tmp53 = new.target;
        tmp54 = self;
        tmp55 = initializationData;
        tmp56 = new closure_50(self, obj[key10134], obj1[key10134], initializationData);
        tmp57 = tmp56;
        self.categories[key10134] = tmp56;
      }
      self.recentsSectionNumber = closure_44;
      self.favoritesSectionNumber = closure_43;
      tmp26 = new closure_49(self, items, initializationData);
      self.noParentCategory = tmp26;
      tmp27 = new closure_51(self, initializationData);
      self.favoritesCategory = tmp27;
      obj5 = ChannelListImpl(closure_2[38]);
      if (obj5.isRecentlyActiveChannelsEnabled()) {
        tmp35 = closure_52;
        prototype2 = closure_52.prototype;
        tmp36 = new.target;
        tmp37 = new.target;
        tmp38 = self;
        tmp39 = mutableGuildChannelsForGuild;
        tmp40 = initializationData;
        tmp34 = new closure_52(self, mutableGuildChannelsForGuild, initializationData);
      } else {
        tmp28 = closure_53;
        prototype = closure_53.prototype;
        tmp29 = new.target;
        tmp30 = new.target;
        tmp31 = self;
        tmp32 = items1;
        tmp33 = initializationData;
        tmp34 = new closure_53(self, items1, initializationData);
      }
      self.recentsCategory = tmp34;
      tmp41 = new closure_54(self, items2, obj, initializationData);
      self.voiceChannelsCategory = tmp41;
      tmp42 = new closure_56(arg1, items3.length > 0);
      self.guildActionSection = tmp42;
      tmp43 = new closure_55(arg2);
      self.channelNoticeSection = tmp43;
      tmp44 = closure_1(closure_2[39])(!("null" in self.categories), "somehow a null got into categories");
      obj6 = closure_1(closure_2[33]);
      self.voiceChannelsSectionNumber = closure_46 + obj6.size(self.categories);
      return;
    }
  }
  const arg1 = ChannelListImpl;
  let obj = {
    key: "initializationData",
    get() {
      return { selectedChannel: store2.getChannel(store3.getChannelId()), selectedVoiceChannelId: store3.getVoiceChannelId(), activeJoinedRelevantThreads: store.getActiveJoinedRelevantThreadsForGuild(this.id), activeJoinedUnreadThreads: store.getActiveJoinedUnreadThreadsForGuild(this.id) };
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
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
        self.sortedNamedCategories = callback(closure_2[33]).sortBy(Object.values(self.categories), (record) => record.record.position);
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
            let tmp2 = closure_66;
            let tmp3 = closure_66(obj.getShownChannelIds());
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
                let done = iter2.done;
              } while (!done);
            }
            num2 = num2 + 1;
          } while (num2 < items1.length);
        }
        const obj2 = callback(closure_2[33]);
      }
      return self.rows;
    }
  };
  items[6] = {
    key: "getCategoryFromSection",
    value(arg0) {
      const self = this;
      if (closure_41 === arg0) {
        const _Error2 = Error;
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      } else if (closure_42 === arg0) {
        const _Error = Error;
        throw Error("Invalid section. Use getGuildActionSection instead");
      } else if (closure_43 === arg0) {
        return self.favoritesCategory;
      } else if (closure_45 === arg0) {
        return self.noParentCategory;
      } else if (self.recentsSectionNumber === arg0) {
        return self.recentsCategory;
      } else if (self.voiceChannelsSectionNumber === arg0) {
        return self.voiceChannelsCategory;
      } else {
        return self.getSortedNamedCategories()[arg0 - closure_46];
      }
    }
  };
  items[7] = {
    key: "getNamedCategoryFromSection",
    value(arg0) {
      const self = this;
      const diff = arg0 - closure_46;
      let tmp3 = diff >= 0;
      if (tmp3) {
        tmp3 = diff < self.getSortedNamedCategories().length;
      }
      callback(closure_2[39])(tmp3, "invalid section index " + diff);
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
        let tmp3 = null;
        if (null != categoryFromSection.channels[categoryFromSection.getShownChannelIds(categoryFromSection)[arg1]]) {
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
      callback(closure_2[39])(arg0 > closure_42, "Invalid section");
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
            const tmp2 = callback3(self.getSortedNamedCategories());
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
        if (!set.has(channelId)) {
          const channel = store2.getChannel(channelId);
          GUILD_DIRECTORY = null;
          if (null != channel) {
            GUILD_DIRECTORY = null;
            if (channel.isDirectory()) {
              GUILD_DIRECTORY = constants.GUILD_DIRECTORY;
            }
          }
        }
      }
      if (null != GUILD_DIRECTORY) {
        let obj = {};
        const guildActionSection = self.getGuildActionSection();
        const rows = guildActionSection.getRows();
        obj.row = rows.indexOf(GUILD_DIRECTORY);
        obj.section = closure_42;
        const items = [obj];
        return items;
      } else {
        const items1 = [];
        const channel1 = store2.getChannel(channelId);
        let ChannelListImpl = channel1;
        if (null != channel1) {
          if (null != channelId) {
            const isThreadResult = channel1.isThread();
            let tmp7 = channel1;
            if (isThreadResult) {
              const channel2 = store2.getChannel(channel1.parent_id);
              ChannelListImpl = channel2;
              tmp7 = channel2;
            }
            if (null == tmp7) {
              return items1;
            } else {
              const favoritesCategory = self.favoritesCategory;
              const shownChannelIds = favoritesCategory.getShownChannelIds();
              const index = shownChannelIds.indexOf(tmp7.id);
              if (index >= 0) {
                obj = { section: closure_43, row: index };
                items1.push(obj);
              }
              const recentsCategory = self.recentsCategory;
              const shownChannelIds1 = recentsCategory.getShownChannelIds();
              const index1 = shownChannelIds1.indexOf(tmp7.id);
              if (index1 >= 0) {
                const obj1 = { section: self.recentsSectionNumber, row: index1 };
                items1.push(obj1);
              }
              if (tmp7.type === constants2.GUILD_CATEGORY) {
                const obj2 = {
                  section: callback(closure_2[33]).findIndex(self.getSortedNamedCategories(), (id) => {
                              id = undefined;
                              if (null != channel2) {
                                id = channel2.id;
                              }
                              return id.id === id;
                            }) + closure_46
                };
                const items2 = [obj2];
                return items2;
              } else {
                const category = self.getCategory(tmp7);
                if (category instanceof closure_49) {
                  let sum = closure_45;
                } else {
                  const sortedNamedCategories = self.getSortedNamedCategories();
                  sum = sortedNamedCategories.indexOf(category) + closure_46;
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
      callback(closure_2[39])(arg0.length > 0, "must have at least one channel in the slice");
      const items = [];
      const items1 = [];
      const tmp4 = callback3(this.getSortedCategories());
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
          let tmp6 = closure_66;
          let tmp7 = closure_66(value.getShownChannelIds());
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
              let iter4 = tmp7();
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
        const tmp2 = callback3(self.getSortedCategories());
        let iter = tmp2();
        if (!iter.done) {
          do {
            let value = iter.value;
            for (const key10014 in value.channels) {
              let tmp3 = key10014;
              self.allChannelsById[key10014] = value.channels[key10014];
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
      const tmp2 = callback3(arg0);
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
        const channel = store2.getChannel(channelId);
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
            const tmp7 = null != category && null != category.channels[channelId];
          }
        }
      } else {
        const tmp3 = callback(closure_2[33]);
        const mapped = callback(closure_2[33])(self.getSortedCategories()).map((channels) => Object.values(channels.channels));
        const tmp3Result = callback(closure_2[33])(self.getSortedCategories());
        valueResult = mapped.flatten().value();
        const iter = mapped.flatten();
      }
      let closure_0 = false;
      const item = valueResult.forEach((updateSubtitle) => {
        if (updateSubtitle.updateSubtitle()) {
          let closure_0 = true;
        }
      });
      if (closure_0) {
        self.version = self.version + 1;
      }
      return closure_0;
    }
  };
  items[22] = {
    key: "forEachShownChannel",
    value(arg0, ignoreRecents) {
      const tmp = callback3(this.getSortedCategories());
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
            let tmp2 = tmp5;
            let tmp3 = tmp6;
            let tmp4 = tmp7;
            iter2 = iter9;
            if (iter9.done) {
              break;
            }
          }
          let tmp8 = callback3;
          let tmp9 = callback3(value.getShownChannelIds());
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
              let tmp15 = closure_66;
              let tmp16 = closure_66(tmp13.threadIds);
              let iter5 = tmp16();
              let iter6 = iter5;
              let tmp17 = iter5;
              if (!iter5.done) {
                do {
                  let tmp18 = initialize;
                  let channel = initialize.getChannel(iter6.value);
                  if (null != channel) {
                    let tmp20 = arg0(channel);
                  }
                  let iter7 = tmp16();
                  iter6 = iter7;
                  tmp17 = iter7;
                  tmp10 = channel;
                } while (!iter7.done);
              }
              let iter8 = tmp9();
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
      const tmp = callback3(this.getSortedCategories());
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
          let tmp2 = callback3;
          let tmp3 = callback3(value.getChannelRecords());
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
              let done = iter5.done;
            } while (!done);
          }
        }
      }
    }
  };
  return callback3(ChannelListImpl, items);
}();
const tmp6 = () => {
  class BaseChannelListCategory {
    constructor(arg0) {
      tmp = _inherits(this, BaseChannelListCategory);
      this.guild = arg0;
      this.isMuted = false;
      this.isCollapsed = false;
      this.position = -1;
      this.channels = {};
      this.shownChannelIds = null;
      return;
    }
  }
  const arg1 = BaseChannelListCategory;
  let obj = {
    key: "updateChannel",
    value(id) {
      const self = this;
      const tmp = id.id in this.channels;
      let tmp2 = !tmp;
      if (tmp) {
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
  const items = [obj, , , , , , , , ];
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
      return callback(closure_2[33]).some(this.channels, (renderLevel) => renderLevel.renderLevel >= obj.WouldShowIfUncollapsed);
    }
  };
  items[4] = {
    key: "getShownChannelIds",
    value() {
      const self = this;
      if (null == this.shownChannelIds) {
        const values = callback(closure_2[33])(self.channels).values();
        const found = values.filter((renderLevel) => renderLevel.renderLevel === Show.Show);
        const obj = callback(closure_2[33])(self.channels);
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
      const values = callback(closure_2[33])(this.channels).values();
      const obj = callback(closure_2[33])(this.channels);
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
      const values = callback(closure_2[33])(this.channels).values();
      const found = values.filter((renderLevel) => renderLevel.renderLevel > CannotShow.CannotShow);
      const obj = callback(closure_2[33])(this.channels);
      return found.map((record) => record.record).value();
    }
  };
  items[8] = {
    key: "getFirstVoiceChannel",
    value(arg0) {
      let value;
      const self = this;
      const tmp = callback3(this.getShownChannelIds());
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
}();
let closure_49 = (arg0) => {
  class ChannelListCategoryNoParent {
    constructor(arg0, arg1, arg2) {
      ChannelListCategoryNoParent = arg2;
      tmp = _inherits(this, ChannelListCategoryNoParent);
      items = [];
      items[0] = arg0;
      tmp2 = closure_64(this, ChannelListCategoryNoParent, items);
      arg2 = tmp2;
      arr2 = arg2(closure_2[33])(arg1);
      mapped = arr2.map((arg0) => new closure_57(tmp2, arg0, arg2));
      iter = mapped.keyBy((id) => id.id);
      tmp2.channels = iter.value();
      return tmp2;
    }
  }
  const arg1 = ChannelListCategoryNoParent;
  callback2(ChannelListCategoryNoParent, arg0);
  return callback3(ChannelListCategoryNoParent);
}(tmp6);
let closure_50 = (arg0) => {
  class ChannelListCategoryWithParent {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = _inherits(this, ChannelListCategoryWithParent);
      items = [];
      items[0] = arg0;
      tmp2 = closure_64(this, ChannelListCategoryWithParent, items);
      tmp2.record = arg1;
      tmp2.id = arg1.id;
      tmp2.isCollapsed = true === arg0.collapsedCategoryIds[arg1.id];
      mutedChannelIds = arg0.mutedChannelIds;
      tmp2.isMuted = mutedChannelIds.has(arg1.id);
      tmp2.channels = {};
      tmp3 = closure_66(arg2);
      iter = tmp3();
      if (!iter.done) {
        do {
          value = iter.value;
          tmp4 = closure_57;
          prototype = closure_57.prototype;
          tmp5 = new.target;
          tmp6 = new.target;
          tmp7 = tmp2;
          tmp8 = value;
          tmp9 = arg3;
          tmp10 = new closure_57(tmp2, value, arg3);
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
  const arg1 = ChannelListCategoryWithParent;
  callback2(ChannelListCategoryWithParent, arg0);
  const items = [
    {
      key: "shouldShowEmptyCategory",
      value() {
        const self = this;
        const tmp = !callback3(ChannelListCategoryWithParent, "shouldShowEmptyCategory", this, 3)([]);
        let tmp2 = !tmp;
        if (tmp) {
          let canResult = closure_28.can(constants.MANAGE_CHANNELS, self.record);
          if (canResult) {
            canResult = closure_28.can(constants.VIEW_CHANNEL, self.record);
          }
          if (canResult) {
            canResult = callback(closure_2[33]).isEmpty(self.channels);
            const obj = callback(closure_2[33]);
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
}(tmp6);
const tmp7 = (arg0) => {
  class ChannelListFavoritesCategory {
    constructor(arg0, arg1) {
      ChannelListFavoritesCategory = arg1;
      tmp = _inherits(this, ChannelListFavoritesCategory);
      items = [];
      items[0] = arg0;
      tmp2 = closure_64(this, ChannelListFavoritesCategory, items);
      closure_1 = tmp2;
      tmp3 = closure_1(closure_2[33]);
      guildFavorites = closure_31.getGuildFavorites(arg0.id);
      if (null == guildFavorites) {
        guildFavorites = [];
      }
      tmp3Result = tmp3(guildFavorites);
      mapped = tmp3Result.map((channelId) => channel.getChannel(channelId));
      found = mapped.filter(ChannelListFavoritesCategory(closure_2[40]).isNotNullish);
      mapped1 = found.map((arg0) => new closure_58(tmp2, arg0, arg1));
      iter = mapped1.keyBy((id) => id.id);
      tmp2.channels = iter.value();
      suggestedChannelId = closure_15.getSuggestedChannelId(arg0.id);
      channel = initialize.getChannel(suggestedChannelId);
      tmp6 = null != channel && null != suggestedChannelId;
      if (tmp6) {
        tmp7 = closure_58;
        obj = {};
        tmp8 = obj;
        tmp9 = arg1;
        merged = Object.assign(arg1);
        str = "activeJoinedRelevantThreads";
        obj["activeJoinedRelevantThreads"] = {};
        str2 = "activeJoinedUnreadThreads";
        obj["activeJoinedUnreadThreads"] = {};
        prototype = closure_58.prototype;
        tmp11 = new.target;
        tmp12 = new.target;
        tmp13 = tmp2;
        tmp14 = channel;
        tmp15 = obj;
        tmp16 = new closure_58(tmp2, channel, obj);
        tmp17 = tmp16;
        tmp2.channels[suggestedChannelId] = tmp16;
      }
      return tmp2;
    }
  }
  const arg1 = ChannelListFavoritesCategory;
  callback2(ChannelListFavoritesCategory, arg0);
  let obj = {
    key: "updateChannel",
    value(id) {
      const self = this;
      let isFavoriteResult = id.id in this.channels;
      if (isFavoriteResult) {
        isFavoriteResult = closure_31.isFavorite(id.guild_id, id.id);
      }
      const suggestedChannelId = store.getSuggestedChannelId(id.guild_id);
      let tmp5 = arg1;
      if (tmp4) {
        const obj = {};
        const merged = Object.assign(arg1);
        obj["activeJoinedRelevantThreads"] = {};
        obj["activeJoinedUnreadThreads"] = {};
        tmp5 = obj;
      }
      if (id.id in self.channels) {
        if (obj2.updateChannel(id, tmp5)) {
          self.invalidate();
          let flag = true;
        }
        return flag;
      }
      let tmp10 = !tmp9;
      if (id.id in self.channels) {
        tmp10 = id.id === suggestedChannelId;
      }
      if (!tmp10) {
        tmp10 = isFavoriteResult;
      }
      flag = !tmp10;
      if (flag) {
        const channels = self.channels;
        id = id.id;
        delete r3[r1];
        self.invalidate();
        flag = true;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getFirstVoiceChannel",
    value() {
      return null;
    }
  };
  items[1] = obj;
  return callback3(ChannelListFavoritesCategory, items);
}(tmp6);
const tmp8 = (arg0) => {
  class ChannelListRecentlyActiveCategory {
    constructor(arg0, arg1, arg2) {
      tmp = _inherits(this, ChannelListRecentlyActiveCategory);
      items = [];
      items[0] = arg0;
      tmp2 = closure_64(this, ChannelListRecentlyActiveCategory, items);
      tmp2.enabled = false;
      tmp2.isCollapsed = ME.isCollapsed(arg0.id);
      tmp2.enabled = Object.keys(arg1).length >= ChannelListRecentlyActiveCategory.MIN_READABLE_CHANNELS;
      if (tmp2.enabled) {
        _Object = Object;
        values = Object.values(arg1);
        for (let num = 0; num < values.length; num = num + 1) {
          tmp3 = values[num];
          tmp4 = closure_21;
          tmp5 = closure_21(tmp3.type);
          if (tmp5) {
            tmp6 = closure_22;
            tmp5 = !closure_22(tmp3.type);
          }
          if (tmp5) {
            tmp7 = closure_60;
            prototype = closure_60.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = tmp2;
            tmp11 = tmp3;
            tmp12 = arg2;
            tmp13 = new closure_60(tmp2, tmp3, arg2);
            tmp14 = tmp13;
            tmp2.channels[tmp3.id] = tmp13;
          }
        }
      }
      return tmp2;
    }
  }
  const arg1 = ChannelListRecentlyActiveCategory;
  callback2(ChannelListRecentlyActiveCategory, arg0);
  let obj = {
    key: "shouldShowEmptyCategory",
    value() {
      const self = this;
      let tmp = this.enabled && self.isCollapsed;
      if (tmp) {
        tmp = callback5(ChannelListRecentlyActiveCategory, "shouldShowEmptyCategory", self, 3)([]);
      }
      return tmp;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "updateAllChannels",
    value(arg0) {
      const ChannelListRecentlyActiveCategory = this;
      const values = Object.values(this.channels);
      return values.reduce((arg0, record) => self.updateChannel(record.record, arg0) || arg0, false);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateChannel",
    value(type) {
      const self = this;
      if (this.enabled) {
        if (callback4(type.type)) {
          return null != self.channels[type.parent_id] && self.updateShownChannelIds(self.channels[type.parent_id]);
        } else if (callback3(type.type)) {
          const items = [type, arg1];
          if (null == self.channels[type.id]) {
            const prototype = ctor.prototype;
            const tmp15 = new ctor(self, type, arg1);
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
        const constants = self.isCollapsed ? tmp4.Show : tmp4.WouldShowIfUncollapsed;
        if (self.enabled) {
          const found = callback(closure_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel >= closure_0);
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
            if (tmp3 !== closure_40.Show) {
              let tmp8 = tmp7;
              if (tmp2 > 0) {
                const _Date = Date;
                tmp8 = Date.now() - tmp < lib.MAX_TIMESTAMP_DELTA;
              }
              tmp5 = tmp8;
            }
            return tmp5;
          });
          const arr2 = callback(closure_2[33])(self.channels);
          const sortByResult = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== closure_40.Show) {
              num = lib(closure_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          });
          const takeResult = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== closure_40.Show) {
              num = lib(closure_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(constants.MAX_RECENT_CHANNELS);
          const sortByResult1 = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== closure_40.Show) {
              num = lib(closure_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(constants.MAX_RECENT_CHANNELS).sortBy((arg0) => {
            let tmp;
            [, tmp] = arg0;
            return -tmp;
          });
          let items = found1.sortBy((arg0) => {
            let tmp;
            let tmp2;
            [, tmp, tmp2] = arg0;
            let num = 0;
            if (tmp2 !== closure_40.Show) {
              num = lib(closure_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(constants.MAX_RECENT_CHANNELS).sortBy((arg0) => {
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
            if (tmp2 !== closure_40.Show) {
              num = lib(closure_2[41]).DISCORD_EPOCH;
            }
            return -tmp - num;
          }).take(constants.MAX_RECENT_CHANNELS).sortBy((arg0) => {
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
}(tmp6);
tmp8.MIN_READABLE_CHANNELS = 7;
tmp8.MAX_RECENT_CHANNELS = 10;
tmp8.MAX_TIMESTAMP_DELTA = 604800000;
let closure_53 = (arg0) => {
  class ChannelListRecentsCategory {
    constructor(arg0, arg1, arg2) {
      ChannelListRecentsCategory = arg2;
      tmp = _inherits(this, ChannelListRecentsCategory);
      items = [];
      items[0] = arg0;
      tmp2 = closure_64(this, ChannelListRecentsCategory, items);
      closure_1 = tmp2;
      if (arg0.optInEnabled) {
        tmp4 = closure_14;
        if (closure_14.isFullServerPreview(arg0.id)) {
          tmp9 = _defineProperties;
          tmp8 = _defineProperties(tmp2);
        } else {
          flag = false;
          tmp2.isCollapsed = false;
          tmp2.isMuted = false;
          tmp5 = closure_1;
          tmp6 = closure_2;
          num = 33;
          tmp7 = arg1;
          arr2 = closure_1(closure_2[33])(arg1);
          mapped = arr2.map((arg0) => new closure_59(tmp2, arg0, arg2));
          iter = mapped.keyBy((id) => id.id);
          tmp2.channels = iter.value();
          tmp8 = tmp2;
        }
        tmp10 = tmp8;
      } else {
        tmp3 = _defineProperties;
        return _defineProperties(tmp2);
      }
      return;
    }
  }
  const arg1 = ChannelListRecentsCategory;
  callback2(ChannelListRecentsCategory, arg0);
  let obj = {
    key: "updateAllChannels",
    value(arg0) {
      const ChannelListRecentsCategory = this;
      let closure_2 = false;
      const keys = arg0(closure_2[41]).keys(this.channels);
      const item = keys.forEach((arg0) => {
        if (self.updateChannel(self.channels[arg0].record, arg0)) {
          let closure_2 = true;
        }
      });
      return closure_2;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "updateChannel",
    value(id) {
      const self = this;
      const items = [id, arg1];
      if (this.guild.optInEnabled) {
        if (callback6(self.guild, id, arg1)) {
          if (null == self.channels[id.id]) {
            const prototype = ctor.prototype;
            const tmp10 = new ctor(self, id, arg1);
            self.channels[id.id] = tmp10;
            self.invalidate();
            return true;
          }
        }
      }
      return callback4(ChannelListRecentsCategory, "updateChannel", this, 3)(items);
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
        const values = callback(closure_2[33])(self.channels).values();
        const found = values.filter((renderLevel) => {
          let tmp = renderLevel.renderLevel === closure_40.Show;
          if (!tmp) {
            tmp = renderLevel.renderLevel === closure_40.WouldShowIfUncollapsed;
          }
          return tmp;
        });
        const obj = callback(closure_2[33])(self.channels);
        const sortByResult = found.sortBy((record) => record.record.position);
        const valueResult = found.sortBy((record) => record.record.position).take(5).value();
        const iter = found.sortBy((record) => record.record.position).take(5);
        const _Set = Set;
        const items = [];
        HermesBuiltin.arraySpread(valueResult, HermesBuiltin.arraySpread(found.filter((renderLevel) => renderLevel.renderLevel === closure_40.Show).value(), 0));
        const set = new Set(items);
        const items1 = [];
        const iter2 = found.filter((renderLevel) => renderLevel.renderLevel === closure_40.Show);
        HermesBuiltin.arraySpread(set, 0);
        const tmp14 = callback(closure_2[33]);
        const tmp14Result = callback(closure_2[33])(items1);
        const sortByResult1 = callback(closure_2[33])(items1).sortBy((record) => record.record.position);
        self.shownChannelIds = callback(closure_2[33])(items1).sortBy((record) => record.record.position).map((id) => id.id).value();
        const iter3 = callback(closure_2[33])(items1).sortBy((record) => record.record.position).map((id) => id.id);
      }
      return self.shownChannelIds;
    }
  };
  return callback3(ChannelListRecentsCategory, items);
}(tmp6);
const tmp9 = (arg0) => {
  class ChannelListVoiceChannelsCategory {
    constructor(arg0, arg1, arg2, arg3) {
      ChannelListVoiceChannelsCategory = arg3;
      tmp = _inherits(this, ChannelListVoiceChannelsCategory);
      items = [];
      items[0] = arg0;
      tmp2 = closure_64(this, ChannelListVoiceChannelsCategory, items);
      closure_1 = tmp2;
      tmp2.categoriesById = arg2;
      tmp2.hiddenChannelIds = null;
      if (arg0.optInEnabled) {
        tmp5 = closure_34;
        tmp2.isCollapsed = closure_34.isVoiceCategoryCollapsed(arg0.id);
        flag = false;
        tmp2.isMuted = false;
        tmp2.categoriesById = arg2;
        tmp6 = closure_1;
        tmp7 = closure_2;
        num = 33;
        tmp8 = arg1;
        arr2 = closure_1(closure_2[33])(arg1);
        mapped = arr2.map((arg0) => new closure_61(tmp2, arg0, arg3));
        iter = mapped.keyBy((id) => id.id);
        tmp2.channels = iter.value();
        tmp4 = tmp2;
      } else {
        tmp3 = _defineProperties;
        tmp4 = _defineProperties(tmp2);
      }
      return tmp4;
    }
  }
  const arg1 = ChannelListVoiceChannelsCategory;
  callback2(ChannelListVoiceChannelsCategory, arg0);
  let obj = {
    key: "invalidate",
    value() {
      callback4(ChannelListVoiceChannelsCategory, "invalidate", this, 3)([]);
      this.hiddenChannelIds = null;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getHiddenChannelIds",
    value() {
      const self = this;
      if (this.guild.optInEnabled) {
        if (null == self.hiddenChannelIds) {
          const arr = callback(closure_2[33])(self.channels);
          const valueResult = callback(closure_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel === obj.WouldShowIfUncollapsed).value();
          if (valueResult.every((record) => {
            record = record.record;
            return record.isCategory();
          })) {
            self.hiddenChannelIds = [];
            return self.hiddenChannelIds;
          } else {
            self.hiddenChannelIds = valueResult.map((id) => id.id);
          }
          const iter = callback(closure_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel === obj.WouldShowIfUncollapsed);
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
      const self = this;
      const ChannelListVoiceChannelsCategory = this;
      if (this.guild.optInEnabled) {
        if (null == self.shownChannelIds) {
          const found = callback(closure_2[33])(self.channels).filter((renderLevel) => renderLevel.renderLevel === Show.Show);
          const items = [
            (record) => {
                  if (record.record.type === constants.GUILD_CATEGORY) {
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
                  if (record.record.type !== constants.GUILD_CATEGORY) {
                    num = record.record.position;
                  }
                  return num;
                }
          ];
          const arr2 = callback(closure_2[33])(self.channels);
          const valueResult = found.orderBy(items, [null, null]).value();
          self.shownChannelIds = [];
          let num = 0;
          if (0 < valueResult.length) {
            do {
              let tmp2 = valueResult[num];
              let tmp3 = num < valueResult.length - 1;
              if (tmp3) {
                let tmp4 = closure_36;
                tmp3 = tmp2.record.type === closure_36.GUILD_CATEGORY;
              }
              if (tmp3) {
                let tmp5 = valueResult[num + 1];
                let type;
                if (null != tmp5) {
                  type = tmp5.record.type;
                }
                let tmp7 = closure_36;
                tmp3 = type === closure_36.GUILD_CATEGORY;
                let tmp8 = tmp5;
              }
              if (!tmp3) {
                let tmp9 = num === valueResult.length - 1;
                if (tmp9) {
                  let tmp10 = closure_36;
                  tmp9 = tmp2.record.type === closure_36.GUILD_CATEGORY;
                }
                if (!tmp9) {
                  let shownChannelIds = self.shownChannelIds;
                  let arr = shownChannelIds.push(tmp2.id);
                }
              }
              num = num + 1;
            } while (num < valueResult.length);
          }
          const iter = found.orderBy(items, [null, null]);
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
}(tmp6);
let closure_55 = () => {
  class ChannelListChannelNoticeSection {
    constructor(arg0) {
      tmp = _inherits(this, ChannelListChannelNoticeSection);
      this.rows = arg0;
      return;
    }
  }
  const arg1 = ChannelListChannelNoticeSection;
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
}();
let closure_56 = () => {
  class ChannelListGuildActionSection {
    constructor(arg0, arg1) {
      tmp = _inherits(this, ChannelListGuildActionSection);
      this.guildActionRows = arg0.map(String);
      if (arg1) {
        guildActionRows = this.guildActionRows;
        _String = String;
        tmp2 = closure_35;
        arr = guildActionRows.push(String(closure_35.GUILD_DIRECTORY));
      }
      return;
    }
  }
  const arg1 = ChannelListGuildActionSection;
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
}();
const tmp10 = () => {
  class BaseChannelListChannel {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = _inherits(this, BaseChannelListChannel);
      this.category = arg0;
      this.record = arg1;
      this.position = -1;
      this.threadIds = [];
      this.threadCount = 0;
      this.subtitle = null;
      this.renderLevel = closure_40.CannotShow;
      this.id = arg1.id;
      state = this.computeState(arg2);
      ({ renderLevel, threadIds } = state);
      this.renderLevel = renderLevel;
      obj = closure_1(closure_2[33]);
      this.threadCount = obj.size(threadIds);
      this.threadIds = threadIds;
      if (renderLevel === closure_40.Show) {
        self.subtitle = self.computeSubtitle();
      }
      return;
    }
  }
  const arg1 = BaseChannelListChannel;
  let obj = {
    key: "isMuted",
    get() {
      const mutedChannelIds = this.category.guild.mutedChannelIds;
      return mutedChannelIds.has(this.id);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isCollapsed",
    get() {
      return collapsed.isCollapsed(this.id);
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
      const items = [closure_29.lastMessageTimestamp(this.id), ...threadIds.map(closure_29.lastMessageTimestamp)];
      const threadIds = this.threadIds;
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
        isEqualResult = callback(closure_2[33]).isEqual(state.threadIds, self.threadIds);
        const obj = callback(closure_2[33]);
      }
      if (!isEqualResult) {
        ({ renderLevel: self.renderLevel, threadIds: self.threadIds } = state);
        self.threadCount = callback(closure_2[33]).size(state.threadIds);
        flag = true;
        const obj2 = callback(closure_2[33]);
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
      let flag = !callback(closure_2[33]).isEqual(this.subtitle, subtitle);
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
      return closure_68(this.record, isCollapsed, self.category.guild.optInEnabled);
    }
  };
  return callback3(BaseChannelListChannel, items);
}();
const tmp11 = (arg0) => {
  class ChannelListChannelImpl {
    constructor() {
      tmp = _inherits(this, ChannelListChannelImpl);
      return closure_64(this, ChannelListChannelImpl, arguments);
    }
  }
  const arg1 = ChannelListChannelImpl;
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
        if (!closure_28.can(constants3.VIEW_CHANNEL, this.record)) {
          if (self.id === selectedVoiceChannelId) {
            let obj = { renderLevel: closure_40.Show, threadIds: [] };
            return obj;
          } else if (!channelGatedAndVisible.isChannelGatedAndVisible(self.record.guild_id, self.record.id)) {
            obj = { renderLevel: closure_40.CannotShow, threadIds: [] };
            return obj;
          }
        }
        const parent_id = self.record.parent_id;
        const guild = self.category.guild;
        if (callback6(guild, self.record)) {
          obj = { renderLevel: closure_40.CannotShow, threadIds: [] };
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
            const tmp12 = callback5(self.record, obj1, selectedChannel, selectedVoiceChannelId, guild.hideMutedChannels);
            if (self.id === guild.moderatorReportChannelId) {
              const obj2 = { renderLevel: closure_40.DoNotShow, threadIds: tmp12 };
              return obj2;
            } else {
              if (guild.optInEnabled) {
                if (guild.hideResourceChannels) {
                  const record = self.record;
                  if (record.hasFlag(constants2.IS_GUILD_RESOURCE_CHANNEL)) {
                    const obj3 = { renderLevel: tmp6 ? closure_40.Show : closure_40.CannotShow, threadIds: tmp12 };
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
                  let obj4 = { renderLevel: closure_40.DoNotShow, threadIds: tmp12 };
                  return obj4;
                }
              }
              if (!tmp6) {
                if (!tmp7) {
                  obj4 = callback(closure_2[33]);
                  if (obj4.isEmpty(tmp12)) {
                    if (closure_29.getMentionCount(self.id) <= 0) {
                      if (guild.hideMutedChannels) {
                        const mutedChannelIds = guild.mutedChannelIds;
                        if (mutedChannelIds.has(self.id)) {
                          const obj5 = { renderLevel: closure_40.DoNotShow, threadIds: tmp12 };
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
                            if (self.record.type !== constants.GUILD_STORE) {
                              if (callback3(self.record.type)) {
                                if (!closure_29.hasUnread(self.record.id)) {
                                  const obj6 = { renderLevel: closure_40.WouldShowIfUncollapsed, threadIds: tmp12 };
                                  return obj6;
                                }
                              }
                            }
                          }
                          const obj7 = { renderLevel: closure_40.WouldShowIfUncollapsed, threadIds: tmp12 };
                          return obj7;
                        }
                        const obj8 = { renderLevel: closure_40.WouldShowIfUncollapsed, threadIds: tmp12 };
                        return obj8;
                      }
                      const obj9 = { renderLevel: closure_40.Show, threadIds: tmp12 };
                      return obj9;
                    }
                  }
                }
              }
              const obj10 = { renderLevel: closure_40.Show, threadIds: tmp12 };
              return obj10;
            }
          }
          obj1 = activeJoinedRelevantThreads[self.id];
        }
      }
    }
  ];
  return callback3(ChannelListChannelImpl, items);
}(tmp10);
let closure_58 = (arg0) => {
  class FavoritesChannelListChannel {
    constructor() {
      tmp = _inherits(this, FavoritesChannelListChannel);
      return closure_64(this, FavoritesChannelListChannel, arguments);
    }
  }
  const arg1 = FavoritesChannelListChannel;
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
        if (closure_28.can(constants.VIEW_CHANNEL, this.record)) {
          obj.renderLevel = tmp.Show;
          const record = self.record;
          obj = arg0.activeJoinedRelevantThreads[self.id];
          if (null == obj) {
            obj = {};
          }
          obj.threadIds = closure_69(record, obj, selectedChannel, selectedVoiceChannelId, false);
          let tmp2 = obj;
          const tmp3 = closure_69;
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
}(tmp10);
let closure_59 = (arg0) => {
  class RecentsChannelListChannel {
    constructor() {
      tmp = _inherits(this, RecentsChannelListChannel);
      return closure_64(this, RecentsChannelListChannel, arguments);
    }
  }
  const arg1 = RecentsChannelListChannel;
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
        if (closure_28.can(constants.VIEW_CHANNEL, this.record)) {
          let obj = {};
          if (callback4(self.category.guild, self.record, tmp)) {
            tmp = closure_40;
            obj.renderLevel = callback3(self, tmp) ? tmp.Show : tmp.WouldShowIfUncollapsed;
            const record = self.record;
            activeJoinedRelevantThreads = activeJoinedRelevantThreads[self.id];
            if (null == activeJoinedRelevantThreads) {
              activeJoinedRelevantThreads = {};
            }
            self = closure_69(record, activeJoinedRelevantThreads, selectedChannel, selectedVoiceChannelId, false);
            obj.threadIds = self;
            let tmp5 = obj;
            const tmp7 = callback3(self, tmp);
            const tmp8 = closure_69;
          } else {
            obj.renderLevel = closure_40.DoNotShow;
            obj.threadIds = [];
            tmp5 = obj;
          }
        } else {
          obj = { renderLevel: closure_40.CannotShow, threadIds: [] };
          return obj;
        }
      }
    }
  ];
  return callback3(RecentsChannelListChannel, items);
}(tmp10);
let closure_60 = (arg0) => {
  class RecentlyActiveChannelListChannel {
    constructor() {
      tmp = _inherits(this, RecentlyActiveChannelListChannel);
      return closure_64(this, RecentlyActiveChannelListChannel, arguments);
    }
  }
  const arg1 = RecentlyActiveChannelListChannel;
  callback2(RecentlyActiveChannelListChannel, arg0);
  const items = [
    {
      key: "computeState",
      value(arg0) {
        let renderLevel;
        let threadIds;
        const self = this;
        const items = [arg0];
        ({ renderLevel, threadIds } = callback3(RecentlyActiveChannelListChannel, "computeState", this, 3)(items));
        let sortByResult = threadIds;
        let tmp3 = renderLevel;
        if (renderLevel > closure_40.CannotShow) {
          const parent_id = self.record.parent_id;
          const guild = self.category.guild;
          const mutedChannelIds2 = guild.mutedChannelIds;
          if (!mutedChannelIds2.has(self.id)) {
            if (null != parent_id) {
              const mutedChannelIds = guild.mutedChannelIds;
              let tmp13 = renderLevel === closure_40.WouldShowIfUncollapsed;
              if (tmp13) {
                tmp13 = callback5(self, arg0);
              }
              if (tmp13) {
                renderLevel = closure_40.Show;
              }
              let obj = callback(closure_2[33]);
              sortByResult = obj.sortBy(threadIds, (arg0) => -closure_29.lastMessageTimestamp(arg0));
              tmp3 = renderLevel;
            }
            let tmp6 = renderLevel === closure_40.Show;
            if (!tmp6) {
              let tmp8 = renderLevel === closure_40.DoNotShow;
              if (tmp8) {
                tmp8 = callback6(self.category.guild, self.record, arg0);
              }
              tmp6 = tmp8;
            }
            if (tmp6) {
              renderLevel = closure_40.WouldShowIfUncollapsed;
            }
          }
          renderLevel = closure_40.DoNotShow;
        }
        obj = { renderLevel: tmp3, threadIds: sortByResult };
        return obj;
      }
    }
  ];
  return callback3(RecentlyActiveChannelListChannel, items);
}(tmp11);
let closure_61 = (arg0) => {
  class VoiceChannelListChannel {
    constructor() {
      tmp = _inherits(this, VoiceChannelListChannel);
      return closure_64(this, VoiceChannelListChannel, arguments);
    }
  }
  const arg1 = VoiceChannelListChannel;
  callback2(VoiceChannelListChannel, arg0);
  let obj = {
    key: "getRenderLevel",
    value(arg0) {
      const self = this;
      if (closure_28.can(constants.VIEW_CHANNEL, this.record)) {
        if (arg0 !== tmp.Show) {
          if (arg0 !== closure_40.WouldShowIfUncollapsed) {
            if (!callback5(this.category.guild, self.record)) {
              if (self.category.isCollapsed) {
                callback(closure_2[33]).some(voiceStatesForChannel.getVoiceStatesForChannel(self.record.id)) ? closure_40.Show : closure_40.WouldShowIfUncollapsed;
                const obj = callback(closure_2[33]);
              } else {
                let CannotShow = closure_40.Show;
              }
            }
          }
        }
        CannotShow = closure_40.CannotShow;
      } else {
        return tmp.CannotShow;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "computeState",
    value(arg0) {
      const self = this;
      const items = [arg0];
      const renderLevel = this.getRenderLevel(callback3(VoiceChannelListChannel, "computeState", this, 3)(items).renderLevel);
      if (renderLevel === closure_40.Show) {
        let isCollapsed = self.isCollapsed;
        if (!isCollapsed) {
          isCollapsed = self.category.isCollapsed;
        }
        self.subtitle = closure_68(self.record, isCollapsed, self.category.guild.optInEnabled);
        const tmp2 = closure_68;
      }
      return { threadIds: [], renderLevel };
    }
  };
  items[1] = obj;
  return callback3(VoiceChannelListChannel, items);
}(tmp11);
const set1 = new Set(Object.values(ChannelListGuildActionRow));
const result = maybeFetchCollectiblesForInvoices.fileFinishedImporting("modules/guild_sidebar/ChannelListState.tsx");

export default () => {
  class ChannelListStates {
    constructor() {
      tmp = _inherits(this, ChannelListStates);
      this.guilds = {};
      return;
    }
  }
  const arg1 = ChannelListStates;
  let obj = {
    key: "_areGuildActionRowsUpdated",
    value(arg0, arg1) {
      let found;
      const obj2 = this.guilds[arg0];
      if (null != obj2) {
        const guildActionSection = obj2.getGuildActionSection();
        const rows = guildActionSection.getRows();
        found = rows.filter((arg0) => !set.has(arg0));
      }
      return !callback(closure_2[33]).isEqual(found, arg1);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "_areChannelNoticeRowsUpdated",
    value(arg0, arg1) {
      let rows;
      const obj2 = this.guilds[arg0];
      if (null != obj2) {
        const channelNoticeSection = obj2.getChannelNoticeSection();
        rows = channelNoticeSection.getRows();
      }
      return !callback(closure_2[33]).isEqual(rows, arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "_areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow",
    value(arg0) {
      const obj = this.guilds[arg0];
      if (null == obj) {
        return false;
      } else {
        const categoryFromSection = obj.getCategoryFromSection(obj.voiceChannelsSectionNumber);
        const categoryFromSection1 = obj.getCategoryFromSection(obj.recentsSectionNumber);
        for (const key10005 in categoryFromSection1.channels) {
          let tmp7 = key10005;
          let tmp8 = categoryFromSection1.channels[key10005];
          let tmp9 = closure_40;
          if (tmp8.renderLevel !== closure_40.DoNotShow) {
            continue;
          } else {
            let record = tmp8.record;
            if (!record.isGuildVocal()) {
              continue;
            } else {
              if (null != categoryFromSection.channels[tmp8.id]) {
                continue;
              } else {
                let tmp = closure_1;
                let tmp2 = closure_2;
                let obj2 = closure_1(closure_2[33]);
                let tmp3 = closure_32;
                if (!obj2.some(closure_32.getVoiceStatesForChannel(tmp8.id))) {
                  continue;
                } else {
                  let tmp4 = closure_29;
                  if (closure_29.getMentionCount(tmp8.id) <= 0) {
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
      const tmp = arg0 in this.guilds;
      let result = !tmp;
      if (tmp) {
        result = self._areGuildActionRowsUpdated(arg0, arg1);
      }
      if (!result) {
        result = self._areChannelNoticeRowsUpdated(arg0, arg2);
      }
      if (!result) {
        result = self._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(arg0);
      }
      if (result) {
        const prototype = ctor.prototype;
        const tmp9 = new ctor(arg0, arg1, arg2);
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
        const prototype = ctor.prototype;
        const tmp5 = new ctor(arg0, [], []);
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
        delete r1[r2];
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
      let basicChannel = store.getBasicChannel(channelId);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        let tmp3 = null != basicChannel.guild_id;
        if (tmp3) {
          let tmp4 = null != self.guilds[basicChannel.guild_id];
          if (tmp4) {
            let result = basicChannel instanceof closure_20;
            if (!result) {
              const channel = store.getChannel(channelId);
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
      const ChannelListStates = arg1;
      if (null == arg0) {
        const _Object = Object;
        let items = Object.values(self.guilds);
      } else if (arg0 in self.guilds) {
        items = [self.guilds[arg0]];
      } else {
        items = [];
      }
      const item = items.forEach((updateSubtitles) => updateSubtitles.updateSubtitles(arg1));
    }
  };
  return callback3(ChannelListStates, items);
}();
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
