// Module ID: 10923
// Function ID: 10924
// Name: StageChannelBackground
// Dependencies: [19, 17, 21, 4303, 712, 2]
// Exports: default

// Module 10923 (StageChannelBackground)
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
