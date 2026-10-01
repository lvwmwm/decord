// Module ID: 15399
// Function ID: 15400
// Name: UserSettingsDesignSystemModal
// Dependencies: [32, 19, 17, 21, 4836, 576, 6421, 5936, 5039, 6795, 1115, 6024, 4525, 10769, 13993, 7870, 7871, 4832, 11405, 13995, 10459, 10458, 5999, 6621, 5281, 2]
// Exports: default

// Module 15399 (UserSettingsDesignSystemModal)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import Navigator from "Navigator" /* 6421 */;
import ModalScreen2 from "ModalScreen" /* 7870 */;
import ModalContent2 from "ModalContent" /* 7871 */;
import Modal from "Modal" /* 10769 */;
import StepModal from "StepModal" /* 13993 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
const f101857 = () => {
  let obj11;
  let obj12;
  let obj14;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let obj = {};
  const START = constants.START;
  const obj2 = {
    headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerRight() {
      let intl;
      const obj = { text: intl.string(closure_1_0(closure_1_2[10]).t["5Wxrcd"]), onPress: closure_1_1(closure_1_2[8]).pop };
      const HeaderActionButton = closure_1_0(closure_1_2[9]).HeaderActionButton;
      intl = closure_1_0(closure_1_2[10]).intl;
      return closure_1_7(HeaderActionButton, obj);
    },
    headerTitle() {
      const obj = { title: constants.START, subtitle: "I said come on fhqwhgads" };
      return closure_1_7(closure_1_0(closure_1_2[7]).NavigatorHeader, obj);
    },
    render(arg0, arg1) {
      let closure_0 = arg1;
      const obj = {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return closure_0.push(constants.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: closure_1(closure_2[8]).pop,
        disclaimer: "I said come on fhqwhgads."
      };
      return closure_7(closure_13, obj);
    }
  };
  obj[START] = obj2;
  obj3 = NavigatorHeader;
  const WHO_DAT = constants.WHO_DAT;
  const obj4 = {
    headerLeft: obj5.getHeaderBackButton(),
    headerRight: obj6.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerTitle() {
      const obj = { title: constants.WHO_DAT };
      return closure_1_7(closure_1_0(closure_1_2[7]).NavigatorHeader, obj);
    },
    render(arg0, arg1) {
      let closure_0 = arg1;
      const obj = {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return closure_0.push(constants.EVERYBODY);
        },
        children: closure_7(closure_0(closure_2[11]).TextInput, { placeholder: "My friend Jake" })
      };
      return closure_7(closure_13, obj);
    }
  };
  obj5 = NavigatorHeader;
  obj[WHO_DAT] = obj4;
  obj6 = NavigatorHeader;
  const EVERYBODY = constants.EVERYBODY;
  const obj7 = {
    headerLeft: obj8.getHeaderBackButton(),
    headerRight: obj9.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerTitle() {
      const obj = { title: constants.EVERYBODY };
      return closure_1_7(closure_1_0(closure_1_2[7]).NavigatorHeader, obj);
    },
    render(arg0, arg1) {
      let closure_0 = arg1;
      const obj = {
        onAction() {
          return closure_0.push(constants.JOCKIN);
        }
      };
      return closure_7(closure_14, obj);
    }
  };
  obj8 = NavigatorHeader;
  obj[EVERYBODY] = obj7;
  obj9 = NavigatorHeader;
  const JOCKIN = constants.JOCKIN;
  const obj10 = {
    headerLeft: obj11.getHeaderBackButton(),
    headerRight: obj12.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerTitle() {
      const obj = { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" };
      return closure_1_7(closure_1_0(closure_1_2[7]).NavigatorHeader, obj);
    },
    render(arg0, arg1) {
      let closure_0 = arg1;
      const obj = {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return closure_0.push(constants.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      };
      return closure_7(closure_13, obj);
    }
  };
  obj11 = NavigatorHeader;
  obj[JOCKIN] = obj10;
  obj12 = NavigatorHeader;
  const LIMIT = constants.LIMIT;
  const obj13 = {
    headerLeft: obj14.getHeaderBackButton(),
    headerRight() {
      return closure_1_7(closure_1_0(closure_1_2[7]).HeaderSubmittingIndicator, {});
    },
    headerTitle() {
      const obj = { title: constants.LIMIT };
      return closure_1_7(closure_1_0(closure_1_2[7]).NavigatorHeader, obj);
    },
    render() {
      let obj = {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: closure_1_1(closure_1_2[8]).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          const obj = closure_1_1(closure_1_2[12]);
          return obj.openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      };
      return closure_1_7(closure_1_13, obj);
    }
  };
  obj[LIMIT] = obj13;
  obj14 = NavigatorHeader;
  return obj;
};
function DemoModal() {
  const obj = Navigator;
  const navigatorScreens = obj.useNavigatorScreens(f101857, []);
  const obj2 = { screens: navigatorScreens, initialRouteName: constants.START };
  return metroImportDefault(Modal.Modal, obj2);
}
function DemoStepModal() {
  let obj = Navigator;
  const navigatorScreens = obj.useNavigatorScreens(f101857, []);
  const memo = react.useMemo(() => {
    const items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    return items;
  }, []);
  let obj2 = { screens: navigatorScreens, steps: memo, initialRouteName: constants.START };
  return metroImportDefault(StepModal.StepModal, obj2);
}
function DemoScreen(arg0) {
  let action;
  let children;
  let disclaimer;
  let emoji;
  let footer;
  let items;
  let obj2;
  let onAction;
  let onSecondaryAction;
  let secondaryAction;
  let title;
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = closure_9();
  const ModalScreen = ModalScreen2.ModalScreen;
  let tmp5 = null != emoji;
  const ModalContent = ModalContent2.ModalContent;
  if (tmp5) {
    const obj = { style: tmp.emojiContainer, children: metroImportDefault(Text_Text.Text, obj2) };
    obj2 = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp.emoji, children: emoji };
    tmp5 = metroImportDefault(hasOwnProperty, obj);
  }
  const obj3 = { children: items };
  items = [tmp5, , ];
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title };
  items[1] = metroImportDefault(Text_Text.Text, obj4);
  items[2] = children;
  const children1 = [metroImportAll(ModalContent, obj3), ];
  if (footer == null) {
    let tmp8Result = null != disclaimer;
    const ModalFooter = tmp3(11405).ModalFooter;
    if (tmp8Result) {
      const obj5 = { children: disclaimer };
      tmp8Result = tmp8(tmp3(13995).ModalDisclaimer, obj5);
    }
    const items2 = [tmp8Result, , ];
    let tmp8Result3 = null != action;
    if (tmp8Result3) {
      const obj6 = { variant: "primary", text: action, onPress: onAction };
      tmp8Result3 = tmp8(tmp3(10459).ModalActionButton, obj6);
    }
    items2[1] = tmp8Result3;
    let tmp8Result4 = null != secondaryAction;
    if (tmp8Result4) {
      const obj7 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
      tmp8Result4 = tmp8(tmp3(10459).ModalActionButton, obj7);
    }
    const obj8 = { children: items2 };
    items2[2] = tmp8Result4;
    footer = tmp2(ModalFooter, obj8);
  }
  children1[1] = footer;
  return metroImportAll(ModalScreen, { children: children1 });
}
function SwitchesScreen(onAction) {
  let ModalFloatingAction;
  let TableRowGroup;
  let arr2;
  let c1;
  let items;
  let obj2;
  let obj4;
  const f101859 = () => false;
  c1 = undefined;
  onAction = onAction.onAction;
  let tmp = closure_9();
  let parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  [arr2, c1] = react.useState(parts.map(f101859));
  let obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: closure_7(ModalFloatingAction, obj2), children: items };
  obj2 = { isVisible: arr2.some((item) => item), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction };
  _slicedToArray(react.useState(parts.map(f101859)), 2);
  ModalFloatingAction = parts(10458).ModalFloatingAction;
  const obj3 = { style: tmp.tableRows, children: closure_7(TableRowGroup, obj4) };
  obj4 = {
    hasIcons: false,
    children: arr2.map((value, index) => {
      parts = index;
      const obj = {
        label: parts[index],
        value,
        onValueChange(arg0) {
          let closure_0 = arg0;
          let tmp = closure_1_1((arr) => arr.map((item, index) => {
            let tmp = item;
            if (index === closure_0) {
              tmp = closure_1_0;
            }
            return tmp;
          }));
        }
      };
      return closure_1_7(parts(dependencyMap[23]).TableSwitchRow, obj, index);
    })
  };
  TableRowGroup = parts(5999).TableRowGroup;
  items = [closure_7(closure_5, obj3), closure_7(parts(10458).ModalFloatingActionSpacer, {})];
  return closure_8(DemoScreen, obj);
}
function openDemoModal() {
  const arr = ModalActionCreatorsDefault;
  arr.push(DemoModal);
}
function openDemoStepModal() {
  const arr = ModalActionCreatorsDefault;
  arr.push(DemoStepModal);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, alignItems: "center", padding: 16, gap: 16 }, screen: obj2, emojiContainer: size, emoji: { fontSize: 48, lineHeight: 80 }, title: { marginBottom: 16 }, tableRows: { width: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
let closure_9 = createStyles(obj);
const constants = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default function UserSettingsDesignSystemModal() {
  let items;
  let obj2;
  const obj = { children: metroImportAll(hasOwnProperty, obj2) };
  obj2 = { style: closure_9().container, children: items };
  items = [, ];
  const obj3 = { onPress: openDemoModal, text: "Show Modal" };
  items[0] = metroImportDefault(components_Button_Button.Button, obj3);
  const obj4 = { onPress: openDemoStepModal, text: "Show Stepped Modal" };
  items[1] = metroImportDefault(components_Button_Button.Button, obj4);
  return metroImportDefault(metroRequire, obj);
};
