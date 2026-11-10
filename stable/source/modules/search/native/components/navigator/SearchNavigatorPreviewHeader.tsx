// Module ID: 18943
// Function ID: 18944
// Name: SearchNavigatorPreviewHeader
// Dependencies: [19, 17, 21, 5014, 14572, 2]

// Module 18943 (SearchNavigatorPreviewHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ChannelHeaderDefault from "ChannelHeader" /* 14572 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const memoResult = react.memo(function SearchNavigatorPreviewHeader(channelId) {
  channelId = channelId.channelId;
  return <View style={closure_4().container}>{jsx(ChannelHeaderDefault, { channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>;
});
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;
