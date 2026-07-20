// Module ID: 12122
// Function ID: 93400
// Dependencies: []

// Module 12122
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { <string:1639407878>: false, <string:2712621626>: false, <string:1851860316>: false, <string:2852528979>: false, <string:1645961222>: false, backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: importDefault(dependencyMap[4]).space.PX_32 };
obj.container = obj;
obj1 = { marginBottom: importDefault(dependencyMap[4]).space.PX_8, marginTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.text = obj1;
let closure_6 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function MediaModalYoutubeEmbedError(videoId) {
  const arg1 = videoId.videoId;
  const tmp = callback3();
  let obj = { style: tmp.container };
  const items = [callback(arg1(dependencyMap[5]).StreamFailed, { resizeMode: "contain" }), , ];
  obj = { Promise: 24, marginTop: 24, flags: null, style: tmp.text };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.u7vKPs);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  obj = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.text = intl2.string(arg1(dependencyMap[7]).t.LLpxJ5);
  obj.onPress = function onPress() {
    callback(closure_2[9]).openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = callback(arg1(dependencyMap[8]).Button, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default memoResult;
