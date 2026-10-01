// Module ID: 11044
// Function ID: 11045
// Name: ChannelsAndRolesModal
// Dependencies: [32, 19, 17, 2067, 6522, 21, 4836, 576, 563, 6753, 9083, 1115, 9084, 11045, 11051, 10385, 2]
// Exports: default

// Module 11044 (ChannelsAndRolesModal)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6522 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 6753 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10385 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
function ChannelsAndRolesScreen(guildId) {
  let closure_1;
  let closure_3;
  let items1;
  let items3;
  let obj6;
  let tmp19;
  guildId = guildId.guildId;
  let defaultTab = guildId.defaultTab;
  importDefault = undefined;
  let defaultIndex;
  _slicedToArray = undefined;
  let segmentedControlState;
  let tmp = closure_10();
  const items = [GuildStore];
  const obj = guildId(defaultIndex[8]);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp6 = require("useGuildOnboardingAvailable")(stateFromStores);
  importDefault = tmp6;
  const useState = segmentedControlState.useState;
  const obj2 = segmentedControlState;
  if (defaultTab == null) {
    defaultTab = tmp6 ? tmp7.CUSTOMIZE : tmp7.BROWSE;
  }
  const tmp8 = _slicedToArray(useState(defaultTab), 2);
  defaultIndex = tmp8[0];
  _slicedToArray = tmp10;
  const obj3 = { pageWidth: 0, defaultIndex, onSetActiveIndex: tmp8[1], items: items1.map((id) => ({ id, label: id, page: null })) };
  const useSegmentedControlState = tmp2(tmp3[10]).useSegmentedControlState;
  guildId(defaultIndex[10]);
  const intl = tmp2(tmp3[11]).intl;
  items1 = [intl.string(tmp2(tmp3[11]).t.F1VixV), ];
  const intl2 = tmp2(tmp3[11]).intl;
  items1[1] = intl2.string(guildId(defaultIndex[11]).t.MWmtj8);
  segmentedControlState = useSegmentedControlState(obj3);
  const items2 = [tmp6, defaultIndex, segmentedControlState];
  const effect = obj2.useEffect(() => {
    const tmp = closure_1 || first !== GuildOnboardingTab.CUSTOMIZE;
    if (!tmp) {
      closure_3(GuildOnboardingTab.BROWSE);
      segmentedControlState.setActiveIndex(GuildOnboardingTab.BROWSE, false);
    }
  }, items2);
  let tmp16 = null;
  const obj4 = { style: tmp.screen, children: items3 };
  const tmp14 = closure_9;
  if (tmp6) {
    const obj5 = { style: tmp.tabBar, children: closure_8(guildId(defaultIndex[12]).SegmentedControl, obj6) };
    obj6 = { state: segmentedControlState };
    tmp16 = closure_8(tmp15, obj5);
  }
  items3 = [tmp16, ];
  if (defaultIndex === GuildOnboardingTab.CUSTOMIZE) {
    const obj7 = { setTab: tmp8[1], guildId };
    tmp19 = closure_8(tmp5(tmp3[13]), obj7);
  } else {
    const obj8 = { guildId };
    tmp19 = closure_8(tmp5(tmp3[14]), obj8);
  }
  items3[1] = tmp19;
  return tmp14(View, obj4);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const GuildOnboardingTab = GuildOnboardingPromptsConstants.GuildOnboardingTab;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: obj2, tabBar: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ChannelsAndRolesModal.tsx");

export default function ChannelsAndRolesModal(arg0) {
  let defaultTab;
  let guildId;
  let stringResult;
  ({ guildId: require, defaultTab: importDefault } = arg0);
  let obj = useStateFromStores;
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
  const tmp2 = useGuildOnboardingAvailableDefault(stateFromStores);
  const tmp4 = ModalStackNavigatorDefault;
  const intl = intl3.intl;
  const string = intl.string;
  const t = intl3.t;
  const tmp3 = closure_8;
  if (tmp2) {
    stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  const obj2 = {
    screenKey: "channelAndRolesModal",
    title: stringResult,
    render() {
      const obj = { guildId: require, defaultTab: importDefault };
      return metroImportAll(ChannelsAndRolesScreen, obj);
    }
  };
  return tmp3(tmp4, obj2);
};
