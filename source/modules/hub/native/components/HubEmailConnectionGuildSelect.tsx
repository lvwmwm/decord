// Module ID: 11760
// Function ID: 91304
// Name: HubEmailConnectionGuildSelectRow
// Dependencies: []
// Exports: default

// Module 11760 (HubEmailConnectionGuildSelectRow)
class HubEmailConnectionGuildSelectRow {
  constructor(arg0) {
    guildInfo = global.guildInfo;
    ({ signup, loading } = global);
    tmp = closure_11();
    obj = { onPress: signup, disabled: loading, DEPRECATED_style: tmp.rowContainer, label: guildInfo.name };
    obj = { style: tmp.guildIcon };
    tmp2 = importDefault(dependencyMap[9]);
    obj3 = arg1(dependencyMap[10]);
    obj1 = {};
    merged = Object.assign(guildInfo);
    obj1["features"] = [];
    obj.guild = obj3.fromGuildBasic(obj1);
    obj.leading = jsx(tmp2, obj);
    obj.trailing = jsx(arg1(dependencyMap[8]).FormRow.Arrow, {});
    return jsx(arg1(dependencyMap[8]).FormRow, obj);
  }
}
function HubEmailConnectionGuildSelectHeader() {
  const tmp = callback4();
  let obj = { style: tmp.header };
  obj = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.mOMeiR);
  obj.children = callback2(arg1(dependencyMap[11]).Text, obj);
  return callback2(closure_6, obj);
}
function HubEmailConnectionGuildSelectFooter(onFooterButtonPressed) {
  let errors;
  let loading;
  ({ errors, loading } = onFooterButtonPressed);
  const tmp = callback4();
  let obj = {};
  const items = [tmp.footerSafeAreaContainer, ];
  obj = { paddingBottom: importDefault(dependencyMap[13])().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.footerContainer };
  const obj1 = { variant: "secondary", loading, disabled: loading, grow: true };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.text = intl.string(arg1(dependencyMap[12]).t.G3Zk7V);
  obj1.onPress = onFooterButtonPressed.onFooterButtonPressed;
  const items1 = [callback2(arg1(dependencyMap[14]).Button, obj1), ];
  let tmp7Result = null != errors;
  if (tmp7Result) {
    const obj2 = { style: tmp.error };
    let anyErrorMessage;
    if (null != errors) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    obj2.children = anyErrorMessage;
    tmp7Result = callback2(arg1(dependencyMap[15]).LegacyText, obj2);
    const tmp7 = callback2;
  }
  items1[1] = tmp7Result;
  obj.children = items1;
  obj.children = closure_10(closure_6, obj);
  return callback2(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, FlatList: closure_7 } = arg1(dependencyMap[3]));
const HubEmailConnectionSteps = arg1(dependencyMap[4]).HubEmailConnectionSteps;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { accessibilityLabel: 16, accessibilityUnits: 16, accessibilityIncrements: null, borderRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_NORMAL };
obj.rowContainer = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.guildIcon = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.separator = { height: 8 };
obj.header = {};
obj.title = { "Null": null, "Null": null };
const obj2 = { grinning_face: "Array", smiley: "isArray", smile: "max", grin: "names", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.footerSafeAreaContainer = obj2;
obj.footerContainer = {};
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.error = { color: importDefault(dependencyMap[7]).unsafe_rawColors.RED_400 };
let closure_11 = obj.createStyles(obj);
const obj3 = { color: importDefault(dependencyMap[7]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  onClose = onClose.onClose;
  const arg1 = onClose;
  const email = onClose.email;
  const importDefault = email;
  const guildsInfo = onClose.guildsInfo;
  const dependencyMap = guildsInfo;
  let closure_3 = callback4();
  let obj = arg1(dependencyMap[16]);
  const navigation = obj.useNavigation();
  let callback = navigation;
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {
          IconComponent: callback(closure_2[18]).MagnifyingGlassIcon,
          onPress() {

          }
        };
        const intl = callback(closure_2[12]).intl;
        obj.accessibilityLabel = intl.string(callback(closure_2[12]).t.5h0QOP);
        return callback2(callback(closure_2[17]).HeaderActionButton, obj);
      }
    });
  }, items);
  const items1 = [email, navigation, onClose];
  callback = React.useCallback(() => {
    navigation.push(constants.SUBMIT_SCHOOL, { email, onClose });
  }, items1);
  const tmp4 = callback(React.useState(null), 2);
  const React = tmp4[1];
  const tmp5 = callback(React.useState(false), 2);
  const first = tmp5[0];
  let closure_7 = tmp5[1];
  obj = {};
  obj = {
    data: guildsInfo,
    ListHeaderComponent() {
      return callback(closure_13, {});
    },
    renderItem(item) {
      item = item.item;
      const onClose = item.id;
      // CreateGeneratorClosureLongIndex (0x67)
      return callback(closure_12, { guildInfo: item, signup: lib(tmp), loading: first });
    },
    ItemSeparatorComponent() {
      return callback(first, { style: lib.separator });
    },
    contentContainerStyle: obj1
  };
  const items2 = [callback2(closure_7, obj), callback2(HubEmailConnectionGuildSelectFooter, { errors: tmp4[0], loading: first, onFooterButtonPressed: callback })];
  obj.children = items2;
  return callback3(arg1(dependencyMap[21]).HubEmailConnectionScreen, obj);
};
export { HubEmailConnectionGuildSelectRow };
