// Module ID: 8679
// Function ID: 8680
// Name: useGameMentionData
// Dependencies: [2014, 8680, 1383, 8682, 504, 558, 2]
// Exports: getGameMentionData, useGameMentionData

// Module 8679 (useGameMentionData)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import useGameProfileObscured from "useGameProfileObscured" /* 8682 */;
import GameStore from "GameStore" /* 2014 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8680 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionData.tsx");

export function getGameMentionData(gameId) {
  let icon;
  let media;
  let tmp4;
  const currentUser = UserStore.getCurrentUser();
  const game = GameStore.getGame(gameId);
  const gameById = GameAutocompleteStore.getGameById(gameId);
  if (null != game) {
    let nsfwAllowed;
    const isGameProfileObscured = useGameProfileObscured.isGameProfileObscured;
    useGameProfileObscured;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (!isGameProfileObscured(game, nsfwAllowed)) {
      const obj3 = { gameId, gameName: null, gameIcon: icon };
      ({ name: obj2.gameName, media } = game);
      icon = undefined;
      if (media != null) {
        icon = media.icon;
      }
      tmp4 = obj3;
    }
  } else if (null != gameById) {
    const obj = { gameId, gameName: null, gameIcon: null };
    ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
    tmp4 = obj;
  }
  return tmp4;
}
export function useGameMentionData(gameId) {
  _require = gameId;
  let obj = require("get initialized");
  const items = [GameStore, GameAutocompleteStore, UserStore];
  const items1 = [gameId];
  return obj.useStateFromStores(items, () => {
    let icon;
    let media;
    let tmp5;
    const currentUser = UserStore.getCurrentUser();
    const game = GameStore.getGame(gameId);
    const gameById = GameAutocompleteStore.getGameById(gameId);
    if (null != game) {
      let nsfwAllowed;
      const isGameProfileObscured = useGameProfileObscured.isGameProfileObscured;
      useGameProfileObscured;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      if (!isGameProfileObscured(game, nsfwAllowed)) {
        const obj3 = { gameId, gameName: null, gameIcon: icon };
        ({ name: obj2.gameName, media } = game);
        icon = undefined;
        if (media != null) {
          icon = media.icon;
        }
        tmp5 = obj3;
      }
    } else if (null != gameById) {
      const obj = { gameId, gameName: null, gameIcon: null };
      ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
      tmp5 = obj;
    }
    return tmp5;
  }, items1, shallowEqualDefault);
}
