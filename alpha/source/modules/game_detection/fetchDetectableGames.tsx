// Module ID: 12708
// Function ID: 12709
// Name: fetchDetectableGames
// Dependencies: [5, 2159, 12709, 572, 6851, 1264, 5167, 1285, 2]
// Exports: default

// Module 12708 (fetchDetectableGames)
import DispatcherDefault from "Dispatcher" /* 572 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6851 */;
import Constants from "Constants" /* 12709 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DetectableGameStore from "DetectableGameStore" /* 2159 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _fetchDetectableGames() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj12;
    let obj7;
    let obj9;
    let status;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let items;
        let detectableGamesEtag;
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
            let closure_1 = tmp;
            items = undefined;
            detectableGamesEtag = undefined;
            if (DetectableGameStore.canFetchDetectableGames()) {
              detectableGamesEtag = DetectableGameStore.detectableGamesEtag;
              const obj8 = DispatcherDefault;
              obj8.dispatch({ type: "GAMES_DATABASE_FETCH" });
              c3 = 1;
              const obj6 = { url: closure_2_5(), headers: obj7, retries: 1, oldFormErrors: true, trackedActionData: obj9, rejectWithError: obj12.rejectWithMigratedError() };
              const get = TrackedHTTPUtilsDefault.get;
              obj7 = { "If-None-Match": detectableGamesEtag };
              obj9 = { event: discord_common_AnalyticsUtils.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH, properties: items };
              items = function properties(headers) {
                let etag;
                obj = { sent_etag, received_etag: etag };
                etag = undefined;
                const exact = items(status[6]).exact;
                items(status[6]);
                if (headers != null) {
                  headers = headers.headers;
                  if (headers != null) {
                    etag = headers.etag;
                  }
                }
                return exact(obj);
              };
              obj12 = HTTPUtils;
              c4 = 2;
              c5 = 1;
              const obj10 = { value: get(obj6), done: false };
              return obj10;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          if (304 === status.status) {
            const obj11 = { type: "GAMES_DATABASE_UPDATE", games: items, etag: detectableGamesEtag.detectableGamesEtag };
            items = [];
            const obj5 = sent_etag(closure_129_2[3]);
            obj5.dispatch(obj11);
          } else {
            const obj4 = sent_etag(closure_129_2[3]);
            obj4.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
          }
          c5 = 3;
          const obj13 = { value: undefined, done: true };
          return obj13;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          items = value;
          c3 = 0;
          obj = sent_etag(closure_129_2[3]);
          const obj15 = { type: "GAMES_DATABASE_UPDATE", games: items.body, etag: items.headers.etag };
          obj.dispatch(obj15);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp34) {
        status = tmp34;
        if (0 === c3) {
          c5 = 3;
          throw tmp34;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_5 = Constants.detectableGamesPayloadCdnUrl;
const result = size.fileFinishedImporting("modules/game_detection/fetchDetectableGames.tsx");

export default function fetchDetectableGames() {
  return obj(...arguments);
};
