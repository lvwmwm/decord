// Module ID: 17544
// Function ID: 17545
// Name: OrbsArcadeAnalytics
// Dependencies: [9973, 17534, 1072, 1252, 2]
// Exports: trackOrbsArcadeCtaClicked, trackOrbsArcadeGameClosed, trackOrbsArcadeGameTileViewed

// Module 17544 (OrbsArcadeAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9973 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17534 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeAnalytics.tsx");

export const OrbsArcadeCta = { PLAY: "PLAY", EARN_ORBS: "EARN_ORBS", HOW_TO_PLAY: "HOW_TO_PLAY", VIEW_REWARDS: "VIEW_REWARDS", WHAT_IS_ORBS_ARCADE: "WHAT_IS_ORBS_ARCADE" };
export const OrbsArcadeSurface = { QUEST_HOME: "QUEST_HOME" };
export const OrbsArcadeCtaLocation = { GAME_TILE: "GAME_TILE", HOW_TO_PLAY_SHEET: "HOW_TO_PLAY_SHEET", INFO_SHEET: "INFO_SHEET", REWARDS_SHEET: "REWARDS_SHEET", REWARD_UNLOCKED_SHEET: "REWARD_UNLOCKED_SHEET" };
export function trackOrbsArcadeGameTileViewed(id, surface) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { orbs_arcade_game_id: id.id, orbs_arcade_game_version_id: id.versionId, application_id: id.applicationId, window_starts_at: id.windowStartsAt, surface };
  obj.track(AnalyticEvents.ORBS_ARCADE_GAME_TILE_VIEWED, obj2);
}
export function trackOrbsArcadeCtaClicked(game, EARN_ORBS, GAME_TILE, surface) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { orbs_arcade_game_id: game.id, orbs_arcade_game_version_id: game.versionId, application_id: game.applicationId, window_starts_at: game.windowStartsAt, cta_name: EARN_ORBS, cta_location: GAME_TILE, surface };
  obj.track(AnalyticEvents.ORBS_ARCADE_CTA_CLICKED, obj2);
}
export function trackOrbsArcadeGameClosed(id, arg1) {
  let flag;
  let gameVersionId;
  let tmp13;
  let windowStartsAt;
  const game = OrbsArcadeStore.getGame(id);
  if (null != game) {
    const gameStateForGame = obj.getGameStateForGame(id);
    let currentRun;
    if (gameStateForGame != null) {
      currentRun = gameStateForGame.currentRun;
    }
    if (currentRun == null) {
      currentRun = null;
    }
    let tmp3 = null;
    if (null != currentRun) {
      tmp3 = null;
      if (currentRun.id !== arg1) {
        tmp3 = currentRun;
      }
    }
    let prop;
    if (gameStateForGame != null) {
      prop = gameStateForGame.numFreePlaysRemaining;
    }
    if (prop == null) {
      prop = game.numFreePlays;
    }
    const obj2 = { orbs_arcade_game_id: game.id, orbs_arcade_game_version_id: gameVersionId, application_id: game.applicationId, window_starts_at: windowStartsAt, last_orbs_arcade_run_id: id, was_last_run_completed: tmp13, num_free_plays_remaining: prop, can_afford_another_run: flag };
    gameVersionId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const ORBS_ARCADE_GAME_CLOSED = AnalyticEvents.ORBS_ARCADE_GAME_CLOSED;
    AnalyticsUtilsDefault;
    if (gameStateForGame != null) {
      gameVersionId = gameStateForGame.gameVersionId;
    }
    if (gameVersionId == null) {
      gameVersionId = game.versionId;
    }
    windowStartsAt = undefined;
    if (gameStateForGame != null) {
      windowStartsAt = gameStateForGame.windowStartsAt;
    }
    if (windowStartsAt == null) {
      windowStartsAt = game.windowStartsAt;
    }
    id = undefined;
    if (tmp3 != null) {
      id = tmp3.id;
    }
    if (id == null) {
      id = null;
    }
    tmp13 = null;
    if (null != tmp3) {
      tmp13 = null != tmp3.endedAt;
    }
    flag = true;
    if (null != prop) {
      flag = true;
      if (prop <= 0) {
        flag = true;
        if (null != game.orbCost) {
          flag = true;
          if (0 !== game.orbCost) {
            const balance = VirtualCurrencyStore.balance;
            flag = null != balance && balance - OrbsArcadeStore.heldRunChargeTotal >= game.orbCost;
          }
        }
      }
    }
    track(ORBS_ARCADE_GAME_CLOSED, obj2);
  }
}
