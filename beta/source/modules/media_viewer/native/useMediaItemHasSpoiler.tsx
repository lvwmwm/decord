// Module ID: 7712
// Function ID: 7713
// Name: useMediaItemHasSpoiler
// Dependencies: [19, 2045, 7708, 7713, 563, 7719, 2]
// Exports: useMediaItemHasSpoiler

// Module 7712 (useMediaItemHasSpoiler)
import MediaSourceUtil from "MediaSourceUtil" /* 7713 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, userRevealedIndexes;

const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemHasSpoiler.tsx");

export const useMediaItemHasSpoiler = function useMediaItemHasSpoiler(index) {
  let memo;
  let state;
  _require = index;
  const tmp = _require;
  const tmp2 = state;
  const MediaViewerSourcesStore = require("useMediaViewerSources").MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((arg0) => arg0.sources[index]);
  const MediaViewerSourcesStore2 = require("useMediaViewerSources").MediaViewerSourcesStore;
  const state1 = MediaViewerSourcesStore2.useState((userRevealedIndexes) => {
    userRevealedIndexes = userRevealedIndexes.userRevealedIndexes;
    return userRevealedIndexes.has(index);
  });
  const items = [state];
  memo = memo.useMemo(() => {
    let flattenSourceResult;
    if (null != state) {
      const obj = MediaSourceUtil;
      flattenSourceResult = obj.flattenSource(tmp);
    }
    return flattenSourceResult;
  }, items);
  let spoiler;
  if (memo != null) {
    spoiler = memo.spoiler;
  }
  let tmp7 = true === spoiler;
  let closure_3 = tmp7;
  const items1 = [closure_3];
  const tmpResult = tmp(tmp2[4]);
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let channel = null;
    if (closure_3) {
      let channelId;
      if (memo != null) {
        channelId = tmp2.channelId;
      }
      channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(tmp2.channelId);
      }
    }
    return channel;
  });
  tmp(tmp2[5]);
  let tmp11 = !state1;
  if (tmp11) {
    let obscure;
    if (memo != null) {
      obscure = memo.obscure;
    }
    let tmp13 = true === obscure;
    if (!tmp13) {
      if (tmp7) {
        tmp7 = tmp10;
      }
      tmp13 = tmp7;
    }
    tmp11 = tmp13;
  }
  return tmp11;
};
