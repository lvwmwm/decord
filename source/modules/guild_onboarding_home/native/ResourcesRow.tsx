// Module ID: 15284
// Function ID: 116563
// Name: ResourcesRow
// Dependencies: [31, 27, 15285, 33, 4130, 689, 15286, 11383, 4098, 15287, 1934, 4660, 4126, 1212, 2]
// Exports: default

// Module 15284 (ResourcesRow)
import "result";
import { ScrollView } from "get ActivityIndicator";
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_4 } from "ONBOARDING_HOME_RESOURCES_SHEET_KEY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", flexDirection: "row", paddingBottom: 8, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { display: "flex", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, marginLeft: 8, paddingVertical: 8, paddingHorizontal: 12 };
_createForOfIteratorHelperLoose.channelItem = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ONBOARDING_HOME_RESOURCES_SHEET_KEY").fileFinishedImporting("modules/guild_onboarding_home/native/ResourcesRow.tsx");

export default function ResourcesRow(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  const arr = importDefault(15286)(guildId);
  let obj = { horizontal: true, style: tmp.container };
  const substr = arr.slice(0, 2);
  const items = [
    substr.map((title) => {
      let closure_0 = title;
      let obj = {
        style: tmp.channelItem,
        onPress() {
          const homeResourceChannel = guildId(outer2_2[7]).selectHomeResourceChannel(title, title.channelId);
        }
      };
      obj = { variant: "text-md/medium", color: "text-default", children: title.title };
      obj.children = outer1_5(guildId(outer1_2[12]).Text, obj);
      return outer1_5(guildId(outer1_2[11]).PressableOpacity, obj, title.channelId);
    }),

  ];
  let tmp5 = null;
  if (tmp2) {
    obj = {
      style: tmp.channelItem,
      onPress() {
          let obj = tmp(outer1_2[8]);
          obj = { guildId };
          obj.openLazy(guildId(outer1_2[10])(outer1_2[9], outer1_2.paths), outer1_4, obj);
        }
    };
    obj = { variant: "text-md/medium", color: "text-default" };
    const intl = guildId(1212).intl;
    const obj1 = { count: arr.length - 2 };
    obj.children = intl.format(guildId(1212).t.F6iMs4, obj1);
    obj.children = callback(guildId(4126).Text, obj);
    tmp5 = callback(guildId(4660).PressableOpacity, obj);
  }
  items[1] = tmp5;
  obj.children = items;
  return closure_6(ScrollView, obj);
};
