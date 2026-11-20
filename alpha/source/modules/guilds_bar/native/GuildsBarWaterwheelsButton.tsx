// Module ID: 17803
// Function ID: 17804
// Name: GuildsBarWaterwheelsButton
// Dependencies: [19, 17, 9924, 4827, 1071, 21, 4794, 17758, 5385, 1112, 2563, 17696, 17700, 5358, 575, 17746, 504, 17796, 16891, 2]

// Module 17803 (GuildsBarWaterwheelsButton)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef2563 from "module_2563" /* 2563 */;
import useToken from "useToken" /* 5358 */;
import Text_Text from "Text/Text" /* 5385 */;
import CompassIcon2 from "CompassIcon" /* 16891 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 17696 */;
import openWaterwheelsInterestPickerDefault from "openWaterwheelsInterestPicker" /* 17700 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 17746 */;
import HomeDrawerShared from "HomeDrawerShared" /* 17758 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 17796 */;
import react from "react" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 9924 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4794 */;
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
  obj2 = { variant: "body-md/medium", color: "text-default", children: intl.string(_modDef2563.zFl2A4) };
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
let closure_10 = createStyles.createStyles((marginBottom) => {
  const obj = { stretch: obj2 };
  return obj;
});
const memoResult = react.memo(function GuildsBarWaterwheelsButton() {
  let CompassIcon;
  let guildId;
  let intl;
  let items1;
  let obj6;
  let onPress;
  const obj = useToken;
  const tmp = closure_10(obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING));
  const obj2 = GuildsBarAnimatedItemWrapper;
  const items = [SelectedGuildStore];
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => guildId.getGuildId() === WATERWHEELS);
  const obj4 = { style: tmp.stretch, children: items1 };
  const memo = react.useMemo(() => ({ onPress }), []);
  items1 = [metroImportAll(GuildsBarSeparatorDefault, {}), ];
  const obj5 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: intl.string(_modDef2563.zFl2A4), expandedChildren: metroImportAll(GuildsBarWaterwheelsExpandedChildren, {}), children: metroImportAll(CompassIcon, obj6) };
  const tmp8 = GuildsBarAnimatedItemWrapperDefault;
  intl = intl2.intl;
  CompassIcon = CompassIcon2.CompassIcon;
  const colors = nativeDefault.colors;
  obj6 = { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  items1[1] = metroImportAll(tmp8, obj5);
  return React4(View, obj4);
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarWaterwheelsButton.tsx");

export default memoResult;
