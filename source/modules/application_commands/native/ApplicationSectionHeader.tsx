// Module ID: 11439
// Function ID: 89011
// Name: ApplicationSectionHeader
// Dependencies: [31, 27, 1917, 33, 4130, 689, 566, 11337, 1212, 5085, 4126, 2]
// Exports: default

// Module 11439 (ApplicationSectionHeader)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", height: 32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.applicationHeaderWrapper = _createForOfIteratorHelperLoose;
let obj1 = { width: 16, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 8 };
_createForOfIteratorHelperLoose.applicationIcon = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default function ApplicationSectionHeader(section) {
  section = section.section;
  const guildId = section.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = section(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != guildId) {
      let botId;
      if (null != section) {
        botId = section.botId;
      }
      if (null != botId) {
        return outer1_4.getMember(guildId, section.botId);
      }
    }
  });
  let obj1 = section(11337);
  const applicationCommandsIconSource = obj1.getApplicationCommandsIconSource(section, stateFromStores);
  let nick;
  if (null != stateFromStores) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (null != section) {
    name = section.name;
  }
  obj = { style: tmp.applicationHeaderWrapper };
  const intl = section(1212).intl;
  obj = { applicationName: name };
  obj.accessibilityLabel = intl.formatToPlainString(section(1212).t["Ocw/sM"], obj);
  let tmp7 = null != applicationCommandsIconSource;
  if (tmp7) {
    obj1 = { style: tmp.applicationIcon, source: applicationCommandsIconSource };
    tmp7 = callback(guildId(5085), obj1);
  }
  const items1 = [tmp7, ];
  const obj2 = { variant: "eyebrow", color: "interactive-text-default", children: name };
  items1[1] = callback(section(4126).Text, obj2);
  obj.children = items1;
  return closure_6(View, obj);
};
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;
