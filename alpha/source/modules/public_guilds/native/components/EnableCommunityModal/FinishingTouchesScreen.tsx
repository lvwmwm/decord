// Module ID: 19786
// Function ID: 19787
// Name: FinishingTouchesScreen
// Dependencies: [32, 19, 17, 9056, 4915, 8495, 1072, 21, 5591, 575, 504, 4946, 9055, 1084, 19728, 19775, 19774, 19772, 1114, 5619, 5712, 6022, 7054, 19784, 7363, 2062, 2]
// Exports: default

// Module 19786 (FinishingTouchesScreen)
import react_native from "react-native" /* 17 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8495 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let everyoneRole, set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
const View = react_native.View;
({ MODERATOR_PERMISSIONS: c9, MODERATOR_PERMISSIONS_FLAG: c10 } = PublicGuildsConstants);
({ GuildFeatures: unpackModuleId, HelpdeskArticles: closure_12, UserNotificationSettings: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default function FinishingTouchesScreen() {
  let TableSwitchRow;
  let TableSwitchRow2;
  let TableSwitchRow3;
  let defaultMessageNotifications;
  let first1;
  let format;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj13;
  let obj16;
  let obj17;
  let obj19;
  let obj21;
  let prop2;
  let prop3;
  let props;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp4Result5;
  let tmp4Result6;
  const f118560 = (item) => {
    const obj = PermissionUtilsAll;
    return obj.canEveryone(item, guild);
  };
  let obj = react;
  const ref = react.useRef(null);
  let obj2 = guild(5591);
  const tmp4 = defaultMessageNotifications;
  const token = obj2.useToken(defaultMessageNotifications(575).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guild(504);
  let items = [GuildSettingsStore];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  const useState = react.useState;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(useState(prop), 1)[0];
  const ONLY_MENTIONS = constants2.ONLY_MENTIONS;
  [first1, tmp11] = obj.useState(false);
  [tmp13, tmp14] = _slicedToArray(obj.useState(!closure_9.some(f118560)), 2);
  const tmp12 = _slicedToArray(obj.useState(!closure_9.some(f118560)), 2);
  const first2 = _slicedToArray(obj.useState(tmp13), 1)[0];
  let prop1;
  const tmp8 = constants2;
  const useCallback = obj.useCallback;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, defaultMessageNotifications];
  const callback = useCallback((arg0) => {
    let tmp = arg0;
    if (tmp) {
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== map1.ONLY_MENTIONS) {
        const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
        const obj3 = GuildSettingsActionCreatorsDefault;
        obj3.updateGuild(obj2);
      }
    }
    if (!tmp) {
      tmp = null == defaultMessageNotifications;
    }
    if (!tmp) {
      const obj4 = { defaultMessageNotifications };
      const obj = GuildSettingsActionCreatorsDefault;
      obj.updateGuild(obj4);
    }
  }, items1);
  const callback1 = obj.useCallback(function(features) {
    everyoneRole = undefined;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const obj3 = BigFlagUtilsAll;
      const removeResult = obj3.remove(everyoneRole.permissions, closure_1_10);
      const obj2 = { permissions: removeResult };
      const merged = Object.assign(everyoneRole);
      const obj4 = { features: set, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
      ({ rulesChannelId: obj6.rulesChannelId, safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId: obj6.publicUpdatesChannelId, defaultMessageNotifications: obj6.defaultMessageNotifications } = features);
      const obj5 = first(dependencyMap[12]);
      obj5.saveGuild(features.id, obj4);
      const tmp10 = dependencyMap;
      if (removeResult !== everyoneRole.permissions) {
        const items = [obj2];
        const obj = guild(tmp10[14]);
        obj.saveRoleSettings(features.id, items);
      }
    }
  }, []);
  const tmp20 = tmp4(19775)();
  const tmp2Result = guild(19774);
  const enableCommunitySharedStyles = tmp2Result.useEnableCommunitySharedStyles();
  let obj4 = { headerRef: ref, currentStep: tmp2(19772).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1, buttonText: intl.string(tmp2(1114).t.XGl4ba), children: items3 };
  const EnableCommunityModalScreen = tmp2(19772).EnableCommunityModalScreen;
  intl = tmp2(1114).intl;
  let obj5 = { style: enableCommunitySharedStyles.content, children: items2 };
  const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl2.formatToPlainString(tmp2(1114).t.tInpJj, { number: 3, total: 3 }) };
  const Text = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  items2 = [closure_14(Text, obj6), , , ];
  const obj7 = { resizeMode: "contain", source: tmp20.finishingTouches };
  items2[1] = closure_14(tmp4(5712), obj7);
  const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl3.string(guild(1114).t["Pj/s/a"]) };
  const Heading = tmp2(5619).Heading;
  intl3 = tmp2(1114).intl;
  items2[2] = closure_14(Heading, obj8);
  const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl4.string(guild(1114).t["IL7/no"]) };
  const Text2 = tmp2(5619).Text;
  intl4 = tmp2(1114).intl;
  items2[3] = closure_14(Text2, obj9);
  items3 = [closure_15(View, obj5), , ];
  const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: items5 };
  const Stack = tmp2(6022).Stack;
  const TableRowGroup = tmp2(7054).TableRowGroup;
  const obj11 = { formSwitchDisabled: defaultMessageNotifications === ONLY_MENTIONS, children: closure_14(TableSwitchRow, obj12) };
  obj12 = { label: intl5.format(guild(1114).t.K8Eg4P, obj13), value: prop2 === tmp8.ONLY_MENTIONS, disabled: defaultMessageNotifications === ONLY_MENTIONS, onValueChange: callback };
  const tmp4Result = tmp4(19784);
  TableSwitchRow = tmp2(7363).TableSwitchRow;
  intl5 = tmp2(1114).intl;
  prop2 = undefined;
  obj13 = {
    infoHook() {
      return null;
    }
  };
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj14 = { hasIcons: false, children: items4 };
  items4 = [closure_14(tmp4Result, obj11), ];
  const obj15 = { formSwitchDisabled: first2, children: closure_14(TableSwitchRow2, obj16) };
  obj16 = { label: intl6.format(guild(1114).t.v8qCoG, obj17), value: tmp13, disabled: first2, onValueChange: tmp14 };
  const tmp4Result4 = tmp4(19784);
  TableSwitchRow2 = tmp2(7363).TableSwitchRow;
  intl6 = tmp2(1114).intl;
  obj17 = {
    infoHook() {
      return null;
    }
  };
  items4[1] = closure_14(tmp4Result4, obj15);
  items5 = [closure_15(TableRowGroup, obj14), ];
  const obj18 = { title: intl7.string(guild(1114).t["k+b2Cf"]), hasIcons: false, children: closure_14(TableSwitchRow3, obj19) };
  const TableRowGroup2 = tmp2(7054).TableRowGroup;
  intl7 = tmp2(1114).intl;
  obj19 = { label: intl8.string(guild(1114).t["9AG3wI"]), value: first1, onValueChange: tmp11 };
  TableSwitchRow3 = tmp2(7363).TableSwitchRow;
  intl8 = tmp2(1114).intl;
  items5[1] = closure_14(TableRowGroup2, obj18);
  items3[1] = closure_15(Stack, obj10);
  const obj20 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle", children: format(prop3, obj21) };
  const Text3 = tmp2(5619).Text;
  const intl9 = tmp2(1114).intl;
  format = intl9.format;
  obj21 = { communityGuidelines: tmp4Result5.getArticleURL(constants.PUBLIC_GUILD_GUILDLINES), typesOfGuilds: tmp4Result6.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) };
  prop3 = tmp2(1114).t["BwbW/Q"];
  tmp4Result5 = tmp4(2062);
  tmp4Result6 = tmp4(2062);
  items3[2] = closure_14(Text3, obj20);
  return closure_15(EnableCommunityModalScreen, obj4);
};
