// Module ID: 18455
// Function ID: 18456
// Name: ForYouSuggestedFriendRow
// Dependencies: [19, 17, 5010, 4951, 1072, 21, 5009, 11030, 575, 1376, 7320, 5637, 563, 8742, 1995, 5063, 18044, 1114, 5090, 18456, 6974, 18457, 1188, 5619, 18458, 18459, 1253, 2]
// Exports: default

// Module 18455 (ForYouSuggestedFriendRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import ChannelListLayout from "ChannelListLayout" /* 11030 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, RelationshipTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((layout) => {
  let num;
  let obj7;
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  const obj2 = ChannelListLayout;
  const sizeStyle = obj2.makeSizeStyle(layoutStyles.icon.wrapper.size);
  const obj3 = { rowActive: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, pressable: { flex: 1 }, textContainer: { flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: nativeDefault.space.PX_8 }, nameText: { flexShrink: 1, marginBottom: num }, avatar: obj7 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  ({ flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: nativeDefault.space.PX_8 });
  num = 0;
  const obj6 = PlatformUtils;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj7 = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, marginRight: layoutStyles.icon.margin.marginRight + 4 };
  const merged = Object.assign(sizeStyle);
  return obj3;
});
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendRow.tsx");

export default function ForYouSuggestedFriendRow(suggestedFriend) {
  let ActionStatusSubLabel;
  let intl2;
  let items4;
  let items6;
  let obj10;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let panelVariant;
  let renderChannelWrapper;
  let str4;
  let tmp22;
  suggestedFriend = suggestedFriend.suggestedFriend;
  ({ onAddSuggestion: importDefault, onAddSuggestionAnimationFinish: dependencyMap, panelVariant } = suggestedFriend);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let sharedValue;
  let stateFromStores;
  let tmp = suggestedFriend;
  let obj = suggestedFriend(11030);
  const messagesTabLayout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = closure_12(messagesTabLayout);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj2 = suggestedFriend(11030);
  const layoutStyles = obj2.getLayoutStyles(messagesTabLayout);
  const obj3 = suggestedFriend(5637);
  const fontScale = obj3.useFontScale();
  const items = [stateFromStores];
  const obj4 = suggestedFriend(563);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => stateFromStores.useReducedMotion);
  const items1 = [suggestedFriend, analyticsLocations];
  const obj5 = analyticsLocations;
  if (null != suggestedFriend.friendSuggestionName) {
    let friendSuggestionName;
    if (suggestedFriend.friendSuggestionName.length > 0) {
      friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    const tmpResult = tmp(18044);
    const suggestedContactNameForSuggestion = tmpResult.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    let str2 = "";
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      str2 = " \u00B7 " + suggestedContactNameForSuggestion;
    }
    if (null != suggestedFriend.mutualFriendsCount) {
      let formatToPlainStringResult;
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = tmp(1114).intl;
        const obj6 = { count: suggestedFriend.mutualFriendsCount };
        formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.z7y34b, obj6);
      }
      const tmpResult8 = tmp(5090);
      sharedValue = tmpResult8.useSharedValue(false);
      const items2 = [RelationshipStore];
      const tmpResult9 = tmp(563);
      stateFromStores = tmpResult9.useStateFromStores(items2, () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === metroImportAll.PENDING_OUTGOING);
      const items3 = [sharedValue, stateFromStores];
      const effect = obj5.useEffect(() => {
        const tmp = stateFromStores;
        if (!tmp) {
          const result = sharedValue.set(false);
        }
      }, items3);
      const obj7 = { accessibilityRole: "button", underlayColor: tmp4.rowActive.backgroundColor, onPress: tmp9, style: items4, children: renderChannelWrapper(closure_10(tmp22, obj17), obj18) };
      items4 = [tmp4.pressable, ];
      const obj8 = { borderRadius: layoutStyles.container.borderRadius };
      items4[1] = obj8;
      const renderChannelPressableWrapper = tmp(18456).renderChannelPressableWrapper;
      const PressableHighlight = tmp(6974).PressableHighlight;
      const obj9 = { style: tmp4.avatar, children: closure_9(tmp(1188).Avatar, obj10) };
      obj10 = { user: suggestedFriend.user, guildId: "r", size: layoutStyles.icon.avatarSize, animate: !stateFromStoresObject };
      renderChannelWrapper = tmp(18457).renderChannelWrapper;
      const items5 = [closure_9(sharedValue, obj9), , ];
      const obj11 = { style: tmp4.textContainer, children: items6 };
      const obj12 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-default", style: tmp4.nameText, children: friendSuggestionName };
      items6 = [closure_9(tmp(5619).Text, obj12), ];
      let num3 = 0;
      tmp22 = closure_11;
      const tmpResult12 = tmp(1376);
      if (tmpResult12.isAndroid()) {
        num3 = -2;
      }
      const obj13 = { style: obj14, children: closure_9(ActionStatusSubLabel, obj15) };
      obj14 = { marginTop: num3 };
      ActionStatusSubLabel = tmp(18458).ActionStatusSubLabel;
      const height = layoutStyles.messagePreview.height;
      let num4 = 0;
      const tmpResult13 = tmp(1376);
      if (tmpResult13.isAndroid()) {
        num4 = 2;
      }
      const _HermesInternal2 = HermesInternal;
      obj15 = { lineHeight: height + num4, textVariant: layoutStyles.messagePreview.text.variant, actioned: sharedValue, maxFontSizeMultiplier: 1.75, label: "" + formatToPlainStringResult + str2, actionStatus: intl2.string(tmp(1114).t.Kzyxm9), animate: !stateFromStoresObject };
      intl2 = tmp(1114).intl;
      items6[1] = closure_9(sharedValue, obj13);
      items5[1] = closure_10(sharedValue, obj11);
      const obj16 = {
        user: suggestedFriend.user,
        added: sharedValue,
        size: str4,
        onAddSuggestion(id) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: "Notifications Tab" };
              obj.track(metroImportDefault.FRIEND_SUGGESTION_ADDED, obj2);
              importDefault(suggestedFriend);
            },
        onFinishAnimation() {
              dependencyMap(suggestedFriend);
            },
        animate: !stateFromStoresObject
      };
      const ContactSuggestionActions = tmp(18459).ContactSuggestionActions;
      str4 = "sm";
      const tmpResult14 = tmp(11030);
      if (tmpResult14.isLayoutCozy(messagesTabLayout)) {
        str4 = "md";
      }
      obj17 = { children: items5 };
      items5[2] = closure_9(ContactSuggestionActions, obj16);
      obj18 = { layout: messagesTabLayout, fontScale, panelVariant };
      const obj19 = { layout: messagesTabLayout, panelVariant };
      return renderChannelPressableWrapper(closure_9(PressableHighlight, obj7), obj19);
    }
    const tmp5Result = UserUtilsDefault;
    formatToPlainStringResult = tmp5Result.getName(suggestedFriend.user);
  }
  const tmp5Result2 = UserUtilsDefault;
  friendSuggestionName = tmp5Result2.getName(suggestedFriend.user);
};
