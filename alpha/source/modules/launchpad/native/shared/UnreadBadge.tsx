// Module ID: 17933
// Function ID: 17934
// Name: UnreadBadge
// Dependencies: [19, 17, 11758, 5967, 21, 5092, 558, 576, 17354, 5386, 9302, 2]

// Module 17933 (UnreadBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useFontScale from "useFontScale" /* 5386 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import shared_components_Badge from "shared_components/Badge" /* 9302 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11758 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 17354 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const shared_components_BadgeDefault = shared_components_Badge;

const View = react_native.View;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UnreadBadge(arg0) {
  let first;
  let items;
  let muted;
  let obj4;
  let resolvedUnreadSetting;
  let unread;
  const obj = react2;
  const cResult = obj.c(7);
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = getLayoutStylesDefault();
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  if (cResult[1] === fontScale) {
    if (cResult[2] === muted) {
      if (cResult[3] === resolvedUnreadSetting) {
        if (cResult[4] === tmp4) {
          let tmp9;
          if (cResult[5] === unread) {
            tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
    }
  }
  let tmp11Result = null;
  if (unread) {
    let num3;
    const obj2 = { style: items, children: null };
    items = [tmp4.unreadBadge, first.unreadBadge.position, ];
    size = { width: first.unreadBadge.size, height: first.unreadBadge.size };
    items[2] = size;
    ({ classic: true, size: shared_components_Badge.CHANNEL_BADGE_SIZE * Math.max(fontScale, 1), badgeStyle: obj4 });
    const _Math = Math;
    shared_components_BadgeDefault;
    const tmp12 = View;
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num3 = MUTED_OPACITY_CONTENT;
    } else {
      num3 = 1;
    }
    obj4 = { opacity: num3 };
    tmp11Result = tmp11(tmp12, obj2);
  }
  cResult[1] = fontScale;
  cResult[2] = muted;
  cResult[3] = resolvedUnreadSetting;
  cResult[4] = tmp4;
  cResult[5] = unread;
  cResult[6] = tmp11Result;
  tmp9 = tmp11Result;
}) : (function UnreadBadge(arg0) {
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
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default memoResult;
