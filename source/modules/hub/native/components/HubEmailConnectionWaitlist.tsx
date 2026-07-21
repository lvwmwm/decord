// Module ID: 11757
// Function ID: 91289
// Name: HubEmailConnectionWaitlist
// Dependencies: []
// Exports: default

// Module 11757 (HubEmailConnectionWaitlist)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {}, header: { marginBottom: 16 } };
obj = { fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj;
obj.description = { value: 52881784.83212474, marginTop: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
obj.redesignButton = {};
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(school) {
  const onClose = school.onClose;
  const arg1 = onClose;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const items = [navigation, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        const obj = {};
        const intl = callback(closure_2[8]).intl;
        obj.text = intl.string(callback(closure_2[8]).t.cpT0Cq);
        obj.onPress = callback;
        return callback2(callback(closure_2[7]).HeaderActionButton, obj);
      }
    });
  }, items);
  obj = { style: tmp.container };
  obj = { source: importDefault(dependencyMap[9]), style: tmp.header };
  const items1 = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header" };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.OaloU5);
  items1[1] = callback(arg1(dependencyMap[10]).LegacyText, obj1);
  const obj2 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[8]).t.Rs7MXJ, { school: school.school });
  items1[2] = callback(arg1(dependencyMap[11]).Text, obj2);
  const obj3 = { style: tmp.redesignButton };
  const obj4 = { size: "lg" };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[8]).t.i4jeWR);
  obj4.onPress = onClose;
  obj3.children = callback(arg1(dependencyMap[12]).Button, obj4);
  items1[3] = callback(closure_4, obj3);
  obj.children = items1;
  return callback2(closure_4, obj);
};
