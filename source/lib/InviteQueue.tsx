// Module ID: 11735
// Function ID: 91168
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11735 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]).Millis.SECOND + 10;
const obj = { GROUP_DM: 0, [0]: "GROUP_DM", USER: 1, [1]: "USER", CHANNEL: 2, [2]: "CHANNEL" };
let tmp2 = (arg0) => {
  class InviteQueue {
    constructor() {
      self = this;
      tmp = closure_2(this, InviteQueue);
      tmp2 = InviteQueue(closure_1[7]);
      tmp2 = new tmp2("InviteQueue");
      items = [, ];
      items[0] = tmp2;
      items[1] = closure_8;
      obj = closure_5(InviteQueue);
      tmp4 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp4(self, constructResult);
    }
  }
  const importDefault = InviteQueue;
  callback2(InviteQueue, arg0);
  let obj = {
    key: "_sendInvite",
    value(id, code, _location, closure_1) {
      const InviteQueue = arg4;
      const obj = InviteQueue(closure_1[8]);
      InviteQueue(closure_1[8]).sendInvite(id.id, code, _location, closure_1).then(() => arg4(null, true), () => arg4(null, false));
    }
  };
  const items = [obj, ];
  obj = {
    key: "drain",
    value(location) {
      const self = this;
      const InviteQueue = this;
      const _location = location.location;
      const inviteAnalyticsMetadata = location.inviteAnalyticsMetadata;
      const type = location.type;
      if (constants.GROUP_DM !== type) {
        if (constants.CHANNEL !== type) {
          if (constants.USER === type) {
            const obj = InviteQueue(location[9]);
            InviteQueue(location[9]).ensurePrivateChannel(location.user.id).then((channelId) => {
              const channel = channel.getChannel(channelId);
              if (null != channel) {
                self._sendInvite(channel, channelId.inviteKey, _location, inviteAnalyticsMetadata, arg1);
              } else {
                arg1(null, false);
              }
            }, () => arg1(null, false));
            const ensurePrivateChannelResult = InviteQueue(location[9]).ensurePrivateChannel(location.user.id);
          }
        }
      }
      self._sendInvite(location.channel, location.inviteKey, _location, inviteAnalyticsMetadata, arg1);
    }
  };
  items[1] = obj;
  return callback(InviteQueue, items);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("lib/InviteQueue.tsx");

export default tmp2;
export const InvitePropertiesType = obj;
