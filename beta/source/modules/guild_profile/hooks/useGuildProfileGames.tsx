// Module ID: 9219
// Function ID: 9220
// Name: useGuildProfileGames
// Dependencies: [19, 2002, 2001, 502, 504, 6727, 1370, 2]
// Exports: default, useAllGuildProfileGames

// Module 9219 (useGuildProfileGames)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import react from "react" /* 19 */;
import GameRecord from "GameRecord" /* 2002 */;
import GameStore from "GameStore" /* 2001 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, game, map, set;

const f88354 = () => authenticated.isAuthenticated();
let result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default function useGuildProfileGames(gameActivity) {
  let authenticated;
  let closure_1;
  let items5;
  let items6;
  let items7;
  let tmp5;
  gameActivity = gameActivity.gameActivity;
  _require = gameActivity;
  dependencyMap = undefined;
  const games = gameActivity.games;
  let tmp = _require;
  const tmp2 = dependencyMap;
  let items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f88354);
  require("useGame");
  if (null != games) {
    let items1;
    if (!stateFromStores) {
      items1 = [];
    }
    tmp5(items1);
    let tmp7 = react;
    const items2 = [games];
    dependencyMap = react.useMemo(function() {
      map = new Map();
      if (null == games) {
        return map;
      } else {
        for (const item10012 of tmp2) {
          let self = this;
          let self2 = this;
          set = map.set;
          let id = item10012.id;
          let tmp7 = new GameRecord(item10012);
          let result = set(id, tmp7);
          continue;
        }
        return map;
      }
    }, items2);
    let tmp8 = GameStore;
    const items3 = [GameStore];
    const tmpResult = tmp(504);
    const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
      const gameApplicationIds = gameActivity.gameApplicationIds;
      const mapped = gameApplicationIds.map((item) => {
        game = game.getGame(item);
        if (game == null) {
          game = closure_1_1.get(item);
        }
        return game;
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    });
    const items4 = [stateFromStoresArray, gameActivity];
    const memo = react.useMemo(() => {
      let closure_0 = gameActivity;
      const items = [...stateFromStoresArray];
      return items.sort((arg0, arg1) => {
        let num;
        const tmp = closure_0;
        if (closure_0[arg0.id] != null) {
          num = tmp2.score;
        }
        if (num == null) {
          num = 0;
        }
        let num2;
        if (tmp[arg1.id] != null) {
          num2 = tmp3.score;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = 0;
        if (num !== num2) {
          num3 = num2 - num;
        }
        return num3;
      });
    }, items4);
    const obj2 = {
      gamesToDisplay: react.useMemo(() => memo.slice(0, 5), items5),
      lastGameToDisplay: react.useMemo(() => {
          let tmp = memo[5];
          if (tmp == null) {
            tmp = null;
          }
          return tmp;
        }, items6),
      remainingGames: react.useMemo(() => memo.slice(5), items7)
    };
    items5 = [memo];
    items6 = [memo];
    items7 = [memo];
    return obj2;
  }
  items1 = gameActivity.gameApplicationIds;
};
export const useAllGuildProfileGames = function useAllGuildProfileGames(profile) {
  let closure_1;
  _require = profile;
  const games = profile.games;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f88354);
  require("useGame");
  const tmp = _require;
  if (null != games) {
    let items1;
    if (!stateFromStores) {
      items1 = [];
    }
    tmp5(items1);
    const items2 = [games];
    dependencyMap = react.useMemo(function() {
      map = new Map();
      if (null == games) {
        return map;
      } else {
        for (const item10012 of tmp2) {
          let self = this;
          let self2 = this;
          set = map.set;
          let id = item10012.id;
          let tmp7 = new GameRecord(item10012);
          let result = set(id, tmp7);
          continue;
        }
        return map;
      }
    }, items2);
    const items3 = [GameStore];
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresArray(items3, () => {
      const gameApplicationIds = gameActivity.gameApplicationIds;
      const mapped = gameApplicationIds.map((item) => {
        game = game.getGame(item);
        if (game == null) {
          game = closure_1_1.get(item);
        }
        return game;
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    });
  }
  items1 = profile.gameApplicationIds;
};
