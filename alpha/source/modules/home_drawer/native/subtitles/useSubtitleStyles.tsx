// Module ID: 18050
// Function ID: 18051
// Name: useSubtitleStyles
// Dependencies: [5004, 2]

// Module 18050 (useSubtitleStyles)
import createStyles from "createStyles" /* 5004 */;
import size from "module_2" /* 2 */;

const styles = createStyles.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
