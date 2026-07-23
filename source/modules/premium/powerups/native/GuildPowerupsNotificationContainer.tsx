// Module ID: 11588
// Function ID: 90067
// Name: Tier3OverrideNotice
// Dependencies: [27, 33, 4130, 689, 4126, 11589, 11590, 1212, 2230, 11593, 2]
// Exports: default

// Module 11588 (Tier3OverrideNotice)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
function Tier3OverrideNotice(children) {
  return callback(View, { style: callback2().staffContainer, children: callback(require(4126) /* Text */.Text, { variant: "text-sm/medium", children: children.text }) });
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, margin: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
obj.staffContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderStyle: "solid", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderStyle: "solid", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default function GuildPowerupsNotificationContainer(guildId) {
  guildId = guildId.guildId;
  const tmp2 = importDefault(11589)(guildId);
  const tmp3 = importDefault(11590)(guildId);
  if (tmp2.shouldShow) {
    let obj = { style: tmp.container };
    obj = { variant: "eyebrow", color: "text-subtle" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(importDefault(2230)["3FRirU"]);
    const items = [callback(require(4126) /* Text */.Text, obj), , ];
    let shouldShow = tmp2.shouldShow;
    if (shouldShow) {
      obj = { text: tmp2.text };
      shouldShow = callback(Tier3OverrideNotice, obj);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp3.shouldShow;
    if (shouldShow2) {
      const obj1 = { guildId };
      ({ expiringPowerupNames: obj4.powerupNames, warnings: obj4.warnings } = tmp3);
      shouldShow2 = callback(importDefault(11593), obj1);
    }
    items[2] = shouldShow2;
    obj.children = items;
    let tmp5Result = closure_5(View, obj);
    const tmp5 = closure_5;
    const tmp6 = View;
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
};
