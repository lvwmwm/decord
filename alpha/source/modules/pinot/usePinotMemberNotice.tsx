// Module ID: 11074
// Function ID: 11075
// Name: usePinotMemberNotice
// Dependencies: [19, 11075, 558, 576, 11069, 11070, 504, 11076, 2]

// Module 11074 (usePinotMemberNotice)
import PinotMemberNoticeActionCreators from "PinotMemberNoticeActionCreators" /* 11076 */;
import react from "react" /* 19 */;
import PinotMemberNoticeAckStore from "PinotMemberNoticeAckStore" /* 11075 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = { visible: false };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotMemberNotice(guild_id, arg1) {
  let first;
  let pinotPromotableChannelId;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  const tmp = pinotPromotableChannelId;
  let obj = pinotPromotableChannelId(576);
  const cResult = obj.c(10);
  const obj2 = pinotPromotableChannelId(11069);
  pinotPromotableChannelId = obj2.usePinotPromotableChannelId(guild_id, arg1);
  let tmp6 = null;
  const useIsPinotMemberNoticeEnabled = pinotPromotableChannelId(11070).useIsPinotMemberNoticeEnabled;
  pinotPromotableChannelId(11070);
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp6 = guild_id;
  }
  let tmp8 = null;
  if (useIsPinotMemberNoticeEnabled(tmp6, arg1)) {
    tmp8 = pinotPromotableChannelId;
  }
  pinotPromotableChannelId = tmp8;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PinotMemberNoticeAckStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp8) {
    const fn = function u() {
      const isAckedResult = null != pinotPromotableChannelId && PinotMemberNoticeAckStore.isAcked(tmp);
      return isAckedResult;
    };
    const items1 = [tmp8];
    cResult[1] = tmp8;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp11, tmp12);
  if (cResult[4] !== tmp8) {
    const fn2 = function v() {
      if (null != pinotPromotableChannelId) {
        const obj = PinotMemberNoticeActionCreators;
        obj.ackPinotMemberNotice(tmp);
      }
    };
    cResult[4] = tmp8;
    cResult[5] = fn2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp14) {
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === tmp8) {
        tmp15 = cResult[9];
      }
      return tmp15;
    }
  }
  if (null != tmp8) {
    let obj3;
    if (!stateFromStores) {
      obj3 = { visible: true, dismiss: tmp14 };
    }
    cResult[6] = tmp14;
    cResult[7] = stateFromStores;
    cResult[8] = tmp8;
    cResult[9] = obj3;
    tmp15 = obj3;
  }
  obj3 = closure_4;
}) : (function usePinotMemberNotice(guild_id, arg1) {
  let dismiss;
  let pinotPromotableChannelId;
  let stateFromStores;
  let tmp = pinotPromotableChannelId;
  let obj = pinotPromotableChannelId(stateFromStores[4]);
  pinotPromotableChannelId = obj.usePinotPromotableChannelId(guild_id, arg1);
  let tmp5 = null;
  const useIsPinotMemberNoticeEnabled = pinotPromotableChannelId(stateFromStores[5]).useIsPinotMemberNoticeEnabled;
  pinotPromotableChannelId(stateFromStores[5]);
  const tmp2 = stateFromStores;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp5 = guild_id;
  }
  let tmp7 = null;
  if (useIsPinotMemberNoticeEnabled(tmp5, arg1)) {
    tmp7 = pinotPromotableChannelId;
  }
  pinotPromotableChannelId = tmp7;
  const items = [PinotMemberNoticeAckStore];
  const items1 = [tmp7];
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    const isAckedResult = null != pinotPromotableChannelId && PinotMemberNoticeAckStore.isAcked(tmp);
    return isAckedResult;
  }, items1);
  const items2 = [tmp7];
  dismiss = dismiss.useCallback(() => {
    if (null != pinotPromotableChannelId) {
      const obj = PinotMemberNoticeActionCreators;
      obj.ackPinotMemberNotice(tmp);
    }
  }, items2);
  const items3 = [tmp7, stateFromStores, dismiss];
  return dismiss.useMemo(() => {
    if (null != pinotPromotableChannelId) {
      let obj;
      const tmp = stateFromStores;
      if (!tmp) {
        obj = { visible: true, dismiss };
      }
      return obj;
    }
    obj = closure_4;
  }, items3);
});
const result = size.fileFinishedImporting("modules/pinot/usePinotMemberNotice.tsx");

export const usePinotMemberNotice = tmp2;
