// Module ID: 10945
// Function ID: 85100
// Name: ConnectedAcceptGuildTemplate
// Dependencies: [5, 57, 31, 6693, 653, 33, 4130, 5084, 566, 5047, 10946, 5121, 10947, 4674, 10950, 10944, 5087, 5519, 2]
// Exports: default

// Module 10945 (ConnectedAcceptGuildTemplate)
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_7 from "_createForOfIteratorHelperLoose";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function ConnectedAcceptGuildTemplate(code) {
  code = code.code;
  let obj = code(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuildTemplate(code));
  const tmp2 = _createForOfIteratorHelperLoose();
  const tmp4 = callback(React.useState(first(5047).getGuildNameSuggestion()), 2);
  first = tmp4[0];
  const dependencyMap = tmp4[1];
  const tmp6 = callback(React.useState(null), 2);
  const first1 = tmp6[0];
  callback = tmp6[1];
  const tmp8 = callback(React.useState(null), 2);
  React = tmp8[1];
  stateFromStores(10946)(stateFromStores);
  obj = { top: true, style: tmp2.container };
  obj = {
    code,
    guildTemplate: stateFromStores,
    name: first,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp8[0]
  };
  // CreateGeneratorClosureLongIndex (0x67)
  const obj2 = first(5047);
  obj.chooseIcon = first1(tmp);
  obj.createServer = function createServer() {
    if (null != stateFromStores) {
      const obj = stateFromStores(10950);
      stateFromStores(10950).acceptGuildTemplate(stateFromStores.code, first, first1).then(() => stateFromStores(table[15]).hideModal(), (arg0) => outer1_6(arg0));
      const acceptGuildTemplateResult = stateFromStores(10950).acceptGuildTemplate(stateFromStores.code, first, first1);
    }
  };
  obj.children = jsx(stateFromStores(10947), {
    code,
    guildTemplate: stateFromStores,
    name: first,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp8[0]
  });
  return jsx(code(5121).SafeAreaPaddingView, {
    code,
    guildTemplate: stateFromStores,
    name: first,
    setName(arg0) {
      return dependencyMap(arg0);
    },
    icon: first1,
    errors: tmp8[0]
  });
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default function AcceptGuildTemplateModal(code) {
  code = code.code;
  const items = [code];
  const screens = React.useMemo(() => (function getScreens(arg0) {
    let closure_0 = arg0;
    let obj = {};
    obj = {
      title: "",
      fullscreen: true,
      headerLeft: code(outer2_3[16]).getHeaderCloseButton(() => outer3_1(outer3_3[15]).hideModal()),
      render() {
        const merged = Object.assign(closure_0);
        return outer3_9(outer3_11, {});
      }
    };
    obj["ACCEPT_GUILD_TEMPLATE"] = obj;
    return obj;
  })({ code }), items);
  return jsx(code(5519).Navigator, { initialRouteName: "ACCEPT_GUILD_TEMPLATE", screens });
};
