// Module ID: 8244
// Function ID: 8245
// Name: ConversationNavigator
// Dependencies: [32, 19, 7928, 21, 8245, 7333, 8255, 8257, 8258, 576, 8273, 13653, 4687, 8239, 2]
// Exports: default, openConversationNavigator

// Module 8244 (ConversationNavigator)
import nativeDefault from "native" /* 576 */;
import RootNavigationRef from "RootNavigationRef" /* 4687 */;
import useSelectedConversationDefault from "useSelectedConversation" /* 8255 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7928 */;

const require = globalThis.__r;

const ConversationsActionCreators = tmp(8239);
require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const NativeStackNavigator = fn(8245);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  ({ channelId, guildId } = route.route.params);
  _require = undefined;
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  _require = useSelectedConversationDefault(channelId);
  const first = _slicedToArray(noop.useState(() => {
    let tmp = null;
    if (ConversationsStore.consumeFocusRequest()) {
      let tmp3 = null;
      if (null != closure_0) {
        const obj = { conversationId: null, title: null };
        ({ id: obj.conversationId, title: obj.title } = tmp2);
        tmp3 = obj;
      }
      tmp = tmp3;
      tmp2 = closure_0;
    }
    return tmp;
  }), 1)[0];
  const obj2 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, initialRouteName: null, children: null };
  if (null != first) {
    let LIST = tmp(8257).ConversationNavigatorScreens.FOCUS;
  } else {
    LIST = tmp(8257).ConversationNavigatorScreens.LIST;
  }
  obj2.initialRouteName = LIST;
  let obj = require("Navigator");
  const tmp5 = closure_7;
  const items = [
    closure_6(Navigator.Screen, {
      initialParams: { channelId, guildId },
      name: require("ConversationNavigatorUtils").ConversationNavigatorScreens.LIST,
      options(arg0) {
        ({ route, navigation } = arg0);
        const obj = closure_0(8258);
        return obj.conversationNavigatorListHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
      },
      getComponent() {
        return closure_0(8273).default;
      }
    }),

  ];
  const obj4 = { name: require("ConversationNavigatorUtils").ConversationNavigatorScreens.FOCUS, initialParams: null, options: null, getComponent: null };
  let tmp8;
  if (null != first) {
    const obj5 = { channelId, guildId };
    const merged = Object.assign(first);
    tmp8 = obj5;
  }
  obj4.initialParams = tmp8;
  obj4.options = function options(arg0) {
    ({ route, navigation } = arg0);
    const obj = closure_0(8258);
    return obj.conversationNavigatorFocusHeaderOptions(route, navigation, { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  };
  obj4.getComponent = function getComponent() {
    return closure_0(13653).default;
  };
  items[1] = closure_6(Navigator.Screen, obj4);
  obj2.children = items;
  return tmp5(Navigator.Navigator, obj2);
};
export const openConversationNavigator = function openConversationNavigator(focusSelectedConversation) {
  let flag = focusSelectedConversation.focusSelectedConversation;
  ({ channelId, guildId } = focusSelectedConversation);
  if (flag === undefined) {
    flag = false;
  }
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp3) {
    if (flag) {
      const conversationFocus = ConversationsActionCreators.requestConversationFocus();
      const tmpResult = ConversationsActionCreators;
    }
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
};
