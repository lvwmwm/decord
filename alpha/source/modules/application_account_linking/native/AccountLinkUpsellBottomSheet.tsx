// Module ID: 19839
// Function ID: 19840
// Name: AccountLinkUpsellBottomSheet
// Dependencies: [19, 5152, 21, 5306, 575, 7919, 7918, 7937, 5552, 5566, 6337, 5936, 1113, 3579, 10386, 2]
// Exports: AccountLinkUpsellBottomSheet

// Module 19839 (AccountLinkUpsellBottomSheet)
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, text: { textAlign: "center" }, footer: obj3 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", paddingTop: nativeDefault.space.PX_24, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkUpsellBottomSheet.tsx");

export const useAccountLinkBottomSheetStyles = styles;
export function AccountLinkUpsellBottomSheet(markAsDismissed) {
  let Button;
  let ExperimentalGameControllerLinkIcon;
  let application;
  let body;
  let intl;
  let items1;
  let obj3;
  let obj4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const onSuccess = markAsDismissed.onSuccess;
  let startAuthorization;
  ({ application, body } = markAsDismissed);
  const tmp = styles();
  startAuthorization = onSuccess(startAuthorization[5])(application).startAuthorization;
  const tmp2 = onSuccess(startAuthorization[6]);
  const analyticsLocations = tmp2(onSuccess(startAuthorization[7]).ACTION_SHEET).analyticsLocations;
  const items = [analyticsLocations, startAuthorization, markAsDismissed, onSuccess];
  const callback = analyticsLocations.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.PRIMARY);
    }
    const obj2 = { analyticsLocations, onSuccess };
    startAuthorization(obj2);
  }, items);
  let obj = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    children: items1
  };
  items1 = [body, ];
  const BottomSheet = markAsDismissed(startAuthorization[9]).BottomSheet;
  let obj2 = { style: tmp.footer, children: closure_5(Button, obj3) };
  const Stack = markAsDismissed(startAuthorization[10]).Stack;
  obj3 = { text: intl.string(onSuccess(startAuthorization[13])["2cOIOr"]), variant: "primary", icon: closure_5(ExperimentalGameControllerLinkIcon, obj4), iconPosition: "start", size: "lg", onPress: callback, grow: true };
  Button = markAsDismissed(startAuthorization[11]).Button;
  intl = markAsDismissed(startAuthorization[12]).intl;
  obj4 = { size: "sm", color: onSuccess(startAuthorization[4]).colors.WHITE };
  ExperimentalGameControllerLinkIcon = markAsDismissed(startAuthorization[14]).ExperimentalGameControllerLinkIcon;
  items1[1] = closure_5(Stack, obj2);
  return closure_6(BottomSheet, obj);
}
