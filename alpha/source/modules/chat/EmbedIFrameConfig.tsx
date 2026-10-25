// Module ID: 14232
// Function ID: 14233
// Name: EmbedIFrameConfig
// Dependencies: [1087, 1386, 2]
// Exports: formatProviderSrc

// Module 14232 (EmbedIFrameConfig)
import Constants from "Constants" /* 1087 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import size from "module_2" /* 2 */;

function dynamicParams(autoMute) {
  let mute;
  if (autoMute.autoMute) {
    mute = "1";
  }
  return { mute };
}
const obj = { YOUTUBE: "YouTube", TIKTOK: "TikTok", TWITCH: "Twitch" };
const obj2 = {};
obj2[obj.YOUTUBE] = { params: { autoplay: "1", auto_play: "1", pageType: Constants.YOUTUBE_EMBED_PAGE_TYPE }, dynamicParams };
obj2[obj.TIKTOK] = { params: { utm_source: "discord.gg" } };
const obj5 = {
  stripParams: ["parent"],
  appendParams: { parent: ["discord.co", "discord.com", "discordapp.com", "ptb.discord.com", "canary.discord.com", "localhost"] },
  params: { autoplay: "true" },
  dynamicParams(autoMute) {
    let muted;
    if (autoMute.autoMute) {
      muted = "true";
    }
    return { muted };
  }
};
obj2[obj.TWITCH] = obj5;
const obj3 = { params: { autoplay: "1", auto_play: "1", pageType: Constants.YOUTUBE_EMBED_PAGE_TYPE }, dynamicParams };
({ autoplay: "1", auto_play: "1", pageType: Constants.YOUTUBE_EMBED_PAGE_TYPE });
let result = size.fileFinishedImporting("modules/chat/EmbedIFrameConfig.tsx");

export const EMBED_IFRAME_SANDBOX = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
export const SupportedEmbedIFrame = obj;
export const formatProviderSrc = function formatProviderSrc(uri, cResult, arg2) {
  let str = uri;
  const toURLSafe = URLUtilsDefault.toURLSafe;
  URLUtilsDefault;
  if (uri == null) {
    str = "";
  }
  const str2 = toURLSafe(str);
  if (null === str2) {
    return "";
  } else if (null == obj2[cResult]) {
    return str2.toString();
  } else {
    if (null != obj2[cResult].stripParams) {
      const stripParams = obj.stripParams;
      for (const item10016 of stripParams) {
        let searchParams = str2.searchParams;
        let deleteResult = searchParams.delete(item10016);
        continue;
      }
    }
    if (null != obj2[cResult].params) {
      for (const key10025 in obj.params) {
        let searchParams4 = str2.searchParams;
        let result = searchParams4.set(key10025, obj.params[key10025]);
        continue;
      }
    }
    if (null != obj2[cResult].appendParams) {
      for (const key10029 in obj.appendParams) {
        let tmp14 = obj.appendParams[key10029];
        for (const item10031 of tmp14) {
          let searchParams2 = str2.searchParams;
          let appendResult = searchParams2.append(key10029, item10031);
          continue;
        }
      }
    }
    if (null != obj2[cResult].dynamicParams) {
      const dynamicParamsResult = obj2[cResult].dynamicParams(arg2);
      for (const key10043 in dynamicParamsResult) {
        let tmp17 = dynamicParamsResult[key10043];
        if (null == tmp17) {
          continue;
        } else {
          let searchParams3 = str2.searchParams;
          let result1 = searchParams3.set(key10043, tmp17);
          continue;
        }
        continue;
      }
    }
    return str2.toString();
  }
};
