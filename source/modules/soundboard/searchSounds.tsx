// Module ID: 5738
// Function ID: 49328
// Name: trackSearchStart
// Dependencies: [4991, 653, 574, 675, 3771, 5045, 5739, 2]
// Exports: searchSounds, trackSearchResultViewed, trackSearchStart

// Module 5738 (trackSearchStart)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function trackSearchStart(location_stack, channel_id) {
  let obj = importDefault(675);
  obj = { channel_id, search_type: constants2.SOUNDBOARD, location_stack };
  obj.track(constants.SEARCH_STARTED, obj);
}
function trackSearchResultViewed(total_results, location_stack, channel_id, query) {
  let obj = importDefault(675);
  obj = { search_type: constants2.SOUNDBOARD, channel_id, query, total_results: total_results.length, location_stack };
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
}
({ AnalyticEvents: closure_4, SearchTypes: closure_5 } = ME);
let closure_6 = require("debounce")(trackSearchStart, 350);
let closure_7 = require("debounce")(trackSearchResultViewed, 350);
let result = require("debounce").fileFinishedImporting("modules/soundboard/searchSounds.tsx");

export { trackSearchStart };
export { trackSearchResultViewed };
export const searchSounds = function searchSounds(arg0, availableSounds, stateFromStores, channel) {
  let closure_0 = arg0;
  let closure_1 = stateFromStores;
  let closure_2 = channel;
  let _isNativeReflectConstruct = arg4;
  let closure_4 = availableSounds.reduce((arg0, soundId) => {
    let id;
    if (null != id) {
      id = id.id;
    }
    outer1_6(_isNativeReflectConstruct, id);
    arg0[soundId.soundId] = (function getScore(id, name, closure_1, closure_2) {
      const callback = id;
      name = name.name;
      const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      let customEmojiById = null;
      if (null != name.emojiId) {
        customEmojiById = customEmojiById.getCustomEmojiById(name.emojiId);
      }
      let result = null;
      if (null != name.emojiName) {
        result = callback2(3771).convertSurrogateToName(name.emojiName, false);
        const obj2 = callback2(3771);
      }
      let byName = null;
      if (null != result) {
        byName = callback2(3771).getByName(result);
        const obj3 = callback2(3771);
      }
      if (null != customEmojiById) {
        const items = [customEmojiById.name];
        let names = items;
      } else {
        names = undefined;
        if (null != byName) {
          names = byName.names;
        }
        if (null == names) {
          names = [];
        }
      }
      let num3 = 0;
      if (id === toLocaleLowerCaseResult) {
        num3 = 8;
      }
      let sum = num3;
      if (names.includes(id)) {
        sum = num3 + 7;
      }
      let sum1 = sum;
      if (toLocaleLowerCaseResult.startsWith(id)) {
        sum1 = sum + 6;
      }
      let sum2 = sum1;
      if (names.some((str) => str.startsWith(closure_0))) {
        sum2 = sum1 + 5;
      }
      let sum3 = sum2;
      if (toLocaleLowerCaseResult.endsWith(id)) {
        sum3 = sum2 + 4;
      }
      let sum4 = sum3;
      if (names.some((str) => str.endsWith(closure_0))) {
        sum4 = sum3 + 3;
      }
      const name2 = name.name;
      let sum5 = sum4;
      if (tmp14(id, name2.toLocaleLowerCase())) {
        sum5 = sum4 + 2;
      }
      let sum6 = sum5;
      if (names.some((arg0) => callback(table[5])(closure_0, arg0))) {
        sum6 = sum5 + 1;
      }
      let result1 = sum6 > 0;
      if (result1) {
        result1 = callback(5739).canUseSoundboardSound(closure_1, name, closure_2);
        const obj4 = callback(5739);
      }
      let sum7 = sum6;
      if (result1) {
        sum7 = sum6 + 100;
      }
      return sum7;
    })(closure_0.toLocaleLowerCase(), soundId, closure_1, id);
    return arg0;
  }, {});
  const found = availableSounds.filter((arg0) => dependencyMap[arg0.soundId] > 0);
  const sorted = found.sort((arg0, arg1) => dependencyMap[arg1.soundId] - dependencyMap[arg0.soundId]);
  let id;
  if (null != channel) {
    id = channel.id;
  }
  closure_7(sorted, arg4, id, arg0);
  return sorted;
};
