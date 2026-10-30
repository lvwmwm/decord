// Module ID: 14746
// Function ID: 14747
// Name: MediaModalYoutubeEmbedError
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 5629, 5704, 2]

// Module 14746 (MediaModalYoutubeEmbedError)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5704 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_6 = createStyles(obj);
const memoResult = react.memo(function MediaModalYoutubeEmbedError(videoId) {
  let intl;
  let intl2;
  let items;
  videoId = videoId.videoId;
  const tmp = closure_6();
  let obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(videoId(1114).t.u7vKPs) };
  const Text = videoId(5619).Text;
  intl = videoId(1114).intl;
  items = [closure_4(Text, obj2), ];
  const obj3 = {
    text: intl2.string(videoId(1114).t.LLpxJ5),
    variant: "secondary",
    size: "md",
    shrink: true,
    grow: false,
    onPress() {
      const obj = LinkingDefault;
      obj.openURL("https://youtube.com/watch?v=" + videoId);
    }
  };
  const Button = videoId(5629).Button;
  intl2 = videoId(1114).intl;
  items[1] = closure_4(Button, obj3);
  return closure_5(View, obj);
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalYoutubeEmbedError.tsx");

export default memoResult;
