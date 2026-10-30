// Module ID: 14295
// Function ID: 14296
// Name: HubEmailConnectionWaitlist
// Dependencies: [19, 17, 1072, 21, 5009, 575, 1498, 7552, 1114, 5712, 14296, 1188, 5619, 5629, 2]
// Exports: default

// Module 14295 (HubEmailConnectionWaitlist)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 16 }, title: obj2, description: { textAlign: "center", marginBottom: 16 }, redesignButton: { paddingHorizontal: 16, width: "100%" } };
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(onClose) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj7;
  onClose = onClose.onClose;
  const school = onClose.school;
  const tmp = closure_7();
  let obj = onClose(1498);
  navigation = obj.useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = react.useLayoutEffect(() => {
    let onPress;
    let obj = {
      headerLeft() {
        let intl;
        const obj = { text: intl.string(onClose(dependencyMap[8]).t.cpT0Cq), onPress };
        const HeaderActionButton = onClose(dependencyMap[7]).HeaderActionButton;
        intl = onClose(dependencyMap[8]).intl;
        return closure_2_5(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
  const obj2 = { style: tmp.container, children: items1 };
  const obj3 = { source: navigation(14296), style: tmp.header };
  const tmp4 = navigation(5712);
  items1 = [closure_5(tmp4, obj3), , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", children: intl.string(onClose(1114).t.OaloU5) };
  const LegacyText = onClose(1188).LegacyText;
  intl = onClose(1114).intl;
  items1[1] = closure_5(LegacyText, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.format(onClose(1114).t.Rs7MXJ, { school }) };
  const Text = onClose(5619).Text;
  intl2 = onClose(1114).intl;
  items1[2] = closure_5(Text, obj5);
  const obj6 = { style: tmp.redesignButton, children: closure_5(Button, obj7) };
  obj7 = { size: "lg", text: intl3.string(onClose(1114).t.i4jeWR), onPress: onClose };
  Button = onClose(5629).Button;
  intl3 = onClose(1114).intl;
  items1[3] = closure_5(View, obj6);
  return closure_6(View, obj2);
};
