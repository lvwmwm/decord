// Module ID: 9868
// Function ID: 9869
// Name: AdCreativeServerUtils
// Dependencies: [6473, 9869, 9885, 2]
// Exports: adCreativeFromServer

// Module 9868 (AdCreativeServerUtils)
import AdCreativeType from "AdCreativeType" /* 6473 */;
import BountyTypes from "BountyTypes" /* 9869 */;
import PlayableTypes from "PlayableTypes" /* 9885 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/utils/AdCreativeServerUtils.tsx");

export function adCreativeFromServer(creative1) {
  let tmp2Result;
  let tmp2Result2;
  let creative_type;
  if (creative1 != null) {
    creative_type = creative1.creative_type;
  }
  if (AdCreativeType.AdCreativeType.BOUNTY === creative_type) {
    const obj2 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2Result.bountyFromServer(creative1.creative_content) };
    tmp2Result = BountyTypes;
    return obj2;
  } else if (AdCreativeType.AdCreativeType.PLAYABLE === creative_type) {
    const obj = { type: AdCreativeType.AdCreativeType.PLAYABLE, playable: tmp2Result2.playableFromServer(creative1.creative_content) };
    tmp2Result2 = PlayableTypes;
    return obj;
  } else {
    return null;
  }
}
