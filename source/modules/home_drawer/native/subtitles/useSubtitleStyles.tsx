// Module ID: 16324
// Function ID: 16325
// Name: styles
// Dependencies: [4560, 2]

// Module 16324 (styles)
import set from "set" /* 2 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const styles = createCacheKey.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = set.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
