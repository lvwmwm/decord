// Module ID: 17482
// Function ID: 17483
// Name: FinishingTouchesScreen
// Dependencies: [32, 19, 17, 9049, 2102, 7479, 1074, 21, 4531, 576, 504, 4474, 9048, 1086, 17424, 17471, 17470, 17468, 1115, 4832, 5279, 5999, 17480, 6621, 2111, 2]
// Exports: default

// Module 17482 (FinishingTouchesScreen)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 7479 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let everyoneRole, set;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Image: metroRequire, View: metroImportDefault } = react_native);
({ CREATE_NEW_CHANNEL_VALUE: c10, MODERATOR_PERMISSIONS: unpackModuleId, MODERATOR_PERMISSIONS_FLAG: closure_12 } = PublicGuildsConstants);
({ GuildFeatures: map1, HelpdeskArticles: closure_14, UserNotificationSettings: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
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
  const f108253 = (item) => {
    const obj = PermissionUtilsAll;
    return obj.canEveryone(item, guild);
  };
  let obj = react;
  const ref = react.useRef(null);
  let obj2 = guild(4531);
  const tmp4 = defaultMessageNotifications;
  const token = obj2.useToken(defaultMessageNotifications(576).modules.mobile.TABLE_ROW_PADDING);
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
  [tmp13, tmp14] = _slicedToArray(obj.useState(!closure_11.some(f108253)), 2);
  const tmp12 = _slicedToArray(obj.useState(!closure_11.some(f108253)), 2);
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
      if (prop !== constants.ONLY_MENTIONS) {
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
    let publicUpdatesChannelId;
    let rulesChannelId;
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
      const removeResult = obj3.remove(everyoneRole.permissions, closure_1_12);
      const obj2 = { permissions: removeResult };
      const merged = Object.assign(everyoneRole);
      const obj4 = { features: set, rulesChannelId, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId, defaultMessageNotifications: features.defaultMessageNotifications };
      rulesChannelId = features.rulesChannelId;
      const saveGuild = first(dependencyMap[12]).saveGuild;
      const id = features.id;
      first(dependencyMap[12]);
      const tmp11 = dependencyMap;
      if (rulesChannelId == null) {
        rulesChannelId = closure_1_10;
      }
      ({ safetyAlertsChannelId: obj5.safetyAlertsChannelId, verificationLevel: obj5.verificationLevel, explicitContentFilter: obj5.explicitContentFilter, publicUpdatesChannelId } = features);
      if (publicUpdatesChannelId == null) {
        publicUpdatesChannelId = closure_1_10;
      }
      saveGuild(id, obj4);
      if (removeResult !== everyoneRole.permissions) {
        const items = [obj2];
        const obj = guild(tmp11[14]);
        obj.saveRoleSettings(features.id, items);
      }
    }
  }, []);
  const tmp20 = tmp4(17471)();
  const tmp2Result = guild(17470);
  const enableCommunitySharedStyles = tmp2Result.useEnableCommunitySharedStyles();
  let obj4 = { headerRef: ref, currentStep: tmp2(17468).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1, buttonText: intl.string(tmp2(1115).t.XGl4ba), children: items3 };
  const EnableCommunityModalScreen = tmp2(17468).EnableCommunityModalScreen;
  intl = tmp2(1115).intl;
  const obj5 = { style: enableCommunitySharedStyles.content, children: items2 };
  const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: intl2.formatToPlainString(guild(1115).t.tInpJj, { number: 3, total: 3 }) };
  const Text = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items2 = [closure_16(Text, obj6), , , ];
  const obj7 = { resizeMode: "contain", source: tmp20.finishingTouches };
  items2[1] = closure_16(closure_6, obj7);
  const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl3.string(guild(1115).t["Pj/s/a"]) };
  const Heading = tmp2(4832).Heading;
  intl3 = tmp2(1115).intl;
  items2[2] = closure_16(Heading, obj8);
  const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: intl4.string(guild(1115).t["IL7/no"]) };
  const Text2 = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items2[3] = closure_16(Text2, obj9);
  items3 = [closure_17(closure_7, obj5), , ];
  const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: items5 };
  const Stack = tmp2(5279).Stack;
  const TableRowGroup = tmp2(5999).TableRowGroup;
  const obj11 = { formSwitchDisabled: defaultMessageNotifications === ONLY_MENTIONS, children: closure_16(TableSwitchRow, obj12) };
  obj12 = { label: intl5.format(guild(1115).t.K8Eg4P, obj13), value: prop2 === tmp8.ONLY_MENTIONS, disabled: defaultMessageNotifications === ONLY_MENTIONS, onValueChange: callback };
  const tmp4Result = tmp4(17480);
  TableSwitchRow = tmp2(6621).TableSwitchRow;
  intl5 = tmp2(1115).intl;
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
  items4 = [closure_16(tmp4Result, obj11), ];
  const obj15 = { formSwitchDisabled: first2, children: closure_16(TableSwitchRow2, obj16) };
  obj16 = { label: intl6.format(guild(1115).t.v8qCoG, obj17), value: tmp13, disabled: first2, onValueChange: tmp14 };
  const tmp4Result4 = tmp4(17480);
  TableSwitchRow2 = tmp2(6621).TableSwitchRow;
  intl6 = tmp2(1115).intl;
  obj17 = {
    infoHook() {
      return null;
    }
  };
  items4[1] = closure_16(tmp4Result4, obj15);
  items5 = [closure_17(TableRowGroup, obj14), ];
  const obj18 = { title: intl7.string(guild(1115).t["k+b2Cf"]), hasIcons: false, children: closure_16(TableSwitchRow3, obj19) };
  const TableRowGroup2 = tmp2(5999).TableRowGroup;
  intl7 = tmp2(1115).intl;
  obj19 = { label: intl8.string(guild(1115).t["9AG3wI"]), value: first1, onValueChange: tmp11 };
  TableSwitchRow3 = tmp2(6621).TableSwitchRow;
  intl8 = tmp2(1115).intl;
  items5[1] = closure_16(TableRowGroup2, obj18);
  items3[1] = closure_17(Stack, obj10);
  const obj20 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle", children: format(prop3, obj21) };
  const Text3 = tmp2(4832).Text;
  const intl9 = tmp2(1115).intl;
  format = intl9.format;
  obj21 = { communityGuidelines: tmp4Result5.getArticleURL(constants.PUBLIC_GUILD_GUILDLINES), typesOfGuilds: tmp4Result6.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) };
  prop3 = tmp2(1115).t["BwbW/Q"];
  tmp4Result5 = tmp4(2111);
  tmp4Result6 = tmp4(2111);
  items3[2] = closure_16(Text3, obj20);
  return closure_17(EnableCommunityModalScreen, obj4);
};
