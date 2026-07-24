// Module ID: 15355
// Function ID: 117073
// Name: ApplicationStatusIcon
// Dependencies: [31, 27, 33, 4130, 689, 3950, 4091, 5776, 15356, 4126, 1212, 15352, 3800, 2]

// Module 15355 (ApplicationStatusIcon)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function ApplicationStatusIcon(status) {
  status = status.status;
  if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.APPROVED === status) {
    let obj = { size: "sm", color: importDefault(689).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: importDefault(689).colors.STATUS_POSITIVE_TEXT };
    return callback(require(4091) /* CircleCheckIcon */.CircleCheckIcon, obj);
  } else if (require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.REJECTED === status) {
    obj = { size: "sm", color: importDefault(689).colors.ICON_FEEDBACK_CRITICAL, secondaryColor: importDefault(689).colors.WHITE };
    return callback(require(5776) /* CircleXIcon */.CircleXIcon, obj);
  } else {
    return null;
  }
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let obj = { label: { marginHorizontal: 16, marginBottom: 8 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.container = obj;
obj.row = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
_createForOfIteratorHelperLoose = { width: "100%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.divider = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let guildId;
  let selectedJoinRequestId;
  let userId;
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  let tmp = callback3();
  const require = tmp;
  let obj = require(15356) /* useOtherGuildJoinRequestsForUser */;
  const otherGuildJoinRequestsForUser = obj.useOtherGuildJoinRequestsForUser({ guildId, userId, selectedJoinRequestId });
  let tmp2 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    obj = {};
    obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t["hxa+G3"]);
    let items = [callback(require(4126) /* Text */.Text, obj), ];
    let obj1 = {
      style: tmp.container,
      children: otherGuildJoinRequestsForUser.map((createdAt) => {
          let tmp = createdAt;
          let obj = {};
          let tmp2 = arg1 > 0;
          tmp = outer1_7;
          if (tmp2) {
            obj = { style: tmp.divider };
            tmp2 = outer1_6(outer1_5, obj);
          }
          const items = [tmp2, ];
          obj = {
            accessibilityRole: "button",
            style: tmp.row,
            onPress() {
              return outer2_1(outer2_2[11])(closure_0);
            }
          };
          const obj1 = { variant: "text-sm/normal", color: "text-default" };
          const obj5 = tmp(outer1_2[12]);
          obj1.children = obj5.dateFormat(new Date(createdAt.createdAt), "LL");
          const items1 = [outer1_6(tmp(outer1_2[9]).Text, obj1), outer1_6(outer1_10, { status: createdAt.applicationStatus })];
          obj.children = items1;
          items[1] = outer1_7(outer1_4, obj);
          obj.children = items;
          return tmp(outer1_3.Fragment, obj, createdAt.joinRequestId);
        })
    };
    items[1] = callback(closure_5, obj1);
    obj.children = items;
    tmp2 = callback2(closure_8, obj);
  }
  return tmp2;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx");

export default memoResult;
