// Module ID: 12713
// Function ID: 98994
// Name: ItemSeparator
// Dependencies: [57, 5, 31, 27, 1347, 1857, 4149, 3758, 1849, 4203, 653, 1277, 5188, 482, 33, 4130, 12709, 10679, 566, 7495, 12391, 1212, 10196, 3981, 8481, 4126, 9383, 5464, 1820, 4944, 10522, 4341, 12714, 12715, 1450, 12722, 22, 4098, 8492, 3842, 12723, 7588, 2]

// Module 12713 (ItemSeparator)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "getVoiceChannelKeyByChannelId";
import get_ActivityIndicator from "mergeLocations";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { FORM_ROW_VERTICAL_PADDING } from "semanticColor";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { ThemeTypes } from "sum";
import jsxProd from "StreamingUserRow";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_21;
let closure_22;
let closure_23;
let closure_7;
let closure_8;
const require = arg1;
function ItemSeparator() {
  const tmp = callback4();
  return callback2(require(7495) /* Form */.FormDivider, { style: callback4().rowFormDivider });
}
function VoiceMemberListSectionHeader(title) {
  const tmp = callback4();
  let obj = { style: tmp.sectionContainer };
  obj = { style: tmp.sectionTitle, variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() };
  obj.children = callback2(require(4126) /* Text */.Text, obj);
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
  let importDefault;
  let analyticsLocations;
  function _onItemPress() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_5(tmp);
    return obj(...arguments);
  }
  ({ channelId, onPressUser } = arg0);
  let obj = isActionSheet(_onItemPress[26]);
  importDefault = obj.useAnalyticsContext();
  analyticsLocations = importDefault(_onItemPress[27])().analyticsLocations;
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
({ SectionList: closure_7, View: closure_8 } = get_ActivityIndicator);
({ AnalyticsPages: closure_15, InstantInviteSources: closure_16, Permissions: closure_17 } = ME);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
let closure_24 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, flexShrink: 1 }, sectionContainer: { paddingTop: 16, paddingHorizontal: 16 }, sectionTitle: { lineHeight: 16 }, voiceChannelContainer: { overflow: "hidden", flexGrow: 1, flexShrink: 1, minHeight: 1 }, headerFormDivider: { marginLeft: 0 }, rowFormDivider: { marginHorizontal: 16 } });
let closure_25 = importAllResult.memo((channel) => callback2(importDefault(12709), { channel: channel.channel }));
let closure_26 = importAllResult.memo((channel) => {
  channel = channel.channel;
  channel(566);
  [][0] = channel;
  let tmp4 = null;
  if (!tmp) {
    tmp4 = null;
    if (tmp3) {
      let obj = {};
      const items = [callback2(ItemSeparator, {}), ];
      obj = {};
      obj = {};
      const intl = channel(1212).intl;
      obj.accessibilityLabel = intl.string(channel(1212).t["6Qgrev"]);
      obj.accessibilityHidden = true;
      obj.source = importDefault(10196);
      obj.size = channel(12391).CircularIconButton.Sizes.MEDIUM_32;
      obj.leading = callback2(channel(12391).CircularIconButton, obj);
      const intl2 = channel(1212).intl;
      obj.label = intl2.string(channel(1212).t["6Qgrev"]);
      obj.onPress = function onPress() {
        if (channel.isPrivate()) {
          let tmpResult = tmp(tmp2[23]);
          tmpResult.navigateToNewGroupDM(channel.id, outer1_15.CHANNEL_CALL);
        } else {
          tmpResult = tmp(tmp2[24]);
          const obj = { source: outer1_16.VOICE_CHANNEL };
          const result = tmpResult.showInstantInviteActionSheet(channel, obj);
        }
      };
      items[1] = callback2(channel(7495).FormRow, obj);
      obj.children = items;
      tmp4 = callback3(importAllResult.Fragment, obj);
    }
  }
  return tmp4;
});
let closure_27 = { VOICE: 0, [0]: "VOICE", SPECTATING: 1, [1]: "SPECTATING", DISCONNECTED: 2, [2]: "DISCONNECTED" };
const forwardRefResult = importAllResult.forwardRef(function VoiceMemberList(channel, ref) {
  channel = channel.channel;
  let flag = channel.isActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.disableFooter;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = { channel: 0, isActionSheet: 0, disableFooter: 0 };
  Object.setPrototypeOf(null);
  let merged = Object.assign(channel, obj);
  let c2;
  let analyticsLocations;
  let callback;
  let c5;
  let stateFromStoresArray;
  let set;
  let items5;
  callback = undefined;
  let callback1;
  const tmp3 = callback4();
  c2 = tmp3;
  analyticsLocations = flag(analyticsLocations[27])().analyticsLocations;
  callback = Math.min(flag(analyticsLocations[34])().width, ACTION_SHEET_MAX_WIDTH);
  let obj1 = channel(analyticsLocations[18]);
  let items = [closure_14];
  const items1 = [channel];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_14.getVoiceStatesForChannel(channel), items1);
  const tmp4 = flag(analyticsLocations[35])(channel);
  c5 = tmp4;
  let obj2 = channel(analyticsLocations[18]);
  const items2 = [closure_11];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    if (null != c5) {
      let viewerIds = outer1_11.getViewerIds(c5);
    } else {
      viewerIds = [];
    }
    return viewerIds;
  });
  let obj3 = channel(analyticsLocations[23]);
  let obj4 = channel(analyticsLocations[31]);
  const isModalOpen = obj3.useIsModalOpen(obj4.getVoiceChannelKey(channel.id));
  let obj5 = channel(analyticsLocations[18]);
  const items3 = [callback];
  const stateFromStores1 = obj5.useStateFromStores(items3, () => callback.getEmbeddedActivitiesForChannel(channel.id));
  set = new Set(stateFromStores.map((voiceState) => voiceState.voiceState.userId));
  const items4 = [];
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    let reduced = recipients.reduce((arr) => {
      const user = outer1_13.getUser(arg1);
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
        const found = stateFromStores.find((user) => user.user.id === _undefined2.ownerId);
        let nick;
        if (null != found) {
          nick = found.nick;
        }
        let str = "";
        if (null != nick) {
          str = nick;
        }
        let obj8 = flag(analyticsLocations[36]);
        const tmp14 = callback(obj8.partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
        const first = tmp14[0];
        if (first.length > 0) {
          obj = { type: constants.SPECTATING };
          const intl = channel(analyticsLocations[21]).intl;
          obj = { username: str };
          obj.title = intl.formatToPlainString(channel(analyticsLocations[21]).t.Fb0eT9, obj);
          obj.data = first;
          items5.push(obj);
        }
        if (tmp14[1].length > 0) {
          obj1 = { type: constants.VOICE };
          const intl2 = channel(analyticsLocations[21]).intl;
          obj1.title = intl2.string(channel(analyticsLocations[21]).t.C7iIKB);
          obj1.data = stateFromStores1.concat(arr11);
          items5.push(obj1);
        }
        if (reduced.length > 0) {
          obj2 = { type: constants.DISCONNECTED };
          const intl3 = channel(analyticsLocations[21]).intl;
          obj2.title = intl3.string(channel(analyticsLocations[21]).t.BnSq1I);
          obj2.data = reduced;
          items5.push(obj2);
        }
      }
      const items6 = [channel.id, analyticsLocations];
      callback = stateFromStoresArray.useCallback((id) => {
        let obj = flag(analyticsLocations[37]);
        obj.hideActionSheet();
        obj = { userId: id.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
        flag(analyticsLocations[38])(obj);
      }, items6);
      const items7 = [channel, flag, callback];
      callback1 = stateFromStoresArray.useCallback((item) => {
        item = item.item;
        const type = item.section.type;
        if (outer1_27.VOICE === type) {
          let tmp18 = null;
          if (!(item instanceof callback1)) {
            let obj = { item, channelId: channel.id, onPressUser: callback, isActionSheet: flag };
            tmp18 = outer1_21(outer1_33, obj);
          }
          return tmp18;
        } else if (outer1_27.SPECTATING === type) {
          obj = {};
          const merged = Object.assign(item);
          obj["onPress"] = callback;
          obj["isSpectating"] = true;
          obj["isActionSheet"] = true;
          return outer1_21(true(analyticsLocations[33]), obj);
        } else if (outer1_27.DISCONNECTED === type) {
          obj = { user: item, channel, isActionSheet: flag, onPress: callback };
          return outer1_21(channel(analyticsLocations[33]).DisconnectedUserRow, obj);
        }
      }, items7);
      if (flag) {
        obj3 = { theme: ThemeTypes.DARK };
        obj4 = { style: tmp3.container };
        obj5 = { channel };
        const items8 = [callback2(channel(analyticsLocations[40]).VoiceChannelHeader, obj5), , ];
        const obj6 = { style: tmp3.headerFormDivider };
        items8[1] = callback2(channel(analyticsLocations[19]).FormDivider, obj6);
        const obj7 = { inActionSheet: true, style: tmp3.voiceChannelContainer };
        const merged1 = Object.assign(merged);
        obj7["renderItem"] = function renderRow(arg0, arg1) {
          if (null == items5[arg0].data[arg1]) {
            return null;
          } else {
            let obj = { item: tmp, section: items5[arg0] };
            obj = {};
            const items = [callback1(obj), ];
            obj = { style: _undefined.rowFormDivider };
            items[1] = outer1_21(channel(analyticsLocations[19]).FormDivider, obj);
            obj.children = items;
            return outer1_22(outer1_23, obj);
          }
        };
        obj7["itemSize"] = function getRowHeight(arg0, arg1) {
          if (null == arg1) {
            return 0;
          } else if (null == items5[arg0].data[arg1]) {
            return 0;
          } else {
            const diff = _slicedToArray - 2 * channel(analyticsLocations[33]).STREAM_PREVIEW_MARGIN;
            const sum = outer1_18 + 32;
            if (tmp9 instanceof callback1) {
              return sum;
            } else if (outer1_32(tmp9)) {
              let result = channel(analyticsLocations[32]).calculateActivityRowHeight(_slicedToArray);
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
        items8[2] = callback2(flag(analyticsLocations[41]), obj7);
        obj4.children = items8;
        obj3.children = callback3(items5, obj4);
        let tmp30Result = tmp30(channel(analyticsLocations[39]).ThemeContextProvider, obj3);
        const tmp54 = flag(analyticsLocations[41]);
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
let result = require("result").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberList.tsx");

export default forwardRefResult;
