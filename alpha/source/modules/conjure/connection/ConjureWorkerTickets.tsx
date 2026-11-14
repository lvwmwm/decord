// Module ID: 7336
// Function ID: 7337
// Name: ConjureWorkerTickets
// Dependencies: [5, 1072, 1285, 7337, 2]
// Exports: forgetEarlyTicket, forgetEarlyTickets, mintRemixTicket, mintWorkerTicket, prefetchWorkerTicket, rememberCreatedProjectTicket

// Module 7336 (ConjureWorkerTickets)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import conjureLocalDev from "conjureLocalDev" /* 7337 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, set;

function mintTicket() {
  return obj(...arguments);
}
let obj = function _mintTicket() {
  obj = _asyncToGenerator(async (url, body) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      closure_2 = workerTicket;
      const HTTP = HTTPUtils.HTTP;
      const request = { url, body, rejectWithError: true };
      await HTTP.post(request);
      return closure_2(value.body);
    })();
  });
  return obj(...arguments);
};
function workerTicket(ticket) {
  let conjureTunnelWorkerOrigin;
  const url = ticket.url;
  obj = { ticket: ticket.ticket, baseUrl: conjureTunnelWorkerOrigin };
  const obj2 = conjureLocalDev;
  conjureTunnelWorkerOrigin = obj2.getConjureTunnelWorkerOrigin();
  if (conjureTunnelWorkerOrigin == null) {
    conjureTunnelWorkerOrigin = url;
  }
  return obj;
}
const Endpoints = Constants.Endpoints;
const map = new Map();
let closure_5 = [];
let result = size.fileFinishedImporting("modules/conjure/connection/ConjureWorkerTickets.tsx");

export function rememberCreatedProjectTicket(id, ws_ticket) {
  let conjureTunnelWorkerOrigin;
  const url = ws_ticket.url;
  obj = { ticket: ws_ticket.ticket, baseUrl: conjureTunnelWorkerOrigin };
  set = map.set;
  const obj2 = conjureLocalDev;
  conjureTunnelWorkerOrigin = obj2.getConjureTunnelWorkerOrigin();
  if (conjureTunnelWorkerOrigin == null) {
    conjureTunnelWorkerOrigin = url;
  }
  const obj3 = { ticket: resolve(obj), until: Date.now() + 30000 };
  const result = set(id, obj3);
}
export function prefetchWorkerTicket(projectId) {
  let closure_0 = projectId;
  const timestamp = Date.now();
  const value = map.get(projectId);
  if (null == value) {
    let arr = closure_5;
    if (closure_5.length > 0) {
      arr = tmp3;
      if (timestamp - closure_5[0] > 60000) {
        closure_5.shift();
        arr = closure_5;
        while (closure_5.length > 0) {
          arr = tmp4;
          if (timestamp - tmp4[0] <= 60000) {
            break;
          }
        }
      }
    }
    if (arr.length < 5) {
      arr.push(timestamp);
      const promise = mintTicket(Endpoints.CONJURE_PROJECT_WS_TICKET(projectId));
      const _Date = Date;
      obj = { ticket: promise, until: Date.now() + 30000 };
      const result = map.set(projectId, obj);
      promise.catch(() => {
        const tmp = projectId;
        if (map.get(projectId) === map) {
          map.delete(tmp);
        }
      });
    }
  }
}
export function forgetEarlyTicket(arg0) {
  map.delete(arg0);
}
export function forgetEarlyTickets() {
  map.clear();
}
export function mintWorkerTicket(projectId) {
  const value = map.get(projectId);
  obj = map;
  if (null != value) {
    let ticket;
    const _Date = Date;
    if (value.until > Date.now()) {
      ticket = value.ticket;
    }
    return ticket;
  }
  obj.delete(projectId);
  ticket = mintTicket(Endpoints.CONJURE_PROJECT_WS_TICKET(projectId));
}
export function mintRemixTicket(id, arg1) {
  return mintTicket(Endpoints.CONJURE_PROJECT_REMIX_TICKET(id), arg1);
}
