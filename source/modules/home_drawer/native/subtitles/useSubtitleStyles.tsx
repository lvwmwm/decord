// Module ID: 15846
// Function ID: 15847
// Name: styles
// Dependencies: [4446, 2]

// Module 15846 (styles)
import set from "set" /* 2 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const styles = createCacheKey.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = set.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
