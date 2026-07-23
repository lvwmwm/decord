// Module ID: 15545
// Function ID: 119900
// Name: SearchNavigatorPreviewScreen
// Dependencies: [31, 27, 653, 33, 4130, 1456, 1459, 10076, 9309, 2]
// Exports: default

// Module 15545 (SearchNavigatorPreviewScreen)
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import { SearchTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
let result = require("ME").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default function SearchNavigatorPreviewScreen() {
  let obj = navigation(searchContext[5]);
  navigation = obj.useNavigation();
  const tmp = callback();
  const route = navigation(searchContext[6]).useRoute();
  const channelId = route.params.channelId;
  searchContext = route.params.searchContext;
  const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
  const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
  callback = onBeforeJumpToMessage.useCallback(() => {
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
  let type = searchContext.type;
  if (SearchTypes.CHANNEL !== type) {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      obj = { channelId, onBeforeJumpToMessage: callback };
      return jsx(channelId(searchContext[8]), { channelId, onBeforeJumpToMessage: callback });
    }
  }
  obj = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: tmp.container, children: jsx(channelId(searchContext[8]), { channelId, onBeforeJumpToMessage: callback }) };
  return <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp.container}>{jsx(channelId(searchContext[8]), { channelId, onBeforeJumpToMessage: callback })}</ScrollView>;
};
