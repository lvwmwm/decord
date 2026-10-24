// Module ID: 16391
// Function ID: 16392
// Name: OrbsArcadeTypes
// Dependencies: [32, 2]
// Exports: orbsArcadeApplicationGameFromServer, orbsArcadeClaimedRewardFromServer, orbsArcadeGamesFromServer

// Module 16391 (OrbsArcadeTypes)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let obj;

function _rewardFromServer(type) {
  type = type.type;
  if (obj.COLLECTIBLE === type) {
    const obj3 = { type: obj.COLLECTIBLE, id: null, skuId: null, scoreTarget: null, name: null, asset: null };
    ({ id: obj2.id, sku_id: obj2.skuId, score_target: obj2.scoreTarget, name: obj2.name, asset: obj2.asset } = type);
    return obj3;
  } else if (obj.FRACTIONAL_PREMIUM === type) {
    obj = { type: obj.FRACTIONAL_PREMIUM, id: null, skuId: null, scoreTarget: null, name: null, asset: null, quantity: null };
    ({ id: obj.id, sku_id: obj.skuId, score_target: obj.scoreTarget, name: obj.name, asset: obj.asset, quantity: obj.quantity } = type);
    return obj;
  }
}
function orbsArcadeGameFromServer(id) {
  let rewards;
  obj = { id: id.id, versionId: id.version_id, applicationId: id.application_id, name: id.name, instructions: id.instructions, startsAt: id.starts_at, endsAt: id.ends_at, orbCost: id.orb_cost, numFreePlays: id.num_free_plays, windowDurationHours: id.window_duration_hours, asset: id.asset, rewards: rewards.map(_rewardFromServer) };
  rewards = id.rewards;
  return obj;
}
function _rewardGrantFromServer(id) {
  return { id: id.id, sourceRunId: id.source_run_id, pendingAt: id.pending_at, claimedAt: id.claimed_at };
}
function orbsArcadeGameStateFromServer(game_state) {
  let tmp7;
  const rewardGrants = {};
  const entries = Object.entries(game_state.reward_grants);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    rewardGrants[tmp5[0]] = _rewardGrantFromServer(tmp5[1]);
    continue;
  }
  const obj5 = { gameId: game_state.game_id, gameVersionId: game_state.game_version_id, enrolledAt: game_state.enrolled_at, currentRun: tmp7, rewardGrants, numFreePlaysUsed: null, numFreePlaysRemaining: null, enrollmentHighScore: null, allTimeHighScore: null, expiresAt: null };
  tmp7 = null;
  if (null != game_state.current_run) {
    const obj6 = { id: null, startedAt: null, endedAt: null, score: null, chargeType: null, chargeStatus: null };
    ({ id: obj3.id, started_at: obj3.startedAt, ended_at: obj3.endedAt, score: obj3.score, charge_type: obj3.chargeType, charge_status: obj3.chargeStatus } = game_state.current_run);
    tmp7 = obj6;
  }
  ({ num_free_plays_used: obj2.numFreePlaysUsed, num_free_plays_remaining: obj2.numFreePlaysRemaining, enrollment_high_score: obj2.enrollmentHighScore, all_time_high_score: obj2.allTimeHighScore, expires_at: obj2.expiresAt } = game_state);
  return obj5;
}
const OrbsArcadeRewardType = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", COLLECTIBLE: 1, [1]: "COLLECTIBLE", FRACTIONAL_PREMIUM: 2, [2]: "FRACTIONAL_PREMIUM" };
const result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeTypes.tsx");

export { OrbsArcadeRewardType };
export const OrbsArcadeRewardStatus = { LOCKED: "locked", CLAIMABLE: "claimable", CLAIMED: "claimed" };
export { orbsArcadeGameFromServer };
export { orbsArcadeGameStateFromServer };
export const orbsArcadeGamesFromServer = function orbsArcadeGamesFromServer(body) {
  let games;
  const gameStateByGameId = {};
  const values = Object.values(body.game_state_by_game_id);
  for (const item10011 of values) {
    gameStateByGameId[item10011.game_id] = orbsArcadeGameStateFromServer(item10011);
    continue;
  }
  const obj2 = { games: games.map(orbsArcadeGameFromServer), gameStateByGameId };
  games = body.games;
  return obj2;
};
export const orbsArcadeApplicationGameFromServer = function orbsArcadeApplicationGameFromServer(game) {
  let obj2;
  let rewards;
  let tmp;
  obj = { game: obj2, gameState: tmp, enrollmentClosesAt: null, canAffordRun: null };
  game = game.game;
  obj2 = { id: game.id, versionId: game.version_id, applicationId: game.application_id, name: game.name, instructions: game.instructions, startsAt: game.starts_at, endsAt: game.ends_at, orbCost: game.orb_cost, numFreePlays: game.num_free_plays, windowDurationHours: game.window_duration_hours, asset: game.asset, rewards: rewards.map(_rewardFromServer) };
  rewards = game.rewards;
  tmp = null;
  if (null != game.game_state) {
    tmp = orbsArcadeGameStateFromServer(game.game_state);
  }
  ({ enrollment_closes_at: obj.enrollmentClosesAt, can_afford_run: obj.canAffordRun } = game);
  return obj;
};
export const orbsArcadeClaimedRewardFromServer = function orbsArcadeClaimedRewardFromServer(body) {
  obj = { gameState: orbsArcadeGameStateFromServer(body.game_state), entitlements: body.entitlements };
  return obj;
};
