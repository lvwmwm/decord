// Module ID: 15658
// Function ID: 119640
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15658 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    ({ guildId: closure_0, channelId } = global);
    importDefault = channelId;
    tmp = closure_21();
    obj = arg1(dependencyMap[16]);
    items = [];
    items[0] = closure_12;
    stateFromStores = obj.useStateFromStores(items, () => {
      const voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(channelId, closure_0);
      const substr = voiceStatesForChannelAlt.slice(0, 2);
      const mapped = substr.map((user) => user.user);
      return channelId(closure_2[17])(closure_0, channelId, mapped, voiceStatesForChannelAlt.length - mapped.length);
    });
    obj2 = arg1(dependencyMap[16]);
    items1 = [];
    items1[0] = closure_8;
    items2 = [];
    items2[0] = channelId;
    stateFromStores1 = obj2.useStateFromStores(items1, () => channel.getChannel(channelId), items2);
    tmp4 = importDefault(dependencyMap[18])(stateFromStores1);
    obj3 = arg1(dependencyMap[19]);
    isSecureFramesUIEnabled = obj3.useIsSecureFramesUIEnabled({ channelId });
    obj4 = arg1(dependencyMap[20]);
    isCallSecureFramesVerified = obj4.useIsCallSecureFramesVerified({ channelId });
    tmp7 = jsxs;
    obj = { style: tmp.headerContainer };
    tmp8 = importDefault(dependencyMap[21]);
    tmp9 = jsxs;
    obj1 = { style: tmp.channelTitleWrapper };
    tmp10 = importDefault(dependencyMap[21]);
    obj2 = { style: tmp.channelTitle, children: tmp4 };
    items3 = [, ];
    items3[0] = jsx(arg1(dependencyMap[22]).Text, obj2);
    if (isCallSecureFramesVerified) {
      tmp11 = jsx;
      tmp12 = arg1;
      tmp13 = dependencyMap;
      num = 23;
      obj3 = {};
      obj3.style = tmp.secureFramesIcon;
      str = "xs";
      obj3.size = "xs";
      num2 = 24;
      intl = arg1(dependencyMap[24]).intl;
      obj3.accessibilityLabel = intl.string(arg1(dependencyMap[24]).t.mR9cf3);
      isCallSecureFramesVerified = jsx(arg1(dependencyMap[23]).ShieldLockIcon, obj3);
    }
    items3[1] = isCallSecureFramesVerified;
    obj1.children = items3;
    items4 = [, , ];
    items4[0] = tmp9(tmp10, obj1);
    obj4 = { style: tmp.channelSubtitle, children: stateFromStores };
    items4[1] = jsx(arg1(dependencyMap[22]).Text, obj4);
    if (isSecureFramesUIEnabled) {
      tmp14 = jsxs;
      tmp15 = importDefault;
      tmp16 = dependencyMap;
      obj5 = {};
      obj5.style = tmp.secureFrames;
      tmp18 = jsx;
      tmp19 = arg1;
      num3 = 25;
      tmp17 = importDefault(dependencyMap[21]);
      items5 = [, ];
      items5[0] = jsx(arg1(dependencyMap[25]).LockIcon, { flexDirection: true, alignItems: true });
      tmp20 = jsx;
      obj6 = {};
      num4 = 24;
      intl2 = arg1(dependencyMap[24]).intl;
      obj6.children = intl2.string(arg1(dependencyMap[24]).t.3BogKe);
      items5[1] = jsx(arg1(dependencyMap[22]).Text, obj6);
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
    let obj = callback(closure_2[26]);
    const items = [closure_15];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE" };
      const intl = callback(closure_2[24]).intl;
      obj.content = intl.string(callback(closure_2[24]).t.i+9VWy);
      callback2(closure_2[27]).open(obj);
      const obj5 = callback2(closure_2[27]);
    } else {
      const result = callback(closure_2[28]).closeVoicePanelSettingsActionSheet();
      const obj2 = callback(closure_2[28]);
      obj = { message: json };
      callback(closure_2[29]).showShareActionSheet(obj, "Activity Logs");
      const obj3 = callback(closure_2[29]);
    }
  }, []);
  let obj = { onPress: callback };
  obj = { IconComponent: arg1(dependencyMap[32]).WrenchIcon, source: importDefault(dependencyMap[33]) };
  obj.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[24]).intl;
  obj.label = intl.string(arg1(dependencyMap[24]).t.iQzQs3);
  obj.trailing = callback(arg1(dependencyMap[34]).TableRowArrow, {});
  return callback(arg1(dependencyMap[30]).TableRow, obj);
}
function ActivityDebugToggle() {
  let obj = arg1(dependencyMap[16]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const callback = importAllResult.useCallback((visible) => {
    let obj = callback(closure_2[35]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  }, []);
  obj = {};
  obj = { IconComponent: arg1(dependencyMap[32]).WrenchIcon, source: importDefault(dependencyMap[33]) };
  obj.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[24]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[24]).t.qv5/SP);
  obj.value = stateFromStores;
  obj.onValueChange = callback;
  const intl2 = arg1(dependencyMap[24]).intl;
  obj.label = intl2.string(arg1(dependencyMap[24]).t.qv5/SP);
  return callback(arg1(dependencyMap[36]).TableSwitchRow, obj);
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
({ AnalyticsSections: closure_13, Permissions: closure_14, RPC_APPLICATION_LOGGING_CATEGORY: closure_15 } = arg1(dependencyMap[10]));
const isStreamParticipant = arg1(dependencyMap[11]).isStreamParticipant;
let closure_17 = arg1(dependencyMap[12]).SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
const tmp2 = arg1(dependencyMap[10]);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = arg1(dependencyMap[13]));
const tmp3 = arg1(dependencyMap[13]);
let obj = { headerContainer: { alignItems: "center" }, channelTitleWrapper: { <string:1365418235>: "Shards_All_Nitro", <string:1398907311>: "Array", <string:1655488081>: "isArray", <string:626125472>: "toString" }, channelTitle: { textAlign: "center" }, channelSubtitle: { "Bool(true)": 759239012, "Bool(true)": 1912603216, "Bool(true)": 24 } };
obj = { width: 16777216, height: -795647662, borderRadius: importDefault(dependencyMap[15]).radii.sm, top: 117, right: 0, fill: 0, circleRadius: 0, backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_SURFACE_HIGH };
obj.secureFrames = obj;
obj.secureFramesIcon = { marginStart: 4 };
let closure_21 = arg1(dependencyMap[14]).createStyles(obj);
const obj2 = arg1(dependencyMap[14]);
const memoResult = importAllResult.memo(function VoicePanelSettingsOverview(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const channelId = guildId.channelId;
  const importDefault = channelId;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const dependencyMap = stateFromStores;
  const DeveloperMode = arg1(dependencyMap[37]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj1 = arg1(dependencyMap[16]);
  const items1 = [closure_12];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(channelId, guildId));
  let obj2 = arg1(dependencyMap[16]);
  const items2 = [closure_11];
  const items3 = [stateFromStores, stateFromStores1];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let iter2;
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const _Set = Set;
        const set = new Set(stateFromStores1.map((user) => user.user.id));
        const items = [];
        const tmp8 = callback3(stateFromStores.recipients);
        let iter = tmp8();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp9 = closure_11;
            let user = closure_11.getUser(value);
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
  let obj3 = arg1(dependencyMap[16]);
  const items4 = [closure_9];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => selfDeaf.isSelfDeaf());
  const callback = importAllResult.useCallback(() => {
    channelId(stateFromStores[38]).toggleSelfDeaf();
  }, []);
  let obj4 = arg1(dependencyMap[16]);
  const items5 = [closure_5];
  const stateFromStores3 = obj4.useStateFromStores(items5, () => stateFromStores4.getVoiceParticipantsHidden(channelId));
  let closure_4 = stateFromStores3;
  let obj5 = arg1(dependencyMap[16]);
  const items6 = [closure_5, closure_7];
  const stateFromStores4 = obj5.useStateFromStores(items6, () => {
    const selectedParticipant = stateFromStores4.getSelectedParticipant(channelId);
    let id = null;
    if (callback(selectedParticipant)) {
      id = null;
      if (selectedParticipant.stream.ownerId !== id.getId()) {
        id = selectedParticipant.id;
      }
    }
    return id;
  });
  closure_5 = stateFromStores4;
  const items7 = [channelId, stateFromStores3];
  const items8 = [channelId];
  const callback1 = importAllResult.useCallback(() => {
    const result = channelId(stateFromStores[39]).toggleVoiceParticipantsHidden(channelId, !stateFromStores3);
  }, items7);
  const items9 = [guildId];
  const callback2 = importAllResult.useCallback(() => {
    const result = guildId(stateFromStores[28]).closeVoicePanelSettingsActionSheet();
    const obj = guildId(stateFromStores[28]);
    channelId(stateFromStores[40]).open(channelId);
  }, items8);
  const items10 = [channelId];
  const callback3 = importAllResult.useCallback(() => {
    const result = guildId(stateFromStores[28]).closeVoicePanelSettingsActionSheet();
    const obj = guildId(stateFromStores[28]);
    const result1 = guildId(stateFromStores[41]).showVoiceSettingsActionSheet(guildId);
  }, items9);
  const items11 = [channelId, stateFromStores4];
  const callback4 = importAllResult.useCallback(() => {
    let obj = channelId(stateFromStores[42]);
    obj = { channelId };
    obj.openLazy(guildId(stateFromStores[44])(stateFromStores[43], stateFromStores.paths), closure_17, obj);
  }, items10);
  const callback5 = importAllResult.useCallback(() => {
    if (null != stateFromStores4) {
      const result = channelId(stateFromStores[45]).openSecureFramesStreamVerification(stateFromStores4, channelId);
      const obj = channelId(stateFromStores[45]);
    }
  }, items11);
  let obj6 = arg1(dependencyMap[46]);
  const isCallRTCConnectionEmpty = obj6.useIsCallRTCConnectionEmpty();
  let obj7 = arg1(dependencyMap[46]);
  const isStreamRTCConnectionEmpty = obj7.useIsStreamRTCConnectionEmpty(stateFromStores4);
  let obj8 = arg1(dependencyMap[16]);
  const items12 = [closure_4];
  const stateFromStores5 = obj8.useStateFromStores(items12, () => null != stateFromStores3.getCurrentEmbeddedActivity(), []);
  let obj9 = arg1(dependencyMap[16]);
  const items13 = [closure_10];
  const items14 = [channelId];
  let stateFromStores6 = obj9.useStateFromStores(items13, () => closure_10.canWithPartialContext(constants.MANAGE_CHANNELS, { channelId }), items14);
  let obj10 = arg1(dependencyMap[48]);
  const canInviteMembers = obj10.useCanInviteMembers(channelId);
  let obj11 = arg1(dependencyMap[49]);
  const tmp15 = importDefault(dependencyMap[47])(stateFromStores);
  const inviteMembersCallback = obj11.useInviteMembersCallback(channelId);
  let obj12 = arg1(dependencyMap[19]);
  let isSecureFramesUIEnabled = obj12.useIsSecureFramesUIEnabled({ channelId });
  let closure_6 = isSecureFramesUIEnabled;
  obj = {};
  const items15 = [callback(VoicePanelSettingsOverviewHeader, { guildId, channelId }), , , , , ];
  let tmp23 = null;
  if (tmp19) {
    obj = { hasIcons: false };
    obj1 = { channel: stateFromStores, analyticsSection: constants.CHANNEL_ACTION_SHEET };
    obj.children = callback(importDefault(dependencyMap[52]), obj1);
    tmp23 = callback(arg1(dependencyMap[51]).VoicePanelFormSection, obj);
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
      const intl = arg1(dependencyMap[24]).intl;
      obj3.label = intl.string(arg1(dependencyMap[24]).t.XPDhcc);
      const intl2 = arg1(dependencyMap[24]).intl;
      obj3.subLabel = intl2.string(arg1(dependencyMap[24]).t.w7ZEot);
      obj3.trailing = callback(arg1(dependencyMap[34]).TableRowArrow, {});
      stateFromStores6 = callback(arg1(dependencyMap[30]).TableRow, obj3);
    }
    obj2.children = stateFromStores6;
    tmp31Result = callback(arg1(dependencyMap[51]).VoicePanelFormSection, obj2);
    const tmp31 = callback;
  }
  items15[2] = tmp31Result;
  obj4 = { hasIcons: true };
  obj5 = { onPress: callback3 };
  obj6 = { IconComponent: arg1(dependencyMap[53]).SettingsIcon, source: importDefault(dependencyMap[54]) };
  obj5.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj6);
  const intl3 = arg1(dependencyMap[24]).intl;
  obj5.label = intl3.string(arg1(dependencyMap[24]).t.NiTd0e);
  const intl4 = arg1(dependencyMap[24]).intl;
  obj5.subLabel = intl4.string(arg1(dependencyMap[24]).t.16SG+O);
  obj5.trailing = callback(arg1(dependencyMap[34]).TableRowArrow, {});
  const items16 = [callback(arg1(dependencyMap[30]).TableRow, obj5), , , , ];
  obj7 = {};
  obj8 = { IconComponent: arg1(dependencyMap[55]).HeadphonesSlashIcon, source: importDefault(dependencyMap[56]) };
  obj7.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj8);
  const intl5 = arg1(dependencyMap[24]).intl;
  obj7.accessibilityHint = intl5.string(arg1(dependencyMap[24]).t.wjcRFX);
  obj7.value = stateFromStores2;
  obj7.onValueChange = callback;
  const intl6 = arg1(dependencyMap[24]).intl;
  obj7.label = intl6.string(arg1(dependencyMap[24]).t.wjcRFX);
  const intl7 = arg1(dependencyMap[24]).intl;
  obj7.subLabel = intl7.string(arg1(dependencyMap[24]).t.M3VN2U);
  items16[1] = callback(arg1(dependencyMap[36]).TableSwitchRow, obj7);
  obj9 = {};
  obj10 = { IconComponent: arg1(dependencyMap[57]).VideoIcon, source: importDefault(dependencyMap[58]) };
  obj9.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj10);
  const intl8 = arg1(dependencyMap[24]).intl;
  obj9.accessibilityHint = intl8.string(arg1(dependencyMap[24]).t.ZMTRyc);
  obj9.value = stateFromStores3;
  obj9.onValueChange = callback1;
  const intl9 = arg1(dependencyMap[24]).intl;
  obj9.label = intl9.string(arg1(dependencyMap[24]).t.ZMTRyc);
  const intl10 = arg1(dependencyMap[24]).intl;
  obj9.subLabel = intl10.string(arg1(dependencyMap[24]).t.MlpCFS);
  items16[2] = callback(arg1(dependencyMap[36]).TableSwitchRow, obj9);
  let tmp39 = isSecureFramesUIEnabled;
  if (isSecureFramesUIEnabled) {
    tmp39 = null == stateFromStores4;
  }
  if (tmp39) {
    tmp39 = !isCallRTCConnectionEmpty;
  }
  if (tmp39) {
    obj11 = { onPress: callback4 };
    obj12 = { IconComponent: arg1(dependencyMap[25]).LockIcon, source: importDefault(dependencyMap[54]) };
    obj11.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj12);
    const intl11 = arg1(dependencyMap[24]).intl;
    obj11.label = intl11.string(arg1(dependencyMap[24]).t.cTQI5t);
    const intl12 = arg1(dependencyMap[24]).intl;
    obj11.subLabel = intl12.string(arg1(dependencyMap[24]).t.Etxti2);
    obj11.trailing = callback(arg1(dependencyMap[34]).TableRowArrow, {});
    tmp39 = callback(arg1(dependencyMap[30]).TableRow, obj11);
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
    const obj14 = { IconComponent: arg1(dependencyMap[25]).LockIcon, source: importDefault(dependencyMap[54]) };
    obj13.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj14);
    const intl13 = arg1(dependencyMap[24]).intl;
    obj13.label = intl13.string(arg1(dependencyMap[24]).t.QogHld);
    const intl14 = arg1(dependencyMap[24]).intl;
    obj13.subLabel = intl14.string(arg1(dependencyMap[24]).t.j5+1ed);
    obj13.trailing = callback(arg1(dependencyMap[34]).TableRowArrow, {});
    isSecureFramesUIEnabled = callback(arg1(dependencyMap[30]).TableRow, obj13);
  }
  items16[4] = isSecureFramesUIEnabled;
  obj4.children = items16;
  items15[3] = closure_19(arg1(dependencyMap[51]).VoicePanelFormSection, obj4);
  let tmp53Result = stateFromStores1.length > 0 || canInviteMembers;
  if (tmp53Result) {
    const obj15 = {};
    const intl15 = arg1(dependencyMap[24]).intl;
    const obj16 = {};
    const _HermesInternal = HermesInternal;
    obj16.count = "" + stateFromStores1.length;
    const _HermesInternal2 = HermesInternal;
    obj15.title = "" + intl15.formatToPlainString(arg1(dependencyMap[24]).t.AWmdd9, obj16);
    obj15.hasIcons = true;
    let tmp57 = null;
    if (canInviteMembers) {
      const obj17 = { onPress: inviteMembersCallback };
      const obj18 = { IconComponent: arg1(dependencyMap[59]).GroupPlusIcon, source: importDefault(dependencyMap[60]) };
      obj17.icon = callback(arg1(dependencyMap[31]).TableRowIcon, obj18);
      const intl16 = arg1(dependencyMap[24]).intl;
      obj17.label = intl16.string(arg1(dependencyMap[24]).t.f1+QIK);
      obj17.trailing = callback(arg1(dependencyMap[34]).TableRowArrow, {});
      tmp57 = callback(arg1(dependencyMap[30]).TableRow, obj17);
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
          return closure_18(guildId(stateFromStores[51]).MemberRowItem, obj, user.user.id);
        }),
      stateFromStoresArray.map((id) => callback2(guildId(stateFromStores[51]).MemberRowItem, { user: id, channelId, guildId, notConnected: true, showRing: true }, id.id))
    ];
    obj15.children = items17;
    tmp53Result = closure_19(arg1(dependencyMap[51]).VoicePanelFormSection, obj15);
    const tmp53 = closure_19;
  }
  items15[4] = tmp53Result;
  let tmp65Result = null;
  if (setting) {
    const obj19 = {};
    const intl17 = arg1(dependencyMap[24]).intl;
    obj19.title = intl17.string(arg1(dependencyMap[24]).t.J6rqB7);
    obj19.hasIcons = true;
    let tmp68 = null;
    if (stateFromStores5) {
      tmp68 = callback(ShareActivityLogsButton, {});
    }
    const items18 = [tmp68, callback(ActivityDebugToggle, {})];
    obj19.children = items18;
    tmp65Result = closure_19(arg1(dependencyMap[51]).VoicePanelFormSection, obj19);
    const tmp65 = closure_19;
  }
  items15[5] = tmp65Result;
  obj.children = items15;
  return closure_19(closure_20, obj);
});
const result = arg1(dependencyMap[61]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx");

export default memoResult;
export { VoicePanelSettingsOverviewHeader };
