// Module ID: 19772
// Function ID: 19773
// Name: EnableCommunitySharedNavigation
// Dependencies: [19, 17, 9056, 1072, 21, 5009, 504, 1498, 5269, 6016, 19770, 7202, 7286, 5629, 1114, 2]
// Exports: EnableCommunityModalScreen

// Module 19772 (EnableCommunitySharedNavigation)
import Constants from "Constants" /* 1072 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 19770 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1, height: "100%" }, modal: { height: "100%", flex: 1, justifyContent: "space-between" }, button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 } });
const EnableCommunityModalSteps = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx");

export { EnableCommunityModalSteps };
export function EnableCommunityModalScreen(arg0) {
  let Button;
  let SafeAreaPaddingView;
  let buttonText;
  let children;
  let closure_7;
  let disableNextStep;
  let headerRef;
  let items3;
  let obj3;
  let obj6;
  let tmp12Result;
  let tmp14;
  ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
  let closure_5;
  let isScreenReaderEnabled;
  GuildFeatures = undefined;
  ({ disableNextStep, children } = arg0);
  let tmp = closure_10();
  let tmp2 = require;
  let obj = require("get initialized");
  const items = [isScreenReaderEnabled];
  const guild = obj.useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  const tmp2Result = tmp2(headerRef[7]);
  closure_5 = tmp2Result.useNavigation();
  const tmp2Result2 = tmp2(headerRef[8]);
  isScreenReaderEnabled = tmp2Result2.useIsScreenReaderEnabled();
  GuildFeatures = tmp7;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = guild.useEffect(() => {
    let closure_0;
    let ref;
    const tmp = isScreenReaderEnabled;
    if (tmp) {
      const tmp2 = closure_7;
      if (tmp2) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            const obj = require("react-native");
            const obj2 = { ref };
            return obj.setAccessibilityFocus(obj2);
          }, 100);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items1);
  const items2 = [hasItem];
  const effect1 = guild.useEffect(() => {
    const tmp = hasItem;
    if (tmp) {
      const obj = EnableCommunityModalActionCreatorsDefault;
      obj.close();
    }
  }, items2);
  if (null == guild) {
    tmp12Result = closure_8(tmp2(tmp3[11]).SceneLoadingIndicator, {});
  } else {
    let obj2 = { style: tmp.container, children: tmp14(SafeAreaPaddingView, obj3) };
    obj3 = { bottom: true, style: tmp.modal, children: items3 };
    const obj4 = { style: { flexGrow: 1 }, children };
    SafeAreaPaddingView = tmp2(tmp3[12]).SafeAreaPaddingView;
    items3 = [closure_8(hasItem, obj4), ];
    const obj5 = { style: tmp.button, children: closure_8(Button, obj6) };
    Button = tmp2(tmp3[13]).Button;
    const tmp13 = closure_5;
    tmp14 = closure_9;
    const tmp15 = hasItem;
    if (buttonText == null) {
      const intl = tmp2(tmp3[14]).intl;
      buttonText = intl.string(tmp2(tmp3[14]).t.PDTjLN);
    }
    obj6 = {
      variant: "primary",
      grow: true,
      text: buttonText,
      onPress: function handleNext() {
          if (null != guild) {
            if (obj.STEP_1 === importDefault) {
              closure_5.push(obj.STEP_2);
            } else if (obj.STEP_2 === tmp2) {
              closure_5.push(obj.STEP_3);
            } else if (require != null) {
              tmp4(tmp);
            }
          }
        },
      disabled: disableNextStep
    };
    items3[1] = closure_8(tmp15, obj5);
    tmp12Result = tmp12(tmp13, obj2);
  }
  return tmp12Result;
}
