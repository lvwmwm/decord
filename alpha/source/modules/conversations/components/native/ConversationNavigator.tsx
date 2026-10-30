// Module ID: 9834
// Function ID: 9835
// Name: ConversationNavigator
// Dependencies: [32, 19, 9829, 21, 9835, 7163, 9845, 9846, 9847, 575, 9858, 9868, 5194, 9828, 2]
// Exports: default, openConversationNavigator

// Module 9834 (ConversationNavigator)
import nativeDefault from "native" /* 575 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import useSelectedConversationDefault from "useSelectedConversation" /* 9845 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedConversationStore from "SelectedConversationStore" /* 9829 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9835 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let tmp;
const ConversationsActionCreators = tmp(9828);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let Navigator = NativeStackView.createNativeStackNavigator();
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  let LIST;
  let channelId;
  let closure_0;
  let guildId;
  let items;
  let tmp8;
  ({ channelId, guildId } = route.route.params);
  _require = undefined;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("Navigator");
  const accessibilityNativeStackOptions = obj.useAccessibilityNativeStackOptions();
  _require = useSelectedConversationDefault(channelId);
  const first = _slicedToArray(react.useState(() => {
    let tmp = null;
    if (SelectedConversationStore.consumeFocusRequest()) {
      let tmp3 = null;
      const tmp2 = closure_0;
      if (null != closure_0) {
        const obj = { conversationId: null, title: null };
        ({ id: obj.conversationId, title: obj.title } = tmp2);
        tmp3 = obj;
      }
      tmp = tmp3;
    }
    return tmp;
  }), 1)[0];
  let obj2 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, initialRouteName: LIST, children: items };
  Navigator = Navigator.Navigator;
  const tmp5 = closure_7;
  if (null != first) {
    LIST = tmp(9846).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(9846).ConversationNavigatorScreens.LIST;
  }
  items = [, ];
  const obj3 = {
    initialParams: { channelId, guildId },
    name: tmp(9846).ConversationNavigatorScreens.LIST,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const obj = closure_0(dependencyMap[8]);
      const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
      return obj.conversationNavigatorListHeaderOptions(route, navigation, obj2);
    },
    getComponent() {
      return closure_0(dependencyMap[10]).default;
    }
  };
  items[0] = closure_6(Navigator.Screen, obj3);
  const Screen = tmp6.Screen;
  const obj4 = {
    name: tmp(9846).ConversationNavigatorScreens.FOCUS,
    initialParams: tmp8,
    options(arg0) {
      let route;
      ({ route, navigation } = arg0);
      const obj = closure_0(dependencyMap[8]);
      const obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
      return obj.conversationNavigatorFocusHeaderOptions(route, navigation, obj2);
    },
    getComponent() {
      return closure_0(dependencyMap[11]).default;
    }
  };
  tmp8 = undefined;
  const tmp7 = closure_6;
  if (null != first) {
    const obj5 = { channelId, guildId };
    const merged = Object.assign(first);
    tmp8 = obj5;
  }
  items[1] = tmp7(Screen, obj4);
  return tmp5(Navigator, obj2);
};
export function openConversationNavigator(focusSelectedConversation) {
  let channelId;
  let guildId;
  let flag = focusSelectedConversation.focusSelectedConversation;
  ({ channelId, guildId } = focusSelectedConversation);
  if (flag === undefined) {
    flag = false;
  }
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    if (flag) {
      const tmpResult = ConversationsActionCreators;
      const conversationFocus = tmpResult.requestConversationFocus();
    }
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
}
