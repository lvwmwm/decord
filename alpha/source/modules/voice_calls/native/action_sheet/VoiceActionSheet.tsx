// Module ID: 15176
// Function ID: 15177
// Name: VoiceActionSheet
// Dependencies: [19, 17, 5767, 21, 5014, 7326, 7351, 504, 5198, 7939, 15177, 15178, 7366, 15185, 15188, 15189, 5600, 15192, 2]
// Exports: default

// Module 15176 (VoiceActionSheet)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7939 */;
import VoiceActionSheetManagerDefault from "VoiceActionSheetManager" /* 15177 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 15178 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5767 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
const VisualEffectViewDefault = tmp2(5600);
const NUFVoiceChannelsTemplateDefault = tmp2(15185);
const GuildEventVoiceBannerDefault = tmp2(15188);
const VoiceEmptyStateDefault = tmp2(15189);
const VoiceMemberListDefault = tmp2(15192);
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, visualEffectView: obj2 };
obj2 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  let children;
  let items2;
  let items3;
  let obj4;
  let obj9;
  let tmp8;
  channel = channel.channel;
  const tmp = closure_8();
  let tmp3 = dependencyMap;
  const tmp4 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations;
  let obj = channel(504);
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id));
  const effect = react.useEffect(() => {
    const isModalOpen = NavigationRouteUtils.isModalOpen;
    NavigationRouteUtils;
    let obj = PrivateChannelCallUtils;
    const tmp3 = channel;
    if (!isModalOpen(obj.getVoiceChannelKey(channel.id))) {
      const obj2 = VoiceActionSheetManagerDefault;
      obj2.initialize(tmp3);
    }
    return () => {
      const obj = closure_1_1(closure_1_2[10]);
      obj.terminate();
    };
  }, items1);
  let obj2 = NUFChannelsManagerDefault;
  if (obj2.requiresVoiceChannelsOnboard()) {
    const obj3 = { children: closure_6(NUFVoiceChannelsTemplateDefault, obj4) };
    const ActionSheet3 = tmp5(7366).ActionSheet;
    obj4 = { channel };
    children = closure_6(ActionSheet3, obj3);
    tmp8 = closure_6;
  } else if (stateFromStores) {
    const obj5 = { children: items2 };
    const ActionSheet2 = tmp5(7366).ActionSheet;
    const obj6 = { channel };
    items2 = [closure_6(GuildEventVoiceBannerDefault, obj6), ];
    const obj7 = { channel };
    items2[1] = closure_6(VoiceEmptyStateDefault, obj7);
    children = closure_7(ActionSheet2, obj5);
    tmp8 = closure_6;
  } else {
    tmp8 = closure_6;
    const obj8 = { scrollable: true, startExpanded: true, children: closure_7(closure_4, obj9) };
    obj9 = { style: tmp.container, children: items3 };
    const ActionSheet = tmp5(7366).ActionSheet;
    const obj10 = { blurTheme: "dark", style: tmp.visualEffectView };
    items3 = [closure_6(VisualEffectViewDefault, obj10), ];
    const obj11 = { channel };
    items3[1] = closure_6(VoiceMemberListDefault, obj11);
    children = closure_6(ActionSheet, obj8);
  }
  return tmp8(channel(7326).AnalyticsLocationProvider, { value: analyticsLocations, children });
};
