// Module ID: 14903
// Function ID: 14904
// Name: UserProfileNote
// Dependencies: [19, 21, 8761, 14904, 6975, 5624, 1113, 5258, 14906, 14910, 2]
// Exports: default

// Module 14903 (UserProfileNote)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import openEditNoteModalDefault from "openEditNoteModal" /* 14906 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default function UserProfileNote(userId) {
  let intl;
  let stringResult;
  userId = userId.userId;
  const onBack = userId.onBack;
  let trackUserProfileAction;
  let obj = userId(trackUserProfileAction[2]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const note = onBack(trackUserProfileAction[3])(userId).note;
  const TableRow = tmp(tmp2[4]).TableRow;
  ({ variant: "text-sm/semibold", color: "text-default", children: intl.string(userId(trackUserProfileAction[6]).t["mQKv+v"]) });
  const Text = tmp(tmp2[5]).Text;
  intl = tmp(tmp2[6]).intl;
  let tmp5;
  if (null != note && "" !== note) {
    tmp5 = note;
  }
  const intl2 = tmp(tmp2[6]).intl;
  const string = intl2.string;
  const t = tmp(tmp2[6]).t;
  if (null != note && "" !== note) {
    stringResult = string(t["gs+qcM"]);
  } else {
    stringResult = string(t["1ZZtts"]);
  }
  let tmp4Result;
  if (!(null != note && "" !== note)) {
    const obj4 = { IconComponent: userId(trackUserProfileAction[9]).PaperPlusIcon };
    const Icon = tmp(tmp2[4]).TableRow.Icon;
    tmp4Result = tmp4(Icon, obj4);
  }
  return <TableRow label={null} subLabel={tmp5} accessibilityHint={stringResult} onPress={function handlePress() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = {
      userId,
      onBack,
      onSave() {
        return trackUserProfileAction({ action: "SET_NOTE" });
      }
    };
    openEditNoteModalDefault(obj2);
  }} trailing={tmp4Result} arrow={null != note && "" !== note} start end />;
};
