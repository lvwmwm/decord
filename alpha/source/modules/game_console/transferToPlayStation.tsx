// Module ID: 11114
// Function ID: 11115
// Name: transferToPlayStation
// Dependencies: [5, 1085, 11115, 11111, 11118, 584, 1295, 11119, 2]
// Exports: transferToPlayStation

// Module 11114 (transferToPlayStation)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils" /* 11115 */;
import ConsoleCommands from "ConsoleCommands" /* 11119 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let body, closure_3, closure_4, closure_5, error;

let obj = function _transferToPlayStation() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const id = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj10;
      let obj4;
      let obj7;
      function sendConnectVoiceCommand() {
        return closure_1_6(...arguments);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = undefined;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: obj10.maybeShowPTTAlert(closure_0), done: false };
              obj10 = GameConsoleAlertUtilsDefault;
              return obj5;
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 2;
              c6 = 1;
              const obj8 = { value: obj7.disconnectRemote(), done: false };
              obj7 = closure_132_0(closure_132_2[3]);
              return obj8;
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 3;
              c6 = 1;
              const obj11 = { value: obj4.getConnectNonce(), done: false };
              obj4 = closure_132_0(closure_132_2[3]);
              return obj11;
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              c5 = 4;
              c6 = 1;
              const obj13 = { value: sendConnectVoiceCommand(closure_0, closure_1, id, closure_3), done: false };
              return obj13;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_132_1(closure_132_2[4])(id.id, closure_0);
            c6 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp28) {
          c6 = 3;
          throw tmp28;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _sendConnectVoiceCommand() {
  obj = _asyncToGenerator(async (arg0, deviceId, arg2, nonce) => {
    let closure_0 = arg0;
    let id = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj6;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              body = undefined;
              id = undefined;
              const obj5 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: sessionType };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj5);
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.CONSOLES_DEVICES_COMMANDS(sessionType, deviceId), body: obj6, rejectWithError: false };
              const post = HTTP.post;
              ({ id: obj13.channel_id, guild_id: obj13.guild_id } = id);
              c8 = 2;
              c9 = 1;
              obj6 = { command: ConsoleCommands.ConsoleCommands.CONNECT_VOICE, channel_id: null, guild_id: null, nonce };
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c8) {
            c7 = 0;
            const obj9 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: sessionType, error };
            const obj3 = closure_133_1(closure_133_2[5]);
            obj3.dispatch(obj9);
            throw error;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            body = value;
            c7 = 0;
            id = body.body.id;
            const obj12 = { type: "WAIT_FOR_REMOTE_SESSION", sessionType, nonce, channelId: id.id, deviceId, commandId: id };
            const obj8 = closure_133_1(closure_133_2[5]);
            obj8.dispatch(obj12);
            c9 = 3;
            return { value: id, done: true };
          }
        } catch (tmp15) {
          error = tmp15;
          if (0 === c7) {
            c9 = 3;
            throw tmp15;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/game_console/transferToPlayStation.tsx");

export const transferToPlayStation = function transferToPlayStation() {
  return obj(...arguments);
};
