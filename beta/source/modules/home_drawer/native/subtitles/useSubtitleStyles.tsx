// Module ID: 17900
// Function ID: 17901
// Name: useSubtitleStyles
// Dependencies: [4913, 2]

// Module 17900 (useSubtitleStyles)
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const styles = createStyles.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
