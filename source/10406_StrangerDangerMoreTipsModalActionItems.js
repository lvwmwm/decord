// Module ID: 10406
// Function ID: 80193
// Name: StrangerDangerMoreTipsModalActionItems
// Dependencies: [0, 0, 0, 0, 0, 0, 4294967295, 0, 0]
// Exports: default

// Module 10406 (StrangerDangerMoreTipsModalActionItems)
import result from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import { SafetyWarningTypes } from "result";
import { jsx } from "result";

const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx");

export default function StrangerDangerMoreTipsModalActionItems(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const warningId = channelId.warningId;
  const importDefault = warningId;
  const senderId = channelId.senderId;
  const dependencyMap = senderId;
  const onBlockPressed = channelId.onBlockPressed;
  let callback = onBlockPressed;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_6];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => isBlocked.getUser(senderId), items1);
  const React = stateFromStores;
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => warningId(senderId[7]).getName(stateFromStores), items2);
  let closure_5 = memo;
  const items3 = [closure_5];
  const items4 = [senderId];
  const stateFromStoresObject = arg1(dependencyMap[6]).useStateFromStoresObject(items3, () => ({ isIgnored: memo.isIgnored(senderId), isBlocked: memo.isBlocked(senderId) }), items4);
  const isBlocked = stateFromStoresObject.isBlocked;
  closure_6 = isBlocked;
  const tmp4 = callback(React.useState(stateFromStoresObject.isIgnored), 2);
  const first = tmp4[0];
  const SafetyWarningTypes = first;
  const jsx = tmp6;
  const items5 = [channelId, warningId, senderId, tmp4[1]];
  callback = React.useCallback(() => {
    let obj = channelId(senderId[8]);
    obj = { channelId, warningId, senderId, warningType: first.STRANGER_DANGER, cta: channelId(senderId[8]).CtaEventTypes.USER_MODAL_IGNORE };
    obj.trackCtaEvent(obj);
    warningId(senderId[9]).ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    tmp6(true);
  }, items5);
  const items6 = [channelId, warningId, senderId, tmp4[1]];
  const callback1 = React.useCallback(() => {
    let obj = channelId(senderId[8]);
    obj = { channelId, warningId, senderId, warningType: first.STRANGER_DANGER, cta: channelId(senderId[8]).CtaEventTypes.USER_MODAL_UNIGNORE };
    obj.trackCtaEvent(obj);
    warningId(senderId[9]).unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    tmp6(false);
  }, items6);
  const items7 = [first, isBlocked, memo, callback, callback1, onBlockPressed];
  const memo1 = React.useMemo(() => {
    let obj = {};
    const intl = channelId(senderId[10]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = channelId(senderId[10]).t;
    if (first) {
      obj = { username: memo };
      let formatToPlainStringResult = formatToPlainString(t.ZLIKgJ, obj);
    } else {
      obj = { username: memo };
      formatToPlainStringResult = formatToPlainString(t.QiyPaJ, obj);
    }
    obj.title = formatToPlainStringResult;
    let stringResult;
    if (!first) {
      const intl2 = channelId(senderId[10]).intl;
      stringResult = intl2.string(channelId(senderId[10]).t.naWE6W);
    }
    obj.description = stringResult;
    obj.onClick = first ? callback1 : callback;
    if (first) {
      let EyeSlashIcon = tmp8(tmp9[11]).EyeIcon;
    } else {
      EyeSlashIcon = tmp8(tmp9[12]).EyeSlashIcon;
    }
    obj.icon = tmp6(EyeSlashIcon, {});
    obj.disabled = isBlocked;
    const items = [obj, ];
    const obj1 = {};
    const intl3 = channelId(senderId[10]).intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = channelId(senderId[10]).t;
    if (isBlocked) {
      const obj2 = { username: memo };
      let formatToPlainString2Result = formatToPlainString2(t2.bluEjH, obj2);
    } else {
      const obj3 = { username: memo };
      formatToPlainString2Result = formatToPlainString2(t2.gc/wxc, obj3);
    }
    obj1.title = formatToPlainString2Result;
    let stringResult1;
    if (!isBlocked) {
      const intl4 = channelId(senderId[10]).intl;
      stringResult1 = intl4.string(channelId(senderId[10]).t.G08MKu);
    }
    obj1.description = stringResult1;
    obj1.onClick = onBlockPressed;
    obj1.icon = tmp6(channelId(senderId[13]).DenyIcon, { color: "text-feedback-critical" });
    obj1.variant = "danger";
    obj1.disabled = isBlocked;
    items[1] = obj1;
    return items;
  }, items7);
  obj = {
    hasIcons: true,
    children: memo1.map((arg0, arg1) => {
      let obj = {};
      obj = {};
      const merged = Object.assign(arg0);
      obj.children = tmp6(warningId(senderId[15]), obj);
      return tmp6(stateFromStores.Fragment, obj, arg1);
    })
  };
  return jsx(arg1(dependencyMap[14]).TableRowGroup, obj);
};
