// Module ID: 10849
// Function ID: 10850
// Name: StageChannelBackground
// Dependencies: [19, 17, 21, 4193, 712, 2]
// Exports: default

// Module 10849 (StageChannelBackground)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { container: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BLACK };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default function StageChannelBackground(children) {
  return <View style={createCacheKey().container}>{arg0.children}</View>;
};
