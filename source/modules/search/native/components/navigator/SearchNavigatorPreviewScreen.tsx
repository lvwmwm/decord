// Module ID: 15410
// Function ID: 117620
// Name: SearchNavigatorPreviewScreen
// Dependencies: []
// Exports: default

// Module 15410 (SearchNavigatorPreviewScreen)
let closure_3 = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const SearchTypes = arg1(dependencyMap[2]).SearchTypes;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ container: { flex: 1 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default function SearchNavigatorPreviewScreen() {
  let obj = arg1(dependencyMap[5]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp = callback();
  const route = arg1(dependencyMap[6]).useRoute();
  const channelId = route.params.channelId;
  const importDefault = channelId;
  const searchContext = route.params.searchContext;
  const dependencyMap = searchContext;
  const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
  const React = onBeforeJumpToMessage;
  const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
  const callback = React.useCallback(() => {
    let obj = channelId(searchContext[7]);
    obj = { searchContext, channelId };
    const result = obj.trackSearchJumpToMessage(obj);
    if (null != onBeforeJumpToMessage) {
      onBeforeJumpToMessage();
    }
    const type = searchContext.type;
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
  }, items);
  const type = searchContext.type;
  if (SearchTypes.CHANNEL !== type) {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      obj = { channelId, onBeforeJumpToMessage: callback };
      return jsx(importDefault(dependencyMap[8]), obj);
    }
  }
  obj = { contentContainerStyle: tmp.container, children: jsx(importDefault(dependencyMap[8]), { channelId, onBeforeJumpToMessage: callback }) };
  return <ScrollView {...obj} />;
};
