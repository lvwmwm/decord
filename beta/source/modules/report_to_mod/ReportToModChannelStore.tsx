// Module ID: 12278
// Function ID: 12279
// Name: ReportToModChannelStore
// Dependencies: [560, 4706, 1248, 7120, 2]
// Exports: useShouldShowResolvedFlagsForChannel

// Module 12278 (ReportToModChannelStore)
import module_560 from "module_560" /* 560 */;
import combine_mod from "combine" /* 4706 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const create = module_560.create;
let combine = combine_mod;
let obj = { name: "report-to-mod-channel-storage", storage: combine.createJSONStorage(() => require("LocalStorageWrapper")) };
const persist = combine.persist;
combine = combine_mod;
let obj2 = create(persist((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    channelShowResolvedFlags: {},
    setShowResolvedFlags(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      let obj = closure_0(dependencyMap[2]);
      return obj.batchUpdates(() => {
        closure_0((channelShowResolvedFlags) => {
          const obj = { channelShowResolvedFlags: obj2 };
          obj2 = {};
          const merged = Object.assign(channelShowResolvedFlags.channelShowResolvedFlags);
          obj2[closure_1_0] = closure_1_1;
          return obj;
        });
      });
    },
    getShowResolvedFlags(arg0) {
      let flag = closure_1().channelShowResolvedFlags[arg0];
      if (flag == null) {
        flag = true;
      }
      return flag;
    }
  };
  return obj;
}, obj));
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModChannelStore.tsx");

export const useReportToModChannelFiltersStore = obj2;
export const useShouldShowResolvedFlagsForChannel = function useShouldShowResolvedFlagsForChannel(arg0) {
  let obj3;
  let closure_0 = arg0;
  const obj = obj2();
  if (null == arg0) {
    obj2 = {
      showResolvedFlags: true,
      setShowResolvedFlags() {

        }
    };
    obj3 = obj2;
  } else {
    let flag = obj.getShowResolvedFlags(arg0);
    if (flag == null) {
      flag = true;
    }
    obj3 = {
      showResolvedFlags: flag,
      setShowResolvedFlags(arg0) {
          return obj.setShowResolvedFlags(closure_0, arg0);
        }
    };
  }
  return obj3;
};
