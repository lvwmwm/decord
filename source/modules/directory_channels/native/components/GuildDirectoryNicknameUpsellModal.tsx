// Module ID: 11694
// Function ID: 90705
// Name: GuildDirectoryNicknameUpsell
// Dependencies: [5, 57, 31, 27, 1838, 11683, 33, 4130, 5084, 689, 566, 5160, 5080, 4029, 5515, 4126, 1212, 9000, 1273, 4543, 11684, 11693, 5087, 5519, 5450, 2]
// Exports: default

// Module 11694 (GuildDirectoryNicknameUpsell)
import GuildPrompts from "GuildPrompts";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_createForOfIteratorHelperLoose";
import { GuildPrompts } from "GuildPrompts";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
function GuildDirectoryNicknameUpsell(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, handleClose: importDefault } = arg0);
  let dependencyMap;
  let first1;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  const insets = importDefault(5160)().insets;
  const tmp3 = ref(_handleSubmit.useState(null), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp4 = ref(_handleSubmit.useState(""), 2);
  first1 = tmp4[0];
  ref = _handleSubmit.useRef(null);
  obj = { ref };
  const items1 = [tmp.container, ];
  obj = { paddingBottom: insets.bottom + importDefault(689).space.PX_16, paddingTop: insets.top };
  items1[1] = obj;
  obj.contentContainerStyle = items1;
  const obj1 = { style: tmp.guildIcon, guild: stateFromStores, size: require(5515) /* makeSizeStyle */.GuildIconSizes.XLARGE };
  const items2 = [callback(importDefault(5515), obj1), , , , ];
  const obj2 = { style: tmp.header };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj4 = {};
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj4.guildName = name;
  obj3.children = intl.format(require(1212) /* getSystemLocale */.t["d+6kzl"], obj4);
  const items3 = [callback(require(4126) /* Text */.Text, obj3), ];
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl2.string(require(1212) /* getSystemLocale */.t.b3L8yx);
  items3[1] = callback(require(4126) /* Text */.Text, obj5);
  obj2.children = items3;
  items2[1] = closure_11(closure_6, obj2);
  const obj6 = {};
  const tmp10 = closure_11;
  const tmp11 = closure_6;
  const tmp12 = callback;
  const tmp14 = callback;
  const tmp7 = closure_11;
  const tmp8 = closure_7;
  const tmp9 = importDefault(5515);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.label = intl3.string(require(1212) /* getSystemLocale */.t.ilDlmW);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj6.placeholder = intl4.string(require(1212) /* getSystemLocale */.t.RfWvWI);
  obj6.value = first1;
  obj6.onChangeText = tmp4[1];
  ({ input: obj10.style, redesignTextInput: obj10.textStyle } = tmp);
  obj6.clearButtonVisibility = require(1273) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  let firstFieldErrorMessage;
  if (null != first) {
    firstFieldErrorMessage = first.getFirstFieldErrorMessage("name");
  }
  obj6.error = firstFieldErrorMessage;
  obj6.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = outer1_4.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj6.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = outer1_4.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items2[2] = tmp14(importDefault(9000), obj6);
  items2[3] = callback(closure_6, { style: tmp.redesignGrowSpacing });
  const obj8 = { style: tmp.redesignButtonContainer };
  const obj9 = { size: "lg" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj9.text = intl5.string(require(1212) /* getSystemLocale */.t.Np4yXU);
  obj9.onPress = function handleSubmit() {
    return _handleSubmit(...arguments);
  };
  obj8.children = callback(require(4543) /* Button */.Button, obj9);
  items2[4] = callback(closure_6, obj8);
  obj.children = items2;
  return tmp7(tmp8, obj);
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, flexGrow: 2, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildIcon = { alignSelf: "center", marginTop: 16 };
_createForOfIteratorHelperLoose.title = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose.header = { alignItems: "center", justifyContent: "center", padding: 16 };
_createForOfIteratorHelperLoose.input = { marginHorizontal: 16 };
_createForOfIteratorHelperLoose.redesignTextInput = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.redesignGrowSpacing = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.redesignButtonContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx");

export default function GuildDirectoryNicknameUpsellModal(arg0) {
  const _require = arg0;
  let obj = {
    screens: importDefault(5450)(() => (function getScreens(closure_0) {
      let closure_1;
      ({ guildId: closure_0, onHide: closure_1 } = closure_0);
      function handleClose() {
        outer3_1(outer3_2[20]).viewPrompt(outer3_9.REAL_NAME_PROMPT, closure_0);
        callback();
        const obj = outer3_1(outer3_2[20]);
        outer3_1(outer3_2[21]).close();
      }
      let obj = {};
      obj = {
        fullscreen: true,
        headerLeft: callback(outer2_2[22]).getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          return outer3_10(outer3_13, { guildId: closure_0, handleClose });
        }
      };
      obj["UPSELL_SCREEN_KEY"] = obj;
      return obj;
    })(closure_0)),
    initialRouteName: "UPSELL_SCREEN_KEY"
  };
  return callback(_require(5519).Navigator, obj);
};
