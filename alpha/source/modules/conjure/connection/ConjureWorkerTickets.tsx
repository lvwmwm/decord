// Module ID: 13169
// Function ID: 13170
// Name: ConjureWorkerTickets
// Dependencies: [5, 1085, 1295, 13170, 2]
// Exports: mintRemixTicket, mintWorkerTicket

// Module 13169 (ConjureWorkerTickets)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let url;

function mintTicket() {
  return obj(...arguments);
}
let obj = function _mintTicket() {
  obj = _asyncToGenerator(async (url) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      const HTTP = HTTPUtils.HTTP;
      const obj4 = { url, rejectWithError: true };
      await HTTP.post(obj4);
      const body = value.body;
      const obj7 = { ticket: body.ticket, baseUrl: url };
      const obj8 = closure_131_0(closure_131_1[3]);
      const conjureTunnelWorkerOrigin = obj8.getConjureTunnelWorkerOrigin();
      url = conjureTunnelWorkerOrigin;
      if (conjureTunnelWorkerOrigin == null) {
        url = body.url;
      }
      return obj7;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/conjure/connection/ConjureWorkerTickets.tsx");

export const mintWorkerTicket = function mintWorkerTicket(arg0) {
  return mintTicket(Endpoints.CONJURE_PROJECT_WS_TICKET(arg0));
};
export const mintRemixTicket = function mintRemixTicket(arg0) {
  return mintTicket(Endpoints.CONJURE_PROJECT_REMIX_TICKET(arg0));
};
