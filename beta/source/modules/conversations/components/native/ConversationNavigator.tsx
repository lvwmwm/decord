// Module ID: 8161
// Function ID: 8162
// Name: ConversationNavigator
// Dependencies: [19, 21, 8162, 558, 568, 7246, 8172, 580, 8187, 8189, 13557, 4617, 2]
// Exports: openConversationNavigator

// Module 8161 (ConversationNavigator)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import Navigator from "Navigator" /* 7246 */;
import ConversationNavigatorHeader from "ConversationNavigatorHeader" /* 8172 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 8189 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(8162);
let closure_5 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = c.c(11);
  ({ channelId, guildId } = route.route.params);
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function v(arg0) {
        ({ route, navigation } = arg0);
        return ConversationNavigatorHeader.conversationNavigatorListHeaderOptions(route, navigation, nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
      };
      const fn2 = function l() {
        return require("ConversationListScreen").default;
      };
      cResult[3] = fn;
      cResult[4] = fn2;
      let tmp8 = fn2;
      let tmp7 = fn;
    } else {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    if (cResult[5] !== tmp5) {
      const obj3 = { initialParams: tmp5, name: tmp(8189).ConversationNavigatorScreens.LIST, options: tmp7, getComponent: tmp8 };
      const tmp12 = React3(closure_5.Screen, obj3);
      cResult[5] = tmp5;
      cResult[6] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = {
        name: tmp(8189).ConversationNavigatorScreens.FOCUS,
        options(arg0) {
              ({ route, navigation } = arg0);
              return ConversationNavigatorHeader.conversationNavigatorFocusHeaderOptions(route, navigation, nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
            },
        getComponent() {
              return require("ConversationFocusScreen").default;
            }
      };
      const tmp16 = React3(closure_5.Screen, obj4);
      cResult[7] = tmp16;
      let tmp13 = tmp16;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === accessibilityNativeStackOptions) {
      if (cResult[9] === tmp9) {
        let tmp17 = cResult[10];
      }
      return tmp17;
    }
    const obj5 = { id: "conversation-navigator", screenOptions: accessibilityNativeStackOptions, children: null };
    const items = [tmp9, tmp13];
    obj5.children = items;
    const tmp20 = React4(closure_5.Navigator, obj5);
    cResult[8] = accessibilityNativeStackOptions;
    cResult[9] = tmp9;
    cResult[10] = tmp20;
    tmp17 = tmp20;
  }
  const obj6 = { channelId, guildId };
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = obj6;
  tmp5 = obj6;
}) : ((route) => {
  ({ channelId, guildId } = route.route.params);
  const obj2 = { id: "conversation-navigator", screenOptions: Navigator.useAccessibilityNativeStackOptions(), children: null };
  ({ Navigator, Screen } = closure_5);
  const items = [
    React3(Screen, {
      initialParams: { channelId, guildId },
      name: ConversationNavigatorUtils.ConversationNavigatorScreens.LIST,
      options(arg0) {
        ({ route, navigation } = arg0);
        return ConversationNavigatorHeader.conversationNavigatorListHeaderOptions(route, navigation, nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
      },
      getComponent() {
        return require("ConversationListScreen").default;
      }
    }),

  ];
  const obj3 = {
    initialParams: { channelId, guildId },
    name: ConversationNavigatorUtils.ConversationNavigatorScreens.LIST,
    options(arg0) {
      ({ route, navigation } = arg0);
      return ConversationNavigatorHeader.conversationNavigatorListHeaderOptions(route, navigation, nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
    },
    getComponent() {
      return require("ConversationListScreen").default;
    }
  };
  items[1] = React3(closure_5.Screen, {
    name: ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS,
    options(arg0) {
      ({ route, navigation } = arg0);
      return ConversationNavigatorHeader.conversationNavigatorFocusHeaderOptions(route, navigation, nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
    },
    getComponent() {
      return require("ConversationFocusScreen").default;
    }
  });
  obj2.children = items;
  return React4(Navigator, obj2);
});
export const openConversationNavigator = function openConversationNavigator(arg0) {
  ({ channelId, guildId } = arg0);
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj2);
  }
};
