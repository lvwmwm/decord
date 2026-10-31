// Module ID: 18263
// Function ID: 18264
// Name: ConjureChannelRow
// Dependencies: [19, 11046, 21, 5014, 575, 18264, 13922, 14707, 1113, 3868, 12464, 18265, 2]
// Exports: default

// Module 18263 (ConjureChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3868 from "module_3868" /* 3868 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11046 */;
import BaseChannelItem from "BaseChannelItem" /* 13922 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14707 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 18264 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const BaseChannelItemDefault = BaseChannelItem;

let obj2;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
const obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default function ConjureChannelRow(selected) {
  let DEFAULT;
  let intl2;
  let tmp6;
  selected = selected.selected;
  const guild = selected.guild;
  const tmp = closure_4();
  const tmp4 = useConjureGuildUnreadSummaryDefault(guild.id);
  const hasUnread = tmp4.hasUnread;
  const badgeCount = tmp4.badgeCount;
  if (true === selected) {
    DEFAULT = BaseChannelItem.ChannelModes.SELECTED;
    tmp6 = require;
  } else {
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp6 = tmp5;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp6 = tmp5;
    }
  }
  BaseChannelItemDefault;
  const intl = tmp6(1113).intl;
  ({ name: intl2.string(_modDef3868.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp6(13922).BaseChannelName;
  intl2 = tmp6(1113).intl;
  ({ mode: DEFAULT, IconComponent: tmp6(12464).MagicWandIcon });
  const BaseChannelIcon = tmp6(13922).BaseChannelIcon;
  return <tmp2Result onPress={openConjureProjectsSheetDefault} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef3868.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={null} />;
};
