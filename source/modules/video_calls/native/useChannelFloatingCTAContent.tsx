// Module ID: 15618
// Function ID: 119263
// Name: useChannelFloatingCTAContent
// Dependencies: []
// Exports: default

// Module 15618 (useChannelFloatingCTAContent)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default function useChannelFloatingCTAContent(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = channelId.getChannelId() === arg0;
    }
    return tmp;
  });
  const tmp2 = importDefault(dependencyMap[4])();
  const importDefault = tmp2;
  const dependencyMap = stateFromStores;
  const obj = arg1(dependencyMap[3]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled());
  const React = stateFromStores1;
  const items2 = [stateFromStores1, tmp2, stateFromStores];
  return React.useMemo(() => {
    const items = [];
    if (stateFromStores1) {
      items.push(arg0(stateFromStores[5]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
      const tmp2 = stateFromStores;
    }
    if (stateFromStores) {
      items.push(arg0(stateFromStores[5]).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    }
    if (tmp2.some((twoWayLink) => twoWayLink.twoWayLink)) {
      items.push(arg0(stateFromStores[5]).DismissibleContent.DONUT_MOBILE_NUX);
    }
    return items;
  }, items2);
};
