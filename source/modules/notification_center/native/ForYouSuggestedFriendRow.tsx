// Module ID: 15213
// Function ID: 115799
// Name: ForYouSuggestedFriendRow
// Dependencies: [31, 27, 4122, 3767, 653, 33, 4130, 10290, 689, 477, 5462, 4549, 624, 8537, 1934, 3969, 14958, 1212, 3991, 15214, 4660, 15215, 1273, 4126, 15216, 15217, 675, 2]
// Exports: default

// Module 15213 (ForYouSuggestedFriendRow)
import result from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((layout) => {
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
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendRow.tsx");

export default function ForYouSuggestedFriendRow(suggestedFriend) {
  let dependencyMap;
  let importDefault;
  let panelVariant;
  suggestedFriend = suggestedFriend.suggestedFriend;
  ({ onAddSuggestion: importDefault, onAddSuggestionAnimationFinish: dependencyMap, panelVariant } = suggestedFriend);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let analyticsLocations;
  let sharedValue;
  let stateFromStores;
  let obj = suggestedFriend(10290);
  const messagesTabLayout = obj.useMessagesTabLayout(panelVariant);
  const tmp2 = callback2(messagesTabLayout);
  analyticsLocations = importDefault(5462)().analyticsLocations;
  let obj1 = suggestedFriend(10290);
  const layoutStyles = obj1.getLayoutStyles(messagesTabLayout);
  let obj2 = suggestedFriend(4549);
  const fontScale = obj2.useFontScale();
  let obj3 = suggestedFriend(624);
  const items = [stateFromStores];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => stateFromStores.useReducedMotion);
  const items1 = [suggestedFriend, analyticsLocations];
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    let obj5 = suggestedFriend(14958);
    const suggestedContactNameForSuggestion = obj5.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    let str2 = "";
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      str2 = " \u00B7 " + suggestedContactNameForSuggestion;
    }
    if (null != suggestedFriend.mutualFriendsCount) {
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = suggestedFriend(1212).intl;
        obj = { count: suggestedFriend.mutualFriendsCount };
        let formatToPlainStringResult = intl.formatToPlainString(suggestedFriend(1212).t.z7y34b, obj);
      }
      let obj8 = suggestedFriend(3991);
      sharedValue = obj8.useSharedValue(false);
      let obj9 = suggestedFriend(624);
      const items2 = [closure_6];
      stateFromStores = obj9.useStateFromStores(items2, () => outer1_6.getRelationshipType(suggestedFriend.user.id) === outer1_8.PENDING_OUTGOING);
      const items3 = [sharedValue, stateFromStores];
      const effect = analyticsLocations.useEffect(() => {
        if (!stateFromStores) {
          const result = sharedValue.set(false);
        }
      }, items3);
      let obj10 = suggestedFriend(15214);
      obj = { accessibilityRole: "button", underlayColor: tmp2.rowActive.backgroundColor, onPress: tmp6 };
      const items4 = [tmp2.pressable, ];
      obj1 = { borderRadius: layoutStyles.container.borderRadius };
      items4[1] = obj1;
      obj.style = items4;
      obj2 = {};
      obj3 = { style: tmp2.avatar };
      let obj4 = { user: suggestedFriend.user, guildId: undefined, size: layoutStyles.icon.avatarSize, animate: !stateFromStoresObject };
      obj3.children = callback(suggestedFriend(1273).Avatar, obj4);
      const items5 = [callback(sharedValue, obj3), , ];
      obj5 = { style: tmp2.textContainer };
      let obj6 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-default", style: tmp2.nameText, children: friendSuggestionName };
      const items6 = [callback(suggestedFriend(4126).Text, obj6), ];
      const obj7 = {};
      obj8 = {};
      const obj14 = suggestedFriend(15215);
      const tmp26 = closure_11;
      let num13 = 0;
      if (obj22.isAndroid()) {
        num13 = -2;
      }
      obj8.marginTop = num13;
      obj7.style = obj8;
      obj9 = {};
      obj22 = suggestedFriend(477);
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
      const intl2 = suggestedFriend(1212).intl;
      obj9.actionStatus = intl2.string(suggestedFriend(1212).t.Kzyxm9);
      obj9.animate = !stateFromStoresObject;
      obj7.children = tmp28(suggestedFriend(15216).ActionStatusSubLabel, obj9);
      items6[1] = callback(sharedValue, obj7);
      obj5.children = items6;
      items5[1] = closure_10(sharedValue, obj5);
      obj10 = { user: suggestedFriend.user, added: sharedValue };
      obj24 = suggestedFriend(477);
      const tmp34 = callback;
      let str5 = "sm";
      if (obj26.isLayoutCozy(messagesTabLayout)) {
        str5 = "md";
      }
      obj10.size = str5;
      obj10.onAddSuggestion = function onAddSuggestion(id) {
        let obj = outer1_1(outer1_2[26]);
        obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: "Notifications Tab" };
        obj.track(outer1_7.FRIEND_SUGGESTION_ADDED, obj);
        callback(suggestedFriend);
      };
      obj10.onFinishAnimation = function onFinishAnimation() {
        callback2(suggestedFriend);
      };
      obj10.animate = !stateFromStoresObject;
      items5[2] = tmp34(suggestedFriend(15217).ContactSuggestionActions, obj10);
      obj2.children = items5;
      const obj11 = { layout: messagesTabLayout, fontScale, panelVariant };
      obj.children = obj14.renderChannelWrapper(closure_10(tmp26, obj2), obj11);
      const obj12 = { layout: messagesTabLayout, panelVariant };
      return obj10.renderChannelPressableWrapper(callback(suggestedFriend(4660).PressableHighlight, obj), obj12);
    }
    obj6 = importDefault(3969);
    formatToPlainStringResult = obj6.getName(suggestedFriend.user);
  }
  obj4 = importDefault(3969);
  friendSuggestionName = obj4.getName(suggestedFriend.user);
};
