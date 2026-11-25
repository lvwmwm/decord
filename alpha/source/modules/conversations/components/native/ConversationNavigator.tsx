// Module ID: 9004
// Function ID: 9005
// Name: ConversationNavigator
// Dependencies: [32, 19, 8999, 21, 9005, 7324, 9015, 9016, 9017, 575, 9030, 9042, 5189, 8998, 2]
// Exports: default, openConversationNavigator

// Module 9004 (ConversationNavigator)
import nativeDefault from "native" /* 575 */;
import RootNavigationRef from "RootNavigationRef" /* 5189 */;
import useSelectedConversationDefault from "useSelectedConversation" /* 9015 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedConversationStore from "SelectedConversationStore" /* 8999 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9005 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let tmp;
const ConversationsActionCreators = tmp(8998);
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
    if (null != SelectedConversationStore.consumeFocusRequest()) {
      tmp = null;
      const tmp2 = closure_0;
      if (null != closure_0) {
        const obj = { conversationId: null, title: null };
        ({ id: obj.conversationId, title: obj.title } = tmp2);
        tmp = obj;
      }
    }
    return tmp;
  }), 1)[0];
  let obj2 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, initialRouteName: LIST, children: items };
  Navigator = Navigator.Navigator;
  const tmp5 = closure_7;
  if (null != first) {
    LIST = tmp(9016).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(9016).ConversationNavigatorScreens.LIST;
  }
  items = [, ];
  const obj3 = {
    initialParams: { channelId, guildId },
    name: tmp(9016).ConversationNavigatorScreens.LIST,
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
    name: tmp(9016).ConversationNavigatorScreens.FOCUS,
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
