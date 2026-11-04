// Module ID: 11288
// Function ID: 11289
// Name: BlockConfirmationActionSheet
// Dependencies: [5, 32, 19, 17, 4863, 4956, 1383, 7489, 11287, 1072, 7490, 21, 5014, 575, 8756, 1113, 5737, 7060, 6975, 1187, 1625, 7326, 7351, 10146, 504, 8752, 5272, 1252, 5275, 8771, 5624, 6041, 7136, 5258, 11289, 1994, 1260, 5634, 7488, 5274, 7495, 7496, 2061, 5709, 2]

// Module 11288 (BlockConfirmationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import AssetRegistryDefault from "AssetRegistry" /* 5737 */;
import TableRow2 from "TableRow" /* 6975 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7488 */;
import RelationshipConstants from "RelationshipConstants" /* 7489 */;
import Constants2 from "Constants" /* 7490 */;
import UserActionCreators from "UserActionCreators" /* 8752 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8756 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 11287 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet, c1, c2;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let unpackModuleId;
function BlockedInformationTable() {
  let length;
  let obj = {
    hasIcons: true,
    children: items.map((icon, index) => {
      let Icon;
      let obj2;
      const obj = { start: 0 === index, end: length.length - 1 === index, icon: closure_1_18(Icon, obj2), label: icon.text(), subLabel: icon.subtext(), accessible: true, accessibilityLabel: icon.a11yLabel() };
      const TableRow = TableRow2.TableRow;
      obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon.icon };
      Icon = native.Icon;
      return closure_1_18(TableRow, obj, index);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return authStore5(TableRowGroup, obj);
}
let react = react_mod;
const View = react_native.View;
const UserRemediationAction = RelationshipConstants.UserRemediationAction;
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: unpackModuleId, IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_12, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: map1 } = RestrictionConfirmationConstants);
({ HelpdeskArticles: closure_14, AnalyticEvents: closure_15, RelationshipTypes: closure_16 } = Constants);
const SafetyToastType = Constants2.SafetyToastType;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: obj2, otherOptions: obj3, headerText: { textAlign: "center" }, container: obj4, header: obj5, avatarContainer: obj6, avatarIconContainer: rect, avatar: { alignSelf: "center" }, footerText: obj7 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_24 };
obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj6 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj7 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_4 };
let closure_20 = createStyles(obj);
let obj8 = {
  icon: AssetRegistryDefault2,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t.fjFJFV);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t["8SIMPz"]);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.qHsrGS);
  }
};
let items = [obj8, , ];
let obj9 = {
  icon: AssetRegistryDefault2,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t.QCrmqS);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t.TKDMoN);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.WR1Mbe);
  }
};
items[1] = obj9;
let obj10 = {
  icon: AssetRegistryDefault,
  text() {
    const intl = intl9.intl;
    return intl.string(intl9.t["lkm/a8"]);
  },
  subtext() {
    const intl = intl9.intl;
    return intl.string(intl9.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = intl9.intl;
    return intl.string(intl9.t.lfrNw0);
  }
};
items[2] = obj10;
const memoResult = react.memo(function BlockConfirmationActionSheet(userId) {
  let BottomSheetScrollView;
  let CIbzHR;
  let Icon;
  let Icon2;
  let TableRow;
  let TableRowGroup;
  let _undefined;
  let c5;
  let constants3;
  let format;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items11;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj17;
  let obj18;
  let obj19;
  let obj20;
  let obj24;
  let obj5;
  let obj6;
  let onBlock;
  let onIgnore;
  let onSuccess;
  let sum1;
  let tmp2Result;
  let tmp6;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onBlock: dependencyMap, onIgnore: _asyncToGenerator, onSuccess: _slicedToArray } = userId);
  react = undefined;
  const tmp = closure_20();
  let tmp2 = channelId;
  let tmp3 = dependencyMap;
  const bottom = channelId(1625)().bottom;
  const tmp4 = channelId(7326);
  items = [channelId(7351).IGNORE_CONFIRMATION_ACTION_SHEET];
  const analyticsLocations = tmp4(items).analyticsLocations;
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, c5] = tmp5;
  let closure_6 = channelId(10146)();
  let obj = userId(504);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId), items2);
  let obj2 = userId(504);
  const items3 = [RelationshipStore];
  const items4 = [userId];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => RelationshipStore.isIgnored(userId), items4);
  let obj3 = userId(504);
  const items5 = [stateFromStores];
  const items6 = [channelId];
  const items7 = [stateFromStores, userId];
  const stateFromStores2 = obj3.useStateFromStores(items5, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items6);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = UserActionCreators;
      const user = obj.getUser(userId);
    }
  }, items7);
  let tmp13Result2 = null;
  if (null != stateFromStores) {
    let obj4 = { value: analyticsLocations, children: tmp13(BottomSheet, obj5) };
    const AnalyticsLocationProvider = tmp7(7326).AnalyticsLocationProvider;
    obj5 = {
      onDismiss: function handleClose() {
          const obj = channelId(dependencyMap[27]);
          const obj2 = { action: constants.DISMISS_BLOCK, location: "user-profile-context-menu" };
          obj.track(constants3.USER_REMEDIATION_ACTION, obj2);
        },
      scrollable: true,
      startHeight: sum1 + tmp2(575).space.PX_24,
      bodyStyles: obj6,
      children: tmp18(BottomSheetScrollView, obj20)
    };
    let num = 485;
    BottomSheet = tmp7(5272).BottomSheet;
    if (!stateFromStores1) {
      num = closure_13;
    }
    const sum = num + bottom;
    sum1 = sum + tmp2(575).space.PX_24;
    obj6 = { paddingBottom: tmp2(575).space.PX_24 + bottom };
    const merged = Object.assign(tmp.container);
    let obj8 = { style: tmp.avatarContainer, children: items8 };
    const obj7 = { style: tmp.header, children: items9 };
    BottomSheetScrollView = tmp7(5275).BottomSheetScrollView;
    const obj9 = { guildId: "Array", user: stateFromStores, animate: null, size: userId(1187).AvatarSizes.XLARGE, style: tmp.avatar };
    const Avatar = tmp7(1187).Avatar;
    items8 = [tmp13(Avatar, obj9), ];
    const obj10 = { style: tmp.avatarIconContainer, children: closure_18(Icon, obj11) };
    obj11 = { size: userId(1187).Icon.Sizes.MEDIUM, source: tmp2(8771) };
    Icon = tmp7(1187).Icon;
    items8[1] = closure_18(closure_6, obj10);
    items9 = [closure_19(closure_6, obj8), , ];
    const obj12 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: format(CIbzHR, obj13) };
    const Text = tmp7(5624).Text;
    const intl = tmp7(1113).intl;
    format = intl.format;
    obj13 = { username: tmp2Result.getName(stateFromStores2, channelId, stateFromStores) };
    CIbzHR = tmp7(1113).t.CIbzHR;
    tmp2Result = tmp2(6041);
    items9[1] = closure_18(Text, obj12);
    const obj14 = { style: tmp.headerText, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: intl2.string(userId(1113).t.S70jou) };
    const Text2 = tmp7(5624).Text;
    intl2 = tmp7(1113).intl;
    items9[2] = closure_18(Text2, obj14);
    const items10 = [closure_19(closure_6, obj7), , , ];
    const obj15 = { style: tmp.tableContainer, children: closure_18(BlockedInformationTable, {}) };
    items10[1] = closure_18(closure_6, obj15);
    let tmp13Result = !stateFromStores1;
    if (tmp13Result) {
      const obj16 = { style: tmp.otherOptions, children: closure_18(TableRowGroup, obj17) };
      obj17 = { title: intl3.string(userId(1113).t["+BJTcB"]), hasIcons: true, children: closure_18(TableRow, obj18) };
      TableRowGroup = tmp7(7060).TableRowGroup;
      intl3 = tmp7(1113).intl;
      obj18 = {
        icon: closure_18(Icon2, obj19),
        label: intl4.string(userId(1113).t.hC8tcc),
        subLabel: intl5.string(userId(1113).t.If89rE),
        accessibilityLabel: intl6.string(userId(1113).t["8qGQsM"]),
        onPress() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { action: UserRemediationAction.GOTO_IGNORE, location: "user-profile-context-menu" };
              obj.track(constants3.USER_REMEDIATION_ACTION, obj2);
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              const tmp3 = asyncRequire(11289, dependencyMap.paths);
              const obj3 = { userId, channelId, onBlock: dependencyMap, onSuccess: _slicedToArray, onIgnore: _asyncToGenerator, impressionName: discord_common_AnalyticsUtils.ImpressionNames.IGNORE_USER_CONFIRMATION };
              openLazy(tmp3, authStore2, obj3, "replaceTopSheet");
            },
        arrow: true
      };
      TableRow = tmp7(6975).TableRow;
      obj19 = { size: userId(1187).Icon.Sizes.MEDIUM, source: tmp2(7136) };
      Icon2 = tmp7(1187).Icon;
      intl4 = tmp7(1113).intl;
      intl5 = tmp7(1113).intl;
      intl6 = tmp7(1113).intl;
      tmp13Result = tmp13(tmp19, obj16);
    }
    obj20 = { children: items10 };
    items10[2] = tmp13Result;
    const obj21 = { style: tmp.button, children: items11 };
    const obj22 = {
      size: "lg",
      variant: "destructive",
      text: intl7.string(userId(1113).t.l4Emac),
      onPress() {
          let obj3;
          _undefined(true);
          const tmp2 = importDefault;
          const tmp3 = dependencyMap;
          let obj = RelationshipActionCreatorsDefault;
          let obj2 = { userId, context: obj3, type: constants.BLOCKED };
          obj3 = { location: AnalyticsLocationDefault.BLOCK_CONFIRMATION_ACTION_SHEET };
          const addRelationshipResult = obj.addRelationship(obj2);
          addRelationshipResult.then(_asyncToGenerator(async (arg0, value) => {
            let closure_0;
            let v1;
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    const obj8 = tmp3(c2[39]);
                    const tmp27 = tmp3;
                    if (obj8.getIsScreenReaderEnabled()) {
                      c1 = 1;
                      const tmp27Result = tmp27(c2[40]);
                      c2 = 1;
                      const obj6 = { value: closure_2_6(tmp27Result.getSafetyToastTypeContent(constants.BLOCK_SUCCESS, userId, channelId)), done: false };
                      return obj6;
                    } else {
                      const obj2 = c1(c2[41]);
                      const result = obj2.showBlockSuccessToast(userId, channelId);
                    }
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                if (closure_128_4 != null) {
                  tmp10();
                }
                const obj3 = c1(c2[33]);
                obj3.hideActionSheet(closure_1_11);
                c2 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } catch (tmp23) {
                c2 = 3;
                throw tmp23;
              }
            }
          }));
          if (dependencyMap != null) {
            dependencyMap();
          }
          const tmp2Result = AnalyticsUtilsDefault;
          tmp2Result.track(constants3.BLOCK_USER_CONFIRMED);
        },
      disabled: tmp6,
      loading: tmp6
    };
    const Button = tmp7(5634).Button;
    intl7 = tmp7(1113).intl;
    items11 = [tmp13(Button, obj22), ];
    const obj23 = { style: tmp.footerText, variant: "text-sm/normal", color: "text-default", children: intl8.format(userId(1113).t.CpTgBn, obj24) };
    const Text3 = tmp7(5624).Text;
    intl8 = tmp7(1113).intl;
    obj24 = {
      articleLink: function handleHelpCenter() {
          const obj = channelId(dependencyMap[33]);
          obj.hideActionSheet();
          const obj2 = channelId(dependencyMap[42]);
          const articleURL = obj2.getArticleURL(constants2.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj3 = channelId(dependencyMap[43]);
          obj3.openURL(articleURL);
        }
    };
    items11[1] = closure_18(Text3, obj23);
    items10[3] = closure_19(closure_6, obj21);
    tmp13Result2 = tmp13(AnalyticsLocationProvider, obj4);
  }
  return tmp13Result2;
});
let result = size.fileFinishedImporting("modules/relationships/native/BlockConfirmationActionSheet.tsx");

export default memoResult;
