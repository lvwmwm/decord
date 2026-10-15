// Module ID: 10954
// Function ID: 10955
// Name: createProxyTicket
// Dependencies: [5, 1085, 1295, 10936, 2]
// Exports: createProxyTicket

// Module 10954 (createProxyTicket)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let surface;

let obj = function _createProxyTicket() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let c3;
    let c4;
    let closure_2;
    function prewarmApplication(arg0) {
      const tmp = closure_1_1(closure_1_2[3])(arg0);
      if (null != tmp) {
        try {
          const _fetch = fetch;
          const _URL = URL;
          const self = this;
          const self2 = this;
          const str2 = new URL("/.discord/prewarm", tmp);
          const response = fetch(str2.toString(), { method: "GET", mode: "no-cors", credentials: "omit" });
          response.catch(() => {

          });
        } catch (err) {
        }
      }
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    surface = arg2;
    prewarmApplication(closure_0);
    const obj4 = { use_stateless_ticket: true };
    const tmp11 = closure_0;
    const tmp12 = closure_1;
    if (null != closure_1) {
      obj4.channel_id = tmp12;
    }
    if (null != surface) {
      obj4.surface = surface;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.APPLICATION_PROXY_TICKET(tmp11), body: obj4, rejectWithError: true };
    const post = HTTP.post;
    await post(request);
    return arg1.body.ticket;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/activities/createProxyTicket.tsx");

export const createProxyTicket = function createProxyTicket() {
  return obj(...arguments);
};
