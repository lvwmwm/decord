// Module ID: 8961
// Function ID: 70591
// Dependencies: [1348, 3767, 1849, 653, 4944, 507, 675, 4470, 1212, 8962, 8959, 686, 2]

// Module 8961
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ Endpoints: closure_6, AnalyticEvents: closure_7, ChannelTypesSets: closure_8, ChannelTypes: closure_9 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/CallActionCreators.tsx");

export default {
  call(arg0, arg1, arg2, arg3, arg4) {
    const self = this;
    let closure_1 = arg0;
    const dependencyMap = arg1;
    let _isNativeReflectConstruct = arg2;
    const blocked = arg3;
    const user = arg4;
    function doCall(arg0) {
      const voiceChannel = callback(4944).selectVoiceChannel(callback, dependencyMap);
      if (arg0) {
        self.ring(callback);
      }
      if (null != callback2) {
        callback2(callback);
      }
    }
    if (null != arg3) {
      if (!blocked.isBlocked(arg3)) {
        const user2 = user.getUser(arg3);
        const HTTP = self(507).HTTP;
        let obj = { url: doCall.CALL(arg0), oldFormErrors: true, rejectWithError: true };
        const value = HTTP.get(obj);
        value.then((body) => {
          let ringable = _isNativeReflectConstruct;
          if (_isNativeReflectConstruct) {
            ringable = body.body.ringable;
          }
          doCall(ringable);
        }, () => {
          let obj = callback(675);
          obj.track(closure_7.OPEN_POPOUT, { type: "Not Friend", source: "Call" });
          obj = {};
          const intl = self(1212).intl;
          obj.title = intl.string(self(1212).t.My50nf);
          const intl2 = self(1212).intl;
          obj = {};
          let str = "";
          if (null != closure_7) {
            str = closure_7.username;
          }
          obj.username = str;
          obj.body = intl2.format(self(1212).t.IdKo2z, obj);
          const intl3 = self(1212).intl;
          obj.confirmText = intl3.string(self(1212).t["PMsq/b"]);
          const intl4 = self(1212).intl;
          obj.cancelText = intl4.string(self(1212).t.BddRzS);
          obj.onConfirm = function onConfirm() {
            let obj = callback(table[9]);
            obj = { userId: outer1_4, context: { location: "Call" } };
            obj.addRelationship(obj);
          };
          callback(4470).show(obj);
        });
      }
    } else {
      doCall(arg2);
    }
  },
  ring(channelId, items, gdm_invite) {
    channel = channel.getChannel(channelId);
    if (null != channel) {
      let obj = require(8959) /* useCanRingToGuildVoiceChannel */;
      const CALLABLE = constants.CALLABLE;
      const result = obj.canRingUsersInChannel(channel);
      if (result) {
        const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
        obj = { url: closure_6.CALL_RING(channelId) };
        obj = { recipients: items, analytics_location: gdm_invite };
        obj.body = obj;
        obj.oldFormErrors = true;
        obj.rejectWithError = true;
        HTTP.post(obj);
        if (tmp16) {
          let obj1 = { type: "GUILD_LOCAL_RING_START", ringing: items, guildId: channel.guild_id };
          importDefault(686).dispatch(obj1);
          const obj6 = importDefault(686);
        }
      } else if (tmp6) {
        obj1 = importDefault(686);
        const obj2 = { type: "CALL_ENQUEUE_RING", channelId, recipients: items };
        obj1.dispatch(obj2);
      }
    }
  },
  stopRinging(channelId, items) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_6.CALL_STOP_RINGING(channelId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { recipients: items };
    return HTTP.post(obj);
  }
};
