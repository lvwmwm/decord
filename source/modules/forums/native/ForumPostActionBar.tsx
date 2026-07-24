// Module ID: 10458
// Function ID: 80532
// Name: ForumPostActionBar
// Dependencies: [57, 31, 27, 3759, 3760, 1348, 653, 33, 4130, 689, 566, 5681, 1450, 9348, 8868, 10459, 4660, 1212, 4082, 4126, 10234, 4074, 2]
// Exports: default

// Module 10458 (ForumPostActionBar)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { overflow: "hidden", paddingHorizontal: 12, paddingVertical: 8, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, marginBottom: -1 };
_createForOfIteratorHelperLoose.actionBarContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.actionRow = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
_createForOfIteratorHelperLoose.reactionRow = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 };
let obj1 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 28, marginRight: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.actionButton = obj1;
_createForOfIteratorHelperLoose.actionButtonsContainer = { justifyContent: "flex-end" };
_createForOfIteratorHelperLoose.lastActionButton = { marginRight: 0 };
_createForOfIteratorHelperLoose.buttonText = { marginLeft: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default function ForumPostActionBar(channel) {
  channel = channel.channel;
  let stateFromStores1;
  let items9 = function handleFollow() {
    const result = channel(9348).handleToggleFollowForumPost(channel, stateFromStores1);
  };
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(566);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getChannel(channel.parent_id));
  let obj1 = channel(5681);
  const firstMessage = obj1.useFirstForumPostMessage(channel).firstMessage;
  let obj2 = channel(566);
  const items1 = [closure_7];
  stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_7.hasJoined(channel.id));
  const dependencyMap = channel.getGuildId();
  let obj3 = channel(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let isLurkingResult = null != closure_2;
    if (isLurkingResult) {
      isLurkingResult = outer1_6.isLurking(closure_2);
    }
    return isLurkingResult;
  });
  const width = stateFromStores1(1450)().width;
  const tmp5 = width(React.useState(0), 2);
  React = tmp5[1];
  const items3 = [width];
  const callback = React.useCallback((nativeEvent) => {
    callback(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  let obj4 = channel(8868);
  obj = {};
  const items4 = [tmp.actionBarContainer, obj4.useGradientTop()];
  obj.style = items4;
  let tmp9 = null != firstMessage;
  if (tmp9) {
    obj = { style: tmp.reactionRow };
    obj1 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: tmp5[0] };
    obj.children = callback(channel(10459).ForumPostActionBarReactions, obj1);
    tmp9 = callback(View, obj);
  }
  const items5 = [tmp9, ];
  obj2 = { style: items6, onLayout: callback };
  items6 = [, ];
  ({ actionRow: arr8[0], actionButtonsContainer: arr8[1] } = tmp);
  if (!!stateFromStores2) {
    const items7 = [tmp16, ];
    obj3 = { accessible: true };
    const intl4 = channel(1212).intl;
    obj3.accessibilityLabel = intl4.string(channel(1212).t.WqhZss);
    const items8 = [, ];
    ({ actionButton: arr12[0], lastActionButton: arr12[1] } = tmp);
    obj3.style = items8;
    obj3.onPress = function onPress() {
      const guildId = channel.getGuildId();
      if (null != guildId) {
        let obj = channel(9348);
        obj = { section: outer1_9.CHANNEL_HEADER };
        const result = obj.handleCopyLinkForumPost(guildId, channel.id, obj);
      }
    };
    obj4 = { size: "xs" };
    obj3.children = callback(channel(4074).LinkIcon, obj4);
    items7[1] = callback(channel(4660).PressableOpacity, obj3);
    obj2.children = items7;
    items5[1] = tmp14(tmp15, obj2);
    obj.children = items5;
    return closure_11(View, obj);
  } else {
    const obj5 = { accessible: true };
    let num3 = 17;
    let intl = channel(1212).intl;
    let Text = intl.string;
    let t = channel(1212).t;
    if (stateFromStores1) {
      obj5.accessibilityLabel = Text(t.G3ooHD);
      obj5.style = tmp.actionButton;
      obj5.onPress = items9;
      intl = callback;
      items9 = [callback(tmp20(4082).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      Text = tmp20(4126).Text;
      const obj6 = { style: null, variant: "text-sm/semibold", color: "text-brand" };
      const items10 = [tmp.buttonText];
      obj6.style = items10;
      const intl3 = tmp20(tmp21[num3]).intl;
      num3 = intl3.string(tmp20(tmp21[num3]).t["OtF+lC"]);
      obj6.children = num3;
      t = callback(Text, obj6);
      items9[1] = t;
      obj5.children = items9;
      let tmp23 = obj5;
    } else {
      obj5.accessibilityLabel = Text(t["DjZ+6E"]);
      obj5.style = tmp.actionButton;
      obj5.onPress = items9;
      const obj7 = { size: "xs" };
      const items11 = [callback(tmp20(10234).BellIcon, obj7), ];
      const obj8 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "interactive-text-default" };
      const intl2 = tmp20(tmp21[num3]).intl;
      obj8.children = intl2.string(tmp20(tmp21[num3]).t["0rQinA"]);
      items11[1] = callback(tmp20(4126).Text, obj8);
      obj5.children = items11;
      tmp23 = obj5;
    }
    closure_11(channel(4660).PressableOpacity, tmp23);
    const tmp17 = closure_11;
  }
};
