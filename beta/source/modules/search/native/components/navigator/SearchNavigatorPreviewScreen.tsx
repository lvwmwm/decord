// Module ID: 16683
// Function ID: 16684
// Name: SearchNavigatorPreviewScreen
// Dependencies: [19, 17, 1074, 21, 4836, 1485, 1488, 11841, 16640, 2]
// Exports: default

// Module 16683 (SearchNavigatorPreviewScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

const ScrollView = react_native.ScrollView;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { flex: 1 } });
let result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default function SearchNavigatorPreviewScreen() {
  let searchContext;
  let tmp = closure_7();
  let obj = navigation(searchContext[5]);
  navigation = obj.useNavigation();
  let obj2 = navigation(searchContext[6]);
  const route = obj2.useRoute();
  const channelId = route.params.channelId;
  searchContext = route.params.searchContext;
  const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
  const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
  const callback = onBeforeJumpToMessage.useCallback(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId };
    const result = obj.trackSearchJumpToMessage(obj2);
    const tmp = searchContext;
    if (onBeforeJumpToMessage != null) {
      onBeforeJumpToMessage();
    }
    const type = tmp.type;
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
  }, items);
  let type = searchContext.type;
  if (SearchTypes.CHANNEL !== type) {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      return jsx(channelId(searchContext[8]), { channelId, onBeforeJumpToMessage: callback });
    }
  }
  return <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp.container}>{jsx(channelId(searchContext[8]), { channelId, onBeforeJumpToMessage: callback })}</ScrollView>;
};
