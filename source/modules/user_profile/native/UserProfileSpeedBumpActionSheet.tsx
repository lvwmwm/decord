// Module ID: 8493
// Function ID: 67812
// Name: InformationTable
// Dependencies: [57, 31, 27, 1348, 1917, 1849, 8264, 653, 33, 4130, 689, 8494, 1212, 5503, 5165, 1273, 3976, 4066, 566, 7887, 5464, 5484, 8266, 8495, 675, 7889, 8492, 5187, 5189, 8496, 8497, 4126, 4319, 4543, 4660, 3803, 2]

// Module 8493 (InformationTable)
import _slicedToArray from "_slicedToArray";
import importAllResult from "Text";
import { View } from "Background";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { UserProfileAnalyticsTypes } from "USER_PROFILE_TOOLTIP_DELAY";
import ME from "ME";
import jsxProd from "Button";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function InformationTable(speedBumpType) {
  let obj = { icon: importDefault(8494) };
  const intl = items(1212).intl;
  obj.text = intl.string(items(1212).t.kcuWva);
  items = [obj, ];
  obj = { icon: importDefault(8494) };
  if ("block" === speedBumpType.speedBumpType) {
    const intl3 = items(1212).intl;
    let stringResult = intl3.string(items(1212).t.QxrDY1);
  } else {
    const intl2 = items(1212).intl;
    stringResult = intl2.string(items(1212).t.W6fjkS);
  }
  obj.text = stringResult;
  items[1] = obj;
  obj = {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: items.length === arg1 };
      obj = { size: items(outer1_2[15]).Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = outer1_12(items(outer1_2[15]).Icon, obj);
      obj.label = icon.text;
      return outer1_12(items(outer1_2[14]).TableRow, obj, arg1);
    })
  };
  return callback2(items(5503).TableRowGroup, obj);
}
({ AnalyticEvents: closure_10, EMPTY_STRING_SNOWFLAKE_ID: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: 56 };
obj.button = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.tableContainer = _createForOfIteratorHelperLoose;
obj.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.bodyText = { textAlign: "center" };
obj.headerText = { textAlign: "center" };
obj.avatar = { alignSelf: "center" };
let obj3 = { position: "relative", alignSelf: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.avatarContainer = obj3;
let obj4 = { position: "absolute", bottom: -8, right: -8, padding: require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.avatarIconContainer = obj4;
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.suppress = { alignSelf: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj5 = { alignSelf: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function UserProfileSpeedBumpActionSheet(userId) {
  let _slicedToArray;
  let messageId;
  let openedAt;
  let roleId;
  let sessionId;
  let sourceAnalyticsLocations;
  userId = userId.userId;
  const channelId = userId.channelId;
  const onClose = userId.onClose;
  ({ location: _slicedToArray, sourceAnalyticsLocations } = userId);
  ({ messageId, roleId, sessionId, openedAt } = userId);
  if (sourceAnalyticsLocations === undefined) {
    sourceAnalyticsLocations = [];
  }
  const speedBumpType = userId.speedBumpType;
  let stateFromStores;
  let guild_id;
  let stateFromStores2;
  let c7;
  let first;
  let UserProfileAnalyticsTypes;
  let analyticsLocations;
  let createUserProfileAnalyticsContext;
  let callback2;
  function handleShowProfileActionSheet() {
    const merged = Object.assign(createUserProfileAnalyticsContext);
    channelId(onClose[26])({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _slicedToArray });
  }
  let tmp = callback3();
  let obj = userId(onClose[16]);
  let obj1 = userId(onClose[18]);
  const items = [first];
  stateFromStores = obj1.useStateFromStores(items, () => first.getUser(userId));
  let obj2 = userId(onClose[18]);
  const items1 = [stateFromStores2];
  const items2 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores2.getChannel(channelId), items2);
  guild_id = undefined;
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  let obj3 = userId(onClose[18]);
  const items3 = [c7];
  stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = _undefined.getMember(guild_id, userId);
    }
    return member;
  });
  let id;
  const isThemeLightResult = obj.isThemeLight(channelId(onClose[17])());
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  if (null == id) {
    id = createUserProfileAnalyticsContext;
  }
  const tmp7Result = channelId(onClose[19])(id, guild_id);
  c7 = tmp7Result;
  const tmp10 = callback(stateFromStores.useState(false), 2);
  first = tmp10[0];
  UserProfileAnalyticsTypes = tmp10[1];
  const items4 = [];
  const tmp7 = channelId(onClose[19]);
  const tmp12 = channelId(onClose[20]);
  items4[HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0)] = channelId(onClose[21]).IGNORED_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp12(items4).analyticsLocations;
  let obj4 = userId(onClose[22]);
  createUserProfileAnalyticsContext = obj4.useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, channelId, messageId, roleId });
  obj = { userId, user: stateFromStores, channelId, guildId: guild_id, displayProfile: tmp7Result, guildMember: stateFromStores2, type: UserProfileAnalyticsTypes.IGNORED_USER_SHEET };
  const tmp15 = channelId(onClose[23])(obj);
  callback2 = tmp15;
  const items5 = [tmp15, tmp7Result, guild_id, first, stateFromStores2];
  const effect = stateFromStores.useEffect(() => {
    let tmp = first;
    if (!first) {
      tmp = null == c7;
    }
    if (!tmp) {
      let tmp6 = null == guild_id;
      if (!tmp6) {
        let prop;
        if (null != stateFromStores2) {
          prop = stateFromStores2.fullProfileLoadedTimestamp;
        }
        tmp6 = null != prop;
      }
      if (tmp6) {
        channelId(onClose[24]).track(analyticsLocations.OPEN_POPOUT, c12);
        callback(true);
        const obj = channelId(onClose[24]);
      }
    }
  }, items5);
  const items6 = [onClose];
  const effect1 = stateFromStores.useEffect(() => () => {
    if (null != outer1_2) {
      outer1_2();
    }
  }, items6);
  const items7 = [stateFromStores, userId];
  const effect2 = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(onClose[25]).getUser(userId);
      const obj = userId(onClose[25]);
    }
  }, items7);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { value: analyticsLocations };
    obj1 = { value: createUserProfileAnalyticsContext, openedAt };
    let fetchStartedAt;
    if (null != tmp7Result) {
      fetchStartedAt = tmp7Result.fetchStartedAt;
    }
    obj1.fetchStartedAt = fetchStartedAt;
    let fetchEndedAt;
    if (null != tmp7Result) {
      fetchEndedAt = tmp7Result.fetchEndedAt;
    }
    obj1.fetchEndedAt = fetchEndedAt;
    let isLoaded;
    if (null != tmp7Result) {
      isLoaded = tmp7Result.isLoaded;
    }
    obj1.isLoaded = isLoaded;
    obj2 = { startExpanded: true };
    obj3 = {};
    obj4 = { style: tmp.header };
    const obj5 = { style: tmp.avatarContainer };
    const obj6 = { user: stateFromStores, guildId: guild_id, animate: false, size: userId(onClose[15]).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [callback2(userId(onClose[15]).Avatar, obj6), ];
    const obj7 = { style: tmp.avatarIconContainer };
    const obj8 = { size: userId(onClose[15]).Icon.Sizes.MEDIUM };
    if ("block" === speedBumpType) {
      obj8.source = tmp32(tmp31[29]);
      let tmp33 = obj8;
    } else {
      obj8.source = tmp32(tmp31[30]);
      tmp33 = obj8;
    }
    obj7.children = callback2(userId(onClose[15]).Icon, tmp33);
    items8[1] = callback2(guild_id, obj7);
    obj5.children = items8;
    const items9 = [handleShowProfileActionSheet(guild_id, obj5), , ];
    const obj9 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
    const intl = userId(onClose[12]).intl;
    obj9.children = intl.string(userId(onClose[12]).t.b33pLD);
    items9[1] = callback2(userId(onClose[31]).Text, obj9);
    const obj10 = { style: tmp.bodyText, variant: "text-md/medium", color: "mobile-text-heading-primary" };
    const intl2 = userId(onClose[12]).intl;
    const t = userId(onClose[12]).t;
    const obj11 = {};
    let obj16 = channelId(onClose[32]);
    obj11.username = obj16.getName(guild_id, channelId, stateFromStores);
    obj10.children = intl2.format("block" === speedBumpType ? t["8F+WNz"] : t["/cZp5s"], obj11);
    items9[2] = callback2(userId(onClose[31]).Text, obj10);
    obj4.children = items9;
    const items10 = [handleShowProfileActionSheet(guild_id, obj4), , ];
    const obj12 = { style: tmp.tableContainer };
    const obj13 = { speedBumpType };
    obj12.children = callback2(InformationTable, obj13);
    items10[1] = callback2(guild_id, obj12);
    const obj14 = { style: tmp.button };
    const obj15 = {};
    let str = "secondary";
    if (isThemeLightResult) {
      str = "tertiary";
    }
    obj15.variant = str;
    obj15.size = "lg";
    const intl3 = userId(onClose[12]).intl;
    obj15.text = intl3.string(userId(onClose[12]).t["UJKH/l"]);
    obj15.onPress = handleShowProfileActionSheet;
    const items11 = [callback2(userId(onClose[33]).Button, obj15), ];
    let tmp52 = null;
    if ("ignore" === speedBumpType) {
      obj16 = {
        style: tmp.suppress,
        accessibilityRole: "button",
        onPress() {
              const IgnoreProfileSpeedbumpDisabled = userId(onClose[35]).IgnoreProfileSpeedbumpDisabled;
              IgnoreProfileSpeedbumpDisabled.updateSetting(true);
              handleShowProfileActionSheet();
            }
      };
      const obj17 = { variant: "text-sm/normal", color: "text-link" };
      const intl4 = userId(onClose[12]).intl;
      obj17.children = intl4.string(userId(onClose[12]).t.QbcRCJ);
      obj16.children = callback2(userId(onClose[31]).Text, obj17);
      tmp52 = callback2(userId(onClose[34]).PressableOpacity, obj16);
    }
    items11[1] = tmp52;
    obj14.children = items11;
    items10[2] = handleShowProfileActionSheet(guild_id, obj14);
    obj3.children = items10;
    obj2.children = handleShowProfileActionSheet(userId(onClose[28]).BottomSheetView, obj3);
    obj1.children = callback2(userId(onClose[27]).BottomSheet, obj2);
    obj.children = callback2(userId(onClose[22]).UserProfileAnalyticsProvider, obj1);
    return callback2(userId(onClose[20]).AnalyticsLocationProvider, obj);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileSpeedBumpActionSheet.tsx");

export default memoResult;
