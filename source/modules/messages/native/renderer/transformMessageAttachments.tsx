// Module ID: 7898
// Function ID: 62867
// Name: transformMessageAttachments
// Dependencies: [7622, 653, 1360, 4317, 7789, 477, 7899, 7788, 1212, 7900, 4671, 7807, 2]
// Exports: default

// Module 7898 (transformMessageAttachments)
import { AttachmentType } from "Changeset";
import { MessageAttachmentFlags } from "ME";

let result = require("hasFlag").fileFinishedImporting("modules/messages/native/renderer/transformMessageAttachments.tsx");

export default function transformMessageAttachments(arg0) {
  let AttachmentType;
  let MessageAttachmentFlags;
  let attachments;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let importDefault;
  let require;
  ({ attachments, uploadAttachments: require, shouldInlineAttachmentMedia: importDefault, gifAutoPlay: dependencyMap, viewImageDescriptions: AttachmentType, useReducedMotion: MessageAttachmentFlags, shouldObscureSpoiler: closure_5, themedBackgroundColor: closure_6, enabledContentHarmTypeFlags: closure_7, shouldAgeVerify: closure_8, colors: closure_9 } = arg0);
  const found = attachments.filter((flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      tmp = !outer1_0(outer1_2[2]).hasFlag(flags.flags, outer1_4.IS_THUMBNAIL);
      const obj = outer1_0(outer1_2[2]);
    }
    return tmp;
  });
  return found.map((attachment) => {
    let description;
    let duration_secs;
    let filename;
    let flags;
    let height;
    let id;
    let placeholder;
    let placeholder_version;
    let proxy_url;
    let size;
    let url;
    let waveform;
    let width;
    ({ proxy_url, url, filename, width, height, flags } = attachment);
    ({ size, description, duration_secs, waveform, id, placeholder, placeholder_version } = attachment);
    let obj = outer1_0(outer1_2[3]);
    const isImageFileResult = obj.isImageFile(filename);
    let obj1 = outer1_0(outer1_2[3]);
    let obj2 = outer1_0(outer1_2[3]);
    const isVideoFileResult = obj2.isVideoFile(filename);
    const isAudioFileResult = obj1.isAudioFile(filename);
    let tmp5 = isImageFileResult;
    const obj4 = outer1_0(outer1_2[3]);
    if (!isImageFileResult) {
      tmp5 = isVideoFileResult;
    }
    let tmp6 = null != length;
    if (tmp6) {
      tmp6 = arg1 < length.length;
    }
    if (tmp6) {
      const size2 = length[arg1];
    }
    outer1_0(outer1_2[2]);
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj5 = outer1_1(outer1_2[4]);
          let imageSrc = obj5.getImageSrc(proxy_url, width, height, !closure_2);
        }
        let str4 = "default";
        if (obj6.isAndroid()) {
          str4 = "default";
          if (isVideoFileResult) {
            const AndroidExoPlayerHttpEngineExperiment = outer1_0(outer1_2[6]).AndroidExoPlayerHttpEngineExperiment;
            obj = { location: "transformMessageAttachments" };
            str4 = AndroidExoPlayerHttpEngineExperiment.getConfig(obj).httpEngine;
          }
        }
        let width2 = width;
        if (null != size2) {
          width2 = width;
          if (size2.width > 0) {
            width2 = size2.width;
          }
        }
        let height2 = height;
        if (null != size2) {
          height2 = height;
          if (size2.height > 0) {
            height2 = size2.height;
          }
        }
        obj6 = outer1_0(outer1_2[5]);
        let num5 = 0;
        if (closure_1) {
          num5 = 0;
          if (tmp5) {
            num5 = 0;
            if (null != width2) {
              num5 = width2;
            }
          }
        }
        const result = outer1_0(outer1_2[7]).sanitizeMediaDimension(num5);
        const obj8 = outer1_0(outer1_2[7]);
        let num6 = 0;
        if (closure_1) {
          num6 = 0;
          if (tmp5) {
            num6 = 0;
            if (null != height2) {
              num6 = height2;
            }
          }
        }
        const result1 = outer1_0(outer1_2[7]).sanitizeMediaDimension(num6);
        const obj9 = outer1_0(outer1_2[7]);
        let num7 = 0;
        if (null != flags) {
          num7 = flags;
        }
        let tmp40;
        if (obj10.hasFlag(num7, outer1_4.IS_CLIP)) {
          obj = {};
          const intl = outer1_0(outer1_2[8]).intl;
          obj.attachmentTagText = intl.string(outer1_0(outer1_2[8]).t.gESDiU);
          obj.attachmentTagIconType = "clip";
          ({ clipTagBackgroundColor: obj11.attachmentTagBackgroundColor, clipTagTextColor: obj11.attachmentTagTextColor } = closure_9);
          tmp40 = obj;
        }
        obj1 = {};
        let localUri = imageSrc;
        if (null != size2) {
          localUri = imageSrc;
          if (null != size2.localUri) {
            localUri = imageSrc;
            if (tmp5) {
              localUri = imageSrc;
              if (closure_1) {
                localUri = size2.localUri;
              }
            }
          }
        }
        obj1.url = localUri;
        obj1.videoUrl = tmp14;
        obj1.filename = outer1_1(outer1_2[9])(attachment);
        obj10 = outer1_0(outer1_2[2]);
        obj1.size = outer1_1(outer1_2[10]).filesize(size);
        obj1.description = description;
        const intl2 = outer1_0(outer1_2[8]).intl;
        const obj13 = outer1_1(outer1_2[10]);
        obj1.alt = intl2.string(outer1_0(outer1_2[8]).t.jCV1Tz).toUpperCase();
        const intl3 = outer1_0(outer1_2[8]).intl;
        obj1.altTextHint = intl3.string(outer1_0(outer1_2[8]).t.fSiQ3A);
        obj1.showDescription = closure_3;
        obj1.durationSecs = duration_secs;
        obj1.waveform = waveform;
        obj1.width = result;
        obj1.height = result1;
        const intl4 = outer1_0(outer1_2[8]).intl;
        const string = intl4.string;
        const t = outer1_0(outer1_2[8]).t;
        if (isVideoFileResult) {
          let stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        obj1.hint = stringResult;
        const intl5 = outer1_0(outer1_2[8]).intl;
        const string2 = intl5.string;
        const t2 = outer1_0(outer1_2[8]).t;
        if (isVideoFileResult) {
          let string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        obj1.role = string2Result;
        if (isImageFileResult) {
          let VIDEO = tmp55.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = tmp55.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? tmp55.AUDIO : tmp55.OTHER;
        }
        obj1.attachmentType = VIDEO;
        obj1.id = id;
        obj1.isAnimated = !closure_4;
        let uploaderId;
        if (null != size2) {
          uploaderId = size2.uploaderId;
        }
        obj1.uploaderId = uploaderId;
        let uploaderItemId;
        if (null != size2) {
          uploaderItemId = size2.uploaderItemId;
        }
        obj1.uploaderItemId = uploaderItemId;
        let tmp60;
        if (null != closure_6) {
          tmp60 = closure_6;
        }
        obj1.backgroundColor = tmp60;
        obj1.placeholder = placeholder;
        obj1.placeholderVersion = placeholder_version;
        obj1.mediaViewerBufferForPlaybackMs = 1000;
        obj1.mediaViewerBufferForPlaybackAfterRebufferMs = 1000;
        obj1.mediaViewerMinBufferMs = 20000;
        obj1.mediaViewerMaxBufferMs = 20000;
        obj1.mediaViewerEnableDecoderFallback = false;
        obj1.mediaViewerEnableAsyncBufferQueueing = true;
        obj1.mediaViewerHttpEngine = str4;
        obj1.srcIsAnimated = tmp11;
        obj1.inlinePlaybackDisabled = isWebPlayerVideoFileResult;
        const str7 = intl2.string(outer1_0(outer1_2[8]).t.jCV1Tz);
        obj2 = { attachment, shouldObscureSpoiler: closure_5, enabledContentHarmTypeFlags: closure_7, shouldAgeVerify: closure_8 };
        const merged = Object.assign(outer1_0(outer1_2[11]).getAttachmentObscurityProps(obj2));
        const merged1 = Object.assign(tmp40);
        return obj1;
      }
    }
    let tmp12 = isVideoFileResult;
    if (isVideoFileResult) {
      let tmp13 = closure_1;
      if (!closure_1) {
        tmp13 = null != size2;
      }
      tmp12 = tmp13;
    }
    imageSrc = url;
    if (tmp12) {
      let text = url;
      if (null != proxy_url) {
        text = `${proxy_url}?format=webp`;
      }
      let tmp17 = url;
      if (null != proxy_url) {
        tmp17 = url;
        if ("" !== proxy_url) {
          tmp17 = proxy_url;
        }
      }
      imageSrc = text;
      tmp14 = tmp17;
    }
  });
};
