// Module ID: 16005
// Function ID: 122809
// Name: NewUserModal
// Dependencies: []
// Exports: default

// Module 16005 (NewUserModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const NativeModules = arg1(dependencyMap[2]).NativeModules;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
let closure_8 = obj.createNativeStackNavigator();
const tmp2 = arg1(dependencyMap[3]);
obj = {};
obj = { MIN_SWIPE_VELOCITY: null, USER_SAFETY_TOOLS_UNBLOCK: "c7e2eadc5cd55417a6c70f428f65fac7", routingFailures: "SlashIcon", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.header = obj;
let closure_9 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  let initialOnboardingStepIndex;
  let initialRouteName;
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  let callback = callback4();
  const tmp = callback2(React.useState(initialOnboardingStepIndex), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const tmp3 = callback2(React.useState(initialOnboardingStepIndex), 2);
  const first1 = tmp3[0];
  const callback2 = first1;
  const React = tmp3[1];
  let closure_5 = React.useRef(null);
  let obj = callback(closure_2[10]);
  const callback3 = obj.useAccessibilityNativeStackOptions();
  const items = [first1, first];
  callback = React.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = arg0;
    }
    const nextOnboardingStep = lib(closure_2[11]).getNextOnboardingStep(tmp, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      let continueNavigation;
      let lastShownStepIndex;
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      callback3(onboardingStepIndex);
      callback4(lastShownStepIndex);
      if (continueNavigation) {
        if (null != ref.current) {
          callback(callback3[11]).continueToNextStep(onboardingStepIndex, ref.current);
          const obj2 = callback(callback3[11]);
        }
      }
      callback2(callback3[12]).popWithKey(callback(callback3[13]).NEW_USER_MODAL_KEY);
    });
  }, items);
  let obj1 = callback(closure_2[14]);
  obj1.useNavigatorBackPressHandler(() => {
    const MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  obj = {
    screenOptions(navigation) {
      closure_5.current = navigation.navigation;
      const obj = {
        1382121521: ":",
        1016937042: "NR",
        1383948701: "<string:659620096>",
        -590737510: "pucketanje prstima",
        1654717283: "<string:5505024>",
        -11652782: "<string:1310720>",
        headerStyle: lib.header,
        headerLeft() {
          return null;
        },
        headerRight() {
          return null;
        }
      };
      let str = "card";
      if (obj2.isAndroid()) {
        str = "transparentModal";
      }
      obj.presentation = str;
      obj.animation = "slide_from_right";
      obj.headerBackVisible = false;
      const merged = Object.assign(closure_6);
      return obj;
    }
  };
  let str = "choose-avatar";
  if (null != initialRouteName) {
    str = initialRouteName;
  }
  obj.initialRouteName = str;
  obj = {
    name: "enable-notification",
    getComponent() {
      return lib(closure_2[16]).RedesignNotificationScreen;
    },
    initialParams: { onComplete: callback }
  };
  const items1 = [callback3(closure_8.Screen, obj), , , , ];
  obj1 = {
    name: "choose-avatar",
    getComponent() {
      return lib(closure_2[17]).default;
    },
    options() {
      return {
        headerRight(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["onPress"] = function onPress() {
            function handleChooseAvatarSkip(closure_7) {
              let obj = closure_7(closure_2[9]);
              obj = { onConfirm() { ... } };
              obj.openAlert("skip-avatar-upload", callback(React.lazy(() => { ... }), obj));
            }(closure_7);
          };
          return callback2(callback(closure_2[18]), obj);
        }
      };
    },
    initialParams: { onComplete: callback }
  };
  items1[1] = callback3(closure_8.Screen, obj1);
  items1[2] = callback3(closure_8.Screen, {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return lib(closure_2[19]).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete: callback }
  });
  items1[3] = callback3(closure_8.Screen, {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return lib(closure_2[20]).default;
    },
    initialParams: { onComplete: callback }
  });
  items1[4] = callback3(closure_8.Screen, {
    name: "connect-guardian",
    getComponent() {
      return lib(closure_2[21]).default;
    },
    initialParams: { onComplete: callback }
  });
  obj.children = items1;
  return callback(closure_8.Navigator, obj);
};
