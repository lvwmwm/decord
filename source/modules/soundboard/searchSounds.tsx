// Module ID: 5733
// Function ID: 49301
// Name: trackSearchStart
// Dependencies: [4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295]
// Exports: searchSounds, trackSearchResultViewed, trackSearchStart

// Module 5733 (trackSearchStart)
function trackSearchStart(location_stack, channel_id) {
  let obj = importDefault(dependencyMap[3]);
  obj = { channel_id, search_type: constants2.SOUNDBOARD, location_stack };
  obj.track(constants.SEARCH_STARTED, obj);
}
function trackSearchResultViewed(total_results, location_stack, channel_id, query) {
  let obj = importDefault(dependencyMap[3]);
  obj = { search_type: constants2.SOUNDBOARD, channel_id, query, total_results: total_results.length, location_stack };
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
({ AnalyticEvents: closure_4, SearchTypes: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2])(trackSearchStart, 350);
let closure_7 = importDefault(dependencyMap[2])(trackSearchResultViewed, 350);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/soundboard/searchSounds.tsx");

export { trackSearchStart };
export { trackSearchResultViewed };
export const searchSounds = function searchSounds(arg0, availableSounds, stateFromStores, channel) {
  availableSounds = arg0;
  const importDefault = stateFromStores;
  const dependencyMap = channel;
  let closure_3 = arg4;
  let closure_4 = availableSounds.reduce((arg0, soundId) => {
    let id;
    if (null != arg3) {
      id = arg3.id;
    }
    closure_6(arg4, id);
    arg0[soundId.soundId] = function getScore(id, name, currentUser, channel) {
      name = name.name;
      const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      let customEmojiById = null;
      if (null != name.emojiId) {
        customEmojiById = customEmojiById.getCustomEmojiById(name.emojiId);
      }
      let result = null;
      if (null != name.emojiName) {
        result = callback(closure_2[4]).convertSurrogateToName(name.emojiName, false);
        const obj2 = callback(closure_2[4]);
      }
      let byName = null;
      if (null != result) {
        byName = callback(closure_2[4]).getByName(result);
        const obj3 = callback(closure_2[4]);
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
      if (names.some((str) => str.startsWith(str))) {
        sum2 = sum1 + 5;
      }
      let sum3 = sum2;
      if (toLocaleLowerCaseResult.endsWith(id)) {
        sum3 = sum2 + 4;
      }
      let sum4 = sum3;
      if (names.some((str) => str.endsWith(str))) {
        sum4 = sum3 + 3;
      }
      const name2 = name.name;
      let sum5 = sum4;
      if (tmp14(id, name2.toLocaleLowerCase())) {
        sum5 = sum4 + 2;
      }
      let sum6 = sum5;
      if (names.some((arg0) => callback(closure_2[5])(arg0, arg0))) {
        sum6 = sum5 + 1;
      }
      let result1 = sum6 > 0;
      if (result1) {
        result1 = id(closure_2[6]).canUseSoundboardSound(currentUser, name, channel);
        const obj4 = id(closure_2[6]);
      }
      let sum7 = sum6;
      if (result1) {
        sum7 = sum6 + 100;
      }
      return sum7;
    }(arg0.toLocaleLowerCase(), soundId, arg2, arg3);
    return arg0;
  }, {});
  const found = availableSounds.filter((arg0) => closure_4[arg0.soundId] > 0);
  const sorted = found.sort((arg0, arg1) => closure_4[arg1.soundId] - closure_4[arg0.soundId]);
  let id;
  if (null != channel) {
    id = channel.id;
  }
  closure_7(sorted, arg4, id, arg0);
  return sorted;
};
