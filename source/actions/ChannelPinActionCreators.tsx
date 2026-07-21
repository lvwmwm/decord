// Module ID: 9856
// Function ID: 76277
// Dependencies: []

// Module 9856
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FetchState = arg1(dependencyMap[1]).FetchState;
({ AbortCodes: closure_6, Endpoints: closure_7, MAX_PINS_PER_CHANNEL: closure_8 } = arg1(dependencyMap[2]));
const obj = {
  pinMessage(arg0, id) {
    id = arg0;
    const importDefault = id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  unpinMessage(arg0, id) {
    id = arg0;
    const importDefault = id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  ackPins(timestamp) {
    let obj = importDefault(dependencyMap[8]);
    obj = { type: "CHANNEL_PINS_ACK", channelId: timestamp };
    obj.dispatch(obj);
  },
  fetchPins(channelId, reset) {
    reset = channelId;
    reset = undefined;
    if (null != reset) {
      reset = reset.reset;
    }
    let limit;
    if (null != reset) {
      limit = reset.limit;
    }
    let num = 25;
    if (null != limit) {
      num = limit;
    }
    if (null != reset) {
      const before = reset.before;
    }
    let tmp4 = tmp2;
    if (!(null != reset && reset)) {
      let num2 = pins.getPins(channelId);
      let flag = true;
      if (null != num2) {
        const state = num2.state;
        flag = true;
        if (FetchState.FAILED !== state) {
          flag = false;
          if (FetchState.LOADING !== state) {
            flag = false;
            if (FetchState.LOADED_FINISHED !== state) {
              if (FetchState.LOADED_HAS_MORE === state) {
                if (null == before) {
                  num2 = 0;
                  let tmp10 = 0 === num2.items.length;
                } else {
                  const items = num2.items;
                  tmp10 = items.at(-1).pinnedAt === before;
                }
              }
            }
          }
        }
      }
      tmp4 = flag;
    }
    if (tmp4) {
      let obj = importDefault(dependencyMap[8]);
      obj = { type: "LOAD_PINNED_MESSAGES", channelId, reset: tmp2 };
      obj.dispatch(obj);
      const HTTP = reset(dependencyMap[4]).HTTP;
      obj = { "Bool(false)": "RTC_CONNECTION_LOSS_RATE", "Bool(false)": "handleJoinThreadVoice", "Bool(false)": "toString", "Bool(false)": "isArray", "Bool(false)": "toString", url: closure_7.PINS(channelId) };
      const obj1 = { limit: num };
      let toISOStringResult;
      if (null != before) {
        toISOStringResult = before.toISOString();
      }
      obj1.before = toISOStringResult;
      obj.query = obj1;
      const value = HTTP.get(obj);
      value.then((body) => {
        let obj = callback(closure_2[8]);
        obj = { type: "LOAD_PINNED_MESSAGES_SUCCESS", pins: body.body.items, channelId: body, hasMore: body.body.has_more };
        obj.dispatch(obj);
      }, () => {
        let obj = callback(closure_2[8]);
        obj = { type: "LOAD_PINNED_MESSAGES_FAILURE", channelId: arg0 };
        obj.dispatch(obj);
      });
    }
  }
};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("actions/ChannelPinActionCreators.tsx");

export default obj;
