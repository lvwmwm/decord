// Module ID: 15793
// Function ID: 121919
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 1347, 4143, 10539, 1194, 1348, 4177, 3758, 1849, 4203, 653, 4148, 8899, 33, 4130, 689, 566, 15794, 4320, 8916, 8878, 5517, 4126, 8931, 1212, 4652, 12, 3831, 15791, 8332, 5165, 5170, 14392, 7598, 5171, 686, 5504, 3803, 8843, 4323, 7596, 10708, 4098, 15795, 1934, 8901, 8919, 15796, 15784, 15742, 10436, 8865, 15797, 5791, 15798, 8870, 15799, 10159, 10688, 10195, 10196, 2]

// Module 15793 (_createForOfIteratorHelperLoose)
import importAllResult from "TableRowIcon";
import closure_4 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStreamParticipant } from "ParticipantTypes";
import { SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY as closure_17 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
class VoicePanelSettingsOverviewHeader {
  constructor(arg0) {
    ({ guildId, channelId } = global);
    tmp = c21();
    obj = require("initialize");
    items = [];
    items[0] = c12;
    stateFromStores = obj.useStateFromStores(items, () => {
      const voiceStatesForChannelAlt = outer1_12.getVoiceStatesForChannelAlt(channelId, closure_0);
      const substr = voiceStatesForChannelAlt.slice(0, 2);
      const mapped = substr.map((user) => user.user);
      return channelId(outer1_2[17])(closure_0, channelId, mapped, voiceStatesForChannelAlt.length - mapped.length);
    });
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c8;
    items2 = [];
    items2[0] = channelId;
    stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_8.getChannel(channelId), items2);
    tmp4 = require("computeDefaultGroupDmNameFromUserIds")(stateFromStores1);
    obj3 = require("useIsSecureFramesUIEnabled");
    isSecureFramesUIEnabled = obj3.useIsSecureFramesUIEnabled({ channelId });
    obj4 = require("useIsUserSecureFramesVerified");
    isCallSecureFramesVerified = obj4.useIsCallSecureFramesVerified({ channelId });
    tmp7 = jsxs;
    obj = { style: tmp.headerContainer };
    tmp8 = require("set");
    tmp9 = jsxs;
    obj1 = { style: tmp.channelTitleWrapper };
    tmp10 = require("set");
    obj2 = { style: null, variant: "heading-lg/bold", lineClamp: 1, accessibilityRole: "header" };
    obj2.style = tmp.channelTitle;
    obj2.children = tmp4;
    items3 = [, ];
    items3[0] = jsx(require("Text").Text, obj2);
    if (isCallSecureFramesVerified) {
      tmp11 = jsx;
      tmp12 = guildId;
      tmp13 = closure_2;
      num = 23;
      obj3 = {};
      obj3.style = tmp.secureFramesIcon;
      str = "xs";
      obj3.size = "xs";
      num2 = 24;
      intl = require("getSystemLocale").intl;
      obj3.accessibilityLabel = intl.string(require("getSystemLocale").t.mR9cf3);
      isCallSecureFramesVerified = jsx(require("ShieldLockIcon").ShieldLockIcon, obj3);
    }
    items3[1] = isCallSecureFramesVerified;
    obj1.children = items3;
    items4 = [, , ];
    items4[0] = tmp9(tmp10, obj1);
    obj4 = { style: null, variant: "text-sm/medium", accessibilityRole: "summary" };
    obj4.style = tmp.channelSubtitle;
    obj4.children = stateFromStores;
    items4[1] = jsx(require("Text").Text, obj4);
    if (isSecureFramesUIEnabled) {
      tmp14 = jsxs;
      tmp15 = channelId;
      tmp16 = closure_2;
      obj5 = {};
      obj5.style = tmp.secureFrames;
      tmp18 = jsx;
      tmp19 = guildId;
      num3 = 25;
      tmp17 = require("set");
      items5 = [, ];
      items5[0] = jsx(require("LockIcon").LockIcon, { size: "xxs", color: "status-positive" });
      tmp20 = jsx;
      obj6 = { variant: "text-xs/medium", color: "status-positive" };
      num4 = 24;
      intl2 = require("getSystemLocale").intl;
      obj6.children = intl2.string(require("getSystemLocale").t["3BogKe"]);
      items5[1] = jsx(require("Text").Text, obj6);
      obj5.children = items5;
      isSecureFramesUIEnabled = jsxs(tmp17, obj5);
    }
    items4[2] = isSecureFramesUIEnabled;
    obj.children = items4;
    return tmp7(tmp8, obj);
  }
}
function ShareActivityLogsButton() {
  const callback = importAllResult.useCallback(() => {
    let obj = outer1_0(outer1_2[26]);
    const items = [outer1_15];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE" };
      const intl = outer1_0(outer1_2[24]).intl;
      obj.content = intl.string(outer1_0(outer1_2[24]).t["i+9VWy"]);
      outer1_1(outer1_2[27]).open(obj);
      const obj5 = outer1_1(outer1_2[27]);
    } else {
      const result = outer1_0(outer1_2[28]).closeVoicePanelSettingsActionSheet();
      const obj2 = outer1_0(outer1_2[28]);
      obj = { message: json };
      outer1_0(outer1_2[29]).showShareActionSheet(obj, "Activity Logs");
      const obj3 = outer1_0(outer1_2[29]);
    }
  }, []);
  let obj = { onPress: callback };
  obj = { IconComponent: require(14392) /* WrenchIcon */.WrenchIcon, source: importDefault(7598) };
  obj.icon = callback(require(5170) /* TableRowIcon */.TableRowIcon, obj);
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.iQzQs3);
  obj.trailing = callback(require(5171) /* TableRowArrow */.TableRowArrow, {});
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
}
function ActivityDebugToggle() {
  let obj = require(566) /* initialize */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getShowActivitiesDebugOverlay());
  const callback = importAllResult.useCallback((visible) => {
    let obj = outer1_1(outer1_2[35]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  }, []);
  obj = {};
  obj = { IconComponent: require(14392) /* WrenchIcon */.WrenchIcon, source: importDefault(7598) };
  obj.icon = callback(require(5170) /* TableRowIcon */.TableRowIcon, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t["qv5/SP"]);
  obj.value = stateFromStores;
  obj.onValueChange = callback;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["qv5/SP"]);
  return callback(require(5504) /* TableSwitchRow */.TableSwitchRow, obj);
}
({ AnalyticsSections: closure_13, Permissions: closure_14, RPC_APPLICATION_LOGGING_CATEGORY: closure_15 } = ME);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let obj = { headerContainer: { alignItems: "center" }, channelTitleWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 8 }, channelTitle: { textAlign: "center" }, channelSubtitle: { marginTop: 4, marginHorizontal: 16, textAlign: "center" } };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 8, padding: 4, gap: 4 };
obj.secureFrames = obj;
obj.secureFramesIcon = { marginStart: 4 };
let closure_21 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function VoicePanelSettingsOverview(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let obj = guildId(stateFromStores[16]);
  let items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => outer1_8.getChannel(channelId));
  const DeveloperMode = guildId(stateFromStores[37]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj1 = guildId(stateFromStores[16]);
  const items1 = [closure_12];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_12.getVoiceStatesForChannelAlt(channelId, guildId));
  let obj2 = guildId(stateFromStores[16]);
  const items2 = [closure_11];
  const items3 = [stateFromStores, stateFromStores1];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let iter2;
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const _Set = Set;
        const set = new Set(stateFromStores1.map((user) => user.user.id));
        const items = [];
        const tmp8 = outer1_22(stateFromStores.recipients);
        let iter = tmp8();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp9 = outer1_11;
            let user = outer1_11.getUser(value);
            let tmp11 = null == user || set.has(value);
            if (!tmp11) {
              let arr = items.push(user);
            }
            iter2 = tmp8();
            iter = iter2;
          } while (!iter2.done);
        }
        return items;
      }
    }
    return [];
  }, items3);
  let obj3 = guildId(stateFromStores[16]);
  const items4 = [closure_9];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => outer1_9.isSelfDeaf());
  const callback = stateFromStores1.useCallback(() => {
    channelId(stateFromStores[38]).toggleSelfDeaf();
  }, []);
  let obj4 = guildId(stateFromStores[16]);
  const items5 = [stateFromStores4];
  const stateFromStores3 = obj4.useStateFromStores(items5, () => stateFromStores4.getVoiceParticipantsHidden(channelId));
  let obj5 = guildId(stateFromStores[16]);
  const items6 = [stateFromStores4, closure_7];
  stateFromStores4 = obj5.useStateFromStores(items6, () => {
    const selectedParticipant = stateFromStores4.getSelectedParticipant(channelId);
    let id = null;
    if (outer1_16(selectedParticipant)) {
      id = null;
      if (selectedParticipant.stream.ownerId !== outer1_7.getId()) {
        id = selectedParticipant.id;
      }
    }
    return id;
  });
  const items7 = [channelId, stateFromStores3];
  const items8 = [channelId];
  const callback1 = stateFromStores1.useCallback(() => {
    const result = channelId(stateFromStores[39]).toggleVoiceParticipantsHidden(channelId, !stateFromStores3);
  }, items7);
  const items9 = [guildId];
  const callback2 = stateFromStores1.useCallback(() => {
    const result = guildId(stateFromStores[28]).closeVoicePanelSettingsActionSheet();
    const obj = guildId(stateFromStores[28]);
    channelId(stateFromStores[40]).open(channelId);
  }, items8);
  const items10 = [channelId];
  const callback3 = stateFromStores1.useCallback(() => {
    const result = guildId(stateFromStores[28]).closeVoicePanelSettingsActionSheet();
    const obj = guildId(stateFromStores[28]);
    const result1 = guildId(stateFromStores[41]).showVoiceSettingsActionSheet(guildId);
  }, items9);
  const items11 = [channelId, stateFromStores4];
  const callback4 = stateFromStores1.useCallback(() => {
    let obj = channelId(stateFromStores[42]);
    obj = { channelId };
    obj.openLazy(guildId(stateFromStores[44])(stateFromStores[43], stateFromStores.paths), outer1_17, obj);
  }, items10);
  const callback5 = stateFromStores1.useCallback(() => {
    if (null != stateFromStores4) {
      const result = channelId(stateFromStores[45]).openSecureFramesStreamVerification(stateFromStores4, channelId);
      const obj = channelId(stateFromStores[45]);
    }
  }, items11);
  let obj6 = guildId(stateFromStores[46]);
  const isCallRTCConnectionEmpty = obj6.useIsCallRTCConnectionEmpty();
  let obj7 = guildId(stateFromStores[46]);
  const isStreamRTCConnectionEmpty = obj7.useIsStreamRTCConnectionEmpty(stateFromStores4);
  let obj8 = guildId(stateFromStores[16]);
  const items12 = [stateFromStores3];
  const stateFromStores5 = obj8.useStateFromStores(items12, () => null != stateFromStores3.getCurrentEmbeddedActivity(), []);
  let obj9 = guildId(stateFromStores[16]);
  const items13 = [closure_10];
  const items14 = [channelId];
  let stateFromStores6 = obj9.useStateFromStores(items13, () => outer1_10.canWithPartialContext(outer1_14.MANAGE_CHANNELS, { channelId }), items14);
  let obj10 = guildId(stateFromStores[48]);
  const canInviteMembers = obj10.useCanInviteMembers(channelId);
  let obj11 = guildId(stateFromStores[49]);
  const tmp15 = channelId(stateFromStores[47])(stateFromStores);
  const inviteMembersCallback = obj11.useInviteMembersCallback(channelId);
  let obj12 = guildId(stateFromStores[19]);
  let isSecureFramesUIEnabled = obj12.useIsSecureFramesUIEnabled({ channelId });
  obj = {};
  const items15 = [callback(VoicePanelSettingsOverviewHeader, { guildId, channelId }), , , , , ];
  let tmp23 = null;
  if (tmp19) {
    obj = { hasIcons: false };
    obj1 = { channel: stateFromStores, analyticsSection: constants.CHANNEL_ACTION_SHEET };
    obj.children = callback(channelId(stateFromStores[52]), obj1);
    tmp23 = callback(guildId(stateFromStores[51]).VoicePanelFormSection, obj);
  }
  items15[1] = tmp23;
  let tmp31Result = stateFromStores6;
  if (!stateFromStores6) {
    tmp31Result = tmp15;
  }
  if (tmp31Result) {
    obj2 = { hasIcons: false };
    if (stateFromStores6) {
      obj3 = { onPress: callback2 };
      const intl = guildId(stateFromStores[24]).intl;
      obj3.label = intl.string(guildId(stateFromStores[24]).t.XPDhcc);
      const intl2 = guildId(stateFromStores[24]).intl;
      obj3.subLabel = intl2.string(guildId(stateFromStores[24]).t.w7ZEot);
      obj3.trailing = callback(guildId(stateFromStores[34]).TableRowArrow, {});
      stateFromStores6 = callback(guildId(stateFromStores[30]).TableRow, obj3);
    }
    obj2.children = stateFromStores6;
    tmp31Result = callback(guildId(stateFromStores[51]).VoicePanelFormSection, obj2);
    const tmp31 = callback;
  }
  items15[2] = tmp31Result;
  obj4 = { hasIcons: true };
  obj5 = { onPress: callback3 };
  obj6 = { IconComponent: guildId(stateFromStores[53]).SettingsIcon, source: channelId(stateFromStores[54]) };
  obj5.icon = callback(guildId(stateFromStores[31]).TableRowIcon, obj6);
  const intl3 = guildId(stateFromStores[24]).intl;
  obj5.label = intl3.string(guildId(stateFromStores[24]).t.NiTd0e);
  const intl4 = guildId(stateFromStores[24]).intl;
  obj5.subLabel = intl4.string(guildId(stateFromStores[24]).t["16SG+O"]);
  obj5.trailing = callback(guildId(stateFromStores[34]).TableRowArrow, {});
  const items16 = [callback(guildId(stateFromStores[30]).TableRow, obj5), , , , ];
  obj7 = {};
  obj8 = { IconComponent: guildId(stateFromStores[55]).HeadphonesSlashIcon, source: channelId(stateFromStores[56]) };
  obj7.icon = callback(guildId(stateFromStores[31]).TableRowIcon, obj8);
  const intl5 = guildId(stateFromStores[24]).intl;
  obj7.accessibilityHint = intl5.string(guildId(stateFromStores[24]).t.wjcRFX);
  obj7.value = stateFromStores2;
  obj7.onValueChange = callback;
  const intl6 = guildId(stateFromStores[24]).intl;
  obj7.label = intl6.string(guildId(stateFromStores[24]).t.wjcRFX);
  const intl7 = guildId(stateFromStores[24]).intl;
  obj7.subLabel = intl7.string(guildId(stateFromStores[24]).t.M3VN2U);
  items16[1] = callback(guildId(stateFromStores[36]).TableSwitchRow, obj7);
  obj9 = {};
  obj10 = { IconComponent: guildId(stateFromStores[57]).VideoIcon, source: channelId(stateFromStores[58]) };
  obj9.icon = callback(guildId(stateFromStores[31]).TableRowIcon, obj10);
  const intl8 = guildId(stateFromStores[24]).intl;
  obj9.accessibilityHint = intl8.string(guildId(stateFromStores[24]).t.ZMTRyc);
  obj9.value = stateFromStores3;
  obj9.onValueChange = callback1;
  const intl9 = guildId(stateFromStores[24]).intl;
  obj9.label = intl9.string(guildId(stateFromStores[24]).t.ZMTRyc);
  const intl10 = guildId(stateFromStores[24]).intl;
  obj9.subLabel = intl10.string(guildId(stateFromStores[24]).t.MlpCFS);
  items16[2] = callback(guildId(stateFromStores[36]).TableSwitchRow, obj9);
  let tmp39 = isSecureFramesUIEnabled;
  if (isSecureFramesUIEnabled) {
    tmp39 = null == stateFromStores4;
  }
  if (tmp39) {
    tmp39 = !isCallRTCConnectionEmpty;
  }
  if (tmp39) {
    obj11 = { onPress: callback4 };
    obj12 = { IconComponent: guildId(stateFromStores[25]).LockIcon, source: channelId(stateFromStores[54]) };
    obj11.icon = callback(guildId(stateFromStores[31]).TableRowIcon, obj12);
    const intl11 = guildId(stateFromStores[24]).intl;
    obj11.label = intl11.string(guildId(stateFromStores[24]).t.cTQI5t);
    const intl12 = guildId(stateFromStores[24]).intl;
    obj11.subLabel = intl12.string(guildId(stateFromStores[24]).t.Etxti2);
    obj11.trailing = callback(guildId(stateFromStores[34]).TableRowArrow, {});
    tmp39 = callback(guildId(stateFromStores[30]).TableRow, obj11);
  }
  items16[3] = tmp39;
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = null != stateFromStores4;
  }
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = !isStreamRTCConnectionEmpty;
  }
  if (isSecureFramesUIEnabled) {
    const obj13 = { onPress: callback5 };
    const obj14 = { IconComponent: guildId(stateFromStores[25]).LockIcon, source: channelId(stateFromStores[54]) };
    obj13.icon = callback(guildId(stateFromStores[31]).TableRowIcon, obj14);
    const intl13 = guildId(stateFromStores[24]).intl;
    obj13.label = intl13.string(guildId(stateFromStores[24]).t.QogHld);
    const intl14 = guildId(stateFromStores[24]).intl;
    obj13.subLabel = intl14.string(guildId(stateFromStores[24]).t["j5+1ed"]);
    obj13.trailing = callback(guildId(stateFromStores[34]).TableRowArrow, {});
    isSecureFramesUIEnabled = callback(guildId(stateFromStores[30]).TableRow, obj13);
  }
  items16[4] = isSecureFramesUIEnabled;
  obj4.children = items16;
  items15[3] = closure_19(guildId(stateFromStores[51]).VoicePanelFormSection, obj4);
  let tmp53Result = stateFromStores1.length > 0 || canInviteMembers;
  if (tmp53Result) {
    const obj15 = {};
    const intl15 = guildId(stateFromStores[24]).intl;
    const obj16 = {};
    const _HermesInternal = HermesInternal;
    obj16.count = "" + stateFromStores1.length;
    const _HermesInternal2 = HermesInternal;
    obj15.title = "" + intl15.formatToPlainString(guildId(stateFromStores[24]).t.AWmdd9, obj16);
    obj15.hasIcons = true;
    let tmp57 = null;
    if (canInviteMembers) {
      const obj17 = { onPress: inviteMembersCallback };
      const obj18 = { IconComponent: guildId(stateFromStores[59]).GroupPlusIcon, source: channelId(stateFromStores[60]) };
      obj17.icon = callback(guildId(stateFromStores[31]).TableRowIcon, obj18);
      const intl16 = guildId(stateFromStores[24]).intl;
      obj17.label = intl16.string(guildId(stateFromStores[24]).t["f1+QIK"]);
      obj17.trailing = callback(guildId(stateFromStores[34]).TableRowArrow, {});
      tmp57 = callback(guildId(stateFromStores[30]).TableRow, obj17);
    }
    const items17 = [
      tmp57,
      stateFromStores1.map((user) => {
          const obj = { user: user.user, selfStream: user.voiceState.selfStream };
          const nick = user.nick;
          let tmp2;
          if (null != nick) {
            tmp2 = nick;
          }
          obj.nick = tmp2;
          obj.channelId = channelId;
          obj.guildId = guildId;
          obj.showSecureFramesUI = isSecureFramesUIEnabled;
          return outer1_18(guildId(stateFromStores[51]).MemberRowItem, obj, user.user.id);
        }),
      stateFromStoresArray.map((id) => outer1_18(guildId(stateFromStores[51]).MemberRowItem, { user: id, channelId, guildId, notConnected: true, showRing: true }, id.id))
    ];
    obj15.children = items17;
    tmp53Result = closure_19(guildId(stateFromStores[51]).VoicePanelFormSection, obj15);
    const tmp53 = closure_19;
  }
  items15[4] = tmp53Result;
  let tmp65Result = null;
  if (setting) {
    const obj19 = {};
    const intl17 = guildId(stateFromStores[24]).intl;
    obj19.title = intl17.string(guildId(stateFromStores[24]).t.J6rqB7);
    obj19.hasIcons = true;
    let tmp68 = null;
    if (stateFromStores5) {
      tmp68 = callback(ShareActivityLogsButton, {});
    }
    const items18 = [tmp68, callback(ActivityDebugToggle, {})];
    obj19.children = items18;
    tmp65Result = closure_19(guildId(stateFromStores[51]).VoicePanelFormSection, obj19);
    const tmp65 = closure_19;
  }
  items15[5] = tmp65Result;
  obj.children = items15;
  return closure_19(closure_20, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx");

export default memoResult;
export { VoicePanelSettingsOverviewHeader };
