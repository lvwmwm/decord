// Module ID: 14900
// Function ID: 112270
// Dependencies: []

// Module 14900
const importAllResult = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const section = guildId.section;
  const dependencyMap = section;
  const listRef = guildId.listRef;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores.isVoiceCategoryCollapsed(guildId));
  closure_3 = stateFromStores;
  const items1 = [stateFromStores, guildId, section, listRef];
  const callback = listRef.useCallback(() => {
    const obj = guildId(section[4]);
    if (stateFromStores) {
      obj.voiceCategoryExpand(guildId);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (null != current) {
          const obj = { section: closure_1 };
          const _Math = Math;
          obj.paddingStart = Math.round(0.3 * callback(closure_1[5]).getWindowDimensions().height);
          current.scrollToLocation(obj);
          const obj2 = callback(closure_1[5]);
        }
      }, 0);
    } else {
      const result = obj.voiceCategoryCollapse(guildId);
      const current = listRef.current;
      if (null != current) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[7]).t;
  if (stateFromStores) {
    let stringResult = string(t./eB9Bg);
  } else {
    stringResult = string(t.Q2gPWl);
  }
  obj.text = stringResult;
  obj.icon = jsx(arg1(dependencyMap[8]).VoiceNormalIcon, { size: "sm" });
  obj.onPress = callback;
  obj.variant = "secondary";
  obj.size = "sm";
  return jsx(arg1(dependencyMap[6]).Button, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx");

export default memoResult;
