// Module ID: 11795
// Function ID: 91589
// Name: HubEmailConnectionWaitlist
// Dependencies: [31, 27, 653, 33, 4130, 689, 1456, 5788, 1212, 11796, 1273, 4126, 4543, 2]
// Exports: default

// Module 11795 (HubEmailConnectionWaitlist)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 16 } };
_createForOfIteratorHelperLoose = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: 16 };
_createForOfIteratorHelperLoose.redesignButton = { paddingHorizontal: 16, width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(school) {
  const onClose = school.onClose;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onClose(1456);
  const navigation = obj.useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        const obj = {};
        const intl = onClose(outer2_2[8]).intl;
        obj.text = intl.string(onClose(outer2_2[8]).t.cpT0Cq);
        obj.onPress = outer1_0;
        return outer2_6(onClose(outer2_2[7]).HeaderActionButton, obj);
      }
    });
  }, items);
  obj = { style: tmp.container };
  obj = { source: navigation(11796), style: tmp.header };
  const items1 = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header" };
  let intl = onClose(1212).intl;
  obj1.children = intl.string(onClose(1212).t.OaloU5);
  items1[1] = callback(onClose(1273).LegacyText, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = onClose(1212).intl;
  obj2.children = intl2.format(onClose(1212).t.Rs7MXJ, { school: school.school });
  items1[2] = callback(onClose(4126).Text, obj2);
  const obj3 = { style: tmp.redesignButton };
  const obj4 = { size: "lg" };
  const intl3 = onClose(1212).intl;
  obj4.text = intl3.string(onClose(1212).t.i4jeWR);
  obj4.onPress = onClose;
  obj3.children = callback(onClose(4543).Button, obj4);
  items1[3] = callback(closure_4, obj3);
  obj.children = items1;
  return callback2(closure_4, obj);
};
