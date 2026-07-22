// Module ID: 8915
// Function ID: 70335
// Dependencies: []

// Module 8915
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ Endpoints: closure_6, AnalyticEvents: closure_7, ChannelTypesSets: closure_8, ChannelTypes: closure_9 } = arg1(dependencyMap[3]));
const obj = {
  call(arg0, arg1, arg2, arg3, arg4) {
    arg1 = this;
    const importDefault = arg0;
    const dependencyMap = arg1;
    let closure_3 = arg2;
    const blocked = arg3;
    const user = arg4;
    function doCall(arg0) {
      const voiceChannel = arg0(arg1[4]).selectVoiceChannel(arg0, arg1);
      if (arg0) {
        self.ring(arg0);
      }
      if (null != arg4) {
        arg4(arg0);
      }
    }
    if (null != arg3) {
      if (!blocked.isBlocked(arg3)) {
        const user2 = user.getUser(arg3);
        const HTTP = arg1(dependencyMap[5]).HTTP;
        const obj = { y: null, isArray: null, accessible: null, url: doCall.CALL(arg0) };
        const value = HTTP.get(obj);
        value.then((body) => {
          let ringable = arg2;
          if (arg2) {
            ringable = body.body.ringable;
          }
          doCall(ringable);
        }, () => {
          let obj = arg0(arg1[6]);
          obj.track(closure_7.OPEN_POPOUT, { "Bool(false)": 234, "Bool(false)": 147.5 });
          obj = {};
          const intl = self(arg1[8]).intl;
          obj.title = intl.string(self(arg1[8]).t.My50nf);
          const intl2 = self(arg1[8]).intl;
          obj = {};
          let str = "";
          if (null != closure_7) {
            str = closure_7.username;
          }
          obj.username = str;
          obj.body = intl2.format(self(arg1[8]).t.IdKo2z, obj);
          const intl3 = self(arg1[8]).intl;
          obj.confirmText = intl3.string(self(arg1[8]).t.PMsq/b);
          const intl4 = self(arg1[8]).intl;
          obj.cancelText = intl4.string(self(arg1[8]).t.BddRzS);
          obj.onConfirm = function onConfirm() {
            let obj = callback(closure_2[9]);
            obj = { userId: closure_4, context: { location: "Call" } };
            obj.addRelationship(obj);
          };
          arg0(arg1[7]).show(obj);
        });
      }
    } else {
      doCall(arg2);
    }
  },
  ring(channelId, items, gdm_invite) {
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      let obj = items(dependencyMap[10]);
      const CALLABLE = constants.CALLABLE;
      const result = obj.canRingUsersInChannel(channel);
      if (result) {
        const HTTP = items(dependencyMap[5]).HTTP;
        obj = { url: closure_6.CALL_RING(channelId) };
        obj = { recipients: items, analytics_location: gdm_invite };
        obj.body = obj;
        obj.oldFormErrors = true;
        obj.rejectWithError = true;
        HTTP.post(obj);
        if (tmp16) {
          let obj1 = { type: "GUILD_LOCAL_RING_START", ringing: items, guildId: channel.guild_id };
          importDefault(dependencyMap[11]).dispatch(obj1);
          const obj6 = importDefault(dependencyMap[11]);
        }
      } else if (tmp6) {
        obj1 = importDefault(dependencyMap[11]);
        const obj2 = { type: "CALL_ENQUEUE_RING", channelId, recipients: items };
        obj1.dispatch(obj2);
      }
    }
  },
  stopRinging(channelId, items) {
    const HTTP = items(dependencyMap[5]).HTTP;
    let obj = { url: closure_6.CALL_STOP_RINGING(channelId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { recipients: items };
    return HTTP.post(obj);
  }
};
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("actions/CallActionCreators.tsx");

export default obj;
