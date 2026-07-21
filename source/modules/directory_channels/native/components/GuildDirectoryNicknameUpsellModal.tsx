// Module ID: 11683
// Function ID: 90631
// Name: GuildDirectoryNicknameUpsell
// Dependencies: []
// Exports: default

// Module 11683 (GuildDirectoryNicknameUpsell)
function GuildDirectoryNicknameUpsell(arg0) {
  ({ guildId: closure_0, handleClose: closure_1 } = arg0);
  let closure_2;
  let closure_3;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = arg1(closure_2[10]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  const insets = importDefault(closure_2[11])().insets;
  const tmp3 = callback(_handleSubmit.useState(null), 2);
  const first = tmp3[0];
  closure_2 = tmp3[1];
  const tmp4 = callback(_handleSubmit.useState(""), 2);
  const first1 = tmp4[0];
  closure_3 = first1;
  const ref = _handleSubmit.useRef(null);
  const callback = ref;
  obj = { ref };
  const items1 = [tmp.container, ];
  obj = { paddingBottom: insets.bottom + importDefault(closure_2[9]).space.PX_16, paddingTop: insets.top };
  items1[1] = obj;
  obj.contentContainerStyle = items1;
  const obj1 = { style: tmp.guildIcon, guild: stateFromStores, size: arg1(closure_2[14]).GuildIconSizes.XLARGE };
  const items2 = [callback2(importDefault(closure_2[14]), obj1), , , , ];
  const obj2 = { style: tmp.header };
  const obj3 = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(closure_2[16]).intl;
  const obj4 = {};
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj4.guildName = name;
  obj3.children = intl.format(arg1(closure_2[16]).t.d+6kzl, obj4);
  const items3 = [callback2(arg1(closure_2[15]).Text, obj3), ];
  const obj5 = { style: tmp.description };
  const intl2 = arg1(closure_2[16]).intl;
  obj5.children = intl2.string(arg1(closure_2[16]).t.b3L8yx);
  items3[1] = callback2(arg1(closure_2[15]).Text, obj5);
  obj2.children = items3;
  items2[1] = closure_11(closure_6, obj2);
  const obj6 = {};
  const tmp10 = closure_11;
  const tmp11 = closure_6;
  const tmp12 = callback2;
  const tmp14 = callback2;
  const tmp7 = closure_11;
  const tmp8 = closure_7;
  const tmp9 = importDefault(closure_2[14]);
  const intl3 = arg1(closure_2[16]).intl;
  obj6.label = intl3.string(arg1(closure_2[16]).t.ilDlmW);
  const intl4 = arg1(closure_2[16]).intl;
  obj6.placeholder = intl4.string(arg1(closure_2[16]).t.RfWvWI);
  obj6.value = first1;
  obj6.onChangeText = tmp4[1];
  ({ input: obj10.style, redesignTextInput: obj10.textStyle } = tmp);
  obj6.clearButtonVisibility = arg1(closure_2[18]).ClearButtonVisibility.WITH_CONTENT;
  let firstFieldErrorMessage;
  if (null != first) {
    firstFieldErrorMessage = first.getFirstFieldErrorMessage("name");
  }
  obj6.error = firstFieldErrorMessage;
  obj6.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj6.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items2[2] = tmp14(importDefault(closure_2[17]), obj6);
  items2[3] = callback2(closure_6, { style: tmp.redesignGrowSpacing });
  const obj8 = { style: tmp.redesignButtonContainer };
  const obj9 = { size: "lg" };
  const intl5 = arg1(closure_2[16]).intl;
  obj9.text = intl5.string(arg1(closure_2[16]).t.Np4yXU);
  obj9.onPress = function handleSubmit() {
    return _handleSubmit(...arguments);
  };
  obj8.children = callback2(arg1(closure_2[19]).Button, obj9);
  items2[4] = callback2(closure_6, obj8);
  obj.children = items2;
  return tmp7(tmp8, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const GuildPrompts = arg1(dependencyMap[5]).GuildPrompts;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { marginTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT };
obj.container = obj;
obj.guildIcon = { height: 52881784.83212474, zIndex: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
obj.title = { "Null": null, "Null": null };
obj.description = { textAlign: "center" };
obj.header = {};
obj.input = { marginHorizontal: 16 };
const tmp3 = arg1(dependencyMap[6]);
obj.redesignTextInput = { borderRadius: importDefault(dependencyMap[9]).radii.lg };
const obj1 = { borderRadius: importDefault(dependencyMap[9]).radii.lg };
obj.redesignGrowSpacing = { flexGrow: 2, minHeight: importDefault(dependencyMap[9]).space.PX_24 };
const obj2 = { flexGrow: 2, minHeight: importDefault(dependencyMap[9]).space.PX_24 };
obj.redesignButtonContainer = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
let closure_12 = obj.createStyles(obj);
const obj3 = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx");

export default function GuildDirectoryNicknameUpsellModal(arg0) {
  const arg1 = arg0;
  const obj = {
    screens: importDefault(dependencyMap[24])(() => function getScreens(arg0) {
      ({ guildId: closure_0, onHide: closure_1 } = arg0);
      function handleClose() {
        callback(handleClose[20]).viewPrompt(constants.REAL_NAME_PROMPT, closure_0);
        callback();
        const obj = callback(handleClose[20]);
        callback(handleClose[21]).close();
      }
      let obj = {};
      obj = {
        fullscreen: true,
        headerLeft: callback(handleClose[22]).getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          return callback2(closure_13, { guildId: closure_0, handleClose });
        }
      };
      obj["UPSELL_SCREEN_KEY"] = obj;
      return obj;
    }(arg0)),
    initialRouteName: "UPSELL_SCREEN_KEY"
  };
  return callback2(arg1(dependencyMap[23]).Navigator, obj);
};
