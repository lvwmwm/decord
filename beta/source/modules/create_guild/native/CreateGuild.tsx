// Module ID: 11817
// Function ID: 11818
// Name: CreateGuild
// Dependencies: [19, 17, 1372, 1074, 21, 4836, 576, 5266, 5275, 5279, 4832, 1115, 11276, 6024, 6621, 5281, 6360, 2]
// Exports: default

// Module 11817 (CreateGuild)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import react_native2 from "react-native" /* 5275 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
const ScrollView = react_native.ScrollView;
const MarketingURLs = Constants.MarketingURLs;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { flex: { flex: 1 }, contentContainer: obj2, header: { textAlign: "center" }, description: { lineHeight: 18, textAlign: "center", marginBottom: 24 }, iconUploader: { alignSelf: "center", marginBottom: 4 }, hint: { marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingBottom: 16 };
let closure_9 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/create_guild/native/CreateGuild.tsx");

export default function CreateGuild(arg0) {
  let Stack;
  let autoFocus;
  let customButtonLabel;
  let customDescription;
  let customTitle;
  let error;
  let firstFieldErrorMessage;
  let guild;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj9;
  let onCreate;
  let onIconPress;
  let onNameChange;
  let onStaffOnlyChange;
  let submitting;
  let tmp11;
  ({ guild, error, customTitle, customDescription, customButtonLabel, autoFocus } = arg0);
  ({ onIconPress, onNameChange, onStaffOnlyChange, onCreate, submitting } = arg0);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = closure_9();
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  const tmp3 = !isStaffResult;
  let obj2 = isScreenReaderEnabled(5266);
  isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  ref = react.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native2;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items);
  let obj = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: tmp11(Stack, { children: items1 }) };
  Stack = isScreenReaderEnabled(5279).Stack;
  const obj3 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: customTitle };
  const Text = isScreenReaderEnabled(4832).Text;
  const tmp10 = ScrollView;
  tmp11 = closure_8;
  if (customTitle == null) {
    const intl = tmp4(1115).intl;
    customTitle = intl.string(tmp4(1115).t.XioBx6);
  }
  items1 = [closure_7(Text, obj3), , , , , , , ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: customDescription };
  const Text2 = tmp4(4832).Text;
  if (customDescription == null) {
    const intl2 = tmp4(1115).intl;
    customDescription = intl2.string(tmp4(1115).t["/k/L/j"]);
  }
  items1[1] = closure_7(Text2, obj4);
  const obj5 = { iconBackgroundColor: tmp.contentContainer.backgroundColor, style: tmp.iconUploader, onPress: onIconPress, icon: guild.icon };
  items1[2] = closure_7(ref(11276), obj5);
  const obj6 = { clearable: true, label: intl3.string(isScreenReaderEnabled(1115).t.dBih7e), errorMessage: firstFieldErrorMessage, value: guild.name, onChange: onNameChange, autoFocus, autoCorrect: false, returnKeyType: "done" };
  const TextInput = tmp4(6024).TextInput;
  intl3 = tmp4(1115).intl;
  firstFieldErrorMessage = undefined;
  const tmp12 = ref;
  if (error != null) {
    firstFieldErrorMessage = error.getFirstFieldErrorMessage("name");
  }
  if (autoFocus) {
    autoFocus = !isScreenReaderEnabled;
  }
  let tmp9Result = !tmp3;
  items1[3] = closure_7(TextInput, obj6);
  if (tmp9Result) {
    const obj7 = { onValueChange: onStaffOnlyChange, value: guild.staffOnly, start: true, end: true, label: "Staff Only", subLabel: intl4.string(isScreenReaderEnabled(1115).t.edQ5va) };
    const TableSwitchRow = tmp4(6621).TableSwitchRow;
    intl4 = tmp4(1115).intl;
    tmp9Result = tmp9(TableSwitchRow, obj7);
  }
  items1[4] = tmp9Result;
  const obj8 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: intl5.format(isScreenReaderEnabled(1115).t["2bprXx"], obj9) };
  const Text3 = tmp4(4832).Text;
  intl5 = tmp4(1115).intl;
  obj9 = { guidelinesURL: MarketingURLs.GUIDELINES };
  items1[5] = closure_7(Text3, obj8);
  const obj10 = { disabled: "" === guild.name, size: "md", grow: true, text: customButtonLabel, onPress: onCreate, loading: submitting };
  const Button = tmp4(5281).Button;
  if (customButtonLabel == null) {
    const intl6 = tmp4(1115).intl;
    customButtonLabel = intl6.string(tmp4(1115).t["O0p/lS"]);
  }
  items1[6] = closure_7(Button, obj10);
  let firstFieldErrorMessage1;
  if (error != null) {
    firstFieldErrorMessage1 = error.getFirstFieldErrorMessage("name");
  }
  let tmp9Result2 = null;
  if (null == firstFieldErrorMessage1) {
    let message;
    if (error != null) {
      message = error.message;
    }
    tmp9Result2 = null;
    if (null != message) {
      let message1;
      if (error != null) {
        message1 = error.message;
      }
      tmp9Result2 = null;
      if ("" !== message1) {
        let message2;
        const tmp12Result = tmp12(6360);
        if (error != null) {
          message2 = error.message;
        }
        const obj11 = { children: message2 };
        tmp9Result2 = tmp9(tmp12Result, obj11);
      }
    }
  }
  items1[7] = tmp9Result2;
  return closure_7(tmp10, obj);
};
