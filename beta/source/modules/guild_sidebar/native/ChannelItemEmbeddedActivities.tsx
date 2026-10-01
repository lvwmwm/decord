// Module ID: 15864
// Function ID: 15865
// Name: ChannelItemEmbeddedActivities
// Dependencies: [19, 17, 21, 4836, 576, 6593, 4832, 2]
// Exports: default

// Module 15864 (ChannelItemEmbeddedActivities)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GameIcon from "GameIcon" /* 6593 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GameIconDefault = GameIcon;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { overflow: { lineHeight: 16, textAlign: "center", textAlignVertical: "center", padding: 4 }, overflowContainer: obj2, container: { display: "flex", flexDirection: "row" }, modeMuted: { opacity: 0.3 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default function ChannelItemEmbeddedActivities(muted) {
  let Text;
  let embeddedApps;
  let items;
  let items1;
  let obj7;
  ({ embeddedApps, size } = muted);
  if (size === undefined) {
    size = GameIcon.GameIconSizes.SIZE_24;
  }
  let modeMuted = muted.muted;
  const tmp3 = closure_6();
  if (embeddedApps.length <= 0) {
    return null;
  } else if (1 === embeddedApps.length) {
    const obj2 = { game: embeddedApps[0].application, size, style: modeMuted };
    const tmp5 = React3;
    const tmp8 = GameIconDefault;
    if (modeMuted) {
      modeMuted = tmp3.modeMuted;
    }
    return tmp5(tmp8, obj2);
  } else {
    let tmp16Result;
    const application = embeddedApps[0].application;
    const application2 = embeddedApps[1].application;
    const diff = embeddedApps.length - 1;
    const tmp13 = GameIcon.GameIconImageSize[size];
    const obj3 = { style: tmp3.container, children: items };
    const obj4 = { game: application, size, style: { marginRight: 4 } };
    items = [React3(GameIconDefault, obj4), ];
    const tmp11 = require;
    const tmp14 = hasOwnProperty;
    const tmp17 = importDefault;
    if (2 === embeddedApps.length) {
      const obj = { game: application2, size };
      tmp16Result = tmp16(tmp17(6593), obj);
    } else {
      const obj5 = { style: items1, children: React3(Text, obj7) };
      items1 = [tmp3.overflowContainer, ];
      const obj6 = { height: tmp13, minWidth: tmp13 };
      items1[1] = obj6;
      const _HermesInternal = HermesInternal;
      obj7 = { style: tmp3.overflow, variant: "text-xs/bold", children: "+" + diff };
      Text = tmp11(4832).Text;
      tmp16Result = tmp16(tmp15, obj5);
    }
    items[1] = tmp16Result;
    return tmp14(View, obj3);
  }
};
