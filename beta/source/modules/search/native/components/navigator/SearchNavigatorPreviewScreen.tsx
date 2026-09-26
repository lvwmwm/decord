// Module ID: 17333
// Function ID: 17334
// Name: SearchNavigatorPreviewScreen
// Dependencies: [19, 17, 1074, 21, 4788, 1484, 1487, 12641, 17290, 2]
// Exports: default

// Module 17333 (SearchNavigatorPreviewScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12641 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
const SearchTypes = fn(1074).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let closure_7 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default function SearchNavigatorPreviewScreen() {
  const tmp = closure_7();
  navigation = navigation(searchContext[5]).useNavigation();
  const obj = navigation(searchContext[5]);
  const route = navigation(searchContext[6]).useRoute();
  const channelId = route.params.channelId;
  searchContext = route.params.searchContext;
  const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
  const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
  const callback = onBeforeJumpToMessage.useCallback(() => {
    const result = search_tracking_TrackingDefault.trackSearchJumpToMessage({ searchContext, channelId });
    if (onBeforeJumpToMessage != null) {
      onBeforeJumpToMessage();
    }
    const type = searchContext.type;
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
  }, items);
  let type = searchContext.type;
  if (SearchTypes.CHANNEL !== type) {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      const obj3 = { channelId, onBeforeJumpToMessage: callback };
      return jsx(channelId(tmp2[8]), { channelId, onBeforeJumpToMessage: callback });
    }
  }
  const obj2 = navigation(searchContext[6]);
  return <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp.container}>{jsx(channelId(searchContext[8]), { channelId, onBeforeJumpToMessage: callback })}</ScrollView>;
};
