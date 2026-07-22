// Module ID: 15051
// Function ID: 113308
// Name: ForYouSuggestedFriendRow
// Dependencies: []
// Exports: default

// Module 15051 (ForYouSuggestedFriendRow)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = arg1(dependencyMap[6]).createStyles((layout) => {
  let obj = arg1(dependencyMap[7]);
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = arg1(dependencyMap[7]);
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_MUTED };
  obj.rowActive = obj;
  obj.pressable = { flex: 1 };
  obj1 = { marginRight: importDefault(dependencyMap[8]).space.PX_8 };
  obj.textContainer = obj1;
  const obj2 = { flexShrink: 1 };
  let num = 0;
  if (obj7.isAndroid()) {
    num = 2;
  }
  obj2.marginBottom = num;
  obj.nameText = obj2;
  const obj3 = { FPS_15: "shapes", getImageSourcesFromImageProps: "Symbol", numpad 4: "accessibilityRole", useIsWindowSmall: "Reflect", maskRemainder: "HTTP", overflow: "Reflect", borderRadius: importDefault(dependencyMap[8]).radii.round };
  const merged = Object.assign(sizeStyle);
  obj3["marginRight"] = layoutStyles.icon.margin.marginRight + 4;
  obj.avatar = obj3;
  return obj;
});
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendRow.tsx");

export default function ForYouSuggestedFriendRow(suggestedFriend) {
  let panelVariant;
  suggestedFriend = suggestedFriend.suggestedFriend;
  const arg1 = suggestedFriend;
  ({ onAddSuggestion: closure_1, onAddSuggestionAnimationFinish: closure_2, panelVariant } = suggestedFriend);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let React;
  let View;
  let closure_5;
  let obj = arg1(dependencyMap[7]);
  const messagesTabLayout = obj.useMessagesTabLayout(panelVariant);
  const tmp2 = callback2(messagesTabLayout);
  const analyticsLocations = importDefault(dependencyMap[10])().analyticsLocations;
  React = analyticsLocations;
  let obj1 = arg1(dependencyMap[7]);
  const layoutStyles = obj1.getLayoutStyles(messagesTabLayout);
  let obj2 = arg1(dependencyMap[11]);
  const fontScale = obj2.useFontScale();
  let obj3 = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => stateFromStores.useReducedMotion);
  const items1 = [suggestedFriend, analyticsLocations];
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    let obj5 = arg1(dependencyMap[16]);
    const suggestedContactNameForSuggestion = obj5.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    let str2 = "";
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      str2 = " \u00B7 " + suggestedContactNameForSuggestion;
    }
    if (null != suggestedFriend.mutualFriendsCount) {
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = arg1(dependencyMap[17]).intl;
        obj = { count: suggestedFriend.mutualFriendsCount };
        let formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[17]).t.z7y34b, obj);
      }
      let obj8 = arg1(dependencyMap[18]);
      const sharedValue = obj8.useSharedValue(false);
      View = sharedValue;
      let obj9 = arg1(dependencyMap[12]);
      const items2 = [closure_6];
      const stateFromStores = obj9.useStateFromStores(items2, () => relationshipType.getRelationshipType(suggestedFriend.user.id) === constants2.PENDING_OUTGOING);
      closure_5 = stateFromStores;
      const items3 = [sharedValue, stateFromStores];
      const effect = React.useEffect(() => {
        if (!stateFromStores) {
          const result = sharedValue.set(false);
        }
      }, items3);
      let obj10 = arg1(dependencyMap[19]);
      obj = { accessibilityRole: "button", underlayColor: tmp2.rowActive.backgroundColor, onPress: tmp6 };
      const items4 = [tmp2.pressable, ];
      obj1 = { borderRadius: layoutStyles.container.borderRadius };
      items4[1] = obj1;
      obj.style = items4;
      obj2 = {};
      obj3 = { style: tmp2.avatar };
      let obj4 = { user: suggestedFriend.user, guildId: undefined, size: layoutStyles.icon.avatarSize, animate: !stateFromStoresObject };
      obj3.children = callback(arg1(dependencyMap[22]).Avatar, obj4);
      const items5 = [callback(View, obj3), , ];
      obj5 = { style: tmp2.textContainer };
      let obj6 = { variant: layoutStyles.channelName.text.variant, style: tmp2.nameText, children: friendSuggestionName };
      const items6 = [callback(arg1(dependencyMap[23]).Text, obj6), ];
      const obj7 = {};
      obj8 = {};
      const obj14 = arg1(dependencyMap[21]);
      const tmp26 = closure_11;
      let num13 = 0;
      if (obj22.isAndroid()) {
        num13 = -2;
      }
      obj8.marginTop = num13;
      obj7.style = obj8;
      obj9 = {};
      const obj22 = arg1(dependencyMap[9]);
      const tmp28 = callback;
      let num15 = 0;
      if (obj24.isAndroid()) {
        num15 = 2;
      }
      obj9.lineHeight = layoutStyles.messagePreview.height + num15;
      obj9.textVariant = layoutStyles.messagePreview.text.variant;
      obj9.actioned = sharedValue;
      obj9.maxFontSizeMultiplier = 1.75;
      const _HermesInternal2 = HermesInternal;
      obj9.label = "" + formatToPlainStringResult + str2;
      const intl2 = arg1(dependencyMap[17]).intl;
      obj9.actionStatus = intl2.string(arg1(dependencyMap[17]).t.Kzyxm9);
      obj9.animate = !stateFromStoresObject;
      obj7.children = tmp28(arg1(dependencyMap[24]).ActionStatusSubLabel, obj9);
      items6[1] = callback(View, obj7);
      obj5.children = items6;
      items5[1] = closure_10(View, obj5);
      obj10 = { user: suggestedFriend.user, added: sharedValue };
      const obj24 = arg1(dependencyMap[9]);
      const tmp34 = callback;
      let str5 = "sm";
      if (obj26.isLayoutCozy(messagesTabLayout)) {
        str5 = "md";
      }
      obj10.size = str5;
      obj10.onAddSuggestion = function onAddSuggestion(id) {
        let obj = callback(closure_2[26]);
        obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: "Notifications Tab" };
        obj.track(constants.FRIEND_SUGGESTION_ADDED, obj);
        callback(suggestedFriend);
      };
      obj10.onFinishAnimation = function onFinishAnimation() {
        lib(suggestedFriend);
      };
      obj10.animate = !stateFromStoresObject;
      items5[2] = tmp34(arg1(dependencyMap[25]).ContactSuggestionActions, obj10);
      obj2.children = items5;
      const obj11 = { layout: messagesTabLayout, fontScale, panelVariant };
      obj.children = obj14.renderChannelWrapper(closure_10(tmp26, obj2), obj11);
      const obj12 = { layout: messagesTabLayout, panelVariant };
      return obj10.renderChannelPressableWrapper(callback(arg1(dependencyMap[20]).PressableHighlight, obj), obj12);
    }
    obj6 = importDefault(dependencyMap[15]);
    formatToPlainStringResult = obj6.getName(suggestedFriend.user);
  }
  obj4 = importDefault(dependencyMap[15]);
  friendSuggestionName = obj4.getName(suggestedFriend.user);
};
