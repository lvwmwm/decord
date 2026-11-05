// Module ID: 19880
// Function ID: 19881
// Name: InterestGuildsAPI
// Dependencies: [5, 19881, 1282, 2]
// Exports: createInterestGuildsResource

// Module 19880 (InterestGuildsAPI)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3 = "/users/@me/waterwheels/interest-guilds";
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsAPI.tsx");

export const INTEREST_GUILDS_ENDPOINT = "/users/@me/waterwheels/interest-guilds";
export function createInterestGuildsResource() {
  let closure_0;
  _require = undefined;
  const InterestGuildsResource = require("InterestGuildsResource").InterestGuildsResource;
  _require = _asyncToGenerator(async (game_ids) => {
    let url;
    let c2 = 0;
    let c1 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj8;
      const HTTP = game_ids(c1[2]).HTTP;
      const request = { url, query: obj4, retries: 0, timeout: 5000, rejectWithError: obj8.rejectWithMigratedError() };
      const get = HTTP.get;
      obj4 = { game_ids };
      obj8 = game_ids(c1[2]);
      await get(request);
      return value.body;
    })();
  });
  const interestGuildsResource = new InterestGuildsResource(function() {
    return closure_0(...arguments);
  });
  return interestGuildsResource;
}
