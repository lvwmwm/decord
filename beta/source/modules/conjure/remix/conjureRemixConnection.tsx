// Module ID: 10840
// Function ID: 10841
// Name: conjureRemixConnection
// Dependencies: [32, 5, 584, 10757, 10751, 2]
// Exports: acceptRemix, sendRetryRemix

// Module 10840 (conjureRemixConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10751 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10757 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, c7;

let obj = function _acceptRemix() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj9;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
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
      try {
        let closure_2;
        let ticket;
        let uRLSearchParams;
        let closure_5;
        let closure_6;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            ticket = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            const items = [closure_0, ];
            const obj12 = ConjureWorkerTickets;
            items[1] = obj12.mintWorkerTicket(closure_1);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: all(items), done: false };
            return obj4;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = value;
              closure_1 = closure_131_3(closure_0, 2);
              closure_2 = closure_1[0];
              ticket = closure_1[1];
              const _URLSearchParams = URLSearchParams;
              const obj6 = { ticket: closure_2.ticket };
              const self3 = this;
              const self4 = this;
              uRLSearchParams = new URLSearchParams(obj6);
              closure_5 = 1;
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_6 = value;
              if (null != closure_6) {
                if (closure_6 < 300) {
                  c5 = 3;
                  return { value: "accepted", done: true };
                }
              }
              if (409 === closure_6) {
                c5 = 3;
                return { value: "unreachable", done: true };
              } else {
                if (null != closure_6) {
                  if (closure_6 < 500) {
                    if (429 !== closure_6) {
                      c5 = 3;
                      return { value: "rejected", done: true };
                    }
                  }
                }
                if (3 === closure_5) {
                  c5 = 3;
                  return { value: "unreachable", done: true };
                } else {
                  const self = this;
                  const self2 = this;
                  const promise = new Promise((arg0) => setTimeout(arg0, 1000));
                  c4 = 3;
                  c5 = 1;
                  const obj8 = { value: promise, done: false };
                  return obj8;
                }
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = closure_5 + 1;
          }
          const _fetch = fetch;
          const _HermesInternal = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj9) };
          const _JSON = JSON;
          obj9 = { dest_ticket: ticket.ticket };
          const combined = "" + closure_2.baseUrl + "/agent/fork?" + uRLSearchParams;
          const response = fetch(combined, request);
          c4 = 2;
          c5 = 1;
          const obj10 = { value: response.then((status) => status.status, () => null), done: false };
          return obj10;
        }
      } catch (tmp26) {
        c5 = 3;
        throw tmp26;
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
        return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
export const acceptRemix = function acceptRemix() {
  return obj(...arguments);
};
export const sendRetryRemix = function sendRetryRemix(projectId) {
  obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(projectId, "retry remix", (sendRetryRemix) => sendRetryRemix.sendRetryRemix());
};
