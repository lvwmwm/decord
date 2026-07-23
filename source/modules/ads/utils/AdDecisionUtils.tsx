// Module ID: 6958
// Function ID: 55576
// Name: resolveResponseTtl
// Dependencies: [664, 2]
// Exports: questAdDecisionFromAdDecision

// Module 6958 (resolveResponseTtl)
function resolveResponseTtl(responseTtlSeconds) {
  if (null == responseTtlSeconds) {
    return closure_0;
  } else {
    let result = 1000 * responseTtlSeconds;
    if (result >= closure_0) {
      result = closure_0;
    }
    return result;
  }
}
let result = 6 * require("set").Millis.HOUR;
const result1 = require("set").fileFinishedImporting("modules/ads/utils/AdDecisionUtils.tsx");

export const MAX_RESPONSE_TTL_MS = result;
export { resolveResponseTtl };
export const questAdDecisionFromAdDecision = function questAdDecisionFromAdDecision(response_ttl_seconds, adCreativeId) {
  let obj = { questId: null, adCreativeId: adCreativeId.adCreativeId, fetchedAt: adCreativeId.fetchedAt, ttlMillis: resolveResponseTtl(response_ttl_seconds.response_ttl_seconds) };
  obj = {};
  const ad_identifiers = response_ttl_seconds.ad_identifiers;
  let ad_id;
  if (null != ad_identifiers) {
    ad_id = ad_identifiers.ad_id;
  }
  obj.ad_id = ad_id;
  const ad_identifiers2 = response_ttl_seconds.ad_identifiers;
  let adset_id;
  if (null != ad_identifiers2) {
    adset_id = ad_identifiers2.adset_id;
  }
  obj.adset_id = adset_id;
  const ad_identifiers3 = response_ttl_seconds.ad_identifiers;
  let ad_set_id;
  if (null != ad_identifiers3) {
    ad_set_id = ad_identifiers3.ad_set_id;
  }
  obj.ad_set_id = ad_set_id;
  const ad_identifiers4 = response_ttl_seconds.ad_identifiers;
  let campaign_id;
  if (null != ad_identifiers4) {
    campaign_id = ad_identifiers4.campaign_id;
  }
  obj.campaign_id = campaign_id;
  const ad_identifiers5 = response_ttl_seconds.ad_identifiers;
  let creative_id;
  if (null != ad_identifiers5) {
    creative_id = ad_identifiers5.creative_id;
  }
  obj.creative_id = creative_id;
  const ad_identifiers6 = response_ttl_seconds.ad_identifiers;
  let creative_type;
  if (null != ad_identifiers6) {
    creative_type = ad_identifiers6.creative_type;
  }
  obj.creative_type = creative_type;
  obj.decision_id = adCreativeId.requestId;
  obj.is_targeted = null != response_ttl_seconds.ad_identifiers;
  obj.adDecisionData = obj;
  ({ ad_context: obj.adContext, metadata_sealed: obj.metadataSealed, traffic_metadata_sealed: obj.trafficMetadataSealed } = response_ttl_seconds);
  return obj;
};
