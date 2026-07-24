// Module ID: 13610
// Function ID: 104572
// Name: ProfileCustomizationSubsection
// Dependencies: [5, 29, 57, 31, 27, 9815, 7930, 662, 653, 33, 4130, 1212, 13611, 13663, 1456, 6653, 8404, 9147, 9266, 3989, 13627, 13664, 624, 4324, 9817, 5087, 9158, 4015, 1529, 11676, 8797, 2]

// Module 13610 (ProfileCustomizationSubsection)
import zustandStore from "zustandStore";
import defaultCountFormatter from "defaultCountFormatter";
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import { View } from "_createForOfIteratorHelperLoose";
import closure_10 from "zustandStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ProfileCustomizationSubsection } from "MAX_FAVORITES";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
({ AnalyticEvents: closure_13, AnalyticsSections: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = _createForOfIteratorHelperLoose.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let obj = {
  renderLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return callback(importDefault(13611), { autoFocusElement: autoFocusElement.autoFocusElement });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
let items = [obj, ];
obj = {
  renderLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.kPHroX);
  },
  id: "edit-user-profiles-guilds",
  renderPage() {
    return callback(importDefault(13663), {});
  },
  subSection: ProfileCustomizationSubsection.GUILD
};
items[1] = obj;
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  let tmp2 = stateFromStores(importAllResult.useState(0), 2);
  const _require = tmp2[1];
  let obj = _require(field[14]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj1 = _require(field[15]);
  const params = obj1.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (null != params) {
    autoFocusElement = params.autoFocusElement;
  }
  field = closure_10.useField("subsection");
  obj = { autoFocusElement };
  const tmp6 = (function getTabItems(arg0) {
    let closure_0 = arg0;
    return outer1_18.map((renderLabel) => {
      let id;
      let renderPage;
      ({ id, renderPage } = renderLabel);
      return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
    });
  })(obj);
  obj = { items: tmp6, pageWidth: tmp2[0] };
  let num = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  obj.defaultIndex = num;
  obj.onPageChange = function onPageChange(arg0) {
    let first = outer1_18[arg0];
    if (null == first) {
      first = outer1_18[0];
    }
    const obj = { subsection: first.subSection };
    outer1_10.setState(obj);
  };
  obj.onPageChangeStart = function onPageChangeStart(arg0, onConfirm) {
    const obj = { hasEdits: stateFromStores, resetPending: callback(field[18]).resetAllPending, onHasEdits: callback(field[19]).dismissKeyboard, onConfirm };
    return nativeStackNavigation(field[17])(obj);
  };
  const segmentedControlState = _require(field[16]).useSegmentedControlState(obj);
  const activeIndex = segmentedControlState.activeIndex;
  let first = items[activeIndex.get(activeIndex)];
  if (null == first) {
    first = items[0];
  }
  const tmp10 = nativeStackNavigation(field[20])();
  const handleSubmit = tmp10.handleSubmit;
  const obj4 = _require(field[16]);
  const tmp12 = nativeStackNavigation(field[21])();
  const guild = tmp12.guild;
  const handleSubmit2 = tmp12.handleSubmit;
  const tmp11 = handleSubmit2(tmp10, first);
  const tmp13 = handleSubmit2(tmp12, handleSubmit);
  items = [_isNativeReflectConstruct];
  stateFromStores = _require(field[22]).useStateFromStores(items, () => outer1_11.showNotice());
  const items1 = [field, handleSubmit, handleSubmit2];
  const callback = importAllResult.useCallback(() => {
    if (field === outer1_12.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first.subSection];
  const effect = importAllResult.useEffect(() => {
    let obj = nativeStackNavigation(field[23]);
    obj = { settings_type: "user", subsection: first.subSection, destination_pane: outer1_14.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(outer1_13.SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [guild];
  const effect1 = importAllResult.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = callback(field[24]).initGuildIdentitySettings(guild.id);
      const obj = callback(field[24]);
    }
    return callback(field[18]).resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = importAllResult.useEffect(() => () => {
    outer2_10.resetState();
  }, []);
  const items4 = [nativeStackNavigation, stateFromStores, tmp11.isSubmitting || tmp13.isSubmitting, callback];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    nativeStackNavigation.setOptions({
      headerShadowVisible: false,
      headerRight: closure_8 ? (() => outer2_15(callback(field[25]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = callback(field[11]).intl;
        obj["label"] = intl.string(callback(field[11]).t["R3BPH+"]);
        obj["disabled"] = !outer1_7;
        // CreateGeneratorClosureLongIndex (0x67)
        obj["onPress"] = guild(tmp);
        return outer2_15(callback(field[26]).HeaderTextButton, obj);
      })
    });
  }, items4);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj6 = _require(field[22]);
  if (stateFromStores) {
    stateFromStores = !tmp15;
  }
  nativeStackNavigation(field[28])(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = {
      hasEdits: stateFromStores,
      resetPending: callback(field[18]).resetAllPending,
      onHasEdits: callback(field[19]).dismissKeyboard,
      onConfirm() {
        return outer1_1.dispatch(action);
      }
    };
    nativeStackNavigation(field[17])(obj);
  });
  obj1 = { style: tmp.container, onLayout: callback1 };
  const tmp22 = nativeStackNavigation(field[28]);
  const items5 = [callback(callback, { style: tmp.controls, children: callback(_require(field[29]).Tabs, { state: segmentedControlState }) }), callback(_require(field[30]).SegmentedControlPages, { state: segmentedControlState })];
  obj1.children = items5;
  return callback2(callback, obj1);
});
const result = require("_slicedToArray").fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
