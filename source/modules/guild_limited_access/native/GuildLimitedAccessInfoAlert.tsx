// Module ID: 12893
// Function ID: 100132
// Name: GuildLimitedAccessInfoAlert
// Dependencies: [31, 1838, 12894, 653, 33, 4130, 5052, 689, 1212, 4561, 1273, 4126, 2]
// Exports: default

// Module 12893 (GuildLimitedAccessInfoAlert)
import "result";
import closure_3 from "_createForOfIteratorHelperLoose";
import { GUILD_LIMITED_ACCESS_HC_LINK as closure_4 } from "GUILD_LIMITED_ACCESS_HC_LINK";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_BOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose["marginVertical"] = 12;
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textAlign: "center", marginVertical: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("GUILD_LIMITED_ACCESS_HC_LINK").fileFinishedImporting("modules/guild_limited_access/native/GuildLimitedAccessInfoAlert.tsx");

export default function GuildLimitedAccessInfoAlert(arg0) {
  let guildId;
  let onClose;
  ({ guildId, onClose } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const intl = require(1212) /* getSystemLocale */.intl;
  let obj = { helpdeskArticle: closure_4 };
  let formatResult = intl.format(require(1212) /* getSystemLocale */.t.ZqkXsC, obj);
  guild = guild.getGuild(guildId);
  if (null != guild) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { guildName: guild.name, helpdeskArticle: closure_4 };
    formatResult = intl2.format(require(1212) /* getSystemLocale */.t.jn0Xyx, obj);
  }
  obj = { onClose };
  const obj1 = { style: tmp.header };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl3.string(require(1212) /* getSystemLocale */.t.kJwpBW);
  const items = [callback(require(1273) /* Button */.LegacyText, obj1), ];
  const obj2 = { style: tmp.text, variant: "text-md/medium", children: formatResult };
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  return callback2(importDefault(4561), obj);
};
