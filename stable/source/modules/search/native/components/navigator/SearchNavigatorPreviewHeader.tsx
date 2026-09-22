// Module ID: 16975
// Function ID: 16976
// Name: SearchNavigatorPreviewHeader
// Dependencies: [19, 17, 21, 4636, 13398, 2]

// Module 16975 (SearchNavigatorPreviewHeader)
import ChannelHeaderDefault from "ChannelHeader" /* 13398 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default noop.memo((channelId) => <View style={closure_4().container}>{jsx(ChannelHeaderDefault, { channelId: arg0.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>);
