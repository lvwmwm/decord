// Module ID: 18328
// Function ID: 18329
// Name: UserSettingsDesignSystemNavigator
// Dependencies: [32, 19, 17, 21, 5243, 575, 8144, 5866, 8142, 7680, 7379, 7434, 13975, 16371, 6888, 5873, 7424, 7427, 6785, 13248, 7363, 6274, 7679, 7681, 2]
// Exports: default

// Module 18328 (UserSettingsDesignSystemNavigator)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ButtonGroup2 from "ButtonGroup" /* 6888 */;
import TableRow from "TableRow" /* 7379 */;
import Navigator from "Navigator" /* 7424 */;
import NavigatorHeader2 from "NavigatorHeader" /* 7427 */;
import _mod7434 from "module_7434" /* 7434 */;
import TableRowGroup2 from "TableRowGroup" /* 7680 */;
import ModalScreen2 from "ModalScreen" /* 8142 */;
import ModalContent2 from "ModalContent" /* 8144 */;
import ModalFooter2 from "ModalFooter" /* 13975 */;
import ModalDisclaimer from "ModalDisclaimer" /* 16371 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let screen;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function DemoScreen(arg0) {
  let children;
  let description;
  let title;
  ({ title, description, children } = arg0);
  const tmp = closure_9();
  const obj = { children: items };
  const ModalContent = ModalContent2.ModalContent;
  items = [, , ];
  const obj2 = { variant: "heading-xl/semibold", style: tmp.description, children: title };
  items[0] = metroImportDefault(Text_Text.Heading, obj2);
  const obj3 = { variant: "body-md/normal", color: "text-subtle", style: tmp.description, children: description };
  items[1] = metroImportDefault(Text_Text.Text, obj3);
  items[2] = children;
  return metroImportAll(ModalContent, obj);
}
function HomeScreen(navigation) {
  let TableRowGroup;
  let obj2;
  let obj3;
  navigation = navigation.navigation;
  let obj = { children: closure_7(DemoScreen, obj2) };
  obj2 = { title: "Header variants", description: "Each row opens a screen with a different header setup.", children: closure_7(closure_6, obj3) };
  obj3 = { style: closure_9().fullWidth, children: closure_7(TableRowGroup, obj4) };
  const ModalScreen = navigation(8142).ModalScreen;
  obj4 = {
    hasIcons: false,
    children: items.map((screen) => {
      screen = screen.screen;
      const obj = {
        label: screen,
        subLabel: screen.description,
        arrow: true,
        onPress() {
          return navigation.push(screen);
        }
      };
      return closure_1_7(navigation(dependencyMap[10]).TableRow, obj, screen);
    })
  };
  TableRowGroup = navigation(7680).TableRowGroup;
  return closure_7(ModalScreen, obj);
}
function SimpleScreen(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  const obj = { children: metroImportDefault(DemoScreen, { title, description }) };
  const ModalScreen = ModalScreen2.ModalScreen;
  return metroImportDefault(ModalScreen, obj);
}
function FullscreenScreen() {
  let obj3;
  const tmp = closure_9();
  const obj = _mod7434;
  const headerHeight = obj.useHeaderHeight();
  const obj2 = { children: metroImportDefault(metroRequire, obj3) };
  obj3 = { style: items, children: metroImportDefault(DemoScreen, obj4) };
  items = [tmp.fill, { paddingTop: headerHeight }];
  obj4 = { title: obj4.FULLSCREEN, description: "Fullscreen screens draw under a transparent header, place their own content and skip the gradient." };
  const ModalScreen = ModalScreen2.ModalScreen;
  return metroImportDefault(ModalScreen, obj2);
}
function FooterScreen(navigation) {
  let items2;
  navigation = navigation.navigation;
  const obj = { children: items };
  const tmp = closure_9();
  const ModalScreen = ModalScreen2.ModalScreen;
  items = [metroImportDefault(DemoScreen, { title: "Footer", description: "A divider sits above the footer, and the buttons sit just above the home indicator." }), ];
  const obj2 = { children: items1 };
  const ModalFooter = ModalFooter2.ModalFooter;
  items1 = [metroImportDefault(ModalDisclaimer.ModalDisclaimer, { children: "This can be changed anytime in Settings." }), ];
  const obj3 = { size: "lg", style: tmp.footerButtonGroup, children: items2 };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  items2 = [, ];
  obj4 = {
    size: "lg",
    text: "Continue",
    onPress() {
      return navigation.goBack();
    }
  };
  items2[0] = metroImportDefault(components_Button_Button.Button, obj4);
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: "Cancel",
    onPress() {
      return navigation.goBack();
    }
  };
  items2[1] = metroImportDefault(components_Button_Button.Button, obj5);
  items1[1] = metroImportAll(ButtonGroup, obj3);
  items[1] = metroImportAll(ModalFooter, obj2);
  return metroImportAll(ModalScreen, obj);
}
function LongContentScreen() {
  let TableRowGroup;
  let obj2;
  let obj3;
  const tmp = closure_9();
  const memo = react.useMemo(() => Array.from({ length: 30 }, (arg0, arg1) => "Row " + arg1 + 1), []);
  let obj = { children: metroImportDefault(DemoScreen, obj2) };
  obj2 = { title: "Long content", description: "Scroll to see how content passes under the header.", children: metroImportDefault(metroRequire, obj3) };
  obj3 = { style: tmp.fullWidth, children: metroImportDefault(TableRowGroup, obj4) };
  const ModalScreen = ModalScreen2.ModalScreen;
  obj4 = {
    hasIcons: false,
    children: memo.map((label) => {
      const obj = { label };
      return closure_1_7(TableRow.TableRow, obj, label);
    })
  };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  return metroImportDefault(ModalScreen, obj);
}
function DemoNavigator(arg0) {
  let gradient;
  let headerTitleAlign;
  ({ gradient, headerTitleAlign } = arg0);
  let obj = Navigator;
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj11;
    let obj13;
    let obj15;
    let obj16;
    let obj18;
    let obj19;
    let obj21;
    let obj22;
    let obj24;
    let obj25;
    let obj3;
    let obj5;
    let obj6;
    let obj8;
    let obj9;
    let obj = {};
    const HOME = constants.HOME;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.HOME };
        return closure_1_7(closure_1_0(closure_1_2[17]).NavigatorHeader, obj);
      },
      render(arg0, navigation) {
        const obj = { navigation };
        return closure_1_7(closure_1_14, obj);
      }
    };
    obj[HOME] = obj2;
    obj3 = NavigatorHeader2;
    const SUBTITLE = constants.SUBTITLE;
    obj4 = {
      headerLeft: obj5.getHeaderBackButton(),
      headerRight: obj6.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.SUBTITLE, subtitle: "A short supporting line" };
        return closure_1_7(closure_1_0(closure_1_2[17]).NavigatorHeader, obj);
      },
      render() {
        const obj = { title: constants.SUBTITLE, description: "The subtitle sits under the title." };
        return closure_1_7(closure_1_15, obj);
      }
    };
    obj5 = NavigatorHeader2;
    obj[SUBTITLE] = obj4;
    obj6 = NavigatorHeader2;
    const ICON = constants.ICON;
    const obj7 = {
      headerLeft: obj8.getHeaderBackButton(),
      headerRight: obj9.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.ICON, icon: closure_1_7(closure_1_0(closure_1_2[19]).SparklesIcon, { size: "sm" }) };
        const NavigatorHeader = closure_1_0(closure_1_2[17]).NavigatorHeader;
        return closure_1_7(NavigatorHeader, obj);
      },
      render() {
        const obj = { title: constants.ICON, description: "The icon sits before the title." };
        return closure_1_7(closure_1_15, obj);
      }
    };
    obj8 = NavigatorHeader2;
    obj[ICON] = obj7;
    obj9 = NavigatorHeader2;
    const TEXT_BUTTONS = constants.TEXT_BUTTONS;
    const obj10 = {
      headerLeft: obj11.getHeaderTextButton("Cancel", ModalActionCreatorsDefault.pop),
      headerRight() {
        const obj = { text: "Save", onPress: closure_1_1(closure_1_2[18]).pop };
        const HeaderActionButton = closure_1_0(closure_1_2[20]).HeaderActionButton;
        return closure_1_7(HeaderActionButton, obj);
      },
      headerTitle() {
        const obj = { title: constants.TEXT_BUTTONS };
        return closure_1_7(closure_1_0(closure_1_2[17]).NavigatorHeader, obj);
      },
      render() {
        const obj = { title: constants.TEXT_BUTTONS, description: "Text buttons replace the back and close icons. Both close the demo." };
        return closure_1_7(closure_1_15, obj);
      }
    };
    obj[TEXT_BUTTONS] = obj10;
    obj11 = NavigatorHeader2;
    const SUBMITTING = constants.SUBMITTING;
    const obj12 = {
      headerLeft: obj13.getHeaderBackButton(),
      headerRight() {
        return closure_1_7(closure_1_0(closure_1_2[17]).HeaderSubmittingIndicator, {});
      },
      headerTitle() {
        const obj = { title: constants.SUBMITTING };
        return closure_1_7(closure_1_0(closure_1_2[17]).NavigatorHeader, obj);
      },
      render() {
        const obj = { title: constants.SUBMITTING, description: "Shown on the right while a request is running." };
        return closure_1_7(closure_1_15, obj);
      }
    };
    obj[SUBMITTING] = obj12;
    obj13 = NavigatorHeader2;
    const NO_TITLE = constants.NO_TITLE;
    const obj14 = {
      headerLeft: obj15.getHeaderBackButton(),
      headerTitle: obj16.getHeaderNoTitle(),
      render() {
        const obj = { title: constants.NO_TITLE, description: "The header shows only a back button." };
        return closure_1_7(closure_1_15, obj);
      }
    };
    obj15 = NavigatorHeader2;
    obj[NO_TITLE] = obj14;
    obj16 = NavigatorHeader2;
    const FOOTER = constants.FOOTER;
    const obj17 = {
      headerLeft: obj18.getHeaderBackButton(),
      headerRight: obj19.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.FOOTER };
        return closure_1_7(closure_1_0(closure_1_2[17]).NavigatorHeader, obj);
      },
      render(arg0, navigation) {
        const obj = { navigation };
        return closure_1_7(closure_1_17, obj);
      }
    };
    obj18 = NavigatorHeader2;
    obj[FOOTER] = obj17;
    obj19 = NavigatorHeader2;
    const LONG_CONTENT = constants.LONG_CONTENT;
    const obj20 = {
      headerLeft: obj21.getHeaderBackButton(),
      headerRight: obj22.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        const obj = { title: constants.LONG_CONTENT };
        return closure_1_7(closure_1_0(closure_1_2[17]).NavigatorHeader, obj);
      },
      render() {
        return closure_1_7(closure_1_18, {});
      }
    };
    obj21 = NavigatorHeader2;
    obj[LONG_CONTENT] = obj20;
    obj22 = NavigatorHeader2;
    const FULLSCREEN = constants.FULLSCREEN;
    const obj23 = {
      fullscreen: true,
      headerLeft: obj24.getHeaderBackButton(),
      headerTitle: obj25.getHeaderNoTitle(),
      render() {
        return closure_1_7(closure_1_16, {});
      }
    };
    obj24 = NavigatorHeader2;
    obj[FULLSCREEN] = obj23;
    obj25 = NavigatorHeader2;
    return obj;
  }, []);
  let obj2 = { screens: navigatorScreens, initialRouteName: obj4.HOME, gradientColor: gradient, headerTitleAlign };
  return metroImportDefault(Navigator.Navigator, obj2);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, fullWidth: { width: "100%" }, fill: { flex: 1 }, footerButtonGroup: { paddingVertical: 0 }, description: obj3 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
let obj4 = { HOME: "Navigator", SUBTITLE: "Title and subtitle", ICON: "Title and icon", TEXT_BUTTONS: "Text buttons", SUBMITTING: "Submitting", NO_TITLE: "No title", FOOTER: "Footer", LONG_CONTENT: "Long content", FULLSCREEN: "Fullscreen" };
let obj5 = { screen: obj4.SUBTITLE, description: "NavigatorHeader with a subtitle" };
let items = [obj5, { screen: obj4.ICON, description: "NavigatorHeader with an icon" }, { screen: obj4.TEXT_BUTTONS, description: "Text buttons on both sides" }, { screen: obj4.SUBMITTING, description: "Loading indicator on the right" }, { screen: obj4.NO_TITLE, description: "Back button only" }, { screen: obj4.FOOTER, description: "ModalFooter with a ButtonGroup" }, { screen: obj4.LONG_CONTENT, description: "Content scrolls under the header" }, { screen: obj4.FULLSCREEN, description: "Fullscreen screen, never shows the gradient" }];
let items1 = [{ label: "None", value: "none" }, { label: "Purple", value: "purple" }, { label: "Blue", value: "blue" }, { label: "Green", value: "green" }, { label: "Pink", value: "pink" }, { label: "Nitro pink", value: "nitro-pink" }, { label: "Nitro green", value: "nitro-green" }];
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemNavigator.tsx");

export default function UserSettingsDesignSystemNavigator() {
  let Stack;
  let first1;
  let obj2;
  let tmp4;
  let tmp7;
  let value;
  let tmp = closure_9();
  [value, tmp4] = react.useState("none");
  [first1, tmp7] = react.useState("center");
  let obj = { children: closure_8(Stack, obj2) };
  obj2 = { spacing: first1(575).space.PX_16, style: tmp.container, children: items };
  Stack = value(6274).Stack;
  const obj3 = {
    title: "Gradient",
    value,
    onChange: tmp4,
    hasIcons: false,
    children: items1.map((label) => {
      value = label.value;
      return closure_1_7(first(dependencyMap[23]).TableRadioRow, { label: label.label, value }, value);
    })
  };
  const TableRadioGroup = value(7679).TableRadioGroup;
  items = [closure_7(TableRadioGroup, obj3), , ];
  obj4 = { title: "Title alignment", value: first1, onChange: tmp7, hasIcons: false, children: items1 };
  const TableRadioGroup2 = value(7679).TableRadioGroup;
  items1 = [closure_7(value(7681).TableRadioRow, { label: "Center", value: "center" }), closure_7(value(7681).TableRadioRow, { label: "Left", value: "left" })];
  items[1] = closure_8(TableRadioGroup2, obj4);
  const obj5 = {
    onPress: function openNavigator() {
      let tmp2;
      const push = ModalActionCreatorsDefault.push;
      ModalActionCreatorsDefault;
      const tmp = DemoNavigator;
      if ("none" !== first) {
        tmp2 = first;
      }
      const obj = { gradient: tmp2, headerTitleAlign: first1 };
      push(tmp, obj);
    },
    text: "Show Navigator"
  };
  items[2] = closure_7(value(5873).Button, obj5);
  return closure_7(closure_5, obj);
};
