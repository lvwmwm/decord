// Module ID: 5623
// Function ID: 48005
// Name: _safeTransitionTo
// Dependencies: [0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 5, 3776, 653, 1851]
// Exports: default

// Module 5623 (_safeTransitionTo)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { Routes } from "__exportStarResult1";
import GuildFeatures from "GuildFeatures";

async function _safeTransitionTo(CHANNELResult, source, arg2) {
  let diceCount;
  let diceSides;
  let guildId;
  let obj = callback(closure_2[3]);
  const tryParseDiceRollLinkResult = obj.tryParseDiceRollLink(CHANNELResult);
  if (null != tryParseDiceRollLinkResult) {
    const channelId = tryParseDiceRollLinkResult.channelId;
    ({ guildId, diceCount, diceSides } = tryParseDiceRollLinkResult);
    callback(closure_2[4]).startDiceRoll(channelId, diceCount, diceSides);
    const obj10 = callback(closure_2[4]);
    callback(closure_2[5]).transitionTo(closure_5.CHANNEL(guildId, channelId), source);
  } else {
    let tryParseChannelPathResult = callback(closure_2[3]).tryParseChannelPath(CHANNELResult);
    if (null != tryParseChannelPathResult) {
      if (!yield closure_1(closure_2[6])(tryParseChannelPathResult)) {
        let obj1 = callback2(closure_2[7]);
        obj = {};
        const intl = callback(closure_2[8]).intl;
        obj.title = intl.string(callback(closure_2[8]).t.r0DLNm);
        const intl2 = callback(closure_2[8]).intl;
        obj.body = intl2.string(callback(closure_2[8]).t.6Y0JlN);
        const intl3 = callback(closure_2[8]).intl;
        obj.confirmText = intl3.string(callback(closure_2[8]).t.BddRzS);
        obj1.show(obj);
      }
    }
    if (null != tryParseChannelPathResult) {
      if (null != tryParseChannelPathResult.guildId) {
        if (null != guild.getGuild(tryParseChannelPathResult.guildId)) {
          if (obj4.isModeratorReportOrPostChannelId(tmp7)) {
            obj = {};
            const intl4 = callback(closure_2[8]).intl;
            obj.title = intl4.string(callback2(closure_2[10]).iCIEAV);
            const intl5 = callback(closure_2[8]).intl;
            obj.body = intl5.string(callback2(closure_2[10]).bvzo6p);
            const intl6 = callback(closure_2[8]).intl;
            obj.confirmText = intl6.string(callback(closure_2[8]).t.BddRzS);
            callback2(closure_2[7]).show(obj);
          }
          const obj4 = callback(closure_2[9]);
        }
      }
    }
    const obj12 = callback(closure_2[3]);
    if (null == tryParseChannelPathResult) {
      obj1 = { guildId: undefined };
      tryParseChannelPathResult = obj1;
    }
    if (!yield obj5.maybePerformRoleSubscriptionUpsellRedirect(tryParseChannelPathResult)) {
      callback(closure_2[5]).transitionTo(CHANNELResult, source);
      const obj7 = callback(closure_2[5]);
    }
    const obj5 = callback2(closure_2[11]);
  }
}
const result = GuildFeatures.fileFinishedImporting("modules/links/safeTransitionTo.native.tsx");

export default function safeTransitionTo() {
  return _safeTransitionTo(...arguments);
};
