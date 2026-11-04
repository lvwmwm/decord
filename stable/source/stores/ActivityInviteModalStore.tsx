// Module ID: 15085
// Function ID: 15086
// Name: ActivityInviteModalStore
// Dependencies: [4855, 4877, 11226, 5744, 4945, 1392, 7354, 1087, 9099, 1128, 5636, 11244, 504, 584, 2]

// Module 15085 (ActivityInviteModalStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl3 from "intl" /* 1128 */;
import _mod9099 from "module_9099" /* 9099 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import GuildStore from "GuildStore" /* 4877 */;
import LocalActivityStore from "LocalActivityStore" /* 11226 */;
import PresenceStore from "PresenceStore" /* 5744 */;
import RelationshipStore from "RelationshipStore" /* 4945 */;
import UserStore from "UserStore" /* 1392 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7354 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const _modDef9099 = _mod9099;
let _null, _null2, activity, channel, guild, privateChannelIds, set, user;

let closure_12;
let unpackModuleId;
const f123370 = (type) => {
  if (type.type === _mod9099.AutocompleterResultTypes.USER) {
    let tmp7;
    const status = PresenceStore.getStatus(type.data.record.id);
    const id = type.data.record.id;
    application_id = undefined;
    if (application_id != null) {
      application_id = application_id.application_id;
    }
    const tmp3 = null != application_id && null != obj.findActivity(id, (application_id) => application_id.application_id === application_id, null, false);
    if (status !== type.status) {
      const obj2 = { status, playingSameGame: tmp3 };
      const merged = Object.assign(type);
      tmp7 = obj2;
    } else {
      tmp7 = type;
    }
    return tmp7;
  }
  return type;
};
function toHeaderResult(intl) {
  let obj2;
  const obj = { type: _mod9099.AutocompleterResultTypes.HEADER, sent: false, data: obj2.createHeaderResult(intl) };
  obj2 = _mod9099;
  return obj;
}
function withSameGameSection(mapped) {
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  if (null == application_id) {
    return mapped;
  } else {
    items = [];
    const items1 = [];
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      if (nextResult.type === _mod9099.AutocompleterResultTypes.USER) {
        if (true === tmp6.playingSameGame) {
          let arr = items.push(tmp6);
          continue;
        }
      }
      let arr2 = items1.push(tmp6);
    }
    let tmp14 = mapped;
    if (0 !== items.length) {
      tmp14 = mapped;
      if (0 !== items1.length) {
        const intl = intl3.intl;
        const obj = { name: activity.name };
        const items2 = [toHeaderResult(intl.formatToPlainString(intl3.t.HBJiRR, obj)), ];
        const arraySpreadResult = HermesBuiltin.arraySpread(items2, items, 1);
        const intl2 = intl3.intl;
        items2[arraySpreadResult] = toHeaderResult(intl2.string(intl3.t.Jf0OOQ));
        HermesBuiltin.arraySpread(items2, items1, arraySpreadResult + 1);
        tmp14 = items2;
      }
    }
    return tmp14;
  }
}
function handlePresenceReset() {
  let flag = false;
  if (null != c14) {
    flag = false;
    if (null != c3) {
      let c0 = null;
      mapped = mapped.map(f123370);
      let flag2 = !mapped.every((item, index) => item === mapped[index]);
      mapped.every((item, index) => item === mapped[index]);
      if (flag2) {
        closure_18 = withSameGameSection(mapped);
        flag2 = true;
      }
      flag = flag2;
    }
  }
  return flag;
}
function handleLocalActivityUpdate() {
  let applicationActivity = null;
  if (null != activity) {
    applicationActivity = null;
    if (null != activity.application_id) {
      applicationActivity = LocalActivityStore.getApplicationActivity(activity.application_id);
    }
  }
  let tmp5 = null != activity;
  if (tmp5) {
    tmp5 = null == applicationActivity || null == applicationActivity.party || null == applicationActivity.party.id;
  }
  if (tmp5) {
    let flag = null != activity || null != _null;
    if (flag) {
      activity = null;
      if (null != _null) {
        _null.destroy();
        _null = null;
      }
      flag = true;
      if (null != _null2) {
        _null2();
        _null2 = null;
        flag = true;
      }
    }
    tmp5 = flag;
  }
  return tmp5;
}
({ ChannelTypes: unpackModuleId, ActivityActionTypes: closure_12 } = Constants);
let items = [_mod9099.AutocompleterResultTypes.TEXT_CHANNEL, _mod9099.AutocompleterResultTypes.GROUP_DM, _mod9099.AutocompleterResultTypes.USER];
let c14 = null;
let c15 = null;
items = [];
let mapped = [];
let closure_18 = [];
const Store = get_initializedDefault.Store;
class ActivityInviteModalStoreClass extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildStore, LocalActivityStore, PresenceStore, PrivateChannelSortStore, UserStore);
  }
  getActivity() {
    return c14;
  }
  getQuery() {
    let str;
    if (_null != null) {
      str = _null.query;
    }
    if (str == null) {
      str = "";
    }
    return str;
  }
  getResults() {
    return closure_18;
  }
}
const prototype = ActivityInviteModalStoreClass.prototype;
ActivityInviteModalStoreClass.displayName = "ActivityInviteModalStore";
let obj = {
  ACTIVITY_INVITE_MODAL_OPEN: function handleActivitityInviteSetActivity(arg0) {
    let c14;
    let c15;
    ({ activity: c14, resolve: c15 } = arg0);
    items = [];
    if (null == _null) {
      const self = this;
      const self2 = this;
      const tmp4 = new _modDef9099((arg0, str) => {
        let status;
        let arr = arg0;
        if ("" === str.trim()) {
          items = [];
          privateChannelIds = privateChannelIds.getPrivateChannelIds();
          const item = privateChannelIds.forEach((item) => {
            channel = channel.getChannel(item);
            if (null != channel) {
              if (channel.type === constants.DM) {
                const recipientId = channel.getRecipientId();
                user = null;
                if (null != recipientId) {
                  user = user.getUser(recipientId);
                }
                if (null != user) {
                  const push2 = items.push;
                  const obj = { type: _mod9099.AutocompleterResultTypes.USER, record: user, score: 0 };
                  push2(obj);
                }
              } else if (channel.isMultiUserDM()) {
                const push = items.push;
                const obj2 = { type: _mod9099.AutocompleterResultTypes.GROUP_DM, record: channel, score: 0 };
                push(obj2);
              }
            }
          });
          arr = items;
        }
        mapped = arr.map((type) => {
          let record;
          let str2;
          let str3;
          let tmp16;
          type = type.type;
          if (items(closure_1_2[8]).AutocompleterResultTypes.USER === type) {
            const record3 = type.record;
            const id = record3.id;
            application_id = undefined;
            const obj2 = { type: items(closure_1_2[8]).AutocompleterResultTypes.USER, sent: closure_1_16.includes(record3.id), status: status.getStatus(record3.id), playingSameGame: tmp16, data: type };
            if (application_id != null) {
              application_id = application_id.application_id;
            }
            tmp16 = null != application_id && null != obj5.findActivity(id, (application_id) => application_id.application_id === application_id, null, false);
            return obj2;
          } else if (items(closure_1_2[8]).AutocompleterResultTypes.TEXT_CHANNEL === type) {
            const record2 = type.record;
            channel = channel.getChannel(record2.parent_id);
            guild = guild.getGuild(record2.guild_id);
            const obj3 = { type: items(closure_1_2[8]).AutocompleterResultTypes.TEXT_CHANNEL, sent: closure_1_16.includes(record2.id), categoryName: str2, guildName: str3, data: type };
            str2 = "";
            if (null != channel) {
              const tmpResult = items(closure_1_2[10]);
              str2 = tmpResult.computeChannelName(channel, user, closure_1_8);
            }
            str3 = undefined;
            if (guild != null) {
              str3 = guild.name;
            }
            if (str3 == null) {
              str3 = "";
            }
            return obj3;
          } else if (items(closure_1_2[8]).AutocompleterResultTypes.GROUP_DM === type) {
            const obj = { type: items(closure_1_2[8]).AutocompleterResultTypes.GROUP_DM, sent: closure_1_16.includes(record.id), data: type };
            record = type.record;
            return obj;
          } else {
            return null;
          }
        });
        const found = mapped.filter((item) => null != item);
        closure_18 = closure_20(found);
        closure_21.emitChange();
      }, items, 100);
      _null = tmp4;
    }
    _null.search("");
  },
  ACTIVITY_INVITE_MODAL_QUERY: function handleActivityInviteQuery(query) {
    query = query.query;
    if (null != _null) {
      if (query !== _null.query) {
        _null.search(query);
      }
    }
    return false;
  },
  ACTIVITY_INVITE_MODAL_SEND: function handleActivityInviteSend(channelId) {
    const f123365 = (type) => {
      let tmp = type;
      if (type.type !== channelId(closure_1_2[8]).AutocompleterResultTypes.HEADER) {
        const obj = { sent: closure_1_16.includes(type.data.record.id) };
        const merged = Object.assign(type);
        tmp = obj;
      }
      return tmp;
    };
    if (null == activity) {
      return false;
    } else {
      channelId = channelId.channelId;
      const userId = channelId.userId;
      if (null != channelId) {
        let tmp = userId;
        let obj = userId(11244);
        const obj2 = { channelId, type: constants.JOIN, activity, location: "Channel Text Area - Invite to Join Modal" };
        const sendActivityInviteResult = obj.sendActivityInvite(obj2);
        sendActivityInviteResult.then(() => {
          items = [];
          items[HermesBuiltin.arraySpread(items, items, 0)] = channelId;
          mapped = mapped.map(f123365);
          closure_18 = withSameGameSection(mapped);
          activityInviteModalStoreClass.emitChange();
        });
      } else if (null != userId) {
        const obj4 = { userId, type: constants.JOIN, activity, location: "Channel Text Area - Invite to Join Modal" };
        const obj3 = userId(11244);
        const result = obj3.sendActivityInviteUser(obj4);
        result.then(() => {
          items = [];
          items[HermesBuiltin.arraySpread(items, items, 0)] = userId;
          mapped = mapped.map(f123365);
          closure_18 = withSameGameSection(mapped);
          activityInviteModalStoreClass.emitChange();
        });
      }
      return false;
    }
  },
  ACTIVITY_INVITE_MODAL_CLOSE: function handleActivityInviteClose() {
    let flag = null != c14 || null != _null;
    if (flag) {
      c14 = null;
      if (null != _null) {
        _null.destroy();
        _null = null;
      }
      flag = true;
      if (null != _null2) {
        _null2();
        _null2 = null;
        flag = true;
      }
    }
    return flag;
  },
  OVERLAY_SET_INPUT_LOCKED: function handleSetLocked(locked) {
    locked = locked.locked;
    let tmp = !locked;
    if (locked) {
      tmp = null == c14;
    }
    let flag = !tmp;
    if (flag) {
      flag = true;
      const tmp6 = null != c14 || null != _null;
      if (tmp6) {
        c14 = null;
        if (null != _null) {
          _null.destroy();
          _null = null;
        }
        flag = true;
        if (null != _null2) {
          _null2();
          _null2 = null;
          flag = true;
        }
      }
    }
    return flag;
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    set = undefined;
    let flag = false;
    if (null != c14) {
      flag = false;
      if (null != c3) {
        set = null;
        if (null != updates) {
          let tmp3 = globalThis;
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(updates.map((user) => user.user.id));
        }
        mapped = mapped.map(f123370);
        let flag2 = !mapped.every((item, index) => item === mapped[index]);
        mapped.every((item, index) => item === mapped[index]);
        if (flag2) {
          closure_18 = withSameGameSection(mapped);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  PRESENCES_REPLACE: handlePresenceReset,
  CONNECTION_OPEN_SUPPLEMENTAL: handlePresenceReset,
  LOCAL_ACTIVITY_UPDATE: handleLocalActivityUpdate,
  RPC_APP_DISCONNECTED: handleLocalActivityUpdate
};
const activityInviteModalStoreClass = new ActivityInviteModalStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/ActivityInviteModalStore.tsx");

export default activityInviteModalStoreClass;
