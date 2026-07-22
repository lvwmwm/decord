// Module ID: 16091
// Function ID: 123705
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16091 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function sortCategoryList(channel, channel2) {
  channel = channel.channel;
  const type = channel.type;
  channel2 = channel2.channel;
  const type2 = channel2.type;
  if (type !== type2) {
    if (!callback3(type)) {
      if (callback4(type)) {
        return num;
      }
      let num = 1;
      if (type === constants.GUILD_TEXT) {
        num = -1;
      }
    }
  }
  num = channel.position - channel2.position;
}
function setIndex(arg0, index) {
  arg0.index = index;
}
function buildSortedChannels() {
  const _null = { _categories: [], null: [] };
  const keys = Object.keys(closure_23);
  const item = keys.forEach((arg0) => {
    if (null != closure_23[arg0]) {
      if (null != _categories) {
        if (tmp.type === constants.GUILD_CATEGORY) {
          const _categories = _categories._categories;
          let obj = { channel: tmp, index: -1 };
          let arr = _categories.push(obj);
          if (null == _categories[tmp.id]) {
            _categories[tmp.id] = [];
          }
        } else {
          const parent_id = tmp.parent_id;
          let str = "null";
          if (null != parent_id) {
            str = parent_id;
          }
          const StringResult = String(str);
          if (null == _categories[StringResult]) {
            _categories[StringResult] = [];
          }
          arr = _categories[StringResult];
          obj = { channel: tmp, index: -1 };
          arr = arr.push(obj);
        }
      }
    }
  });
  let _categories = _null._categories;
  const sorted = _categories.sort(sortCategoryList);
  _categories = _null._categories;
  const item1 = _categories.forEach((channel) => {
    channel = channel.channel;
    if (null != closure_19) {
      if (null != channel) {
        if (null != closure_19[channel.id]) {
          const sorted = obj.sort(closure_27);
        }
      }
    }
  });
  const item2 = importDefault(dependencyMap[10])(_null._categories, _null).forEach(setIndex);
  setupSortLists();
}
function rebuildChannels() {
  const channels = channels.getChannels(closure_17);
  if (channels === closure_20) {
    return false;
  } else {
    closure_20 = channels;
    let closure_23 = {};
    const item = channels[closure_11].forEach((channel) => {
      channel = channel.channel;
      closure_23[channel.id] = channel;
      return channel;
    });
    const item1 = channels[closure_12].forEach((channel) => {
      channel = channel.channel;
      closure_23[channel.id] = channel;
      return channel;
    });
    const item2 = channels[closure_15.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id;
      if (!canResult) {
        canResult = closure_14.can(constants.VIEW_CHANNEL, channel);
      }
      if (canResult) {
        closure_23[channel.id] = channel;
      }
    });
    buildSortedChannels();
  }
}
function setupSortLists() {
  if (null != _null) {
    const arr = importDefault(dependencyMap[10])(_null._categories, _null, (channel) => {
      channel = channel.channel;
      let tmp = channel.type === constants.GUILD_CATEGORY;
      if (!tmp) {
        let hasItem = null != set;
        if (hasItem) {
          hasItem = set.has(channel.type);
        }
        tmp = hasItem;
      }
      return tmp;
    });
    let closure_22 = arr;
    let closure_18 = arr.map((channel) => channel.channel.id);
  }
}
let closure_2 = ["<string:2963512464>", "<string:2801594173>"];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ isGuildSelectableChannelType: closure_9, isGuildVocalChannelType: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_11, GUILD_VOCAL_CHANNELS_KEY: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = importDefault(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8]);
const tmp3 = arg1(dependencyMap[7]);
({ ChannelTypes: closure_15, Permissions: closure_16 } = arg1(dependencyMap[9]));
let closure_17 = null;
let closure_18 = null;
let closure_19 = null;
let closure_20 = null;
let closure_21 = null;
let closure_22 = null;
let closure_23 = {};
const tmp4 = arg1(dependencyMap[9]);
let closure_24 = importDefault(dependencyMap[11]).debounce(() => {
  rebuildChannels();
  tmp5.emitChange();
}, 500);
let tmp5 = (Store) => {
  class GuildSettingsModalChannelsStoreClass {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildSettingsModalChannelsStoreClass);
      obj = closure_6(GuildSettingsModalChannelsStoreClass);
      tmp2 = closure_5;
      if (closure_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GuildSettingsModalChannelsStoreClass;
  callback2(GuildSettingsModalChannelsStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13, closure_14);
      const items = [closure_13];
      this.syncWith(items, () => {
        callback();
        return false;
      });
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "initGuild",
    value(arg0) {
      callback4();
    }
  };
  items[1] = obj;
  obj = {
    key: "channels",
    get() {
      return closure_19;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "order",
    get() {
      return closure_18;
    }
  };
  items[4] = {
    key: "sortingType",
    get() {
      return closure_21;
    }
  };
  items[5] = {
    key: "channelList",
    get() {
      return closure_22;
    }
  };
  items[6] = {
    key: "getLocalChannel",
    value(arg0) {
      return closure_23[arg0];
    }
  };
  return callback(GuildSettingsModalChannelsStoreClass, items);
}(importDefault(dependencyMap[12]).Store);
tmp5.displayName = "GuildSettingsModalChannelsStore";
tmp5 = new tmp5(importDefault(dependencyMap[13]), {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    let closure_17 = null;
    let closure_18 = null;
    let closure_19 = null;
    let closure_21 = null;
    let closure_22 = null;
    let closure_20 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == closure_19) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      let closure_21 = set;
      setupSortLists();
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    let closure_21 = null;
    setupSortLists();
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      let lock_permissions;
      if (null != closure_23[id.id]) {
        ({ lock_permissions, id } = id);
        closure_23[id.id] = closure_23[id.id].merge(callback(id, closure_2));
        const obj = closure_23[id.id];
      }
    });
    buildSortedChannels();
  }
});
const importDefaultResult = importDefault(dependencyMap[11]);
const obj = {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    let closure_17 = null;
    let closure_18 = null;
    let closure_19 = null;
    let closure_21 = null;
    let closure_22 = null;
    let closure_20 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == closure_19) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      let closure_21 = set;
      setupSortLists();
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    let closure_21 = null;
    setupSortLists();
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      let lock_permissions;
      if (null != closure_23[id.id]) {
        ({ lock_permissions, id } = id);
        closure_23[id.id] = closure_23[id.id].merge(callback(id, closure_2));
        const obj = closure_23[id.id];
      }
    });
    buildSortedChannels();
  }
};
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default tmp5;
