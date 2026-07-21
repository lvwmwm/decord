// Module ID: 14337
// Function ID: 108245
// Name: useScreens
// Dependencies: []
// Exports: default

// Module 14337 (useScreens)
function useScreens() {
  return arg1(dependencyMap[6]).useNavigatorScreens(() => {
    let obj = {};
    obj = {};
    let obj2 = callback(closure_2[7]);
    obj.headerLeft = obj2.getHeaderCloseButton(callback2(closure_2[8]).pop);
    obj.headerRight = function headerRight() {
      const obj = {};
      const intl = callback(closure_2[10]).intl;
      obj.text = intl.string(callback(closure_2[10]).t.5Wxrcd);
      obj.onPress = callback2(closure_2[8]).pop;
      return callback3(callback(closure_2[9]).HeaderActionButton, obj);
    };
    obj.headerTitle = function headerTitle() {
      return callback3(callback(closure_2[7]).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
    };
    obj.render = function render(arg0, arg1) {
      const obj = {
        string: "<string:718164314>",
        track: "<string:17244737>",
        body: "<string:2885701888>",
        name: "<string:20401986>",
        padding: "<string:17262336>",
        format: "<string:3040825600>",
        colors: "<string:27702851>",
        onAction() {
          return arg1.push(constants.WHO_DAT);
        },
        onSecondaryAction: callback2(closure_2[8]).pop
      };
      return callback3(closure_14, obj);
    };
    obj[constants.START] = obj;
    obj = { headerLeft: callback(closure_2[7]).getHeaderBackButton() };
    const obj5 = callback(closure_2[7]);
    obj.headerRight = callback(closure_2[7]).getHeaderCloseButton(callback2(closure_2[8]).pop);
    obj.headerTitle = function headerTitle() {
      return callback3(callback(closure_2[7]).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj.render = function render(arg0, arg1) {
      const obj = {
        challenge: "Triple Click",
        mfaChallenge: "o.o.o",
        finish: "tripleClick",
        onAction() {
          return arg1.push(constants.EVERYBODY);
        },
        children: callback3(arg1(closure_2[11]).TextInput, { placeholder: "My friend Jake" })
      };
      return callback3(closure_14, obj);
    };
    obj[constants.WHO_DAT] = obj;
    const obj1 = {};
    const obj6 = callback(closure_2[7]);
    obj1.headerLeft = callback(closure_2[7]).getHeaderBackButton();
    const obj8 = callback(closure_2[7]);
    obj1.headerRight = callback(closure_2[7]).getHeaderCloseButton(callback2(closure_2[8]).pop);
    obj1.headerTitle = function headerTitle() {
      return callback3(callback(closure_2[7]).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj1.render = function render(arg0, arg1) {
      return callback3(closure_15, {
        onAction() {
          return arg1.push(constants.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj1;
    obj2 = {};
    const obj9 = callback(closure_2[7]);
    obj2.headerLeft = callback(closure_2[7]).getHeaderBackButton();
    const obj11 = callback(closure_2[7]);
    obj2.headerRight = callback(closure_2[7]).getHeaderCloseButton(callback2(closure_2[8]).pop);
    obj2.headerTitle = function headerTitle() {
      return callback3(callback(closure_2[7]).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj2.render = function render(arg0, arg1) {
      const obj = {
        "Bool(true)": "Notification",
        "Bool(true)": "o-O=o",
        "Bool(true)": "notification",
        "Bool(true)": "text-lg/bold",
        "Bool(true)": "Semantic Types",
        onAction() {
          return arg1.push(constants.LIMIT);
        }
      };
      return callback3(closure_14, obj);
    };
    obj[constants.JOCKIN] = obj2;
    const obj3 = {};
    const obj12 = callback(closure_2[7]);
    obj3.headerLeft = callback(closure_2[7]).getHeaderBackButton();
    obj3.headerRight = function headerRight() {
      return callback3(callback(closure_2[7]).HeaderSubmittingIndicator, {});
    };
    obj3.headerTitle = function headerTitle() {
      return callback3(callback(closure_2[7]).NavigatorHeader, { title: constants.LIMIT });
    };
    obj3.render = function render() {
      return callback3(closure_14, {
        onAction: callback2(closure_2[8]).pop,
        onSecondaryAction() {
          return callback(closure_2[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        }
      });
    };
    obj[constants.LIMIT] = obj3;
    return obj;
  }, []);
}
function DemoModal() {
  const tmp = useScreens();
  return callback2(arg1(dependencyMap[13]).Modal, { screens: useScreens(), initialRouteName: constants.START });
}
function DemoStepModal() {
  const memo = React.useMemo(() => {
    const items = [constants.START, constants.WHO_DAT, constants.EVERYBODY, constants.JOCKIN, constants.LIMIT];
    return items;
  }, []);
  const tmp = useScreens();
  return callback2(arg1(dependencyMap[14]).StepModal, { screens: useScreens(), steps: memo, initialRouteName: constants.START });
}
function DemoScreen(arg0) {
  let action;
  let children;
  let disclaimer;
  let emoji;
  let footer;
  let onAction;
  let onSecondaryAction;
  let secondaryAction;
  let title;
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = callback4();
  let obj = {};
  obj = {};
  let tmp4 = null != emoji;
  if (tmp4) {
    obj = { style: tmp.emojiContainer };
    const obj1 = { style: tmp.emoji, children: emoji };
    obj.children = callback2(arg1(dependencyMap[17]).Text, obj1);
    tmp4 = callback2(closure_5, obj);
  }
  const items = [tmp4, callback2(arg1(dependencyMap[17]).Text, { style: tmp.title, children: title }), children];
  obj.children = items;
  const items1 = [closure_8(arg1(dependencyMap[16]).ModalContent, obj), ];
  if (null == footer) {
    const obj3 = {};
    let tmp13 = null != disclaimer;
    if (tmp13) {
      const obj4 = { children: disclaimer };
      tmp13 = callback2(arg1(dependencyMap[19]).ModalDisclaimer, obj4);
    }
    const items2 = [tmp13, , ];
    let tmp14 = null != action;
    if (tmp14) {
      const obj5 = { variant: "primary", text: action, onPress: onAction };
      tmp14 = callback2(arg1(dependencyMap[20]).ModalActionButton, obj5);
    }
    items2[1] = tmp14;
    let tmp18 = null != secondaryAction;
    if (tmp18) {
      const obj6 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
      tmp18 = callback2(arg1(dependencyMap[20]).ModalActionButton, obj6);
    }
    items2[2] = tmp18;
    obj3.children = items2;
    footer = closure_8(arg1(dependencyMap[18]).ModalFooter, obj3);
    const tmp22 = closure_8;
  }
  items1[1] = footer;
  obj.children = items1;
  return closure_8(arg1(dependencyMap[15]).ModalScreen, obj);
}
function SwitchesScreen(onAction) {
  const tmp = callback4();
  const parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  const arg1 = parts;
  const tmp2 = callback(React.useState(parts.map(() => false)), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  let obj = {};
  obj = { isVisible: first.some((arg0) => arg0), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction.onAction };
  obj.footer = callback2(arg1(dependencyMap[21]).ModalFloatingAction, obj);
  obj = { style: tmp.tableRows };
  const obj1 = {
    hasIcons: false,
    children: first.map((value) => {
      const parts = arg1;
      return callback(parts(closure_2[23]).TableSwitchRow, {
        label: parts[arg1],
        value,
        onValueChange(arg0) {
          const arg1 = arg0;
          callback((arr) => arr.map((arg0, arg1) => {
            let tmp = arg0;
            if (arg1 === closure_0) {
              tmp = closure_0;
            }
            return tmp;
          }));
        }
      }, arg1);
    })
  };
  obj.children = callback2(arg1(dependencyMap[22]).TableRowGroup, obj1);
  const items = [callback2(closure_5, obj), callback2(arg1(dependencyMap[21]).ModalFloatingActionSpacer, {})];
  obj.children = items;
  return callback3(DemoScreen, obj);
}
function openDemoModal() {
  let arr = importDefault(dependencyMap[8]);
  arr = arr.push(DemoModal);
}
function openDemoStepModal() {
  let arr = importDefault(dependencyMap[8]);
  arr = arr.push(DemoStepModal);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { -9223372036854775808: null, -9223372036854775808: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", 9223372036854775807: 6, 0: 188 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.screen = obj;
const obj1 = { keyboardType: -1758369715761618200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, autoCapitalize: 292062.0791015852, autoCorrect: false, defaultValue: false, placeholder: false, dateInput: false, GUILD_SETTINGS_SET_SECTION: false, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.emojiContainer = obj1;
obj.emoji = {};
obj.title = { marginBottom: 16 };
obj.tableRows = { width: "100%" };
let closure_9 = obj.createStyles(obj);
let closure_10 = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default function UserSettingsDesignSystemModal() {
  let obj = {};
  obj = { style: callback4().container };
  obj = { onPress: openDemoModal, text: "Show Modal" };
  const items = [callback2(arg1(dependencyMap[24]).Button, obj), callback2(arg1(dependencyMap[24]).Button, { onPress: openDemoStepModal, text: "Show Stepped Modal" })];
  obj.children = items;
  obj.children = callback3(closure_5, obj);
  return callback2(closure_6, obj);
};
