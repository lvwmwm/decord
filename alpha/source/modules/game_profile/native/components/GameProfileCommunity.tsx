// Module ID: 9420
// Function ID: 9421
// Name: GameProfileCommunity
// Dependencies: [19, 21, 9416, 9415, 9421, 9351, 9320, 7516, 9422, 1114, 4872, 2]
// Exports: default

// Module 9420 (GameProfileCommunity)
import Fragment from "Fragment" /* 21 */;
import transitionToGuild from "transitionToGuild" /* 7516 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import GameProfileSection from "GameProfileSection" /* 9415 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 9416 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 9422 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = react.memo(function GameProfileCommunitySkeleton() {
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
  return <GameProfileSectionSkeleton animationDelayMs={result} showViewAllSkeleton={false} skeletonTitleWidth={80}>{null}</GameProfileSectionSkeleton>;
});
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(closeModal) {
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
  const tmp3 = closeModal(invite[5])(game, closeModal.onInviteResolved);
  invite = tmp3.invite;
  const isMember = tmp3.isMember;
  const isResolving = tmp3.isResolving;
  const items = [invite, isMember, trackAction, closeModal];
  const obj = trackAction(invite[5]);
  const result = obj.hasGameProfileDiscordWebsite(game);
  if (null != invite) {
    let tmp12Result;
    if (null != invite.guild) {
      const obj2 = { title: intl2.string(trackAction(invite[9]).t["U2N+ci"]), children: null };
      const tmpResult = tmp(invite[3]);
      intl2 = tmp4(tmp2[9]).intl;
      ({ guild: tmp4Result.fromInviteGuild(invite.guild), presenceCount: approximate_presence_count, memberCount: approximate_member_count, buttonText: stringResult, onJoin: tmp6 });
      tmp(invite[4]);
      approximate_presence_count = invite.approximate_presence_count;
      tmp4Result = trackAction(invite[10]);
      if (approximate_presence_count == null) {
        approximate_presence_count = invite.guild.approximate_presence_count;
      }
      approximate_member_count = invite.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = invite.guild.approximate_member_count;
      }
      const intl = tmp4(tmp2[9]).intl;
      const string = intl.string;
      const t = tmp4(tmp2[9]).t;
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
};
