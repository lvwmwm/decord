// Module ID: 13245
// Function ID: 13246
// Name: conjureRemixConnection
// Dependencies: [32, 5, 13241, 2]
// Exports: remixProjectWorkspace

// Module 13245 (conjureRemixConnection)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 13241 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, c7;

let obj = function _remixProjectWorkspace() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let obj7;
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
        let tmp;
        let ticket;
        let uRLSearchParams;
        let closure_5;
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
            tmp = undefined;
            ticket = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            const items = [, ];
            const obj10 = ConjureWorkerTickets;
            items[0] = obj10.mintRemixTicket(closure_0);
            const obj11 = ConjureWorkerTickets;
            items[1] = obj11.mintWorkerTicket(closure_1);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: all(items), done: false };
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            closure_1 = closure_131_2(closure_0, 2);
            tmp = closure_1[0];
            ticket = closure_1[1];
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket: tmp.ticket };
            const self2 = this;
            const self3 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal = HermesInternal;
            const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj7) };
            const _JSON = JSON;
            obj7 = { dest_ticket: ticket.ticket };
            const combined = "" + tmp.baseUrl + "/agent/fork?" + uRLSearchParams;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch(combined, request), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c5 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const self = this;
            throw new closure_131_4(closure_5.status);
          }
        }
      } catch (tmp11) {
        c5 = 3;
        throw tmp11;
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
  }
};
class ConjureRemixError extends Error {
  constructor(status) {
    const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
    tmp3.status = status;
    return tmp3;
  }
}
let result = size.fileFinishedImporting("modules/conjure/remix/conjureRemixConnection.tsx");

export const remixFrameHandlers = obj;
export { ConjureRemixError };
export const remixProjectWorkspace = function remixProjectWorkspace() {
  return obj(...arguments);
};
