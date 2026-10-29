// Module ID: 10905
// Function ID: 10906
// Name: conjureMediaTickets
// Dependencies: [10837, 2]
// Exports: clearMediaTickets, getMediaTicket, retireMediaTicket

// Module 10905 (conjureMediaTickets)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10837 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/connection/conjureMediaTickets.tsx");

export function getMediaTicket(projectId) {
  _require = projectId;
  const value = map.get(projectId);
  if (null != value) {
    const tmp2 = globalThis;
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  let obj = map1;
  const value2 = map1.get(projectId);
  if (null != value2) {
    return value2;
  } else {
    const obj2 = require("ConjureWorkerTickets");
    const mintWorkerTicketResult = obj2.mintWorkerTicket(projectId);
    const nextPromise = mintWorkerTicketResult.then((ticket) => {
      function ticketExpiryMs(ticket) {
        try {
          const _atob = atob;
          const _JSON = JSON;
          const str2 = ticket.split(".")[0];
          const str4 = str2.replace(/-/g, "+");
          const exp = JSON.parse(atob(str4.replace(/_/g, "/"))).exp;
          let result = null;
          if (typeof exp === "number") {
            const _Number = Number;
            result = null;
            if (Number.isFinite(exp)) {
              result = 1000 * tmp3;
            }
          }
          return result;
        } catch (err) {
          return null;
        }
      }
      const tmp = ticketExpiryMs(ticket.ticket);
      if (null != tmp) {
        const tmp3 = projectId;
        const obj = { ticket, expiresAt: tmp - 30000 };
        let result = map.set(projectId, obj);
      }
      return ticket;
    });
    const cleanupPromise = nextPromise.finally(() => {
      map1.delete(projectId);
    });
    let result = obj.set(projectId, cleanupPromise);
    return cleanupPromise;
  }
}
export function retireMediaTicket(id) {
  map.delete(id);
  const obj = ConjureWorkerTickets;
  obj.forgetEarlyTicket(id);
}
export function clearMediaTickets() {
  map.clear();
  const obj = ConjureWorkerTickets;
  obj.forgetEarlyTickets();
}
