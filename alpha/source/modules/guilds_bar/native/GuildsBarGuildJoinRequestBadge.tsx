// Module ID: 18615
// Function ID: 18616
// Name: GuildsBarGuildJoinRequestBadge
// Dependencies: [19, 17, 21, 5141, 575, 6913, 5175, 18616, 18617, 18618, 14054, 5851, 2]
// Exports: default

// Module 18615 (GuildsBarGuildJoinRequestBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5175 */;
import LegacyTokens from "LegacyTokens" /* 6913 */;
import AssetRegistryDefault from "AssetRegistry" /* 14054 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18616 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 18617 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 18618 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { badgeImageContainer: size, badgeImage: size1 };
size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
size1 = { height: 16, width: 16, opacity: LegacyTokens.DARK_1_LIGHT_08 };
let closure_5 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  let tmp4;
  joinRequestState = joinRequestState.joinRequestState;
  const style = joinRequestState.style;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    tmp4 = AssetRegistryDefault2;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = AssetRegistryDefault3;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = AssetRegistryDefault4;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = AssetRegistryDefault;
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    const items = [tmp.badgeImageContainer, style];
    tmp9 = <View pointerEvents="none" style={items}>{null}</View>;
  }
  return tmp9;
};
