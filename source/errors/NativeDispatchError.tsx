// Module ID: 4030
// Function ID: 33561
// Name: NativeDispatchError
// Dependencies: []

// Module 4030 (NativeDispatchError)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const DispatchErrorCodes = arg1(dependencyMap[2]).DispatchErrorCodes;
const tmp2 = () => {
  class NativeDispatchError {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, NativeDispatchError);
      this.raw = arg0;
      if (null != arg0.code) {
        self.code = arg0.code;
      }
      if (null != arg0.uuid) {
        self.uuid = arg0.uuid;
      }
      if (null != arg0.application_id) {
        self.applicationId = arg0.application_id;
      }
      if (null != arg0.branch_id) {
        self.branchId = arg0.branch_id;
      }
      if (null != arg0.context) {
        self.context = arg0.context;
      } else {
        self.context = {};
      }
      return;
    }
  }
  const arg1 = NativeDispatchError;
  const items = [
    {
      key: "displayMessage",
      get() {
        let available;
        let required;
        const self = this;
        if (null == this.code) {
          const intl14 = NativeDispatchError(closure_1[3]).intl;
          return intl14.string(NativeDispatchError(closure_1[3]).t.5NMPSS);
        } else {
          const path = self.context.path;
          const code = self.code;
          if (constants.DISK_LOW === code) {
            ({ available, required } = self.context);
            let obj4 = NativeDispatchError(closure_1[4]);
            let obj = { useKibibytes: true };
            const formatSizeResult = obj4.formatSize(available, obj);
            obj = { useKibibytes: true };
            const obj7 = NativeDispatchError(closure_1[4]);
            const intl13 = NativeDispatchError(closure_1[3]).intl;
            const obj1 = { required: NativeDispatchError(closure_1[4]).formatSize(required, obj), available: formatSizeResult };
            return intl13.formatToPlainString(NativeDispatchError(closure_1[3]).t.2DR5dl, obj1);
          } else if (constants.POST_INSTALL_FAILED === code) {
            const intl12 = NativeDispatchError(closure_1[3]).intl;
            const obj2 = { name: self.context.name };
            return intl12.formatToPlainString(NativeDispatchError(closure_1[3]).t.hP0B3A, obj2);
          } else if (constants.FILE_NAME_TOO_LONG === code) {
            const intl11 = NativeDispatchError(closure_1[3]).intl;
            return intl11.string(NativeDispatchError(closure_1[3]).t.FWht5+);
          } else if (constants.POST_INSTALL_CANCELLED === code) {
            const intl10 = NativeDispatchError(closure_1[3]).intl;
            return intl10.string(NativeDispatchError(closure_1[3]).t.9CNxFJ);
          } else if (constants.IO_PERMISSION_DENIED === code) {
            const intl9 = NativeDispatchError(closure_1[3]).intl;
            return intl9.string(NativeDispatchError(closure_1[3]).t.PJx5+Z);
          } else if (constants.NO_MANIFESTS === code) {
            const intl8 = NativeDispatchError(closure_1[3]).intl;
            return intl8.string(NativeDispatchError(closure_1[3]).t.gLM395);
          } else if (constants.NOT_ENTITLED === code) {
            const intl7 = NativeDispatchError(closure_1[3]).intl;
            return intl7.string(NativeDispatchError(closure_1[3]).t.TLCR43);
          } else {
            if (constants.NOT_DIRECTORY !== code) {
              if (constants.DISK_PERMISSION_DENIED !== code) {
                if (constants.INVALID_DRIVE === code) {
                  const intl5 = NativeDispatchError(closure_1[3]).intl;
                  const obj3 = { path };
                  return intl5.formatToPlainString(NativeDispatchError(closure_1[3]).t.08L2TG, obj3);
                } else if (constants.APPLICATION_LOCK_FAILED === code) {
                  const intl4 = NativeDispatchError(closure_1[3]).intl;
                  return intl4.string(NativeDispatchError(closure_1[3]).t.RDYCUV);
                } else if (constants.DISK_FULL === code) {
                  const intl3 = NativeDispatchError(closure_1[3]).intl;
                  return intl3.string(NativeDispatchError(closure_1[3]).t.mojtDJ);
                } else {
                  if (constants.API_ERROR !== code) {
                    if (constants.MAX_REQUEST_RETRIES_EXCEEDED !== code) {
                      const intl = NativeDispatchError(closure_1[3]).intl;
                      obj = {};
                      const _HermesInternal = HermesInternal;
                      obj.code = "" + self.code;
                      return intl.formatToPlainString(NativeDispatchError(closure_1[3]).t.r477WB, obj);
                    }
                  }
                  const intl2 = NativeDispatchError(closure_1[3]).intl;
                  return intl2.string(NativeDispatchError(closure_1[3]).t.OXD41D);
                }
              }
            }
            const intl6 = NativeDispatchError(closure_1[3]).intl;
            obj4 = { path };
            return intl6.formatToPlainString(NativeDispatchError(closure_1[3]).t.EjWbO6, obj4);
          }
        }
      }
    }
  ];
  return callback(NativeDispatchError, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("errors/NativeDispatchError.tsx");

export default tmp2;
