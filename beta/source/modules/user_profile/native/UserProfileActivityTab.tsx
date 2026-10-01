// Module ID: 12650
// Function ID: 12651
// Name: UserProfileActivityTab
// Dependencies: [19, 17, 1074, 21, 4836, 576, 4832, 1115, 7818, 2111, 12651, 12654, 12572, 12655, 2]
// Exports: default

// Module 12650 (UserProfileActivityTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import UserProfileRecentActivityCardDefault from "UserProfileRecentActivityCard" /* 12655 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
function UserProfileActivityTabSkeleton() {
  let arr;
  const tmp = closure_8();
  let closure_0 = tmp;
  let obj = {
    style: tmp.loading,
    children: arr.map((item, index) => {
      let items;
      const obj = { style: closure_0.loadingRow, children: items };
      items = [, ];
      const obj2 = { style: closure_0.loadingThumbnail };
      items[0] = hasOwnProperty(View, obj2);
      const obj3 = { style: closure_0.loadingLine };
      items[1] = hasOwnProperty(View, obj3);
      return metroRequire(View, obj, index);
    })
  };
  arr = Array.from({ length: 8 });
  return closure_5(View, obj);
}
function Section(introText) {
  let children;
  let heading;
  let items;
  introText = introText.introText;
  ({ heading, children } = introText);
  const tmp = closure_8();
  const obj = { style: tmp.section, children: items };
  items = [, , ];
  const obj2 = { style: tmp.sectionHeading, variant: "text-sm/medium", color: "text-strong", accessibilityRole: "header", lineClamp: 1, children: heading };
  items[0] = hasOwnProperty(Text_Text.Text, obj2);
  let tmp4Result = null != introText;
  const tmp2 = metroRequire;
  const tmp3 = View;
  const tmp4 = hasOwnProperty;
  if (tmp4Result) {
    const obj3 = { style: tmp.introText, variant: "text-xs/medium", children: introText };
    tmp4Result = tmp4(Text_Text.Text, obj3);
  }
  items[1] = tmp4Result;
  items[2] = children;
  return tmp2(tmp3, obj);
}
function RecentActivityIntroText() {
  let learnMore;
  _require = closure_8();
  const intl = require("intl").intl;
  let obj = {
    learnMoreHook(children, arg1) {
      let obj = {
        variant: "text-xs/medium",
        style: learnMore.learnMore,
        accessibilityRole: "link",
        onPress() {
          let obj2;
          const obj = { href: obj2.getArticleURL(constants.ACTIVITY_STATUS_SETTINGS) };
          const handleClick = learnMore(closure_1_2[8]).handleClick;
          learnMore(closure_1_2[8]);
          obj2 = closure_1_1(closure_1_2[9]);
          return handleClick(obj);
        },
        children
      };
      return hasOwnProperty(Text_Text.Text, obj, arg1);
    }
  };
  return intl.format(require("intl").t["4bk9Ak"], obj);
}
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, sectionHeading: obj3, introText: obj4, learnMore: obj5, loading: { gap: nativeDefault.space.PX_8 }, loadingRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12 }, loadingThumbnail: size, loadingLine: size1 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: -nativeDefault.space.PX_8 };
obj4 = { marginTop: -nativeDefault.space.PX_8 };
obj5 = { color: nativeDefault.colors.TEXT_LINK };
({ gap: nativeDefault.space.PX_8 });
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12 });
size = { width: 60, height: 60, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
size1 = { width: 135, height: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTab.tsx");

export default function UserProfileActivityTab(user) {
  let cardStyle;
  let currentUser;
  let guildId;
  let hasCurrentActivity;
  let hasRecentActivity;
  let intl;
  let intl2;
  let isCurrentUser;
  let obj4;
  let recent;
  let tmp15Result;
  user = user.user;
  ({ currentUser, guildId, cardStyle } = user);
  const channelId = user.channelId;
  let obj = { userId: user.id, currentUserId: currentUser.id, guildId };
  ({ recent, isCurrentUser, hasCurrentActivity, hasRecentActivity } = cardStyle(12651)(obj));
  cardStyle(12651)(obj);
  const tmp = cardStyle;
  if (!hasCurrentActivity) {
    let tmp10Result;
    if (!hasRecentActivity) {
      if (tmp4) {
        tmp10Result = tmp5(UserProfileActivityTabSkeleton, {});
      } else {
        const tmp7 = user(12654);
        if (isCurrentUser) {
          tmp10Result = tmp5(tmp7.UserProfileActivityEmptyCurrentUser, {});
        } else {
          const obj2 = { user, guildId, channelId };
          tmp10Result = tmp5(tmp7.UserProfileActivityEmptyOtherUser, obj2);
        }
      }
    }
    return tmp10Result;
  }
  const tmp10 = closure_6;
  const tmp11 = closure_7;
  if (hasCurrentActivity) {
    const obj3 = { heading: intl.string(user(1115).t.J6STd9), children: closure_5(tmp(12572), obj4) };
    intl = user(1115).intl;
    obj4 = { user, currentUser, guildId, style: cardStyle };
    hasCurrentActivity = closure_5(Section, obj3);
  }
  const items = [hasCurrentActivity, ];
  if (hasRecentActivity) {
    const obj5 = {
      heading: intl2.string(user(1115).t.jzgEoL),
      introText: tmp15Result,
      children: recent.map((entry) => {
          const obj = { user, entry, style: cardStyle };
          return hasOwnProperty(UserProfileRecentActivityCardDefault, obj, entry.id);
        })
    };
    intl2 = user(1115).intl;
    tmp15Result = undefined;
    const tmp16 = Section;
    if (isCurrentUser) {
      tmp15Result = tmp15(RecentActivityIntroText, {});
    }
    hasRecentActivity = tmp15(tmp16, obj5);
  }
  items[1] = hasRecentActivity;
  tmp10Result = tmp10(tmp11, { children: items });
};
