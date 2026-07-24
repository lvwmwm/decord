// Module ID: 7436
// Function ID: 59803
// Name: toPerkItems
// Dependencies: [31, 6671, 1851, 666, 6636, 1212, 7437, 7439, 7440, 7442, 7443, 7472, 7474, 7476, 7477, 7479, 7480, 7482, 7483, 7485, 7486, 7488, 7490, 7491, 7493, 7494, 7496, 7498, 4629, 7499, 7500, 7502, 7503, 7505, 7506, 7508, 7510, 7512, 2]
// Exports: default

// Module 7436 (toPerkItems)
import registerAsset from "registerAsset";
import { Gradients } from "items";
import GuildFeatures from "GuildFeatures";
import importDefaultResult from "t";
import importDefaultResult1 from "t";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function toPerkItems(arr) {
  let closure_0 = arr;
  return arr.map((perk) => ({ kind: "perk", perk, start: 0 === arg1, end: arg1 === arr.length - 1 }));
}
({ FractionalPremiumStates: closure_4, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_5, PremiumTypes: closure_6 } = GuildFeatures);
let items = [...Gradients.PREMIUM_TIER_2];
let closure_7 = require("t").scale(items.reverse()).mode("lab");
const scaleResult = require("t").scale(items.reverse());
let items1 = [...Gradients.PREMIUM_TIER_0];
let closure_8 = require("t").scale(items1.reverse()).mode("lab");
const scaleResult1 = require("t").scale(items1.reverse());
let result = require("GuildFeatures").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPerks.tsx");

export default function useBuyNitroPerks(arg0) {
  let closure_0 = arg0;
  let tmp = importDefault(6636)({ forceFetch: true }).fractionalState === constants.FP_ONLY;
  importDefault = tmp;
  let items = [arg0, tmp];
  return React.useMemo(() => {
    let obj = { id: "emoji" };
    const intl = callback(outer1_2[5]).intl;
    obj.label = intl.string(callback(outer1_2[5]).t["R2IV/Q"]);
    const intl2 = callback(outer1_2[5]).intl;
    obj.subLabel = intl2.string(callback(outer1_2[5]).t["3cyhe3"]);
    obj.IconComponent = callback(outer1_2[6]).ReactionIcon;
    obj.includedInNitroBasic = true;
    obj = { image: tmp(outer1_2[7]), description: callback(outer1_2[5]).t["3SUJLd"] };
    obj.detail = obj;
    let items = [obj, , , , , , , , , , , , , , , ];
    obj = { id: "uploads" };
    const intl3 = callback(outer1_2[5]).intl;
    obj.label = intl3.string(callback(outer1_2[5]).t["3BtVbk"]);
    const intl4 = callback(outer1_2[5]).intl;
    obj.labelBasic = intl4.string(callback(outer1_2[5]).t["Zs49/V"]);
    const intl5 = callback(outer1_2[5]).intl;
    obj.subLabel = intl5.string(callback(outer1_2[5]).t["8AhJqy"]);
    obj.IconComponent = callback(outer1_2[8]).UploadIcon;
    obj.includedInNitroBasic = true;
    obj.detail = { image: tmp(outer1_2[9]), description: callback(outer1_2[5]).t.i1UuMk };
    items[1] = obj;
    let obj4 = callback(outer1_2[10]);
    if (obj4.isAppIconsSupported()) {
      let obj2 = { id: "custom-app-icons", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      tmp = callback;
      const intl6 = callback(outer1_2[5]).intl;
      obj2.label = intl6.string(callback(outer1_2[5]).t.OuItFi);
      const intl7 = callback(outer1_2[5]).intl;
      obj2.subLabel = intl7.string(callback(outer1_2[5]).t.mPyrE6);
      obj2.IconComponent = callback(outer1_2[11]).AppsIcon;
      let items1 = [obj2];
      let items2 = items1;
    } else {
      items2 = [];
    }
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
    let obj3 = { id: "profiles" };
    const intl8 = callback(outer1_2[5]).intl;
    obj3.label = intl8.string(callback(outer1_2[5]).t["Gv/rQ6"]);
    const intl9 = callback(outer1_2[5]).intl;
    obj3.subLabel = intl9.string(callback(outer1_2[5]).t["t/Mvdj"]);
    obj3.IconComponent = callback(outer1_2[12]).UserSquareIcon;
    obj3.includedInNitroBasic = false;
    obj4 = { image: tmp(outer1_2[13]), description: callback(outer1_2[5]).t.kWcDK8 };
    obj3.detail = obj4;
    items[arraySpreadResult] = obj3;
    const sum = arraySpreadResult + 1;
    if (tmp) {
      let items3 = [];
    } else {
      const obj5 = { id: "boosts" };
      const intl10 = callback(outer1_2[5]).intl;
      const obj6 = { numBoosts: outer1_5 };
      obj5.label = intl10.formatToPlainString(callback(outer1_2[5]).t.DbkNFj, obj6);
      const intl11 = callback(outer1_2[5]).intl;
      obj5.subLabel = intl11.string(callback(outer1_2[5]).t["n+DGY/"]);
      obj5.IconComponent = callback(outer1_2[14]).BoostGemIcon;
      obj5.includedInNitroBasic = false;
      const obj7 = { image: tmp(outer1_2[15]), description: callback(outer1_2[5]).t.jsyNHm };
      obj5.detail = obj7;
      items3 = [obj5];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items3, sum);
    const obj8 = { id: "streaming" };
    const intl12 = callback(outer1_2[5]).intl;
    obj8.label = intl12.string(callback(outer1_2[5]).t.RSXQYO);
    const intl13 = callback(outer1_2[5]).intl;
    obj8.subLabel = intl13.string(callback(outer1_2[5]).t.ymCPxp);
    obj8.IconComponent = callback(outer1_2[16]).ScreenStreamIcon;
    obj8.includedInNitroBasic = false;
    const obj1 = { image: tmp(outer1_2[9]), description: callback(outer1_2[5]).t.i1UuMk };
    obj8.detail = { image: tmp(outer1_2[17]), description: callback(outer1_2[5]).t.ymCPxp };
    items[arraySpreadResult] = obj8;
    const sum1 = arraySpreadResult + 1;
    const obj10 = { id: "super-reactions" };
    const intl14 = callback(outer1_2[5]).intl;
    obj10.label = intl14.string(callback(outer1_2[5]).t["uZt5q/"]);
    const intl15 = callback(outer1_2[5]).intl;
    obj10.subLabel = intl15.string(callback(outer1_2[5]).t.ZK3ZoX);
    obj10.IconComponent = callback(outer1_2[18]).SuperReactionIcon;
    obj10.includedInNitroBasic = true;
    const obj9 = { image: tmp(outer1_2[17]), description: callback(outer1_2[5]).t.ymCPxp };
    obj10.detail = { image: tmp(outer1_2[19]), description: callback(outer1_2[5]).t.A0U9fk };
    items[sum1] = obj10;
    if (tmp) {
      let items4 = [];
    } else {
      const obj12 = { id: "badge", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      const intl16 = callback(outer1_2[5]).intl;
      obj12.label = intl16.string(callback(outer1_2[5]).t.SS87rQ);
      const intl17 = callback(outer1_2[5]).intl;
      obj12.subLabel = intl17.string(callback(outer1_2[5]).t.oD6CRr);
      obj12.IconComponent = callback(outer1_2[20]).NitroWheelIcon;
      items4 = [obj12];
    }
    const arraySpreadResult1 = HermesBuiltin.arraySpread(items4, sum1 + 1);
    const obj13 = { id: "stickers" };
    const intl18 = callback(outer1_2[5]).intl;
    obj13.label = intl18.string(callback(outer1_2[5]).t.tzdIwI);
    const intl19 = callback(outer1_2[5]).intl;
    obj13.subLabel = intl19.string(callback(outer1_2[5]).t.hJG8ZN);
    obj13.IconComponent = callback(outer1_2[21]).StickerIcon;
    obj13.includedInNitroBasic = true;
    const obj11 = { image: tmp(outer1_2[19]), description: callback(outer1_2[5]).t.A0U9fk };
    obj13.detail = { image: tmp(outer1_2[22]), description: callback(outer1_2[5]).t.FXlU24 };
    items[arraySpreadResult1] = obj13;
    const sum2 = arraySpreadResult1 + 1;
    const obj15 = { id: "custom-sounds" };
    const intl20 = callback(outer1_2[5]).intl;
    obj15.label = intl20.string(callback(outer1_2[5]).t.LWsArT);
    const intl21 = callback(outer1_2[5]).intl;
    obj15.subLabel = intl21.string(callback(outer1_2[5]).t["4lSyCY"]);
    obj15.IconComponent = callback(outer1_2[23]).SoundboardIcon;
    obj15.includedInNitroBasic = false;
    const obj14 = { image: tmp(outer1_2[22]), description: callback(outer1_2[5]).t.FXlU24 };
    obj15.detail = { image: tmp(outer1_2[24]), description: callback(outer1_2[5]).t["4lSyCY"] };
    items[sum2] = obj15;
    const sum3 = sum2 + 1;
    const obj17 = { id: "entrance-sounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl22 = callback(outer1_2[5]).intl;
    obj17.label = intl22.string(callback(outer1_2[5]).t["f4M+H9"]);
    const intl23 = callback(outer1_2[5]).intl;
    obj17.subLabel = intl23.string(callback(outer1_2[5]).t["7ZCYvC"]);
    obj17.IconComponent = callback(outer1_2[25]).DoorEnterIcon;
    items[sum3] = obj17;
    const sum4 = sum3 + 1;
    const obj18 = { id: "video-backgrounds" };
    const intl24 = callback(outer1_2[5]).intl;
    obj18.label = intl24.string(callback(outer1_2[5]).t.NaGpTf);
    const intl25 = callback(outer1_2[5]).intl;
    obj18.subLabel = intl25.string(callback(outer1_2[5]).t["A8O/Qw"]);
    obj18.IconComponent = callback(outer1_2[26]).VideoIcon;
    obj18.includedInNitroBasic = true;
    const obj16 = { image: tmp(outer1_2[24]), description: callback(outer1_2[5]).t["4lSyCY"] };
    obj18.detail = { image: tmp(outer1_2[27]), description: callback(outer1_2[5]).t["A8O/Qw"] };
    items[sum4] = obj18;
    const sum5 = sum4 + 1;
    const obj20 = { id: "longer-messages" };
    const intl26 = callback(outer1_2[5]).intl;
    obj20.label = intl26.string(callback(outer1_2[5]).t.BUScid);
    const intl27 = callback(outer1_2[5]).intl;
    obj20.subLabel = intl27.string(callback(outer1_2[5]).t.vN6XpQ);
    obj20.IconComponent = callback(outer1_2[28]).ChatIcon;
    obj20.includedInNitroBasic = false;
    const obj19 = { image: tmp(outer1_2[27]), description: callback(outer1_2[5]).t["A8O/Qw"] };
    obj20.detail = { image: tmp(outer1_2[29]), description: callback(outer1_2[5]).t.vN6XpQ };
    items[sum5] = obj20;
    const sum6 = sum5 + 1;
    const obj22 = { id: "more-servers" };
    const intl28 = callback(outer1_2[5]).intl;
    obj22.label = intl28.string(callback(outer1_2[5]).t.Bv8Pfk);
    const intl29 = callback(outer1_2[5]).intl;
    obj22.subLabel = intl29.string(callback(outer1_2[5]).t.JMfaTU);
    obj22.IconComponent = callback(outer1_2[30]).ServerGridIcon;
    obj22.includedInNitroBasic = false;
    const obj21 = { image: tmp(outer1_2[29]), description: callback(outer1_2[5]).t.vN6XpQ };
    obj22.detail = { image: tmp(outer1_2[31]), description: callback(outer1_2[5]).t.JMfaTU };
    items[sum6] = obj22;
    const sum7 = sum6 + 1;
    const obj24 = { id: "client-themes" };
    const intl30 = callback(outer1_2[5]).intl;
    obj24.label = intl30.string(callback(outer1_2[5]).t.kWM48G);
    const intl31 = callback(outer1_2[5]).intl;
    obj24.subLabel = intl31.string(callback(outer1_2[5]).t.CjRASJ);
    obj24.IconComponent = callback(outer1_2[32]).PaintPaletteIcon;
    obj24.includedInNitroBasic = false;
    const obj23 = { image: tmp(outer1_2[31]), description: callback(outer1_2[5]).t.JMfaTU };
    obj24.detail = { image: tmp(outer1_2[33]), description: callback(outer1_2[5]).t.jBTTws };
    items[sum7] = obj24;
    const sum8 = sum7 + 1;
    const obj26 = { id: "display-name-styles", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl32 = callback(outer1_2[5]).intl;
    obj26.label = intl32.string(callback(outer1_2[5]).t.OLtTrt);
    const intl33 = callback(outer1_2[5]).intl;
    obj26.subLabel = intl33.string(callback(outer1_2[5]).t["di/pXR"]);
    obj26.IconComponent = callback(outer1_2[34]).LettersIcon;
    items[sum8] = obj26;
    const sum9 = sum8 + 1;
    const obj27 = { id: "permadecos", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl34 = callback(outer1_2[5]).intl;
    obj27.label = intl34.string(callback(outer1_2[5]).t.L14NZN);
    const intl35 = callback(outer1_2[5]).intl;
    obj27.subLabel = intl35.string(callback(outer1_2[5]).t.eCZkAI);
    obj27.IconComponent = callback(outer1_2[35]).TrophyIcon;
    items[sum9] = obj27;
    const sum10 = sum9 + 1;
    const obj28 = { id: "early-access", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl36 = callback(outer1_2[5]).intl;
    obj28.label = intl36.string(callback(outer1_2[5]).t.EYxi0o);
    const intl37 = callback(outer1_2[5]).intl;
    obj28.subLabel = intl37.string(callback(outer1_2[5]).t.M9AIt1);
    obj28.IconComponent = callback(outer1_2[36]).SparklesIcon;
    items[sum10] = obj28;
    const obj29 = { id: "member-pricing", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl38 = callback(outer1_2[5]).intl;
    obj29.label = intl38.string(callback(outer1_2[5]).t["H4/NBN"]);
    const intl39 = callback(outer1_2[5]).intl;
    obj29.subLabel = intl39.string(callback(outer1_2[5]).t.wo3D3T);
    obj29.IconComponent = callback(outer1_2[37]).TagIcon;
    items[sum10 + 1] = obj29;
    tmp = tmp23;
    const mapped = items.map((includedInNitroBasic) => {
      const result = arg1 / items.length;
      const result1 = (arg1 + 1) / items.length;
      let obj = outer2_7(result);
      items = [obj.hex(), outer2_7(result1).hex()];
      const obj2 = outer2_7(result1);
      const items1 = [outer2_8(result).hex(), ];
      const obj3 = outer2_8(result);
      items1[1] = outer2_8(result1).hex();
      let tmp3 = closure_1;
      if (closure_1) {
        tmp3 = !includedInNitroBasic.includedInNitroBasic;
      }
      if (closure_1) {
        if (null != includedInNitroBasic.labelBasic) {
          let label = includedInNitroBasic.labelBasic;
        }
        obj = {};
        const merged = Object.assign(includedInNitroBasic);
        obj["label"] = label;
        obj["iconGradient"] = items;
        obj["iconGradientBasic"] = items1;
        obj["disabled"] = tmp3;
        return obj;
      }
      label = includedInNitroBasic.label;
    });
    const obj30 = { kind: "section-header", id: "explore-perks-header" };
    const intl40 = callback(outer1_2[5]).intl;
    obj30.title = intl40.string(callback(outer1_2[5]).t["eQX+gg"]);
    if (items === outer1_6.TIER_0) {
      const found = mapped.filter((includedInNitroBasic) => includedInNitroBasic.includedInNitroBasic);
      const found1 = mapped.filter((includedInNitroBasic) => !includedInNitroBasic.includedInNitroBasic);
      if (0 === found1.length) {
        const items5 = [obj30];
        HermesBuiltin.arraySpread(outer1_9(found), 1);
        let items6 = items5;
      } else {
        items6 = [obj30, ];
        const arraySpreadResult3 = HermesBuiltin.arraySpread(outer1_9(found), 1);
        const obj31 = { kind: "section-header", id: "nitro-only-perks-header", title: null, highlightNitro: true };
        const intl41 = callback(outer1_2[5]).intl;
        obj31.title = intl41.string(callback(outer1_2[5]).t.YCZldK);
        items6[arraySpreadResult3] = obj31;
        const sum11 = arraySpreadResult3 + 1;
        HermesBuiltin.arraySpread(outer1_9(found1), sum11);
      }
      return items6;
    } else {
      const items7 = [obj30];
      HermesBuiltin.arraySpread(outer1_9(mapped), 1);
      return items7;
    }
    const obj25 = { image: tmp(outer1_2[33]), description: callback(outer1_2[5]).t.jBTTws };
  }, items);
};
