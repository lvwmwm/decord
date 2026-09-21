// Module ID: 14103
// Function ID: 14104
// Name: GuildLimitedAccessInfoAlert
// Dependencies: [19, 2067, 14104, 1078, 21, 4758, 5743, 580, 558, 568, 1119, 1181, 4754, 5207, 2]

// Module 14103 (GuildLimitedAccessInfoAlert)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import Text_Text from "Text/Text" /* 4754 */;
import common_AlertDefault from "common/Alert" /* 5207 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import TextStyles from "TextStyles" /* 5743 */;

require = fn;
const helpdeskArticle = fn(14104).GUILD_LIMITED_ACCESS_HC_LINK;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let obj2 = { header: null, text: null };
let obj3 = {};
const merged = Object.assign(TextStyles(fn(1078).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj3.marginVertical = 12;
obj2.header = obj3;
obj2.text = { textAlign: "center", marginVertical: 8 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ guildId, onClose } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const obj2 = { helpdeskArticle };
    const formatResult = intl.format(tmp(1119).t.ZqkXsC, obj2);
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      const intl2 = tmp(1119).intl;
      const obj3 = { guildName: guild.name, helpdeskArticle };
      first = intl2.format(tmp(1119).t.jn0Xyx, obj3);
    }
    cResult[1] = guildId;
    cResult[2] = first;
    let tmp8 = first;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1119).intl;
    const stringResult = intl3.string(tmp(1119).t.kJwpBW);
    cResult[3] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp4.header) {
    const obj4 = { style: tmp4.header, children: tmp13 };
    const tmp17 = hasOwnProperty(tmp(1181).LegacyText, obj4);
    cResult[4] = tmp4.header;
    cResult[5] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    if (cResult[7] === tmp4.text) {
      let tmp18 = cResult[8];
    }
    if (cResult[9] === onClose) {
      if (cResult[10] === tmp15) {
        if (cResult[11] === tmp18) {
          let tmp20 = cResult[12];
        }
        return tmp20;
      }
    }
    const obj5 = { onClose, children: null };
    const items = [tmp15, tmp18];
    obj5.children = items;
    const tmp23 = timestampProducer(common_AlertDefault, obj5);
    cResult[9] = onClose;
    cResult[10] = tmp15;
    cResult[11] = tmp18;
    cResult[12] = tmp23;
    tmp20 = tmp23;
  }
  const tmp19 = hasOwnProperty(Text_Text.Text, { style: tmp4.text, variant: "text-md/medium", children: tmp8 });
  cResult[6] = tmp8;
  cResult[7] = tmp4.text;
  cResult[8] = tmp19;
  tmp18 = tmp19;
}) : ((arg0) => {
  ({ guildId, onClose } = arg0);
  const tmp = closure_7();
  const intl = util.intl;
  guild = GuildStore.getGuild(guildId);
  let formatResult1 = intl.format(util.t.ZqkXsC, { helpdeskArticle });
  if (null != guild) {
    const intl2 = tmp2(1119).intl;
    const obj2 = { guildName: guild.name, helpdeskArticle: tmp4 };
    formatResult1 = intl2.format(tmp2(1119).t.jn0Xyx, obj2);
  }
  const obj3 = { onClose, children: null };
  const formatResult = intl.format(util.t.ZqkXsC, { helpdeskArticle });
  const obj = { helpdeskArticle };
  tmp4 = helpdeskArticle;
  const obj4 = { style: tmp.header, children: null };
  const intl3 = tmp2(1119).intl;
  obj4.children = intl3.string(util.t.kJwpBW);
  const items = [hasOwnProperty(native.LegacyText, obj4), hasOwnProperty(Text_Text.Text, { style: tmp.text, variant: "text-md/medium", children: formatResult1 })];
  obj3.children = items;
  return timestampProducer(common_AlertDefault, obj3);
});
