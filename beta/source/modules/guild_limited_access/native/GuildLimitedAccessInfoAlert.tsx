// Module ID: 13376
// Function ID: 13377
// Name: GuildLimitedAccessInfoAlert
// Dependencies: [19, 2067, 13377, 1074, 21, 4836, 5836, 576, 1115, 5300, 1177, 4832, 2]
// Exports: default

// Module 13376 (GuildLimitedAccessInfoAlert)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import GuildLimitedAccessConstants from "GuildLimitedAccessConstants" /* 13377 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
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
    const intl2 = tmp2(1115).intl;
    const obj2 = { guildName: guild.name, helpdeskArticle: tmp4 };
    formatResult1 = intl2.format(tmp2(1115).t.jn0Xyx, obj2);
  }
  const obj3 = { onClose, children: items };
  const obj4 = { style: tmp.header, children: intl3.string(intl4.t.kJwpBW) };
  const tmp8 = AlertDefault;
  const LegacyText = tmp2(1177).LegacyText;
  intl3 = tmp2(1115).intl;
  items = [hasOwnProperty(LegacyText, obj4), ];
  const obj5 = { style: tmp.text, variant: "text-md/medium", children: formatResult1 };
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  return metroRequire(tmp8, obj3);
};
