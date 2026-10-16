// Module ID: 10984
// Function ID: 10985
// Name: conjureMediaTickets
// Dependencies: [10985, 2]
// Exports: clearMediaTickets, getMediaTicket, retireMediaTicket

// Module 10984 (conjureMediaTickets)
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/connection/conjureMediaTickets.tsx");

export const getMediaTicket = function getMediaTicket(arg0) {
  let closure_0;
  _require = arg0;
  const value = map.get(arg0);
  if (null != value) {
    const tmp2 = globalThis;
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  let obj = map1;
  const value2 = map1.get(arg0);
  if (null != value2) {
    return value2;
  } else {
    const obj2 = require("ConjureWorkerTickets");
    const mintWorkerTicketResult = obj2.mintWorkerTicket(arg0);
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
        const tmp3 = closure_0;
        const obj = { ticket, expiresAt: tmp - 30000 };
        let result = map.set(closure_0, obj);
      }
      return ticket;
    });
    const cleanupPromise = nextPromise.finally(() => {
      map1.delete(closure_0);
    });
    let result = obj.set(arg0, cleanupPromise);
    return cleanupPromise;
  }
};
export const retireMediaTicket = function retireMediaTicket(arg0) {
  map.delete(arg0);
};
export const clearMediaTickets = function clearMediaTickets() {
  map.clear();
};
