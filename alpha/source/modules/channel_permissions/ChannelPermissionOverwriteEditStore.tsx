// Module ID: 19505
// Function ID: 19506
// Name: ChannelPermissionOverwriteEditStore
// Dependencies: [504, 19506, 572, 2]
// Exports: getChannelPermissionOverwriteResourceKey

// Module 19505 (ChannelPermissionOverwriteEditStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelPermissionOverwriteEditUtils from "ChannelPermissionOverwriteEditUtils" /* 19506 */;
import size from "module_2" /* 2 */;

function getPendingEdits(arg0, arg1) {
  let value = map.get("" + arg0 + ":" + arg1);
  if (value == null) {
    value = closure_2;
  }
  return value;
}
function setPendingEdits(arg0, arg1, arg2) {
  const combined = "" + arg0 + ":" + arg1;
  if (0 === Object.keys(arg2).length) {
    map.delete(combined);
  } else {
    const result = map.set(combined, arg2);
  }
}
function handleEditSettled(channelId) {
  function settleEdits(channelId, overwriteId, mutations) {
    const tmp = getPendingEdits(channelId, overwriteId);
    let tmp2 = tmp;
    const iter = mutations[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let flagKey = nextResult.flagKey;
      let editId = nextResult.editId;
      let tmp6 = tmp2[flagKey];
      let editId1;
      if (tmp6 != null) {
        editId1 = tmp6.editId;
      }
      if (editId1 === editId) {
        if (tmp2 === tmp) {
          let obj = {};
          let merged = Object.assign(tmp);
          tmp2 = obj;
        }
        delete tmp2[flagKey];
      }
      continue;
    }
    if (tmp2 === tmp) {
      return false;
    } else {
      setPendingEdits(channelId, overwriteId, tmp2);
    }
  }
  return settleEdits(channelId.channelId, channelId.overwriteId, channelId.mutations);
}
let closure_2 = {};
let map = new Map();
const Store = get_initializedDefault.Store;
class ChannelPermissionOverwriteEditStore extends Store {
  getPendingEdits(arg0, arg1) {
    let value = map.get("" + arg0 + ":" + arg1);
    if (value == null) {
      value = closure_2;
    }
    return value;
  }
  getReadyEdits(arg0, arg1) {
    const _Object = Object;
    let value = map.get("" + arg0 + ":" + arg1);
    if (value == null) {
      value = closure_2;
    }
    const values2 = values(value);
    return values2.filter((ready) => ready.ready);
  }
  getEffectiveOverwrite(id, id2, channelPermissionOverwrite) {
    let flag;
    let value;
    let result = channelPermissionOverwrite;
    const values = Object.values(getPendingEdits(id, id2));
    for (const item10014 of values) {
      ({ flag, value } = item10014);
      let obj = ChannelPermissionOverwriteEditUtils;
      result = obj.applyChannelPermissionOverwriteEdit(result, flag, value);
      continue;
    }
    return result;
  }
}
const prototype = ChannelPermissionOverwriteEditStore.prototype;
ChannelPermissionOverwriteEditStore.displayName = "ChannelPermissionOverwriteEditStore";
let obj = {
  CHANNEL_PERMISSION_OVERWRITE_EDIT_START: function handleEditStart(arg0) {
    let channelId;
    let editId;
    let flag;
    let overwriteId;
    let ready;
    let value;
    ({ channelId, overwriteId, flag } = arg0);
    ({ value, editId, ready } = arg0);
    const StringResult = String(flag);
    let value2 = map.get("" + channelId + ":" + overwriteId);
    if (value2 == null) {
      value2 = closure_2;
    }
    const obj = {};
    const merged = Object.assign(value2);
    obj[StringResult] = { flag, value, editId, ready };
    const combined = "" + channelId + ":" + overwriteId;
    if (0 === Object.keys(obj).length) {
      map.delete(combined);
    } else {
      const result = map.set(combined, obj);
    }
  },
  CHANNEL_PERMISSION_OVERWRITE_EDIT_READY: function handleEditReady(editId) {
    let channelId;
    let flagKey;
    let overwriteId;
    ({ channelId, overwriteId, flagKey } = editId);
    editId = editId.editId;
    let value = map.get("" + channelId + ":" + overwriteId);
    if (value == null) {
      value = closure_2;
    }
    let editId1;
    if (value[flagKey] != null) {
      editId1 = tmp2.editId;
    }
    if (editId1 === editId) {
      if (!value[flagKey].ready) {
        const obj = {};
        const merged = Object.assign(value);
        const obj2 = { ready: true };
        const merged1 = Object.assign(tmp2);
        obj[flagKey] = obj2;
        const _HermesInternal = HermesInternal;
        const combined = "" + channelId + ":" + overwriteId;
        const _Object = Object;
        if (0 === Object.keys(obj).length) {
          map.delete(combined);
        } else {
          const result = map.set(combined, obj);
        }
      }
    }
    return false;
  },
  CHANNEL_PERMISSION_OVERWRITE_EDIT_SUCCESS: handleEditSettled,
  CHANNEL_PERMISSION_OVERWRITE_EDIT_FAILURE: handleEditSettled,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function handleDeleteOverwrite(channelId) {
    const combined = "" + channelId.channelId + ":" + channelId.overwriteId;
    if (map.has(combined)) {
      map.delete(combined);
    } else {
      return false;
    }
  },
  LOGOUT: function handleReset() {
    const tmp = map.size > 0;
    map = new Map();
    return tmp;
  }
};
const channelPermissionOverwriteEditStore = new ChannelPermissionOverwriteEditStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionOverwriteEditStore.tsx");

export default channelPermissionOverwriteEditStore;
export function getChannelPermissionOverwriteResourceKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
