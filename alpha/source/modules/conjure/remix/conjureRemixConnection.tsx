// Module ID: 12293
// Function ID: 12294
// Name: conjureRemixConnection
// Dependencies: [32, 5, 572, 6940, 6939, 2]
// Exports: acceptRemix, sendRetryRemix

// Module 12293 (conjureRemixConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 6939 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 6940 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, c7;

let obj = function _acceptRemix() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let _fetchResult;
    let obj11;
    let stringify;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_4;
        let closure_3;
        let flag;
        let closure_5;
        let ticket;
        let uRLSearchParams;
        let closure_8;
        let closure_9;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp4;
            closure_3 = tmp;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = false;
            }
            closure_3 = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            ticket = undefined;
            uRLSearchParams = undefined;
            closure_8 = undefined;
            closure_9 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Path", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const items = [closure_0, ];
            const obj9 = closure_132_0(closure_132_2[3]);
            items[1] = obj9.mintWorkerTicket(closure_1);
            c5 = 2;
            c6 = 1;
            const obj5 = { value: all(items), done: false };
            return obj5;
          }
        } else {
          let obj12;
          if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_3 = value;
              closure_4 = closure_132_3(closure_3, 2);
              closure_5 = closure_4[0];
              ticket = closure_4[1];
              const _URLSearchParams = URLSearchParams;
              const obj7 = { ticket: closure_5.ticket };
              const self3 = this;
              const self4 = this;
              uRLSearchParams = new URLSearchParams(obj7);
              closure_8 = 1;
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_9 = value;
              if (null != closure_9) {
                if (closure_9 < 300) {
                  c6 = 3;
                  return { value: "accepted", done: true };
                }
              }
              if (409 === closure_9) {
                c6 = 3;
                return { value: "unreachable", done: true };
              } else {
                if (null != closure_9) {
                  if (closure_9 < 500) {
                    if (429 !== closure_9) {
                      c6 = 3;
                      return { value: "rejected", done: true };
                    }
                  }
                }
                if (3 === closure_8) {
                  c6 = 3;
                  return { value: "unreachable", done: true };
                } else {
                  const self = this;
                  const self2 = this;
                  const promise = new Promise((arg0) => setTimeout(arg0, 1000));
                  c5 = 4;
                  c6 = 1;
                  const obj10 = { value: promise, done: false };
                  return obj10;
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_8 = closure_8 + 1;
          }
          const _HermesInternal = HermesInternal;
          const _fetch = fetch;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: stringify(obj11) };
          obj11 = { dest_ticket: ticket.ticket };
          const combined = "" + closure_5.baseUrl + "/agent/fork?" + uRLSearchParams;
          const _JSON = JSON;
          stringify = JSON.stringify;
          if (flag) {
            obj12 = { copy: true };
          } else {
            obj12 = {};
          }
          const merged = Object.assign(obj12);
          c5 = 3;
          c6 = 1;
          const obj13 = { value: _fetchResult.then((status) => status.status, () => null), done: false };
          _fetchResult = _fetch(combined, request);
          return obj13;
        }
      } catch (tmp39) {
        c6 = 3;
        throw tmp39;
      }
    }
  });
  return obj(...arguments);
};
obj = function _mintUpstreamTicket() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      let status;
      try {
        let ticket;
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp3;
            ticket = undefined;
            status = undefined;
            c6 = 1;
            c4 = 2;
            c7 = 1;
            const obj5 = { value: obj2.mintRemixTicket(closure_2), done: false };
            obj2 = ConjureWorkerTickets;
            return obj5;
          }
        } else {
          if (1 === c4) {
            c6 = 0;
            status = undefined;
            if (status != null) {
              status = status.status;
            }
            let str = "failed";
            const sendUpstreamTicketAck = closure_0.sendUpstreamTicketAck;
            const tmp13 = closure_1;
            if (403 === status) {
              str = "forbidden";
            }
            const result = sendUpstreamTicketAck(tmp13, undefined, str);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            ticket = value.ticket;
            const result1 = closure_0.sendUpstreamTicketAck(closure_1, ticket);
            c6 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        status = tmp21;
        if (0 === c6) {
          c7 = 3;
          throw tmp21;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = {
  request_upstream_ticket(id, ws) {
    function mintUpstreamTicket() {
      return obj(...arguments);
    }
    !mintUpstreamTicket(ws.ws, id.id, id.project_id);
  },
  remix_state(pending, projectId) {
    projectId = projectId.projectId;
    obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_REMIX_STATE_SET", projectId, pending: pending.pending, failed: pending.failed };
    obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("modules/conjure/remix/conjureRemixConnection.tsx");

export const remixFrameHandlers = obj;
export function acceptRemix() {
  return obj(...arguments);
}
export function sendRetryRemix(projectId) {
  obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(projectId, "retry remix", (sendRetryRemix) => sendRetryRemix.sendRetryRemix());
}
