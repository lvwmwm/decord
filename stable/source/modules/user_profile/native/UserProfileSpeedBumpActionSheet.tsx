// Module ID: 8753
// Function ID: 8754
// Name: UserProfileSpeedBumpActionSheet
// Dependencies: [32, 19, 17, 4863, 4926, 1383, 8754, 1072, 21, 5014, 575, 8756, 1113, 7060, 6975, 1187, 5021, 5253, 504, 8757, 7326, 7351, 8761, 8770, 1252, 8752, 8750, 5272, 5275, 8771, 7136, 5624, 6041, 5634, 6980, 4839, 2]

// Module 8753 (UserProfileSpeedBumpActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 4839 */;
import TableRow2 from "TableRow" /* 6975 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import UserActionCreators from "UserActionCreators" /* 8752 */;
import Constants2 from "Constants" /* 8754 */;
import AssetRegistryDefault from "AssetRegistry" /* 8756 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let unpackModuleId;
function InformationTable(speedBumpType) {
  let intl;
  let stringResult;
  let items;
  let obj = { icon: AssetRegistryDefault, text: intl.string(items(1113).t.kcuWva) };
  speedBumpType = speedBumpType.speedBumpType;
  intl = items(1113).intl;
  items = [obj, ];
  let obj2 = { icon: AssetRegistryDefault, text: stringResult };
  if ("block" === speedBumpType) {
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(tmp2(1113).t.QxrDY1);
  } else {
    const intl2 = tmp2(1113).intl;
    stringResult = intl2.string(tmp2(1113).t.W6fjkS);
  }
  items[1] = obj2;
  const obj3 = {
    hasIcons: true,
    children: items.map((icon, index) => {
      let Icon;
      let obj2;
      const obj = { start: 0 === index, end: items.length === index, icon: authStore2(Icon, obj2), label: icon.text };
      const TableRow = TableRow2.TableRow;
      obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
      Icon = native.Icon;
      return authStore2(TableRow, obj, index);
    })
  };
  const TableRowGroup = tmp2(7060).TableRowGroup;
  return closure_12(TableRowGroup, obj3);
}
const View = react_native.View;
let UserProfileAnalyticsTypes = Constants2.UserProfileAnalyticsTypes;
({ AnalyticEvents: c10, EMPTY_STRING_SNOWFLAKE_ID: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: obj2, tableContainer: obj3, header: obj4, bodyText: { textAlign: "center" }, headerText: { textAlign: "center" }, avatar: { alignSelf: "center" }, avatarContainer: obj5, avatarIconContainer: rect, suppress: obj6 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: 56 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj5 = { position: "relative", alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj6 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
const memoResult = react.memo(function UserProfileSpeedBumpActionSheet(userId) {
  let Icon;
  let Text3;
  let UserProfileAnalyticsProvider;
  let _location;
  let closure_11;
  let closure_9;
  let fetchEndedAt;
  let fetchStartedAt;
  let first;
  let format;
  let handleShowProfileActionSheet;
  let intl;
  let intl3;
  let intl4;
  let isLoaded;
  let items11;
  let items8;
  let items9;
  let localUser;
  let messageId;
  let navigationReplace;
  let obj12;
  let obj14;
  let obj18;
  let obj19;
  let obj20;
  let obj4;
  let onClose;
  let openedAt;
  let roleId;
  let sessionId;
  let sourceAnalyticsLocations;
  let tmp32;
  let tmp33;
  let tmp5Result4;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ localUser, onClose } = userId);
  ({ location: _slicedToArray, navigationReplace: react, sourceAnalyticsLocations } = userId);
  ({ messageId, roleId, sessionId, openedAt } = userId);
  if (sourceAnalyticsLocations === undefined) {
    sourceAnalyticsLocations = [];
  }
  const speedBumpType = userId.speedBumpType;
  localUser = undefined;
  let guild_id;
  let stateFromStores2;
  UserProfileAnalyticsTypes = undefined;
  first = undefined;
  closure_11 = undefined;
  let analyticsLocations;
  let createUserProfileAnalyticsContext;
  closure_14 = undefined;
  let tmp2 = closure_14();
  let obj = userId(onClose[16]);
  const items = [stateFromStores2];
  const isThemeLightResult = obj.isThemeLight(channelId(onClose[17])());
  const obj2 = userId(onClose[18]);
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp8 = stateFromStores;
  if (stateFromStores == null) {
    let id;
    if (localUser != null) {
      id = localUser.id;
    }
    let tmp10;
    if (id === userId) {
      tmp10 = localUser;
    }
    tmp8 = tmp10;
  }
  localUser = tmp8;
  const items1 = [localUser];
  const items2 = [channelId];
  const tmp3Result = userId(onClose[18]);
  const stateFromStores1 = tmp3Result.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const items3 = [guild_id];
  const tmp3Result3 = userId(onClose[18]);
  stateFromStores2 = tmp3Result3.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let id1;
  const tmp5Result = channelId(onClose[19]);
  if (tmp8 != null) {
    id1 = tmp8.id;
  }
  if (id1 == null) {
    id1 = closure_11;
  }
  const tmp5ResultResult = tmp5Result(id1, guild_id);
  UserProfileAnalyticsTypes = tmp5ResultResult;
  const IGNORED_USER_SHEET = UserProfileAnalyticsTypes.IGNORED_USER_SHEET;
  [first, closure_11] = react.useState(false);
  const items4 = [];
  const tmp5Result3 = channelId(onClose[20]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items4, sourceAnalyticsLocations, 0);
  items4[arraySpreadResult] = channelId(onClose[21]).IGNORED_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp5Result3(items4).analyticsLocations;
  const tmp3Result4 = userId(onClose[22]);
  createUserProfileAnalyticsContext = tmp3Result4.useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, channelId, messageId, roleId });
  const tmp22 = channelId(onClose[23])({ userId, user: tmp8, channelId, guildId: guild_id, displayProfile: tmp5ResultResult, guildMember: stateFromStores2, type: IGNORED_USER_SHEET });
  closure_14 = tmp22;
  const items5 = [tmp22, tmp5ResultResult, guild_id, first, stateFromStores2];
  const effect = react.useEffect(() => {
    const tmp = first || null == closure_9;
    if (!tmp) {
      let tmp6 = null == guild_id;
      if (!tmp6) {
        let prop;
        if (stateFromStores2 != null) {
          prop = stateFromStores2.fullProfileLoadedTimestamp;
        }
        tmp6 = null != prop;
      }
      if (tmp6) {
        const obj = AnalyticsUtilsDefault;
        obj.track(first.OPEN_POPOUT, closure_14);
        closure_11(true);
      }
    }
  }, items5);
  const items6 = [onClose];
  const effect1 = react.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items6);
  const items7 = [stateFromStores, userId];
  const effect2 = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = UserActionCreators;
      const user = obj.getUser(userId);
    }
  }, items7);
  if (null == tmp8) {
    return null;
  } else {
    const obj3 = { value: analyticsLocations, children: analyticsLocations(UserProfileAnalyticsProvider, obj4) };
    const AnalyticsLocationProvider = tmp3(tmp4[20]).AnalyticsLocationProvider;
    obj4 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt, fetchEndedAt, isLoaded, children: analyticsLocations(BottomSheet, obj19) };
    fetchStartedAt = undefined;
    UserProfileAnalyticsProvider = tmp3(tmp4[22]).UserProfileAnalyticsProvider;
    if (tmp5ResultResult != null) {
      fetchStartedAt = tmp5ResultResult.fetchStartedAt;
    }
    fetchEndedAt = undefined;
    if (tmp5ResultResult != null) {
      fetchEndedAt = tmp5ResultResult.fetchEndedAt;
    }
    isLoaded = undefined;
    if (tmp5ResultResult != null) {
      isLoaded = tmp5ResultResult.isLoaded;
    }
    BottomSheet = tmp3(tmp4[27]).BottomSheet;
    const obj5 = { style: tmp2.header, children: items9 };
    const obj6 = { style: tmp2.avatarContainer, children: items8 };
    const BottomSheetView = tmp3(tmp4[28]).BottomSheetView;
    const obj7 = { user: tmp8, guildId: guild_id, animate: false, size: userId(onClose[15]).AvatarSizes.XLARGE, style: tmp2.avatar };
    const Avatar = tmp3(tmp4[15]).Avatar;
    items8 = [analyticsLocations(Avatar, obj7), ];
    const obj8 = { style: tmp2.avatarIconContainer, children: analyticsLocations(Icon, tmp32) };
    const obj9 = { size: userId(onClose[15]).Icon.Sizes.MEDIUM, source: null };
    Icon = tmp3(tmp4[15]).Icon;
    if ("block" === speedBumpType) {
      obj9.source = channelId(onClose[29]);
      tmp32 = obj9;
    } else {
      obj9.source = channelId(onClose[30]);
      tmp32 = obj9;
    }
    items8[1] = analyticsLocations(stateFromStores, obj8);
    items9 = [createUserProfileAnalyticsContext(stateFromStores, obj6), , ];
    const obj10 = { style: tmp2.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(userId(onClose[12]).t.b33pLD) };
    const Text = tmp3(tmp4[31]).Text;
    intl = tmp3(tmp4[12]).intl;
    items9[1] = analyticsLocations(Text, obj10);
    const obj11 = { style: tmp2.bodyText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: format(tmp33, obj12) };
    const Text2 = tmp3(tmp4[31]).Text;
    const intl2 = tmp3(tmp4[12]).intl;
    format = intl2.format;
    const t = tmp3(tmp4[12]).t;
    obj12 = { username: tmp5Result4.getName(guild_id, channelId, tmp8) };
    tmp33 = "block" === speedBumpType ? t["8F+WNz"] : t["/cZp5s"];
    tmp5Result4 = channelId(onClose[32]);
    items9[2] = analyticsLocations(Text2, obj11);
    const items10 = [createUserProfileAnalyticsContext(stateFromStores, obj5), , ];
    const obj13 = { style: tmp2.tableContainer, children: analyticsLocations(InformationTable, obj14) };
    obj14 = { speedBumpType };
    items10[1] = analyticsLocations(stateFromStores, obj13);
    let str2 = "secondary";
    const obj15 = { style: tmp2.button, children: items11 };
    const Button = tmp3(tmp4[33]).Button;
    if (isThemeLightResult) {
      str2 = "tertiary";
    }
    const obj16 = { variant: str2, size: "lg", text: intl3.string(userId(onClose[12]).t["UJKH/l"]), onPress: handleShowProfileActionSheet };
    handleShowProfileActionSheet = function handleShowProfileActionSheet() {
      const obj = { sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _slicedToArray, navigationReplace: react, localUser };
      const tmp = showUserProfileActionSheetDefault;
      const merged = Object.assign(createUserProfileAnalyticsContext);
      tmp(obj);
    };
    intl3 = tmp3(tmp4[12]).intl;
    items11 = [analyticsLocations(Button, obj16), ];
    let tmp36Result = null;
    if ("ignore" === speedBumpType) {
      const obj17 = {
        style: tmp2.suppress,
        accessibilityRole: "button",
        onPress() {
              const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
              IgnoreProfileSpeedbumpDisabled.updateSetting(true);
              const obj = { sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _slicedToArray, navigationReplace: react, localUser };
              const tmp2 = showUserProfileActionSheetDefault;
              const merged = Object.assign(createUserProfileAnalyticsContext);
              tmp2(obj);
            },
        children: analyticsLocations(Text3, obj18)
      };
      const PressableOpacity = tmp3(tmp4[34]).PressableOpacity;
      obj18 = { variant: "text-sm/normal", color: "text-link", children: intl4.string(userId(onClose[12]).t.QbcRCJ) };
      Text3 = tmp3(tmp4[31]).Text;
      intl4 = tmp3(tmp4[12]).intl;
      tmp36Result = tmp36(PressableOpacity, obj17);
    }
    obj19 = { startExpanded: true, children: createUserProfileAnalyticsContext(BottomSheetView, obj20) };
    obj20 = { children: items10 };
    items11[1] = tmp36Result;
    items10[2] = createUserProfileAnalyticsContext(stateFromStores, obj15);
    return analyticsLocations(AnalyticsLocationProvider, obj3);
  }
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSpeedBumpActionSheet.tsx");

export default memoResult;
