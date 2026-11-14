// Module ID: 12109
// Function ID: 12110
// Name: UserProfileGameDetailsRow
// Dependencies: [19, 17, 21, 5306, 12104, 575, 5944, 12110, 5929, 12111, 12115, 2153, 12116, 12118, 12114, 2]

// Module 12109 (UserProfileGameDetailsRow)
import nativeDefault from "native" /* 575 */;
import StringUtils from "StringUtils" /* 2153 */;
import Text_Text from "Text/Text" /* 5929 */;
import useFontScale from "useFontScale" /* 5944 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 12104 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 12110 */;
import useWidgetGamePressDefault from "useWidgetGamePress" /* 12114 */;
import UserProfileWidgetGameTagsDefault from "UserProfileWidgetGameTags" /* 12118 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function InteractiveGameDetailsRow(userId) {
  let tmp2;
  userId = userId.userId;
  const merged = Object.assign(userId, Object.assign({ userId: 0 }));
  const obj = { onGamePress: tmp2 };
  tmp2 = useWidgetGamePressDefault(userId, merged.game.gameId);
  const merged1 = Object.assign(merged);
  return hasOwnProperty(closure_8, obj);
}
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, editingCommentRow: { alignItems: "flex-start" }, details: obj3, comment: obj4, commentText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: UserProfileGameWidgetConstants.GAME_COVER_DETAILS_GAP };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
let closure_8 = react.memo(function UserProfileGameDetailsRowContent(coverWidth) {
  let compact;
  let disableInteraction;
  let editableCommentWidgetType;
  let game;
  let items1;
  let items2;
  let items3;
  let onGamePress;
  let tmp9Result4;
  ({ game, compact } = coverWidth);
  coverWidth = coverWidth.coverWidth;
  if (compact === undefined) {
    compact = false;
  }
  ({ disableInteraction, onGamePress, editableCommentWidgetType } = coverWidth);
  const editableTagsWidgetType = coverWidth.editableTagsWidgetType;
  const merged = Object.assign(coverWidth, Object.assign({ game: 0, coverWidth: 0, compact: 0, disableInteraction: 0, onGamePress: 0, editableTagsWidgetType: 0, editableCommentWidgetType: 0 }));
  onGamePress = undefined;
  const tmp2 = closure_7();
  const gameName = useGameNameAndCoverImageDefault(game.gameId).gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = onGamePress;
  }
  onGamePress = tmp5;
  useFontScale;
  let num = 3;
  if (compact) {
    let num3 = 2;
    if (tmp8 > 1.5) {
      num3 = 1;
    }
    num = num3;
  }
  let num4 = 2;
  const Text = tmp6(5929).Text;
  if (compact) {
    num4 = 1;
  }
  const tmp9Result = hasOwnProperty(Text, { variant: "body-md/medium", color: "text-default", lineClamp: num4, children: gameName });
  const items = [tmp2.row, ];
  const obj = { style: items, children: items1 };
  const tmp13 = null != editableCommentWidgetType && tmp2.editingCommentRow;
  items[1] = tmp13;
  const obj2 = { game, coverWidth, disableInteraction, onGamePress };
  const UserProfileWidgetGameCoverContent = tmp6(12111).UserProfileWidgetGameCoverContent;
  const merged1 = Object.assign(merged);
  items1 = [hasOwnProperty(UserProfileWidgetGameCoverContent, obj2), ];
  let tmp9Result3 = tmp9Result;
  const obj3 = { style: tmp2.details, children: items2 };
  if (null != tmp5) {
    const obj4 = {
      onPress() {
          return onGamePress();
        },
      accessibilityRole: "button",
      accessibilityLabel: gameName,
      children: tmp9Result
    };
    tmp9Result3 = tmp9(_false, obj4);
  }
  items2 = [tmp9Result3, , ];
  if (null != editableCommentWidgetType) {
    const obj5 = { widgetType: editableCommentWidgetType, gameId: null, comment: null };
    ({ gameId: obj8.gameId, comment: obj8.comment } = game);
    tmp9Result4 = tmp9(tmp3(12115), obj5);
  } else {
    let trimmed;
    const isNullOrEmpty = StringUtils.isNullOrEmpty;
    StringUtils;
    if (game.comment != null) {
      trimmed = str.trim();
    }
    tmp9Result4 = !isNullOrEmpty(trimmed);
    isNullOrEmpty(trimmed);
    if (tmp9Result4) {
      const obj6 = { style: tmp2.comment, children: items3 };
      const obj7 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      const QuoteIcon = tmp6(12116).QuoteIcon;
      items3 = [hasOwnProperty(QuoteIcon, obj7), ];
      const obj9 = { variant: "body-sm/normal", color: "text-muted", lineClamp: num, style: tmp2.commentText, children: game.comment };
      items3[1] = hasOwnProperty(Text_Text.Text, obj9);
      tmp9Result4 = tmp11(tmp12, obj6);
    }
  }
  items2[1] = tmp9Result4;
  const obj17 = { tags: game.tags, gameId: game.gameId, gameName, editableTagsWidgetType, singleLineClamp: compact };
  items2[2] = hasOwnProperty(UserProfileWidgetGameTagsDefault, obj17);
  items1[1] = metroRequire(React3, obj3);
  return metroRequire(React3, obj);
});
const memoResult = react.memo(function UserProfileGameDetailsRow(disableInteraction) {
  let tmpResult;
  if (disableInteraction.disableInteraction) {
    const obj2 = {};
    const merged = Object.assign(disableInteraction);
    tmpResult = tmp(closure_8, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(disableInteraction);
    tmpResult = tmp(InteractiveGameDetailsRow, obj);
  }
  return tmpResult;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameDetailsRow.tsx");

export default memoResult;
