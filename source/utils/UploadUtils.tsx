// Module ID: 4663
// Function ID: 40482
// Name: items
// Dependencies: []
// Exports: getAttachmentPayload, getFile, getFileContentLength, getFileData

// Module 4663 (items)
let obj = {
  reName: /\.jpe?g$/i,
  name(arg0) {
    return "image" + arg0 + ".jpg";
  },
  type: "image/jpeg"
};
const items = [
  obj,
  {
    reName: /\.jfif$/i,
    name(arg0) {
      return "image" + arg0 + ".jpg";
    },
    type: "image/jpeg"
  },
,
,
,
,
,
,
,
,
,
,
,

];
obj = {
  reName: /\.png$/i,
  name(arg0) {
    return "image" + arg0 + ".png";
  },
  type: "image/png"
};
items[2] = obj;
obj = {
  reName: /\.gif$/i,
  name(arg0) {
    return "image" + arg0 + ".gif";
  },
  type: "image/gif"
};
items[3] = obj;
items[4] = {
  reName: /\.webp$/i,
  name(arg0) {
    return "image" + arg0 + ".webp";
  },
  type: "image/webp"
};
items[5] = {
  reName: /\.avif$/i,
  name(arg0) {
    return "image" + arg0 + ".avif";
  },
  type: "image/avif"
};
items[6] = {
  reName: /\.heic$/i,
  name(arg0) {
    return "image" + arg0 + ".heic";
  },
  type: "image/heic"
};
items[7] = {
  reName: /\.heif$/i,
  name(arg0) {
    return "image" + arg0 + ".heif";
  },
  type: "image/heif"
};
items[8] = {
  reName: /\.dng$/i,
  name(arg0) {
    return "image" + arg0 + ".dng";
  },
  type: "image/x-adobe-dng"
};
items[9] = {
  reName: /\.mov$/i,
  name(arg0) {
    return "video" + arg0 + ".mov";
  },
  type: "video/quicktime"
};
items[10] = {
  reName: /\.qt$/i,
  name(arg0) {
    return "video" + arg0 + ".qt";
  },
  type: "video/quicktime"
};
items[11] = {
  reName: /\.avi$/i,
  name(arg0) {
    return "video" + arg0 + ".avi";
  },
  type: "video/x-msvideo"
};
items[12] = {
  reName: /\.mp4$/i,
  name(arg0) {
    return "video" + arg0 + ".mp4";
  },
  type: "video/mp4"
};
items[13] = {
  reName: /\.webm$/i,
  name(arg0) {
    return "video" + arg0 + ".webm";
  },
  type: "image/webm"
};
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/UploadUtils.tsx");

export const MAX_TOTAL_ATTACHMENT_SIZE = 524288000;
export const MAX_TOTAL_ATTACHMENT_SIZE_MB = 500;
export const getAttachmentPayload = function getAttachmentPayload(id, arg1, name) {
  let tmp = arg1;
  let filename = name;
  if (arg1 === undefined) {
    tmp = null;
  }
  const obj = {};
  let str;
  if (null != tmp) {
    str = tmp.toString();
  }
  if (null == str) {
    str = id.id;
  }
  obj.id = str;
  if (null != id.description) {
    obj.description = id.description;
  }
  if (null == filename) {
    filename = id.filename;
  }
  obj.filename = filename;
  obj.uploaded_filename = id.uploadedFilename;
  if (id.spoiler) {
    obj.is_spoiler = true;
  }
  if (tmp3) {
    obj.duration_secs = id.durationSecs;
  }
  if (tmp4) {
    obj.waveform = id.waveform;
  }
  let tmp5 = "isThumbnail" in id;
  if (tmp5) {
    tmp5 = true === id.isThumbnail;
  }
  if (tmp5) {
    obj.is_thumbnail = id.isThumbnail;
  }
  if (tmp6) {
    obj.is_clip = true;
    obj.title = id.clip.name;
    obj.application_id = id.clip.applicationId;
    obj.clip_created_at = require(dependencyMap[0]).getClipCreatedAt(id.clip.createdAt);
    const obj2 = require(dependencyMap[0]);
    obj.clip_participant_ids = require(dependencyMap[0]).getClipParticipantIds(id.clip.users);
    obj.clip_remote_id = id.clip.remoteClipId;
    const obj3 = require(dependencyMap[0]);
    obj.clip_events_timeline = require(dependencyMap[0]).getClipEventsTimeline(id.clip);
    const obj4 = require(dependencyMap[0]);
  }
  let tmp9 = "item" in id && null != id.item;
  if (tmp9) {
    tmp9 = id.item.platform === require(dependencyMap[1]).UploadPlatform.WEB;
  }
  if (tmp9) {
    str = "mimeType";
    tmp9 = "mimeType" in id;
  }
  if (tmp9) {
    tmp9 = null != id.mimeType;
  }
  if (tmp9) {
    obj.original_content_type = id.mimeType;
  }
  return obj;
};
export const getFileData = function getFileData(arg0) {
  const require = arg0;
  const xMLHttpRequest = new XMLHttpRequest();
  const dependencyMap = xMLHttpRequest;
  return new Promise((arg0, arg1) => {
    const xMLHttpRequest = arg1;
    xMLHttpRequest.open("GET", arg0, true);
    xMLHttpRequest.responseType = "blob";
    xMLHttpRequest.onabort = (arg0) => arg1(arg0);
    xMLHttpRequest.onerror = (arg0) => arg1(arg0);
    xMLHttpRequest.ontimeout = (arg0) => arg1(arg0);
    xMLHttpRequest.onload = () => {
      let data;
      if (null != arg1) {
        const response = arg1.response;
        if (null != response) {
          data = response.data;
        }
      }
      return arg0(data);
    };
    xMLHttpRequest.send();
  });
};
export const getFileContentLength = function getFileContentLength(arg0) {
  const require = arg0;
  return new Promise((arg0, onerror) => {
    const xMLHttpRequest = new XMLHttpRequest();
    xMLHttpRequest.open("HEAD", arg0, true);
    xMLHttpRequest.onload = () => {
      if (xMLHttpRequest.status >= 200) {
        if (xMLHttpRequest.status < 300) {
          const responseHeader = xMLHttpRequest.getResponseHeader("Content-Length");
          if (null != responseHeader) {
            if ("" !== responseHeader) {
              const _parseInt = parseInt;
              arg0(parseInt(responseHeader, 10));
            }
          }
          const _Error = Error;
          const error = new Error("Content-Length header is missing");
          arg1(error);
        }
      }
      const error1 = new Error("HTTP request failed with status code " + xMLHttpRequest.status);
      arg1(error1);
    };
    xMLHttpRequest.onerror = onerror;
    xMLHttpRequest.onabort = onerror;
    xMLHttpRequest.ontimeout = onerror;
    xMLHttpRequest.send();
  });
};
export const getFile = function getFile(overrideType) {
  let i;
  let overrideFilename;
  let uri;
  ({ uri, i, overrideFilename } = overrideType);
  const require = overrideFilename;
  overrideType = overrideType.overrideType;
  const parts = uri.split("/");
  let dependencyMap = str;
  const parts1 = str.split("?");
  let formatted;
  if (null != parts1) {
    if (null != parts1[0]) {
      formatted = str2.toLowerCase();
    }
  }
  let str3 = "";
  let str4 = "";
  if (null != formatted) {
    str4 = formatted;
  }
  dependencyMap = str4;
  let found = items.find((reName) => {
    reName = reName.reName;
    return reName.test(str4);
  });
  if (tmp3) {
    found = items.find((reName) => {
      reName = reName.reName;
      return reName.test(overrideFilename);
    });
  }
  if (null != found) {
    if (null != overrideFilename) {
      const parts2 = found.name(i).split(".");
      const arr = parts2.pop();
      const lastIndexOfResult = overrideFilename.lastIndexOf(".");
      if (-1 !== lastIndexOfResult) {
        const _HermesInternal2 = HermesInternal;
        let combined = str3 + overrideFilename.substr(0, lastIndexOfResult) + "." + arr;
      } else {
        const _HermesInternal = HermesInternal;
        combined = str3 + overrideFilename + "." + arr;
      }
      const str6 = found.name(i);
    }
  }
  if (null != found) {
    let str5 = found.name(i);
  } else {
    str5 = "unknown";
    if (null != overrideFilename) {
      str5 = overrideFilename;
    }
  }
  const obj = { uri, filename: str5 };
  let tmp11 = overrideType;
  if (null == overrideType) {
    let type;
    if (null != found) {
      type = found.type;
    }
    tmp11 = type;
  }
  let str8 = "unknown";
  if (null != tmp11) {
    str8 = tmp11;
  }
  obj.type = str8;
  let tmp13 = overrideType;
  if (null == overrideType) {
    let nameResult;
    if (null != found) {
      nameResult = found.name(i);
    }
    tmp13 = nameResult;
  }
  let arr3 = str3;
  if (null != tmp13) {
    arr3 = tmp13;
  }
  obj.isVideo = -1 !== arr3.indexOf("video");
  if (null == overrideType) {
    let nameResult1;
    if (null != found) {
      nameResult1 = found.name(i);
    }
    overrideType = nameResult1;
  }
  if (null != overrideType) {
    str3 = overrideType;
  }
  obj.isImage = -1 !== str3.indexOf("image");
  return obj;
};
