// Module ID: 5628
// Function ID: 48032
// Name: _safeTransitionTo
// Dependencies: [5, 1838, 653, 4321, 5629, 1198, 5630, 4471, 1212, 5655, 2298, 5691, 2]
// Exports: default

// Module 5628 (_safeTransitionTo)
import shouldNavigate from "shouldNavigate";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { Routes } from "ME";

const require = arg1;
async function _safeTransitionTo(arg0, arg1, arg2) {
  let diceCount;
  let diceSides;
  let guildId;
  let obj = outer2_0(outer2_2[3]);
  const tryParseDiceRollLinkResult = obj.tryParseDiceRollLink(arg0);
  if (null != tryParseDiceRollLinkResult) {
    const channelId = tryParseDiceRollLinkResult.channelId;
    ({ guildId, diceCount, diceSides } = tryParseDiceRollLinkResult);
    outer2_0(outer2_2[4]).startDiceRoll(channelId, diceCount, diceSides);
    const obj10 = outer2_0(outer2_2[4]);
    outer2_0(outer2_2[5]).transitionTo(outer2_5.CHANNEL(guildId, channelId), arg1);
  } else {
    let tryParseChannelPathResult = outer2_0(outer2_2[3]).tryParseChannelPath(arg0);
    if (null != tryParseChannelPathResult) {
      if (!yield outer2_1(outer2_2[6])(tryParseChannelPathResult)) {
        let obj1 = outer2_1(outer2_2[7]);
        obj = {};
        const intl = outer2_0(outer2_2[8]).intl;
        obj.title = intl.string(outer2_0(outer2_2[8]).t.r0DLNm);
        const intl2 = outer2_0(outer2_2[8]).intl;
        obj.body = intl2.string(outer2_0(outer2_2[8]).t["6Y0JlN"]);
        const intl3 = outer2_0(outer2_2[8]).intl;
        obj.confirmText = intl3.string(outer2_0(outer2_2[8]).t.BddRzS);
        obj1.show(obj);
      }
    }
    if (null != tryParseChannelPathResult) {
      if (null != tryParseChannelPathResult.guildId) {
        if (null != outer2_4.getGuild(tryParseChannelPathResult.guildId)) {
          if (obj4.isModeratorReportOrPostChannelId(tmp7)) {
            obj = {};
            const intl4 = outer2_0(outer2_2[8]).intl;
            obj.title = intl4.string(outer2_1(outer2_2[10]).iCIEAV);
            const intl5 = outer2_0(outer2_2[8]).intl;
            obj.body = intl5.string(outer2_1(outer2_2[10]).bvzo6p);
            const intl6 = outer2_0(outer2_2[8]).intl;
            obj.confirmText = intl6.string(outer2_0(outer2_2[8]).t.BddRzS);
            outer2_1(outer2_2[7]).show(obj);
          }
          obj4 = outer2_0(outer2_2[9]);
        }
      }
    }
    const obj12 = outer2_0(outer2_2[3]);
    if (null == tryParseChannelPathResult) {
      obj1 = { guildId: undefined };
      tryParseChannelPathResult = obj1;
    }
    if (!yield obj5.maybePerformRoleSubscriptionUpsellRedirect(tryParseChannelPathResult)) {
      outer2_0(outer2_2[5]).transitionTo(arg0, arg1);
      const obj7 = outer2_0(outer2_2[5]);
    }
    obj5 = outer2_1(outer2_2[11]);
  }
}
const result = require("ME").fileFinishedImporting("modules/links/safeTransitionTo.native.tsx");

export default function safeTransitionTo() {
  return _safeTransitionTo(...arguments);
};
