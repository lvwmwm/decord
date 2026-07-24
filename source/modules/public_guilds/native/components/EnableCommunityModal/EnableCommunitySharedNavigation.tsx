// Module ID: 16405
// Function ID: 128022
// Name: EnableCommunityModalSteps
// Dependencies: [31, 27, 8483, 653, 33, 4130, 566, 1456, 4528, 4539, 686, 16403, 5583, 5121, 4543, 1212, 2]
// Exports: EnableCommunityModalScreen

// Module 16405 (EnableCommunityModalSteps)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, height: "100%" }, modal: { height: "100%", flex: 1, justifyContent: "space-between" }, button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 } });
_createForOfIteratorHelperLoose = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx");

export const EnableCommunityModalSteps = _createForOfIteratorHelperLoose;
export const EnableCommunityModalScreen = function EnableCommunityModalScreen(arg0) {
  let buttonText;
  let children;
  let disableNextStep;
  let headerRef;
  let importDefault;
  let require;
  ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
  let hasItem;
  let closure_5;
  let isScreenReaderEnabled;
  let GuildFeatures;
  ({ disableNextStep, children } = arg0);
  const tmp = callback2();
  let obj = require(headerRef[6]);
  const items = [isScreenReaderEnabled];
  const guild = obj.useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  hasItem = undefined;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  let obj1 = require(headerRef[7]);
  closure_5 = obj1.useNavigation();
  let obj2 = require(headerRef[8]);
  isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  GuildFeatures = tmp5;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = guild.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (c7) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let obj = outer2_0(headerRef[9]);
            obj = { ref: outer1_2 };
            return obj.setAccessibilityFocus(obj);
          }, 100);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items1);
  const items2 = [hasItem];
  const effect1 = guild.useEffect(() => {
    if (hasItem) {
      outer1_1(headerRef[10]).wait(() => outer2_1(headerRef[11]).close());
      const obj = outer1_1(headerRef[10]);
    }
  }, items2);
  if (null == guild) {
    let tmp14Result = callback(require(headerRef[12]).SceneLoadingIndicator, {});
  } else {
    obj = { style: tmp.container };
    obj = { bottom: true, style: tmp.modal };
    obj1 = {};
    obj2 = { flexGrow: 1 };
    obj1.style = obj2;
    obj1.children = children;
    const items3 = [callback(hasItem, obj1), ];
    const obj3 = { style: tmp.button };
    const obj4 = { variant: "primary", grow: true };
    if (null == buttonText) {
      const intl = require(headerRef[15]).intl;
      buttonText = intl.string(require(headerRef[15]).t.PDTjLN);
    }
    obj4.text = buttonText;
    obj4.onPress = function onPress() {
      if (null != guild) {
        if (outer1_11.STEP_1 === closure_1) {
          arr = arr.push(outer1_11.STEP_2);
        } else if (outer1_11.STEP_2 === tmp) {
          arr = arr.push(outer1_11.STEP_3);
        } else if (null != callback) {
          callback(guild);
        }
      }
    };
    obj4.disabled = disableNextStep;
    obj3.children = callback(require(headerRef[14]).Button, obj4);
    items3[1] = callback(hasItem, obj3);
    obj.children = items3;
    obj.children = closure_9(require(headerRef[13]).SafeAreaPaddingView, obj);
    tmp14Result = tmp14(closure_5, obj);
    const tmp15 = closure_5;
    const tmp16 = closure_9;
    const tmp19 = hasItem;
  }
  return tmp14Result;
};
