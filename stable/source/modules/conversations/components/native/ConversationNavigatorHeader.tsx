// Module ID: 9868
// Function ID: 9869
// Name: ConversationNavigatorHeader
// Dependencies: [19, 17, 4863, 21, 5014, 575, 504, 5652, 9812, 5596, 1376, 1113, 9869, 2]
// Exports: conversationNavigatorFocusHeaderOptions, conversationNavigatorListHeaderOptions

// Module 9868 (ConversationNavigatorHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import useToken from "useToken" /* 5596 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import HeaderShared from "HeaderShared" /* 9812 */;
import ConversationNavigatorMoreMenuDefault from "ConversationNavigatorMoreMenu" /* 9869 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const utils_PlatformUtils = tmp(1376);
function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.hasRightAction;
  const title = channelId.title;
  if (flag === undefined) {
    flag = false;
  }
  const items = [ChannelStore];
  const items1 = [channelId];
  const tmp = closure_6(flag);
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = useChannelNameDefault(stateFromStores, true);
  const GenericHeaderTitle = channelId(9812).GenericHeaderTitle;
  return <tmp5 style={tmp.container}>{null}</tmp5>;
}
function HeaderWithBorder(shouldHandleSafeArea) {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj3 = { shouldHandleSafeArea, style: { borderColor: token, backgroundColor: token1 } };
  const renderHeader = HeaderShared.renderHeader;
  HeaderShared;
  const merged = Object.assign(shouldHandleSafeArea);
  shouldHandleSafeArea = shouldHandleSafeArea.shouldHandleSafeArea;
  if (shouldHandleSafeArea == null) {
    const tmpResult = utils_PlatformUtils;
    shouldHandleSafeArea = tmpResult.isAndroid();
  }
  return renderHeader(obj3);
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  let num;
  const container = { flex: 1, paddingVertical: nativeDefault.space.PX_16, paddingRight: num, alignItems: "center", justifyContent: "center" };
  num = 0;
  if (!arg0) {
    num = nativeDefault.space.PX_64;
  }
  return { container };
});
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export function conversationNavigatorListHeaderOptions(route, navigation, backgroundColor) {
  let getRenderBackImage;
  _require = route;
  let obj = {
    headerShown: true,
    header(arg0) {
      let shouldHandleSafeArea;
      const obj = { shouldHandleSafeArea };
      const merged = Object.assign(arg0);
      shouldHandleSafeArea = undefined;
      const tmp = jsx;
      const tmp2 = HeaderWithBorder;
      if (backgroundColor != null) {
        shouldHandleSafeArea = backgroundColor.shouldHandleSafeArea;
      }
      return tmp(tmp2, obj);
    },
    headerLeft: getRenderBackImage(navigation, { badgeCutoutColor: backgroundColor }),
    headerTitle() {
      const intl = intl2.intl;
      return <ConversationNavigatorHeader channelId={route.params.channelId} title={intl.string(intl2.t.T3WBRp)} />;
    }
  };
  let tmp = require("HeaderShared");
  backgroundColor = undefined;
  getRenderBackImage = tmp.getRenderBackImage;
  if (backgroundColor != null) {
    backgroundColor = backgroundColor.backgroundColor;
  }
  return obj;
}
export function conversationNavigatorFocusHeaderOptions(route, navigation, backgroundColor) {
  let getRenderBackImage;
  _require = route;
  let obj = {
    headerShown: true,
    header(arg0) {
      let shouldHandleSafeArea;
      const obj = { shouldHandleSafeArea };
      const merged = Object.assign(arg0);
      shouldHandleSafeArea = undefined;
      const tmp = jsx;
      const tmp2 = HeaderWithBorder;
      if (backgroundColor != null) {
        shouldHandleSafeArea = backgroundColor.shouldHandleSafeArea;
      }
      return tmp(tmp2, obj);
    },
    headerLeft: getRenderBackImage(navigation, { badgeCutoutColor: backgroundColor }),
    headerTitle() {
      let tmp2 = null;
      if (null != route.params) {
        tmp2 = <ConversationNavigatorHeader channelId={route.params.channelId} title={route.params.title} hasRightAction />;
      }
      return tmp2;
    },
    headerRight() {
      let tmp2 = null;
      if (null != route.params) {
        tmp2 = jsx(ConversationNavigatorMoreMenuDefault, { channelId: route.params.channelId, conversationId: route.params.conversationId });
      }
      return tmp2;
    }
  };
  let tmp = require("HeaderShared");
  backgroundColor = undefined;
  getRenderBackImage = tmp.getRenderBackImage;
  if (backgroundColor != null) {
    backgroundColor = backgroundColor.backgroundColor;
  }
  return obj;
}
