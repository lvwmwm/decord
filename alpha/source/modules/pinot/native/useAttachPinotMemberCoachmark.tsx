// Module ID: 11332
// Function ID: 11333
// Name: useAttachPinotMemberCoachmark
// Dependencies: [19, 1072, 4860, 21, 11333, 575, 11325, 11335, 1113, 3160, 5624, 7563, 5709, 2061, 9954, 2]
// Exports: useAttachPinotMemberCoachmark

// Module 11332 (useAttachPinotMemberCoachmark)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef3160 from "module_3160" /* 3160 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import Text_Text from "Text/Text" /* 5624 */;
import ExperimentalWebIcon2 from "ExperimentalWebIcon" /* 11333 */;
import PinotAnalytics from "PinotAnalytics" /* 11335 */;
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
      title: intl.string(_modDef3160.MrT2mn),
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
        closure_1_2(constants3.TAKE_ACTION);
        const openURL = visible(markAsDismissed[12]).openURL;
        visible(markAsDismissed[12]);
        const obj3 = visible(markAsDismissed[13]);
        openURL(obj3.getArticleURL(constants.DISCOVERABLE_CONTENT_ON_THE_WEB));
      }
    };
    intl = intl5.intl;
    obj2 = { children: items };
    const intl2 = intl5.intl;
    items = [intl2.string(_modDef3160.x9NGts), "\n", ];
    let obj3 = {
      variant: "text-sm/medium",
      color: "text-link",
      accessibilityRole: "link",
      onPress() {
        const obj = position(markAsDismissed[7]);
        const obj2 = { noticeType: "member_coachmark", guildId };
        const result = obj.trackPinotNoticeAction(obj2, "open_settings");
        closure_1_2(constants3.TAKE_ACTION);
        const obj3 = position(markAsDismissed[11]);
        const obj4 = { screen: constants2.DATA_AND_PRIVACY };
        obj3.openUserSettings(obj4);
      },
      children: intl3.string(_modDef3160.eJZ8MS)
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
