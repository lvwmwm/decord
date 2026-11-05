// Module ID: 6859
// Function ID: 6860
// Name: GuildLimitedAccessInfoAlert
// Dependencies: [19, 5014, 6860, 1072, 21, 5143, 6861, 575, 1113, 6168, 1187, 5763, 2]
// Exports: default

// Module 6859 (GuildLimitedAccessInfoAlert)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5763 */;
import AlertDefault from "Alert" /* 6168 */;
import GuildLimitedAccessConstants from "GuildLimitedAccessConstants" /* 6860 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5014 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import TextStyles from "TextStyles" /* 6861 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const helpdeskArticle = GuildLimitedAccessConstants.GUILD_LIMITED_ACCESS_HC_LINK;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, text: { textAlign: "center", marginVertical: 8 } };
obj2 = { textAlign: "center", marginVertical: 12 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  let guildId;
  let intl3;
  let items;
  let onClose;
  ({ guildId, onClose } = arg0);
  const tmp = closure_7();
  const intl = intl4.intl;
  const obj = { helpdeskArticle };
  const formatResult = intl.format(intl4.t.ZqkXsC, obj);
  const guild = GuildStore.getGuild(guildId);
  let formatResult1 = formatResult;
  const tmp4 = helpdeskArticle;
  if (null != guild) {
    const intl2 = tmp2(1113).intl;
    const obj2 = { guildName: guild.name, helpdeskArticle: tmp4 };
    formatResult1 = intl2.format(tmp2(1113).t.jn0Xyx, obj2);
  }
  const obj3 = { onClose, children: items };
  const obj4 = { style: tmp.header, children: intl3.string(intl4.t.kJwpBW) };
  const tmp8 = AlertDefault;
  const LegacyText = tmp2(1187).LegacyText;
  intl3 = tmp2(1113).intl;
  items = [hasOwnProperty(LegacyText, obj4), ];
  const obj5 = { style: tmp.text, variant: "body-md/medium", children: formatResult1 };
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  return metroRequire(tmp8, obj3);
};
