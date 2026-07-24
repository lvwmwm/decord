// Module ID: 10098
// Function ID: 77933
// Name: CreateGuild
// Dependencies: [31, 27, 1849, 653, 33, 4130, 689, 4528, 4539, 4541, 4126, 1212, 10099, 7574, 5502, 4543, 9043, 2]
// Exports: default

// Module 10098 (CreateGuild)
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MarketingURLs } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingBottom: 16 };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { textAlign: "center" };
_createForOfIteratorHelperLoose.description = { lineHeight: 18, textAlign: "center", marginBottom: 24 };
_createForOfIteratorHelperLoose.iconUploader = { alignSelf: "center", marginBottom: 4 };
_createForOfIteratorHelperLoose.hint = { marginBottom: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/create_guild/native/CreateGuild.tsx");

export default function CreateGuild(arg0) {
  let autoFocus;
  let customButtonLabel;
  let customDescription;
  let customTitle;
  let error;
  let guild;
  let onCreate;
  let onIconPress;
  let onNameChange;
  let onStaffOnlyChange;
  let submitting;
  ({ guild, error, customTitle, customDescription, customButtonLabel, autoFocus } = arg0);
  ({ onIconPress, onNameChange, onStaffOnlyChange, onCreate, submitting } = arg0);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = _createForOfIteratorHelperLoose();
  currentUser = currentUser.getCurrentUser();
  const tmp2 = null == currentUser || !currentUser.isStaff();
  let tmp3 = !tmp2;
  let obj1 = isScreenReaderEnabled(4528);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = React.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = isScreenReaderEnabled(outer1_2[8]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  let obj = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer };
  obj = {};
  obj1 = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  if (null == customTitle) {
    const intl = isScreenReaderEnabled(1212).intl;
    customTitle = intl.string(isScreenReaderEnabled(1212).t.XioBx6);
  }
  obj1.children = customTitle;
  const items1 = [callback(isScreenReaderEnabled(4126).Text, obj1), , , , , , , ];
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  if (null == customDescription) {
    const intl2 = isScreenReaderEnabled(1212).intl;
    customDescription = intl2.string(isScreenReaderEnabled(1212).t["/k/L/j"]);
  }
  obj2.children = customDescription;
  items1[1] = callback(isScreenReaderEnabled(4126).Text, obj2);
  items1[2] = callback(ref(10099), { iconBackgroundColor: tmp.contentContainer.backgroundColor, style: tmp.iconUploader, onPress: onIconPress, icon: guild.icon });
  const obj4 = { isClearable: true };
  const intl3 = isScreenReaderEnabled(1212).intl;
  obj4.label = intl3.string(isScreenReaderEnabled(1212).t.dBih7e);
  let firstFieldErrorMessage;
  if (null != error) {
    firstFieldErrorMessage = error.getFirstFieldErrorMessage("name");
  }
  obj4.errorMessage = firstFieldErrorMessage;
  obj4.value = guild.name;
  obj4.onChange = onNameChange;
  if (autoFocus) {
    autoFocus = !isScreenReaderEnabled;
  }
  obj4.autoFocus = autoFocus;
  obj4.autoCorrect = false;
  obj4.returnKeyType = "done";
  items1[3] = callback(isScreenReaderEnabled(7574).TextInput, obj4);
  if (!tmp2) {
    const obj5 = { onValueChange: onStaffOnlyChange, value: guild.staffOnly, start: true, end: true, label: "Staff Only" };
    const intl4 = isScreenReaderEnabled(1212).intl;
    obj5.subLabel = intl4.string(isScreenReaderEnabled(1212).t.edQ5va);
    tmp3 = callback(isScreenReaderEnabled(5502).TableSwitchRow, obj5);
  }
  items1[4] = tmp3;
  const obj6 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted" };
  const intl5 = isScreenReaderEnabled(1212).intl;
  obj6.children = intl5.format(isScreenReaderEnabled(1212).t["2bprXx"], { guidelinesURL: MarketingURLs.GUIDELINES });
  items1[5] = callback(isScreenReaderEnabled(4126).Text, obj6);
  const obj8 = { disabled: "" === guild.name, size: "md", grow: true };
  if (null == customButtonLabel) {
    const intl6 = isScreenReaderEnabled(1212).intl;
    customButtonLabel = intl6.string(isScreenReaderEnabled(1212).t["O0p/lS"]);
  }
  obj8.text = customButtonLabel;
  obj8.onPress = onCreate;
  obj8.loading = submitting;
  items1[6] = callback(isScreenReaderEnabled(4543).Button, obj8);
  let firstFieldErrorMessage1;
  if (null != error) {
    firstFieldErrorMessage1 = error.getFirstFieldErrorMessage("name");
  }
  let tmp27Result = null;
  if (null == firstFieldErrorMessage1) {
    let message;
    if (null != error) {
      message = error.message;
    }
    tmp27Result = null;
    if (null != message) {
      let message1;
      if (null != error) {
        message1 = error.message;
      }
      tmp27Result = null;
      if ("" !== message1) {
        const obj9 = {};
        let message2;
        if (null != error) {
          message2 = error.message;
        }
        obj9.children = message2;
        tmp27Result = callback(ref(9043), obj9);
        const tmp27 = callback;
        const tmp30 = ref(9043);
      }
    }
  }
  items1[7] = tmp27Result;
  obj.children = items1;
  obj.children = closure_8(isScreenReaderEnabled(4541).Stack, obj);
  return callback(ScrollView, obj);
};
