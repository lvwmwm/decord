// Module ID: 13920
// Function ID: 106514
// Name: OneWayToTwoWayNewTag
// Dependencies: [31, 27, 653, 1345, 33, 4130, 689, 5052, 1273, 9678, 4126, 4543, 1212, 2]
// Exports: OneWayToTwoWayLinkUpsell

// Module 13920 (OneWayToTwoWayNewTag)
import result from "result";
import { View } from "get ActivityIndicator";
import { Fonts } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_6;
let closure_7;
const require = arg1;
function OneWayToTwoWayNewTag(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const items = [markAsDismissed];
  const effect = React.useEffect(() => markAsDismissed(outer1_5.UNKNOWN), items);
  const tmp = _createForOfIteratorHelperLoose();
  return callback(markAsDismissed(1273).NewTag, { containerStyle: _createForOfIteratorHelperLoose().newContainer, variant: "text-xs/bold" });
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, margin: 16, padding: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { flexDirection: "row", marginBottom: 4, alignItems: "center" };
_createForOfIteratorHelperLoose.titleContainer = { flexGrow: 1, flexShrink: 1 };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 16));
_createForOfIteratorHelperLoose.title = {};
const obj1 = {};
const obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 14));
_createForOfIteratorHelperLoose.body = obj2;
_createForOfIteratorHelperLoose.newContainer = { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 };
_createForOfIteratorHelperLoose.reconnectButton = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx");

export const OneWayToTwoWayLinkUpsell = function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
  let body;
  let img;
  let onPress;
  let title;
  newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
  ({ title, body, img, onPress } = newIndicatorDismissibleContent);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  obj = { style: tmp.titleContainer };
  const items = [newIndicatorDismissibleContent];
  const items1 = [
    callback(importDefault(9678), {
      contentTypes: items,
      children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
          const obj = { markAsDismissed: tmp };
          tmp2 = outer1_6(outer1_9, obj);
        }
        return tmp2;
      }
    }),
    callback(newIndicatorDismissibleContent(4126).Text, { style: tmp.title, variant: "text-md/semibold", children: title })
  ];
  obj.children = items1;
  const items2 = [callback2(View, obj), img];
  obj.children = items2;
  const items3 = [callback2(View, obj), callback(newIndicatorDismissibleContent(4126).Text, { style: tmp.body, variant: "text-sm/medium", children: body }), ];
  const obj4 = { style: tmp.reconnectButton };
  const obj5 = {};
  const intl = newIndicatorDismissibleContent(1212).intl;
  obj5.text = intl.string(newIndicatorDismissibleContent(1212).t.vD60Pv);
  obj5.onPress = onPress;
  obj4.children = callback(newIndicatorDismissibleContent(4543).Button, obj5);
  items3[2] = callback(View, obj4);
  obj.children = items3;
  return callback2(View, obj);
};
