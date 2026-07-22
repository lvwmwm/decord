// Module ID: 12599
// Function ID: 96838
// Name: ItemSeparator
// Dependencies: []

// Module 12599 (ItemSeparator)
function ItemSeparator() {
  const tmp = callback4();
  return callback2(arg1(dependencyMap[19]).FormDivider, { style: callback4().rowFormDivider });
}
function VoiceMemberListSectionHeader(title) {
  const tmp = callback4();
  let obj = { style: tmp.sectionContainer };
  obj = { "Null": true, "Null": true, alignItems: true, style: tmp.sectionTitle, children: title.title.toUpperCase() };
  obj.children = callback2(arg1(dependencyMap[25]).Text, obj);
  return callback2(closure_8, obj);
}
function renderSectionHeader(section) {
  const title = section.section.title;
  let tmp = null;
  if (null != title) {
    const obj = { title };
    tmp = callback2(VoiceMemberListSectionHeader, obj);
  }
  return tmp;
}
function extractKey(id) {
  if (id instanceof closure_10) {
    id = id.id;
  } else if (isEmbeddedActivity(id)) {
    id = id.applicationId;
  } else {
    id = id.user.id;
  }
  return id;
}
function isEmbeddedActivity(url) {
  return undefined !== url.url && undefined !== url.applicationId;
}
function VoiceSectionRow(arg0) {
  let channelId;
  let isActionSheet;
  let item;
  let onPressUser;
  ({ item, isActionSheet } = arg0);
  const arg1 = isActionSheet;
  let importDefault;
  let importAll;
  function _onItemPress() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _onItemPress = obj;
    return obj(...arguments);
  }
  ({ channelId, onPressUser } = arg0);
  let obj = arg1(_onItemPress[26]);
  importDefault = obj.useAnalyticsContext();
  importAll = importDefault(_onItemPress[27])().analyticsLocations;
  if (isEmbeddedActivity(item)) {
    obj = {
      embeddedActivity: item,
      channelId,
      onItemPress(arg0) {
          return _onItemPress(...arguments);
        },
      isActionSheet
    };
    return tmp(tmp2(tmp3[32]), obj);
  } else {
    obj = {};
    const merged = Object.assign(item);
    obj["onPress"] = onPressUser;
    obj["isActionSheet"] = isActionSheet;
    return tmp(tmp2(tmp3[33]), obj);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ SectionList: closure_7, View: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticsPages: closure_15, InstantInviteSources: closure_16, Permissions: closure_17 } = arg1(dependencyMap[10]));
const FORM_ROW_VERTICAL_PADDING = arg1(dependencyMap[11]).FORM_ROW_VERTICAL_PADDING;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[12]).ACTION_SHEET_MAX_WIDTH;
const ThemeTypes = arg1(dependencyMap[13]).ThemeTypes;
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = arg1(dependencyMap[14]));
const tmp4 = arg1(dependencyMap[14]);
let closure_24 = arg1(dependencyMap[15]).createStyles({ container: { <string:3429165147>: "<string:2491613185>", <string:1389933036>: "<string:2941583362>" }, sectionContainer: { -9223372036854775808: null, 9223372036854775807: null }, sectionTitle: { lineHeight: 16 }, voiceChannelContainer: {}, headerFormDivider: { marginLeft: 0 }, rowFormDivider: { marginHorizontal: 16 } });
let closure_25 = importAllResult.memo((channel) => callback2(importDefault(dependencyMap[16]), { channel: channel.channel }));
let closure_26 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  arg1(dependencyMap[18]);
  [][0] = channel;
  let tmp4 = null;
  if (!tmp) {
    tmp4 = null;
    if (tmp3) {
      let obj = {};
      const items = [callback2(ItemSeparator, {}), ];
      obj = {};
      obj = {};
      const intl = arg1(dependencyMap[21]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.6Qgrev);
      obj.accessibilityHidden = true;
      obj.source = importDefault(dependencyMap[22]);
      obj.size = arg1(dependencyMap[20]).CircularIconButton.Sizes.MEDIUM_32;
      obj.leading = callback2(arg1(dependencyMap[20]).CircularIconButton, obj);
      const intl2 = arg1(dependencyMap[21]).intl;
      obj.label = intl2.string(arg1(dependencyMap[21]).t.6Qgrev);
      obj.onPress = function onPress() {
        if (channel.isPrivate()) {
          let tmpResult = tmp(tmp2[23]);
          tmpResult.navigateToNewGroupDM(channel.id, constants.CHANNEL_CALL);
        } else {
          tmpResult = tmp(tmp2[24]);
          const obj = { source: constants2.VOICE_CHANNEL };
          const result = tmpResult.showInstantInviteActionSheet(channel, obj);
        }
      };
      items[1] = callback2(arg1(dependencyMap[19]).FormRow, obj);
      obj.children = items;
      tmp4 = callback3(importAllResult.Fragment, obj);
    }
  }
  return tmp4;
});
let closure_27 = { VOICE: 0, [0]: "VOICE", SPECTATING: 1, [1]: "SPECTATING", DISCONNECTED: 2, [2]: "DISCONNECTED" };
const obj2 = arg1(dependencyMap[15]);
const forwardRefResult = importAllResult.forwardRef(function VoiceMemberList(channel, ref) {
  channel = channel.channel;
  ref = channel;
  let flag = channel.isActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let flag2 = channel.disableFooter;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = { <string:3662980731>: "spring", <string:3077322678>: 0.4, <string:1378379006>: 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  let importAll;
  let dependencyMap;
  let callback;
  let closure_5;
  let importAllResult;
  let set;
  let items5;
  let closure_9;
  let closure_10;
  const tmp3 = callback4();
  importAll = tmp3;
  const analyticsLocations = importDefault(dependencyMap[27])().analyticsLocations;
  dependencyMap = analyticsLocations;
  callback = Math.min(importDefault(dependencyMap[34])().width, ACTION_SHEET_MAX_WIDTH);
  let obj1 = ref(dependencyMap[18]);
  const items = [closure_14];
  const items1 = [channel];
  const stateFromStores = obj1.useStateFromStores(items, () => voiceStatesForChannel.getVoiceStatesForChannel(channel), items1);
  const tmp4 = importDefault(dependencyMap[35])(channel);
  closure_5 = tmp4;
  let obj2 = ref(dependencyMap[18]);
  const items2 = [closure_11];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    if (null != tmp4) {
      let viewerIds = viewerIds.getViewerIds(tmp4);
    } else {
      viewerIds = [];
    }
    return viewerIds;
  });
  importAllResult = stateFromStoresArray;
  let obj3 = ref(dependencyMap[23]);
  let obj4 = ref(dependencyMap[31]);
  const isModalOpen = obj3.useIsModalOpen(obj4.getVoiceChannelKey(channel.id));
  let obj5 = ref(dependencyMap[18]);
  const items3 = [closure_9];
  const stateFromStores1 = obj5.useStateFromStores(items3, () => callback.getEmbeddedActivitiesForChannel(channel.id));
  set = new Set(stateFromStores.map((voiceState) => voiceState.voiceState.userId));
  const items4 = [];
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    let reduced = recipients.reduce((arr) => {
      const user = user.getUser(arg1);
      let hasItem = null == user;
      if (!hasItem) {
        hasItem = set.has(user.id);
      }
      if (!hasItem) {
        arr.push(user);
      }
      return arr;
    }, items4);
  } else {
    reduced = items4;
  }
  items5 = [];
  if (null != tmp4) {
    if (null != stateFromStoresArray) {
      if (isModalOpen) {
        const found = stateFromStores.find((user) => user.user.id === tmp4.ownerId);
        let nick;
        if (null != found) {
          nick = found.nick;
        }
        let str = "";
        if (null != nick) {
          str = nick;
        }
        let obj8 = importDefault(dependencyMap[36]);
        const tmp14 = callback(obj8.partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
        const first = tmp14[0];
        if (first.length > 0) {
          obj = { type: constants.SPECTATING };
          const intl = ref(dependencyMap[21]).intl;
          obj = { username: str };
          obj.title = intl.formatToPlainString(ref(dependencyMap[21]).t.Fb0eT9, obj);
          obj.data = first;
          items5.push(obj);
        }
        if (tmp14[1].length > 0) {
          obj1 = { type: constants.VOICE };
          const intl2 = ref(dependencyMap[21]).intl;
          obj1.title = intl2.string(ref(dependencyMap[21]).t.C7iIKB);
          obj1.data = stateFromStores1.concat(arr11);
          items5.push(obj1);
        }
        if (reduced.length > 0) {
          obj2 = { type: constants.DISCONNECTED };
          const intl3 = ref(dependencyMap[21]).intl;
          obj2.title = intl3.string(ref(dependencyMap[21]).t.BnSq1I);
          obj2.data = reduced;
          items5.push(obj2);
        }
      }
      const items6 = [channel.id, analyticsLocations];
      callback = importAllResult.useCallback((id) => {
        let obj = flag(analyticsLocations[37]);
        obj.hideActionSheet();
        obj = { userId: id.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
        flag(analyticsLocations[38])(obj);
      }, items6);
      closure_9 = callback;
      const items7 = [channel, flag, callback];
      const callback1 = importAllResult.useCallback((item) => {
        item = item.item;
        const type = item.section.type;
        if (constants.VOICE === type) {
          let tmp18 = null;
          if (!(item instanceof callback1)) {
            let obj = { item, channelId: channel.id, onPressUser: callback, isActionSheet: flag };
            tmp18 = callback(closure_33, obj);
          }
          return tmp18;
        } else if (constants.SPECTATING === type) {
          obj = {};
          const merged = Object.assign(item);
          obj["onPress"] = callback;
          obj["isSpectating"] = true;
          obj["isActionSheet"] = true;
          return callback(true(analyticsLocations[33]), obj);
        } else if (constants.DISCONNECTED === type) {
          obj = { user: item, channel, isActionSheet: flag, onPress: callback };
          return callback(channel(analyticsLocations[33]).DisconnectedUserRow, obj);
        }
      }, items7);
      closure_10 = callback1;
      if (flag) {
        obj3 = { theme: ThemeTypes.DARK };
        obj4 = { style: tmp3.container };
        obj5 = { channel };
        const items8 = [callback2(ref(dependencyMap[40]).VoiceChannelHeader, obj5), , ];
        const obj6 = { style: tmp3.headerFormDivider };
        items8[1] = callback2(ref(dependencyMap[19]).FormDivider, obj6);
        const obj7 = { inActionSheet: true, style: tmp3.voiceChannelContainer };
        const merged1 = Object.assign(merged);
        obj7["renderItem"] = function renderRow(arg0, arg1) {
          if (null == items5[arg0].data[arg1]) {
            return null;
          } else {
            let obj = { item: tmp, section: items5[arg0] };
            obj = {};
            const items = [callback1(obj), ];
            obj = { style: items5.rowFormDivider };
            items[1] = callback(channel(analyticsLocations[19]).FormDivider, obj);
            obj.children = items;
            return callback2(closure_23, obj);
          }
        };
        obj7["itemSize"] = function getRowHeight(arg0, arg1) {
          if (null == arg1) {
            return 0;
          } else if (null == items5[arg0].data[arg1]) {
            return 0;
          } else {
            const diff = closure_4 - 2 * channel(analyticsLocations[33]).STREAM_PREVIEW_MARGIN;
            const sum = closure_18 + 32;
            if (tmp9 instanceof callback1) {
              return sum;
            } else if (callback3(tmp9)) {
              let result = channel(analyticsLocations[32]).calculateActivityRowHeight(closure_4);
              const obj = channel(analyticsLocations[32]);
            } else {
              const voiceState = tmp9.voiceState;
              result = sum;
              if (null != voiceState) {
                result = sum;
                if (voiceState.selfStream) {
                  result = sum + tmp14;
                }
              }
            }
          }
        };
        obj7["sections"] = items5.map((data) => data.data.length);
        items8[2] = callback2(importDefault(dependencyMap[41]), obj7);
        obj4.children = items8;
        obj3.children = callback3(items5, obj4);
        let tmp30Result = tmp30(ref(dependencyMap[39]).ThemeContextProvider, obj3);
        const tmp54 = importDefault(dependencyMap[41]);
      } else {
        obj8 = { ref, sections: items5, renderSectionHeader, renderItem: callback1, keyExtractor: extractKey, ItemSeparatorComponent: ItemSeparator };
        let tmp36 = null;
        if (!flag2) {
          const obj9 = { channel };
          tmp36 = callback2(closure_26, obj9);
        }
        obj8.ListFooterComponent = tmp36;
        const obj10 = { channel };
        obj8.ListHeaderComponent = callback2(closure_25, obj10);
        obj8.stickySectionHeadersEnabled = false;
        const merged2 = Object.assign(merged);
        tmp30Result = tmp30(set, obj8);
        const tmp31 = set;
      }
      return tmp30Result;
    }
  }
  items5.push({ type: constants.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) });
  if (reduced.length > 0) {
    const obj12 = { type: constants.DISCONNECTED, title: null, data: reduced };
    items5.push(obj12);
  }
});
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberList.tsx");

export default forwardRefResult;
