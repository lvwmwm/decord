// Module ID: 16208
// Function ID: 125878
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 29, 1352, 1907, 3758, 653, 5071, 22, 566, 686, 2]

// Module 16208 (_isNativeReflectConstruct)
import closure_3 from "_callSuper";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _objectWithoutProperties from "_objectWithoutProperties";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "apply";

let closure_10;
let closure_11;
let closure_12;
let closure_15;
let closure_16;
let closure_9;
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
      num = 1;
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
    if (null != outer1_23[arg0]) {
      if (null != _categories) {
        if (tmp.type === outer1_15.GUILD_CATEGORY) {
          _categories = _categories._categories;
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
  let sorted = _categories.sort(sortCategoryList);
  _categories = _null._categories;
  const item1 = _categories.forEach((channel) => {
    channel = channel.channel;
    if (null != _categories) {
      if (null != channel) {
        if (null != _categories[channel.id]) {
          const sorted = obj.sort(outer1_27);
        }
      }
    }
  });
  const item2 = importDefault(5071)(_null._categories, _null).forEach(setIndex);
  setupSortLists();
}
function rebuildChannels() {
  channels = channels.getChannels(c17);
  if (channels === channels) {
    return false;
  } else {
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
    const item2 = channels[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      let canResult = "null" === channel.id;
      if (!canResult) {
        canResult = outer1_14.can(outer1_16.VIEW_CHANNEL, channel);
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
    const arr = importDefault(5071)(_null._categories, _null, (channel) => {
      channel = channel.channel;
      let tmp = channel.type === outer1_15.GUILD_CATEGORY;
      if (!tmp) {
        let hasItem = null != outer1_21;
        if (hasItem) {
          hasItem = outer1_21.has(channel.type);
        }
        tmp = hasItem;
      }
      return tmp;
    });
    let closure_18 = arr.map((channel) => channel.channel.id);
  }
}
let closure_2 = ["lock_permissions", "id"];
({ isGuildSelectableChannelType: closure_9, isGuildVocalChannelType: closure_10 } = _callSuper);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_11, GUILD_VOCAL_CHANNELS_KEY: closure_12 } = _isNativeReflectConstruct);
({ ChannelTypes: closure_15, Permissions: closure_16 } = ME);
let c17 = null;
let c18 = null;
let c19 = null;
let c20 = null;
let c21 = null;
let c22 = null;
let closure_23 = {};
let closure_24 = require("apply").debounce(() => {
  rebuildChannels();
  tmp5.emitChange();
}, 500);
let tmp5 = ((Store) => {
  class GuildSettingsModalChannelsStoreClass {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildSettingsModalChannelsStoreClass);
      obj = outer1_6(GuildSettingsModalChannelsStoreClass);
      tmp2 = outer1_5;
      if (outer1_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildSettingsModalChannelsStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13, outer1_14);
      const items = [outer1_13];
      this.syncWith(items, () => {
        outer2_24();
        return false;
      });
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "initGuild",
    value(arg0) {
      const outer1_17 = arg0;
      outer1_30();
    }
  };
  items[1] = obj;
  obj = {
    key: "channels",
    get() {
      return outer1_19;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "order",
    get() {
      return outer1_18;
    }
  };
  items[4] = {
    key: "sortingType",
    get() {
      return outer1_21;
    }
  };
  items[5] = {
    key: "channelList",
    get() {
      return outer1_22;
    }
  };
  items[6] = {
    key: "getLocalChannel",
    value(arg0) {
      return outer1_23[arg0];
    }
  };
  return callback(GuildSettingsModalChannelsStoreClass, items);
})(require("initialize").Store);
tmp5.displayName = "GuildSettingsModalChannelsStore";
tmp5 = new tmp5(require("dispatcher"), {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    let c17 = null;
    let c18 = null;
    let c19 = null;
    let c21 = null;
    let c22 = null;
    let c20 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == c19) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      setupSortLists();
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    let c21 = null;
    setupSortLists();
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      let lock_permissions;
      if (null != outer1_23[id.id]) {
        ({ lock_permissions, id } = id);
        outer1_23[id.id] = outer1_23[id.id].merge(outer1_8(id, outer1_2));
        const obj = outer1_23[id.id];
      }
    });
    buildSortedChannels();
  }
});
let closure_25 = tmp5;
let obj = {
  GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE: function handleTerminate() {
    let c17 = null;
    let c18 = null;
    let c19 = null;
    let c21 = null;
    let c22 = null;
    let c20 = null;
  },
  GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER: function handleStartReorder(sortingType) {
    sortingType = sortingType.sortingType;
    if (null == c19) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(sortingType);
      setupSortLists();
    }
  },
  GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER: function handleStopReorder() {
    let c21 = null;
    setupSortLists();
  },
  GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE: function handleLocalSortChange(updates) {
    updates = updates.updates;
    const item = updates.forEach((id) => {
      let lock_permissions;
      if (null != outer1_23[id.id]) {
        ({ lock_permissions, id } = id);
        outer1_23[id.id] = outer1_23[id.id].merge(outer1_8(id, outer1_2));
        const obj = outer1_23[id.id];
      }
    });
    buildSortedChannels();
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/GuildSettingsModalChannelsStore.tsx");

export default tmp5;
