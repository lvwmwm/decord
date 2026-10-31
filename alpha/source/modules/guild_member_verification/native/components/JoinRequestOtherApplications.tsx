// Module ID: 18650
// Function ID: 18651
// Name: JoinRequestOtherApplications
// Dependencies: [19, 17, 21, 5014, 575, 5048, 7340, 7092, 18651, 5624, 1113, 18647, 4836, 2]

// Module 18650 (JoinRequestOtherApplications)
import nativeDefault from "native" /* 575 */;
import DateUtils from "DateUtils" /* 4836 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5048 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
function ApplicationStatusIcon(status) {
  status = status.status;
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === status) {
    const obj2 = { size: "sm", color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT };
    const CircleCheckIcon = tmp(7340).CircleCheckIcon;
    return metroRequire(CircleCheckIcon, obj2);
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === status) {
    const obj = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, secondaryColor: nativeDefault.colors.WHITE };
    const CircleXIcon = tmp(7092).CircleXIcon;
    return metroRequire(CircleXIcon, obj);
  } else {
    return null;
  }
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { label: { marginHorizontal: 16, marginBottom: 8 }, container: obj2, row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 }, divider: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
const memoResult = react.memo(function JoinRequestOtherApplications(arg0) {
  let guildId;
  let intl;
  let items;
  let selectedJoinRequestId;
  let userId;
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp = closure_9();
  _require = tmp;
  let tmp2 = _require;
  let obj = require("useOtherGuildJoinRequestsForUser");
  const otherGuildJoinRequestsForUser = obj.useOtherGuildJoinRequestsForUser({ guildId, userId, selectedJoinRequestId });
  let tmp4 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    let obj2 = { children: items };
    let obj3 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label, children: intl.string(tmp2(1113).t["hxa+G3"]) };
    let Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    items = [closure_6(Text, obj3), ];
    let obj4 = {
      style: tmp.container,
      children: otherGuildJoinRequestsForUser.map((createdAt, index) => {
          let date;
          let dateFormat;
          let items;
          let items1;
          closure_0 = createdAt;
          let tmp2 = index > 0;
          const Fragment = react.Fragment;
          if (tmp2) {
            const obj = { style: closure_0.divider };
            tmp2 = metroRequire(hasOwnProperty, obj);
          }
          const obj2 = { children: items };
          items = [tmp2, ];
          const obj3 = {
            accessibilityRole: "button",
            style: closure_0.row,
            onPress() {
              return closure_2_1(closure_2_2[11])(closure_0);
            },
            children: items1
          };
          const obj4 = { variant: "text-sm/normal", color: "text-default", children: dateFormat(date, "LL") };
          const Text = Text_Text.Text;
          dateFormat = DateUtils.dateFormat;
          DateUtils;
          date = new Date(createdAt.createdAt);
          items1 = [metroRequire(Text, obj4), ];
          const obj5 = { status: createdAt.applicationStatus };
          items1[1] = metroRequire(ApplicationStatusIcon, obj5);
          items[1] = metroImportDefault(React3, obj3);
          return metroImportDefault(Fragment, obj2, createdAt.joinRequestId);
        })
    };
    items[1] = closure_6(closure_5, obj4);
    tmp4 = closure_7(closure_8, obj2);
  }
  return tmp4;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx");

export default memoResult;
