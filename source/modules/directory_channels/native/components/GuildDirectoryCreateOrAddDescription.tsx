// Module ID: 10049
// Function ID: 77665
// Name: GuildDirectoryCreateOrAddDescription
// Dependencies: [5, 31, 27, 33, 4130, 10050, 1387, 10051, 10038, 10039, 4126, 1212, 10047, 2]
// Exports: default

// Module 10049 (GuildDirectoryCreateOrAddDescription)
import _createGuildFromTemplate from "_createGuildFromTemplate";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx");

export default function GuildDirectoryCreateOrAddDescription(directoryChannelId) {
  let _createGuildFromTemplate;
  let dependencyMap;
  let importDefault;
  directoryChannelId = directoryChannelId.directoryChannelId;
  ({ directoryGuildName: importDefault, guild: dependencyMap, createGuild: _createGuildFromTemplate } = directoryChannelId);
  function _onSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled" };
  obj = { style: tmp.header };
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = directoryChannelId(1212).intl;
  obj1.children = intl.string(directoryChannelId(1212).t["5bQcoa"]);
  const items = [callback(directoryChannelId(4126).Text, obj1), ];
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = directoryChannelId(1212).intl;
  obj2.children = intl2.string(directoryChannelId(1212).t.Ie60Wc);
  items[1] = callback(directoryChannelId(4126).Text, obj2);
  obj.children = items;
  const items1 = [callback2(_onSubmit, obj), ];
  const obj3 = {
    onSubmit(arg0, arg1) {
      return _onSubmit(...arguments);
    }
  };
  const intl3 = directoryChannelId(1212).intl;
  obj3.buttonLabel = intl3.string(directoryChannelId(1212).t.H9jxS1);
  obj3.directoryChannelId = directoryChannelId;
  items1[1] = callback(importDefault(10047), obj3);
  obj.children = items1;
  obj.children = callback2(closure_5, obj);
  return callback(directoryChannelId(10039).GuildDirectoryAddModalScreen, obj);
};
