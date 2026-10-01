// Module ID: 15827
// Function ID: 15828
// Name: ShowAllVoiceChannelsButton
// Dependencies: [19, 6953, 21, 504, 15828, 1479, 5281, 1115, 5415, 2]

// Module 15827 (ShowAllVoiceChannelsButton)
import Fragment from "Fragment" /* 21 */;
import VoiceCategoryActionCreators from "VoiceCategoryActionCreators" /* 15828 */;
import react from "react" /* 19 */;
import ChannelListVoiceCategoryStore from "ChannelListVoiceCategoryStore" /* 6953 */;
import size from "module_2" /* 2 */;

let guildId;

const jsx = Fragment.jsx;
const memoResult = react.memo((guildId) => {
  let stringResult;
  guildId = guildId.guildId;
  const section = guildId.section;
  const listRef = guildId.listRef;
  let stateFromStores;
  const tmp = guildId;
  let obj = guildId(section[3]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => ChannelListVoiceCategoryStore.isVoiceCategoryCollapsed(guildId));
  const items1 = [stateFromStores, guildId, section, listRef];
  const callback = listRef.useCallback(() => {
    let ref;
    let obj = VoiceCategoryActionCreators;
    if (stateFromStores) {
      obj.voiceCategoryExpand(guildId);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        let obj2;
        let round;
        const current = ref.current;
        if (current != null) {
          const _Math = Math;
          const scrollToLocation = current.scrollToLocation;
          const obj = { animated: false, section, item: 0, paddingStart: round(0.3 * obj2.getWindowDimensions().height) };
          round = Math.round;
          obj2 = guildId(section[5]);
          scrollToLocation(obj);
        }
      }, 0);
    } else {
      const result = obj.voiceCategoryCollapse(guildId);
      let current = listRef.current;
      if (current != null) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const Button = guildId(section[6]).Button;
  const intl = guildId(section[7]).intl;
  const string = intl.string;
  const t = guildId(section[7]).t;
  const tmp2 = section;
  if (stateFromStores) {
    stringResult = string(t["/eB9Bg"]);
  } else {
    stringResult = string(t.Q2gPWl);
  }
  return <Button text={stringResult} icon={tmp5(tmp(tmp2[8]).VoiceNormalIcon, { size: "sm" })} onPress={callback} variant="secondary" size="sm" />;
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx");

export default memoResult;
