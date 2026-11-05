// Module ID: 19389
// Function ID: 19390
// Name: UnreadBadge
// Dependencies: [19, 17, 11244, 6914, 21, 5143, 19033, 5778, 9973, 2]

// Module 19389 (UnreadBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useFontScale from "useFontScale" /* 5778 */;
import ReadStateConstants from "ReadStateConstants" /* 6914 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11244 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 19033 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let tmp2;
let tmp5;
const shared_components_Badge = tmp5(9973);
const shared_components_BadgeDefault = tmp2(9973);
const View = react_native.View;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" } });
const memoResult = react.memo(function UnreadBadge(arg0) {
  let items;
  let muted;
  let obj3;
  let resolvedUnreadSetting;
  let unread;
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp = closure_7();
  const tmp4 = getLayoutStylesDefault();
  useFontScale;
  let tmp9Result = null;
  if (unread) {
    let num2;
    const obj = { style: items, children: null };
    items = [tmp.unreadBadge, tmp4.unreadBadge.position, ];
    size = { width: tmp4.unreadBadge.size, height: tmp4.unreadBadge.size };
    items[2] = size;
    ({ classic: true, size: shared_components_Badge.CHANNEL_BADGE_SIZE * Math.max(tmp7, 1), badgeStyle: obj3 });
    const _Math = Math;
    shared_components_BadgeDefault;
    const tmp10 = View;
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    obj3 = { opacity: num2 };
    tmp9Result = tmp9(tmp10, obj);
  }
  return tmp9Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default memoResult;
