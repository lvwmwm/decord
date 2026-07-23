// Module ID: 15055
// Function ID: 114618
// Name: ChannelItemEmbeddedActivities
// Dependencies: [31, 27, 33, 4130, 689, 5474, 4126, 2]
// Exports: default

// Module 15055 (ChannelItemEmbeddedActivities)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { overflow: { lineHeight: 16, textAlign: "center", textAlignVertical: "center", padding: 4 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.overflowContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { display: "flex", flexDirection: "row" };
_createForOfIteratorHelperLoose.modeMuted = { opacity: 0.3 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default function ChannelItemEmbeddedActivities(muted) {
  let embeddedApps;
  let size;
  ({ embeddedApps, size } = muted);
  if (size === undefined) {
    size = require(5474) /* GameIcon */.GameIconSizes.SIZE_24;
  }
  let modeMuted = muted.muted;
  const tmp3 = _createForOfIteratorHelperLoose();
  if (embeddedApps.length <= 0) {
    return null;
  } else if (1 === embeddedApps.length) {
    let obj = { game: embeddedApps[0].application, size };
    if (modeMuted) {
      modeMuted = tmp3.modeMuted;
    }
    obj.style = modeMuted;
    return callback(importDefault(5474), obj);
  } else {
    const diff = embeddedApps.length - 1;
    const tmp16 = require(5474) /* GameIcon */.GameIconImageSize[size];
    obj = { style: tmp3.container };
    const obj1 = { game: embeddedApps[0].application, size };
    const obj2 = { marginRight: 4 };
    obj1.style = obj2;
    const items = [callback(importDefault(5474), obj1), ];
    if (2 === embeddedApps.length) {
      obj = { game: embeddedApps[1].application, size };
      let tmp7 = callback(importDefault(5474), obj);
    } else {
      const obj3 = {};
      const items1 = [tmp3.overflowContainer, ];
      const obj4 = { height: tmp16, minWidth: tmp16 };
      items1[1] = obj4;
      obj3.style = items1;
      const obj5 = { style: tmp3.overflow, variant: "text-xs/bold" };
      const _HermesInternal = HermesInternal;
      obj5.children = "+" + diff;
      obj3.children = callback(require(4126) /* Text */.Text, obj5);
      tmp7 = callback(View, obj3);
    }
    items[1] = tmp7;
    obj.children = items;
    return closure_5(View, obj);
  }
};
