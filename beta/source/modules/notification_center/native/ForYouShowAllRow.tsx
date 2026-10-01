// Module ID: 16082
// Function ID: 16083
// Name: ForYouShowAllRow
// Dependencies: [19, 17, 1074, 12196, 21, 4836, 9580, 576, 1364, 1485, 1241, 1177, 5288, 16077, 5435, 16078, 13996, 4832, 1115, 6563, 2]
// Exports: ForYouSuggestedFriendShowAllRow

// Module 16082 (ForYouShowAllRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useFontScale from "useFontScale" /* 5288 */;
import Pressables from "Pressables" /* 5435 */;
import AssetRegistryDefault from "AssetRegistry" /* 6563 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import FriendsScreenConstants from "FriendsScreenConstants" /* 12196 */;
import AvatarDuoPile2 from "AvatarDuoPile" /* 13996 */;
import ChannelPressableWrapper from "ChannelPressableWrapper" /* 16077 */;
import ChannelWrapper from "ChannelWrapper" /* 16078 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let c9;
let metroImportAll;
let metroImportDefault;
function ForYouShowAllRow(panelVariant) {
  let AvatarDuoPile;
  let Text;
  let children;
  let count;
  let intl;
  let items;
  let items1;
  let obj10;
  let obj7;
  let obj8;
  let onPress;
  let renderChannelWrapper;
  panelVariant = panelVariant.panelVariant;
  ({ children, count, onPress } = panelVariant);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const obj = ChannelListLayout;
  const layout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = closure_10(layout);
  const obj2 = ChannelListLayout;
  const layoutStyles = obj2.getLayoutStyles(layout);
  const obj3 = useFontScale;
  const fontScale = obj3.useFontScale();
  const obj4 = { accessibilityRole: "button", underlayColor: tmp4.rowActive.backgroundColor, onPress, style: items, children: renderChannelWrapper(React4(metroImportAll, obj7), { layout, fontScale, panelVariant }) };
  items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  const renderChannelPressableWrapper = ChannelPressableWrapper.renderChannelPressableWrapper;
  const PressableHighlight = Pressables.PressableHighlight;
  const obj5 = { style: tmp4.avatar, children: metroImportDefault(AvatarDuoPile, obj8) };
  renderChannelWrapper = ChannelWrapper.renderChannelWrapper;
  AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
  const obj6 = ChannelListLayout;
  const isLayoutCompactResult = obj6.isLayoutCompact(layout);
  const AvatarSizes = native.AvatarSizes;
  obj7 = { children: items1 };
  obj8 = { size: isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL, "aria-label": "", children };
  items1 = [metroImportDefault(View, obj5), , ];
  const obj9 = { style: tmp4.textContainer, children: metroImportDefault(Text, obj10) };
  obj10 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-brand", style: tmp4.nameText, children: intl.format(intl2.t.NrzztX, { count }) };
  Text = tmp(4832).Text;
  intl = tmp(1115).intl;
  items1[1] = metroImportDefault(View, obj9);
  const obj11 = { style: tmp4.icon, color: tmp4.iconColor.color, source: AssetRegistryDefault, size: native.IconSizes.CUSTOM };
  const Icon = tmp(1177).Icon;
  items1[2] = metroImportDefault(Icon, obj11);
  return renderChannelPressableWrapper(metroImportDefault(PressableHighlight, obj4), { layout, panelVariant });
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const Sections = FriendsScreenConstants.Sections;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((layout) => {
  let num;
  let obj7;
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  const obj2 = ChannelListLayout;
  const sizeStyle = obj2.makeSizeStyle(layoutStyles.icon.wrapper.size);
  const obj3 = { rowActive: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, pressable: { flex: 1 }, textContainer: { flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: nativeDefault.space.PX_8 }, nameText: { flexShrink: 1, marginBottom: num }, avatar: obj7, icon: size, iconColor: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  ({ flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: nativeDefault.space.PX_8 });
  num = 0;
  const obj6 = PlatformUtils;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj7 = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, marginRight: layoutStyles.icon.margin.marginRight + 4 };
  const merged = Object.assign(sizeStyle);
  size = { width: 8, height: 32, paddingRight: tmp4(576).space.PX_24 };
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  return obj3;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

export const ForYouSuggestedFriendShowAllRow = function ForYouSuggestedFriendShowAllRow(suggestedFriends) {
  suggestedFriends = suggestedFriends.suggestedFriends;
  let flag = suggestedFriends.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let messagesTabLayout;
  let obj = suggestedFriends(messagesTabLayout[9]);
  navigation = obj.useNavigation();
  let obj2 = suggestedFriends(messagesTabLayout[6]);
  messagesTabLayout = obj2.useMessagesTabLayout(flag);
  const items = [navigation, suggestedFriends];
  const items1 = [messagesTabLayout, suggestedFriends];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { section_id: Sections.FRIEND_SUGGESTIONS, truncated_count: 2, expanded_count: suggestedFriends.length, location: "NotificationsTab" };
    obj.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, obj2);
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  const obj3 = {
    children: react.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((user) => {
        let AvatarSizes;
        let isLayoutCompactResult;
        const obj = { user: user.user, guildId: "Array", size: isLayoutCompactResult ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL };
        const Avatar = suggestedFriends(messagesTabLayout[11]).Avatar;
        const obj2 = suggestedFriends(messagesTabLayout[6]);
        isLayoutCompactResult = obj2.isLayoutCompact(closure_1_2);
        AvatarSizes = suggestedFriends(messagesTabLayout[11]).AvatarSizes;
        return closure_2_7(Avatar, obj, user.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag
  };
  return closure_7(ForYouShowAllRow, obj3);
};
