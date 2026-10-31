// Module ID: 7421
// Function ID: 7422
// Name: safeTransitionTo
// Dependencies: [5, 4885, 1072, 5654, 7422, 1099, 7423, 5959, 1113, 7457, 2674, 7502, 7508, 2]
// Exports: default

// Module 7421 (safeTransitionTo)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import LinkUtils from "LinkUtils" /* 5654 */;
import DiceRollActionCreators from "DiceRollActionCreators" /* 7422 */;
import isAccessibleChannelOrThreadPathDefault from "isAccessibleChannelOrThreadPath" /* 7423 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _safeTransitionTo() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_3;
    let diceCount;
    let diceSides;
    let guildId;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let c2;
        let guild;
        let channelId2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let c4 = 0;
            c2 = undefined;
            guild = undefined;
            channelId2 = undefined;
            const obj16 = LinkUtils;
            const tryParseDiceRollLinkResult = obj16.tryParseDiceRollLink(closure_0);
            const tmp100 = closure_1;
            const tmp99 = closure_0;
            if (null != tryParseDiceRollLinkResult) {
              const channelId = tryParseDiceRollLinkResult.channelId;
              ({ guildId, diceCount, diceSides } = tryParseDiceRollLinkResult);
              const obj11 = DiceRollActionCreators;
              obj11.startDiceRoll(channelId, diceCount, diceSides);
              const obj12 = router_utils;
              obj12.transitionTo(Routes.CHANNEL(guildId, channelId), tmp100);
              c6 = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
            } else {
              const obj17 = LinkUtils;
              const tryParseChannelPathResult = obj17.tryParseChannelPath(tmp99);
              c2 = tryParseChannelPathResult;
              if (null != tryParseChannelPathResult) {
                c5 = 1;
                c6 = 1;
                const obj6 = { value: isAccessibleChannelOrThreadPathDefault(tryParseChannelPathResult), done: false };
                return obj6;
              }
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else if (!value) {
              const obj9 = { title: intl.string(closure_132_0(closure_132_2[8]).t.r0DLNm), body: intl2.string(closure_132_0(closure_132_2[8]).t["6Y0JlN"]), confirmText: intl3.string(closure_132_0(closure_132_2[8]).t.BddRzS) };
              const show = closure_132_1(closure_132_2[7]).show;
              const tmp32 = closure_132_1(closure_132_2[7]);
              intl = closure_132_0(closure_132_2[8]).intl;
              intl2 = closure_132_0(closure_132_2[8]).intl;
              intl3 = closure_132_0(closure_132_2[8]).intl;
              show(obj9);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else if (!value) {
            let hash;
            if (closure_1 != null) {
              hash = closure_1.hash;
            }
            let tmp8 = null != hash;
            if (tmp8) {
              let channelId1;
              if (c2 != null) {
                channelId1 = c2.channelId;
              }
              tmp8 = null != channelId1;
            }
            if (tmp8) {
              tmp8 = null == c2.threadId;
            }
            if (tmp8) {
              tmp8 = null == c2.messageId;
            }
            if (tmp8) {
              obj = closure_132_0(closure_132_2[12]);
              obj.queueFrameDeepLink(c2.channelId, closure_1.hash);
            }
            const obj2 = closure_132_0(closure_132_2[5]);
            obj2.transitionTo(closure_0, closure_1);
          }
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
        if (null != c2) {
          if (null != c2.guildId) {
            guild = closure_132_4.getGuild(c2.guildId);
            channelId2 = c2.channelId;
            if (null != guild) {
              const obj7 = closure_132_0(closure_132_2[9]);
              if (obj7.isModeratorReportOrPostChannelId(channelId2)) {
                const obj13 = { title: intl4.string(closure_132_1(closure_132_2[10]).iCIEAV), body: intl5.string(closure_132_1(closure_132_2[10]).bvzo6p), confirmText: intl6.string(closure_132_0(closure_132_2[8]).t.BddRzS) };
                const show2 = closure_132_1(closure_132_2[7]).show;
                const tmp74 = closure_132_1(closure_132_2[7]);
                intl4 = closure_132_0(closure_132_2[8]).intl;
                intl5 = closure_132_0(closure_132_2[8]).intl;
                intl6 = closure_132_0(closure_132_2[8]).intl;
                show2(obj13);
                c6 = 3;
                const obj14 = { value: undefined, done: true };
                return obj14;
              }
            }
          }
        }
        let closure_2 = c2;
        const maybePerformRoleSubscriptionUpsellRedirect = closure_132_1(closure_132_2[11]).maybePerformRoleSubscriptionUpsellRedirect;
        const tmp68 = closure_132_1(closure_132_2[11]);
        if (c2 == null) {
          closure_2 = { guildId: "Array" };
        }
        c5 = 2;
        c6 = 1;
        const obj15 = { value: maybePerformRoleSubscriptionUpsellRedirect(closure_2), done: false };
        return obj15;
      } catch (tmp95) {
        c6 = 3;
        throw tmp95;
      }
    }
  });
  return obj(...arguments);
};
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/links/safeTransitionTo.native.tsx");

export default function safeTransitionTo() {
  return obj(...arguments);
};
