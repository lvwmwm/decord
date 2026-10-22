// Module ID: 9316
// Function ID: 9317
// Name: GameProfileCommunity
// Dependencies: [19, 21, 558, 576, 9311, 9313, 9317, 9277, 9221, 7434, 9318, 1128, 4835, 2]

// Module 9316 (GameProfileCommunity)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import transitionToGuild from "transitionToGuild" /* 7434 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9221 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 9311 */;
import GameProfileSection from "GameProfileSection" /* 9313 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 9318 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunitySkeleton() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const GameProfileSectionSkeleton = tmp(9313).GameProfileSectionSkeleton;
    const tmp7 = <GameProfileSectionSkeleton animationDelayMs={result} showViewAllSkeleton={false} skeletonTitleWidth={80}>{null}</GameProfileSectionSkeleton>;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function GameProfileCommunitySkeleton() {
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
  return <GameProfileSectionSkeleton animationDelayMs={result} showViewAllSkeleton={false} skeletonTitleWidth={80}>{null}</GameProfileSectionSkeleton>;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunityServer(closeModal) {
  let game;
  let invite;
  let tmp6;
  let trackAction;
  const tmp = trackAction;
  const obj = trackAction(invite[3]);
  const cResult = obj.c(21);
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  const tmp5 = closeModal(invite[7])(game, closeModal.onInviteResolved);
  invite = tmp5.invite;
  const isMember = tmp5.isMember;
  const isResolving = tmp5.isResolving;
  if (cResult[0] !== game) {
    const tmpResult = tmp(invite[7]);
    const result = tmpResult.hasGameProfileDiscordWebsite(game);
    cResult[0] = game;
    cResult[1] = result;
    tmp6 = result;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === closeModal) {
    if (cResult[3] === invite) {
      if (cResult[4] === isMember) {
        let tmp8;
        if (cResult[5] === trackAction) {
          tmp8 = cResult[6];
        }
        if (null != invite) {
          if (null != invite.guild) {
            let tmp10;
            let tmp12;
            let tmp14;
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[11]).intl;
              const stringResult = intl.string(tmp(invite[11]).t["U2N+ci"]);
              cResult[10] = stringResult;
              tmp10 = stringResult;
            } else {
              tmp10 = cResult[10];
            }
            if (cResult[11] !== invite.guild) {
              const tmpResult2 = tmp(invite[12]);
              const fromInviteGuildResult = tmpResult2.fromInviteGuild(invite.guild);
              cResult[11] = invite.guild;
              cResult[12] = fromInviteGuildResult;
              tmp12 = fromInviteGuildResult;
            } else {
              tmp12 = cResult[12];
            }
            let approximate_presence_count = invite.approximate_presence_count;
            if (approximate_presence_count == null) {
              approximate_presence_count = invite.guild.approximate_presence_count;
            }
            let approximate_member_count = invite.approximate_member_count;
            if (approximate_member_count == null) {
              approximate_member_count = invite.guild.approximate_member_count;
            }
            if (cResult[13] !== isMember) {
              let stringResult1;
              const intl2 = tmp(tmp2[11]).intl;
              const string = intl2.string;
              const t = tmp(tmp2[11]).t;
              if (isMember) {
                stringResult1 = string(t.cEnaWx);
              } else {
                stringResult1 = string(t.XpeFYr);
              }
              cResult[13] = isMember;
              cResult[14] = stringResult1;
              tmp14 = stringResult1;
            } else {
              tmp14 = cResult[14];
            }
            if (cResult[15] === tmp8) {
              if (cResult[16] === tmp12) {
                if (cResult[17] === approximate_presence_count) {
                  if (cResult[18] === approximate_member_count) {
                    let tmp16;
                    if (cResult[19] === tmp14) {
                      tmp16 = cResult[20];
                    }
                    return tmp16;
                  }
                }
              }
            }
            closeModal(invite[5]);
            const tmp19 = <tmp4Result title={tmp10}>{null}</tmp4Result>;
            cResult[15] = tmp8;
            cResult[16] = tmp12;
            cResult[17] = approximate_presence_count;
            cResult[18] = approximate_member_count;
            cResult[19] = tmp14;
            cResult[20] = tmp19;
            tmp16 = tmp19;
          }
        }
        if (cResult[7] === tmp6) {
          let tmp20;
          if (cResult[8] === isResolving) {
            tmp20 = cResult[9];
          }
          return tmp20;
        }
        let tmp21 = null;
        if (tmp6) {
          tmp21 = null;
          if (isResolving) {
            tmp21 = <closure_5 />;
          }
        }
        cResult[7] = tmp6;
        cResult[8] = isResolving;
        cResult[9] = tmp21;
        tmp20 = tmp21;
      }
    }
  }
  const fn = function b() {
    if (null != invite) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.JoinServer);
      closeModal();
      const tmp11 = isMember;
      if (tmp11) {
        const guild = tmp.guild;
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (null != id) {
          const tmp6Result = transitionToGuild;
          tmp6Result.transitionToGuild(invite.guild.id);
        }
      }
      const tmp6Result2 = DisplayedInviteActionCreators;
      tmp6Result2.showInvite(invite.code);
    }
  };
  cResult[2] = closeModal;
  cResult[3] = invite;
  cResult[4] = isMember;
  cResult[5] = trackAction;
  cResult[6] = fn;
  tmp8 = fn;
}) : (function GameProfileCommunityServer(closeModal) {
  let approximate_member_count;
  let approximate_presence_count;
  let game;
  let intl2;
  let stringResult;
  let tmp4Result;
  let trackAction;
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  let invite;
  const tmp = closeModal;
  const tmp3 = closeModal(invite[7])(game, closeModal.onInviteResolved);
  invite = tmp3.invite;
  const isMember = tmp3.isMember;
  const isResolving = tmp3.isResolving;
  const items = [invite, isMember, trackAction, closeModal];
  const obj = trackAction(invite[7]);
  const result = obj.hasGameProfileDiscordWebsite(game);
  if (null != invite) {
    let tmp12Result;
    if (null != invite.guild) {
      const obj2 = { title: intl2.string(trackAction(invite[11]).t["U2N+ci"]), children: null };
      const tmpResult = tmp(invite[5]);
      intl2 = tmp4(tmp2[11]).intl;
      ({ guild: tmp4Result.fromInviteGuild(invite.guild), presenceCount: approximate_presence_count, memberCount: approximate_member_count, buttonText: stringResult, onJoin: tmp6 });
      tmp(invite[6]);
      approximate_presence_count = invite.approximate_presence_count;
      tmp4Result = trackAction(invite[12]);
      if (approximate_presence_count == null) {
        approximate_presence_count = invite.guild.approximate_presence_count;
      }
      approximate_member_count = invite.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = invite.guild.approximate_member_count;
      }
      const intl = tmp4(tmp2[11]).intl;
      const string = intl.string;
      const t = tmp4(tmp2[11]).t;
      if (isMember) {
        stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      tmp12Result = tmp12(tmpResult, obj2);
    }
    return tmp12Result;
  }
  let tmp9 = null;
  if (result) {
    tmp9 = null;
    if (isResolving) {
      let tmp11 = closure_5;
      tmp9 = <closure_5 />;
    }
  }
  tmp12Result = tmp9;
});
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default tmp3;
