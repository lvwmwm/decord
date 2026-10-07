// Module ID: 15986
// Function ID: 15987
// Name: ActiveChannelsActionCreators
// Dependencies: [5, 1085, 584, 1282, 5313, 2]
// Exports: fetchActiveChannels

// Module 15986 (ActiveChannelsActionCreators)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let channels, closure_4, closure_5;

let obj = function _fetchActiveChannels() {
  obj = _asyncToGenerator(async (guildId) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (async function(arg0, value) {
      let obj6;
      let tmp25;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let num7;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              channels = tmp4;
              num7 = closure_1;
              if (closure_1 === undefined) {
                num7 = 10;
              }
              value = undefined;
              channels = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              const obj5 = { type: "ACTIVE_CHANNELS_FETCH_START", guildId };
              const obj10 = closure_132_1(closure_132_2[2]);
              obj10.dispatch(obj5);
              c6 = 1;
              const HTTP = closure_132_0(closure_132_2[3]).HTTP;
              const request = { url: closure_132_4.ACTIVE_CHANNELS(guildId), query: obj6, rejectWithError: true };
              const get = HTTP.get;
              c7 = 3;
              c8 = 1;
              obj6 = { channel_limit: num7 };
              const obj7 = { value: get(request), done: false };
              return obj7;
            }
          } else if (2 === c7) {
            c6 = 0;
            closure_4 = closure_5;
            const obj8 = { type: "ACTIVE_CHANNELS_FETCH_FAILURE", guildId, error: tmp25 };
            const dispatch = closure_132_1(closure_132_2[2]).dispatch;
            const self = this;
            const self2 = this;
            closure_132_1(closure_132_2[2]);
            tmp25 = new closure_132_1(closure_132_2[4])(closure_4);
            dispatch(obj8);
            throw closure_4;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            const body = value.body;
            channels = undefined;
            if (body != null) {
              channels = body.channels;
            }
            value = channels;
            if (channels == null) {
              value = [];
            }
            channels = value;
            const obj11 = { type: "ACTIVE_CHANNELS_FETCH_SUCCESS", guildId, channels };
            obj = closure_132_1(closure_132_2[2]);
            obj.dispatch(obj11);
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          }
        } catch (tmp30) {
          closure_5 = tmp30;
          if (0 === c6) {
            c8 = 3;
            throw tmp30;
          } else {
            c7 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/active_channels/ActiveChannelsActionCreators.tsx");

export const fetchActiveChannels = function fetchActiveChannels() {
  return obj(...arguments);
};
