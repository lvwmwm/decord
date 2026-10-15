// Module ID: 17363
// Function ID: 17364
// Name: useSubtitleStyles
// Dependencies: [5151, 2]

// Module 17363 (useSubtitleStyles)
import createStyles from "createStyles" /* 5151 */;
import size from "module_2" /* 2 */;

const styles = createStyles.createStyles({ subtitleRow: { flexDirection: "row", alignItems: "center" }, subtitleText: { flexShrink: 1 }, channelIcon: { marginRight: 2 }, unreadChannelIcon: { marginLeft: 2, marginRight: 2 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/useSubtitleStyles.tsx");

export const useSubtitleStyles = styles;
