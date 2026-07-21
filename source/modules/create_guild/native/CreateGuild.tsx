// Module ID: 10057
// Function ID: 77686
// Name: CreateGuild
// Dependencies: []
// Exports: default

// Module 10057 (CreateGuild)
let closure_3 = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_5 = importDefault(dependencyMap[2]);
const MarketingURLs = arg1(dependencyMap[3]).MarketingURLs;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { flex: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER };
obj.contentContainer = obj;
obj.header = { textAlign: "center" };
obj.description = { SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME: null, SCROLL_EVENT_TIMER_MS: null, cutoutBottomRightSize: null };
obj.iconUploader = { borderRadius: "/assets/design/components/Illustration/native/redesign/generated/images", backgroundColor: 160 };
obj.hint = { marginBottom: 8 };
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/create_guild/native/CreateGuild.tsx");

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
  let arg1;
  let importDefault;
  const tmp = callback2();
  const currentUser = currentUser.getCurrentUser();
  const tmp2 = null == currentUser || !currentUser.isStaff();
  let tmp3 = !tmp2;
  let obj1 = arg1(dependencyMap[7]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  arg1 = isScreenReaderEnabled;
  const ref = React.useRef(null);
  importDefault = ref;
  const items = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = isScreenReaderEnabled(closure_2[8]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  let obj = { style: tmp.flex, contentInset: { top: 0 }, contentContainerStyle: tmp.contentContainer };
  obj = {};
  obj1 = { ref, style: tmp.header };
  if (null == customTitle) {
    const intl = arg1(dependencyMap[11]).intl;
    customTitle = intl.string(arg1(dependencyMap[11]).t.XioBx6);
  }
  obj1.children = customTitle;
  const items1 = [callback(arg1(dependencyMap[10]).Text, obj1), , , , , , , ];
  const obj2 = { style: tmp.description };
  if (null == customDescription) {
    const intl2 = arg1(dependencyMap[11]).intl;
    customDescription = intl2.string(arg1(dependencyMap[11]).t./k/L/j);
  }
  obj2.children = customDescription;
  items1[1] = callback(arg1(dependencyMap[10]).Text, obj2);
  items1[2] = callback(importDefault(dependencyMap[12]), { iconBackgroundColor: tmp.contentContainer.backgroundColor, style: tmp.iconUploader, onPress: onIconPress, icon: guild.icon });
  const obj4 = { isClearable: true };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj4.label = intl3.string(arg1(dependencyMap[11]).t.dBih7e);
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
  items1[3] = callback(arg1(dependencyMap[13]).TextInput, obj4);
  if (!tmp2) {
    const obj5 = { onValueChange: onStaffOnlyChange, value: guild.staffOnly };
    const intl4 = arg1(dependencyMap[11]).intl;
    obj5.subLabel = intl4.string(arg1(dependencyMap[11]).t.edQ5va);
    tmp3 = callback(arg1(dependencyMap[14]).TableSwitchRow, obj5);
  }
  items1[4] = tmp3;
  const obj6 = { style: tmp.hint };
  const intl5 = arg1(dependencyMap[11]).intl;
  obj6.children = intl5.format(arg1(dependencyMap[11]).t.2bprXx, { guidelinesURL: MarketingURLs.GUIDELINES });
  items1[5] = callback(arg1(dependencyMap[15]).TextWithIOSLinkWorkaround, obj6);
  const obj8 = { 9223372036854775807: 40, 0: true, -9223372036854775808: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==", disabled: "" === guild.name };
  if (null == customButtonLabel) {
    const intl6 = arg1(dependencyMap[11]).intl;
    customButtonLabel = intl6.string(arg1(dependencyMap[11]).t.O0p/lS);
  }
  obj8.text = customButtonLabel;
  obj8.onPress = onCreate;
  obj8.loading = submitting;
  items1[6] = callback(arg1(dependencyMap[16]).Button, obj8);
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
        tmp27Result = callback(importDefault(dependencyMap[17]), obj9);
        const tmp27 = callback;
        const tmp30 = importDefault(dependencyMap[17]);
      }
    }
  }
  items1[7] = tmp27Result;
  obj.children = items1;
  obj.children = closure_8(arg1(dependencyMap[9]).Stack, obj);
  return callback(ScrollView, obj);
};
