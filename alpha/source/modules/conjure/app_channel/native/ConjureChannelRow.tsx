// Module ID: 18220
// Function ID: 18221
// Name: ConjureChannelRow
// Dependencies: [19, 11027, 21, 5009, 575, 18221, 13887, 14669, 1114, 3865, 12429, 18222, 2]
// Exports: default

// Module 18220 (ConjureChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
import BaseChannelItem from "BaseChannelItem" /* 13887 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14669 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 18221 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
  const intl = tmp6(1114).intl;
  ({ name: intl2.string(_modDef3865.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp6(13887).BaseChannelName;
  intl2 = tmp6(1114).intl;
  ({ mode: DEFAULT, IconComponent: tmp6(12429).MagicWandIcon });
  const BaseChannelIcon = tmp6(13887).BaseChannelIcon;
  return <tmp2Result onPress={openConjureProjectsSheetDefault} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef3865.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={null} />;
};
