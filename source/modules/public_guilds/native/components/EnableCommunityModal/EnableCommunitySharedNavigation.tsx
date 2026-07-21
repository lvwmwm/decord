// Module ID: 16233
// Function ID: 125482
// Name: EnableCommunityModalSteps
// Dependencies: []
// Exports: EnableCommunityModalScreen

// Module 16233 (EnableCommunityModalSteps)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
let closure_10 = obj.createStyles({ container: { "Null": false, "Null": false }, modal: {}, button: { padding: "Array", borderRadius: "isArray", borderWidth: "constructor", borderLeftWidth: true } });
obj = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx");

export const EnableCommunityModalSteps = obj;
export const EnableCommunityModalScreen = function EnableCommunityModalScreen(arg0) {
  let buttonText;
  let children;
  let disableNextStep;
  let headerRef;
  ({ onSuccess: closure_0, buttonText, currentStep: closure_1, headerRef } = arg0);
  const dependencyMap = headerRef;
  let hasItem;
  let closure_5;
  let closure_6;
  let GuildFeatures;
  ({ disableNextStep, children } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_6];
  const guild = obj.useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  const React = guild;
  hasItem = undefined;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  let obj1 = arg1(dependencyMap[7]);
  closure_5 = obj1.useNavigation();
  let obj2 = arg1(dependencyMap[8]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  closure_6 = isScreenReaderEnabled;
  GuildFeatures = tmp5;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = React.useEffect(() => {
    if (isScreenReaderEnabled) {
      if (tmp5) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let obj = callback(closure_2[9]);
            obj = { ref: closure_2 };
            return obj.setAccessibilityFocus(obj);
          }, 100);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items1);
  const items2 = [hasItem];
  const effect1 = React.useEffect(() => {
    if (hasItem) {
      callback2(headerRef[10]).wait(() => callback(closure_2[11]).close());
      const obj = callback2(headerRef[10]);
    }
  }, items2);
  if (null == guild) {
    let tmp14Result = callback(arg1(dependencyMap[12]).SceneLoadingIndicator, {});
  } else {
    obj = { style: tmp.container };
    obj = { bottom: true, style: tmp.modal };
    obj1 = {};
    obj2 = { flexGrow: 1 };
    obj1.style = obj2;
    obj1.children = children;
    const items3 = [callback(hasItem, obj1), ];
    const obj3 = { style: tmp.button };
    const obj4 = { "Null": null, "Null": null };
    if (null == buttonText) {
      const intl = arg1(dependencyMap[15]).intl;
      buttonText = intl.string(arg1(dependencyMap[15]).t.PDTjLN);
    }
    obj4.text = buttonText;
    obj4.onPress = function onPress() {
      if (null != guild) {
        if (closure_11.STEP_1 === closure_1) {
          let arr = arr.push(closure_11.STEP_2);
        } else if (closure_11.STEP_2 === tmp) {
          arr = arr.push(closure_11.STEP_3);
        } else if (null != callback) {
          callback(guild);
        }
      }
    };
    obj4.disabled = disableNextStep;
    obj3.children = callback(arg1(dependencyMap[14]).Button, obj4);
    items3[1] = callback(hasItem, obj3);
    obj.children = items3;
    obj.children = closure_9(arg1(dependencyMap[13]).SafeAreaPaddingView, obj);
    tmp14Result = tmp14(closure_5, obj);
    const tmp15 = closure_5;
    const tmp16 = closure_9;
    const tmp19 = hasItem;
  }
  return tmp14Result;
};
