// Module ID: 7010
// Function ID: 7011
// Name: CallActionCreators
// Dependencies: [2064, 4719, 1390, 1085, 5886, 1295, 1265, 5298, 1126, 7011, 7020, 584, 2]

// Module 7010 (CallActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5886 */;
import useCanRing from "useCanRing" /* 7020 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RelationshipStore_mod from "RelationshipStore" /* 4719 */;
import UserStore_mod from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let RelationshipStore = RelationshipStore_mod;
let UserStore = UserStore_mod;
({ Endpoints: metroRequire, AnalyticEvents: metroImportDefault, ChannelTypesSets: metroImportAll } = Constants);
let obj = {
  call(id, MediaEngineStore, arg2, arg3, fn) {
    let closure_4;
    let user;
    const self = this;
    importDefault = id;
    dependencyMap = MediaEngineStore;
    let closure_3 = arg2;
    RelationshipStore = arg3;
    UserStore = fn;
    if (null != arg3) {
      if (!RelationshipStore.isBlocked(arg3)) {
        _require = UserStore.getUser(arg3);
        const HTTP = require("HTTPUtils").HTTP;
        let obj2 = { url: self.CALL(id), oldFormErrors: true, rejectWithError: true };
        const get = HTTP.get;
        const value = get(obj2);
        value.then((body) => {
          const ringable = closure_3 && body.body.ringable;
          const obj = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj.selectVoiceChannel(id, MediaEngineStore);
          if (ringable) {
            self.ring(id);
          }
          if (fn != null) {
            fn(id);
          }
        }, () => {
          let IdKo2z;
          let format;
          let intl;
          let intl3;
          let intl4;
          let str;
          let userId;
          let obj = AnalyticsUtilsDefault;
          obj.track(metroImportDefault.OPEN_POPOUT, { type: "Not Friend", source: "Call" });
          let obj2 = {
            title: intl.string(intl5.t.My50nf),
            body: format(IdKo2z, { username: str }),
            confirmText: intl3.string(intl5.t["PMsq/b"]),
            cancelText: intl4.string(intl5.t.BddRzS),
            onConfirm() {
              const obj = id(MediaEngineStore[9]);
              const obj2 = { userId, context: { location: "Call" } };
              obj.addRelationship(obj2);
            }
          };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl5.intl;
          const intl2 = intl5.intl;
          format = intl2.format;
          str = "";
          IdKo2z = intl5.t.IdKo2z;
          if (null != user) {
            str = user.username;
          }
          intl3 = tmp4(1126).intl;
          intl4 = tmp4(1126).intl;
          show(obj2);
        });
      }
    } else {
      let obj = SelectedChannelActionCreatorsDefault;
      let voiceChannel = obj.selectVoiceChannel(id, MediaEngineStore);
      if (arg2) {
        self.ring(id);
      }
      if (fn != null) {
        fn(id);
      }
    }
  },
  ring(channelId, items, voice_panel_floating_cta) {
    let obj2;
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const CALLABLE = metroImportAll.CALLABLE;
      const obj5 = useCanRing;
      const result = obj5.canRingUsersInChannel(channel);
      const tmp8 = require;
      if (result) {
        const HTTP = tmp8(1295).HTTP;
        const request = { url: metroRequire.CALL_RING(channelId), body: obj2, oldFormErrors: true, rejectWithError: true };
        const post = HTTP.post;
        obj2 = { recipients: items, analytics_location: voice_panel_floating_cta };
        post(request);
      } else if (tmp12) {
        const obj3 = { type: "CALL_ENQUEUE_RING", channelId, recipients: items };
        const obj = DispatcherDefault;
        obj.dispatch(obj3);
      }
    }
  },
  stopRinging(channelId, items) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CALL_STOP_RINGING(channelId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { recipients: items };
    return HTTP.post(request);
  }
};
let result = size.fileFinishedImporting("actions/CallActionCreators.tsx");

export default obj;
