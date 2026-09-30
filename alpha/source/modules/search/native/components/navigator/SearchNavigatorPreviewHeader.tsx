// Module ID: 16905
// Function ID: 16906
// Name: SearchNavigatorPreviewHeader
// Dependencies: [19, 17, 21, 4866, 13037, 2]

// Module 16905 (SearchNavigatorPreviewHeader)
import ChannelHeaderDefault from "ChannelHeader" /* 13037 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default noop.memo((channelId) => <View style={closure_4().container}>{jsx(ChannelHeaderDefault, { channelId: arg0.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>);
