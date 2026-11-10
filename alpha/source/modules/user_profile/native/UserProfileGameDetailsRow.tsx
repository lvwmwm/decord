// Module ID: 15248
// Function ID: 15249
// Name: UserProfileGameDetailsRow
// Dependencies: [19, 17, 21, 5142, 15233, 575, 15220, 15249, 15250, 5753, 15253, 2150, 15254, 15256, 2]

// Module 15248 (UserProfileGameDetailsRow)
import nativeDefault from "native" /* 575 */;
import StringUtils from "StringUtils" /* 2150 */;
import Text_Text from "Text/Text" /* 5753 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 15220 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 15233 */;
import useWidgetGamePressDefault from "useWidgetGamePress" /* 15249 */;
import UserProfileWidgetGameCover from "UserProfileWidgetGameCover" /* 15250 */;
import UserProfileWidgetGameTagsDefault from "UserProfileWidgetGameTags" /* 15256 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, editingCommentRow: { alignItems: "flex-start" }, details: obj3, comment: obj4, commentText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: UserProfileGameWidgetConstants.GAME_COVER_DETAILS_GAP };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function UserProfileGameDetailsRow(arg0) {
  let coverWidth;
  let disableInteraction;
  let editableCommentWidgetType;
  let editableTagsWidgetType;
  let game;
  let items1;
  let items2;
  let items3;
  let tmp7Result;
  let userId;
  ({ game, disableInteraction, editableCommentWidgetType } = arg0);
  ({ userId, coverWidth, editableTagsWidgetType } = arg0);
  const merged = Object.assign(arg0, Object.assign({ userId: 0, game: 0, coverWidth: 0, disableInteraction: 0, editableTagsWidgetType: 0, editableCommentWidgetType: 0 }));
  let closure_0;
  const tmp2 = closure_7();
  const gameName = useGameNameAndCoverImageDefault(game.gameId).gameName;
  const tmp5 = useWidgetGamePressDefault(userId, game.gameId);
  let tmp6;
  if (!disableInteraction) {
    tmp6 = tmp5;
  }
  closure_0 = tmp6;
  const items = [tmp2.row, ];
  const obj = { style: items, children: items1 };
  const tmp9 = null != editableCommentWidgetType && tmp2.editingCommentRow;
  items[1] = tmp9;
  const obj2 = { game, coverWidth, disableInteraction, onGamePress: tmp5 };
  const UserProfileWidgetGameCoverContent = UserProfileWidgetGameCover.UserProfileWidgetGameCoverContent;
  const merged1 = Object.assign(merged);
  items1 = [hasOwnProperty(UserProfileWidgetGameCoverContent, obj2), ];
  const obj3 = { style: tmp2.details, children: items2 };
  items2 = [, , ];
  const obj4 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp6,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: hasOwnProperty(Text_Text.Text, { variant: "body-md/medium", color: "text-default", lineClamp: 2, children: gameName })
  };
  items2[0] = hasOwnProperty(_false, obj4);
  if (null != editableCommentWidgetType) {
    const obj5 = { widgetType: editableCommentWidgetType, gameId: null, comment: null };
    ({ gameId: obj8.gameId, comment: obj8.comment } = game);
    tmp7Result = tmp10(tmp3(15253), obj5);
  } else {
    let trimmed;
    const isNullOrEmpty = StringUtils.isNullOrEmpty;
    StringUtils;
    if (game.comment != null) {
      trimmed = str.trim();
    }
    tmp7Result = !isNullOrEmpty(trimmed);
    isNullOrEmpty(trimmed);
    if (tmp7Result) {
      const obj6 = { style: tmp2.comment, children: items3 };
      const obj7 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      const QuoteIcon = tmp11(15254).QuoteIcon;
      items3 = [hasOwnProperty(QuoteIcon, obj7), ];
      const obj9 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 3, style: tmp2.commentText, children: game.comment };
      items3[1] = hasOwnProperty(Text_Text.Text, obj9);
      tmp7Result = tmp7(tmp8, obj6);
    }
  }
  items2[1] = tmp7Result;
  const obj17 = { tags: game.tags, gameId: game.gameId, gameName, editableTagsWidgetType };
  items2[2] = hasOwnProperty(UserProfileWidgetGameTagsDefault, obj17);
  items1[1] = metroRequire(React3, obj3);
  return metroRequire(React3, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameDetailsRow.tsx");

export default memoResult;
