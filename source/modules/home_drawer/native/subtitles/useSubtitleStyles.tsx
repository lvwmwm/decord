// Module ID: 15364
// Function ID: 15365
// Name: styles
// Dependencies: [4302, 2]

// Module 15364 (styles)
import createCacheKey from "createCacheKey";

const styles = createCacheKey.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
