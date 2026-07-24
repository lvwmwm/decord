// Module ID: 15219
// Function ID: 115834
// Name: ForYouShowAllRow
// Dependencies: [31, 27, 653, 11755, 33, 4130, 10290, 689, 477, 1456, 675, 1273, 4549, 15214, 4660, 15215, 13141, 4126, 1212, 5173, 2]
// Exports: ForYouSuggestedFriendShowAllRow

// Module 15219 (ForYouShowAllRow)
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { Sections } from "SuggestedFriendSource";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function ForYouShowAllRow(panelVariant) {
  let children;
  let count;
  let onPress;
  let flag = panelVariant.panelVariant;
  ({ children, count, onPress } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(10290) /* getLayoutStyles */;
  const messagesTabLayout = obj.useMessagesTabLayout(flag);
  const tmp2 = callback2(messagesTabLayout);
  let obj1 = require(10290) /* getLayoutStyles */;
  const layoutStyles = obj1.getLayoutStyles(messagesTabLayout);
  let obj2 = require(4549) /* getFontScale */;
  const fontScale = obj2.useFontScale();
  let obj3 = require(15214) /* renderChannelPressableWrapper */;
  obj = { accessibilityRole: "button", underlayColor: tmp2.rowActive.backgroundColor, onPress, style: items };
  items = [tmp2.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  let obj5 = require(15215) /* renderChannelWrapper */;
  obj = {};
  obj1 = { style: tmp2.avatar };
  obj2 = {};
  const obj10 = require(10290) /* getLayoutStyles */;
  const tmp10 = callback;
  const tmp5 = callback;
  const tmp6 = closure_9;
  const tmp7 = closure_8;
  const tmp8 = callback;
  const tmp9 = View;
  const AvatarSizes = require(1273) /* Button */.AvatarSizes;
  obj2.size = require(10290) /* getLayoutStyles */.isLayoutCompact(messagesTabLayout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
  obj2["aria-label"] = "";
  obj2.children = children;
  obj1.children = tmp10(require(13141) /* AvatarDuoPile */.AvatarDuoPile, obj2);
  const items1 = [tmp8(tmp9, obj1), , ];
  obj3 = { style: tmp2.textContainer };
  const obj4 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-brand", style: tmp2.nameText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl.format(require(1212) /* getSystemLocale */.t.NrzztX, { count });
  obj3.children = callback(require(4126) /* Text */.Text, obj4);
  items1[1] = callback(View, obj3);
  obj5 = { style: tmp2.icon, color: tmp2.iconColor.color, source: importDefault(5173), size: require(1273) /* Button */.IconSizes.CUSTOM };
  items1[2] = callback(require(1273) /* Button */.Icon, obj5);
  obj.children = items1;
  const obj6 = { layout: messagesTabLayout, fontScale, panelVariant: flag };
  obj.children = obj5.renderChannelWrapper(tmp6(tmp7, obj), obj6);
  const obj7 = { layout: messagesTabLayout, panelVariant: flag };
  return obj3.renderChannelPressableWrapper(tmp5(require(4660) /* PressableBase */.PressableHighlight, obj), obj7);
}
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((layout) => {
  let obj = require(10290) /* getLayoutStyles */;
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = require(10290) /* getLayoutStyles */;
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED };
  obj.rowActive = obj;
  obj.pressable = { flex: 1 };
  obj1 = { flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: importDefault(689).space.PX_8 };
  obj.textContainer = obj1;
  const obj2 = { flexShrink: 1 };
  let num = 0;
  if (obj7.isAndroid()) {
    num = 2;
  }
  obj2.marginBottom = num;
  obj.nameText = obj2;
  const obj3 = { position: "relative", borderRadius: importDefault(689).radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0 };
  const merged = Object.assign(sizeStyle);
  obj3["marginRight"] = layoutStyles.icon.margin.marginRight + 4;
  obj.avatar = obj3;
  const obj4 = { width: 8, height: 32, paddingRight: importDefault(689).space.PX_24 };
  obj.icon = obj4;
  obj7 = require(477) /* set */;
  obj.iconColor = { color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
const result = require("ME").fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

export const ForYouSuggestedFriendShowAllRow = function ForYouSuggestedFriendShowAllRow(suggestedFriends) {
  suggestedFriends = suggestedFriends.suggestedFriends;
  let flag = suggestedFriends.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let navigation;
  let messagesTabLayout;
  let obj = suggestedFriends(messagesTabLayout[9]);
  navigation = obj.useNavigation();
  messagesTabLayout = suggestedFriends(messagesTabLayout[6]).useMessagesTabLayout(flag);
  const items = [navigation, suggestedFriends];
  const items1 = [messagesTabLayout, suggestedFriends];
  const callback = React.useCallback(() => {
    let obj = navigation(messagesTabLayout[10]);
    obj = { section_id: outer1_6.FRIEND_SUGGESTIONS, truncated_count: 2, expanded_count: suggestedFriends.length, location: "NotificationsTab" };
    obj.track(outer1_5.FRIEND_FINDER_SECTION_EXPANDED, obj);
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  obj = {
    children: React.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((user) => {
        const obj = { user: user.user, guildId: undefined };
        const obj2 = suggestedFriends(messagesTabLayout[6]);
        const tmp = outer2_7;
        const AvatarSizes = suggestedFriends(messagesTabLayout[11]).AvatarSizes;
        obj.size = suggestedFriends(messagesTabLayout[6]).isLayoutCompact(outer1_2) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
        return tmp(suggestedFriends(messagesTabLayout[11]).Avatar, obj, user.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag
  };
  return callback(ForYouShowAllRow, obj);
};
