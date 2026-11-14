// Module ID: 19100
// Function ID: 19101
// Name: useSubtitleStyles
// Dependencies: [5306, 2]

// Module 19100 (useSubtitleStyles)
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const styles = createStyles.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
