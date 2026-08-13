// Module ID: 15503
// Function ID: 15504
// Name: GuildsBarGuildJoinRequestBadge
// Dependencies: [19, 17, 21, 4342, 712, 5199, 4168, 15504, 15505, 15506, 11719, 5308, 2]
// Exports: default

// Module 15503 (GuildsBarGuildJoinRequestBadge)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { badgeImageContainer: null, badgeImage: null };
createCacheKey = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08 };
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = createCacheKey();
  if (require(4168) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = importDefault(15504);
  } else if (tmp2(4168).GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = importDefault(15505);
  } else if (tmp2(4168).GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = importDefault(15506);
  } else {
    tmp4 = null;
    if (tmp2(4168).GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = importDefault(11719);
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    let obj = { pointerEvents: "none", style: null, children: null };
    const items = [tmp.badgeImageContainer, joinRequestState.style];
    obj[1] = items;
    obj = { source: null, style: null };
    obj[0] = tmp4;
    obj[1] = tmp.badgeImage;
    obj[2] = jsx(importDefault(5308), { source: null, style: null });
    tmp9 = <View source={null} style={null} />;
  }
  return tmp9;
};
