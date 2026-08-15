// Module ID: 15693
// Function ID: 15694
// Name: ForYouHoistedItemsHeader
// Dependencies: [19, 17, 21, 4661, 712, 2]
// Exports: ForYouHoistedItemsHeader

// Module 15693 (ForYouHoistedItemsHeader)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { container: null };
createCacheKey = { marginTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouHoistedItemsHeader.tsx");

export const ForYouHoistedItemsHeader = function ForYouHoistedItemsHeader() {
  return <View style={createCacheKey().container} />;
};
