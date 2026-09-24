// Module ID: 13459
// Function ID: 13460
// Name: VibegrationsWorkerTickets
// Dependencies: [5, 1074, 1271, 13460, 2]
// Exports: mintRemixTicket, mintWorkerTicket

// Module 13459 (VibegrationsWorkerTickets)
import HTTPUtils from "HTTPUtils" /* 1271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function mintTicket() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = async function _mintTicket(url) {
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp5;
    closure_2 = tmp2;
    const HTTP = HTTPUtils.HTTP;
    await HTTP.post({ url, rejectWithError: true });
    const body = value.body;
    const obj7 = { ticket: body.ticket, baseUrl: null };
    const vibegrationsTunnelWorkerOrigin = closure_131_0(closure_131_1[3]).getVibegrationsTunnelWorkerOrigin();
    url = vibegrationsTunnelWorkerOrigin;
    if (vibegrationsTunnelWorkerOrigin == null) {
      url = body.url;
    }
    obj7.baseUrl = url;
    return obj7;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsWorkerTickets.tsx");

export const mintWorkerTicket = function mintWorkerTicket(arg0) {
  return mintTicket(Endpoints.VIBEGRATIONS_PROJECT_WS_TICKET(arg0));
};
export const mintRemixTicket = function mintRemixTicket(arg0) {
  return mintTicket(Endpoints.VIBEGRATIONS_PROJECT_REMIX_TICKET(arg0));
};
