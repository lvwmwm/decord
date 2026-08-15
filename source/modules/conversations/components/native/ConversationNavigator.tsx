// Module ID: 12687
// Function ID: 12688
// Name: HeaderWithBorder
// Dependencies: [19, 21, 4097, 712, 8492, 500, 9931, 6312, 12688, 12689, 1236, 12690, 12695, 12696, 4230, 2]
// Exports: default, openConversationNavigator

// Module 12687 (HeaderWithBorder)
import "noop";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let c3;
let c4;
const require = arg1;
function HeaderWithBorder(arg0) {
  let obj = require(4097) /* map */;
  const token = obj.useToken(importDefault(712).colors.BORDER_SUBTLE);
  obj = {};
  const merged = Object.assign(arg0);
  const obj2 = require(8492) /* GenericHeaderTitle */;
  obj.shouldHandleSafeArea = require(500) /* set */.isAndroid();
  obj.style = { borderColor: token };
  return obj2.renderHeader(obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const result = require("map").fileFinishedImporting("modules/conversations/components/native/ConversationNavigator.tsx");

export default function ConversationNavigator(route) {
  let Navigator;
  let Screen;
  const params = route.route.params;
  const channelId = params.channelId;
  let obj = channelId(6312);
  obj = { id: "conversation-navigator", screenOptions: obj.useAccessibilityNativeStackOptions(), children: null };
  obj = {
    initialParams: { channelId, guildId: params.guildId },
    name: channelId(12688).ConversationNavigatorScreens.LIST,
    options(navigation) {
      let obj = {
        header(arg0) {
          const merged = Object.assign(arg0);
          return callback(closure_5, {});
        },
        headerLeft: null,
        headerTitle: null
      };
      obj[1] = channelId(outer1_2[4]).getRenderBackImage(navigation.navigation);
      obj[2] = function headerTitle() {
        const obj = { channelId: closure_0, title: null };
        const intl = outer1_0(outer1_2[10]).intl;
        obj[1] = intl.string(outer1_0(outer1_2[10]).t.T3WBRp);
        return outer1_3(outer1_1(outer1_2[9]), obj);
      };
      return obj;
    },
    getComponent() {
      return channelId(12690).default;
    }
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  const items = [
    callback(Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: channelId(12688).ConversationNavigatorScreens.FOCUS,
      options(route) {
        route = route.route;
        const obj = {
          header(arg0) {
            const merged = Object.assign(arg0);
            return callback(closure_5, {});
          },
          headerLeft: null,
          headerTitle: null,
          headerRight: null
        };
        obj[1] = route(8492).getRenderBackImage(route.navigation);
        obj[2] = function headerTitle() {
          return outer1_3(outer1_1(outer1_2[9]), { channelId: route.params.channelId, title: route.params.title, hasRightAction: true });
        };
        obj[3] = function headerRight() {
          return outer1_3(outer1_1(outer1_2[12]), { channelId: route.params.channelId, conversationId: route.params.conversationId });
        };
        return obj;
      },
      getComponent() {
        return channelId(12696).default;
      }
    })
  ];
  obj[2] = items;
  return callback2(Navigator, obj);
};
export const openConversationNavigator = function openConversationNavigator(arg0) {
  let channelId;
  let guildId;
  ({ channelId, guildId } = arg0);
  let obj = require(4230) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { channelId: null, guildId: null };
    obj[0] = channelId;
    obj[1] = guildId;
    rootNavigationRef.navigate("conversations", obj);
  }
};
