// Module ID: 15302
// Function ID: 15303
// Name: styles
// Dependencies: [4255, 2]

// Module 15302 (styles)
import createCacheKey from "createCacheKey";

const styles = createCacheKey.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
