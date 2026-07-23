// Module ID: 14828
// Function ID: 113176
// Name: GuildsBarGuildJoinRequestBadge
// Dependencies: [31, 27, 33, 4130, 689, 4973, 3950, 14829, 14830, 14831, 11388, 5085, 2]
// Exports: default

// Module 14828 (GuildsBarGuildJoinRequestBadge)
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
  if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp6 = importDefault(14829);
  } else if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp6 = importDefault(14830);
  } else if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp6 = importDefault(14831);
  } else {
    tmp6 = null;
    if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp6 = importDefault(11388);
    }
  }
  let tmp15 = null;
  if (null != tmp6) {
    let obj = { pointerEvents: "none" };
    const items = [tmp.badgeImageContainer, joinRequestState.style];
    obj.style = items;
    obj = { source: tmp6, style: tmp.badgeImage };
    obj.children = jsx(importDefault(5085), { source: tmp6, style: tmp.badgeImage });
    tmp15 = <View source={tmp6} style={tmp.badgeImage} />;
  }
  return tmp15;
};
