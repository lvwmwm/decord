// Module ID: 18976
// Function ID: 18977
// Name: GuildsBarWaterwheelsButton
// Dependencies: [19, 17, 10151, 5286, 1072, 21, 5243, 18935, 5866, 1113, 2553, 18892, 18977, 18923, 504, 18969, 18110, 575, 2]

// Module 18976 (GuildsBarWaterwheelsButton)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Text_Text from "Text/Text" /* 5866 */;
import CompassIcon2 from "CompassIcon" /* 18110 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 18892 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18923 */;
import HomeDrawerShared from "HomeDrawerShared" /* 18935 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 18969 */;
import openWaterwheelsInterestPickerDefault from "openWaterwheelsInterestPicker" /* 18977 */;
import react from "react" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10151 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

let c9;
let metroImportAll;
function GuildsBarWaterwheelsExpandedChildren() {
  let Text;
  let intl;
  let obj2;
  const obj = { title: metroImportAll(Text, obj2), subtitle: null };
  const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
  obj2 = { variant: "body-md/medium", color: "text-default", children: intl.string(_modDef2553.zFl2A4) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportAll(HomeDrawerSharedItem, obj);
}
function handleWaterwheelsPress() {
  const obj = WaterwheelsDiscoverNavigation;
  if (obj.selectWaterwheelsDiscoverFromGuildsBar()) {
    if (!InterestPickerSessionStore.hasSeenPicker()) {
      openWaterwheelsInterestPickerDefault();
    }
  }
}
const View = react_native.View;
const WATERWHEELS = Constants.WATERWHEELS;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const memoResult = react.memo(function GuildsBarWaterwheelsButton() {
  let CompassIcon;
  let guildId;
  let intl;
  let items1;
  let obj5;
  let onPress;
  const tmp = closure_10();
  const obj = GuildsBarAnimatedItemWrapper;
  const items = [SelectedGuildStore];
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === WATERWHEELS);
  const obj3 = { style: tmp.stretch, children: items1 };
  const memo = react.useMemo(() => ({ onPress }), []);
  items1 = [metroImportAll(GuildsBarSeparatorDefault, {}), ];
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: intl.string(_modDef2553.zFl2A4), expandedChildren: metroImportAll(GuildsBarWaterwheelsExpandedChildren, {}), children: metroImportAll(CompassIcon, obj5) };
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
