// Module ID: 13823
// Function ID: 105866
// Name: FamilyCenterRequestorDetails
// Dependencies: [31, 27, 33, 4130, 1273, 689, 7123, 13795, 4126, 2]
// Exports: default

// Module 13823 (FamilyCenterRequestorDetails)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1 } };
_createForOfIteratorHelperLoose = { borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.avatar = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.detailsContainer = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_4, flexGrow: 1, flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_4, flexGrow: 1, flexShrink: 1 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default function FamilyCenterRequestorDetails(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  obj = { style: tmp.container };
  const linkTimestampText = obj.useLinkTimestampText(otherUser.id, otherUser.status);
  obj = { avatarStyle: tmp.avatar, user: otherUser, guildId: undefined, disablePlaceholder: true, avatarDecoration: otherUser.avatarDecoration };
  const items = [callback(require(1273) /* Button */.Avatar, obj), ];
  const obj1 = { style: tmp.detailsContainer };
  const items1 = [callback(importDefault(13795), { user: otherUser }), ];
  const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText };
  items1[1] = callback(require(4126) /* Text */.Text, obj2);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
