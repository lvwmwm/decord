// Module ID: 9021
// Function ID: 9022
// Name: useAppChannelApplicationOptions
// Dependencies: [19, 9022, 8501, 6584, 2]
// Exports: useAppChannelApplicationOptions

// Module 9021 (useAppChannelApplicationOptions)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function compareOptions(status, status2) {
  let localeCompareResult;
  if (status.status.supported !== status2.status.supported) {
    let num = 1;
    if (status.status.supported) {
      num = -1;
    }
    localeCompareResult = num;
  } else {
    const name = status.application.name;
    localeCompareResult = name.localeCompare(status2.application.name);
  }
  return localeCompareResult;
}
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelApplicationOptions.tsx");

export const useAppChannelApplicationOptions = function useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId, disabled) {
  let items;
  let flag = disabled;
  if (disabled === undefined) {
    flag = false;
  }
  let data1;
  let data;
  let tmp = data1;
  const useGuildEmbeddedApplications = data1(data[1]).useGuildEmbeddedApplications;
  let tmp4;
  data1(data[1]);
  const APP_CHANNEL = data1(data[2]).EmbeddedSurfaceType.APP_CHANNEL;
  const tmp2 = data;
  if (!flag) {
    tmp4 = guildId;
  }
  const guildEmbeddedApplications = useGuildEmbeddedApplications(APP_CHANNEL, tmp4, channelId);
  data1 = guildEmbeddedApplications.data;
  let isLoading = guildEmbeddedApplications.isLoading;
  const tmpResult = tmp(tmp2[3]);
  const application = tmpResult.useApplication(selectedApplicationId, true);
  data = application.data;
  let obj = {
    options: react.useMemo(() => {
      let id;
      let items = data1;
      if (data1 == null) {
        items = [];
      }
      const items1 = [...items];
      let someResult = null == data;
      const tmp = data;
      if (!someResult) {
        someResult = items1.some((application) => application.application.id === id.id);
      }
      if (!someResult) {
        const obj = { application: tmp, status: { supported: true } };
        items1.push(obj);
      }
      return items1.sort(compareOptions);
    }, items),
    selectedApplication: data,
    isLoading,
    hasNoApplications: tmp7
  };
  items = [data1, data];
  const isLoading2 = application.isLoading;
  if (!isLoading) {
    isLoading = isLoading2;
  }
  return obj;
};
