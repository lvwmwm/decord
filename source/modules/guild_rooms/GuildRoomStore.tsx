// Module ID: 15932
// Function ID: 122131
// Name: _isNativeReflectConstruct
// Dependencies: [4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15932 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import closure_9 from "__exportStarResult1";
import closure_10 from "__exportStarResult1";
import closure_11 from "__exportStarResult1";
import closure_12 from "__exportStarResult1";
import closure_13 from "__exportStarResult1";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSelectedChannelStoreChange() {
  const voiceChannelId = voiceChannelId.getVoiceChannelId();
  if (null != voiceChannelId) {
    map2.delete(voiceChannelId);
    let tmp6 = null == tmp5;
    if (!tmp6) {
      tmp6 = tmp5;
    }
    closure_22[voiceChannelId] = tmp6;
    const tmp4 = closure_22;
  }
}
function handleNoteCreateComplete(arg0) {
  delete r0[r1];
}
let closure_2 = [null, null];
let closure_3 = [null, null];
let closure_4 = [];
let closure_5 = importDefault(dependencyMap[0]);
const map = new Map();
let obj = {};
let closure_16 = [];
const map1 = new Map();
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = null;
let closure_22 = {};
const map2 = new Map();
let closure_24 = false;
let closure_25 = {};
let tmp5 = (Store) => {
  class GuildRoomStore {
    constructor() {
      self = this;
      tmp = closure_5(this, GuildRoomStore);
      obj = closure_8(GuildRoomStore);
      tmp2 = closure_7;
      if (closure_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildRoomStore;
  callback2(GuildRoomStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_12, closure_13);
      const items = [closure_13];
      this.syncWith(items, closure_27);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getRoom",
    value(arg0) {
      let tmp = closure_18[arg0];
      if (null == tmp) {
        tmp = closure_15;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getRoomUsers",
    value(arg0) {
      let tmp = closure_19[arg0];
      if (null == tmp) {
        tmp = closure_14;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRoomObjects",
    value(arg0) {
      let tmp = closure_20[arg0];
      if (null == tmp) {
        tmp = closure_17;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getPendingPosition",
    value() {
      return closure_21;
    }
  };
  items[5] = {
    key: "getMediaSessionId",
    value(arg0) {
      return closure_23.get(arg0);
    }
  };
  items[6] = {
    key: "isVisible",
    value(arg0) {
      return null == closure_22[arg0] || closure_22[arg0];
    }
  };
  items[7] = {
    key: "getPendingNote",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_25[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "getNotes",
    value(arg0) {
      const roomObjects = this.getRoomObjects(arg0);
      let value = roomObjects.get(GuildRoomStore(closure_1[9]).GuildRoomObjectTypes.NOTE);
      if (null == value) {
        value = closure_16;
      }
      return value;
    }
  };
  return callback(GuildRoomStore, items);
}(require("__exportStarResult1").Store);
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
      tmp = null != closure_21;
    }
    if (tmp) {
      closure_21 = null;
    }
  },
  GUILD_ROOM_CONNECT_FAILURE: function handleConnectFailure(roomId) {
    roomId = roomId.roomId;
    if (null == closure_18[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const id = store.getId();
      const map = new Map(closure_19[roomId]);
      map.delete(id);
      closure_19[roomId] = map;
    }
  },
  GUILD_ROOM_DISCONNECT: function handleDisconnect(arg0) {
    let roomId;
    let userId;
    ({ userId, roomId } = arg0);
    if (null == closure_18[roomId]) {
      return false;
    } else {
      const _Map = Map;
      const map = new Map(closure_19[roomId]);
      map.delete(userId);
      closure_19[roomId] = map;
      let tmp2 = closure_24;
      if (closure_24) {
        tmp2 = userId === store.getId();
      }
      if (tmp2) {
        closure_22[roomId] = true;
        closure_24 = false;
      }
      if (userId === store.getId()) {
        delete r0[r1];
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
    if (null != closure_19[room.roomId]) {
      value = obj.get(id);
    }
    closure_19[room.roomId] = users;
    if (null != value) {
      if (null != closure_19[room.roomId]) {
        const result = obj2.set(id, value);
      }
    }
  },
  GUILD_ROOM_UPDATE_FAILURE: function handleUpdateFailure(arg0) {
    let originalRoom;
    let originalRoomUsers;
    ({ originalRoom, originalRoomUsers } = arg0);
    if (null == closure_18[originalRoom.roomId]) {
      return false;
    } else {
      let obj = {};
      const merged = Object.assign(tmp);
      obj["background"] = originalRoom.background;
      closure_18[originalRoom.roomId] = obj;
      const id = store.getId();
      const value = originalRoomUsers.get(id);
      if (null == value) {
        const _Map = Map;
        const map = new Map(closure_19[originalRoom.roomId]);
        map.delete(id);
        closure_19[originalRoom.roomId] = map;
      } else {
        obj = closure_19[originalRoom.roomId];
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
    closure_22[roomId] = !closure_22[roomId];
    if (roomId.clearLayout) {
      let closure_24 = true;
    }
  },
  GUILD_ROOM_LOCAL_UPDATE: function handleLocalUpdate(arg0) {
    let background;
    let position;
    let roomId;
    let statusId;
    let statusText;
    ({ roomId, background, position, statusId, statusText } = arg0);
    if (null == closure_18[roomId]) {
      return false;
    } else {
      const id = store.getId();
      if (null != background) {
        let obj = {};
        const merged = Object.assign(closure_18[roomId]);
        obj["background"] = background;
        closure_18[roomId] = obj;
      }
      if (null != position) {
        const value = closure_19[roomId].get(id);
        if (null != value) {
          const _Map = Map;
          const map = new Map(closure_19[roomId]);
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
          closure_19[roomId] = map;
        }
        const obj2 = closure_19[roomId];
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
    if (null == closure_25[roomId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp2);
      obj["position"] = tmp;
      closure_25[roomId] = obj;
    }
  },
  GUILD_ROOM_PENDING_NOTE_DELETE: handleNoteCreateComplete,
  GUILD_ROOM_NOTE_CREATE_COMPLETE: handleNoteCreateComplete
};
tmp5 = new tmp5(require("__exportStarResult1"), obj);
const result = require("__exportStarResult1").fileFinishedImporting("modules/guild_rooms/GuildRoomStore.tsx");

export default tmp5;
export const DEFAULT_ROOM = obj;
