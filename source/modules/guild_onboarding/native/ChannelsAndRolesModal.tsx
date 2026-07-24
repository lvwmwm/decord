// Module ID: 10002
// Function ID: 77194
// Name: ChannelsAndRolesScreen
// Dependencies: [57, 31, 27, 1838, 5059, 33, 4130, 689, 624, 5730, 8404, 1212, 8799, 10003, 10009, 9148, 2]
// Exports: default

// Module 10002 (ChannelsAndRolesScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import { GuildOnboardingTab } from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function ChannelsAndRolesScreen(guildId) {
  guildId = guildId.guildId;
  const defaultTab = guildId.defaultTab;
  let first;
  let callback;
  let segmentedControlState;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(first[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  const tmp3 = importDefault(first[9])(stateFromStores);
  importDefault = tmp3;
  if (null != defaultTab) {
    const tmp7 = callback(segmentedControlState.useState(defaultTab), 2);
    first = tmp7[0];
    callback = tmp9;
    let obj1 = guildId(first[10]);
    obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp7[1] };
    const intl = guildId(first[11]).intl;
    const items1 = [intl.string(guildId(first[11]).t.F1VixV), ];
    const intl2 = guildId(first[11]).intl;
    items1[1] = intl2.string(guildId(first[11]).t.MWmtj8);
    obj.items = items1.map((id) => ({ id, label: id, page: null }));
    segmentedControlState = obj1.useSegmentedControlState(obj);
    const items2 = [tmp3, first, segmentedControlState];
    const effect = segmentedControlState.useEffect(() => {
      let tmp = closure_1;
      if (!closure_1) {
        tmp = first !== outer1_7.CUSTOMIZE;
      }
      if (!tmp) {
        _undefined(outer1_7.BROWSE);
        segmentedControlState.setActiveIndex(outer1_7.BROWSE, false);
      }
    }, items2);
    obj = { style: tmp.screen };
    let tmp17 = null;
    if (tmp3) {
      obj1 = { style: tmp.tabBar };
      const obj2 = { state: segmentedControlState };
      obj1.children = callback2(guildId(first[12]).SegmentedControl, obj2);
      tmp17 = callback2(View, obj1);
    }
    const items3 = [tmp17, ];
    if (first === GuildOnboardingTab.CUSTOMIZE) {
      const obj3 = { setTab: tmp9, guildId };
      let tmp27 = callback2(importDefault(first[13]), obj3);
    } else {
      const obj4 = { guildId };
      tmp27 = callback2(importDefault(first[14]), obj4);
    }
    items3[1] = tmp27;
    obj.children = items3;
    return closure_9(View, obj);
  }
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.screen = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tabBar = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default function ChannelsAndRolesModal(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, defaultTab: importDefault } = arg0);
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(closure_0));
  obj = { screenKey: "channelAndRolesModal" };
  const tmp2 = importDefault(5730)(stateFromStores);
  const tmp3 = closure_8;
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (tmp2) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj.title = stringResult;
  obj.render = function render() {
    return outer1_8(outer1_11, { guildId: closure_0, defaultTab: closure_1 });
  };
  return tmp3(importDefault(9148), obj);
};
