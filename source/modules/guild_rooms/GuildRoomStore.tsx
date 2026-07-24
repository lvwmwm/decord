// Module ID: 16096
// Function ID: 124626
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 29, 1194, 4202, 1906, 12738, 566, 686, 2]

// Module 16096 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSelectedChannelStoreChange() {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  if (null != voiceChannelId) {
    map2.delete(voiceChannelId);
    let tmp6 = null == tmp5;
    if (!tmp6) {
      tmp6 = tmp5;
    }
    dependencyMap3[voiceChannelId] = tmp6;
    const tmp4 = dependencyMap3;
  }
}
function handleNoteCreateComplete(arg0) {
  delete tmp[tmp2];
}
let closure_2 = ["users", "objects"];
let closure_3 = ["users", "objects"];
let closure_4 = ["users"];
let map = new Map();
let obj = {};
let closure_16 = [];
const map1 = new Map();
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let c21 = null;
let closure_22 = {};
const map2 = new Map();
let c24 = false;
let closure_25 = {};
let tmp5 = ((Store) => {
  class GuildRoomStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, GuildRoomStore);
      obj = outer1_8(GuildRoomStore);
      tmp2 = outer1_7;
      if (outer1_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildRoomStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_12, outer1_13);
      const items = [outer1_13];
      this.syncWith(items, outer1_27);
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "getRoom",
    value(arg0) {
      let tmp = outer1_18[arg0];
      if (null == tmp) {
        tmp = outer1_15;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRoomUsers",
    value(arg0) {
      let tmp = outer1_19[arg0];
      if (null == tmp) {
        tmp = outer1_14;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRoomObjects",
    value(arg0) {
      let tmp = outer1_20[arg0];
      if (null == tmp) {
        tmp = outer1_17;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getPendingPosition",
    value() {
      return outer1_21;
    }
  };
  items[5] = {
    key: "getMediaSessionId",
    value(arg0) {
      return outer1_23.get(arg0);
    }
  };
  items[6] = {
    key: "isVisible",
    value(arg0) {
      return null == outer1_22[arg0] || outer1_22[arg0];
    }
  };
  items[7] = {
    key: "getPendingNote",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_25[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "getNotes",
    value(arg0) {
      const roomObjects = this.getRoomObjects(arg0);
      let value = roomObjects.get(GuildRoomStore(outer1_1[9]).GuildRoomObjectTypes.NOTE);
      if (null == value) {
        value = outer1_16;
      }
      return value;
    }
  };
  return callback(GuildRoomStore, items);
})(require("initialize").Store);
obj = {
  GUILD_ROOM_CONNECT: function handleConnect(room) {
    let objects;
    let users;
    room = room.room;
    ({ users, objects } = room);
    closure_18[room.roomId] = callback3(room, closure_2);
    closure_19[room.roomId] = users;
    closure_20[room.roomId] = objects;
    let tmp = null != room.guildId;
    if (tmp) {
      tmp = null != c21;
    }
    if (tmp) {
      c21 = null;
    }
  },
  GUILD_ROOM_CONNECT_FAILURE: function handleConnectFailure(roomId) {
    roomId = roomId.roomId;
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const id = store.getId();
      const map = new Map(dependencyMap2[roomId]);
      map.delete(id);
      dependencyMap2[roomId] = map;
    }
  },
  GUILD_ROOM_DISCONNECT: function handleDisconnect(arg0) {
    let roomId;
    let userId;
    ({ userId, roomId } = arg0);
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const map = new Map(dependencyMap2[roomId]);
      map.delete(userId);
      dependencyMap2[roomId] = map;
      let tmp4 = c24;
      if (c24) {
        tmp4 = userId === store.getId();
      }
      if (tmp4) {
        closure_22[roomId] = true;
        c24 = false;
      }
      if (userId === store.getId()) {
        delete tmp[tmp2];
      }
    }
  },
  GUILD_ROOM_UPDATE: function handleUpdate(room) {
    let objects;
    let users;
    room = room.room;
    ({ users, objects } = room);
    closure_18[room.roomId] = callback3(room, closure_3);
    closure_20[room.roomId] = objects;
    const id = store.getId();
    let value;
    if (null != dependencyMap2[room.roomId]) {
      value = obj.get(id);
    }
    dependencyMap2[room.roomId] = users;
    if (null != value) {
      if (null != dependencyMap2[room.roomId]) {
        const result = obj2.set(id, value);
      }
    }
  },
  GUILD_ROOM_UPDATE_FAILURE: function handleUpdateFailure(arg0) {
    let originalRoom;
    let originalRoomUsers;
    ({ originalRoom, originalRoomUsers } = arg0);
    if (null == dependencyMap[originalRoom.roomId]) {
      return false;
    } else {
      let obj = {};
      const merged = Object.assign(tmp);
      obj["background"] = originalRoom.background;
      dependencyMap[originalRoom.roomId] = obj;
      const id = store.getId();
      const value = originalRoomUsers.get(id);
      if (null == value) {
        const _Map = Map;
        const map = new Map(dependencyMap2[originalRoom.roomId]);
        map.delete(id);
        dependencyMap2[originalRoom.roomId] = map;
      } else {
        obj = dependencyMap2[originalRoom.roomId];
        if (null != obj) {
          const result = obj.set(id, value);
        }
      }
    }
  },
  GUILD_ROOM_FETCH_SUCCESS: function handleFetchSuccess(room) {
    room = room.room;
    closure_18[room.roomId] = callback3(room, closure_4);
    closure_19[room.roomId] = room.users;
  },
  GUILD_ROOM_LOCAL_POSITION_REQUESTED: function handleLocalPositionRequested(position) {
    position = position.position;
  },
  GUILD_ROOM_TOGGLE_LAYOUT: function handleToggleLayout(roomId) {
    roomId = roomId.roomId;
    dependencyMap3[roomId] = !dependencyMap3[roomId];
    if (roomId.clearLayout) {
      let c24 = true;
    }
  },
  GUILD_ROOM_LOCAL_UPDATE: function handleLocalUpdate(arg0) {
    let background;
    let position;
    let roomId;
    let statusId;
    let statusText;
    ({ roomId, background, position, statusId, statusText } = arg0);
    if (null == dependencyMap[roomId]) {
      return false;
    } else {
      const id = store.getId();
      if (null != background) {
        let obj = {};
        const merged = Object.assign(dependencyMap[roomId]);
        obj["background"] = background;
        dependencyMap[roomId] = obj;
      }
      if (null != position) {
        const value = dependencyMap2[roomId].get(id);
        if (null != value) {
          const _Map = Map;
          const map = new Map(dependencyMap2[roomId]);
          obj = {};
          const merged1 = Object.assign(value);
          if (null == position) {
            position = value.position;
          }
          obj["position"] = position;
          if (null == statusId) {
            statusId = value.statusId;
          }
          obj["statusId"] = statusId;
          if (null == statusText) {
            statusText = value.statusText;
          }
          obj["statusText"] = statusText;
          const result = map.set(id, obj);
          dependencyMap2[roomId] = map;
        }
        const obj2 = dependencyMap2[roomId];
      }
    }
  },
  MEDIA_SESSION_JOINED: function handleMediaSessionJoined() {
    const channelId = store2.getChannelId();
    const mediaSessionId = store2.getMediaSessionId();
    if (tmp3) {
      const result = map2.set(channelId, mediaSessionId);
    }
  },
  GUILD_ROOM_PENDING_NOTE_START: function handlePendingNoteStart(roomId) {
    closure_25[roomId.roomId] = { position: null };
  },
  GUILD_ROOM_PENDING_NOTE_PLACE: function handlePendingNotePlace(roomId) {
    roomId = roomId.roomId;
    if (null == table[roomId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp2);
      obj["position"] = tmp;
      table[roomId] = obj;
    }
  },
  GUILD_ROOM_PENDING_NOTE_DELETE: handleNoteCreateComplete,
  GUILD_ROOM_NOTE_CREATE_COMPLETE: handleNoteCreateComplete
};
tmp5 = new tmp5(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_rooms/GuildRoomStore.tsx");

export default tmp5;
export const DEFAULT_ROOM = obj;
