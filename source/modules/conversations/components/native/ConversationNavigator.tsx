// Module ID: 9259
// Function ID: 72394
// Name: HeaderWithBorder
// Dependencies: [31, 33, 3869, 689, 9094, 477, 9085, 5552, 9260, 9261, 1212, 9262, 9270, 9281, 4017, 2]
// Exports: default, openConversationNavigator

// Module 9259 (HeaderWithBorder)
import "result";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let closure_3;
let closure_4;
const require = arg1;
function HeaderWithBorder(arg0) {
  let obj = require(3869) /* map */;
  const token = obj.useToken(importDefault(689).colors.BORDER_SUBTLE);
  obj = {};
  const merged = Object.assign(arg0);
  const obj2 = require(9094) /* GenericHeaderTitle */;
  obj["shouldHandleSafeArea"] = require(477) /* set */.isAndroid();
  obj["style"] = { borderColor: token };
  return obj2.renderHeader(obj);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const result = require("map").fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  let Navigator;
  let Screen;
  const params = route.route.params;
  const channelId = params.channelId;
  let obj = channelId(5552);
  obj = { id: "conversation-navigator", screenOptions: obj.useAccessibilityNativeStackOptions() };
  obj = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(9260).ConversationNavigatorScreens.LIST,
    options(navigation) {
      let obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return outer2_3(outer2_6, {});
        },
        headerLeft: channelId(outer1_2[4]).getRenderBackImage(navigation.navigation),
        headerTitle() {
          const obj = { channelId: outer1_0 };
          const intl = channelId(outer2_2[10]).intl;
          obj.title = intl.string(channelId(outer2_2[10]).t.T3WBRp);
          return outer2_3(outer2_1(outer2_2[9]), obj);
        }
      };
      return obj;
    },
    getComponent() {
      return channelId(outer1_2[11]).default;
    }
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  const items = [
    callback(Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: channelId(9260).ConversationNavigatorScreens.FOCUS,
      options(route) {
        route = route.route;
        const obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return outer2_3(outer2_6, {});
          },
          headerLeft: channelId(outer1_2[4]).getRenderBackImage(route.navigation),
          headerTitle() {
            return outer2_3(outer2_1(outer2_2[9]), { channelId: route.params.channelId, title: route.params.title, hasRightAction: true });
          },
          headerRight() {
            return outer2_3(outer2_1(outer2_2[12]), { channelId: route.params.channelId, conversationId: route.params.conversationId });
          }
        };
        return obj;
      },
      getComponent() {
        return channelId(outer1_2[13]).default;
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
  let obj = require(4017) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { channelId, guildId };
    rootNavigationRef.navigate("conversations", obj);
  }
};
