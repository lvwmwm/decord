// Module ID: 14509
// Function ID: 110764
// Name: useScreens
// Dependencies: [57, 31, 27, 33, 4130, 689, 5517, 5087, 4337, 5788, 1212, 7574, 3827, 11100, 13138, 7613, 7614, 4126, 11098, 13140, 9937, 9936, 5501, 5502, 4543, 2]
// Exports: default

// Module 14509 (useScreens)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function useScreens() {
  return require(5517) /* NavigationStack */.useNavigatorScreens(() => {
    let obj = {};
    obj = {};
    let obj2 = outer1_0(outer1_2[7]);
    obj.headerLeft = obj2.getHeaderCloseButton(outer1_1(outer1_2[8]).pop);
    obj.headerRight = function headerRight() {
      const obj = {};
      const intl = outer2_0(outer2_2[10]).intl;
      obj.text = intl.string(outer2_0(outer2_2[10]).t["5Wxrcd"]);
      obj.onPress = outer2_1(outer2_2[8]).pop;
      return outer2_7(outer2_0(outer2_2[9]).HeaderActionButton, obj);
    };
    obj.headerTitle = function headerTitle() {
      return outer2_7(outer2_0(outer2_2[7]).NavigatorHeader, { title: outer2_10.START, subtitle: "I said come on fhqwhgads" });
    };
    obj.render = function render(arg0, arg1) {
      let closure_0 = arg1;
      const obj = {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return arr.push(outer3_10.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: outer2_1(outer2_2[8]).pop,
        disclaimer: "I said come on fhqwhgads."
      };
      return outer2_7(outer2_14, obj);
    };
    obj[outer1_10.START] = obj;
    obj = { headerLeft: outer1_0(outer1_2[7]).getHeaderBackButton() };
    const obj5 = outer1_0(outer1_2[7]);
    obj.headerRight = outer1_0(outer1_2[7]).getHeaderCloseButton(outer1_1(outer1_2[8]).pop);
    obj.headerTitle = function headerTitle() {
      return outer2_7(outer2_0(outer2_2[7]).NavigatorHeader, { title: outer2_10.WHO_DAT });
    };
    obj.render = function render(arg0, arg1) {
      let closure_0 = arg1;
      const obj = {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return arr.push(outer3_10.EVERYBODY);
        },
        children: outer2_7(outer2_0(outer2_2[11]).TextInput, { placeholder: "My friend Jake" })
      };
      return outer2_7(outer2_14, obj);
    };
    obj[outer1_10.WHO_DAT] = obj;
    const obj1 = {};
    const obj6 = outer1_0(outer1_2[7]);
    obj1.headerLeft = outer1_0(outer1_2[7]).getHeaderBackButton();
    const obj8 = outer1_0(outer1_2[7]);
    obj1.headerRight = outer1_0(outer1_2[7]).getHeaderCloseButton(outer1_1(outer1_2[8]).pop);
    obj1.headerTitle = function headerTitle() {
      return outer2_7(outer2_0(outer2_2[7]).NavigatorHeader, { title: outer2_10.EVERYBODY });
    };
    obj1.render = function render(arg0, arg1) {
      let closure_0 = arg1;
      return outer2_7(outer2_15, {
        onAction() {
          return arr.push(outer3_10.JOCKIN);
        }
      });
    };
    obj[outer1_10.EVERYBODY] = obj1;
    obj2 = {};
    const obj9 = outer1_0(outer1_2[7]);
    obj2.headerLeft = outer1_0(outer1_2[7]).getHeaderBackButton();
    const obj11 = outer1_0(outer1_2[7]);
    obj2.headerRight = outer1_0(outer1_2[7]).getHeaderCloseButton(outer1_1(outer1_2[8]).pop);
    obj2.headerTitle = function headerTitle() {
      return outer2_7(outer2_0(outer2_2[7]).NavigatorHeader, { title: outer2_10.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj2.render = function render(arg0, arg1) {
      let closure_0 = arg1;
      const obj = {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return arr.push(outer3_10.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      };
      return outer2_7(outer2_14, obj);
    };
    obj[outer1_10.JOCKIN] = obj2;
    const obj3 = {};
    const obj12 = outer1_0(outer1_2[7]);
    obj3.headerLeft = outer1_0(outer1_2[7]).getHeaderBackButton();
    obj3.headerRight = function headerRight() {
      return outer2_7(outer2_0(outer2_2[7]).HeaderSubmittingIndicator, {});
    };
    obj3.headerTitle = function headerTitle() {
      return outer2_7(outer2_0(outer2_2[7]).NavigatorHeader, { title: outer2_10.LIMIT });
    };
    obj3.render = function render() {
      const obj = {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: outer2_1(outer2_2[8]).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return outer3_1(outer3_2[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      };
      return outer2_7(outer2_14, obj);
    };
    obj[outer1_10.LIMIT] = obj3;
    return obj;
  }, []);
}
function DemoModal() {
  const tmp = useScreens();
  return callback2(require(11100) /* Modal */.Modal, { screens: useScreens(), initialRouteName: constants.START });
}
function DemoStepModal() {
  const memo = React.useMemo(() => {
    const items = [outer1_10.START, outer1_10.WHO_DAT, outer1_10.EVERYBODY, outer1_10.JOCKIN, outer1_10.LIMIT];
    return items;
  }, []);
  const tmp = useScreens();
  return callback2(require(13138) /* StepModal */.StepModal, { screens: useScreens(), steps: memo, initialRouteName: constants.START });
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
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = {};
  let tmp4 = null != emoji;
  if (tmp4) {
    obj = { style: tmp.emojiContainer };
    const obj1 = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp.emoji, children: emoji };
    obj.children = callback2(require(4126) /* Text */.Text, obj1);
    tmp4 = callback2(closure_5, obj);
  }
  const items = [tmp4, , ];
  const obj2 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title };
  items[1] = callback2(require(4126) /* Text */.Text, obj2);
  items[2] = children;
  obj.children = items;
  const items1 = [closure_8(require(7614) /* ModalContent */.ModalContent, obj), ];
  if (null == footer) {
    const obj3 = {};
    let tmp13 = null != disclaimer;
    if (tmp13) {
      const obj4 = { children: disclaimer };
      tmp13 = callback2(require(13140) /* ModalDisclaimer */.ModalDisclaimer, obj4);
    }
    const items2 = [tmp13, , ];
    let tmp14 = null != action;
    if (tmp14) {
      const obj5 = { variant: "primary", text: action, onPress: onAction };
      tmp14 = callback2(require(9937) /* ModalActionButton */.ModalActionButton, obj5);
    }
    items2[1] = tmp14;
    let tmp18 = null != secondaryAction;
    if (tmp18) {
      const obj6 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
      tmp18 = callback2(require(9937) /* ModalActionButton */.ModalActionButton, obj6);
    }
    items2[2] = tmp18;
    obj3.children = items2;
    footer = closure_8(require(11098) /* ModalFooter */.ModalFooter, obj3);
    const tmp22 = closure_8;
  }
  items1[1] = footer;
  obj.children = items1;
  return closure_8(require(7613) /* ModalScreen */.ModalScreen, obj);
}
function SwitchesScreen(onAction) {
  let tmp = _createForOfIteratorHelperLoose();
  let parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  const tmp2 = callback(React.useState(parts.map(() => false)), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  let obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}" };
  obj = { isVisible: first.some((arg0) => arg0), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction.onAction };
  obj.footer = callback2(parts(9936).ModalFloatingAction, obj);
  obj = { style: tmp.tableRows };
  const obj1 = {
    hasIcons: false,
    children: first.map((value) => {
      const parts = arg1;
      return outer1_7(parts(outer1_2[23]).TableSwitchRow, {
        label: parts[arg1],
        value,
        onValueChange(arg0) {
          let closure_0 = arg0;
          outer1_1((arr) => arr.map((arg0, arg1) => {
            let tmp = arg0;
            if (arg1 === closure_0) {
              tmp = outer1_0;
            }
            return tmp;
          }));
        }
      }, arg1);
    })
  };
  obj.children = callback2(parts(5501).TableRowGroup, obj1);
  const items = [callback2(closure_5, obj), callback2(parts(9936).ModalFloatingActionSpacer, {})];
  obj.children = items;
  return callback3(DemoScreen, obj);
}
function openDemoModal() {
  let arr = importDefault(4337);
  arr = arr.push(DemoModal);
}
function openDemoStepModal() {
  let arr = importDefault(4337);
  arr = arr.push(DemoStepModal);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, alignItems: "center", padding: 16, gap: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.screen = _createForOfIteratorHelperLoose;
let obj1 = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
_createForOfIteratorHelperLoose.emojiContainer = obj1;
_createForOfIteratorHelperLoose.emoji = { fontSize: 48, lineHeight: 80 };
_createForOfIteratorHelperLoose.title = { marginBottom: 16 };
_createForOfIteratorHelperLoose.tableRows = { width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default function UserSettingsDesignSystemModal() {
  let obj = {};
  obj = { style: _createForOfIteratorHelperLoose().container };
  obj = { onPress: openDemoModal, text: "Show Modal" };
  const items = [callback2(require(4543) /* Button */.Button, obj), callback2(require(4543) /* Button */.Button, { onPress: openDemoStepModal, text: "Show Stepped Modal" })];
  obj.children = items;
  obj.children = callback3(closure_5, obj);
  return callback2(closure_6, obj);
};
