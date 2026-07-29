// Module ID: 11944
// Function ID: 11945
// Name: _fetchDetectableGames
// Dependencies: [5, 4221, 11945, 530, 2]
// Exports: fetchDetectableGames

// Module 11944 (_fetchDetectableGames)
import asyncGeneratorStep from "asyncGeneratorStep";
import { gameFromServer } from "gameFromServer";
import { DETECTABLE_GAMES_CDN_URL } from "GAMES_DETECTABLE";

const require = arg1;
function _fetchDetectableGames() {
  const self = this;
  const tmp = callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            const HTTP = outer1_0(table[3]).HTTP;
            table = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = HTTP.get(outer1_4);
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          const body = arg1.body;
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = body.map(closure_3);
          return obj;
        }
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  });
  const _fetchDetectableGames = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("GAMES_DETECTABLE").fileFinishedImporting("modules/game_profile/native/GameDetectionReportActionCreators.tsx");

export const fetchDetectableGames = function fetchDetectableGames() {
  const self = this;
  const apply = _fetchDetectableGames.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
