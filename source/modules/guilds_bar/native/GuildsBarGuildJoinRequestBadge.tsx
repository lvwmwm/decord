// Module ID: 14931
// Function ID: 113803
// Name: GuildsBarGuildJoinRequestBadge
// Dependencies: [31, 27, 33, 4165, 689, 5008, 3985, 14932, 14933, 14934, 11418, 5119, 2]
// Exports: default

// Module 14931 (GuildsBarGuildJoinRequestBadge)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.badgeImageContainer = _createForOfIteratorHelperLoose;
const obj1 = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08 };
_createForOfIteratorHelperLoose.badgeImage = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = _createForOfIteratorHelperLoose();
  if (require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp6 = importDefault(14932);
  } else if (require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp6 = importDefault(14933);
  } else if (require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp6 = importDefault(14934);
  } else {
    tmp6 = null;
    if (require(3985) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp6 = importDefault(11418);
    }
  }
  let tmp15 = null;
  if (null != tmp6) {
    let obj = { pointerEvents: "none" };
    const items = [tmp.badgeImageContainer, joinRequestState.style];
    obj.style = items;
    obj = { source: tmp6, style: tmp.badgeImage };
    obj.children = jsx(importDefault(5119), { source: tmp6, style: tmp.badgeImage });
    tmp15 = <View source={tmp6} style={tmp.badgeImage} />;
  }
  return tmp15;
};
