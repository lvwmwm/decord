// Module ID: 12395
// Function ID: 94749
// Name: PerkText
// Dependencies: []
// Exports: default

// Module 12395 (PerkText)
function PerkText(children) {
  return jsx(arg1(dependencyMap[7]).Text, { children: children.powerup.title });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { padding: importDefault(dependencyMap[5]).space.PX_12 };
const obj4 = importDefault(dependencyMap[6])("#000000");
obj.backgroundColor = importDefault(dependencyMap[6])("#000000").alpha(0.18).hex();
obj.container = obj;
const obj1 = { textAlign: "center" };
const alphaResult = importDefault(dependencyMap[6])("#000000").alpha(0.18);
const obj7 = importDefault(dependencyMap[6])("#FFFFFF");
obj1.color = importDefault(dependencyMap[6])("#FFFFFF").alpha(0.5).hex();
obj.text = obj1;
let closure_7 = obj.createStyles(obj);
const alphaResult1 = importDefault(dependencyMap[6])("#FFFFFF").alpha(0.5);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default function GuildPowerupsMarketingHeader(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const tmp = callback();
  const arr = importDefault(dependencyMap[8])(guild.id);
  const items = [guild.id];
  const effect = React.useEffect(() => {
    if (closure_5.shouldFetchCatalogForGuild(guild.id)) {
      const powerupCatalogForGuild = guild(closure_2[9]).fetchPowerupCatalogForGuild(guild.id);
      const obj = guild(closure_2[9]);
    }
  }, items);
  if (importDefault(dependencyMap[10])(guild.id)) {
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
      const intl = arg1(dependencyMap[11]).intl;
      obj = {};
      let str3 = "";
      if (null != arr) {
        str3 = "";
        if (0 !== arr.length) {
          let first = importDefault(dependencyMap[13])(arr);
          if (1 === first.length) {
            const obj1 = {};
            first = first[0];
            obj1.powerup = first;
            let formatResult = <PerkText {...obj1} />;
          } else {
            const intl2 = arg1(dependencyMap[11]).intl;
            const obj2 = {};
            const obj3 = { powerup: first[0] };
            obj2.perk1 = <PerkText {...obj3} />;
            const obj4 = { powerup: first[1] };
            obj2.perk2 = <PerkText {...obj4} />;
            formatResult = intl2.format(importDefault(dependencyMap[12]).MNO3sG, obj2);
          }
        }
      }
      obj.perks = str3;
      obj.children = intl.format(importDefault(dependencyMap[12]).7lwpzR, obj);
      obj.children = jsx(arg1(dependencyMap[7]).Text, obj);
      return <View {...obj} />;
    }
  }
};
