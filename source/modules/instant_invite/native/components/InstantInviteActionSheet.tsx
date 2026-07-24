// Module ID: 8535
// Function ID: 68016
// Name: Loading
// Dependencies: [57, 31, 27, 1353, 8527, 1838, 3758, 6978, 653, 33, 4130, 689, 8536, 1557, 5462, 5482, 5468, 566, 4116, 7000, 8526, 4098, 8537, 5713, 1282, 12185, 5187, 5186, 1212, 1273, 12186, 12190, 12192, 5772, 10096, 11775, 12224, 2]
// Exports: default

// Module 8535 (Loading)
import _slicedToArray from "_slicedToArray";
import onCopy from "onCopy";
import get_ActivityIndicator from "RedesignBottomSheetTitleHeaderBase";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import { InviteTargetTypes } from "InviteSendStates";
import { Permissions } from "ME";
import jsxProd from "SearchField";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
const require = arg1;
function Loading() {
  const tmp = _createForOfIteratorHelperLoose();
  const items = [];
  let num = 0;
  do {
    let tmp2 = callback2;
    let tmp3 = importDefault;
    let tmp4 = dependencyMap;
    let obj = { row: num };
    let arr = items.push(callback2(importDefault(8536), obj, num));
    num = num + 1;
  } while (num < 10);
  obj = {};
  obj = { style: tmp.placeholderHeader };
  const items1 = [callback2(closure_5, obj), callback2(closure_5, { style: tmp.placeholderLabel }), items];
  obj.children = items1;
  return callback3(closure_14, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.placeholderHeader = _createForOfIteratorHelperLoose;
let obj1 = { height: 16, width: "40%", margin: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.placeholderLabel = obj1;
_createForOfIteratorHelperLoose.errorEmptyState = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.searchAndShareContainer = { borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.inviteAgeText = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.shareApps = { paddingVertical: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteActionSheet.tsx");

export default function InstantInviteActionSheet(channel) {
  let _slicedToArray;
  let code;
  let isFetchingRows;
  let rows;
  let targetApplicationId;
  channel = channel.channel;
  const source = channel.source;
  const vanityURLCode = channel.vanityURLCode;
  ({ guildScheduledEventId: _slicedToArray, targetApplicationId, code } = channel);
  let stateFromStores;
  let str;
  const tmp = _createForOfIteratorHelperLoose();
  const analyticsLocations = source(vanityURLCode[14])(source(vanityURLCode[15]).INSTANT_INVITE_MODAL).analyticsLocations;
  const tmp2 = source(vanityURLCode[14]);
  if (null != targetApplicationId) {
    const items = [targetApplicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  let name = callback(source(vanityURLCode[16])(items1), 1)[0];
  let obj = channel(vanityURLCode[17]);
  const items2 = [closure_10, closure_8, str];
  stateFromStores = obj.useStateFromStores(items2, () => {
    if (null != code) {
      return code;
    } else {
      if (channel.isGuildStageVoice()) {
        if (!outer1_10.can(outer1_12.CREATE_INSTANT_INVITE, channel)) {
          const stageInstanceByChannel = str.getStageInstanceByChannel(channel.id);
          let invite_code;
          if (null != stageInstanceByChannel) {
            invite_code = stageInstanceByChannel.invite_code;
          }
          if (null != invite_code) {
            return stageInstanceByChannel.invite_code;
          }
        }
      }
      if (null != vanityURLCode) {
        if (null != _slicedToArray) {
          let obj = { baseCode: vanityURLCode, guildScheduledEventId: _slicedToArray };
          let inviteKeyFromExtraData = channel(vanityURLCode[18]).generateInviteKeyFromExtraData(obj);
          const obj3 = channel(vanityURLCode[18]);
        } else {
          inviteKeyFromExtraData = vanityURLCode;
        }
        return inviteKeyFromExtraData;
      } else {
        let invite = outer1_8.getInvite();
        if (null != invite) {
          if (null != _slicedToArray) {
            obj = channel(vanityURLCode[18]);
            obj = { baseCode: invite.code };
            invite = _slicedToArray;
            obj.guildScheduledEventId = _slicedToArray;
            code = obj.generateInviteKeyFromExtraData(obj);
          } else {
            code = invite.code;
          }
        }
      }
    }
  });
  let obj1 = channel(vanityURLCode[17]);
  const items3 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => outer1_8.getError());
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = source(vanityURLCode[19])(stateFromStores);
  }
  str = "";
  if (null != tmp6) {
    let obj2 = channel(vanityURLCode[20]);
    str = obj2.getShareMessage(tmp6);
  }
  let EMBEDDED_APPLICATION = null;
  if (null != targetApplicationId) {
    EMBEDDED_APPLICATION = InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  const items4 = [channel, analyticsLocations];
  const items5 = [channel, stateFromStores, str, source];
  callback = code.useCallback((userId) => {
    let obj = source(vanityURLCode[21]);
    obj.hideActionSheet();
    obj = { userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    source(vanityURLCode[22])(obj);
  }, items4);
  const items6 = [channel];
  const callback1 = code.useCallback((arg0) => {
    if (null != stateFromStores) {
      const obj = { channel, code: stateFromStores, message: str, location: source };
      arg0(obj);
      const guildId = channel.getGuildId();
      const result = channel(vanityURLCode[23]).setHubProgressActionComplete(guildId, channel(vanityURLCode[24]).HubProgressStep.INVITE_USER);
      const obj2 = channel(vanityURLCode[23]);
    }
  }, items5);
  const items7 = [stateFromStores, channel, source];
  const callback2 = code.useCallback(() => {
    const guildId = channel.getGuildId();
    const result = channel(vanityURLCode[23]).setHubProgressActionComplete(guildId, channel(vanityURLCode[24]).HubProgressStep.INVITE_USER);
  }, items6);
  const items8 = [stateFromStores, channel, str, source];
  const callback3 = code.useCallback(() => channel(vanityURLCode[20]).handleCopy(stateFromStores, channel, source), items7);
  const items9 = [channel];
  const callback4 = code.useCallback(() => channel(vanityURLCode[20]).handleOpenShareSheet(stateFromStores, channel, str, source), items8);
  const callback5 = code.useCallback(() => channel(vanityURLCode[20]).handlePressSettings(channel), items9);
  const tmp3 = source(vanityURLCode[16]);
  ({ rows, isFetchingRows } = source(vanityURLCode[25])(channel, source, EMBEDDED_APPLICATION, targetApplicationId));
  let tmp20 = null == stateFromStores;
  if (!tmp20) {
    tmp20 = 0 === rows.length && isFetchingRows;
    const tmp21 = 0 === rows.length && isFetchingRows;
  }
  let tmp23 = null != stateFromStores;
  if (tmp23) {
    tmp23 = 0 === rows.length;
  }
  if (tmp23) {
    tmp23 = !isFetchingRows;
  }
  const first = callback(code.useState(tmp23), 1)[0];
  obj = { value: analyticsLocations };
  obj = { showGradient: null, scrollable: true, startExpanded: true };
  let tmp27 = null != stateFromStores1;
  if (!tmp27) {
    tmp27 = !tmp20;
  }
  if (!tmp27) {
    tmp27 = !first;
  }
  obj.showGradient = tmp27;
  obj1 = {};
  if (null != targetApplicationId) {
    if (null != name) {
      const intl3 = channel(vanityURLCode[28]).intl;
      obj2 = {};
      name = name.name;
      obj2.applicationName = name;
      let formatToPlainStringResult = intl3.formatToPlainString(channel(vanityURLCode[28]).t.ZdK3dW, obj2);
    } else {
      const intl2 = channel(vanityURLCode[28]).intl;
      formatToPlainStringResult = intl2.string(channel(vanityURLCode[28]).t["OzOM/q"]);
    }
  } else {
    const intl = channel(vanityURLCode[28]).intl;
    obj1.title = intl.string(channel(vanityURLCode[28]).t["f1+QIK"]);
    obj.header = callback2(tmp29, obj1);
    if (null != stateFromStores1) {
      let obj3 = { style: tmp.errorEmptyState, Illustration: channel(vanityURLCode[30]).AppCrash, title: stateFromStores1 };
      let tmp38Result = callback2(channel(vanityURLCode[29]).EmptyState, obj3);
    } else if (tmp20) {
      tmp38Result = callback2(Loading, {});
    } else if (first) {
      const obj4 = {};
      const obj5 = { paddingBottom: source(vanityURLCode[13])().bottom + 16 };
      obj4.contentContainerStyle = obj5;
      const obj6 = { link: tmp6, onCopy: callback3, onShare: callback4, onPressSettings: callback5 };
      obj4.children = callback2(source(vanityURLCode[31]), obj6);
      tmp38Result = callback2(stateFromStores, obj4);
    } else {
      const obj7 = {};
      const obj8 = {};
      const obj9 = { contentContainerStyle: tmp.shareApps, onItemPressed: callback1 };
      const items10 = [callback2(source(vanityURLCode[32]), obj9), ];
      const obj10 = { style: tmp.searchAndShareContainer };
      const obj11 = { size: "md", isRound: true, onChange: channel(vanityURLCode[34]).searchInviteSuggestions };
      if (null != targetApplicationId) {
        const intl5 = channel(vanityURLCode[28]).intl;
        let stringResult = intl5.string(channel(vanityURLCode[28]).t.iI1gMg);
      } else {
        const intl4 = channel(vanityURLCode[28]).intl;
        const obj12 = {};
        guild = guild.getGuild(channel.guild_id);
        name = undefined;
        if (null != guild) {
          name = guild.name;
        }
        obj12.groupname = name;
        stringResult = intl4.formatToPlainString(channel(vanityURLCode[28]).t["1UgGdm"], obj12);
      }
      obj11.placeholder = stringResult;
      const items11 = [callback2(channel(vanityURLCode[33]).SearchField, obj11), ];
      let tmp57 = !tmp56;
      if (null == vanityURLCode) {
        const obj13 = { style: tmp.inviteAgeText, channel, canEditInvite: null == code };
        tmp57 = callback2(source(vanityURLCode[35]), obj13);
      }
      items11[1] = tmp57;
      obj10.children = items11;
      items10[1] = closure_15(analyticsLocations, obj10);
      obj8.children = items10;
      const items12 = [closure_15(analyticsLocations, obj8), ];
      const obj14 = { data: rows, code: stateFromStores };
      let tmp65;
      if (null != source) {
        tmp65 = source;
      }
      obj14.source = tmp65;
      obj14.onPressAvatar = callback;
      obj14.onInviteSent = callback2;
      items12[1] = callback2(source(vanityURLCode[36]), obj14);
      obj7.children = items12;
      tmp38Result = tmp38(closure_14, obj7);
      const tmp39 = closure_14;
      const tmp40 = analyticsLocations;
      const tmp44 = closure_15;
      const tmp45 = analyticsLocations;
      const tmp46 = callback2;
      const tmp61 = callback2;
      const tmp64 = source(vanityURLCode[36]);
    }
    obj.children = tmp38Result;
    obj.children = callback2(channel(vanityURLCode[26]).BottomSheet, obj);
    return callback2(channel(vanityURLCode[14]).AnalyticsLocationProvider, obj);
  }
};
