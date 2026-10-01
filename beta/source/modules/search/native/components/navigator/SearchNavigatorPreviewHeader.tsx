// Module ID: 16682
// Function ID: 16683
// Name: SearchNavigatorPreviewHeader
// Dependencies: [19, 17, 21, 4836, 12840, 2]

// Module 16682 (SearchNavigatorPreviewHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ChannelHeaderDefault from "ChannelHeader" /* 12840 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let channelId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const memoResult = react.memo((channelId) => {
  channelId = channelId.channelId;
  return <View style={closure_4().container}>{jsx(ChannelHeaderDefault, { channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>;
});
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;
