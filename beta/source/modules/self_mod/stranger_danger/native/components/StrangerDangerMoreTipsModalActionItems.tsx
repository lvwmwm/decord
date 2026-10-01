// Module ID: 10929
// Function ID: 10930
// Name: StrangerDangerMoreTipsModalActionItems
// Dependencies: [32, 19, 4479, 1372, 10376, 21, 504, 4678, 10912, 9195, 1115, 6389, 6387, 7371, 5999, 10930, 2]
// Exports: default

// Module 10929 (StrangerDangerMoreTipsModalActionItems)
import Fragment2 from "Fragment" /* 21 */;
import intl5 from "intl" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10376 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
let jsx = Fragment2.jsx;
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx");

export default function StrangerDangerMoreTipsModalActionItems(channelId) {
  let closure_8;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  let isBlocked;
  let obj = channelId(senderId[6]);
  let items = [isBlocked];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    const obj = UserUtilsDefault;
    return obj.getName(stateFromStores);
  }, items2);
  let obj2 = channelId(senderId[6]);
  const items3 = [memo];
  const items4 = [senderId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items3, () => {
    const obj = { isIgnored: RelationshipStore.isIgnored(senderId), isBlocked: RelationshipStore.isBlocked(senderId) };
    return obj;
  }, items4);
  isBlocked = stateFromStoresObject.isBlocked;
  const tmp4 = onBlockPressed(stateFromStores.useState(stateFromStoresObject.isIgnored), 2);
  const first = tmp4[0];
  jsx = tmp6;
  const items5 = [channelId, warningId, senderId, tmp6];
  const callback = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE };
    obj.trackCtaEvent(obj2);
    const obj3 = RelationshipActionCreatorsDefault;
    obj3.ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(true);
  }, items5);
  const items6 = [channelId, warningId, senderId, tmp6];
  const callback1 = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
    obj.trackCtaEvent(obj2);
    const obj3 = RelationshipActionCreatorsDefault;
    obj3.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(false);
  }, items6);
  const items7 = [first, isBlocked, memo, callback, callback1, onBlockPressed];
  const memo1 = stateFromStores.useMemo(() => {
    let formatToPlainString2Result;
    let formatToPlainStringResult;
    let stringResult;
    let stringResult1;
    let tmp2;
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl5.t;
    if (first) {
      const obj2 = { username: memo };
      formatToPlainStringResult = formatToPlainString(t.ZLIKgJ, obj2);
      tmp2 = memo;
    } else {
      tmp2 = memo;
      const obj = { username: memo };
      formatToPlainStringResult = formatToPlainString(t.QiyPaJ, obj);
    }
    const obj3 = { title: formatToPlainStringResult, description: stringResult, onClick: first ? callback1 : callback, icon: null, disabled: isBlocked };
    stringResult = undefined;
    if (!first) {
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t.naWE6W);
    }
    if (first) {
      let EyeSlashIcon = tmp11(6389).EyeIcon;
    } else {
      EyeSlashIcon = tmp11(6387).EyeSlashIcon;
    }
    const items = [obj3, ];
    const intl3 = intl5.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = intl5.t;
    if (isBlocked) {
      const obj4 = { username: tmp2 };
      formatToPlainString2Result = formatToPlainString2(t2.bluEjH, obj4);
    } else {
      const obj5 = { username: tmp2 };
      formatToPlainString2Result = formatToPlainString2(t2["gc/wxc"], obj5);
    }
    const obj6 = { title: formatToPlainString2Result, description: stringResult1, onClick: onBlockPressed, icon: null, variant: "danger", disabled: isBlocked };
    stringResult1 = undefined;
    if (!isBlocked) {
      const intl4 = intl5.intl;
      stringResult1 = intl4.string(intl5.t.G08MKu);
    }
    items[1] = obj6;
    return items;
  }, items7);
  const TableRowGroup = channelId(senderId[14]).TableRowGroup;
  return <TableRowGroup hasIcons>{memo1.map((item, index) => {
    let obj2;
    let tmp;
    const Fragment = stateFromStores.Fragment;
    const obj = { children: closure_8(tmp, obj2) };
    obj2 = {};
    tmp = warningId(senderId[15]);
    const merged = Object.assign(item);
    return closure_8(Fragment, obj, index);
  })}</TableRowGroup>;
};
