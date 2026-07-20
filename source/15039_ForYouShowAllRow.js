// Module ID: 15039
// Function ID: 113242
// Name: ForYouShowAllRow
// Dependencies: []
// Exports: ForYouSuggestedFriendShowAllRow

// Module 15039 (ForYouShowAllRow)
function ForYouShowAllRow(panelVariant) {
  let children;
  let count;
  let onPress;
  let flag = panelVariant.panelVariant;
  ({ children, count, onPress } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[6]);
  const messagesTabLayout = obj.useMessagesTabLayout(flag);
  const tmp2 = callback2(messagesTabLayout);
  let obj1 = arg1(dependencyMap[6]);
  const layoutStyles = obj1.getLayoutStyles(messagesTabLayout);
  let obj2 = arg1(dependencyMap[12]);
  const fontScale = obj2.useFontScale();
  let obj3 = arg1(dependencyMap[13]);
  obj = { accessibilityRole: "button", underlayColor: tmp2.rowActive.backgroundColor, onPress, style: items };
  const items = [tmp2.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  let obj5 = arg1(dependencyMap[15]);
  obj = {};
  obj1 = { style: tmp2.avatar };
  obj2 = {};
  const obj10 = arg1(dependencyMap[6]);
  const tmp10 = callback;
  const tmp5 = callback;
  const tmp6 = closure_9;
  const tmp7 = closure_8;
  const tmp8 = callback;
  const tmp9 = View;
  const AvatarSizes = arg1(dependencyMap[11]).AvatarSizes;
  obj2.size = arg1(dependencyMap[6]).isLayoutCompact(messagesTabLayout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
  obj2.aria-label = "";
  obj2.children = children;
  obj1.children = tmp10(arg1(dependencyMap[16]).AvatarDuoPile, obj2);
  const items1 = [tmp8(tmp9, obj1), , ];
  obj3 = { style: tmp2.textContainer };
  const obj4 = { variant: layoutStyles.channelName.text.variant, style: tmp2.nameText };
  const intl = arg1(dependencyMap[18]).intl;
  obj4.children = intl.format(arg1(dependencyMap[18]).t.NrzztX, { count });
  obj3.children = callback(arg1(dependencyMap[17]).Text, obj4);
  items1[1] = callback(View, obj3);
  obj5 = { style: tmp2.icon, color: tmp2.iconColor.color, source: importDefault(dependencyMap[19]), size: arg1(dependencyMap[11]).IconSizes.CUSTOM };
  items1[2] = callback(arg1(dependencyMap[11]).Icon, obj5);
  obj.children = items1;
  const obj6 = { layout: messagesTabLayout, fontScale, panelVariant: flag };
  obj.children = obj5.renderChannelWrapper(tmp6(tmp7, obj), obj6);
  const obj7 = { layout: messagesTabLayout, panelVariant: flag };
  return obj3.renderChannelPressableWrapper(tmp5(arg1(dependencyMap[14]).PressableHighlight, obj), obj7);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const Sections = arg1(dependencyMap[3]).Sections;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles((layout) => {
  let obj = arg1(dependencyMap[6]);
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = arg1(dependencyMap[6]);
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED };
  obj.rowActive = obj;
  obj.pressable = { flex: 1 };
  obj1 = { marginRight: importDefault(dependencyMap[7]).space.PX_8 };
  obj.textContainer = obj1;
  const obj2 = { flexShrink: 1 };
  let num = 0;
  if (obj7.isAndroid()) {
    num = 2;
  }
  obj2.marginBottom = num;
  obj.nameText = obj2;
  const obj3 = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, borderRadius: importDefault(dependencyMap[7]).radii.round };
  const merged = Object.assign(sizeStyle);
  obj3["marginRight"] = layoutStyles.icon.margin.marginRight + 4;
  obj.avatar = obj3;
  const obj7 = arg1(dependencyMap[8]);
  obj.icon = { paddingRight: importDefault(dependencyMap[7]).space.PX_24 };
  const obj4 = { paddingRight: importDefault(dependencyMap[7]).space.PX_24 };
  obj.iconColor = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

export const ForYouSuggestedFriendShowAllRow = function ForYouSuggestedFriendShowAllRow(suggestedFriends) {
  suggestedFriends = suggestedFriends.suggestedFriends;
  const arg1 = suggestedFriends;
  let flag = suggestedFriends.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let dependencyMap;
  let obj = arg1(dependencyMap[9]);
  const navigation = obj.useNavigation();
  importDefault = navigation;
  const messagesTabLayout = arg1(dependencyMap[6]).useMessagesTabLayout(flag);
  dependencyMap = messagesTabLayout;
  const items = [navigation, suggestedFriends];
  const items1 = [messagesTabLayout, suggestedFriends];
  const callback = React.useCallback(() => {
    let obj = navigation(messagesTabLayout[10]);
    obj = { section_id: constants2.FRIEND_SUGGESTIONS, truncated_count: 2, expanded_count: suggestedFriends.length, location: "NotificationsTab" };
    obj.track(constants.FRIEND_FINDER_SECTION_EXPANDED, obj);
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  obj = {
    children: React.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((user) => {
        const obj = { user: user.user, guildId: undefined };
        const obj2 = callback(closure_2[6]);
        const tmp = closure_7;
        const AvatarSizes = callback(closure_2[11]).AvatarSizes;
        obj.size = callback(closure_2[6]).isLayoutCompact(closure_2) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
        return tmp(callback(closure_2[11]).Avatar, obj, user.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag
  };
  return callback(ForYouShowAllRow, obj);
};
