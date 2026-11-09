// Module ID: 15232
// Function ID: 15233
// Name: UserProfileAddTagActionSheet
// Dependencies: [19, 502, 8825, 21, 5140, 575, 7124, 15208, 7127, 1113, 15207, 7126, 7037, 5735, 504, 15177, 7850, 6093, 12549, 8833, 5388, 7382, 5392, 6159, 2]
// Exports: default

// Module 15232 (UserProfileAddTagActionSheet)
import nativeDefault from "native" /* 575 */;
import TableRowGroup2 from "TableRowGroup" /* 7126 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7850 */;
import Constants from "Constants" /* 8825 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 15207 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 15208 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let widgetEdited;

let metroImportDefault;
let metroRequire;
let obj2;
function RadioTagSection(section) {
  let intl;
  let items;
  section = section.section;
  ({ currentTags: importDefault, onTagsChange: dependencyMap } = section);
  const tags = section.tags;
  let found = tags.find((item) => importDefault.includes(item));
  if (found == null) {
    found = none;
  }
  let obj = {
    title: section.getLabel(),
    accessibilityLabel: section.getLabel(),
    hasIcons: false,
    value: found,
    onChange: function handleChange(arg0) {
      let result;
      const tmp = dependencyMap;
      if (arg0 === none) {
        const obj2 = UserProfileGameWidgetTagMetadata;
        result = obj2.clearWidgetGameTagSection(importDefault, section.tags);
      } else {
        const obj = UserProfileGameWidgetTagMetadata;
        result = obj.toggleWidgetGameTag(importDefault, arg0);
      }
      tmp(result);
    },
    children: items
  };
  const TableRadioGroup = section(7124).TableRadioGroup;
  let obj2 = { label: intl.string(section(1113).t.PoWNfe), value: none };
  let TableRadioRow = section(7127).TableRadioRow;
  intl = section(1113).intl;
  items = [closure_6(TableRadioRow, obj2), ];
  const tags1 = section.tags;
  items[1] = tags1.map((value) => {
    const obj = section(dependencyMap[10]);
    const widgetGameTagMetadata = obj.getWidgetGameTagMetadata(value);
    let tmp3 = null;
    const tmp = section;
    const tmp2 = dependencyMap;
    if (null != widgetGameTagMetadata) {
      const obj2 = { label: widgetGameTagMetadata.getText(), value };
      const TableRadioRow = tmp(tmp2[8]).TableRadioRow;
      tmp3 = closure_1_6(TableRadioRow, obj2, value);
    }
    return tmp3;
  });
  return closure_7(TableRadioGroup, obj);
}
function CheckboxTagSection(arg0) {
  let section;
  let tags;
  ({ section, currentTags: require, onTagsChange: importDefault } = arg0);
  let obj = {
    title: section.getLabel(),
    hasIcons: false,
    children: tags.map((item) => {
      require = item;
      let obj = UserProfileGameWidgetConstants;
      const widgetGameTagMetadata = obj.getWidgetGameTagMetadata(item);
      let tmp3 = null;
      const tmp = require;
      const tmp2 = dependencyMap;
      if (null != widgetGameTagMetadata) {
        const obj2 = {
          label: widgetGameTagMetadata.getText(),
          checked: require.includes(item),
          onPress() {
              const obj = UserProfileGameWidgetTagMetadata;
              return importDefault(obj.toggleWidgetGameTag(require, item));
            }
        };
        const TableCheckboxRow = tmp(tmp2[12]).TableCheckboxRow;
        tmp3 = closure_1_6(TableCheckboxRow, obj2, item);
      }
      return tmp3;
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  tags = section.tags;
  return closure_6(TableRowGroup, obj);
}
let react = react_mod;
let closure_5 = Constants.TrackUserProfileEditActions;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const none = "none";
let closure_9 = [];
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddTagActionSheet.tsx");

export default function UserProfileAddTagActionSheet(widgetType) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let Stack;
  let closure_3;
  let entries;
  let intl;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  widgetType = widgetType.widgetType;
  const gameId = widgetType.gameId;
  let stateFromStores;
  let memo;
  const tmp = closure_10();
  const insets = gameId(stateFromStores[13])().insets;
  let obj = widgetType(stateFromStores[14]);
  const items = [memo];
  stateFromStores = obj.useStateFromStores(items, () => memo.getId());
  const tmp3 = gameId(stateFromStores[15])(stateFromStores);
  react = tmp3;
  const items1 = [tmp3, widgetType, gameId];
  memo = react.useMemo(() => {
    const found = closure_3.filter(UserProfileGameWidgetTypes.isGameWidget);
    const found1 = found.find((type) => type.type === widgetEdited);
    let tags;
    if (found1 != null) {
      const games = found1.games;
      const found2 = games.find((gameId) => gameId.gameId === gameId);
      if (found2 != null) {
        tags = found2.tags;
      }
    }
    if (tags == null) {
      tags = closure_9;
    }
    return tags;
  }, items1);
  const effect = react.useEffect(() => gameId(stateFromStores[17]), []);
  const items2 = [memo, widgetType, gameId, stateFromStores];
  const onTagsChange = react.useCallback((arr) => {
    widgetEdited = arr;
    const someResult = arr.some((item) => !memo.includes(item));
    if (someResult) {
      const tmp4 = someResult ? onTagsChange.TAG_ADDED : onTagsChange.TAG_REMOVED;
      const obj = widgetType(stateFromStores[18]);
      const result = obj.updatePendingGameTags(widgetEdited, gameId, arr);
      const obj3 = { userId: stateFromStores, action: tmp4, widgetEdited, gameId };
      const obj2 = widgetType(stateFromStores[19]);
      const result1 = obj2.trackUserProfileEditAction(obj3);
    }
  }, items2);
  let obj2 = { scrollable: true, header: closure_6(BottomSheetTitleHeader, obj3), children: closure_6(BottomSheetScrollView, obj4) };
  const BottomSheet = widgetType(stateFromStores[20]).BottomSheet;
  obj3 = { title: intl.string(widgetType(stateFromStores[9]).t.Vw1YJS) };
  BottomSheetTitleHeader = widgetType(stateFromStores[21]).BottomSheetTitleHeader;
  intl = widgetType(stateFromStores[9]).intl;
  obj4 = { style: tmp.content, contentContainerStyle: obj5, children: closure_6(Stack, obj6) };
  obj5 = { paddingBottom: gameId(stateFromStores[5]).space.PX_16 + insets.bottom };
  BottomSheetScrollView = widgetType(stateFromStores[22]).BottomSheetScrollView;
  obj6 = {
    spacing: gameId(stateFromStores[5]).space.PX_24,
    children: entries.map((item) => {
      let tmp;
      let tmp2;
      let tmp7;
      [tmp, tmp2] = item;
      if (tmp2.type === UserProfileGameWidgetTagMetadata.WidgetGameTagSectionType.RADIO) {
        const obj2 = { section: tmp2, currentTags: memo, onTagsChange };
        tmp7 = metroRequire(RadioTagSection, obj2, tmp);
      } else {
        const obj = { section: tmp2, currentTags: memo, onTagsChange };
        tmp7 = metroRequire(CheckboxTagSection, obj, tmp);
      }
      return tmp7;
    })
  };
  Stack = widgetType(stateFromStores[23]).Stack;
  entries = Object.entries(widgetType(stateFromStores[7]).WIDGET_GAME_TAG_SECTION_METADATA);
  return closure_6(BottomSheet, obj2);
};
