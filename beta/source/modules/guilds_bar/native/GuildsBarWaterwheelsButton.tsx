// Module ID: 18796
// Function ID: 18797
// Name: GuildsBarWaterwheelsButton
// Dependencies: [5, 19, 17, 9013, 9032, 21, 5170, 18754, 5783, 1113, 2534, 6831, 18797, 2118, 18797, 5347, 18742, 504, 18789, 17955, 575, 2]

// Module 18796 (GuildsBarWaterwheelsButton)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef2534 from "module_2534" /* 2534 */;
import RootNavigationRef from "RootNavigationRef" /* 5347 */;
import Text_Text from "Text/Text" /* 5783 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import CompassIcon2 from "CompassIcon" /* 17955 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18742 */;
import HomeDrawerShared from "HomeDrawerShared" /* 18754 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 18789 */;
import WaterwheelsInterestPickerModal from "WaterwheelsInterestPickerModal" /* 18797 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 9013 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 9032 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

let c9;
let metroImportAll;
function GuildsBarWaterwheelsExpandedChildren() {
  let Text;
  let intl;
  let obj2;
  const obj = { title: metroImportAll(Text, obj2), subtitle: null };
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  obj2 = { variant: "body-md/medium", color: "text-default", children: intl.string(_modDef2534.zFl2A4) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportAll(HomeDrawerSharedItem, obj);
}
function handleWaterwheelsPress() {
  let paths;
  if (InterestPickerSessionStore.hasSeenPicker()) {
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj2 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
      rootNavigationRef.navigate("icymi", obj2);
    }
  } else {
    const pushLazy = ModalActionCreatorsDefault.pushLazy;
    const tmp5 = _asyncToGenerator(async () => {
      let c0;
      let c1;
      await require("asyncRequire")(paths[12], paths.paths);
      return arg1.default;
    });
    pushLazy(tmp5, {}, WaterwheelsInterestPickerModal.WATERWHEELS_INTEREST_PICKER_MODAL_KEY);
  }
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const memoResult = react.memo(function GuildsBarWaterwheelsButton() {
  let CompassIcon;
  let intl;
  let isTabFocused;
  let items1;
  let obj5;
  let onPress;
  const tmp = closure_10();
  const obj = GuildsBarAnimatedItemWrapper;
  const items = [ICYMIStore];
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => isTabFocused.getIsTabFocused());
  const obj3 = { style: tmp.stretch, children: items1 };
  const memo = react.useMemo(() => ({ onPress }), []);
  items1 = [metroImportAll(GuildsBarSeparatorDefault, {}), ];
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: intl.string(_modDef2534.zFl2A4), expandedChildren: metroImportAll(GuildsBarWaterwheelsExpandedChildren, {}), children: metroImportAll(CompassIcon, obj5) };
  const tmp8 = GuildsBarAnimatedItemWrapperDefault;
  intl = intl2.intl;
  CompassIcon = CompassIcon2.CompassIcon;
  const colors = nativeDefault.colors;
  obj5 = { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  items1[1] = metroImportAll(tmp8, obj4);
  return React4(View, obj3);
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarWaterwheelsButton.tsx");

export default memoResult;
