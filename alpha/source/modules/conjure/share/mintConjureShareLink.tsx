// Module ID: 13238
// Function ID: 13239
// Name: mintConjureShareLink
// Dependencies: [5, 1072, 1282, 2]
// Exports: mintConjureShareLink

// Module 13238 (mintConjureShareLink)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _mintConjureShareLink() {
  obj = _asyncToGenerator(async (arg0, share_max_age) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.CONJURE_PROJECT_REMIX_TICKET(closure_0), body: obj4, rejectWithError: true };
      const post = HTTP.post;
      obj4 = { share_max_age };
      await post(request);
      return value.body.ticket;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/conjure/share/mintConjureShareLink.tsx");

export function mintConjureShareLink() {
  return obj(...arguments);
}
