// Module ID: 9864
// Function ID: 76342
// Dependencies: [5, 9865, 653, 7007, 507, 4029, 1212, 4470, 686, 2]

// Module 9864
import V6OrEarlierAPIError from "V6OrEarlierAPIError";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ AbortCodes: closure_6, Endpoints: closure_7, MAX_PINS_PER_CHANNEL: closure_8 } = ME);
let obj = {
  pinMessage(closure_0, id) {
    let closure_1 = id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  unpinMessage(closure_0, id) {
    let closure_1 = id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  ackPins(timestamp) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_PINS_ACK", channelId: timestamp };
    obj.dispatch(obj);
  },
  fetchPins(channelId, reset) {
    const _require = channelId;
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
      let obj = importDefault(686);
      obj = { type: "LOAD_PINNED_MESSAGES", channelId, reset: tmp2 };
      obj.dispatch(obj);
      const HTTP = _require(507).HTTP;
      obj = { url: closure_7.PINS(channelId), query: null, retries: 2, oldFormErrors: true, rejectWithError: true };
      const obj1 = { limit: num };
      let toISOStringResult;
      if (null != before) {
        toISOStringResult = before.toISOString();
      }
      obj1.before = toISOStringResult;
      obj.query = obj1;
      const value = HTTP.get(obj);
      value.then((body) => {
        let obj = outer1_1(outer1_2[8]);
        obj = { type: "LOAD_PINNED_MESSAGES_SUCCESS", pins: body.body.items, channelId: closure_0, hasMore: body.body.has_more };
        obj.dispatch(obj);
      }, () => {
        let obj = outer1_1(outer1_2[8]);
        obj = { type: "LOAD_PINNED_MESSAGES_FAILURE", channelId: closure_0 };
        obj.dispatch(obj);
      });
    }
  }
};
const result = require("ME").fileFinishedImporting("actions/ChannelPinActionCreators.tsx");

export default obj;
