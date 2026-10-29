// Module ID: 12788
// Function ID: 12789
// Name: conjureHomeInspirationEntries
// Dependencies: [1125, 3864, 2]
// Exports: conjureHomeCategoryLabel, conjureHomeInspirationEntries

// Module 12788 (conjureHomeInspirationEntries)
import intl22 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/home/conjureHomeInspirationEntries.tsx");

export function conjureHomeCategoryLabel(category) {
  if ("games" === category) {
    const intl5 = intl22.intl;
    return intl5.string(_modDef3864["JU01/4"]);
  } else if ("apps" === category) {
    const intl4 = intl22.intl;
    return intl4.string(_modDef3864["bvcT/Q"]);
  } else if ("profile_widget" === category) {
    const intl3 = intl22.intl;
    return intl3.string(_modDef3864.GUb2zA);
  } else if ("automod" === category) {
    const intl2 = intl22.intl;
    return intl2.string(_modDef3864["+EKk4D"]);
  } else if ("chat_bot" === category) {
    const intl = intl22.intl;
    return intl.string(_modDef3864.KBHZfO);
  }
}
export function conjureHomeInspirationEntries() {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  const obj = { id: "flappy", category: "games", shortPrompt: intl.string(_modDef3864.gtX7tS), fullPrompt: intl2.string(_modDef3864["Sfa50+"]), name: intl3.string(_modDef3864.Tbag5k), authorAvatarSeed: "1" };
  intl = intl22.intl;
  intl2 = intl22.intl;
  intl3 = intl22.intl;
  const items = [obj, , , , , , ];
  const obj2 = { id: "raid-calendar", category: "apps", shortPrompt: intl4.string(_modDef3864.GNGB59), fullPrompt: intl5.string(_modDef3864.lxwxNm), name: intl6.string(_modDef3864["rzB/bE"]), authorAvatarSeed: "2" };
  intl4 = intl22.intl;
  intl5 = intl22.intl;
  intl6 = intl22.intl;
  items[1] = obj2;
  const obj3 = { id: "aram-widget", category: "profile_widget", shortPrompt: intl7.string(_modDef3864.RzNoHJ), fullPrompt: intl8.string(_modDef3864.VfUFEt), name: intl9.string(_modDef3864.RYGHMF), authorAvatarSeed: "3" };
  intl7 = intl22.intl;
  intl8 = intl22.intl;
  intl9 = intl22.intl;
  items[2] = obj3;
  const obj4 = { id: "trivia", category: "games", shortPrompt: intl10.string(_modDef3864.TGN39X), fullPrompt: intl11.string(_modDef3864.gilNLG), name: intl12.string(_modDef3864.vvwBlz), authorAvatarSeed: "4" };
  intl10 = intl22.intl;
  intl11 = intl22.intl;
  intl12 = intl22.intl;
  items[3] = obj4;
  const obj5 = { id: "spoilers-automod", category: "automod", shortPrompt: intl13.string(_modDef3864.Gw756q), fullPrompt: intl14.string(_modDef3864["d/WMHR"]), name: intl15.string(_modDef3864["v9+fAY"]), authorAvatarSeed: "5" };
  intl13 = intl22.intl;
  intl14 = intl22.intl;
  intl15 = intl22.intl;
  items[4] = obj5;
  const obj6 = { id: "movie-night", category: "apps", shortPrompt: intl16.string(_modDef3864.u4UWGH), fullPrompt: intl17.string(_modDef3864.ofBNNy), name: intl18.string(_modDef3864.DQQdZL), authorAvatarSeed: "6" };
  intl16 = intl22.intl;
  intl17 = intl22.intl;
  intl18 = intl22.intl;
  items[5] = obj6;
  const obj7 = { id: "welcome-bot", category: "chat_bot", shortPrompt: intl19.string(_modDef3864["T3+H3J"]), fullPrompt: intl20.string(_modDef3864.ryeSuC), name: intl21.string(_modDef3864["3deXbx"]), authorAvatarSeed: "7" };
  intl19 = intl22.intl;
  intl20 = intl22.intl;
  intl21 = intl22.intl;
  items[6] = obj7;
  return items;
}
