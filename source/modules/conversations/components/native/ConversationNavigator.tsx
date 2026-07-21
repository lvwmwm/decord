// Module ID: 9278
// Function ID: 72479
// Name: HeaderWithBorder
// Dependencies: []
// Exports: default, openConversationNavigator

// Module 9278 (HeaderWithBorder)
function HeaderWithBorder(arg0) {
  let obj = arg1(dependencyMap[2]);
  const token = obj.useToken(importDefault(dependencyMap[3]).colors.BORDER_SUBTLE);
  obj = {};
  const merged = Object.assign(arg0);
  const obj2 = arg1(dependencyMap[4]);
  obj["shouldHandleSafeArea"] = arg1(dependencyMap[5]).isAndroid();
  obj["style"] = { borderColor: token };
  return obj2.renderHeader(obj);
}
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[6]).createNativeStackNavigator();
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  let Navigator;
  let Screen;
  const params = route.route.params;
  const channelId = params.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[7]);
  obj = { id: "conversation-navigator", screenOptions: obj.useAccessibilityNativeStackOptions() };
  obj = {
    initialParams: { channelId, guildId: params.guildId },
    name: arg1(dependencyMap[8]).ConversationNavigatorScreens.LIST,
    options(navigation) {
      const obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return callback3(closure_6, {});
        },
        headerLeft: channelId(closure_2[4]).getRenderBackImage(navigation.navigation),
        headerTitle() {
          const obj = { channelId: callback };
          const intl = callback(closure_2[10]).intl;
          obj.title = intl.string(callback(closure_2[10]).t.T3WBRp);
          return callback3(callback2(closure_2[9]), obj);
        }
      };
      return obj;
    },
    getComponent() {
      return channelId(closure_2[11]).default;
    }
  };
  ({ Navigator, Screen } = Screen);
  const items = [
    callback(Screen, obj),
    callback(Screen.Screen, {
      name: arg1(dependencyMap[8]).ConversationNavigatorScreens.FOCUS,
      options(route) {
        const channelId = route.route;
        const obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return callback2(closure_6, {});
          },
          headerLeft: channelId(closure_2[4]).getRenderBackImage(route.navigation),
          headerTitle() {
            return callback2(callback(closure_2[9]), { channelId: route.params.channelId, title: route.params.title, hasRightAction: true });
          },
          headerRight() {
            return callback2(callback(closure_2[12]), { channelId: route.params.channelId, conversationId: route.params.conversationId });
          }
        };
        return obj;
      },
      getComponent() {
        return channelId(closure_2[13]).default;
      }
    })
  ];
  obj.children = items;
  return callback2(Navigator, obj);
};
export const openConversationNavigator = function openConversationNavigator(arg0) {
  let channelId;
  let guildId;
  ({ channelId, guildId } = arg0);
  let obj = arg1(dependencyMap[14]);
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj);
  }
};
