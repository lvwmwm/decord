// Module ID: 17809
// Function ID: 17810
// Name: useSubtitleStyles
// Dependencies: [5003, 2]

// Module 17809 (useSubtitleStyles)
import createStyles from "createStyles" /* 5003 */;
import size from "module_2" /* 2 */;

const styles = createStyles.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
