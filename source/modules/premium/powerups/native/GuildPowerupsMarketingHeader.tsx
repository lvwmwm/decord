// Module ID: 12562
// Function ID: 97229
// Name: PerkText
// Dependencies: [31, 27, 4017, 33, 4130, 689, 666, 4126, 12563, 11550, 11575, 1212, 2230, 12564, 2]
// Exports: default

// Module 12562 (PerkText)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function PerkText(powerup) {
  const obj = { color: "text-overlay-light", variant: "text-sm/semibold", children: powerup.powerup.title };
  return jsx(require(4126) /* Text */.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: powerup.powerup.title });
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj4 = require("t")("#000000");
_createForOfIteratorHelperLoose.backgroundColor = require("t")("#000000").alpha(0.18).hex();
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { textAlign: "center" };
const alphaResult = require("t")("#000000").alpha(0.18);
const obj7 = require("t")("#FFFFFF");
obj1.color = require("t")("#FFFFFF").alpha(0.5).hex();
_createForOfIteratorHelperLoose.text = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const alphaResult1 = require("t")("#FFFFFF").alpha(0.5);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default function GuildPowerupsMarketingHeader(guild) {
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose();
  const arr = importDefault(12563)(guild.id);
  const items = [guild.id];
  const effect = React.useEffect(() => {
    if (outer1_5.shouldFetchCatalogForGuild(guild.id)) {
      const powerupCatalogForGuild = guild(outer1_2[9]).fetchPowerupCatalogForGuild(guild.id);
      const obj = guild(outer1_2[9]);
    }
  }, items);
  if (importDefault(11575)(guild.id)) {
    let length;
    if (null != arr) {
      length = arr.length;
    }
    let num2 = 0;
    if (null != length) {
      num2 = length;
    }
    if (0 !== num2) {
      let obj = { style: tmp.container };
      obj = { style: tmp.text, variant: "text-sm/semibold" };
      const intl = guild(1212).intl;
      obj = {};
      let str3 = "";
      if (null != arr) {
        str3 = "";
        if (0 !== arr.length) {
          let first = importDefault(12564)(arr);
          if (1 === first.length) {
            const obj1 = {};
            first = first[0];
            obj1.powerup = first;
            let formatResult = <PerkText />;
          } else {
            const intl2 = guild(1212).intl;
            const obj2 = {};
            const obj3 = { powerup: first[0] };
            obj2.perk1 = <PerkText powerup={first[0]} />;
            const obj4 = { powerup: first[1] };
            obj2.perk2 = <PerkText powerup={first[1]} />;
            formatResult = intl2.format(importDefault(2230).MNO3sG, obj2);
          }
        }
      }
      obj.perks = str3;
      obj.children = intl.format(importDefault(2230)["7lwpzR"], obj);
      obj.children = jsx(guild(4126).Text, {});
      return <View />;
    }
  }
};
