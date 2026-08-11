// Module ID: 10050
// Function ID: 10051
// Name: useShouldShowGiftingPromotionDeco
// Dependencies: [1924, 9616, 2]
// Exports: default

// Module 10050 (useShouldShowGiftingPromotionDeco)
import { PremiumTypes } from "GuildFeatures";

const result = require("set").fileFinishedImporting("modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx");

export default function useShouldShowGiftingPromotionDeco(arg0) {
  const nativeGiftContext = require(9616) /* NativeGiftContextProvider */.useNativeGiftContext();
  const claimableRewards = nativeGiftContext.claimableRewards;
  if (null != arg0) {
    let tmp4 = arg0 === PremiumTypes.TIER_2;
  } else {
    tmp4 = tmp2 === PremiumTypes.TIER_2;
  }
  let tmp6 = null != claimableRewards;
  if (tmp6) {
    tmp6 = claimableRewards.length > 0;
  }
  if (tmp6) {
    tmp6 = tmp4;
  }
  return tmp6;
};
