// Module ID: 17471
// Function ID: 17472
// Name: AnimatedAssetSelection
// Dependencies: [2]
// Exports: getVideoFormatMimeType, getVideoFormatUrl, pickWebpSize, selectFormats

// Module 17471 (AnimatedAssetSelection)
import size from "module_2" /* 2 */;

let closure_0 = { renderer: "poster" };
let closure_1 = { webm: "video/webm", mp4: "video/mp4", hevc: "video/mp4; codecs=\"hvc1\"" };
const result = size.fileFinishedImporting("design/components/AnimatedAsset/AnimatedAssetSelection.tsx");

export function selectFormats(asset, arg1) {
  const f112569 = (item) => {
    let hevcUrl;
    if ("webm" === item) {
      hevcUrl = tmp.webmUrl;
    } else if ("mp4" === item) {
      hevcUrl = tmp.mp4Url;
    } else if ("hevc" === item) {
      hevcUrl = tmp.hevcUrl;
    }
    return null != hevcUrl;
  };
  if (asset.hasAlpha) {
    if ("chromium" !== arg1) {
      if ("firefox" !== arg1) {
        if ("safari" !== arg1) {
          if ("ios" !== arg1) {
            if ("android" === arg1) {
              const webpSizes = asset.webpSizes;
              let num3;
              if (webpSizes != null) {
                num3 = webpSizes.length;
              }
              if (num3 == null) {
                num3 = 0;
              }
              let tmp6 = null;
              if (num3 > 0) {
                tmp6 = { renderer: "image", formats: ["webp"] };
                const obj2 = { renderer: "image", formats: ["webp"] };
              }
              if (tmp6 == null) {
                tmp6 = closure_0;
              }
              return tmp6;
            }
          }
        }
        const items = ["hevc"];
        closure_0 = asset;
        const found = items.filter(f112569);
        let tmp8 = null;
        if (found.length > 0) {
          tmp8 = { renderer: "video", formats: found };
          const obj3 = { renderer: "video", formats: found };
        }
        if (tmp8 == null) {
          const webpSizes1 = asset.webpSizes;
          let num6;
          if (webpSizes1 != null) {
            num6 = webpSizes1.length;
          }
          if (num6 == null) {
            num6 = 0;
          }
          let tmp9 = null;
          if (num6 > 0) {
            tmp9 = { renderer: "image", formats: ["webp"] };
            const obj4 = { renderer: "image", formats: ["webp"] };
          }
          tmp8 = tmp9;
        }
        if (tmp8 == null) {
          tmp8 = closure_0;
        }
        return tmp8;
      }
    }
    const items1 = ["webm"];
    closure_0 = asset;
    const found1 = items1.filter(f112569);
    let tmp11 = null;
    if (found1.length > 0) {
      tmp11 = { renderer: "video", formats: found1 };
      const obj5 = { renderer: "video", formats: found1 };
    }
    if (tmp11 == null) {
      tmp11 = closure_0;
    }
    return tmp11;
  }
  if ("ios" === arg1) {
    const items2 = ["mp4"];
    closure_0 = asset;
    const found2 = items2.filter(f112569);
    let tmp4 = null;
    if (found2.length > 0) {
      tmp4 = { renderer: "video", formats: found2 };
      const obj6 = { renderer: "video", formats: found2 };
    }
    if (tmp4 == null) {
      tmp4 = closure_0;
    }
    return tmp4;
  } else {
    const items3 = ["webm", "mp4"];
    closure_0 = asset;
    const found3 = items3.filter(f112569);
    const tmp = null;
    let tmp2 = null;
    if (found3.length > 0) {
      tmp2 = { renderer: "video", formats: found3 };
      const obj = { renderer: "video", formats: found3 };
    }
    if (tmp2 == null) {
      tmp2 = closure_0;
    }
    return tmp2;
  }
}
export function pickWebpSize(arr, arg1) {
  closure_0 = arg1;
  let found = arr.find((width) => width.width >= closure_0);
  if (found == null) {
    found = arr.at(-1);
  }
  return found;
}
export function getVideoFormatUrl(webmUrl, arg1) {
  if ("webm" === arg1) {
    return webmUrl.webmUrl;
  } else if ("mp4" === arg1) {
    return webmUrl.mp4Url;
  } else {
    return "hevc" === arg1 ? webmUrl.hevcUrl : undefined;
  }
}
export function getVideoFormatMimeType(arg0) {
  return closure_1[arg0];
}
