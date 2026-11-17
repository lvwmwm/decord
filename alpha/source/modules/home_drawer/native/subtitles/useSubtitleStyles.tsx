// Module ID: 19143
// Function ID: 19144
// Name: useSubtitleStyles
// Dependencies: [5310, 2]

// Module 19143 (useSubtitleStyles)
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const styles = createStyles.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
