// Module ID: 7897
// Function ID: 62864
// Name: createUploaderAttachments
// Dependencies: [7622, 4317, 7807, 1212, 4664, 2]
// Exports: default

// Module 7897 (createUploaderAttachments)
import { AttachmentType } from "Changeset";

const result = require("getContentScanVersionFromMedia").fileFinishedImporting("modules/messages/native/renderer/transformUploaderAttachments.tsx");

export default function createUploaderAttachments(uploaderFile) {
  let AttachmentType;
  let dependencyMap;
  uploaderFile = uploaderFile.uploaderFile;
  ({ isFailedMessage: dependencyMap, shouldInlineAttachmentMedia: AttachmentType } = uploaderFile);
  const items = uploaderFile.items;
  let mapped;
  if (null != items) {
    mapped = items.map((filename) => {
      filename = filename.filename;
      let str = "";
      let str2 = "";
      if (null != filename) {
        str2 = filename;
      }
      const item = filename.item;
      const originalUri = item.originalUri;
      let tmp = str;
      if (null != originalUri) {
        tmp = originalUri;
      }
      let obj = uploaderFile(outer1_1[1]);
      const isImageFileResult = obj.isImageFile(str2);
      const isVideoFileResult = uploaderFile(outer1_1[1]).isVideoFile(str2);
      const obj2 = uploaderFile(outer1_1[1]);
      const progress = item.progress;
      let num = 0;
      const obj3 = uploaderFile(outer1_1[1]);
      if (null != progress) {
        num = progress;
      }
      const compressionProgress = item.compressionProgress;
      let num2 = 0;
      if (null != compressionProgress) {
        num2 = compressionProgress;
      }
      let num3 = 0.7;
      if (0 === num2) {
        num3 = 0.7;
        if (num > 0) {
          num3 = 0;
        }
      }
      const rounded = Math.floor(num2 * num3 + num * (0.9 - num3) + 10);
      if (!closure_1) {
        const tmp6 = rounded;
      }
      obj = { url: tmp };
      let tmp7;
      if (isVideoFileResult) {
        tmp7 = tmp;
      }
      obj.videoUrl = tmp7;
      const isAudioFileResult = uploaderFile(outer1_1[1]).isAudioFile(str2);
      const merged = Object.assign(uploaderFile(outer1_1[2]).getAttachmentObscurityDefaults());
      obj["filename"] = str2;
      if (null != item.size) {
        str = item.size.toString();
        const str3 = item.size;
      }
      obj["size"] = str;
      obj["showDescription"] = false;
      let num5 = 0;
      if (closure_2) {
        num5 = 0;
        if (null != item.width) {
          num5 = item.width;
        }
      }
      obj["width"] = num5;
      let num6 = 0;
      if (closure_2) {
        num6 = 0;
        if (null != item.height) {
          num6 = item.height;
        }
      }
      obj["height"] = num6;
      const intl = uploaderFile(outer1_1[3]).intl;
      const string = intl.string;
      const t = uploaderFile(outer1_1[3]).t;
      if (isVideoFileResult) {
        let stringResult = string(t["BEWw/7"]);
      } else {
        stringResult = string(t.IPzNKE);
      }
      obj["hint"] = stringResult;
      const intl2 = uploaderFile(outer1_1[3]).intl;
      const string2 = intl2.string;
      const t2 = uploaderFile(outer1_1[3]).t;
      if (isVideoFileResult) {
        let string2Result = string2(t2["/SCpvi"]);
      } else {
        string2Result = string2(t2.fKyfca);
      }
      obj["role"] = string2Result;
      if (isImageFileResult) {
        let VIDEO = tmp12.IMAGE;
      } else if (isVideoFileResult) {
        VIDEO = tmp12.VIDEO;
      } else {
        VIDEO = isAudioFileResult ? tmp12.AUDIO : tmp12.OTHER;
      }
      obj["attachmentType"] = VIDEO;
      obj["progress"] = tmp6;
      obj["uploaderId"] = uploaderFile.id;
      const id = filename.id;
      if (null != id) {
        str = id;
      }
      obj["uploaderItemId"] = str;
      obj["durationSecs"] = item.durationSecs;
      obj["waveform"] = item.waveform;
      let uniqueId;
      if (filename instanceof uploaderFile(outer1_1[4]).CloudUpload) {
        uniqueId = filename.uniqueId;
      }
      obj["id"] = uniqueId;
      return obj;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  return mapped;
};
