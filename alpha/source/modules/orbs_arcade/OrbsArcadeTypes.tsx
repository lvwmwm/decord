// Module ID: 17295
// Function ID: 17296
// Name: OrbsArcadeTypes
// Dependencies: [32, 2]
// Exports: orbsArcadeApplicationGameFromServer, orbsArcadeClaimedRewardFromServer, orbsArcadeGamesFromServer

// Module 17295 (OrbsArcadeTypes)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size_mod from "module_2" /* 2 */;

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
function orbsArcadeGameFromServer(game) {
  let rewards;
  let tmp;
  obj = { id: game.id, versionId: game.version_id, applicationId: game.application_id, name: game.name, instructions: game.instructions, startsAt: game.starts_at, endsAt: game.ends_at, orbCost: game.orb_cost, numFreePlays: game.num_free_plays, windowDurationHours: game.window_duration_hours, windowStartsAt: game.window_starts_at, windowEndsAt: game.window_ends_at, enrollmentClosesAt: game.enrollment_closes_at, asset: game.asset, heroVideoAsset: tmp, rewards: rewards.map(_rewardFromServer) };
  tmp = null;
  if (null != game.hero_video_asset) {
    size = { url: null, altText: null, mimeType: null, width: null, height: null };
    ({ url: obj2.url, alt_text: obj2.altText, mime_type: obj2.mimeType, width: obj2.width, height: obj2.height } = game.hero_video_asset);
    tmp = size;
  }
  rewards = game.rewards;
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
  const obj5 = { gameId: game_state.game_id, gameVersionId: game_state.game_version_id, enrolledAt: game_state.enrolled_at, currentRun: tmp7, rewardGrants, numFreePlaysUsed: null, numFreePlaysRemaining: null, enrollmentHighScore: null, allTimeHighScore: null, expiresAt: null, windowStartsAt: null };
  tmp7 = null;
  if (null != game_state.current_run) {
    const obj6 = { id: null, startedAt: null, endedAt: null, score: null, chargeType: null, chargeStatus: null };
    ({ id: obj3.id, started_at: obj3.startedAt, ended_at: obj3.endedAt, score: obj3.score, charge_type: obj3.chargeType, charge_status: obj3.chargeStatus } = game_state.current_run);
    tmp7 = obj6;
  }
  ({ num_free_plays_used: obj2.numFreePlaysUsed, num_free_plays_remaining: obj2.numFreePlaysRemaining, enrollment_high_score: obj2.enrollmentHighScore, all_time_high_score: obj2.allTimeHighScore, expires_at: obj2.expiresAt, window_starts_at: obj2.windowStartsAt } = game_state);
  return obj5;
}
const OrbsArcadeRewardType = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", COLLECTIBLE: 1, [1]: "COLLECTIBLE", FRACTIONAL_PREMIUM: 2, [2]: "FRACTIONAL_PREMIUM" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeTypes.tsx");

export { OrbsArcadeRewardType };
export const OrbsArcadeRewardStatus = { LOCKED: "locked", CLAIMABLE: "claimable", CLAIMED: "claimed" };
export { orbsArcadeGameFromServer };
export { orbsArcadeGameStateFromServer };
export function orbsArcadeGamesFromServer(body) {
  let games;
  const gameStateByGameId = {};
  const values = Object.values(body.game_state_by_game_id);
  for (const item10011 of values) {
    gameStateByGameId[item10011.game_id] = orbsArcadeGameStateFromServer(item10011);
    continue;
  }
  const obj2 = { games: games.map(orbsArcadeGameFromServer), gameStateByGameId, ownedRewardSkuIds: body.owned_reward_sku_ids };
  games = body.games;
  return obj2;
}
export function orbsArcadeApplicationGameFromServer(game) {
  let tmp;
  obj = { game: orbsArcadeGameFromServer(game.game), gameState: tmp, canAffordRun: null, ownedRewardSkuIds: null };
  tmp = null;
  if (null != game.game_state) {
    tmp = orbsArcadeGameStateFromServer(game.game_state);
  }
  ({ can_afford_run: obj.canAffordRun, owned_reward_sku_ids: obj.ownedRewardSkuIds } = game);
  return obj;
}
export function orbsArcadeClaimedRewardFromServer(body) {
  obj = { gameState: orbsArcadeGameStateFromServer(body.game_state), entitlements: body.entitlements };
  return obj;
}
