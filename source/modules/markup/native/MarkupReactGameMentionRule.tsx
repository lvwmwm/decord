// Module ID: 12733
// Function ID: 97676
// Name: MarkupGameMention
// Dependencies: []
// Exports: default

// Module 12733 (MarkupGameMention)
importAll(dependencyMap[0]);
({ jsxs: closure_3, jsx: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { 2018655073: false, 1669594568: false, 1045670548: false, -460645489: false, borderRadius: importDefault(dependencyMap[3]).radii.xs };
obj.icon = obj;
const tmp3 = arg1(dependencyMap[1]);
obj.chip = { backgroundColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[3]).radii.xs, paddingHorizontal: 2 };
const obj1 = { backgroundColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[3]).radii.xs, paddingHorizontal: 2 };
obj.chipText = { color: importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500 };
let closure_5 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[3]).unsafe_rawColors.BRAND_500 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default function MarkupGameMention(arg0) {
  let gameName;
  let icon;
  let node;
  let state;
  ({ node, state } = arg0);
  const arg1 = state;
  const tmp = callback2();
  ({ gameId: closure_1, gameName, icon } = node);
  const intl = arg1(dependencyMap[4]).intl;
  const stringResult = intl.string(arg1(dependencyMap[4]).t.11pdXZ);
  let tmp3 = null != gameName;
  if (tmp3) {
    tmp3 = "" !== gameName;
  }
  let tmp4 = stringResult;
  if (tmp3) {
    tmp4 = gameName;
  }
  if (tmp3) {
    let obj = { size: "sm", style: tmp.icon };
    let tmp13 = null != icon;
    if (tmp13) {
      tmp13 = "" !== icon;
    }
    let tmp14 = callback(arg1(dependencyMap[6]).UnknownGameIcon, obj);
    if (tmp13) {
      obj = { style: tmp.icon };
      const obj1 = { uri: icon };
      obj.source = obj1;
      tmp14 = callback(importDefault(dependencyMap[7]), obj);
    }
    const obj2 = {};
    let str4 = "button";
    if (state.noStyleAndInteraction) {
      str4 = "text";
    }
    obj2.accessibilityRole = str4;
    obj2.style = tmp.chip;
    let textColor;
    if (null != state) {
      textColor = state.textColor;
    }
    obj2.color = textColor;
    let fn;
    if (!state.noStyleAndInteraction) {
      fn = () => {
        let obj = callback(closure_2[8]);
        obj = { gameId: callback, gameProfileModalChecks: obj, source: state(closure_2[9]).GameProfileSources.GameMention, sourceUserId: state.authorId };
        obj = { shouldOpenGameProfile: true, gameId: callback };
        obj.openGameProfileModal(obj);
      };
    }
    obj2.onPress = fn;
    const items = [tmp14, ];
    const obj3 = { variant: "text-sm/medium", style: tmp.chipText, children: tmp4 };
    items[1] = callback(arg1(dependencyMap[10]).Text, obj3);
    obj2.children = items;
    return closure_3(arg1(dependencyMap[5]).MarkupText, obj2, state.key);
  } else {
    obj = {};
    let textColor1;
    if (null != state) {
      textColor1 = state.textColor;
    }
    obj.color = textColor1;
    const items1 = [null, stringResult];
    obj.children = items1;
    return closure_3(arg1(dependencyMap[5]).MarkupText, obj, state.key);
  }
};
