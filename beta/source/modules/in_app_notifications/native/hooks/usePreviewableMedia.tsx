// Module ID: 9590
// Function ID: 9591
// Name: usePreviewableMedia
// Dependencies: [19, 17, 1074, 21, 4836, 4531, 576, 7909, 8176, 9591, 4986, 9593, 6720, 2]
// Exports: usePreviewableMedia

// Module 9590 (usePreviewableMedia)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4986 */;
import isForwardMessageDefault from "isForwardMessage" /* 6720 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import CirclePlayIcon from "CirclePlayIcon" /* 8176 */;
import WaveformIcon from "WaveformIcon" /* 9591 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let StyleSheet;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
function VoiceMessageIcon() {
  let items;
  let items1;
  const tmp = closure_11();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const obj3 = { children: items };
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.BACKGROUND_MOD_SUBTLE);
  size = { width: "100%", height: "100%", viewBox: "0 0 64 61", fill: "none", children: metroImportDefault(inlineStyles.Path, { d: "M22.2188 59.8545C19.5607 61.6263 16.0003 59.7208 16 56.5264V48C7.16344 48 2.5772e-07 40.8366 0 32V16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V32C64 40.8366 56.8366 48 48 48H40L22.2188 59.8545Z", fill: token, stroke: token1 }) };
  const tmp4 = inlineStylesDefault;
  items = [metroImportDefault(tmp4, size), ];
  const obj4 = { style: tmp.voiceMessageIconOverlay, children: items1 };
  items1 = [metroImportDefault(CirclePlayIcon.CirclePlayIcon, { size: "md", color: "background-brand", secondaryColor: "white" }), metroImportDefault(WaveformIcon.WaveformIcon, { size: "md", color: "background-brand" })];
  items[1] = metroImportAll(React3, obj4);
  return metroImportAll(React4, obj3);
}
function getBasePreviewableMedia(arg0) {
  let isForward;
  let message;
  let obj;
  let str10;
  let str11;
  let str12;
  let str6;
  let str7;
  ({ message, isForward } = arg0);
  const items = [];
  if (message.attachments.length > 0) {
    const attachments = message.attachments;
    if (message.hasFlag(metroRequire.IS_VOICE_MESSAGE)) {
      const first = attachments[0];
      const _HermesInternal5 = HermesInternal;
      const push4 = items.push;
      const obj2 = { id: "" + first.id + "-" + obj.VOICE_MESSAGE, type: obj.VOICE_MESSAGE, media: first, icon: metroImportDefault(VoiceMessageIcon, {}), parentType: str10 };
      str10 = null;
      if (isForward) {
        str10 = "forward";
      }
      push4(obj2);
    } else {
      const iter = attachments[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        let filename = nextResult.filename;
        let tmp7 = filename;
        let tmp8 = require;
        obj = MediaFormatTesters;
        if (obj.isImageFile(filename)) {
          let obj3 = { id: "" + tmp6.id + "-" + obj.IMAGE, type: obj.IMAGE, media: tmp6, parentType: str7 };
          let _HermesInternal4 = HermesInternal;
          let push3 = items.push;
          str7 = null;
          if (isForward) {
            str7 = "forward";
          }
          let push3Result = push3(obj3);
        } else {
          let tmp8Result = tmp8(4986);
          if (tmp8Result.isVideoFile(tmp7)) {
            let obj4 = { id: "" + tmp6.id + "-" + obj.VIDEO, type: obj.VIDEO, media: tmp6, parentType: str6 };
            let _HermesInternal3 = HermesInternal;
            let push2 = items.push;
            str6 = null;
            if (isForward) {
              str6 = "forward";
            }
            let push2Result = push2(obj4);
          } else {
            let tmp8Result2 = tmp8(4986);
            let push = items.push;
            let obj5 = { id: null, type: null, media: null, icon: null, parentType: null };
            let id = tmp6.id;
            let tmp13 = obj;
            if (tmp8Result2.isAudioFile(tmp7)) {
              let _HermesInternal2 = HermesInternal;
              obj5.id = "" + id + "-" + tmp13.AUDIO;
              obj5.type = tmp13.AUDIO;
              obj5.media = tmp6;
              obj5.icon = metroImportDefault(tmp8(8176).CirclePlayIcon, { size: "lg", color: "background-brand", secondaryColor: "white" });
              let str5 = null;
              if (isForward) {
                str5 = "forward";
              }
              obj5.parentType = str5;
              let arr = push(obj5);
            } else {
              let _HermesInternal = HermesInternal;
              obj5.id = "" + id + "-" + tmp13.FILE;
              obj5.type = tmp13.FILE;
              obj5.media = tmp6;
              let obj6 = { size: "lg", color: nativeDefault.colors.ICON_SUBTLE };
              let FileIcon = tmp8(9593).FileIcon;
              obj5.icon = metroImportDefault(FileIcon, obj6);
              let str4 = null;
              if (isForward) {
                str4 = "forward";
              }
              obj5.parentType = str4;
              let arr3 = push(obj5);
            }
          }
        }
        continue;
      }
    }
  }
  const iter2 = message.embeds[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp32 = nextResult1;
    if (nextResult1.type === hasOwnProperty.GIFV) {
      let obj7 = { id: "" + tmp32.id + "-" + obj.GIF, type: obj.GIF, media: tmp32, parentType: str11 };
      let _HermesInternal6 = HermesInternal;
      let push5 = items.push;
      str11 = null;
      if (isForward) {
        str11 = "forward";
      }
      let push5Result = push5(obj7);
    }
    continue;
  }
  if (message.stickerItems.length > 0) {
    const first1 = message.stickerItems[0];
    const _HermesInternal7 = HermesInternal;
    const push6 = items.push;
    const obj8 = { id: "" + first1.id + "-" + obj.STICKER, type: obj.STICKER, media: first1, parentType: str12 };
    str12 = null;
    if (isForward) {
      str12 = "forward";
    }
    push6(obj8);
  }
  return items;
}
({ View: closure_4, StyleSheet } = react_native);
({ MessageEmbedTypes: hasOwnProperty, MessageFlags: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const PreviewableMediaTypes = { IMAGE: "image", VIDEO: "video", AUDIO: "audio", FILE: "file", STICKER: "sticker", GIF: "gif", VOICE_MESSAGE: "voice_message" };
let createStyles = createStyles_mod;
let obj2 = { voiceMessageIconOverlay: obj3 };
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: 13 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj2);
let size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx");

export { PreviewableMediaTypes };
export const usePreviewableMedia = function usePreviewableMedia(message) {
  let items = [message];
  return react.useMemo(() => {
    const items = [];
    const obj = { message, isForward: false };
    const items1 = [...getBasePreviewableMedia(obj)];
    items.push.apply(items1);
    const tmp2 = getBasePreviewableMedia;
    if (isForwardMessageDefault(message)) {
      if (message.messageSnapshots.length > 0) {
        const push = items.push;
        const items2 = [];
        const obj2 = { message: message.messageSnapshots[0].message, isForward: true };
        HermesBuiltin.arraySpread(items2, tmp2(obj2), 0);
        HermesBuiltin.apply(push, items2, items);
      }
    }
    return items;
  }, items);
};
