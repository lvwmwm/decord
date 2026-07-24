// Module ID: 8449
// Function ID: 67125
// Name: StageChannelUpsell
// Dependencies: [57, 31, 27, 1352, 8450, 8398, 653, 33, 4130, 689, 4660, 1273, 7696, 8451, 4126, 1212, 4543, 4337, 8452, 1934, 4098, 2]
// Exports: default

// Module 8449 (StageChannelUpsell)
import _slicedToArray from "_slicedToArray";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { createChannelRecord } from "_callSuper";
import { useStageChannelUpsellCardStore as closure_7 } from "useStageChannelUpsellCardStore";
import { CREATE_GUILD_EVENT_MODAL_KEY as closure_8 } from "CREATE_GUILD_EVENT_MODAL_KEY";
import { ChannelTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "column", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: 16, margin: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { marginBottom: 16 };
_createForOfIteratorHelperLoose.closeContainer = { position: "absolute", top: 14, right: 14 };
_createForOfIteratorHelperLoose.header = { lineHeight: 20, marginBottom: 4 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: 4 };
_createForOfIteratorHelperLoose.button = { marginTop: 12, alignSelf: "stretch" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx");

export default function StageChannelUpsell(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, onCreate: importDefault } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(callback2(), 2);
  const dependencyMap = tmp3;
  let tmp4 = null;
  if (!tmp2[0]) {
    let obj = { style: tmp.container };
    obj = { onPress: tmp3, accessibilityRole: "button", style: tmp.closeContainer };
    obj = { source: importDefault(7696) };
    obj.children = callback3(require(1273) /* Button */.Icon, obj);
    const items = [callback3(require(4660) /* PressableBase */.PressableOpacity, obj), , , , , ];
    const obj1 = { source: importDefault(8451), style: tmp.image };
    items[1] = callback3(closure_4, obj1);
    let obj2 = { style: tmp.header, variant: "text-md/bold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl.string(require(1212) /* getSystemLocale */.t.Sx8Ezi);
    items[2] = callback3(require(4126) /* Text */.Text, obj2);
    const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.JUzPhm);
    items[3] = callback3(require(4126) /* Text */.Text, obj3);
    const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj5 = {
      suggestionsHook(children) {
          const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
          return outer1_10(outer1_0(tmp3[14]).Text, obj, arg1);
        }
    };
    obj4.children = intl3.format(require(1212) /* getSystemLocale */.t.Vh7rP7, obj5);
    items[4] = callback3(require(4126) /* Text */.Text, obj4);
    const obj6 = { style: tmp.button };
    const obj7 = { variant: "secondary", size: "md" };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj7.text = intl4.string(require(1212) /* getSystemLocale */.t["X/3SyA"]);
    obj7.onPress = function onPress() {
      let obj = outer1_1(tmp3[17]);
      obj.popWithKey(outer1_8);
      obj = {
        guildId: closure_0,
        channelType: outer1_9.GUILD_STAGE_VOICE,
        onChannelCreated(id) {
          const tmp = outer2_6({ id, type: outer2_9.GUILD_STAGE_VOICE });
          if (null != tmp) {
            outer1_1(tmp);
          }
        },
        onClose() {
          outer2_1(table[17]).popWithKey("CREATE_CHANNEL_MODAL_KEY");
        }
      };
      outer1_1(tmp3[17]).pushLazy(outer1_0(tmp3[19])(tmp3[18], tmp3.paths), obj, "CREATE_CHANNEL_MODAL_KEY");
      tmp3 = tmp3();
      const obj2 = outer1_1(tmp3[17]);
      outer1_1(tmp3[20]).hideActionSheet();
    };
    obj6.children = callback3(require(4543) /* Button */.Button, obj7);
    items[5] = callback3(closure_5, obj6);
    obj.children = items;
    tmp4 = callback4(closure_5, obj);
  }
  return tmp4;
};
