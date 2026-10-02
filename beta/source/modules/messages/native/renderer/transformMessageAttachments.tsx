// Module ID: 12755
// Function ID: 12756
// Name: transformMessageAttachments
// Dependencies: [7379, 1086, 1391, 9764, 4987, 7569, 1370, 7568, 1127, 7588, 7718, 5448, 7586, 2]
// Exports: default

// Module 12755 (transformMessageAttachments)
import Constants from "Constants" /* 1086 */;
import intl6 from "intl" /* 1127 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import FlagUtils from "FlagUtils" /* 1391 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4987 */;
import _modDef5448 from "module_5448" /* 5448 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7379 */;
import sanitizeMediaDimension3 from "sanitizeMediaDimension" /* 7568 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 7569 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 7586 */;
import SuspiciousDownloadUtils from "SuspiciousDownloadUtils" /* 7588 */;
import getDisplayFilenameDefault from "getDisplayFilename" /* 7718 */;
import MediaPlaybackFacts from "MediaPlaybackFacts" /* 9764 */;
import size from "module_2" /* 2 */;

const AttachmentType = RowGeneratorConstants.AttachmentType;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageAttachments.tsx");

export default function transformMessageAttachments(arg0) {
  let attachments;
  let backgroundColor;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let enabledContentHarmTypeFlags;
  let shouldAgeVerify;
  let shouldObscureSpoiler;
  let showDescription;
  ({ attachments, uploadAttachments: require, shouldInlineAttachmentMedia: importDefault, gifAutoPlay: dependencyMap, viewImageDescriptions: AttachmentType, useReducedMotion: MessageAttachmentFlags, shouldObscureSpoiler: closure_5, themedBackgroundColor: closure_6, enabledContentHarmTypeFlags: closure_7, shouldAgeVerify: closure_8, colors: closure_9 } = arg0);
  const found = attachments.filter((flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      const obj = FlagUtils;
      tmp = !obj.hasFlag(flags.flags, MessageAttachmentFlags.IS_THUMBNAIL);
    }
    return tmp;
  });
  return found.map((attachment, index) => {
    let VIDEO;
    let description;
    let duration_secs;
    let filename;
    let flags;
    let height;
    let id;
    let imageSrc;
    let intl;
    let intl3;
    let obj11;
    let placeholder;
    let placeholder_version;
    let proxy_url;
    let size2;
    let str5;
    let string2Result;
    let stringResult;
    let tmp16;
    let tmp33;
    let uploaderId;
    let uploaderItemId;
    let url;
    let waveform;
    let width;
    ({ proxy_url, url, filename, width, height, flags } = attachment);
    ({ size, description, duration_secs, waveform, id, placeholder, placeholder_version } = attachment);
    const obj = MediaPlaybackFacts;
    const result = obj.rememberMediaPlaybackFacts(attachment);
    const obj2 = MediaFormatTesters;
    const isImageFileResult = obj2.isImageFile(filename);
    const obj3 = MediaFormatTesters;
    const isAudioFileResult = obj3.isAudioFile(filename);
    const obj4 = MediaFormatTesters;
    const isVideoFileResult = obj4.isVideoFile(filename);
    let tmp8 = isImageFileResult;
    const obj5 = MediaFormatTesters;
    const isWebPlayerVideoFileResult = obj5.isWebPlayerVideoFile(filename);
    if (!isImageFileResult) {
      tmp8 = isVideoFileResult;
    }
    const tmp9 = null != require && index < require.length;
    if (tmp9) {
      size2 = arr[index];
    }
    FlagUtils;
    const tmp11 = MessageAttachmentFlags;
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj6 = RowGeneratorUtilsDefault;
          imageSrc = obj6.getImageSrc(proxy_url, width, height, !dependencyMap);
        }
        let str4 = "default";
        const tmpResult7 = PlatformUtils;
        if (tmpResult7.isAndroid()) {
          str4 = "default";
          if (isVideoFileResult) {
            str4 = "cronet";
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
        let num4 = 0;
        const sanitizeMediaDimension = sanitizeMediaDimension3.sanitizeMediaDimension;
        sanitizeMediaDimension3;
        if (importDefault) {
          num4 = 0;
          if (tmp8) {
            num4 = 0;
            if (null != width2) {
              num4 = width2;
            }
          }
        }
        const result1 = sanitizeMediaDimension(num4);
        let num5 = 0;
        const sanitizeMediaDimension2 = sanitizeMediaDimension3.sanitizeMediaDimension;
        sanitizeMediaDimension3;
        if (importDefault) {
          num5 = 0;
          if (tmp8) {
            num5 = 0;
            if (null != height2) {
              num5 = height2;
            }
          }
        }
        const result2 = sanitizeMediaDimension2(num5);
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (flags == null) {
          flags = 0;
        }
        let tmp31;
        if (hasFlag(flags, tmp11.IS_CLIP)) {
          const obj7 = { attachmentTagText: intl.string(intl6.t.gESDiU), attachmentTagIconType: "clip", attachmentTagBackgroundColor: null, attachmentTagTextColor: null };
          intl = tmp(1127).intl;
          ({ clipTagBackgroundColor: obj8.attachmentTagBackgroundColor, clipTagTextColor: obj8.attachmentTagTextColor } = closure_9);
          tmp31 = obj7;
        }
        let localUri = imageSrc;
        if (null != size2) {
          localUri = imageSrc;
          if (null != size2.localUri) {
            localUri = imageSrc;
            if (tmp8) {
              localUri = imageSrc;
              if (importDefault) {
                localUri = size2.localUri;
              }
            }
          }
        }
        const size1 = { url: localUri, isSuspiciousDownload: tmp33, videoUrl: tmp16, filename: getDisplayFilenameDefault(attachment), size: obj11.filesize(size), description, alt: str5.toUpperCase(), altTextHint: intl3.string(intl6.t.fSiQ3A), showDescription: AttachmentType, durationSecs: duration_secs, waveform, width: result1, height: result2, hint: stringResult, role: string2Result, attachmentType: VIDEO, id, isAnimated: !MessageAttachmentFlags, uploaderId, uploaderItemId, backgroundColor, placeholder, placeholderVersion: placeholder_version, mediaViewerBufferForPlaybackMs: 1000, mediaViewerBufferForPlaybackAfterRebufferMs: 1000, mediaViewerMinBufferMs: 20000, mediaViewerMaxBufferMs: 20000, mediaViewerEnableDecoderFallback: false, mediaViewerEnableAsyncBufferQueueing: true, mediaViewerHttpEngine: str4, srcIsAnimated: tmp12, inlinePlaybackDisabled: isWebPlayerVideoFileResult };
        tmp33 = null != localUri;
        if (tmp33) {
          const tmpResult11 = SuspiciousDownloadUtils;
          tmp33 = null != tmpResult11.isSuspiciousDownload(localUri);
        }
        obj11 = _modDef5448;
        const intl2 = tmp(1127).intl;
        str5 = intl2.string(intl6.t.jCV1Tz);
        intl3 = tmp(1127).intl;
        const intl4 = tmp(1127).intl;
        const string = intl4.string;
        const t = tmp(1127).t;
        if (isVideoFileResult) {
          stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        const intl5 = tmp(1127).intl;
        const string2 = intl5.string;
        const t2 = tmp(1127).t;
        if (isVideoFileResult) {
          string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        if (isImageFileResult) {
          VIDEO = tmp38.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = tmp38.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? tmp38.AUDIO : tmp38.OTHER;
        }
        uploaderId = undefined;
        if (size2 != null) {
          uploaderId = size2.uploaderId;
        }
        uploaderItemId = undefined;
        if (size2 != null) {
          uploaderItemId = size2.uploaderItemId;
        }
        const obj9 = { attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags, shouldAgeVerify };
        const tmpResult12 = ExplicitMediaUtils;
        const merged = Object.assign(tmpResult12.getAttachmentObscurityProps(obj9));
        const merged1 = Object.assign(tmp31);
        return size1;
      }
    }
    let tmp13 = isVideoFileResult;
    if (tmp13) {
      tmp13 = importDefault || null != size2;
    }
    imageSrc = url;
    if (tmp13) {
      let text = url;
      if (null != proxy_url) {
        text = `${proxy_url}?format=webp`;
      }
      let tmp18 = url;
      if (null != proxy_url) {
        tmp18 = url;
        if ("" !== proxy_url) {
          tmp18 = proxy_url;
        }
      }
      imageSrc = text;
      tmp16 = tmp18;
    }
  });
};
