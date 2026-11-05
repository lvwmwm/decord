// Module ID: 11528
// Function ID: 11529
// Name: useAttachPinotMemberCoachmark
// Dependencies: [19, 1072, 4989, 21, 11529, 575, 11521, 11531, 1113, 3287, 5763, 7705, 5846, 2190, 10141, 2]
// Exports: useAttachPinotMemberCoachmark

// Module 11528 (useAttachPinotMemberCoachmark)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef3287 from "module_3287" /* 3287 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4989 */;
import Text_Text from "Text/Text" /* 5763 */;
import ExperimentalWebIcon2 from "ExperimentalWebIcon" /* 11529 */;
import PinotAnalytics from "PinotAnalytics" /* 11531 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
function renderWebIcon() {
  const obj = { size: "lg", color: nativeDefault.colors.ICON_STRONG };
  const ExperimentalWebIcon = ExperimentalWebIcon2.ExperimentalWebIcon;
  return metroImportDefault(ExperimentalWebIcon, obj);
}
({ HelpdeskArticles: closure_4, UserSettingsSections: hasOwnProperty } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let result = size.fileFinishedImporting("modules/pinot/native/useAttachPinotMemberCoachmark.tsx");

export function useAttachPinotMemberCoachmark(ref1, channel, bottom) {
  let constants2;
  let constants3;
  let markAsDismissed;
  let position;
  _require = bottom;
  let obj = require("usePinotMemberCoachmark");
  const pinotMemberCoachmark = obj.usePinotMemberCoachmark(channel, "mobile_member_coachmark");
  const visible = pinotMemberCoachmark.visible;
  markAsDismissed = pinotMemberCoachmark.markAsDismissed;
  const guild_id = channel.guild_id;
  let items = [visible, guild_id];
  const effect = guild_id.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      const obj2 = { noticeType: "member_coachmark", guildId: guild_id };
      const obj = PinotAnalytics;
      const result = obj.trackPinotNoticeViewed(obj2);
    }
  }, items);
  const items1 = [visible, bottom, guild_id, markAsDismissed];
  const memo = guild_id.useMemo(() => {
    let guildId;
    let intl;
    let intl3;
    let intl4;
    let items;
    let obj2;
    let obj = {
      title: intl.string(_modDef3287.MrT2mn),
      description: React4(metroImportAll, obj2),
      renderImgComponent: renderWebIcon,
      visible,
      position,
      offsetY: 12,
      onDismiss() {
        const obj = position(markAsDismissed[7]);
        const obj2 = { noticeType: "member_coachmark", guildId };
        const result = obj.trackPinotNoticeAction(obj2, "dismiss");
        closure_1_2(constants3.USER_DISMISS);
      },
      buttonLabel: intl4.string(intl5.t.hvVgAZ),
      buttonVariant: "primary",
      onButtonPress() {
        const obj = position(markAsDismissed[7]);
        const obj2 = { noticeType: "member_coachmark", guildId };
        const result = obj.trackPinotNoticeAction(obj2, "learn_more");
        const openURL = visible(markAsDismissed[12]).openURL;
        visible(markAsDismissed[12]);
        const obj3 = visible(markAsDismissed[13]);
        openURL(obj3.getArticleURL(constants.DISCOVERABLE_CONTENT_ON_THE_WEB));
      }
    };
    intl = intl5.intl;
    obj2 = { children: items };
    const intl2 = intl5.intl;
    items = [intl2.string(_modDef3287.x9NGts), "\n", ];
    let obj3 = {
      variant: "body-sm/medium",
      color: "text-link",
      accessibilityRole: "link",
      onPress() {
        const obj = position(markAsDismissed[7]);
        const obj2 = { noticeType: "member_coachmark", guildId };
        const result = obj.trackPinotNoticeAction(obj2, "open_settings");
        const obj3 = position(markAsDismissed[11]);
        const obj4 = { screen: constants2.DATA_AND_PRIVACY };
        obj3.openUserSettings(obj4);
      },
      children: intl3.string(_modDef3287.eJZ8MS)
    };
    const Text = Text_Text.Text;
    intl3 = intl5.intl;
    items[2] = metroImportDefault(Text, obj3);
    intl4 = intl5.intl;
    return obj;
  }, items1);
  let obj2 = require("useCoachmark");
  const coachmark = obj2.useCoachmark(ref1, memo);
}
