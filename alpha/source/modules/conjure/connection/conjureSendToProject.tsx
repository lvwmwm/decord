// Module ID: 12356
// Function ID: 12357
// Name: conjureSendToProject
// Dependencies: [5, 10762, 10853, 2]
// Exports: sendConjureMessageToProject

// Module 12356 (conjureSendToProject)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10762 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c7, c8;

let obj = function _sendConjureMessageToProject() {
  obj = _asyncToGenerator(async function(arg0, value, arg2) {
    let closure_4;
    let closure_5;
    let obj4;
    let url;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let c2;
        let closure_3;
        let conjureWebSocket;
        c8 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = closure_1;
            closure_1 = closure_2;
            c2 = undefined;
            closure_3 = undefined;
            let ticket;
            let baseUrl;
            conjureWebSocket = undefined;
            c7 = 1;
            c8 = 1;
            const obj5 = { value: obj4.mintWorkerTicket(closure_0), done: false };
            obj4 = ConjureWorkerTickets;
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_3 = value;
            ticket = closure_3.ticket;
            baseUrl = closure_3.baseUrl;
            let self = this;
            let self2 = this;
            conjureWebSocket = new closure_132_0(closure_132_1[2]).ConjureWebSocket();
            c6 = 1;
            const self3 = this;
            const self4 = this;
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              const timeout = setTimeout(() => {
                const error = new Error("Timed out sending the message");
                return closure_1(error);
              }, 20000);
              obj = {
                url,
                ticket,
                onEvent(type) {
                  if ("hello" === type.type) {
                    try {
                      closure_2_6.sendUserMessage(closure_2_0, closure_2_1);
                    } catch (tmp17) {
                      closure_1(tmp17);
                    }
                  } else {
                    if ("user_message" === type.type) {
                      if (type.nonce === closure_2_1) {
                        closure_0();
                      }
                    }
                    const tmp2 = "step" === type.type && "turn_result" === type.kind && "error" === type.result && null == type.turn_id;
                    if (tmp2) {
                      let str4 = type.summary;
                      const _Error = Error;
                      const tmp4 = closure_1;
                      if (str4 == null) {
                        str4 = "The message was refused";
                      }
                      const self = this;
                      const self2 = this;
                      const _Error1 = new _Error(str4);
                      tmp4(_Error1);
                    }
                  }
                },
                onClose() {
                  const error = new Error("Connection closed before the message was stored");
                  return closure_1(error);
                }
              };
              closure_6.open(obj);
            });
            c7 = 3;
            c8 = 1;
            const obj7 = { value: promise, done: false };
            return obj7;
          }
        } else if (2 === tmp4) {
          const tmp17 = url;
          c6 = 0;
          const _clearTimeout3 = clearTimeout;
          clearTimeout(c2);
          conjureWebSocket.close();
          throw url;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          const _clearTimeout2 = clearTimeout;
          clearTimeout(c2);
          conjureWebSocket.close();
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
          const _clearTimeout = clearTimeout;
          clearTimeout(c2);
          conjureWebSocket.close();
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        url = tmp28;
        if (0 === c6) {
          c8 = 3;
          throw tmp28;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/connection/conjureSendToProject.tsx");

export const sendConjureMessageToProject = function sendConjureMessageToProject() {
  return obj(...arguments);
};
