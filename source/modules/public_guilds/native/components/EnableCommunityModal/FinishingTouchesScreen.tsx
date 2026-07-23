// Module ID: 16372
// Function ID: 127750
// Name: FinishingTouchesScreen
// Dependencies: [57, 31, 27, 8439, 1910, 7722, 653, 33, 3834, 689, 566, 3763, 8438, 483, 16319, 16361, 16360, 16358, 1212, 4126, 4541, 5503, 16370, 5504, 1920, 2]
// Exports: default

// Module 16372 (FinishingTouchesScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import PUBLIC_SUCCESS_MODAL_SEEN_KEY from "PUBLIC_SUCCESS_MODAL_SEEN_KEY";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_6, View: closure_7 } = get_ActivityIndicator);
({ CREATE_NEW_CHANNEL_VALUE: closure_10, MODERATOR_PERMISSIONS: closure_11, MODERATOR_PERMISSIONS_FLAG: closure_12 } = PUBLIC_SUCCESS_MODAL_SEEN_KEY);
({ GuildFeatures: closure_13, HelpdeskArticles: closure_14, UserNotificationSettings: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default function FinishingTouchesScreen() {
  let tmp11;
  let tmp12;
  const ref = React.useRef(null);
  let obj = guild(3834);
  const token = obj.useToken(first(689).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = guild(566);
  let items = [_isNativeReflectConstruct];
  guild = obj1.useStateFromStoresObject(items, () => outer1_8.getProps()).guild;
  let prop;
  if (null != guild) {
    prop = guild.defaultMessageNotifications;
  }
  first = callback(React.useState(prop), 1)[0];
  const tmp8 = callback(React.useState(false), 2);
  const first1 = tmp8[0];
  [tmp11, tmp12] = callback(React.useState(!closure_11.some((VIEW_CHANNEL) => outer1_2(outer1_3[11]).canEveryone(VIEW_CHANNEL, guild))), 2);
  const first2 = callback(React.useState(tmp11), 1)[0];
  let prop1;
  if (null != guild) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, first];
  callback = React.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0) {
      let prop;
      if (null != guild) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== outer1_15.ONLY_MENTIONS) {
        let obj = { defaultMessageNotifications: outer1_15.ONLY_MENTIONS };
        first(outer1_3[12]).updateGuild(obj);
        const obj3 = first(outer1_3[12]);
      }
    }
    if (!tmp) {
      tmp = null == first;
    }
    if (!tmp) {
      obj = first(outer1_3[12]);
      obj = { defaultMessageNotifications: first };
      obj.updateGuild(obj);
    }
  }, items1);
  const callback1 = React.useCallback((features) => {
    let publicUpdatesChannelId;
    let everyoneRole;
    if (null != features) {
      everyoneRole = outer1_9.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const set = new Set(features.features);
      set.add(outer1_13.COMMUNITY);
      const removeResult = outer1_2(outer1_3[13]).remove(everyoneRole.permissions, outer1_12);
      let obj = {};
      const merged = Object.assign(everyoneRole);
      obj["permissions"] = removeResult;
      const obj3 = outer1_2(outer1_3[13]);
      obj = { features: set };
      let rulesChannelId = features.rulesChannelId;
      if (null == rulesChannelId) {
        rulesChannelId = outer1_10;
      }
      obj.rulesChannelId = rulesChannelId;
      ({ safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId } = features);
      if (null == publicUpdatesChannelId) {
        publicUpdatesChannelId = outer1_10;
      }
      obj.publicUpdatesChannelId = publicUpdatesChannelId;
      obj.defaultMessageNotifications = features.defaultMessageNotifications;
      first(outer1_3[12]).saveGuild(features.id, obj);
      if (removeResult !== everyoneRole.permissions) {
        obj = guild(outer1_3[14]);
        const items = [obj];
        obj.saveRoleSettings(features.id, items);
      }
      const obj5 = first(outer1_3[12]);
    }
  }, []);
  const tmp10 = callback(React.useState(!closure_11.some((VIEW_CHANNEL) => outer1_2(outer1_3[11]).canEveryone(VIEW_CHANNEL, guild))), 2);
  let obj2 = guild(16360);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  obj = { headerRef: ref, currentStep: guild(16358).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1 };
  const intl = guild(1212).intl;
  obj.buttonText = intl.string(guild(1212).t.XGl4ba);
  obj = { style: enableCommunitySharedStyles.content };
  obj1 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle" };
  const intl2 = guild(1212).intl;
  obj1.children = intl2.formatToPlainString(guild(1212).t.tInpJj, { number: 3, total: 3 });
  const items2 = [callback2(guild(4126).Text, obj1), , , ];
  obj2 = { resizeMode: "contain", source: first(16361)().finishingTouches };
  items2[1] = callback2(closure_6, obj2);
  let obj3 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl3 = guild(1212).intl;
  obj3.children = intl3.string(guild(1212).t["Pj/s/a"]);
  items2[2] = callback2(guild(4126).Heading, obj3);
  const obj4 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle" };
  const intl4 = guild(1212).intl;
  obj4.children = intl4.string(guild(1212).t["IL7/no"]);
  items2[3] = callback2(guild(4126).Text, obj4);
  obj.children = items2;
  const items3 = [callback3(closure_7, obj), , ];
  let obj5 = { spacing: 24, style: { paddingHorizontal: token } };
  const obj6 = { hasIcons: false };
  const obj7 = { formSwitchDisabled: first === constants2.ONLY_MENTIONS };
  const tmp17 = first(16361)();
  const obj8 = {};
  const intl5 = guild(1212).intl;
  obj8.label = intl5.format(guild(1212).t.K8Eg4P, {
    infoHook() {
      return null;
    }
  });
  let prop2;
  if (null != guild) {
    prop2 = guild.defaultMessageNotifications;
  }
  obj8.value = prop2 === constants2.ONLY_MENTIONS;
  obj8.disabled = first === constants2.ONLY_MENTIONS;
  obj8.onValueChange = callback;
  obj7.children = callback2(guild(5504).TableSwitchRow, obj8);
  const items4 = [callback2(first(16370), obj7), ];
  const obj10 = { formSwitchDisabled: first2 };
  const obj9 = {
    infoHook() {
      return null;
    }
  };
  const tmp21 = first(16370);
  const obj11 = {};
  const intl6 = guild(1212).intl;
  obj11.label = intl6.format(guild(1212).t.v8qCoG, {
    infoHook() {
      return null;
    }
  });
  obj11.value = tmp11;
  obj11.disabled = first2;
  obj11.onValueChange = tmp12;
  obj10.children = callback2(guild(5504).TableSwitchRow, obj11);
  items4[1] = callback2(first(16370), obj10);
  obj6.children = items4;
  const items5 = [callback3(guild(5503).TableRowGroup, obj6), ];
  const obj13 = {};
  const intl7 = guild(1212).intl;
  obj13.title = intl7.string(guild(1212).t["k+b2Cf"]);
  obj13.hasIcons = false;
  const obj14 = {};
  const intl8 = guild(1212).intl;
  obj14.label = intl8.string(guild(1212).t["9AG3wI"]);
  obj14.value = first1;
  obj14.onValueChange = tmp8[1];
  obj13.children = callback2(guild(5504).TableSwitchRow, obj14);
  items5[1] = callback2(guild(5503).TableRowGroup, obj13);
  obj5.children = items5;
  items3[1] = callback3(guild(4541).Stack, obj5);
  const obj15 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle" };
  const intl9 = guild(1212).intl;
  const obj16 = {};
  const obj12 = {
    infoHook() {
      return null;
    }
  };
  const tmp23 = first(16370);
  obj16.communityGuidelines = first(1920).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES);
  const obj22 = first(1920);
  obj16.typesOfGuilds = first(1920).getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj15.children = intl9.format(guild(1212).t["BwbW/Q"], obj16);
  items3[2] = callback2(guild(4126).Text, obj15);
  obj.children = items3;
  return callback3(guild(16358).EnableCommunityModalScreen, obj);
};
