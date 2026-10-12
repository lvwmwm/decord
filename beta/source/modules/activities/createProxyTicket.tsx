// Module ID: 10813
// Function ID: 10814
// Name: createProxyTicket
// Dependencies: [5, 1085, 1295, 2]
// Exports: createProxyTicket

// Module 10813 (createProxyTicket)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _createProxyTicket() {
  obj = _asyncToGenerator(async (arg0, channel_id, surface) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      const obj4 = { use_stateless_ticket: true };
      const tmp11 = closure_0;
      if (null != channel_id) {
        obj4.channel_id = channel_id;
      }
      if (null != surface) {
        obj4.surface = surface;
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.APPLICATION_PROXY_TICKET(tmp11), body: obj4, rejectWithError: true };
      const post = HTTP.post;
      await post(request);
      return value.body.ticket;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/activities/createProxyTicket.tsx");

export const createProxyTicket = function createProxyTicket() {
  return obj(...arguments);
};
